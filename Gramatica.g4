grammar Gramatica;

//REGLAS SINTÁCTICAS
// Agregamos EOF al final para que se analice todo el archivo
inicio : formula EOF ;

formula : implication ;

implication : disjunction ( IMPLIES implication )? ;

disjunction : conjunction ( OR conjunction )* ;

conjunction : negation ( AND negation )* ;

negation : NOT negation 
         | primary ;

primary : VARIABLE 
        | LPAREN formula RPAREN ;

//REGLAS LÉXICAS
IMPLIES : '→' ;
OR      : '∨' ;
AND     : '∧' ;
NOT     : '¬' ;
LPAREN  : '(' ;
RPAREN  : ')' ;

VARIABLE : LETTER (LETTER | DIGIT)* ;

// Usamos fragment porque no son tokens en si, sino partes de variable
fragment LETTER : [a-zA-Z] ;
fragment DIGIT  : [0-9] ;

// Ignoramos espacios en blanco y saltos de línea
WS : [ \t\r\n]+ -> skip ;