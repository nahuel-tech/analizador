// Generated from c:/Users/nahue/Desktop/analizador/Clima.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ClimaListener from './ClimaListener.js';
import ClimaVisitor from './ClimaVisitor.js';

const serializedATN = [4,1,22,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,0,0,7,
0,2,4,6,8,10,12,0,2,1,0,12,13,1,0,14,15,55,0,14,1,0,0,0,2,29,1,0,0,0,4,31,
1,0,0,0,6,38,1,0,0,0,8,48,1,0,0,0,10,55,1,0,0,0,12,57,1,0,0,0,14,15,5,1,
0,0,15,16,5,2,0,0,16,17,5,19,0,0,17,21,5,16,0,0,18,20,3,2,1,0,19,18,1,0,
0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,
0,24,25,5,17,0,0,25,1,1,0,0,0,26,30,3,4,2,0,27,30,3,6,3,0,28,30,3,8,4,0,
29,26,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,6,0,0,32,
33,3,10,5,0,33,34,5,4,0,0,34,35,5,20,0,0,35,36,5,5,0,0,36,37,5,18,0,0,37,
5,1,0,0,0,38,39,5,7,0,0,39,40,3,10,5,0,40,41,5,8,0,0,41,42,5,9,0,0,42,43,
5,20,0,0,43,44,5,10,0,0,44,45,5,11,0,0,45,46,3,12,6,0,46,47,5,18,0,0,47,
7,1,0,0,0,48,49,5,3,0,0,49,50,5,21,0,0,50,51,5,4,0,0,51,52,5,20,0,0,52,53,
5,5,0,0,53,54,5,18,0,0,54,9,1,0,0,0,55,56,7,0,0,0,56,11,1,0,0,0,57,58,7,
1,0,0,58,13,1,0,0,0,2,21,29];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ClimaParser extends antlr4.Parser {

    static grammarFileName = "Clima.g4";
    static literalNames = [ null, "'automate'", "'clima'", "'imprimir'", 
                            "'cada'", "'min'", "'monitorear'", "'cuando'", 
                            "'sube'", "'de'", "'hacer'", "'activar'", "'temperatura'", 
                            "'humedad'", "'ventilacion'", "'riego'", "'{'", 
                            "'}'", "';'" ];
    static symbolicNames = [ null, "AUTOMATE", "CLIMA", "IMPRIMIR", "CADA", 
                             "MIN", "MONITOREAR", "CUANDO", "SUBE", "DE", 
                             "HACER", "ACTIVAR", "TEMPERATURA", "HUMEDAD", 
                             "VENTILACION", "RIEGO", "LLAVE_ABRE", "LLAVE_CIERRA", 
                             "PUNTOYCOMA", "IDENTIFICADOR", "NUMERO", "TEXTO", 
                             "WS" ];
    static ruleNames = [ "clima_script", "accion", "monitoreo", "respuesta", 
                         "imprimir", "sensor_clima", "aspecto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ClimaParser.ruleNames;
        this.literalNames = ClimaParser.literalNames;
        this.symbolicNames = ClimaParser.symbolicNames;
    }



	clima_script() {
	    let localctx = new Clima_scriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ClimaParser.RULE_clima_script);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(ClimaParser.AUTOMATE);
	        this.state = 15;
	        this.match(ClimaParser.CLIMA);
	        this.state = 16;
	        this.match(ClimaParser.IDENTIFICADOR);
	        this.state = 17;
	        this.match(ClimaParser.LLAVE_ABRE);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 200) !== 0)) {
	            this.state = 18;
	            this.accion();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(ClimaParser.LLAVE_CIERRA);
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



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ClimaParser.RULE_accion);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.monitoreo();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.respuesta();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.imprimir();
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



	monitoreo() {
	    let localctx = new MonitoreoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ClimaParser.RULE_monitoreo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(ClimaParser.MONITOREAR);
	        this.state = 32;
	        this.sensor_clima();
	        this.state = 33;
	        this.match(ClimaParser.CADA);
	        this.state = 34;
	        this.match(ClimaParser.NUMERO);
	        this.state = 35;
	        this.match(ClimaParser.MIN);
	        this.state = 36;
	        this.match(ClimaParser.PUNTOYCOMA);
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



	respuesta() {
	    let localctx = new RespuestaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ClimaParser.RULE_respuesta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(ClimaParser.CUANDO);
	        this.state = 39;
	        this.sensor_clima();
	        this.state = 40;
	        this.match(ClimaParser.SUBE);
	        this.state = 41;
	        this.match(ClimaParser.DE);
	        this.state = 42;
	        this.match(ClimaParser.NUMERO);
	        this.state = 43;
	        this.match(ClimaParser.HACER);
	        this.state = 44;
	        this.match(ClimaParser.ACTIVAR);
	        this.state = 45;
	        this.aspecto();
	        this.state = 46;
	        this.match(ClimaParser.PUNTOYCOMA);
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



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ClimaParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(ClimaParser.IMPRIMIR);
	        this.state = 49;
	        this.match(ClimaParser.TEXTO);
	        this.state = 50;
	        this.match(ClimaParser.CADA);
	        this.state = 51;
	        this.match(ClimaParser.NUMERO);
	        this.state = 52;
	        this.match(ClimaParser.MIN);
	        this.state = 53;
	        this.match(ClimaParser.PUNTOYCOMA);
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



	sensor_clima() {
	    let localctx = new Sensor_climaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ClimaParser.RULE_sensor_clima);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	aspecto() {
	    let localctx = new AspectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ClimaParser.RULE_aspecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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

ClimaParser.EOF = antlr4.Token.EOF;
ClimaParser.AUTOMATE = 1;
ClimaParser.CLIMA = 2;
ClimaParser.IMPRIMIR = 3;
ClimaParser.CADA = 4;
ClimaParser.MIN = 5;
ClimaParser.MONITOREAR = 6;
ClimaParser.CUANDO = 7;
ClimaParser.SUBE = 8;
ClimaParser.DE = 9;
ClimaParser.HACER = 10;
ClimaParser.ACTIVAR = 11;
ClimaParser.TEMPERATURA = 12;
ClimaParser.HUMEDAD = 13;
ClimaParser.VENTILACION = 14;
ClimaParser.RIEGO = 15;
ClimaParser.LLAVE_ABRE = 16;
ClimaParser.LLAVE_CIERRA = 17;
ClimaParser.PUNTOYCOMA = 18;
ClimaParser.IDENTIFICADOR = 19;
ClimaParser.NUMERO = 20;
ClimaParser.TEXTO = 21;
ClimaParser.WS = 22;

ClimaParser.RULE_clima_script = 0;
ClimaParser.RULE_accion = 1;
ClimaParser.RULE_monitoreo = 2;
ClimaParser.RULE_respuesta = 3;
ClimaParser.RULE_imprimir = 4;
ClimaParser.RULE_sensor_clima = 5;
ClimaParser.RULE_aspecto = 6;

class Clima_scriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_clima_script;
    }

	AUTOMATE() {
	    return this.getToken(ClimaParser.AUTOMATE, 0);
	};

	CLIMA() {
	    return this.getToken(ClimaParser.CLIMA, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(ClimaParser.IDENTIFICADOR, 0);
	};

	LLAVE_ABRE() {
	    return this.getToken(ClimaParser.LLAVE_ABRE, 0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(ClimaParser.LLAVE_CIERRA, 0);
	};

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterClima_script(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitClima_script(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaVisitor ) {
	        return visitor.visitClima_script(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_accion;
    }

	monitoreo() {
	    return this.getTypedRuleContext(MonitoreoContext,0);
	};

	respuesta() {
	    return this.getTypedRuleContext(RespuestaContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MonitoreoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_monitoreo;
    }

	MONITOREAR() {
	    return this.getToken(ClimaParser.MONITOREAR, 0);
	};

	sensor_clima() {
	    return this.getTypedRuleContext(Sensor_climaContext,0);
	};

	CADA() {
	    return this.getToken(ClimaParser.CADA, 0);
	};

	NUMERO() {
	    return this.getToken(ClimaParser.NUMERO, 0);
	};

	MIN() {
	    return this.getToken(ClimaParser.MIN, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ClimaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterMonitoreo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitMonitoreo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaVisitor ) {
	        return visitor.visitMonitoreo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RespuestaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_respuesta;
    }

	CUANDO() {
	    return this.getToken(ClimaParser.CUANDO, 0);
	};

	sensor_clima() {
	    return this.getTypedRuleContext(Sensor_climaContext,0);
	};

	SUBE() {
	    return this.getToken(ClimaParser.SUBE, 0);
	};

	DE() {
	    return this.getToken(ClimaParser.DE, 0);
	};

	NUMERO() {
	    return this.getToken(ClimaParser.NUMERO, 0);
	};

	HACER() {
	    return this.getToken(ClimaParser.HACER, 0);
	};

	ACTIVAR() {
	    return this.getToken(ClimaParser.ACTIVAR, 0);
	};

	aspecto() {
	    return this.getTypedRuleContext(AspectoContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ClimaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterRespuesta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitRespuesta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaVisitor ) {
	        return visitor.visitRespuesta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(ClimaParser.IMPRIMIR, 0);
	};

	TEXTO() {
	    return this.getToken(ClimaParser.TEXTO, 0);
	};

	CADA() {
	    return this.getToken(ClimaParser.CADA, 0);
	};

	NUMERO() {
	    return this.getToken(ClimaParser.NUMERO, 0);
	};

	MIN() {
	    return this.getToken(ClimaParser.MIN, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ClimaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Sensor_climaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_sensor_clima;
    }

	TEMPERATURA() {
	    return this.getToken(ClimaParser.TEMPERATURA, 0);
	};

	HUMEDAD() {
	    return this.getToken(ClimaParser.HUMEDAD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterSensor_clima(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitSensor_clima(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaVisitor ) {
	        return visitor.visitSensor_clima(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AspectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_aspecto;
    }

	VENTILACION() {
	    return this.getToken(ClimaParser.VENTILACION, 0);
	};

	RIEGO() {
	    return this.getToken(ClimaParser.RIEGO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterAspecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitAspecto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaVisitor ) {
	        return visitor.visitAspecto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ClimaParser.Clima_scriptContext = Clima_scriptContext; 
ClimaParser.AccionContext = AccionContext; 
ClimaParser.MonitoreoContext = MonitoreoContext; 
ClimaParser.RespuestaContext = RespuestaContext; 
ClimaParser.ImprimirContext = ImprimirContext; 
ClimaParser.Sensor_climaContext = Sensor_climaContext; 
ClimaParser.AspectoContext = AspectoContext; 
