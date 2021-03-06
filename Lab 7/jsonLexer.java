// Generated from jsonLexer.g4 by ANTLR 4.6

  import java.util.List;
  import java.util.Arrays;
  import java.util.ArrayList;

import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class jsonLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.6", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		JSONELEMENT=1;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"CHAR", "DIGIT", "ALLBUTX", "ALLBUTM", "ALLBUTL", "ALLBUTXML", "ELEMENTNAME", 
		"JSONNAME", "SPECIALCHARACTERS", "LOCALPARTNOPERIOD", "LOCALPART", "DOMAINPART", 
		"DAY", "MONTH", "YEAR", "DATE", "PHONE", "VISA", "MASTERCARD", "AMERICAN", 
		"DINERS", "DISCOVER", "JCB", "CREDITCARD", "OTHER", "EMAIL", "JSONELEMENT"
	};

	private static final String[] _LITERAL_NAMES = {
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "JSONELEMENT"
	};
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


	    public List<String> errors = new ArrayList<String>();


	public jsonLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "jsonLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	@Override
	public void action(RuleContext _localctx, int ruleIndex, int actionIndex) {
		switch (ruleIndex) {
		case 26:
			JSONELEMENT_action((RuleContext)_localctx, actionIndex);
			break;
		}
	}
	private void JSONELEMENT_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 0:

					if (!errors.isEmpty()) {
			              		System.out.println(errors);
			             		errors.clear();
			           	}
					System.out.println("Found xml element: " + getText());
				
			break;
		}
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\3\u01cb\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6"+
		"\3\7\3\7\7\7F\n\7\f\7\16\7I\13\7\3\7\3\7\3\7\7\7N\n\7\f\7\16\7Q\13\7\3"+
		"\7\3\7\3\7\3\7\7\7W\n\7\f\7\16\7Z\13\7\5\7\\\n\7\3\b\3\b\3\b\6\ba\n\b"+
		"\r\b\16\bb\3\t\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\6\13n\n\13\r\13\16\13"+
		"o\3\f\3\f\5\ft\n\f\3\f\3\f\6\fx\n\f\r\f\16\fy\3\r\3\r\3\r\5\r\177\n\r"+
		"\3\r\5\r\u0082\n\r\3\r\3\r\3\r\5\r\u0087\n\r\6\r\u0089\n\r\r\r\16\r\u008a"+
		"\3\r\3\r\3\r\5\r\u0090\n\r\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u0098\n"+
		"\16\3\17\3\17\3\17\3\17\5\17\u009e\n\17\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\5\20\u00a8\n\20\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\5\22\u00e6\n\22\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\5\23\u0107\n\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\5\26\u0159\n\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u017d\n\27\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\5\30\u0187\n\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\5\30\u01a6\n\30\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\5\31\u01ae\n\31\3\32\3\32\3\32\3\32\6\32\u01b4"+
		"\n\32\r\32\16\32\u01b5\3\33\3\33\3\33\3\33\3\34\3\34\3\34\5\34\u01bf\n"+
		"\34\3\34\3\34\3\34\3\34\3\34\3\34\5\34\u01c7\n\34\3\34\3\34\3\34\2\2\35"+
		"\3\2\5\2\7\2\t\2\13\2\r\2\17\2\21\2\23\2\25\2\27\2\31\2\33\2\35\2\37\2"+
		"!\2#\2%\2\'\2)\2+\2-\2/\2\61\2\63\2\65\2\67\3\3\2\31\4\2C\\c|\3\2\62;"+
		"\6\2CY[\\cy{|\6\2CNP\\cnp|\6\2CMO\\cmo|\4\2/\60aa\t\2##&&(/<=??aa\u0080"+
		"\u0080\3\2\62\62\3\2\63;\3\2\63\64\3\2\65\65\3\2\62\63\3\2\63\63\3\2\62"+
		"\64\3\2\64\64\3\2\66\66\3\2\67\67\3\2\63\67\4\2\66\6699\3\2\62\67\4\2"+
		"88::\3\288\3\2::\u01df\2\67\3\2\2\2\39\3\2\2\2\5;\3\2\2\2\7=\3\2\2\2\t"+
		"?\3\2\2\2\13A\3\2\2\2\r[\3\2\2\2\17`\3\2\2\2\21d\3\2\2\2\23h\3\2\2\2\25"+
		"m\3\2\2\2\27w\3\2\2\2\31\u0088\3\2\2\2\33\u0097\3\2\2\2\35\u009d\3\2\2"+
		"\2\37\u00a7\3\2\2\2!\u00a9\3\2\2\2#\u00e5\3\2\2\2%\u0106\3\2\2\2\'\u0108"+
		"\3\2\2\2)\u0119\3\2\2\2+\u0158\3\2\2\2-\u017c\3\2\2\2/\u01a5\3\2\2\2\61"+
		"\u01ad\3\2\2\2\63\u01b3\3\2\2\2\65\u01b7\3\2\2\2\67\u01bb\3\2\2\29:\t"+
		"\2\2\2:\4\3\2\2\2;<\t\3\2\2<\6\3\2\2\2=>\t\4\2\2>\b\3\2\2\2?@\t\5\2\2"+
		"@\n\3\2\2\2AB\t\6\2\2B\f\3\2\2\2CG\5\7\4\2DF\5\3\2\2ED\3\2\2\2FI\3\2\2"+
		"\2GE\3\2\2\2GH\3\2\2\2H\\\3\2\2\2IG\3\2\2\2JK\5\3\2\2KO\5\t\5\2LN\5\3"+
		"\2\2ML\3\2\2\2NQ\3\2\2\2OM\3\2\2\2OP\3\2\2\2P\\\3\2\2\2QO\3\2\2\2RS\5"+
		"\3\2\2ST\5\3\2\2TX\5\13\6\2UW\5\3\2\2VU\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY"+
		"\3\2\2\2Y\\\3\2\2\2ZX\3\2\2\2[C\3\2\2\2[J\3\2\2\2[R\3\2\2\2\\\16\3\2\2"+
		"\2]a\5\3\2\2^a\5\5\3\2_a\t\7\2\2`]\3\2\2\2`^\3\2\2\2`_\3\2\2\2ab\3\2\2"+
		"\2b`\3\2\2\2bc\3\2\2\2c\20\3\2\2\2de\7$\2\2ef\5\17\b\2fg\7$\2\2g\22\3"+
		"\2\2\2hi\t\b\2\2i\24\3\2\2\2jn\5\3\2\2kn\5\5\3\2ln\5\23\n\2mj\3\2\2\2"+
		"mk\3\2\2\2ml\3\2\2\2no\3\2\2\2om\3\2\2\2op\3\2\2\2p\26\3\2\2\2qs\5\25"+
		"\13\2rt\7\60\2\2sr\3\2\2\2st\3\2\2\2tu\3\2\2\2uv\5\25\13\2vx\3\2\2\2w"+
		"q\3\2\2\2xy\3\2\2\2yw\3\2\2\2yz\3\2\2\2z\30\3\2\2\2{\177\5\3\2\2|\177"+
		"\5\5\3\2}\177\7/\2\2~{\3\2\2\2~|\3\2\2\2~}\3\2\2\2\177\u0081\3\2\2\2\u0080"+
		"\u0082\7\60\2\2\u0081\u0080\3\2\2\2\u0081\u0082\3\2\2\2\u0082\u0086\3"+
		"\2\2\2\u0083\u0087\5\3\2\2\u0084\u0087\5\5\3\2\u0085\u0087\7/\2\2\u0086"+
		"\u0083\3\2\2\2\u0086\u0084\3\2\2\2\u0086\u0085\3\2\2\2\u0087\u0089\3\2"+
		"\2\2\u0088~\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u0088\3\2\2\2\u008a\u008b"+
		"\3\2\2\2\u008b\u008c\3\2\2\2\u008c\u008f\13\2\2\2\u008d\u0090\5\3\2\2"+
		"\u008e\u0090\5\5\3\2\u008f\u008d\3\2\2\2\u008f\u008e\3\2\2\2\u0090\32"+
		"\3\2\2\2\u0091\u0092\t\t\2\2\u0092\u0098\t\n\2\2\u0093\u0094\t\13\2\2"+
		"\u0094\u0098\t\3\2\2\u0095\u0096\t\f\2\2\u0096\u0098\t\r\2\2\u0097\u0091"+
		"\3\2\2\2\u0097\u0093\3\2\2\2\u0097\u0095\3\2\2\2\u0098\34\3\2\2\2\u0099"+
		"\u009a\t\t\2\2\u009a\u009e\t\n\2\2\u009b\u009c\t\16\2\2\u009c\u009e\t"+
		"\17\2\2\u009d\u0099\3\2\2\2\u009d\u009b\3\2\2\2\u009e\36\3\2\2\2\u009f"+
		"\u00a0\t\20\2\2\u00a0\u00a1\t\t\2\2\u00a1\u00a2\t\3\2\2\u00a2\u00a8\t"+
		"\3\2\2\u00a3\u00a4\t\20\2\2\u00a4\u00a5\t\16\2\2\u00a5\u00a6\t\t\2\2\u00a6"+
		"\u00a8\t\t\2\2\u00a7\u009f\3\2\2\2\u00a7\u00a3\3\2\2\2\u00a8 \3\2\2\2"+
		"\u00a9\u00aa\5\33\16\2\u00aa\u00ab\7\61\2\2\u00ab\u00ac\5\35\17\2\u00ac"+
		"\u00ad\7\61\2\2\u00ad\u00ae\5\37\20\2\u00ae\"\3\2\2\2\u00af\u00b0\5\5"+
		"\3\2\u00b0\u00b1\5\5\3\2\u00b1\u00b2\5\5\3\2\u00b2\u00b3\7/\2\2\u00b3"+
		"\u00b4\5\5\3\2\u00b4\u00b5\5\5\3\2\u00b5\u00b6\5\5\3\2\u00b6\u00b7\7/"+
		"\2\2\u00b7\u00b8\5\5\3\2\u00b8\u00b9\5\5\3\2\u00b9\u00ba\5\5\3\2\u00ba"+
		"\u00bb\5\5\3\2\u00bb\u00e6\3\2\2\2\u00bc\u00bd\7*\2\2\u00bd\u00be\5\5"+
		"\3\2\u00be\u00bf\5\5\3\2\u00bf\u00c0\5\5\3\2\u00c0\u00c1\7+\2\2\u00c1"+
		"\u00c2\7\"\2\2\u00c2\u00c3\5\5\3\2\u00c3\u00c4\5\5\3\2\u00c4\u00c5\5\5"+
		"\3\2\u00c5\u00c6\7/\2\2\u00c6\u00c7\5\5\3\2\u00c7\u00c8\5\5\3\2\u00c8"+
		"\u00c9\5\5\3\2\u00c9\u00ca\5\5\3\2\u00ca\u00e6\3\2\2\2\u00cb\u00cc\5\5"+
		"\3\2\u00cc\u00cd\5\5\3\2\u00cd\u00ce\5\5\3\2\u00ce\u00cf\7\"\2\2\u00cf"+
		"\u00d0\5\5\3\2\u00d0\u00d1\5\5\3\2\u00d1\u00d2\5\5\3\2\u00d2\u00d3\7\""+
		"\2\2\u00d3\u00d4\5\5\3\2\u00d4\u00d5\5\5\3\2\u00d5\u00d6\5\5\3\2\u00d6"+
		"\u00d7\5\5\3\2\u00d7\u00e6\3\2\2\2\u00d8\u00d9\5\5\3\2\u00d9\u00da\5\5"+
		"\3\2\u00da\u00db\5\5\3\2\u00db\u00dc\7\60\2\2\u00dc\u00dd\5\5\3\2\u00dd"+
		"\u00de\5\5\3\2\u00de\u00df\5\5\3\2\u00df\u00e0\7\60\2\2\u00e0\u00e1\5"+
		"\5\3\2\u00e1\u00e2\5\5\3\2\u00e2\u00e3\5\5\3\2\u00e3\u00e4\5\5\3\2\u00e4"+
		"\u00e6\3\2\2\2\u00e5\u00af\3\2\2\2\u00e5\u00bc\3\2\2\2\u00e5\u00cb\3\2"+
		"\2\2\u00e5\u00d8\3\2\2\2\u00e6$\3\2\2\2\u00e7\u00e8\t\21\2\2\u00e8\u00e9"+
		"\5\5\3\2\u00e9\u00ea\5\5\3\2\u00ea\u00eb\5\5\3\2\u00eb\u00ec\5\5\3\2\u00ec"+
		"\u00ed\5\5\3\2\u00ed\u00ee\5\5\3\2\u00ee\u00ef\5\5\3\2\u00ef\u00f0\5\5"+
		"\3\2\u00f0\u00f1\5\5\3\2\u00f1\u00f2\5\5\3\2\u00f2\u00f3\5\5\3\2\u00f3"+
		"\u00f4\5\5\3\2\u00f4\u00f5\5\5\3\2\u00f5\u00f6\5\5\3\2\u00f6\u00f7\5\5"+
		"\3\2\u00f7\u0107\3\2\2\2\u00f8\u00f9\t\21\2\2\u00f9\u00fa\5\5\3\2\u00fa"+
		"\u00fb\5\5\3\2\u00fb\u00fc\5\5\3\2\u00fc\u00fd\5\5\3\2\u00fd\u00fe\5\5"+
		"\3\2\u00fe\u00ff\5\5\3\2\u00ff\u0100\5\5\3\2\u0100\u0101\5\5\3\2\u0101"+
		"\u0102\5\5\3\2\u0102\u0103\5\5\3\2\u0103\u0104\5\5\3\2\u0104\u0105\5\5"+
		"\3\2\u0105\u0107\3\2\2\2\u0106\u00e7\3\2\2\2\u0106\u00f8\3\2\2\2\u0107"+
		"&\3\2\2\2\u0108\u0109\t\22\2\2\u0109\u010a\t\23\2\2\u010a\u010b\5\5\3"+
		"\2\u010b\u010c\5\5\3\2\u010c\u010d\5\5\3\2\u010d\u010e\5\5\3\2\u010e\u010f"+
		"\5\5\3\2\u010f\u0110\5\5\3\2\u0110\u0111\5\5\3\2\u0111\u0112\5\5\3\2\u0112"+
		"\u0113\5\5\3\2\u0113\u0114\5\5\3\2\u0114\u0115\5\5\3\2\u0115\u0116\5\5"+
		"\3\2\u0116\u0117\5\5\3\2\u0117\u0118\5\5\3\2\u0118(\3\2\2\2\u0119\u011a"+
		"\t\f\2\2\u011a\u011b\t\24\2\2\u011b\u011c\5\5\3\2\u011c\u011d\5\5\3\2"+
		"\u011d\u011e\5\5\3\2\u011e\u011f\5\5\3\2\u011f\u0120\5\5\3\2\u0120\u0121"+
		"\5\5\3\2\u0121\u0122\5\5\3\2\u0122\u0123\5\5\3\2\u0123\u0124\5\5\3\2\u0124"+
		"\u0125\5\5\3\2\u0125\u0126\5\5\3\2\u0126\u0127\5\5\3\2\u0127\u0128\5\5"+
		"\3\2\u0128*\3\2\2\2\u0129\u012a\t\f\2\2\u012a\u012b\t\t\2\2\u012b\u012c"+
		"\t\25\2\2\u012c\u012d\5\5\3\2\u012d\u012e\5\5\3\2\u012e\u012f\5\5\3\2"+
		"\u012f\u0130\5\5\3\2\u0130\u0131\5\5\3\2\u0131\u0132\5\5\3\2\u0132\u0133"+
		"\5\5\3\2\u0133\u0134\5\5\3\2\u0134\u0135\5\5\3\2\u0135\u0136\5\5\3\2\u0136"+
		"\u0137\5\5\3\2\u0137\u0159\3\2\2\2\u0138\u0139\t\f\2\2\u0139\u013a\t\26"+
		"\2\2\u013a\u013b\5\5\3\2\u013b\u013c\5\5\3\2\u013c\u013d\5\5\3\2\u013d"+
		"\u013e\5\5\3\2\u013e\u013f\5\5\3\2\u013f\u0140\5\5\3\2\u0140\u0141\5\5"+
		"\3\2\u0141\u0142\5\5\3\2\u0142\u0143\5\5\3\2\u0143\u0144\5\5\3\2\u0144"+
		"\u0145\5\5\3\2\u0145\u0146\5\5\3\2\u0146\u0159\3\2\2\2\u0147\u0148\t\22"+
		"\2\2\u0148\u0149\5\5\3\2\u0149\u014a\5\5\3\2\u014a\u014b\5\5\3\2\u014b"+
		"\u014c\5\5\3\2\u014c\u014d\5\5\3\2\u014d\u014e\5\5\3\2\u014e\u014f\5\5"+
		"\3\2\u014f\u0150\5\5\3\2\u0150\u0151\5\5\3\2\u0151\u0152\5\5\3\2\u0152"+
		"\u0153\5\5\3\2\u0153\u0154\5\5\3\2\u0154\u0155\5\5\3\2\u0155\u0156\5\5"+
		"\3\2\u0156\u0157\5\5\3\2\u0157\u0159\3\2\2\2\u0158\u0129\3\2\2\2\u0158"+
		"\u0138\3\2\2\2\u0158\u0147\3\2\2\2\u0159,\3\2\2\2\u015a\u015b\t\27\2\2"+
		"\u015b\u015c\t\t\2\2\u015c\u015d\t\16\2\2\u015d\u015e\t\16\2\2\u015e\u015f"+
		"\5\5\3\2\u015f\u0160\5\5\3\2\u0160\u0161\5\5\3\2\u0161\u0162\5\5\3\2\u0162"+
		"\u0163\5\5\3\2\u0163\u0164\5\5\3\2\u0164\u0165\5\5\3\2\u0165\u0166\5\5"+
		"\3\2\u0166\u0167\5\5\3\2\u0167\u0168\5\5\3\2\u0168\u0169\5\5\3\2\u0169"+
		"\u016a\5\5\3\2\u016a\u017d\3\2\2\2\u016b\u016c\t\27\2\2\u016c\u016d\t"+
		"\22\2\2\u016d\u016e\5\5\3\2\u016e\u016f\5\5\3\2\u016f\u0170\5\5\3\2\u0170"+
		"\u0171\5\5\3\2\u0171\u0172\5\5\3\2\u0172\u0173\5\5\3\2\u0173\u0174\5\5"+
		"\3\2\u0174\u0175\5\5\3\2\u0175\u0176\5\5\3\2\u0176\u0177\5\5\3\2\u0177"+
		"\u0178\5\5\3\2\u0178\u0179\5\5\3\2\u0179\u017a\5\5\3\2\u017a\u017b\5\5"+
		"\3\2\u017b\u017d\3\2\2\2\u017c\u015a\3\2\2\2\u017c\u016b\3\2\2\2\u017d"+
		".\3\2\2\2\u017e\u017f\t\20\2\2\u017f\u0180\t\16\2\2\u0180\u0181\t\f\2"+
		"\2\u0181\u0187\t\16\2\2\u0182\u0183\t\16\2\2\u0183\u0184\t\30\2\2\u0184"+
		"\u0185\t\t\2\2\u0185\u0187\t\t\2\2\u0186\u017e\3\2\2\2\u0186\u0182\3\2"+
		"\2\2\u0187\u0188\3\2\2\2\u0188\u0189\5\5\3\2\u0189\u018a\5\5\3\2\u018a"+
		"\u018b\5\5\3\2\u018b\u018c\5\5\3\2\u018c\u018d\5\5\3\2\u018d\u018e\5\5"+
		"\3\2\u018e\u018f\5\5\3\2\u018f\u0190\5\5\3\2\u0190\u0191\5\5\3\2\u0191"+
		"\u0192\5\5\3\2\u0192\u0193\5\5\3\2\u0193\u01a6\3\2\2\2\u0194\u0195\t\f"+
		"\2\2\u0195\u0196\t\22\2\2\u0196\u0197\5\5\3\2\u0197\u0198\5\5\3\2\u0198"+
		"\u0199\5\5\3\2\u0199\u019a\5\5\3\2\u019a\u019b\5\5\3\2\u019b\u019c\5\5"+
		"\3\2\u019c\u019d\5\5\3\2\u019d\u019e\5\5\3\2\u019e\u019f\5\5\3\2\u019f"+
		"\u01a0\5\5\3\2\u01a0\u01a1\5\5\3\2\u01a1\u01a2\5\5\3\2\u01a2\u01a3\5\5"+
		"\3\2\u01a3\u01a4\5\5\3\2\u01a4\u01a6\3\2\2\2\u01a5\u0186\3\2\2\2\u01a5"+
		"\u0194\3\2\2\2\u01a6\60\3\2\2\2\u01a7\u01ae\5%\23\2\u01a8\u01ae\5\'\24"+
		"\2\u01a9\u01ae\5)\25\2\u01aa\u01ae\5+\26\2\u01ab\u01ae\5-\27\2\u01ac\u01ae"+
		"\5/\30\2\u01ad\u01a7\3\2\2\2\u01ad\u01a8\3\2\2\2\u01ad\u01a9\3\2\2\2\u01ad"+
		"\u01aa\3\2\2\2\u01ad\u01ab\3\2\2\2\u01ad\u01ac\3\2\2\2\u01ae\62\3\2\2"+
		"\2\u01af\u01b4\5\3\2\2\u01b0\u01b4\5\5\3\2\u01b1\u01b4\5\23\n\2\u01b2"+
		"\u01b4\7\"\2\2\u01b3\u01af\3\2\2\2\u01b3\u01b0\3\2\2\2\u01b3\u01b1\3\2"+
		"\2\2\u01b3\u01b2\3\2\2\2\u01b4\u01b5\3\2\2\2\u01b5\u01b3\3\2\2\2\u01b5"+
		"\u01b6\3\2\2\2\u01b6\64\3\2\2\2\u01b7\u01b8\5\27\f\2\u01b8\u01b9\7B\2"+
		"\2\u01b9\u01ba\5\31\r\2\u01ba\66\3\2\2\2\u01bb\u01bc\5\21\t\2\u01bc\u01be"+
		"\7<\2\2\u01bd\u01bf\7\"\2\2\u01be\u01bd\3\2\2\2\u01be\u01bf\3\2\2\2\u01bf"+
		"\u01c0\3\2\2\2\u01c0\u01c6\7$\2\2\u01c1\u01c7\5\65\33\2\u01c2\u01c7\5"+
		"!\21\2\u01c3\u01c7\5#\22\2\u01c4\u01c7\5\61\31\2\u01c5\u01c7\5\63\32\2"+
		"\u01c6\u01c1\3\2\2\2\u01c6\u01c2\3\2\2\2\u01c6\u01c3\3\2\2\2\u01c6\u01c4"+
		"\3\2\2\2\u01c6\u01c5\3\2\2\2\u01c7\u01c8\3\2\2\2\u01c8\u01c9\7$\2\2\u01c9"+
		"\u01ca\b\34\2\2\u01ca8\3\2\2\2 \2GOX[`bmosy~\u0081\u0086\u008a\u008f\u0097"+
		"\u009d\u00a7\u00e5\u0106\u0158\u017c\u0186\u01a5\u01ad\u01b3\u01b5\u01be"+
		"\u01c6\3\3\34\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}