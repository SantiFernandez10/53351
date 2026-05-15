// Generated from Gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,52,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,1,1,1,1,2,1,2,1,3,
1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,5,6,37,8,6,10,6,12,6,40,9,6,1,7,1,7,1,8,
1,8,1,9,4,9,47,8,9,11,9,12,9,48,1,9,1,9,0,0,10,1,1,3,2,5,3,7,4,9,5,11,6,
13,7,15,0,17,0,19,8,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,
52,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,0,13,1,0,0,0,0,19,1,0,0,0,1,21,1,0,0,0,3,23,1,0,0,0,5,25,1,0,0,0,7,27,
1,0,0,0,9,29,1,0,0,0,11,31,1,0,0,0,13,33,1,0,0,0,15,41,1,0,0,0,17,43,1,0,
0,0,19,46,1,0,0,0,21,22,5,8594,0,0,22,2,1,0,0,0,23,24,5,8744,0,0,24,4,1,
0,0,0,25,26,5,8743,0,0,26,6,1,0,0,0,27,28,5,172,0,0,28,8,1,0,0,0,29,30,5,
40,0,0,30,10,1,0,0,0,31,32,5,41,0,0,32,12,1,0,0,0,33,38,3,15,7,0,34,37,3,
15,7,0,35,37,3,17,8,0,36,34,1,0,0,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,
0,0,0,38,39,1,0,0,0,39,14,1,0,0,0,40,38,1,0,0,0,41,42,7,0,0,0,42,16,1,0,
0,0,43,44,7,1,0,0,44,18,1,0,0,0,45,47,7,2,0,0,46,45,1,0,0,0,47,48,1,0,0,
0,48,46,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,6,9,0,0,51,20,1,0,0,0,
4,0,36,38,48,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class GramaticaLexer extends antlr4.Lexer {

    static grammarFileName = "Gramatica.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\\u2192'", "'\\u2228'", "'\\u2227'", "'\\u00AC'", 
                         "'('", "')'" ];
	static symbolicNames = [ null, "IMPLIES", "OR", "AND", "NOT", "LPAREN", 
                          "RPAREN", "VARIABLE", "WS" ];
	static ruleNames = [ "IMPLIES", "OR", "AND", "NOT", "LPAREN", "RPAREN", 
                      "VARIABLE", "LETTER", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

GramaticaLexer.EOF = antlr4.Token.EOF;
GramaticaLexer.IMPLIES = 1;
GramaticaLexer.OR = 2;
GramaticaLexer.AND = 3;
GramaticaLexer.NOT = 4;
GramaticaLexer.LPAREN = 5;
GramaticaLexer.RPAREN = 6;
GramaticaLexer.VARIABLE = 7;
GramaticaLexer.WS = 8;



