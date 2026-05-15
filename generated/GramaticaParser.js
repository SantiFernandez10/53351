// Generated from Gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GramaticaListener from './GramaticaListener.js';
const serializedATN = [4,1,8,53,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,3,2,23,8,2,1,3,1,3,1,3,5,
3,28,8,3,10,3,12,3,31,9,3,1,4,1,4,1,4,5,4,36,8,4,10,4,12,4,39,9,4,1,5,1,
5,1,5,3,5,44,8,5,1,6,1,6,1,6,1,6,1,6,3,6,51,8,6,1,6,0,0,7,0,2,4,6,8,10,12,
0,0,50,0,14,1,0,0,0,2,17,1,0,0,0,4,19,1,0,0,0,6,24,1,0,0,0,8,32,1,0,0,0,
10,43,1,0,0,0,12,50,1,0,0,0,14,15,3,2,1,0,15,16,5,0,0,1,16,1,1,0,0,0,17,
18,3,4,2,0,18,3,1,0,0,0,19,22,3,6,3,0,20,21,5,1,0,0,21,23,3,4,2,0,22,20,
1,0,0,0,22,23,1,0,0,0,23,5,1,0,0,0,24,29,3,8,4,0,25,26,5,2,0,0,26,28,3,8,
4,0,27,25,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,7,1,0,0,0,
31,29,1,0,0,0,32,37,3,10,5,0,33,34,5,3,0,0,34,36,3,10,5,0,35,33,1,0,0,0,
36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,9,1,0,0,0,39,37,1,0,0,0,40,
41,5,4,0,0,41,44,3,10,5,0,42,44,3,12,6,0,43,40,1,0,0,0,43,42,1,0,0,0,44,
11,1,0,0,0,45,51,5,7,0,0,46,47,5,5,0,0,47,48,3,2,1,0,48,49,5,6,0,0,49,51,
1,0,0,0,50,45,1,0,0,0,50,46,1,0,0,0,51,13,1,0,0,0,5,22,29,37,43,50];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GramaticaParser extends antlr4.Parser {

    static grammarFileName = "Gramatica.g4";
    static literalNames = [ null, "'\\u2192'", "'\\u2228'", "'\\u2227'", 
                            "'\\u00AC'", "'('", "')'" ];
    static symbolicNames = [ null, "IMPLIES", "OR", "AND", "NOT", "LPAREN", 
                             "RPAREN", "VARIABLE", "WS" ];
    static ruleNames = [ "inicio", "formula", "implication", "disjunction", 
                         "conjunction", "negation", "primary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GramaticaParser.ruleNames;
        this.literalNames = GramaticaParser.literalNames;
        this.symbolicNames = GramaticaParser.symbolicNames;
    }



	inicio() {
	    let localctx = new InicioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GramaticaParser.RULE_inicio);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.formula();
	        this.state = 15;
	        this.match(GramaticaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GramaticaParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.implication();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implication() {
	    let localctx = new ImplicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GramaticaParser.RULE_implication);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.disjunction();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 20;
	            this.match(GramaticaParser.IMPLIES);
	            this.state = 21;
	            this.implication();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disjunction() {
	    let localctx = new DisjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GramaticaParser.RULE_disjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.conjunction();
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 25;
	            this.match(GramaticaParser.OR);
	            this.state = 26;
	            this.conjunction();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GramaticaParser.RULE_conjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.negation();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 33;
	            this.match(GramaticaParser.AND);
	            this.state = 34;
	            this.negation();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GramaticaParser.RULE_negation);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.match(GramaticaParser.NOT);
	            this.state = 41;
	            this.negation();
	            break;
	        case 5:
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.primary();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GramaticaParser.RULE_primary);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.match(GramaticaParser.VARIABLE);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(GramaticaParser.LPAREN);
	            this.state = 47;
	            this.formula();
	            this.state = 48;
	            this.match(GramaticaParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GramaticaParser.EOF = antlr4.Token.EOF;
GramaticaParser.IMPLIES = 1;
GramaticaParser.OR = 2;
GramaticaParser.AND = 3;
GramaticaParser.NOT = 4;
GramaticaParser.LPAREN = 5;
GramaticaParser.RPAREN = 6;
GramaticaParser.VARIABLE = 7;
GramaticaParser.WS = 8;

GramaticaParser.RULE_inicio = 0;
GramaticaParser.RULE_formula = 1;
GramaticaParser.RULE_implication = 2;
GramaticaParser.RULE_disjunction = 3;
GramaticaParser.RULE_conjunction = 4;
GramaticaParser.RULE_negation = 5;
GramaticaParser.RULE_primary = 6;

class InicioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_inicio;
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	EOF() {
	    return this.getToken(GramaticaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterInicio(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitInicio(this);
		}
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_formula;
    }

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitFormula(this);
		}
	}


}



class ImplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_implication;
    }

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	IMPLIES() {
	    return this.getToken(GramaticaParser.IMPLIES, 0);
	};

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterImplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitImplication(this);
		}
	}


}



class DisjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_disjunction;
    }

	conjunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjunctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjunctionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GramaticaParser.OR);
	    } else {
	        return this.getToken(GramaticaParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterDisjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitDisjunction(this);
		}
	}


}



class ConjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_conjunction;
    }

	negation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegationContext);
	    } else {
	        return this.getTypedRuleContext(NegationContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GramaticaParser.AND);
	    } else {
	        return this.getToken(GramaticaParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterConjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitConjunction(this);
		}
	}


}



class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_negation;
    }

	NOT() {
	    return this.getToken(GramaticaParser.NOT, 0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterNegation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitNegation(this);
		}
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_primary;
    }

	VARIABLE() {
	    return this.getToken(GramaticaParser.VARIABLE, 0);
	};

	LPAREN() {
	    return this.getToken(GramaticaParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(GramaticaParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitPrimary(this);
		}
	}


}




GramaticaParser.InicioContext = InicioContext; 
GramaticaParser.FormulaContext = FormulaContext; 
GramaticaParser.ImplicationContext = ImplicationContext; 
GramaticaParser.DisjunctionContext = DisjunctionContext; 
GramaticaParser.ConjunctionContext = ConjunctionContext; 
GramaticaParser.NegationContext = NegationContext; 
GramaticaParser.PrimaryContext = PrimaryContext; 
