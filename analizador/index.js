import fs from 'fs';
import antlr4 from 'antlr4';
import GramaticaLexer from './generated/GramaticaLexer.js';
import GramaticaParser from './generated/GramaticaParser.js';

// Leer el nombre del archivo de texto que pasamos por consola
const fileName = process.argv[2];
if (!fileName) {
    console.error("❌ Por favor, indica el archivo a evaluar. Ejemplo: node index.js input_correcto_1.txt");
    process.exit(1);
}

try {
    // 1. Leemos el archivo de prueba
    const input = fs.readFileSync(fileName, 'utf8');
    
    // 2. Pasamos el texto al Lexer que separa las palabras y símbolos
    const chars = new antlr4.InputStream(input);
    const lexer = new GramaticaLexer(chars);
    
    // 3. Pasamos los símbolos al Parser que va a evaluar la gramática
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new GramaticaParser(tokens);
    parser.buildParseTrees = true;

    // 4. Iniciamos el análisis desde la regla principal ("formula")
    const tree = parser.inicio();

    // 5. Verificamos si hubo errores
    if (parser._syntaxErrors > 0) {
        console.log(`❌ El archivo '${fileName}' tiene errores de sintaxis.`);
    } else {
        console.log(`✅ El archivo '${fileName}' es SINTÁCTICAMENTE CORRECTO.`);
    }
} catch (error) {
    console.error(`Error leyendo el archivo ${fileName}:`, error.message);
}