import fs from 'fs';
import antlr4 from 'antlr4';
import GramaticaLexer from './generated/GramaticaLexer.js';
import GramaticaParser from './generated/GramaticaParser.js';
import GramaticaVisitor from './generated/GramaticaVisitor.js';

// --- IMPLEMENTACIÓN DE LA SEMÁNTICA (PUNTO 6) ---
// Este Visitor traduce la lógica proposicional a código JavaScript
class TraductorJSVisitor extends GramaticaVisitor {
    visitInicio(ctx) {
        return this.visit(ctx.formula());
    }
    visitFormula(ctx) {
        return this.visit(ctx.implication());
    }
    visitImplication(ctx) {
        if (ctx.implication()) {
            // A → B equivale a !A || B en JavaScript
            const izq = this.visit(ctx.disjunction());
            const der = this.visit(ctx.implication());
            return `(!(${izq}) || (${der}))`;
        }
        return this.visit(ctx.disjunction());
    }
    visitDisjunction(ctx) {
        const conj = ctx.conjunction();
        let traduccion = this.visit(conj[0]);
        for (let i = 1; i < conj.length; i++) {
            traduccion += ` || ${this.visit(conj[i])}`;
        }
        return traduccion;
    }
    visitConjunction(ctx) {
        const neg = ctx.negation();
        let traduccion = this.visit(neg[0]);
        for (let i = 1; i < neg.length; i++) {
            traduccion += ` && ${this.visit(neg[i])}`;
        }
        return traduccion;
    }
    visitNegation(ctx) {
        if (ctx.NOT()) {
            return `!(${this.visit(ctx.negation())})`;
        }
        return this.visit(ctx.primary());
    }
    visitPrimary(ctx) {
        if (ctx.VARIABLE()) {
            return ctx.VARIABLE().getText();
        }
        return `(${this.visit(ctx.formula())})`;
    }
}

// --- PROGRAMA PRINCIPAL ---
const fileName = process.argv[2];
if (!fileName) {
    console.error("❌ Por favor, indica el archivo a evaluar.");
    process.exit(1);
}

try {
    const input = fs.readFileSync(fileName, 'utf8');
    const chars = new antlr4.InputStream(input);
    const lexer = new GramaticaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new GramaticaParser(tokens);
    parser.buildParseTrees = true;

    // Generar el árbol
    const tree = parser.inicio();

    console.log(`\n========================================`);
    console.log(`📁 ANALIZANDO ARCHIVO: ${fileName}`);
    console.log(`========================================\n`);

    if (parser._syntaxErrors > 0) {
        console.log(`❌ RESULTADO: El archivo tiene errores de sintaxis (ver detalles arriba).\n`);
    } else {
        console.log(`✅ RESULTADO: Análisis sintáctico correcto.\n`);

        // PUNTO 4: Mostrar el Árbol de Derivación
        console.log(`--- ÁRBOL DE DERIVACIÓN ---`);
        console.log(tree.toStringTree(parser.ruleNames));
        console.log(`\n`);

        // PUNTO 5: Generar tabla de Lexemas - Tokens
        console.log(`--- TABLA DE LEXEMAS Y TOKENS ---`);
        tokens.fill();
        for (let token of tokens.tokens) {
            if (token.type !== -1) { // Ignorar el token invisible EOF
                let tokenName = parser.symbolicNames[token.type] || "DESCONOCIDO";
                console.log(`Lexema: '${token.text}' \t-> Token: ${tokenName}`);
            }
        }
        console.log(`\n`);

        // PUNTO 6: Traducción Semántica
        console.log(`--- TRADUCCIÓN A JAVASCRIPT (SEMÁNTICA) ---`);
        const traductor = new TraductorJSVisitor();
        const codigoJS = traductor.visit(tree);
        console.log(`Código Original:  ${input.trim()}`);
        console.log(`Traducción JS:    ${codigoJS}\n`);
    }

} catch (error) {
    console.error(`Error procesando:`, error.message);
}