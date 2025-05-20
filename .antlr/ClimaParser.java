// Generated from Clima.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class ClimaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		AUTOMATE=1, CLIMA=2, IMPRIMIR=3, CADA=4, MIN=5, MONITOREAR=6, CUANDO=7, 
		SUBE=8, DE=9, HACER=10, ACTIVAR=11, TEMPERATURA=12, HUMEDAD=13, VENTILACION=14, 
		RIEGO=15, LLAVE_ABRE=16, LLAVE_CIERRA=17, PUNTOYCOMA=18, IDENTIFICADOR=19, 
		NUMERO=20, TEXTO=21, WS=22;
	public static final int
		RULE_clima_script = 0, RULE_accion = 1, RULE_monitoreo = 2, RULE_respuesta = 3, 
		RULE_imprimir = 4, RULE_sensor_clima = 5, RULE_aspecto = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"clima_script", "accion", "monitoreo", "respuesta", "imprimir", "sensor_clima", 
			"aspecto"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'automate'", "'clima'", "'imprimir'", "'cada'", "'min'", "'monitorear'", 
			"'cuando'", "'sube'", "'de'", "'hacer'", "'activar'", "'temperatura'", 
			"'humedad'", "'ventilacion'", "'riego'", "'{'", "'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "AUTOMATE", "CLIMA", "IMPRIMIR", "CADA", "MIN", "MONITOREAR", "CUANDO", 
			"SUBE", "DE", "HACER", "ACTIVAR", "TEMPERATURA", "HUMEDAD", "VENTILACION", 
			"RIEGO", "LLAVE_ABRE", "LLAVE_CIERRA", "PUNTOYCOMA", "IDENTIFICADOR", 
			"NUMERO", "TEXTO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Clima.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ClimaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Clima_scriptContext extends ParserRuleContext {
		public TerminalNode AUTOMATE() { return getToken(ClimaParser.AUTOMATE, 0); }
		public TerminalNode CLIMA() { return getToken(ClimaParser.CLIMA, 0); }
		public TerminalNode IDENTIFICADOR() { return getToken(ClimaParser.IDENTIFICADOR, 0); }
		public TerminalNode LLAVE_ABRE() { return getToken(ClimaParser.LLAVE_ABRE, 0); }
		public TerminalNode LLAVE_CIERRA() { return getToken(ClimaParser.LLAVE_CIERRA, 0); }
		public List<AccionContext> accion() {
			return getRuleContexts(AccionContext.class);
		}
		public AccionContext accion(int i) {
			return getRuleContext(AccionContext.class,i);
		}
		public Clima_scriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clima_script; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterClima_script(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitClima_script(this);
		}
	}

	public final Clima_scriptContext clima_script() throws RecognitionException {
		Clima_scriptContext _localctx = new Clima_scriptContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_clima_script);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(14);
			match(AUTOMATE);
			setState(15);
			match(CLIMA);
			setState(16);
			match(IDENTIFICADOR);
			setState(17);
			match(LLAVE_ABRE);
			setState(21);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 200L) != 0)) {
				{
				{
				setState(18);
				accion();
				}
				}
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(24);
			match(LLAVE_CIERRA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AccionContext extends ParserRuleContext {
		public MonitoreoContext monitoreo() {
			return getRuleContext(MonitoreoContext.class,0);
		}
		public RespuestaContext respuesta() {
			return getRuleContext(RespuestaContext.class,0);
		}
		public ImprimirContext imprimir() {
			return getRuleContext(ImprimirContext.class,0);
		}
		public AccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterAccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitAccion(this);
		}
	}

	public final AccionContext accion() throws RecognitionException {
		AccionContext _localctx = new AccionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_accion);
		try {
			setState(29);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MONITOREAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(26);
				monitoreo();
				}
				break;
			case CUANDO:
				enterOuterAlt(_localctx, 2);
				{
				setState(27);
				respuesta();
				}
				break;
			case IMPRIMIR:
				enterOuterAlt(_localctx, 3);
				{
				setState(28);
				imprimir();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MonitoreoContext extends ParserRuleContext {
		public TerminalNode MONITOREAR() { return getToken(ClimaParser.MONITOREAR, 0); }
		public Sensor_climaContext sensor_clima() {
			return getRuleContext(Sensor_climaContext.class,0);
		}
		public TerminalNode CADA() { return getToken(ClimaParser.CADA, 0); }
		public TerminalNode NUMERO() { return getToken(ClimaParser.NUMERO, 0); }
		public TerminalNode MIN() { return getToken(ClimaParser.MIN, 0); }
		public TerminalNode PUNTOYCOMA() { return getToken(ClimaParser.PUNTOYCOMA, 0); }
		public MonitoreoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_monitoreo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterMonitoreo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitMonitoreo(this);
		}
	}

	public final MonitoreoContext monitoreo() throws RecognitionException {
		MonitoreoContext _localctx = new MonitoreoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_monitoreo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			match(MONITOREAR);
			setState(32);
			sensor_clima();
			setState(33);
			match(CADA);
			setState(34);
			match(NUMERO);
			setState(35);
			match(MIN);
			setState(36);
			match(PUNTOYCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RespuestaContext extends ParserRuleContext {
		public TerminalNode CUANDO() { return getToken(ClimaParser.CUANDO, 0); }
		public Sensor_climaContext sensor_clima() {
			return getRuleContext(Sensor_climaContext.class,0);
		}
		public TerminalNode SUBE() { return getToken(ClimaParser.SUBE, 0); }
		public TerminalNode DE() { return getToken(ClimaParser.DE, 0); }
		public TerminalNode NUMERO() { return getToken(ClimaParser.NUMERO, 0); }
		public TerminalNode HACER() { return getToken(ClimaParser.HACER, 0); }
		public TerminalNode ACTIVAR() { return getToken(ClimaParser.ACTIVAR, 0); }
		public AspectoContext aspecto() {
			return getRuleContext(AspectoContext.class,0);
		}
		public TerminalNode PUNTOYCOMA() { return getToken(ClimaParser.PUNTOYCOMA, 0); }
		public RespuestaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_respuesta; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterRespuesta(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitRespuesta(this);
		}
	}

	public final RespuestaContext respuesta() throws RecognitionException {
		RespuestaContext _localctx = new RespuestaContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_respuesta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(CUANDO);
			setState(39);
			sensor_clima();
			setState(40);
			match(SUBE);
			setState(41);
			match(DE);
			setState(42);
			match(NUMERO);
			setState(43);
			match(HACER);
			setState(44);
			match(ACTIVAR);
			setState(45);
			aspecto();
			setState(46);
			match(PUNTOYCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImprimirContext extends ParserRuleContext {
		public TerminalNode IMPRIMIR() { return getToken(ClimaParser.IMPRIMIR, 0); }
		public TerminalNode TEXTO() { return getToken(ClimaParser.TEXTO, 0); }
		public TerminalNode CADA() { return getToken(ClimaParser.CADA, 0); }
		public TerminalNode NUMERO() { return getToken(ClimaParser.NUMERO, 0); }
		public TerminalNode MIN() { return getToken(ClimaParser.MIN, 0); }
		public TerminalNode PUNTOYCOMA() { return getToken(ClimaParser.PUNTOYCOMA, 0); }
		public ImprimirContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imprimir; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterImprimir(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitImprimir(this);
		}
	}

	public final ImprimirContext imprimir() throws RecognitionException {
		ImprimirContext _localctx = new ImprimirContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_imprimir);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(IMPRIMIR);
			setState(49);
			match(TEXTO);
			setState(50);
			match(CADA);
			setState(51);
			match(NUMERO);
			setState(52);
			match(MIN);
			setState(53);
			match(PUNTOYCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Sensor_climaContext extends ParserRuleContext {
		public TerminalNode TEMPERATURA() { return getToken(ClimaParser.TEMPERATURA, 0); }
		public TerminalNode HUMEDAD() { return getToken(ClimaParser.HUMEDAD, 0); }
		public Sensor_climaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sensor_clima; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterSensor_clima(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitSensor_clima(this);
		}
	}

	public final Sensor_climaContext sensor_clima() throws RecognitionException {
		Sensor_climaContext _localctx = new Sensor_climaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_sensor_clima);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			_la = _input.LA(1);
			if ( !(_la==TEMPERATURA || _la==HUMEDAD) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AspectoContext extends ParserRuleContext {
		public TerminalNode VENTILACION() { return getToken(ClimaParser.VENTILACION, 0); }
		public TerminalNode RIEGO() { return getToken(ClimaParser.RIEGO, 0); }
		public AspectoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aspecto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterAspecto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitAspecto(this);
		}
	}

	public final AspectoContext aspecto() throws RecognitionException {
		AspectoContext _localctx = new AspectoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_aspecto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			_la = _input.LA(1);
			if ( !(_la==VENTILACION || _la==RIEGO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0016<\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u0014\b\u0000\n\u0000\f\u0000"+
		"\u0017\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0003\u0001\u001e\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0000\u0000\u0007\u0000\u0002\u0004\u0006\b\n\f\u0000\u0002"+
		"\u0001\u0000\f\r\u0001\u0000\u000e\u000f7\u0000\u000e\u0001\u0000\u0000"+
		"\u0000\u0002\u001d\u0001\u0000\u0000\u0000\u0004\u001f\u0001\u0000\u0000"+
		"\u0000\u0006&\u0001\u0000\u0000\u0000\b0\u0001\u0000\u0000\u0000\n7\u0001"+
		"\u0000\u0000\u0000\f9\u0001\u0000\u0000\u0000\u000e\u000f\u0005\u0001"+
		"\u0000\u0000\u000f\u0010\u0005\u0002\u0000\u0000\u0010\u0011\u0005\u0013"+
		"\u0000\u0000\u0011\u0015\u0005\u0010\u0000\u0000\u0012\u0014\u0003\u0002"+
		"\u0001\u0000\u0013\u0012\u0001\u0000\u0000\u0000\u0014\u0017\u0001\u0000"+
		"\u0000\u0000\u0015\u0013\u0001\u0000\u0000\u0000\u0015\u0016\u0001\u0000"+
		"\u0000\u0000\u0016\u0018\u0001\u0000\u0000\u0000\u0017\u0015\u0001\u0000"+
		"\u0000\u0000\u0018\u0019\u0005\u0011\u0000\u0000\u0019\u0001\u0001\u0000"+
		"\u0000\u0000\u001a\u001e\u0003\u0004\u0002\u0000\u001b\u001e\u0003\u0006"+
		"\u0003\u0000\u001c\u001e\u0003\b\u0004\u0000\u001d\u001a\u0001\u0000\u0000"+
		"\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001c\u0001\u0000\u0000"+
		"\u0000\u001e\u0003\u0001\u0000\u0000\u0000\u001f \u0005\u0006\u0000\u0000"+
		" !\u0003\n\u0005\u0000!\"\u0005\u0004\u0000\u0000\"#\u0005\u0014\u0000"+
		"\u0000#$\u0005\u0005\u0000\u0000$%\u0005\u0012\u0000\u0000%\u0005\u0001"+
		"\u0000\u0000\u0000&\'\u0005\u0007\u0000\u0000\'(\u0003\n\u0005\u0000("+
		")\u0005\b\u0000\u0000)*\u0005\t\u0000\u0000*+\u0005\u0014\u0000\u0000"+
		"+,\u0005\n\u0000\u0000,-\u0005\u000b\u0000\u0000-.\u0003\f\u0006\u0000"+
		"./\u0005\u0012\u0000\u0000/\u0007\u0001\u0000\u0000\u000001\u0005\u0003"+
		"\u0000\u000012\u0005\u0015\u0000\u000023\u0005\u0004\u0000\u000034\u0005"+
		"\u0014\u0000\u000045\u0005\u0005\u0000\u000056\u0005\u0012\u0000\u0000"+
		"6\t\u0001\u0000\u0000\u000078\u0007\u0000\u0000\u00008\u000b\u0001\u0000"+
		"\u0000\u00009:\u0007\u0001\u0000\u0000:\r\u0001\u0000\u0000\u0000\u0002"+
		"\u0015\u001d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}