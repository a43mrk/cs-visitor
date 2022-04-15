// Generated from /home/rcks/forks/cs-visitor/app/lib/grammars/jsx/JavaScriptParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class JavaScriptParser extends JavaScriptParserBase {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		HashBangLine=1, OpenBracket=2, CloseBracket=3, OpenParen=4, CloseParen=5, 
		OpenBrace=6, TemplateCloseBrace=7, CloseBrace=8, SemiColon=9, Comma=10, 
		Assign=11, QuestionMark=12, Colon=13, Ellipsis=14, Dot=15, PlusPlus=16, 
		MinusMinus=17, Plus=18, Minus=19, BitNot=20, Not=21, Multiply=22, Divide=23, 
		Modulus=24, Power=25, NullCoalesce=26, Hashtag=27, RightShiftArithmetic=28, 
		LeftShiftArithmetic=29, RightShiftLogical=30, LessThan=31, MoreThan=32, 
		LessThanEquals=33, GreaterThanEquals=34, Equals_=35, NotEquals=36, IdentityEquals=37, 
		IdentityNotEquals=38, BitAnd=39, BitXOr=40, BitOr=41, And=42, Or=43, MultiplyAssign=44, 
		DivideAssign=45, ModulusAssign=46, PlusAssign=47, MinusAssign=48, LeftShiftArithmeticAssign=49, 
		RightShiftArithmeticAssign=50, RightShiftLogicalAssign=51, BitAndAssign=52, 
		BitXorAssign=53, BitOrAssign=54, PowerAssign=55, ARROW=56, NullLiteral=57, 
		BooleanLiteral=58, DecimalLiteral=59, HexIntegerLiteral=60, OctalIntegerLiteral=61, 
		OctalIntegerLiteral2=62, BinaryIntegerLiteral=63, BigHexIntegerLiteral=64, 
		BigOctalIntegerLiteral=65, BigBinaryIntegerLiteral=66, BigDecimalIntegerLiteral=67, 
		Break=68, Do=69, Instanceof=70, Typeof=71, Case=72, Else=73, New=74, Var=75, 
		Catch=76, Finally=77, Return=78, Void=79, Continue=80, For=81, Switch=82, 
		While=83, Debugger=84, Function_=85, This=86, With=87, Default=88, If=89, 
		Throw=90, Delete=91, In=92, Try=93, As=94, From=95, Class=96, Enum=97, 
		Extends=98, Super=99, Const=100, Export=101, Import=102, Async=103, Await=104, 
		Implements=105, StrictLet=106, NonStrictLet=107, Private=108, Public=109, 
		Interface=110, Package=111, Protected=112, Static=113, Yield=114, Identifier=115, 
		StringLiteral=116, LinkLiteral=117, BackTick=118, WhiteSpaces=119, LineTerminator=120, 
		JsxComment=121, MultiLineComment=122, SingleLineComment=123, RegularExpressionLiteral=124, 
		HtmlComment=125, CDataComment=126, UnexpectedCharacter=127, CDATA=128, 
		TemplateStringStartExpression=129, TemplateStringAtom=130, TagOpen=131, 
		TagClose=132, TagSlashClose=133, TagSlash=134, TagName=135, AttributeValue=136, 
		Attribute=137, TagEquals=138;
	public static final int
		RULE_program = 0, RULE_sourceElement = 1, RULE_statement = 2, RULE_block = 3, 
		RULE_statementList = 4, RULE_importStatement = 5, RULE_importFromBlock = 6, 
		RULE_moduleItems = 7, RULE_importDefault = 8, RULE_importNamespace = 9, 
		RULE_importFrom = 10, RULE_aliasName = 11, RULE_exportStatement = 12, 
		RULE_exportFromBlock = 13, RULE_declaration = 14, RULE_variableStatement = 15, 
		RULE_variableDeclarationList = 16, RULE_variableDeclaration = 17, RULE_emptyStatement_ = 18, 
		RULE_expressionStatement = 19, RULE_ifStatement = 20, RULE_iterationStatement = 21, 
		RULE_varModifier = 22, RULE_continueStatement = 23, RULE_breakStatement = 24, 
		RULE_returnStatement = 25, RULE_yieldStatement = 26, RULE_withStatement = 27, 
		RULE_switchStatement = 28, RULE_caseBlock = 29, RULE_caseClauses = 30, 
		RULE_caseClause = 31, RULE_defaultClause = 32, RULE_labelledStatement = 33, 
		RULE_throwStatement = 34, RULE_tryStatement = 35, RULE_catchProduction = 36, 
		RULE_finallyProduction = 37, RULE_debuggerStatement = 38, RULE_functionDeclaration = 39, 
		RULE_classDeclaration = 40, RULE_classTail = 41, RULE_classElement = 42, 
		RULE_methodDefinition = 43, RULE_formalParameterList = 44, RULE_formalParameterArg = 45, 
		RULE_lastFormalParameterArg = 46, RULE_functionBody = 47, RULE_sourceElements = 48, 
		RULE_arrayLiteral = 49, RULE_elementList = 50, RULE_arrayElement = 51, 
		RULE_propertyAssignment = 52, RULE_propertyName = 53, RULE_arguments = 54, 
		RULE_argument = 55, RULE_expressionSequence = 56, RULE_singleExpression = 57, 
		RULE_htmlElements = 58, RULE_htmlElement = 59, RULE_htmlContent = 60, 
		RULE_htmlTagStartName = 61, RULE_htmlTagClosingName = 62, RULE_htmlTagName = 63, 
		RULE_htmlAttribute = 64, RULE_htmlAttributeName = 65, RULE_htmlChardata = 66, 
		RULE_htmlAttributeValue = 67, RULE_assignable = 68, RULE_objectLiteral = 69, 
		RULE_objectExpressionSequence = 70, RULE_anoymousFunction = 71, RULE_arrowFunctionParameters = 72, 
		RULE_arrowFunctionBody = 73, RULE_assignmentOperator = 74, RULE_literal = 75, 
		RULE_templateStringLiteral = 76, RULE_templateStringAtom = 77, RULE_numericLiteral = 78, 
		RULE_bigintLiteral = 79, RULE_getter = 80, RULE_setter = 81, RULE_identifierName = 82, 
		RULE_identifier = 83, RULE_reservedWord = 84, RULE_keyword = 85, RULE_let_ = 86, 
		RULE_eos = 87;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "sourceElement", "statement", "block", "statementList", "importStatement", 
			"importFromBlock", "moduleItems", "importDefault", "importNamespace", 
			"importFrom", "aliasName", "exportStatement", "exportFromBlock", "declaration", 
			"variableStatement", "variableDeclarationList", "variableDeclaration", 
			"emptyStatement_", "expressionStatement", "ifStatement", "iterationStatement", 
			"varModifier", "continueStatement", "breakStatement", "returnStatement", 
			"yieldStatement", "withStatement", "switchStatement", "caseBlock", "caseClauses", 
			"caseClause", "defaultClause", "labelledStatement", "throwStatement", 
			"tryStatement", "catchProduction", "finallyProduction", "debuggerStatement", 
			"functionDeclaration", "classDeclaration", "classTail", "classElement", 
			"methodDefinition", "formalParameterList", "formalParameterArg", "lastFormalParameterArg", 
			"functionBody", "sourceElements", "arrayLiteral", "elementList", "arrayElement", 
			"propertyAssignment", "propertyName", "arguments", "argument", "expressionSequence", 
			"singleExpression", "htmlElements", "htmlElement", "htmlContent", "htmlTagStartName", 
			"htmlTagClosingName", "htmlTagName", "htmlAttribute", "htmlAttributeName", 
			"htmlChardata", "htmlAttributeValue", "assignable", "objectLiteral", 
			"objectExpressionSequence", "anoymousFunction", "arrowFunctionParameters", 
			"arrowFunctionBody", "assignmentOperator", "literal", "templateStringLiteral", 
			"templateStringAtom", "numericLiteral", "bigintLiteral", "getter", "setter", 
			"identifierName", "identifier", "reservedWord", "keyword", "let_", "eos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'['", "']'", "'('", "')'", "'{'", null, "'}'", "';'", "','", 
			"'='", "'?'", "':'", "'...'", "'.'", "'++'", "'--'", "'+'", "'-'", "'~'", 
			"'!'", "'*'", "'/'", "'%'", "'**'", "'??'", "'#'", "'>>'", "'<<'", "'>>>'", 
			"'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", "'&'", 
			"'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", 
			"'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'**='", "'=>'", 
			"'null'", null, null, null, null, null, null, null, null, null, null, 
			"'break'", "'do'", "'instanceof'", "'typeof'", "'case'", "'else'", "'new'", 
			"'var'", "'catch'", "'finally'", "'return'", "'void'", "'continue'", 
			"'for'", "'switch'", "'while'", "'debugger'", "'function'", "'this'", 
			"'with'", "'default'", "'if'", "'throw'", "'delete'", "'in'", "'try'", 
			"'as'", "'from'", "'class'", "'enum'", "'extends'", "'super'", "'const'", 
			"'export'", "'import'", "'async'", "'await'", "'implements'", null, null, 
			"'private'", "'public'", "'interface'", "'package'", "'protected'", "'static'", 
			"'yield'", null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "'${'", null, null, null, "'/>'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "HashBangLine", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
			"OpenBrace", "TemplateCloseBrace", "CloseBrace", "SemiColon", "Comma", 
			"Assign", "QuestionMark", "Colon", "Ellipsis", "Dot", "PlusPlus", "MinusMinus", 
			"Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", "Modulus", "Power", 
			"NullCoalesce", "Hashtag", "RightShiftArithmetic", "LeftShiftArithmetic", 
			"RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
			"Equals_", "NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", 
			"BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
			"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
			"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
			"PowerAssign", "ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral", 
			"HexIntegerLiteral", "OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
			"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
			"BigDecimalIntegerLiteral", "Break", "Do", "Instanceof", "Typeof", "Case", 
			"Else", "New", "Var", "Catch", "Finally", "Return", "Void", "Continue", 
			"For", "Switch", "While", "Debugger", "Function_", "This", "With", "Default", 
			"If", "Throw", "Delete", "In", "Try", "As", "From", "Class", "Enum", 
			"Extends", "Super", "Const", "Export", "Import", "Async", "Await", "Implements", 
			"StrictLet", "NonStrictLet", "Private", "Public", "Interface", "Package", 
			"Protected", "Static", "Yield", "Identifier", "StringLiteral", "LinkLiteral", 
			"BackTick", "WhiteSpaces", "LineTerminator", "JsxComment", "MultiLineComment", 
			"SingleLineComment", "RegularExpressionLiteral", "HtmlComment", "CDataComment", 
			"UnexpectedCharacter", "CDATA", "TemplateStringStartExpression", "TemplateStringAtom", 
			"TagOpen", "TagClose", "TagSlashClose", "TagSlash", "TagName", "AttributeValue", 
			"Attribute", "TagEquals"
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
	public String getGrammarFileName() { return "JavaScriptParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public JavaScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(JavaScriptParser.EOF, 0); }
		public TerminalNode HashBangLine() { return getToken(JavaScriptParser.HashBangLine, 0); }
		public SourceElementsContext sourceElements() {
			return getRuleContext(SourceElementsContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				setState(176);
				match(HashBangLine);
				}
				break;
			}
			setState(180);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				{
				setState(179);
				sourceElements();
				}
				break;
			}
			setState(182);
			match(EOF);
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

	public static class SourceElementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public SourceElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceElement; }
	}

	public final SourceElementContext sourceElement() throws RecognitionException {
		SourceElementContext _localctx = new SourceElementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sourceElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			statement();
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

	public static class StatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public VariableStatementContext variableStatement() {
			return getRuleContext(VariableStatementContext.class,0);
		}
		public ImportStatementContext importStatement() {
			return getRuleContext(ImportStatementContext.class,0);
		}
		public ExportStatementContext exportStatement() {
			return getRuleContext(ExportStatementContext.class,0);
		}
		public EmptyStatement_Context emptyStatement_() {
			return getRuleContext(EmptyStatement_Context.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public IterationStatementContext iterationStatement() {
			return getRuleContext(IterationStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public YieldStatementContext yieldStatement() {
			return getRuleContext(YieldStatementContext.class,0);
		}
		public WithStatementContext withStatement() {
			return getRuleContext(WithStatementContext.class,0);
		}
		public LabelledStatementContext labelledStatement() {
			return getRuleContext(LabelledStatementContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public ThrowStatementContext throwStatement() {
			return getRuleContext(ThrowStatementContext.class,0);
		}
		public TryStatementContext tryStatement() {
			return getRuleContext(TryStatementContext.class,0);
		}
		public DebuggerStatementContext debuggerStatement() {
			return getRuleContext(DebuggerStatementContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(206);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(186);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(187);
				variableStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(188);
				importStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(189);
				exportStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(190);
				emptyStatement_();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(191);
				classDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(192);
				expressionStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(193);
				ifStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(194);
				iterationStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(195);
				continueStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(196);
				breakStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(197);
				returnStatement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(198);
				yieldStatement();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(199);
				withStatement();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(200);
				labelledStatement();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(201);
				switchStatement();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(202);
				throwStatement();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(203);
				tryStatement();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(204);
				debuggerStatement();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(205);
				functionDeclaration();
				}
				break;
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

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			match(OpenBrace);
			setState(210);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(209);
				statementList();
				}
				break;
			}
			setState(212);
			match(CloseBrace);
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

	public static class StatementListContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementList; }
	}

	public final StatementListContext statementList() throws RecognitionException {
		StatementListContext _localctx = new StatementListContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_statementList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(215); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(214);
					statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(217); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
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

	public static class ImportStatementContext extends ParserRuleContext {
		public TerminalNode Import() { return getToken(JavaScriptParser.Import, 0); }
		public ImportFromBlockContext importFromBlock() {
			return getRuleContext(ImportFromBlockContext.class,0);
		}
		public ImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStatement; }
	}

	public final ImportStatementContext importStatement() throws RecognitionException {
		ImportStatementContext _localctx = new ImportStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_importStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(Import);
			setState(220);
			importFromBlock();
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

	public static class ImportFromBlockContext extends ParserRuleContext {
		public ImportFromContext importFrom() {
			return getRuleContext(ImportFromContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ImportNamespaceContext importNamespace() {
			return getRuleContext(ImportNamespaceContext.class,0);
		}
		public ModuleItemsContext moduleItems() {
			return getRuleContext(ModuleItemsContext.class,0);
		}
		public ImportDefaultContext importDefault() {
			return getRuleContext(ImportDefaultContext.class,0);
		}
		public TerminalNode StringLiteral() { return getToken(JavaScriptParser.StringLiteral, 0); }
		public ImportFromBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importFromBlock; }
	}

	public final ImportFromBlockContext importFromBlock() throws RecognitionException {
		ImportFromBlockContext _localctx = new ImportFromBlockContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_importFromBlock);
		try {
			setState(234);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenBrace:
			case Multiply:
			case NullLiteral:
			case BooleanLiteral:
			case Break:
			case Do:
			case Instanceof:
			case Typeof:
			case Case:
			case Else:
			case New:
			case Var:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Function_:
			case This:
			case With:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case As:
			case From:
			case Class:
			case Enum:
			case Extends:
			case Super:
			case Const:
			case Export:
			case Import:
			case Async:
			case Await:
			case Implements:
			case StrictLet:
			case NonStrictLet:
			case Private:
			case Public:
			case Interface:
			case Package:
			case Protected:
			case Static:
			case Yield:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(223);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(222);
					importDefault();
					}
					break;
				}
				setState(227);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Multiply:
				case NullLiteral:
				case BooleanLiteral:
				case Break:
				case Do:
				case Instanceof:
				case Typeof:
				case Case:
				case Else:
				case New:
				case Var:
				case Catch:
				case Finally:
				case Return:
				case Void:
				case Continue:
				case For:
				case Switch:
				case While:
				case Debugger:
				case Function_:
				case This:
				case With:
				case Default:
				case If:
				case Throw:
				case Delete:
				case In:
				case Try:
				case As:
				case From:
				case Class:
				case Enum:
				case Extends:
				case Super:
				case Const:
				case Export:
				case Import:
				case Async:
				case Await:
				case Implements:
				case StrictLet:
				case NonStrictLet:
				case Private:
				case Public:
				case Interface:
				case Package:
				case Protected:
				case Static:
				case Yield:
				case Identifier:
					{
					setState(225);
					importNamespace();
					}
					break;
				case OpenBrace:
					{
					setState(226);
					moduleItems();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(229);
				importFrom();
				setState(230);
				eos();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(232);
				match(StringLiteral);
				setState(233);
				eos();
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

	public static class ModuleItemsContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public List<AliasNameContext> aliasName() {
			return getRuleContexts(AliasNameContext.class);
		}
		public AliasNameContext aliasName(int i) {
			return getRuleContext(AliasNameContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(JavaScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(JavaScriptParser.Comma, i);
		}
		public ModuleItemsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleItems; }
	}

	public final ModuleItemsContext moduleItems() throws RecognitionException {
		ModuleItemsContext _localctx = new ModuleItemsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_moduleItems);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			match(OpenBrace);
			setState(242);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(237);
					aliasName();
					setState(238);
					match(Comma);
					}
					} 
				}
				setState(244);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			setState(249);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 57)) & ~0x3f) == 0 && ((1L << (_la - 57)) & ((1L << (NullLiteral - 57)) | (1L << (BooleanLiteral - 57)) | (1L << (Break - 57)) | (1L << (Do - 57)) | (1L << (Instanceof - 57)) | (1L << (Typeof - 57)) | (1L << (Case - 57)) | (1L << (Else - 57)) | (1L << (New - 57)) | (1L << (Var - 57)) | (1L << (Catch - 57)) | (1L << (Finally - 57)) | (1L << (Return - 57)) | (1L << (Void - 57)) | (1L << (Continue - 57)) | (1L << (For - 57)) | (1L << (Switch - 57)) | (1L << (While - 57)) | (1L << (Debugger - 57)) | (1L << (Function_ - 57)) | (1L << (This - 57)) | (1L << (With - 57)) | (1L << (Default - 57)) | (1L << (If - 57)) | (1L << (Throw - 57)) | (1L << (Delete - 57)) | (1L << (In - 57)) | (1L << (Try - 57)) | (1L << (As - 57)) | (1L << (From - 57)) | (1L << (Class - 57)) | (1L << (Enum - 57)) | (1L << (Extends - 57)) | (1L << (Super - 57)) | (1L << (Const - 57)) | (1L << (Export - 57)) | (1L << (Import - 57)) | (1L << (Async - 57)) | (1L << (Await - 57)) | (1L << (Implements - 57)) | (1L << (StrictLet - 57)) | (1L << (NonStrictLet - 57)) | (1L << (Private - 57)) | (1L << (Public - 57)) | (1L << (Interface - 57)) | (1L << (Package - 57)) | (1L << (Protected - 57)) | (1L << (Static - 57)) | (1L << (Yield - 57)) | (1L << (Identifier - 57)))) != 0)) {
				{
				setState(245);
				aliasName();
				setState(247);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(246);
					match(Comma);
					}
				}

				}
			}

			setState(251);
			match(CloseBrace);
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

	public static class ImportDefaultContext extends ParserRuleContext {
		public AliasNameContext aliasName() {
			return getRuleContext(AliasNameContext.class,0);
		}
		public TerminalNode Comma() { return getToken(JavaScriptParser.Comma, 0); }
		public ImportDefaultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDefault; }
	}

	public final ImportDefaultContext importDefault() throws RecognitionException {
		ImportDefaultContext _localctx = new ImportDefaultContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_importDefault);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			aliasName();
			setState(254);
			match(Comma);
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

	public static class ImportNamespaceContext extends ParserRuleContext {
		public TerminalNode Multiply() { return getToken(JavaScriptParser.Multiply, 0); }
		public List<IdentifierNameContext> identifierName() {
			return getRuleContexts(IdentifierNameContext.class);
		}
		public IdentifierNameContext identifierName(int i) {
			return getRuleContext(IdentifierNameContext.class,i);
		}
		public TerminalNode As() { return getToken(JavaScriptParser.As, 0); }
		public ImportNamespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importNamespace; }
	}

	public final ImportNamespaceContext importNamespace() throws RecognitionException {
		ImportNamespaceContext _localctx = new ImportNamespaceContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_importNamespace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Multiply:
				{
				setState(256);
				match(Multiply);
				}
				break;
			case NullLiteral:
			case BooleanLiteral:
			case Break:
			case Do:
			case Instanceof:
			case Typeof:
			case Case:
			case Else:
			case New:
			case Var:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Function_:
			case This:
			case With:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case As:
			case From:
			case Class:
			case Enum:
			case Extends:
			case Super:
			case Const:
			case Export:
			case Import:
			case Async:
			case Await:
			case Implements:
			case StrictLet:
			case NonStrictLet:
			case Private:
			case Public:
			case Interface:
			case Package:
			case Protected:
			case Static:
			case Yield:
			case Identifier:
				{
				setState(257);
				identifierName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==As) {
				{
				setState(260);
				match(As);
				setState(261);
				identifierName();
				}
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

	public static class ImportFromContext extends ParserRuleContext {
		public TerminalNode From() { return getToken(JavaScriptParser.From, 0); }
		public TerminalNode StringLiteral() { return getToken(JavaScriptParser.StringLiteral, 0); }
		public ImportFromContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importFrom; }
	}

	public final ImportFromContext importFrom() throws RecognitionException {
		ImportFromContext _localctx = new ImportFromContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_importFrom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(From);
			setState(265);
			match(StringLiteral);
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

	public static class AliasNameContext extends ParserRuleContext {
		public List<IdentifierNameContext> identifierName() {
			return getRuleContexts(IdentifierNameContext.class);
		}
		public IdentifierNameContext identifierName(int i) {
			return getRuleContext(IdentifierNameContext.class,i);
		}
		public TerminalNode As() { return getToken(JavaScriptParser.As, 0); }
		public AliasNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aliasName; }
	}

	public final AliasNameContext aliasName() throws RecognitionException {
		AliasNameContext _localctx = new AliasNameContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_aliasName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			identifierName();
			setState(270);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==As) {
				{
				setState(268);
				match(As);
				setState(269);
				identifierName();
				}
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

	public static class ExportStatementContext extends ParserRuleContext {
		public ExportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exportStatement; }
	 
		public ExportStatementContext() { }
		public void copyFrom(ExportStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExportDefaultDeclarationContext extends ExportStatementContext {
		public TerminalNode Export() { return getToken(JavaScriptParser.Export, 0); }
		public TerminalNode Default() { return getToken(JavaScriptParser.Default, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExportDefaultDeclarationContext(ExportStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ExportDeclarationContext extends ExportStatementContext {
		public TerminalNode Export() { return getToken(JavaScriptParser.Export, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExportFromBlockContext exportFromBlock() {
			return getRuleContext(ExportFromBlockContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public ExportDeclarationContext(ExportStatementContext ctx) { copyFrom(ctx); }
	}

	public final ExportStatementContext exportStatement() throws RecognitionException {
		ExportStatementContext _localctx = new ExportStatementContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_exportStatement);
		try {
			setState(284);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				_localctx = new ExportDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(272);
				match(Export);
				setState(275);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
				case 1:
					{
					setState(273);
					exportFromBlock();
					}
					break;
				case 2:
					{
					setState(274);
					declaration();
					}
					break;
				}
				setState(277);
				eos();
				}
				break;
			case 2:
				_localctx = new ExportDefaultDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(279);
				match(Export);
				setState(280);
				match(Default);
				setState(281);
				singleExpression(0);
				setState(282);
				eos();
				}
				break;
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

	public static class ExportFromBlockContext extends ParserRuleContext {
		public ImportNamespaceContext importNamespace() {
			return getRuleContext(ImportNamespaceContext.class,0);
		}
		public ImportFromContext importFrom() {
			return getRuleContext(ImportFromContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ModuleItemsContext moduleItems() {
			return getRuleContext(ModuleItemsContext.class,0);
		}
		public ExportFromBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exportFromBlock; }
	}

	public final ExportFromBlockContext exportFromBlock() throws RecognitionException {
		ExportFromBlockContext _localctx = new ExportFromBlockContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_exportFromBlock);
		try {
			setState(296);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Multiply:
			case NullLiteral:
			case BooleanLiteral:
			case Break:
			case Do:
			case Instanceof:
			case Typeof:
			case Case:
			case Else:
			case New:
			case Var:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Function_:
			case This:
			case With:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case As:
			case From:
			case Class:
			case Enum:
			case Extends:
			case Super:
			case Const:
			case Export:
			case Import:
			case Async:
			case Await:
			case Implements:
			case StrictLet:
			case NonStrictLet:
			case Private:
			case Public:
			case Interface:
			case Package:
			case Protected:
			case Static:
			case Yield:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(286);
				importNamespace();
				setState(287);
				importFrom();
				setState(288);
				eos();
				}
				break;
			case OpenBrace:
				enterOuterAlt(_localctx, 2);
				{
				setState(290);
				moduleItems();
				setState(292);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
				case 1:
					{
					setState(291);
					importFrom();
					}
					break;
				}
				setState(294);
				eos();
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

	public static class DeclarationContext extends ParserRuleContext {
		public VariableStatementContext variableStatement() {
			return getRuleContext(VariableStatementContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_declaration);
		try {
			setState(301);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Var:
			case Const:
			case StrictLet:
			case NonStrictLet:
				enterOuterAlt(_localctx, 1);
				{
				setState(298);
				variableStatement();
				}
				break;
			case Class:
				enterOuterAlt(_localctx, 2);
				{
				setState(299);
				classDeclaration();
				}
				break;
			case Function_:
			case Async:
				enterOuterAlt(_localctx, 3);
				{
				setState(300);
				functionDeclaration();
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

	public static class VariableStatementContext extends ParserRuleContext {
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public VariableStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableStatement; }
	}

	public final VariableStatementContext variableStatement() throws RecognitionException {
		VariableStatementContext _localctx = new VariableStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_variableStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			variableDeclarationList();
			setState(304);
			eos();
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

	public static class VariableDeclarationListContext extends ParserRuleContext {
		public VarModifierContext varModifier() {
			return getRuleContext(VarModifierContext.class,0);
		}
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(JavaScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(JavaScriptParser.Comma, i);
		}
		public VariableDeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationList; }
	}

	public final VariableDeclarationListContext variableDeclarationList() throws RecognitionException {
		VariableDeclarationListContext _localctx = new VariableDeclarationListContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_variableDeclarationList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			varModifier();
			setState(307);
			variableDeclaration();
			setState(312);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(308);
					match(Comma);
					setState(309);
					variableDeclaration();
					}
					} 
				}
				setState(314);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
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

	public static class VariableDeclarationContext extends ParserRuleContext {
		public AssignableContext assignable() {
			return getRuleContext(AssignableContext.class,0);
		}
		public TerminalNode Assign() { return getToken(JavaScriptParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			assignable();
			setState(318);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(316);
				match(Assign);
				setState(317);
				singleExpression(0);
				}
				break;
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

	public static class EmptyStatement_Context extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(JavaScriptParser.SemiColon, 0); }
		public EmptyStatement_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement_; }
	}

	public final EmptyStatement_Context emptyStatement_() throws RecognitionException {
		EmptyStatement_Context _localctx = new EmptyStatement_Context(_ctx, getState());
		enterRule(_localctx, 36, RULE_emptyStatement_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			match(SemiColon);
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

	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			if (!(this.notOpenBraceAndNotFunction())) throw new FailedPredicateException(this, "this.notOpenBraceAndNotFunction()");
			setState(323);
			expressionSequence();
			setState(324);
			eos();
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

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(JavaScriptParser.If, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode Else() { return getToken(JavaScriptParser.Else, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
			match(If);
			setState(327);
			match(OpenParen);
			setState(328);
			expressionSequence();
			setState(329);
			match(CloseParen);
			setState(330);
			statement();
			setState(333);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				setState(331);
				match(Else);
				setState(332);
				statement();
				}
				break;
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

	public static class IterationStatementContext extends ParserRuleContext {
		public IterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterationStatement; }
	 
		public IterationStatementContext() { }
		public void copyFrom(IterationStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DoStatementContext extends IterationStatementContext {
		public TerminalNode Do() { return getToken(JavaScriptParser.Do, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode While() { return getToken(JavaScriptParser.While, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public DoStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class WhileStatementContext extends IterationStatementContext {
		public TerminalNode While() { return getToken(JavaScriptParser.While, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForStatementContext extends IterationStatementContext {
		public TerminalNode For() { return getToken(JavaScriptParser.For, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public List<TerminalNode> SemiColon() { return getTokens(JavaScriptParser.SemiColon); }
		public TerminalNode SemiColon(int i) {
			return getToken(JavaScriptParser.SemiColon, i);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public List<ExpressionSequenceContext> expressionSequence() {
			return getRuleContexts(ExpressionSequenceContext.class);
		}
		public ExpressionSequenceContext expressionSequence(int i) {
			return getRuleContext(ExpressionSequenceContext.class,i);
		}
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public ForStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForInStatementContext extends IterationStatementContext {
		public TerminalNode For() { return getToken(JavaScriptParser.For, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public TerminalNode In() { return getToken(JavaScriptParser.In, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public ForInStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForOfStatementContext extends IterationStatementContext {
		public TerminalNode For() { return getToken(JavaScriptParser.For, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public TerminalNode Await() { return getToken(JavaScriptParser.Await, 0); }
		public ForOfStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}

	public final IterationStatementContext iterationStatement() throws RecognitionException {
		IterationStatementContext _localctx = new IterationStatementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_iterationStatement);
		int _la;
		try {
			setState(391);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				_localctx = new DoStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(335);
				match(Do);
				setState(336);
				statement();
				setState(337);
				match(While);
				setState(338);
				match(OpenParen);
				setState(339);
				expressionSequence();
				setState(340);
				match(CloseParen);
				setState(341);
				eos();
				}
				break;
			case 2:
				_localctx = new WhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(343);
				match(While);
				setState(344);
				match(OpenParen);
				setState(345);
				expressionSequence();
				setState(346);
				match(CloseParen);
				setState(347);
				statement();
				}
				break;
			case 3:
				_localctx = new ForStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(349);
				match(For);
				setState(350);
				match(OpenParen);
				setState(353);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
				case 1:
					{
					setState(351);
					expressionSequence();
					}
					break;
				case 2:
					{
					setState(352);
					variableDeclarationList();
					}
					break;
				}
				setState(355);
				match(SemiColon);
				setState(357);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Ellipsis) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BigHexIntegerLiteral - 64)) | (1L << (BigOctalIntegerLiteral - 64)) | (1L << (BigBinaryIntegerLiteral - 64)) | (1L << (BigDecimalIntegerLiteral - 64)) | (1L << (Typeof - 64)) | (1L << (New - 64)) | (1L << (Void - 64)) | (1L << (Function_ - 64)) | (1L << (This - 64)) | (1L << (Delete - 64)) | (1L << (Class - 64)) | (1L << (Super - 64)) | (1L << (Import - 64)) | (1L << (Async - 64)) | (1L << (Await - 64)) | (1L << (NonStrictLet - 64)) | (1L << (Yield - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)) | (1L << (BackTick - 64)) | (1L << (RegularExpressionLiteral - 64)))) != 0)) {
					{
					setState(356);
					expressionSequence();
					}
				}

				setState(359);
				match(SemiColon);
				setState(361);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Ellipsis) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BigHexIntegerLiteral - 64)) | (1L << (BigOctalIntegerLiteral - 64)) | (1L << (BigBinaryIntegerLiteral - 64)) | (1L << (BigDecimalIntegerLiteral - 64)) | (1L << (Typeof - 64)) | (1L << (New - 64)) | (1L << (Void - 64)) | (1L << (Function_ - 64)) | (1L << (This - 64)) | (1L << (Delete - 64)) | (1L << (Class - 64)) | (1L << (Super - 64)) | (1L << (Import - 64)) | (1L << (Async - 64)) | (1L << (Await - 64)) | (1L << (NonStrictLet - 64)) | (1L << (Yield - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)) | (1L << (BackTick - 64)) | (1L << (RegularExpressionLiteral - 64)))) != 0)) {
					{
					setState(360);
					expressionSequence();
					}
				}

				setState(363);
				match(CloseParen);
				setState(364);
				statement();
				}
				break;
			case 4:
				_localctx = new ForInStatementContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(365);
				match(For);
				setState(366);
				match(OpenParen);
				setState(369);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
				case 1:
					{
					setState(367);
					singleExpression(0);
					}
					break;
				case 2:
					{
					setState(368);
					variableDeclarationList();
					}
					break;
				}
				setState(371);
				match(In);
				setState(372);
				expressionSequence();
				setState(373);
				match(CloseParen);
				setState(374);
				statement();
				}
				break;
			case 5:
				_localctx = new ForOfStatementContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(376);
				match(For);
				setState(378);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Await) {
					{
					setState(377);
					match(Await);
					}
				}

				setState(380);
				match(OpenParen);
				setState(383);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
				case 1:
					{
					setState(381);
					singleExpression(0);
					}
					break;
				case 2:
					{
					setState(382);
					variableDeclarationList();
					}
					break;
				}
				setState(385);
				identifier();
				setState(386);
				if (!(this.p("of"))) throw new FailedPredicateException(this, "this.p(\"of\")");
				setState(387);
				expressionSequence();
				setState(388);
				match(CloseParen);
				setState(389);
				statement();
				}
				break;
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

	public static class VarModifierContext extends ParserRuleContext {
		public TerminalNode Var() { return getToken(JavaScriptParser.Var, 0); }
		public Let_Context let_() {
			return getRuleContext(Let_Context.class,0);
		}
		public TerminalNode Const() { return getToken(JavaScriptParser.Const, 0); }
		public VarModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varModifier; }
	}

	public final VarModifierContext varModifier() throws RecognitionException {
		VarModifierContext _localctx = new VarModifierContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_varModifier);
		try {
			setState(396);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Var:
				enterOuterAlt(_localctx, 1);
				{
				setState(393);
				match(Var);
				}
				break;
			case StrictLet:
			case NonStrictLet:
				enterOuterAlt(_localctx, 2);
				{
				setState(394);
				let_();
				}
				break;
			case Const:
				enterOuterAlt(_localctx, 3);
				{
				setState(395);
				match(Const);
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

	public static class ContinueStatementContext extends ParserRuleContext {
		public TerminalNode Continue() { return getToken(JavaScriptParser.Continue, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			match(Continue);
			setState(401);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				{
				setState(399);
				if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
				setState(400);
				identifier();
				}
				break;
			}
			setState(403);
			eos();
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

	public static class BreakStatementContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(JavaScriptParser.Break, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			match(Break);
			setState(408);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				{
				setState(406);
				if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
				setState(407);
				identifier();
				}
				break;
			}
			setState(410);
			eos();
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

	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode Return() { return getToken(JavaScriptParser.Return, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public HtmlElementsContext htmlElements() {
			return getRuleContext(HtmlElementsContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_returnStatement);
		try {
			setState(424);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(412);
				match(Return);
				setState(415);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
				case 1:
					{
					setState(413);
					if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
					setState(414);
					expressionSequence();
					}
					break;
				}
				setState(417);
				eos();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(418);
				match(Return);
				setState(419);
				match(OpenParen);
				setState(420);
				htmlElements();
				setState(421);
				match(CloseParen);
				setState(422);
				eos();
				}
				break;
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

	public static class YieldStatementContext extends ParserRuleContext {
		public TerminalNode Yield() { return getToken(JavaScriptParser.Yield, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public YieldStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yieldStatement; }
	}

	public final YieldStatementContext yieldStatement() throws RecognitionException {
		YieldStatementContext _localctx = new YieldStatementContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_yieldStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			match(Yield);
			setState(429);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				{
				setState(427);
				if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
				setState(428);
				expressionSequence();
				}
				break;
			}
			setState(431);
			eos();
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

	public static class WithStatementContext extends ParserRuleContext {
		public TerminalNode With() { return getToken(JavaScriptParser.With, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WithStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withStatement; }
	}

	public final WithStatementContext withStatement() throws RecognitionException {
		WithStatementContext _localctx = new WithStatementContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_withStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(433);
			match(With);
			setState(434);
			match(OpenParen);
			setState(435);
			expressionSequence();
			setState(436);
			match(CloseParen);
			setState(437);
			statement();
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

	public static class SwitchStatementContext extends ParserRuleContext {
		public TerminalNode Switch() { return getToken(JavaScriptParser.Switch, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public CaseBlockContext caseBlock() {
			return getRuleContext(CaseBlockContext.class,0);
		}
		public SwitchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchStatement; }
	}

	public final SwitchStatementContext switchStatement() throws RecognitionException {
		SwitchStatementContext _localctx = new SwitchStatementContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_switchStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(439);
			match(Switch);
			setState(440);
			match(OpenParen);
			setState(441);
			expressionSequence();
			setState(442);
			match(CloseParen);
			setState(443);
			caseBlock();
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

	public static class CaseBlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public List<CaseClausesContext> caseClauses() {
			return getRuleContexts(CaseClausesContext.class);
		}
		public CaseClausesContext caseClauses(int i) {
			return getRuleContext(CaseClausesContext.class,i);
		}
		public DefaultClauseContext defaultClause() {
			return getRuleContext(DefaultClauseContext.class,0);
		}
		public CaseBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseBlock; }
	}

	public final CaseBlockContext caseBlock() throws RecognitionException {
		CaseBlockContext _localctx = new CaseBlockContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_caseBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(445);
			match(OpenBrace);
			setState(447);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Case) {
				{
				setState(446);
				caseClauses();
				}
			}

			setState(453);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Default) {
				{
				setState(449);
				defaultClause();
				setState(451);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Case) {
					{
					setState(450);
					caseClauses();
					}
				}

				}
			}

			setState(455);
			match(CloseBrace);
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

	public static class CaseClausesContext extends ParserRuleContext {
		public List<CaseClauseContext> caseClause() {
			return getRuleContexts(CaseClauseContext.class);
		}
		public CaseClauseContext caseClause(int i) {
			return getRuleContext(CaseClauseContext.class,i);
		}
		public CaseClausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClauses; }
	}

	public final CaseClausesContext caseClauses() throws RecognitionException {
		CaseClausesContext _localctx = new CaseClausesContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_caseClauses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(458); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(457);
				caseClause();
				}
				}
				setState(460); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Case );
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

	public static class CaseClauseContext extends ParserRuleContext {
		public TerminalNode Case() { return getToken(JavaScriptParser.Case, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode Colon() { return getToken(JavaScriptParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public CaseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClause; }
	}

	public final CaseClauseContext caseClause() throws RecognitionException {
		CaseClauseContext _localctx = new CaseClauseContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_caseClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(462);
			match(Case);
			setState(463);
			expressionSequence();
			setState(464);
			match(Colon);
			setState(466);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				{
				setState(465);
				statementList();
				}
				break;
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

	public static class DefaultClauseContext extends ParserRuleContext {
		public TerminalNode Default() { return getToken(JavaScriptParser.Default, 0); }
		public TerminalNode Colon() { return getToken(JavaScriptParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public DefaultClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultClause; }
	}

	public final DefaultClauseContext defaultClause() throws RecognitionException {
		DefaultClauseContext _localctx = new DefaultClauseContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_defaultClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(468);
			match(Default);
			setState(469);
			match(Colon);
			setState(471);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				{
				setState(470);
				statementList();
				}
				break;
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

	public static class LabelledStatementContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode Colon() { return getToken(JavaScriptParser.Colon, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public LabelledStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labelledStatement; }
	}

	public final LabelledStatementContext labelledStatement() throws RecognitionException {
		LabelledStatementContext _localctx = new LabelledStatementContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_labelledStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(473);
			identifier();
			setState(474);
			match(Colon);
			setState(475);
			statement();
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

	public static class ThrowStatementContext extends ParserRuleContext {
		public TerminalNode Throw() { return getToken(JavaScriptParser.Throw, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ThrowStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throwStatement; }
	}

	public final ThrowStatementContext throwStatement() throws RecognitionException {
		ThrowStatementContext _localctx = new ThrowStatementContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_throwStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(477);
			match(Throw);
			setState(478);
			if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
			setState(479);
			expressionSequence();
			setState(480);
			eos();
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

	public static class TryStatementContext extends ParserRuleContext {
		public TerminalNode Try() { return getToken(JavaScriptParser.Try, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public CatchProductionContext catchProduction() {
			return getRuleContext(CatchProductionContext.class,0);
		}
		public FinallyProductionContext finallyProduction() {
			return getRuleContext(FinallyProductionContext.class,0);
		}
		public TryStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryStatement; }
	}

	public final TryStatementContext tryStatement() throws RecognitionException {
		TryStatementContext _localctx = new TryStatementContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_tryStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(482);
			match(Try);
			setState(483);
			block();
			setState(489);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Catch:
				{
				setState(484);
				catchProduction();
				setState(486);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
				case 1:
					{
					setState(485);
					finallyProduction();
					}
					break;
				}
				}
				break;
			case Finally:
				{
				setState(488);
				finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public static class CatchProductionContext extends ParserRuleContext {
		public TerminalNode Catch() { return getToken(JavaScriptParser.Catch, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public AssignableContext assignable() {
			return getRuleContext(AssignableContext.class,0);
		}
		public CatchProductionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchProduction; }
	}

	public final CatchProductionContext catchProduction() throws RecognitionException {
		CatchProductionContext _localctx = new CatchProductionContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_catchProduction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			match(Catch);
			setState(497);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OpenParen) {
				{
				setState(492);
				match(OpenParen);
				setState(494);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OpenBracket || _la==OpenBrace || ((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (Async - 103)) | (1L << (NonStrictLet - 103)) | (1L << (Identifier - 103)))) != 0)) {
					{
					setState(493);
					assignable();
					}
				}

				setState(496);
				match(CloseParen);
				}
			}

			setState(499);
			block();
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

	public static class FinallyProductionContext extends ParserRuleContext {
		public TerminalNode Finally() { return getToken(JavaScriptParser.Finally, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FinallyProductionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finallyProduction; }
	}

	public final FinallyProductionContext finallyProduction() throws RecognitionException {
		FinallyProductionContext _localctx = new FinallyProductionContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_finallyProduction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(501);
			match(Finally);
			setState(502);
			block();
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

	public static class DebuggerStatementContext extends ParserRuleContext {
		public TerminalNode Debugger() { return getToken(JavaScriptParser.Debugger, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public DebuggerStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_debuggerStatement; }
	}

	public final DebuggerStatementContext debuggerStatement() throws RecognitionException {
		DebuggerStatementContext _localctx = new DebuggerStatementContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_debuggerStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(504);
			match(Debugger);
			setState(505);
			eos();
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

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode Function_() { return getToken(JavaScriptParser.Function_, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public TerminalNode Async() { return getToken(JavaScriptParser.Async, 0); }
		public TerminalNode Multiply() { return getToken(JavaScriptParser.Multiply, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(508);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Async) {
				{
				setState(507);
				match(Async);
				}
			}

			setState(510);
			match(Function_);
			setState(512);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Multiply) {
				{
				setState(511);
				match(Multiply);
				}
			}

			setState(514);
			identifier();
			setState(515);
			match(OpenParen);
			setState(517);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenBrace) | (1L << Ellipsis))) != 0) || ((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (Async - 103)) | (1L << (NonStrictLet - 103)) | (1L << (Identifier - 103)))) != 0)) {
				{
				setState(516);
				formalParameterList();
				}
			}

			setState(519);
			match(CloseParen);
			setState(520);
			match(OpenBrace);
			setState(521);
			functionBody();
			setState(522);
			match(CloseBrace);
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

	public static class ClassDeclarationContext extends ParserRuleContext {
		public TerminalNode Class() { return getToken(JavaScriptParser.Class, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassTailContext classTail() {
			return getRuleContext(ClassTailContext.class,0);
		}
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_classDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(524);
			match(Class);
			setState(525);
			identifier();
			setState(526);
			classTail();
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

	public static class ClassTailContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public TerminalNode Extends() { return getToken(JavaScriptParser.Extends, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public List<ClassElementContext> classElement() {
			return getRuleContexts(ClassElementContext.class);
		}
		public ClassElementContext classElement(int i) {
			return getRuleContext(ClassElementContext.class,i);
		}
		public ClassTailContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classTail; }
	}

	public final ClassTailContext classTail() throws RecognitionException {
		ClassTailContext _localctx = new ClassTailContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_classTail);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(530);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Extends) {
				{
				setState(528);
				match(Extends);
				setState(529);
				singleExpression(0);
				}
			}

			setState(532);
			match(OpenBrace);
			setState(536);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(533);
					classElement();
					}
					} 
				}
				setState(538);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			}
			setState(539);
			match(CloseBrace);
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

	public static class ClassElementContext extends ParserRuleContext {
		public MethodDefinitionContext methodDefinition() {
			return getRuleContext(MethodDefinitionContext.class,0);
		}
		public AssignableContext assignable() {
			return getRuleContext(AssignableContext.class,0);
		}
		public TerminalNode Assign() { return getToken(JavaScriptParser.Assign, 0); }
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(JavaScriptParser.SemiColon, 0); }
		public List<TerminalNode> Static() { return getTokens(JavaScriptParser.Static); }
		public TerminalNode Static(int i) {
			return getToken(JavaScriptParser.Static, i);
		}
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<TerminalNode> Async() { return getTokens(JavaScriptParser.Async); }
		public TerminalNode Async(int i) {
			return getToken(JavaScriptParser.Async, i);
		}
		public EmptyStatement_Context emptyStatement_() {
			return getRuleContext(EmptyStatement_Context.class,0);
		}
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode Hashtag() { return getToken(JavaScriptParser.Hashtag, 0); }
		public ClassElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classElement; }
	}

	public final ClassElementContext classElement() throws RecognitionException {
		ClassElementContext _localctx = new ClassElementContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_classElement);
		int _la;
		try {
			int _alt;
			setState(566);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(547);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,51,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						setState(545);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
						case 1:
							{
							setState(541);
							match(Static);
							}
							break;
						case 2:
							{
							setState(542);
							if (!(this.n("static"))) throw new FailedPredicateException(this, "this.n(\"static\")");
							setState(543);
							identifier();
							}
							break;
						case 3:
							{
							setState(544);
							match(Async);
							}
							break;
						}
						} 
					}
					setState(549);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,51,_ctx);
				}
				setState(556);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
				case 1:
					{
					setState(550);
					methodDefinition();
					}
					break;
				case 2:
					{
					setState(551);
					assignable();
					setState(552);
					match(Assign);
					setState(553);
					objectLiteral();
					setState(554);
					match(SemiColon);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(558);
				emptyStatement_();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(560);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Hashtag) {
					{
					setState(559);
					match(Hashtag);
					}
				}

				setState(562);
				propertyName();
				setState(563);
				match(Assign);
				setState(564);
				singleExpression(0);
				}
				break;
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

	public static class MethodDefinitionContext extends ParserRuleContext {
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public TerminalNode Multiply() { return getToken(JavaScriptParser.Multiply, 0); }
		public TerminalNode Hashtag() { return getToken(JavaScriptParser.Hashtag, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public GetterContext getter() {
			return getRuleContext(GetterContext.class,0);
		}
		public SetterContext setter() {
			return getRuleContext(SetterContext.class,0);
		}
		public MethodDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodDefinition; }
	}

	public final MethodDefinitionContext methodDefinition() throws RecognitionException {
		MethodDefinitionContext _localctx = new MethodDefinitionContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_methodDefinition);
		int _la;
		try {
			setState(613);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(569);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Multiply) {
					{
					setState(568);
					match(Multiply);
					}
				}

				setState(572);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Hashtag) {
					{
					setState(571);
					match(Hashtag);
					}
				}

				setState(574);
				propertyName();
				setState(575);
				match(OpenParen);
				setState(577);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenBrace) | (1L << Ellipsis))) != 0) || ((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (Async - 103)) | (1L << (NonStrictLet - 103)) | (1L << (Identifier - 103)))) != 0)) {
					{
					setState(576);
					formalParameterList();
					}
				}

				setState(579);
				match(CloseParen);
				setState(580);
				match(OpenBrace);
				setState(581);
				functionBody();
				setState(582);
				match(CloseBrace);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(585);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Multiply) {
					{
					setState(584);
					match(Multiply);
					}
				}

				setState(588);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Hashtag) {
					{
					setState(587);
					match(Hashtag);
					}
				}

				setState(590);
				getter();
				setState(591);
				match(OpenParen);
				setState(592);
				match(CloseParen);
				setState(593);
				match(OpenBrace);
				setState(594);
				functionBody();
				setState(595);
				match(CloseBrace);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(598);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Multiply) {
					{
					setState(597);
					match(Multiply);
					}
				}

				setState(601);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Hashtag) {
					{
					setState(600);
					match(Hashtag);
					}
				}

				setState(603);
				setter();
				setState(604);
				match(OpenParen);
				setState(606);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenBrace) | (1L << Ellipsis))) != 0) || ((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (Async - 103)) | (1L << (NonStrictLet - 103)) | (1L << (Identifier - 103)))) != 0)) {
					{
					setState(605);
					formalParameterList();
					}
				}

				setState(608);
				match(CloseParen);
				setState(609);
				match(OpenBrace);
				setState(610);
				functionBody();
				setState(611);
				match(CloseBrace);
				}
				break;
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

	public static class FormalParameterListContext extends ParserRuleContext {
		public List<FormalParameterArgContext> formalParameterArg() {
			return getRuleContexts(FormalParameterArgContext.class);
		}
		public FormalParameterArgContext formalParameterArg(int i) {
			return getRuleContext(FormalParameterArgContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(JavaScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(JavaScriptParser.Comma, i);
		}
		public LastFormalParameterArgContext lastFormalParameterArg() {
			return getRuleContext(LastFormalParameterArgContext.class,0);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_formalParameterList);
		int _la;
		try {
			int _alt;
			setState(628);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenBracket:
			case OpenBrace:
			case Async:
			case NonStrictLet:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(615);
				formalParameterArg();
				setState(620);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,64,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(616);
						match(Comma);
						setState(617);
						formalParameterArg();
						}
						} 
					}
					setState(622);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,64,_ctx);
				}
				setState(625);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(623);
					match(Comma);
					setState(624);
					lastFormalParameterArg();
					}
				}

				}
				break;
			case Ellipsis:
				enterOuterAlt(_localctx, 2);
				{
				setState(627);
				lastFormalParameterArg();
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

	public static class FormalParameterArgContext extends ParserRuleContext {
		public AssignableContext assignable() {
			return getRuleContext(AssignableContext.class,0);
		}
		public TerminalNode Assign() { return getToken(JavaScriptParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public FormalParameterArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterArg; }
	}

	public final FormalParameterArgContext formalParameterArg() throws RecognitionException {
		FormalParameterArgContext _localctx = new FormalParameterArgContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_formalParameterArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(630);
			assignable();
			setState(633);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(631);
				match(Assign);
				setState(632);
				singleExpression(0);
				}
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

	public static class LastFormalParameterArgContext extends ParserRuleContext {
		public TerminalNode Ellipsis() { return getToken(JavaScriptParser.Ellipsis, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public LastFormalParameterArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lastFormalParameterArg; }
	}

	public final LastFormalParameterArgContext lastFormalParameterArg() throws RecognitionException {
		LastFormalParameterArgContext _localctx = new LastFormalParameterArgContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_lastFormalParameterArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(635);
			match(Ellipsis);
			setState(636);
			singleExpression(0);
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

	public static class FunctionBodyContext extends ParserRuleContext {
		public SourceElementsContext sourceElements() {
			return getRuleContext(SourceElementsContext.class,0);
		}
		public FunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBody; }
	}

	public final FunctionBodyContext functionBody() throws RecognitionException {
		FunctionBodyContext _localctx = new FunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_functionBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(639);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,68,_ctx) ) {
			case 1:
				{
				setState(638);
				sourceElements();
				}
				break;
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

	public static class SourceElementsContext extends ParserRuleContext {
		public List<SourceElementContext> sourceElement() {
			return getRuleContexts(SourceElementContext.class);
		}
		public SourceElementContext sourceElement(int i) {
			return getRuleContext(SourceElementContext.class,i);
		}
		public SourceElementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceElements; }
	}

	public final SourceElementsContext sourceElements() throws RecognitionException {
		SourceElementsContext _localctx = new SourceElementsContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_sourceElements);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(642); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(641);
					sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(644); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,69,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
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

	public static class ArrayLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(JavaScriptParser.OpenBracket, 0); }
		public ElementListContext elementList() {
			return getRuleContext(ElementListContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(JavaScriptParser.CloseBracket, 0); }
		public ArrayLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayLiteral; }
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_arrayLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(646);
			match(OpenBracket);
			setState(647);
			elementList();
			setState(648);
			match(CloseBracket);
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

	public static class ElementListContext extends ParserRuleContext {
		public List<TerminalNode> Comma() { return getTokens(JavaScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(JavaScriptParser.Comma, i);
		}
		public List<ArrayElementContext> arrayElement() {
			return getRuleContexts(ArrayElementContext.class);
		}
		public ArrayElementContext arrayElement(int i) {
			return getRuleContext(ArrayElementContext.class,i);
		}
		public ElementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementList; }
	}

	public final ElementListContext elementList() throws RecognitionException {
		ElementListContext _localctx = new ElementListContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_elementList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(653);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,70,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(650);
					match(Comma);
					}
					} 
				}
				setState(655);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,70,_ctx);
			}
			setState(657);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Ellipsis) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BigHexIntegerLiteral - 64)) | (1L << (BigOctalIntegerLiteral - 64)) | (1L << (BigBinaryIntegerLiteral - 64)) | (1L << (BigDecimalIntegerLiteral - 64)) | (1L << (Typeof - 64)) | (1L << (New - 64)) | (1L << (Void - 64)) | (1L << (Function_ - 64)) | (1L << (This - 64)) | (1L << (Delete - 64)) | (1L << (Class - 64)) | (1L << (Super - 64)) | (1L << (Import - 64)) | (1L << (Async - 64)) | (1L << (Await - 64)) | (1L << (NonStrictLet - 64)) | (1L << (Yield - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)) | (1L << (BackTick - 64)) | (1L << (RegularExpressionLiteral - 64)))) != 0)) {
				{
				setState(656);
				arrayElement();
				}
			}

			setState(667);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(660); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(659);
						match(Comma);
						}
						}
						setState(662); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==Comma );
					setState(664);
					arrayElement();
					}
					} 
				}
				setState(669);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
			}
			setState(673);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(670);
				match(Comma);
				}
				}
				setState(675);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class ArrayElementContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode Ellipsis() { return getToken(JavaScriptParser.Ellipsis, 0); }
		public ArrayElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayElement; }
	}

	public final ArrayElementContext arrayElement() throws RecognitionException {
		ArrayElementContext _localctx = new ArrayElementContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_arrayElement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(677);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ellipsis) {
				{
				setState(676);
				match(Ellipsis);
				}
			}

			setState(679);
			singleExpression(0);
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

	public static class PropertyAssignmentContext extends ParserRuleContext {
		public PropertyAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyAssignment; }
	 
		public PropertyAssignmentContext() { }
		public void copyFrom(PropertyAssignmentContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public TerminalNode Colon() { return getToken(JavaScriptParser.Colon, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PropertyExpressionAssignmentContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}
	public static class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
		public TerminalNode OpenBracket() { return getToken(JavaScriptParser.OpenBracket, 0); }
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode CloseBracket() { return getToken(JavaScriptParser.CloseBracket, 0); }
		public TerminalNode Colon() { return getToken(JavaScriptParser.Colon, 0); }
		public ComputedPropertyExpressionAssignmentContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}
	public static class PropertyShorthandContext extends PropertyAssignmentContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode Ellipsis() { return getToken(JavaScriptParser.Ellipsis, 0); }
		public PropertyShorthandContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}
	public static class PropertySetterContext extends PropertyAssignmentContext {
		public SetterContext setter() {
			return getRuleContext(SetterContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public FormalParameterArgContext formalParameterArg() {
			return getRuleContext(FormalParameterArgContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public PropertySetterContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}
	public static class PropertyGetterContext extends PropertyAssignmentContext {
		public GetterContext getter() {
			return getRuleContext(GetterContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public PropertyGetterContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionPropertyContext extends PropertyAssignmentContext {
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public TerminalNode Async() { return getToken(JavaScriptParser.Async, 0); }
		public TerminalNode Multiply() { return getToken(JavaScriptParser.Multiply, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionPropertyContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}

	public final PropertyAssignmentContext propertyAssignment() throws RecognitionException {
		PropertyAssignmentContext _localctx = new PropertyAssignmentContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_propertyAssignment);
		int _la;
		try {
			setState(726);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,80,_ctx) ) {
			case 1:
				_localctx = new PropertyExpressionAssignmentContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(681);
				propertyName();
				setState(682);
				match(Colon);
				setState(683);
				singleExpression(0);
				}
				break;
			case 2:
				_localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(685);
				match(OpenBracket);
				setState(686);
				singleExpression(0);
				setState(687);
				match(CloseBracket);
				setState(688);
				match(Colon);
				setState(689);
				singleExpression(0);
				}
				break;
			case 3:
				_localctx = new FunctionPropertyContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(692);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,76,_ctx) ) {
				case 1:
					{
					setState(691);
					match(Async);
					}
					break;
				}
				setState(695);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Multiply) {
					{
					setState(694);
					match(Multiply);
					}
				}

				setState(697);
				propertyName();
				setState(698);
				match(OpenParen);
				setState(700);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenBrace) | (1L << Ellipsis))) != 0) || ((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (Async - 103)) | (1L << (NonStrictLet - 103)) | (1L << (Identifier - 103)))) != 0)) {
					{
					setState(699);
					formalParameterList();
					}
				}

				setState(702);
				match(CloseParen);
				setState(703);
				match(OpenBrace);
				setState(704);
				functionBody();
				setState(705);
				match(CloseBrace);
				}
				break;
			case 4:
				_localctx = new PropertyGetterContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(707);
				getter();
				setState(708);
				match(OpenParen);
				setState(709);
				match(CloseParen);
				setState(710);
				match(OpenBrace);
				setState(711);
				functionBody();
				setState(712);
				match(CloseBrace);
				}
				break;
			case 5:
				_localctx = new PropertySetterContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(714);
				setter();
				setState(715);
				match(OpenParen);
				setState(716);
				formalParameterArg();
				setState(717);
				match(CloseParen);
				setState(718);
				match(OpenBrace);
				setState(719);
				functionBody();
				setState(720);
				match(CloseBrace);
				}
				break;
			case 6:
				_localctx = new PropertyShorthandContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(723);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Ellipsis) {
					{
					setState(722);
					match(Ellipsis);
					}
				}

				setState(725);
				singleExpression(0);
				}
				break;
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

	public static class PropertyNameContext extends ParserRuleContext {
		public IdentifierNameContext identifierName() {
			return getRuleContext(IdentifierNameContext.class,0);
		}
		public TerminalNode StringLiteral() { return getToken(JavaScriptParser.StringLiteral, 0); }
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(JavaScriptParser.OpenBracket, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(JavaScriptParser.CloseBracket, 0); }
		public PropertyNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyName; }
	}

	public final PropertyNameContext propertyName() throws RecognitionException {
		PropertyNameContext _localctx = new PropertyNameContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_propertyName);
		try {
			setState(735);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
			case BooleanLiteral:
			case Break:
			case Do:
			case Instanceof:
			case Typeof:
			case Case:
			case Else:
			case New:
			case Var:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Function_:
			case This:
			case With:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case As:
			case From:
			case Class:
			case Enum:
			case Extends:
			case Super:
			case Const:
			case Export:
			case Import:
			case Async:
			case Await:
			case Implements:
			case StrictLet:
			case NonStrictLet:
			case Private:
			case Public:
			case Interface:
			case Package:
			case Protected:
			case Static:
			case Yield:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(728);
				identifierName();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(729);
				match(StringLiteral);
				}
				break;
			case DecimalLiteral:
			case HexIntegerLiteral:
			case OctalIntegerLiteral:
			case OctalIntegerLiteral2:
			case BinaryIntegerLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(730);
				numericLiteral();
				}
				break;
			case OpenBracket:
				enterOuterAlt(_localctx, 4);
				{
				setState(731);
				match(OpenBracket);
				setState(732);
				singleExpression(0);
				setState(733);
				match(CloseBracket);
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

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public List<ArgumentContext> argument() {
			return getRuleContexts(ArgumentContext.class);
		}
		public ArgumentContext argument(int i) {
			return getRuleContext(ArgumentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(JavaScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(JavaScriptParser.Comma, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_arguments);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(737);
			match(OpenParen);
			setState(749);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Ellipsis) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BigHexIntegerLiteral - 64)) | (1L << (BigOctalIntegerLiteral - 64)) | (1L << (BigBinaryIntegerLiteral - 64)) | (1L << (BigDecimalIntegerLiteral - 64)) | (1L << (Typeof - 64)) | (1L << (New - 64)) | (1L << (Void - 64)) | (1L << (Function_ - 64)) | (1L << (This - 64)) | (1L << (Delete - 64)) | (1L << (Class - 64)) | (1L << (Super - 64)) | (1L << (Import - 64)) | (1L << (Async - 64)) | (1L << (Await - 64)) | (1L << (NonStrictLet - 64)) | (1L << (Yield - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)) | (1L << (BackTick - 64)) | (1L << (RegularExpressionLiteral - 64)))) != 0)) {
				{
				setState(738);
				argument();
				setState(743);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,82,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(739);
						match(Comma);
						setState(740);
						argument();
						}
						} 
					}
					setState(745);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,82,_ctx);
				}
				setState(747);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(746);
					match(Comma);
					}
				}

				}
			}

			setState(751);
			match(CloseParen);
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

	public static class ArgumentContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode Ellipsis() { return getToken(JavaScriptParser.Ellipsis, 0); }
		public ArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument; }
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_argument);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(754);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ellipsis) {
				{
				setState(753);
				match(Ellipsis);
				}
			}

			setState(758);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
			case 1:
				{
				setState(756);
				singleExpression(0);
				}
				break;
			case 2:
				{
				setState(757);
				identifier();
				}
				break;
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

	public static class ExpressionSequenceContext extends ParserRuleContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> Ellipsis() { return getTokens(JavaScriptParser.Ellipsis); }
		public TerminalNode Ellipsis(int i) {
			return getToken(JavaScriptParser.Ellipsis, i);
		}
		public List<TerminalNode> Comma() { return getTokens(JavaScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(JavaScriptParser.Comma, i);
		}
		public ExpressionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionSequence; }
	}

	public final ExpressionSequenceContext expressionSequence() throws RecognitionException {
		ExpressionSequenceContext _localctx = new ExpressionSequenceContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_expressionSequence);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(761);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ellipsis) {
				{
				setState(760);
				match(Ellipsis);
				}
			}

			setState(763);
			singleExpression(0);
			setState(771);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(764);
					match(Comma);
					setState(766);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Ellipsis) {
						{
						setState(765);
						match(Ellipsis);
						}
					}

					setState(768);
					singleExpression(0);
					}
					} 
				}
				setState(773);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
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

	public static class SingleExpressionContext extends ParserRuleContext {
		public SingleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleExpression; }
	 
		public SingleExpressionContext() { }
		public void copyFrom(SingleExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TemplateStringExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TemplateStringLiteralContext templateStringLiteral() {
			return getRuleContext(TemplateStringLiteralContext.class,0);
		}
		public TemplateStringExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class TernaryExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode QuestionMark() { return getToken(JavaScriptParser.QuestionMark, 0); }
		public TerminalNode Colon() { return getToken(JavaScriptParser.Colon, 0); }
		public TernaryExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalAndExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode And() { return getToken(JavaScriptParser.And, 0); }
		public LogicalAndExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PowerExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Power() { return getToken(JavaScriptParser.Power, 0); }
		public PowerExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreIncrementExpressionContext extends SingleExpressionContext {
		public TerminalNode PlusPlus() { return getToken(JavaScriptParser.PlusPlus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreIncrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ObjectLiteralExpressionContext extends SingleExpressionContext {
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public ObjectLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MetaExpressionContext extends SingleExpressionContext {
		public TerminalNode New() { return getToken(JavaScriptParser.New, 0); }
		public TerminalNode Dot() { return getToken(JavaScriptParser.Dot, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public MetaExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class InExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode In() { return getToken(JavaScriptParser.In, 0); }
		public InExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Or() { return getToken(JavaScriptParser.Or, 0); }
		public LogicalOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotExpressionContext extends SingleExpressionContext {
		public TerminalNode Not() { return getToken(JavaScriptParser.Not, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public NotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreDecreaseExpressionContext extends SingleExpressionContext {
		public TerminalNode MinusMinus() { return getToken(JavaScriptParser.MinusMinus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreDecreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArgumentsExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ArgumentsExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AwaitExpressionContext extends SingleExpressionContext {
		public TerminalNode Await() { return getToken(JavaScriptParser.Await, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public AwaitExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ThisExpressionContext extends SingleExpressionContext {
		public TerminalNode This() { return getToken(JavaScriptParser.This, 0); }
		public ThisExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionExpressionContext extends SingleExpressionContext {
		public AnoymousFunctionContext anoymousFunction() {
			return getRuleContext(AnoymousFunctionContext.class,0);
		}
		public FunctionExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryMinusExpressionContext extends SingleExpressionContext {
		public TerminalNode Minus() { return getToken(JavaScriptParser.Minus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public UnaryMinusExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Assign() { return getToken(JavaScriptParser.Assign, 0); }
		public AssignmentExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostDecreaseExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode MinusMinus() { return getToken(JavaScriptParser.MinusMinus, 0); }
		public PostDecreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class TypeofExpressionContext extends SingleExpressionContext {
		public TerminalNode Typeof() { return getToken(JavaScriptParser.Typeof, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TypeofExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class InstanceofExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Instanceof() { return getToken(JavaScriptParser.Instanceof, 0); }
		public InstanceofExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryPlusExpressionContext extends SingleExpressionContext {
		public TerminalNode Plus() { return getToken(JavaScriptParser.Plus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public UnaryPlusExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class DeleteExpressionContext extends SingleExpressionContext {
		public TerminalNode Delete() { return getToken(JavaScriptParser.Delete, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public DeleteExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ImportExpressionContext extends SingleExpressionContext {
		public TerminalNode Import() { return getToken(JavaScriptParser.Import, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public ImportExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqualityExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Equals_() { return getToken(JavaScriptParser.Equals_, 0); }
		public TerminalNode NotEquals() { return getToken(JavaScriptParser.NotEquals, 0); }
		public TerminalNode IdentityEquals() { return getToken(JavaScriptParser.IdentityEquals, 0); }
		public TerminalNode IdentityNotEquals() { return getToken(JavaScriptParser.IdentityNotEquals, 0); }
		public EqualityExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitXOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BitXOr() { return getToken(JavaScriptParser.BitXOr, 0); }
		public BitXOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SuperExpressionContext extends SingleExpressionContext {
		public TerminalNode Super() { return getToken(JavaScriptParser.Super, 0); }
		public SuperExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicativeExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Multiply() { return getToken(JavaScriptParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(JavaScriptParser.Divide, 0); }
		public TerminalNode Modulus() { return getToken(JavaScriptParser.Modulus, 0); }
		public MultiplicativeExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class HtmlElementExpressionContext extends SingleExpressionContext {
		public HtmlElementsContext htmlElements() {
			return getRuleContext(HtmlElementsContext.class,0);
		}
		public HtmlElementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitShiftExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode LeftShiftArithmetic() { return getToken(JavaScriptParser.LeftShiftArithmetic, 0); }
		public TerminalNode RightShiftArithmetic() { return getToken(JavaScriptParser.RightShiftArithmetic, 0); }
		public TerminalNode RightShiftLogical() { return getToken(JavaScriptParser.RightShiftLogical, 0); }
		public BitShiftExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesizedExpressionContext extends SingleExpressionContext {
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public ParenthesizedExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditiveExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Plus() { return getToken(JavaScriptParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(JavaScriptParser.Minus, 0); }
		public AdditiveExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RelationalExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode LessThan() { return getToken(JavaScriptParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(JavaScriptParser.MoreThan, 0); }
		public TerminalNode LessThanEquals() { return getToken(JavaScriptParser.LessThanEquals, 0); }
		public TerminalNode GreaterThanEquals() { return getToken(JavaScriptParser.GreaterThanEquals, 0); }
		public RelationalExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostIncrementExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode PlusPlus() { return getToken(JavaScriptParser.PlusPlus, 0); }
		public PostIncrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class YieldExpressionContext extends SingleExpressionContext {
		public YieldStatementContext yieldStatement() {
			return getRuleContext(YieldStatementContext.class,0);
		}
		public YieldExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitNotExpressionContext extends SingleExpressionContext {
		public TerminalNode BitNot() { return getToken(JavaScriptParser.BitNot, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public BitNotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NewExpressionContext extends SingleExpressionContext {
		public TerminalNode New() { return getToken(JavaScriptParser.New, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public NewExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LiteralExpressionContext extends SingleExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayLiteralExpressionContext extends SingleExpressionContext {
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public ArrayLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberDotExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode Dot() { return getToken(JavaScriptParser.Dot, 0); }
		public IdentifierNameContext identifierName() {
			return getRuleContext(IdentifierNameContext.class,0);
		}
		public TerminalNode QuestionMark() { return getToken(JavaScriptParser.QuestionMark, 0); }
		public TerminalNode Hashtag() { return getToken(JavaScriptParser.Hashtag, 0); }
		public MemberDotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ClassExpressionContext extends SingleExpressionContext {
		public TerminalNode Class() { return getToken(JavaScriptParser.Class, 0); }
		public ClassTailContext classTail() {
			return getRuleContext(ClassTailContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberIndexExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(JavaScriptParser.OpenBracket, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(JavaScriptParser.CloseBracket, 0); }
		public MemberIndexExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierExpressionContext extends SingleExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitAndExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BitAnd() { return getToken(JavaScriptParser.BitAnd, 0); }
		public BitAndExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BitOr() { return getToken(JavaScriptParser.BitOr, 0); }
		public BitOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentOperatorExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public AssignmentOperatorExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class VoidExpressionContext extends SingleExpressionContext {
		public TerminalNode Void() { return getToken(JavaScriptParser.Void, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public VoidExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CoalesceExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode NullCoalesce() { return getToken(JavaScriptParser.NullCoalesce, 0); }
		public CoalesceExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}

	public final SingleExpressionContext singleExpression() throws RecognitionException {
		return singleExpression(0);
	}

	private SingleExpressionContext singleExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SingleExpressionContext _localctx = new SingleExpressionContext(_ctx, _parentState);
		SingleExpressionContext _prevctx = _localctx;
		int _startState = 114;
		enterRecursionRule(_localctx, 114, RULE_singleExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(827);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(775);
				anoymousFunction();
				}
				break;
			case 2:
				{
				_localctx = new ClassExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(776);
				match(Class);
				setState(778);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (Async - 103)) | (1L << (NonStrictLet - 103)) | (1L << (Identifier - 103)))) != 0)) {
					{
					setState(777);
					identifier();
					}
				}

				setState(780);
				classTail();
				}
				break;
			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(781);
				match(New);
				setState(782);
				singleExpression(0);
				setState(783);
				arguments();
				}
				break;
			case 4:
				{
				_localctx = new NewExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(785);
				match(New);
				setState(786);
				singleExpression(43);
				}
				break;
			case 5:
				{
				_localctx = new MetaExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(787);
				match(New);
				setState(788);
				match(Dot);
				setState(789);
				identifier();
				}
				break;
			case 6:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(790);
				match(Delete);
				setState(791);
				singleExpression(38);
				}
				break;
			case 7:
				{
				_localctx = new VoidExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(792);
				match(Void);
				setState(793);
				singleExpression(37);
				}
				break;
			case 8:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(794);
				match(Typeof);
				setState(795);
				singleExpression(36);
				}
				break;
			case 9:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(796);
				match(PlusPlus);
				setState(797);
				singleExpression(35);
				}
				break;
			case 10:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(798);
				match(MinusMinus);
				setState(799);
				singleExpression(34);
				}
				break;
			case 11:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(800);
				match(Plus);
				setState(801);
				singleExpression(33);
				}
				break;
			case 12:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(802);
				match(Minus);
				setState(803);
				singleExpression(32);
				}
				break;
			case 13:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(804);
				match(BitNot);
				setState(805);
				singleExpression(31);
				}
				break;
			case 14:
				{
				_localctx = new NotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(806);
				match(Not);
				setState(807);
				singleExpression(30);
				}
				break;
			case 15:
				{
				_localctx = new AwaitExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(808);
				match(Await);
				setState(809);
				singleExpression(29);
				}
				break;
			case 16:
				{
				_localctx = new ImportExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(810);
				match(Import);
				setState(811);
				match(OpenParen);
				setState(812);
				singleExpression(0);
				setState(813);
				match(CloseParen);
				}
				break;
			case 17:
				{
				_localctx = new YieldExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(815);
				yieldStatement();
				}
				break;
			case 18:
				{
				_localctx = new ThisExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(816);
				match(This);
				}
				break;
			case 19:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(817);
				identifier();
				}
				break;
			case 20:
				{
				_localctx = new SuperExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(818);
				match(Super);
				}
				break;
			case 21:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(819);
				literal();
				}
				break;
			case 22:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(820);
				arrayLiteral();
				}
				break;
			case 23:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(821);
				objectLiteral();
				}
				break;
			case 24:
				{
				_localctx = new HtmlElementExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(822);
				htmlElements();
				}
				break;
			case 25:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(823);
				match(OpenParen);
				setState(824);
				expressionSequence();
				setState(825);
				match(CloseParen);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(910);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,95,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(908);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,94,_ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(829);
						if (!(precpred(_ctx, 28))) throw new FailedPredicateException(this, "precpred(_ctx, 28)");
						setState(830);
						match(Power);
						setState(831);
						singleExpression(28);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(832);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(833);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Multiply) | (1L << Divide) | (1L << Modulus))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(834);
						singleExpression(28);
						}
						break;
					case 3:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(835);
						if (!(precpred(_ctx, 26))) throw new FailedPredicateException(this, "precpred(_ctx, 26)");
						setState(836);
						_la = _input.LA(1);
						if ( !(_la==Plus || _la==Minus) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(837);
						singleExpression(27);
						}
						break;
					case 4:
						{
						_localctx = new CoalesceExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(838);
						if (!(precpred(_ctx, 25))) throw new FailedPredicateException(this, "precpred(_ctx, 25)");
						setState(839);
						match(NullCoalesce);
						setState(840);
						singleExpression(26);
						}
						break;
					case 5:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(841);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(842);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RightShiftArithmetic) | (1L << LeftShiftArithmetic) | (1L << RightShiftLogical))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(843);
						singleExpression(25);
						}
						break;
					case 6:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(844);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(845);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LessThan) | (1L << MoreThan) | (1L << LessThanEquals) | (1L << GreaterThanEquals))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(846);
						singleExpression(24);
						}
						break;
					case 7:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(847);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(848);
						match(Instanceof);
						setState(849);
						singleExpression(23);
						}
						break;
					case 8:
						{
						_localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(850);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(851);
						match(In);
						setState(852);
						singleExpression(22);
						}
						break;
					case 9:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(853);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(854);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Equals_) | (1L << NotEquals) | (1L << IdentityEquals) | (1L << IdentityNotEquals))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(855);
						singleExpression(21);
						}
						break;
					case 10:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(856);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(857);
						match(BitAnd);
						setState(858);
						singleExpression(20);
						}
						break;
					case 11:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(859);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(860);
						match(BitXOr);
						setState(861);
						singleExpression(19);
						}
						break;
					case 12:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(862);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(863);
						match(BitOr);
						setState(864);
						singleExpression(18);
						}
						break;
					case 13:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(865);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(866);
						match(And);
						setState(867);
						singleExpression(17);
						}
						break;
					case 14:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(868);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(869);
						match(Or);
						setState(870);
						singleExpression(16);
						}
						break;
					case 15:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(871);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(872);
						match(QuestionMark);
						setState(873);
						singleExpression(0);
						setState(874);
						match(Colon);
						setState(875);
						singleExpression(15);
						}
						break;
					case 16:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(877);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(878);
						match(Assign);
						setState(879);
						singleExpression(13);
						}
						break;
					case 17:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(880);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(881);
						assignmentOperator();
						setState(882);
						singleExpression(12);
						}
						break;
					case 18:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(884);
						if (!(precpred(_ctx, 46))) throw new FailedPredicateException(this, "precpred(_ctx, 46)");
						setState(885);
						match(OpenBracket);
						setState(886);
						expressionSequence();
						setState(887);
						match(CloseBracket);
						}
						break;
					case 19:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(889);
						if (!(precpred(_ctx, 45))) throw new FailedPredicateException(this, "precpred(_ctx, 45)");
						setState(891);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==QuestionMark) {
							{
							setState(890);
							match(QuestionMark);
							}
						}

						setState(893);
						match(Dot);
						setState(895);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==Hashtag) {
							{
							setState(894);
							match(Hashtag);
							}
						}

						setState(897);
						identifierName();
						}
						break;
					case 20:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(898);
						if (!(precpred(_ctx, 42))) throw new FailedPredicateException(this, "precpred(_ctx, 42)");
						setState(899);
						arguments();
						}
						break;
					case 21:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(900);
						if (!(precpred(_ctx, 40))) throw new FailedPredicateException(this, "precpred(_ctx, 40)");
						setState(901);
						if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
						setState(902);
						match(PlusPlus);
						}
						break;
					case 22:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(903);
						if (!(precpred(_ctx, 39))) throw new FailedPredicateException(this, "precpred(_ctx, 39)");
						setState(904);
						if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
						setState(905);
						match(MinusMinus);
						}
						break;
					case 23:
						{
						_localctx = new TemplateStringExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(906);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(907);
						templateStringLiteral();
						}
						break;
					}
					} 
				}
				setState(912);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,95,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class HtmlElementsContext extends ParserRuleContext {
		public List<HtmlElementContext> htmlElement() {
			return getRuleContexts(HtmlElementContext.class);
		}
		public HtmlElementContext htmlElement(int i) {
			return getRuleContext(HtmlElementContext.class,i);
		}
		public HtmlElementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlElements; }
	}

	public final HtmlElementsContext htmlElements() throws RecognitionException {
		HtmlElementsContext _localctx = new HtmlElementsContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_htmlElements);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(914); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(913);
					htmlElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(916); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,96,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
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

	public static class HtmlElementContext extends ParserRuleContext {
		public List<TerminalNode> LessThan() { return getTokens(JavaScriptParser.LessThan); }
		public TerminalNode LessThan(int i) {
			return getToken(JavaScriptParser.LessThan, i);
		}
		public HtmlTagStartNameContext htmlTagStartName() {
			return getRuleContext(HtmlTagStartNameContext.class,0);
		}
		public List<TerminalNode> MoreThan() { return getTokens(JavaScriptParser.MoreThan); }
		public TerminalNode MoreThan(int i) {
			return getToken(JavaScriptParser.MoreThan, i);
		}
		public HtmlContentContext htmlContent() {
			return getRuleContext(HtmlContentContext.class,0);
		}
		public TerminalNode Divide() { return getToken(JavaScriptParser.Divide, 0); }
		public HtmlTagClosingNameContext htmlTagClosingName() {
			return getRuleContext(HtmlTagClosingNameContext.class,0);
		}
		public List<HtmlAttributeContext> htmlAttribute() {
			return getRuleContexts(HtmlAttributeContext.class);
		}
		public HtmlAttributeContext htmlAttribute(int i) {
			return getRuleContext(HtmlAttributeContext.class,i);
		}
		public HtmlTagNameContext htmlTagName() {
			return getRuleContext(HtmlTagNameContext.class,0);
		}
		public HtmlElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlElement; }
	}

	public final HtmlElementContext htmlElement() throws RecognitionException {
		HtmlElementContext _localctx = new HtmlElementContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_htmlElement);
		int _la;
		try {
			int _alt;
			setState(966);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(918);
				match(LessThan);
				setState(919);
				htmlTagStartName();
				setState(923);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Identifier || _la==TagName) {
					{
					{
					setState(920);
					htmlAttribute();
					}
					}
					setState(925);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(926);
				match(MoreThan);
				setState(927);
				htmlContent();
				setState(928);
				match(LessThan);
				setState(929);
				match(Divide);
				setState(930);
				htmlTagClosingName();
				setState(931);
				match(MoreThan);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(933);
				match(LessThan);
				setState(934);
				htmlTagName();
				setState(938);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,98,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(935);
						htmlAttribute();
						}
						} 
					}
					setState(940);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,98,_ctx);
				}
				setState(941);
				htmlContent();
				setState(942);
				match(Divide);
				setState(943);
				match(MoreThan);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(945);
				match(LessThan);
				setState(946);
				htmlTagName();
				setState(950);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Identifier || _la==TagName) {
					{
					{
					setState(947);
					htmlAttribute();
					}
					}
					setState(952);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(953);
				match(Divide);
				setState(954);
				match(MoreThan);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(956);
				match(LessThan);
				setState(957);
				htmlTagName();
				setState(961);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Identifier || _la==TagName) {
					{
					{
					setState(958);
					htmlAttribute();
					}
					}
					setState(963);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(964);
				match(MoreThan);
				}
				break;
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

	public static class HtmlContentContext extends ParserRuleContext {
		public List<HtmlChardataContext> htmlChardata() {
			return getRuleContexts(HtmlChardataContext.class);
		}
		public HtmlChardataContext htmlChardata(int i) {
			return getRuleContext(HtmlChardataContext.class,i);
		}
		public List<HtmlElementContext> htmlElement() {
			return getRuleContexts(HtmlElementContext.class);
		}
		public HtmlElementContext htmlElement(int i) {
			return getRuleContext(HtmlElementContext.class,i);
		}
		public List<ObjectExpressionSequenceContext> objectExpressionSequence() {
			return getRuleContexts(ObjectExpressionSequenceContext.class);
		}
		public ObjectExpressionSequenceContext objectExpressionSequence(int i) {
			return getRuleContext(ObjectExpressionSequenceContext.class,i);
		}
		public HtmlContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlContent; }
	}

	public final HtmlContentContext htmlContent() throws RecognitionException {
		HtmlContentContext _localctx = new HtmlContentContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_htmlContent);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(969);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
			case 1:
				{
				setState(968);
				htmlChardata();
				}
				break;
			}
			setState(980);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,105,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(973);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case LessThan:
						{
						setState(971);
						htmlElement();
						}
						break;
					case OpenBrace:
						{
						setState(972);
						objectExpressionSequence();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(976);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
					case 1:
						{
						setState(975);
						htmlChardata();
						}
						break;
					}
					}
					} 
				}
				setState(982);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,105,_ctx);
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

	public static class HtmlTagStartNameContext extends ParserRuleContext {
		public HtmlTagNameContext htmlTagName;
		public HtmlTagNameContext htmlTagName() {
			return getRuleContext(HtmlTagNameContext.class,0);
		}
		public HtmlTagStartNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlTagStartName; }
	}

	public final HtmlTagStartNameContext htmlTagStartName() throws RecognitionException {
		HtmlTagStartNameContext _localctx = new HtmlTagStartNameContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_htmlTagStartName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(983);
			((HtmlTagStartNameContext)_localctx).htmlTagName = htmlTagName();
			this.pushHtmlTagName((((HtmlTagStartNameContext)_localctx).htmlTagName!=null?_input.getText(((HtmlTagStartNameContext)_localctx).htmlTagName.start,((HtmlTagStartNameContext)_localctx).htmlTagName.stop):null));
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

	public static class HtmlTagClosingNameContext extends ParserRuleContext {
		public HtmlTagNameContext htmlTagName;
		public HtmlTagNameContext htmlTagName() {
			return getRuleContext(HtmlTagNameContext.class,0);
		}
		public HtmlTagClosingNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlTagClosingName; }
	}

	public final HtmlTagClosingNameContext htmlTagClosingName() throws RecognitionException {
		HtmlTagClosingNameContext _localctx = new HtmlTagClosingNameContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_htmlTagClosingName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(986);
			((HtmlTagClosingNameContext)_localctx).htmlTagName = htmlTagName();
			setState(987);
			if (!(this.popHtmlTagName((((HtmlTagClosingNameContext)_localctx).htmlTagName!=null?_input.getText(((HtmlTagClosingNameContext)_localctx).htmlTagName.start,((HtmlTagClosingNameContext)_localctx).htmlTagName.stop):null)))) throw new FailedPredicateException(this, "this.popHtmlTagName($htmlTagName.text)");
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

	public static class HtmlTagNameContext extends ParserRuleContext {
		public TerminalNode TagName() { return getToken(JavaScriptParser.TagName, 0); }
		public KeywordContext keyword() {
			return getRuleContext(KeywordContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(JavaScriptParser.Identifier, 0); }
		public HtmlTagNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlTagName; }
	}

	public final HtmlTagNameContext htmlTagName() throws RecognitionException {
		HtmlTagNameContext _localctx = new HtmlTagNameContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_htmlTagName);
		try {
			setState(992);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TagName:
				enterOuterAlt(_localctx, 1);
				{
				setState(989);
				match(TagName);
				}
				break;
			case Break:
			case Do:
			case Instanceof:
			case Typeof:
			case Case:
			case Else:
			case New:
			case Var:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Function_:
			case This:
			case With:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case As:
			case From:
			case Class:
			case Enum:
			case Extends:
			case Super:
			case Const:
			case Export:
			case Import:
			case Async:
			case Await:
			case Implements:
			case StrictLet:
			case NonStrictLet:
			case Private:
			case Public:
			case Interface:
			case Package:
			case Protected:
			case Static:
			case Yield:
				enterOuterAlt(_localctx, 2);
				{
				setState(990);
				keyword();
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 3);
				{
				setState(991);
				match(Identifier);
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

	public static class HtmlAttributeContext extends ParserRuleContext {
		public HtmlAttributeNameContext htmlAttributeName() {
			return getRuleContext(HtmlAttributeNameContext.class,0);
		}
		public TerminalNode Assign() { return getToken(JavaScriptParser.Assign, 0); }
		public HtmlAttributeValueContext htmlAttributeValue() {
			return getRuleContext(HtmlAttributeValueContext.class,0);
		}
		public HtmlAttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlAttribute; }
	}

	public final HtmlAttributeContext htmlAttribute() throws RecognitionException {
		HtmlAttributeContext _localctx = new HtmlAttributeContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_htmlAttribute);
		try {
			setState(999);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(994);
				htmlAttributeName();
				setState(995);
				match(Assign);
				setState(996);
				htmlAttributeValue();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(998);
				htmlAttributeName();
				}
				break;
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

	public static class HtmlAttributeNameContext extends ParserRuleContext {
		public TerminalNode TagName() { return getToken(JavaScriptParser.TagName, 0); }
		public List<TerminalNode> Identifier() { return getTokens(JavaScriptParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(JavaScriptParser.Identifier, i);
		}
		public List<TerminalNode> Minus() { return getTokens(JavaScriptParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(JavaScriptParser.Minus, i);
		}
		public HtmlAttributeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlAttributeName; }
	}

	public final HtmlAttributeNameContext htmlAttributeName() throws RecognitionException {
		HtmlAttributeNameContext _localctx = new HtmlAttributeNameContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_htmlAttributeName);
		try {
			int _alt;
			setState(1010);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TagName:
				enterOuterAlt(_localctx, 1);
				{
				setState(1001);
				match(TagName);
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(1002);
				match(Identifier);
				setState(1007);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,108,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1003);
						match(Minus);
						setState(1004);
						match(Identifier);
						}
						} 
					}
					setState(1009);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,108,_ctx);
				}
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

	public static class HtmlChardataContext extends ParserRuleContext {
		public List<TerminalNode> LessThan() { return getTokens(JavaScriptParser.LessThan); }
		public TerminalNode LessThan(int i) {
			return getToken(JavaScriptParser.LessThan, i);
		}
		public List<TerminalNode> OpenBrace() { return getTokens(JavaScriptParser.OpenBrace); }
		public TerminalNode OpenBrace(int i) {
			return getToken(JavaScriptParser.OpenBrace, i);
		}
		public HtmlChardataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlChardata; }
	}

	public final HtmlChardataContext htmlChardata() throws RecognitionException {
		HtmlChardataContext _localctx = new HtmlChardataContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_htmlChardata);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1013); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1012);
					_la = _input.LA(1);
					if ( _la <= 0 || (_la==OpenBrace || _la==LessThan) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1015); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,110,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
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

	public static class HtmlAttributeValueContext extends ParserRuleContext {
		public TerminalNode AttributeValue() { return getToken(JavaScriptParser.AttributeValue, 0); }
		public TerminalNode StringLiteral() { return getToken(JavaScriptParser.StringLiteral, 0); }
		public ObjectExpressionSequenceContext objectExpressionSequence() {
			return getRuleContext(ObjectExpressionSequenceContext.class,0);
		}
		public HtmlAttributeValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlAttributeValue; }
	}

	public final HtmlAttributeValueContext htmlAttributeValue() throws RecognitionException {
		HtmlAttributeValueContext _localctx = new HtmlAttributeValueContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_htmlAttributeValue);
		try {
			setState(1020);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AttributeValue:
				enterOuterAlt(_localctx, 1);
				{
				setState(1017);
				match(AttributeValue);
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(1018);
				match(StringLiteral);
				}
				break;
			case OpenBrace:
				enterOuterAlt(_localctx, 3);
				{
				setState(1019);
				objectExpressionSequence();
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

	public static class AssignableContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public AssignableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignable; }
	}

	public final AssignableContext assignable() throws RecognitionException {
		AssignableContext _localctx = new AssignableContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_assignable);
		try {
			setState(1025);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Async:
			case NonStrictLet:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(1022);
				identifier();
				}
				break;
			case OpenBracket:
				enterOuterAlt(_localctx, 2);
				{
				setState(1023);
				arrayLiteral();
				}
				break;
			case OpenBrace:
				enterOuterAlt(_localctx, 3);
				{
				setState(1024);
				objectLiteral();
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

	public static class ObjectLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public List<PropertyAssignmentContext> propertyAssignment() {
			return getRuleContexts(PropertyAssignmentContext.class);
		}
		public PropertyAssignmentContext propertyAssignment(int i) {
			return getRuleContext(PropertyAssignmentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(JavaScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(JavaScriptParser.Comma, i);
		}
		public ObjectLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectLiteral; }
	}

	public final ObjectLiteralContext objectLiteral() throws RecognitionException {
		ObjectLiteralContext _localctx = new ObjectLiteralContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_objectLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1027);
			match(OpenBrace);
			setState(1039);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Ellipsis) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << Multiply) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BigHexIntegerLiteral - 64)) | (1L << (BigOctalIntegerLiteral - 64)) | (1L << (BigBinaryIntegerLiteral - 64)) | (1L << (BigDecimalIntegerLiteral - 64)) | (1L << (Break - 64)) | (1L << (Do - 64)) | (1L << (Instanceof - 64)) | (1L << (Typeof - 64)) | (1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (New - 64)) | (1L << (Var - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Function_ - 64)) | (1L << (This - 64)) | (1L << (With - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (As - 64)) | (1L << (From - 64)) | (1L << (Class - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Super - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Async - 64)) | (1L << (Await - 64)) | (1L << (Implements - 64)) | (1L << (StrictLet - 64)) | (1L << (NonStrictLet - 64)) | (1L << (Private - 64)) | (1L << (Public - 64)) | (1L << (Interface - 64)) | (1L << (Package - 64)) | (1L << (Protected - 64)) | (1L << (Static - 64)) | (1L << (Yield - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)) | (1L << (BackTick - 64)) | (1L << (RegularExpressionLiteral - 64)))) != 0)) {
				{
				setState(1028);
				propertyAssignment();
				setState(1033);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,113,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1029);
						match(Comma);
						setState(1030);
						propertyAssignment();
						}
						} 
					}
					setState(1035);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,113,_ctx);
				}
				setState(1037);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(1036);
					match(Comma);
					}
				}

				}
			}

			setState(1041);
			match(CloseBrace);
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

	public static class ObjectExpressionSequenceContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public ObjectExpressionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectExpressionSequence; }
	}

	public final ObjectExpressionSequenceContext objectExpressionSequence() throws RecognitionException {
		ObjectExpressionSequenceContext _localctx = new ObjectExpressionSequenceContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_objectExpressionSequence);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1043);
			match(OpenBrace);
			setState(1044);
			expressionSequence();
			setState(1045);
			match(CloseBrace);
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

	public static class AnoymousFunctionContext extends ParserRuleContext {
		public AnoymousFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anoymousFunction; }
	 
		public AnoymousFunctionContext() { }
		public void copyFrom(AnoymousFunctionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AnoymousFunctionDeclContext extends AnoymousFunctionContext {
		public TerminalNode Function_() { return getToken(JavaScriptParser.Function_, 0); }
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public TerminalNode Async() { return getToken(JavaScriptParser.Async, 0); }
		public TerminalNode Multiply() { return getToken(JavaScriptParser.Multiply, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public AnoymousFunctionDeclContext(AnoymousFunctionContext ctx) { copyFrom(ctx); }
	}
	public static class ArrowFunctionContext extends AnoymousFunctionContext {
		public ArrowFunctionParametersContext arrowFunctionParameters() {
			return getRuleContext(ArrowFunctionParametersContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(JavaScriptParser.ARROW, 0); }
		public ArrowFunctionBodyContext arrowFunctionBody() {
			return getRuleContext(ArrowFunctionBodyContext.class,0);
		}
		public TerminalNode Async() { return getToken(JavaScriptParser.Async, 0); }
		public ArrowFunctionContext(AnoymousFunctionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionDeclContext extends AnoymousFunctionContext {
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public FunctionDeclContext(AnoymousFunctionContext ctx) { copyFrom(ctx); }
	}

	public final AnoymousFunctionContext anoymousFunction() throws RecognitionException {
		AnoymousFunctionContext _localctx = new AnoymousFunctionContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_anoymousFunction);
		int _la;
		try {
			setState(1071);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,120,_ctx) ) {
			case 1:
				_localctx = new FunctionDeclContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1047);
				functionDeclaration();
				}
				break;
			case 2:
				_localctx = new AnoymousFunctionDeclContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1049);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Async) {
					{
					setState(1048);
					match(Async);
					}
				}

				setState(1051);
				match(Function_);
				setState(1053);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Multiply) {
					{
					setState(1052);
					match(Multiply);
					}
				}

				setState(1055);
				match(OpenParen);
				setState(1057);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenBrace) | (1L << Ellipsis))) != 0) || ((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (Async - 103)) | (1L << (NonStrictLet - 103)) | (1L << (Identifier - 103)))) != 0)) {
					{
					setState(1056);
					formalParameterList();
					}
				}

				setState(1059);
				match(CloseParen);
				setState(1060);
				match(OpenBrace);
				setState(1061);
				functionBody();
				setState(1062);
				match(CloseBrace);
				}
				break;
			case 3:
				_localctx = new ArrowFunctionContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(1065);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
				case 1:
					{
					setState(1064);
					match(Async);
					}
					break;
				}
				setState(1067);
				arrowFunctionParameters();
				setState(1068);
				match(ARROW);
				setState(1069);
				arrowFunctionBody();
				}
				break;
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

	public static class ArrowFunctionParametersContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(JavaScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(JavaScriptParser.CloseParen, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public ArrowFunctionParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrowFunctionParameters; }
	}

	public final ArrowFunctionParametersContext arrowFunctionParameters() throws RecognitionException {
		ArrowFunctionParametersContext _localctx = new ArrowFunctionParametersContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_arrowFunctionParameters);
		int _la;
		try {
			setState(1079);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Async:
			case NonStrictLet:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(1073);
				identifier();
				}
				break;
			case OpenParen:
				enterOuterAlt(_localctx, 2);
				{
				setState(1074);
				match(OpenParen);
				setState(1076);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenBrace) | (1L << Ellipsis))) != 0) || ((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (Async - 103)) | (1L << (NonStrictLet - 103)) | (1L << (Identifier - 103)))) != 0)) {
					{
					setState(1075);
					formalParameterList();
					}
				}

				setState(1078);
				match(CloseParen);
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

	public static class ArrowFunctionBodyContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode OpenBrace() { return getToken(JavaScriptParser.OpenBrace, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode CloseBrace() { return getToken(JavaScriptParser.CloseBrace, 0); }
		public ArrowFunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrowFunctionBody; }
	}

	public final ArrowFunctionBodyContext arrowFunctionBody() throws RecognitionException {
		ArrowFunctionBodyContext _localctx = new ArrowFunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_arrowFunctionBody);
		try {
			setState(1086);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,123,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1081);
				singleExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1082);
				match(OpenBrace);
				setState(1083);
				functionBody();
				setState(1084);
				match(CloseBrace);
				}
				break;
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

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public TerminalNode MultiplyAssign() { return getToken(JavaScriptParser.MultiplyAssign, 0); }
		public TerminalNode DivideAssign() { return getToken(JavaScriptParser.DivideAssign, 0); }
		public TerminalNode ModulusAssign() { return getToken(JavaScriptParser.ModulusAssign, 0); }
		public TerminalNode PlusAssign() { return getToken(JavaScriptParser.PlusAssign, 0); }
		public TerminalNode MinusAssign() { return getToken(JavaScriptParser.MinusAssign, 0); }
		public TerminalNode LeftShiftArithmeticAssign() { return getToken(JavaScriptParser.LeftShiftArithmeticAssign, 0); }
		public TerminalNode RightShiftArithmeticAssign() { return getToken(JavaScriptParser.RightShiftArithmeticAssign, 0); }
		public TerminalNode RightShiftLogicalAssign() { return getToken(JavaScriptParser.RightShiftLogicalAssign, 0); }
		public TerminalNode BitAndAssign() { return getToken(JavaScriptParser.BitAndAssign, 0); }
		public TerminalNode BitXorAssign() { return getToken(JavaScriptParser.BitXorAssign, 0); }
		public TerminalNode BitOrAssign() { return getToken(JavaScriptParser.BitOrAssign, 0); }
		public TerminalNode PowerAssign() { return getToken(JavaScriptParser.PowerAssign, 0); }
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1088);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MultiplyAssign) | (1L << DivideAssign) | (1L << ModulusAssign) | (1L << PlusAssign) | (1L << MinusAssign) | (1L << LeftShiftArithmeticAssign) | (1L << RightShiftArithmeticAssign) | (1L << RightShiftLogicalAssign) | (1L << BitAndAssign) | (1L << BitXorAssign) | (1L << BitOrAssign) | (1L << PowerAssign))) != 0)) ) {
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

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode NullLiteral() { return getToken(JavaScriptParser.NullLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(JavaScriptParser.BooleanLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(JavaScriptParser.StringLiteral, 0); }
		public TemplateStringLiteralContext templateStringLiteral() {
			return getRuleContext(TemplateStringLiteralContext.class,0);
		}
		public TerminalNode RegularExpressionLiteral() { return getToken(JavaScriptParser.RegularExpressionLiteral, 0); }
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public BigintLiteralContext bigintLiteral() {
			return getRuleContext(BigintLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_literal);
		try {
			setState(1097);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(1090);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(1091);
				match(BooleanLiteral);
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(1092);
				match(StringLiteral);
				}
				break;
			case BackTick:
				enterOuterAlt(_localctx, 4);
				{
				setState(1093);
				templateStringLiteral();
				}
				break;
			case RegularExpressionLiteral:
				enterOuterAlt(_localctx, 5);
				{
				setState(1094);
				match(RegularExpressionLiteral);
				}
				break;
			case DecimalLiteral:
			case HexIntegerLiteral:
			case OctalIntegerLiteral:
			case OctalIntegerLiteral2:
			case BinaryIntegerLiteral:
				enterOuterAlt(_localctx, 6);
				{
				setState(1095);
				numericLiteral();
				}
				break;
			case BigHexIntegerLiteral:
			case BigOctalIntegerLiteral:
			case BigBinaryIntegerLiteral:
			case BigDecimalIntegerLiteral:
				enterOuterAlt(_localctx, 7);
				{
				setState(1096);
				bigintLiteral();
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

	public static class TemplateStringLiteralContext extends ParserRuleContext {
		public List<TerminalNode> BackTick() { return getTokens(JavaScriptParser.BackTick); }
		public TerminalNode BackTick(int i) {
			return getToken(JavaScriptParser.BackTick, i);
		}
		public List<TemplateStringAtomContext> templateStringAtom() {
			return getRuleContexts(TemplateStringAtomContext.class);
		}
		public TemplateStringAtomContext templateStringAtom(int i) {
			return getRuleContext(TemplateStringAtomContext.class,i);
		}
		public TemplateStringLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateStringLiteral; }
	}

	public final TemplateStringLiteralContext templateStringLiteral() throws RecognitionException {
		TemplateStringLiteralContext _localctx = new TemplateStringLiteralContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_templateStringLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1099);
			match(BackTick);
			setState(1103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TemplateStringStartExpression || _la==TemplateStringAtom) {
				{
				{
				setState(1100);
				templateStringAtom();
				}
				}
				setState(1105);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1106);
			match(BackTick);
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

	public static class TemplateStringAtomContext extends ParserRuleContext {
		public TerminalNode TemplateStringAtom() { return getToken(JavaScriptParser.TemplateStringAtom, 0); }
		public TerminalNode TemplateStringStartExpression() { return getToken(JavaScriptParser.TemplateStringStartExpression, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode TemplateCloseBrace() { return getToken(JavaScriptParser.TemplateCloseBrace, 0); }
		public TemplateStringAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateStringAtom; }
	}

	public final TemplateStringAtomContext templateStringAtom() throws RecognitionException {
		TemplateStringAtomContext _localctx = new TemplateStringAtomContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_templateStringAtom);
		try {
			setState(1113);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TemplateStringAtom:
				enterOuterAlt(_localctx, 1);
				{
				setState(1108);
				match(TemplateStringAtom);
				}
				break;
			case TemplateStringStartExpression:
				enterOuterAlt(_localctx, 2);
				{
				setState(1109);
				match(TemplateStringStartExpression);
				setState(1110);
				singleExpression(0);
				setState(1111);
				match(TemplateCloseBrace);
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

	public static class NumericLiteralContext extends ParserRuleContext {
		public TerminalNode DecimalLiteral() { return getToken(JavaScriptParser.DecimalLiteral, 0); }
		public TerminalNode HexIntegerLiteral() { return getToken(JavaScriptParser.HexIntegerLiteral, 0); }
		public TerminalNode OctalIntegerLiteral() { return getToken(JavaScriptParser.OctalIntegerLiteral, 0); }
		public TerminalNode OctalIntegerLiteral2() { return getToken(JavaScriptParser.OctalIntegerLiteral2, 0); }
		public TerminalNode BinaryIntegerLiteral() { return getToken(JavaScriptParser.BinaryIntegerLiteral, 0); }
		public NumericLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericLiteral; }
	}

	public final NumericLiteralContext numericLiteral() throws RecognitionException {
		NumericLiteralContext _localctx = new NumericLiteralContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1115);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0)) ) {
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

	public static class BigintLiteralContext extends ParserRuleContext {
		public TerminalNode BigDecimalIntegerLiteral() { return getToken(JavaScriptParser.BigDecimalIntegerLiteral, 0); }
		public TerminalNode BigHexIntegerLiteral() { return getToken(JavaScriptParser.BigHexIntegerLiteral, 0); }
		public TerminalNode BigOctalIntegerLiteral() { return getToken(JavaScriptParser.BigOctalIntegerLiteral, 0); }
		public TerminalNode BigBinaryIntegerLiteral() { return getToken(JavaScriptParser.BigBinaryIntegerLiteral, 0); }
		public BigintLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bigintLiteral; }
	}

	public final BigintLiteralContext bigintLiteral() throws RecognitionException {
		BigintLiteralContext _localctx = new BigintLiteralContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_bigintLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1117);
			_la = _input.LA(1);
			if ( !(((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BigHexIntegerLiteral - 64)) | (1L << (BigOctalIntegerLiteral - 64)) | (1L << (BigBinaryIntegerLiteral - 64)) | (1L << (BigDecimalIntegerLiteral - 64)))) != 0)) ) {
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

	public static class GetterContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public GetterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getter; }
	}

	public final GetterContext getter() throws RecognitionException {
		GetterContext _localctx = new GetterContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_getter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1119);
			identifier();
			setState(1120);
			if (!(this.p("get"))) throw new FailedPredicateException(this, "this.p(\"get\")");
			setState(1121);
			propertyName();
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

	public static class SetterContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public SetterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setter; }
	}

	public final SetterContext setter() throws RecognitionException {
		SetterContext _localctx = new SetterContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_setter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1123);
			identifier();
			setState(1124);
			if (!(this.p("set"))) throw new FailedPredicateException(this, "this.p(\"set\")");
			setState(1125);
			propertyName();
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

	public static class IdentifierNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ReservedWordContext reservedWord() {
			return getRuleContext(ReservedWordContext.class,0);
		}
		public IdentifierNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierName; }
	}

	public final IdentifierNameContext identifierName() throws RecognitionException {
		IdentifierNameContext _localctx = new IdentifierNameContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_identifierName);
		try {
			setState(1129);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,127,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1127);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1128);
				reservedWord();
				}
				break;
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

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(JavaScriptParser.Identifier, 0); }
		public TerminalNode NonStrictLet() { return getToken(JavaScriptParser.NonStrictLet, 0); }
		public TerminalNode Async() { return getToken(JavaScriptParser.Async, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_identifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1131);
			_la = _input.LA(1);
			if ( !(((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (Async - 103)) | (1L << (NonStrictLet - 103)) | (1L << (Identifier - 103)))) != 0)) ) {
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

	public static class ReservedWordContext extends ParserRuleContext {
		public KeywordContext keyword() {
			return getRuleContext(KeywordContext.class,0);
		}
		public TerminalNode NullLiteral() { return getToken(JavaScriptParser.NullLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(JavaScriptParser.BooleanLiteral, 0); }
		public ReservedWordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedWord; }
	}

	public final ReservedWordContext reservedWord() throws RecognitionException {
		ReservedWordContext _localctx = new ReservedWordContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_reservedWord);
		try {
			setState(1136);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Break:
			case Do:
			case Instanceof:
			case Typeof:
			case Case:
			case Else:
			case New:
			case Var:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Function_:
			case This:
			case With:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case As:
			case From:
			case Class:
			case Enum:
			case Extends:
			case Super:
			case Const:
			case Export:
			case Import:
			case Async:
			case Await:
			case Implements:
			case StrictLet:
			case NonStrictLet:
			case Private:
			case Public:
			case Interface:
			case Package:
			case Protected:
			case Static:
			case Yield:
				enterOuterAlt(_localctx, 1);
				{
				setState(1133);
				keyword();
				}
				break;
			case NullLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(1134);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(1135);
				match(BooleanLiteral);
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

	public static class KeywordContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(JavaScriptParser.Break, 0); }
		public TerminalNode Do() { return getToken(JavaScriptParser.Do, 0); }
		public TerminalNode Instanceof() { return getToken(JavaScriptParser.Instanceof, 0); }
		public TerminalNode Typeof() { return getToken(JavaScriptParser.Typeof, 0); }
		public TerminalNode Case() { return getToken(JavaScriptParser.Case, 0); }
		public TerminalNode Else() { return getToken(JavaScriptParser.Else, 0); }
		public TerminalNode New() { return getToken(JavaScriptParser.New, 0); }
		public TerminalNode Var() { return getToken(JavaScriptParser.Var, 0); }
		public TerminalNode Catch() { return getToken(JavaScriptParser.Catch, 0); }
		public TerminalNode Finally() { return getToken(JavaScriptParser.Finally, 0); }
		public TerminalNode Return() { return getToken(JavaScriptParser.Return, 0); }
		public TerminalNode Void() { return getToken(JavaScriptParser.Void, 0); }
		public TerminalNode Continue() { return getToken(JavaScriptParser.Continue, 0); }
		public TerminalNode For() { return getToken(JavaScriptParser.For, 0); }
		public TerminalNode Switch() { return getToken(JavaScriptParser.Switch, 0); }
		public TerminalNode While() { return getToken(JavaScriptParser.While, 0); }
		public TerminalNode Debugger() { return getToken(JavaScriptParser.Debugger, 0); }
		public TerminalNode Function_() { return getToken(JavaScriptParser.Function_, 0); }
		public TerminalNode This() { return getToken(JavaScriptParser.This, 0); }
		public TerminalNode With() { return getToken(JavaScriptParser.With, 0); }
		public TerminalNode Default() { return getToken(JavaScriptParser.Default, 0); }
		public TerminalNode If() { return getToken(JavaScriptParser.If, 0); }
		public TerminalNode Throw() { return getToken(JavaScriptParser.Throw, 0); }
		public TerminalNode Delete() { return getToken(JavaScriptParser.Delete, 0); }
		public TerminalNode In() { return getToken(JavaScriptParser.In, 0); }
		public TerminalNode Try() { return getToken(JavaScriptParser.Try, 0); }
		public TerminalNode Class() { return getToken(JavaScriptParser.Class, 0); }
		public TerminalNode Enum() { return getToken(JavaScriptParser.Enum, 0); }
		public TerminalNode Extends() { return getToken(JavaScriptParser.Extends, 0); }
		public TerminalNode Super() { return getToken(JavaScriptParser.Super, 0); }
		public TerminalNode Const() { return getToken(JavaScriptParser.Const, 0); }
		public TerminalNode Export() { return getToken(JavaScriptParser.Export, 0); }
		public TerminalNode Import() { return getToken(JavaScriptParser.Import, 0); }
		public TerminalNode Implements() { return getToken(JavaScriptParser.Implements, 0); }
		public Let_Context let_() {
			return getRuleContext(Let_Context.class,0);
		}
		public TerminalNode Private() { return getToken(JavaScriptParser.Private, 0); }
		public TerminalNode Public() { return getToken(JavaScriptParser.Public, 0); }
		public TerminalNode Interface() { return getToken(JavaScriptParser.Interface, 0); }
		public TerminalNode Package() { return getToken(JavaScriptParser.Package, 0); }
		public TerminalNode Protected() { return getToken(JavaScriptParser.Protected, 0); }
		public TerminalNode Static() { return getToken(JavaScriptParser.Static, 0); }
		public TerminalNode Yield() { return getToken(JavaScriptParser.Yield, 0); }
		public TerminalNode Async() { return getToken(JavaScriptParser.Async, 0); }
		public TerminalNode Await() { return getToken(JavaScriptParser.Await, 0); }
		public TerminalNode From() { return getToken(JavaScriptParser.From, 0); }
		public TerminalNode As() { return getToken(JavaScriptParser.As, 0); }
		public KeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyword; }
	}

	public final KeywordContext keyword() throws RecognitionException {
		KeywordContext _localctx = new KeywordContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_keyword);
		try {
			setState(1184);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Break:
				enterOuterAlt(_localctx, 1);
				{
				setState(1138);
				match(Break);
				}
				break;
			case Do:
				enterOuterAlt(_localctx, 2);
				{
				setState(1139);
				match(Do);
				}
				break;
			case Instanceof:
				enterOuterAlt(_localctx, 3);
				{
				setState(1140);
				match(Instanceof);
				}
				break;
			case Typeof:
				enterOuterAlt(_localctx, 4);
				{
				setState(1141);
				match(Typeof);
				}
				break;
			case Case:
				enterOuterAlt(_localctx, 5);
				{
				setState(1142);
				match(Case);
				}
				break;
			case Else:
				enterOuterAlt(_localctx, 6);
				{
				setState(1143);
				match(Else);
				}
				break;
			case New:
				enterOuterAlt(_localctx, 7);
				{
				setState(1144);
				match(New);
				}
				break;
			case Var:
				enterOuterAlt(_localctx, 8);
				{
				setState(1145);
				match(Var);
				}
				break;
			case Catch:
				enterOuterAlt(_localctx, 9);
				{
				setState(1146);
				match(Catch);
				}
				break;
			case Finally:
				enterOuterAlt(_localctx, 10);
				{
				setState(1147);
				match(Finally);
				}
				break;
			case Return:
				enterOuterAlt(_localctx, 11);
				{
				setState(1148);
				match(Return);
				}
				break;
			case Void:
				enterOuterAlt(_localctx, 12);
				{
				setState(1149);
				match(Void);
				}
				break;
			case Continue:
				enterOuterAlt(_localctx, 13);
				{
				setState(1150);
				match(Continue);
				}
				break;
			case For:
				enterOuterAlt(_localctx, 14);
				{
				setState(1151);
				match(For);
				}
				break;
			case Switch:
				enterOuterAlt(_localctx, 15);
				{
				setState(1152);
				match(Switch);
				}
				break;
			case While:
				enterOuterAlt(_localctx, 16);
				{
				setState(1153);
				match(While);
				}
				break;
			case Debugger:
				enterOuterAlt(_localctx, 17);
				{
				setState(1154);
				match(Debugger);
				}
				break;
			case Function_:
				enterOuterAlt(_localctx, 18);
				{
				setState(1155);
				match(Function_);
				}
				break;
			case This:
				enterOuterAlt(_localctx, 19);
				{
				setState(1156);
				match(This);
				}
				break;
			case With:
				enterOuterAlt(_localctx, 20);
				{
				setState(1157);
				match(With);
				}
				break;
			case Default:
				enterOuterAlt(_localctx, 21);
				{
				setState(1158);
				match(Default);
				}
				break;
			case If:
				enterOuterAlt(_localctx, 22);
				{
				setState(1159);
				match(If);
				}
				break;
			case Throw:
				enterOuterAlt(_localctx, 23);
				{
				setState(1160);
				match(Throw);
				}
				break;
			case Delete:
				enterOuterAlt(_localctx, 24);
				{
				setState(1161);
				match(Delete);
				}
				break;
			case In:
				enterOuterAlt(_localctx, 25);
				{
				setState(1162);
				match(In);
				}
				break;
			case Try:
				enterOuterAlt(_localctx, 26);
				{
				setState(1163);
				match(Try);
				}
				break;
			case Class:
				enterOuterAlt(_localctx, 27);
				{
				setState(1164);
				match(Class);
				}
				break;
			case Enum:
				enterOuterAlt(_localctx, 28);
				{
				setState(1165);
				match(Enum);
				}
				break;
			case Extends:
				enterOuterAlt(_localctx, 29);
				{
				setState(1166);
				match(Extends);
				}
				break;
			case Super:
				enterOuterAlt(_localctx, 30);
				{
				setState(1167);
				match(Super);
				}
				break;
			case Const:
				enterOuterAlt(_localctx, 31);
				{
				setState(1168);
				match(Const);
				}
				break;
			case Export:
				enterOuterAlt(_localctx, 32);
				{
				setState(1169);
				match(Export);
				}
				break;
			case Import:
				enterOuterAlt(_localctx, 33);
				{
				setState(1170);
				match(Import);
				}
				break;
			case Implements:
				enterOuterAlt(_localctx, 34);
				{
				setState(1171);
				match(Implements);
				}
				break;
			case StrictLet:
			case NonStrictLet:
				enterOuterAlt(_localctx, 35);
				{
				setState(1172);
				let_();
				}
				break;
			case Private:
				enterOuterAlt(_localctx, 36);
				{
				setState(1173);
				match(Private);
				}
				break;
			case Public:
				enterOuterAlt(_localctx, 37);
				{
				setState(1174);
				match(Public);
				}
				break;
			case Interface:
				enterOuterAlt(_localctx, 38);
				{
				setState(1175);
				match(Interface);
				}
				break;
			case Package:
				enterOuterAlt(_localctx, 39);
				{
				setState(1176);
				match(Package);
				}
				break;
			case Protected:
				enterOuterAlt(_localctx, 40);
				{
				setState(1177);
				match(Protected);
				}
				break;
			case Static:
				enterOuterAlt(_localctx, 41);
				{
				setState(1178);
				match(Static);
				}
				break;
			case Yield:
				enterOuterAlt(_localctx, 42);
				{
				setState(1179);
				match(Yield);
				}
				break;
			case Async:
				enterOuterAlt(_localctx, 43);
				{
				setState(1180);
				match(Async);
				}
				break;
			case Await:
				enterOuterAlt(_localctx, 44);
				{
				setState(1181);
				match(Await);
				}
				break;
			case From:
				enterOuterAlt(_localctx, 45);
				{
				setState(1182);
				match(From);
				}
				break;
			case As:
				enterOuterAlt(_localctx, 46);
				{
				setState(1183);
				match(As);
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

	public static class Let_Context extends ParserRuleContext {
		public TerminalNode NonStrictLet() { return getToken(JavaScriptParser.NonStrictLet, 0); }
		public TerminalNode StrictLet() { return getToken(JavaScriptParser.StrictLet, 0); }
		public Let_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_let_; }
	}

	public final Let_Context let_() throws RecognitionException {
		Let_Context _localctx = new Let_Context(_ctx, getState());
		enterRule(_localctx, 172, RULE_let_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1186);
			_la = _input.LA(1);
			if ( !(_la==StrictLet || _la==NonStrictLet) ) {
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

	public static class EosContext extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(JavaScriptParser.SemiColon, 0); }
		public TerminalNode EOF() { return getToken(JavaScriptParser.EOF, 0); }
		public EosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eos; }
	}

	public final EosContext eos() throws RecognitionException {
		EosContext _localctx = new EosContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_eos);
		try {
			setState(1192);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,130,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1188);
				match(SemiColon);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1189);
				match(EOF);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1190);
				if (!(this.lineTerminatorAhead())) throw new FailedPredicateException(this, "this.lineTerminatorAhead()");
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1191);
				if (!(this.closeBrace())) throw new FailedPredicateException(this, "this.closeBrace()");
				}
				break;
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 19:
			return expressionStatement_sempred((ExpressionStatementContext)_localctx, predIndex);
		case 21:
			return iterationStatement_sempred((IterationStatementContext)_localctx, predIndex);
		case 23:
			return continueStatement_sempred((ContinueStatementContext)_localctx, predIndex);
		case 24:
			return breakStatement_sempred((BreakStatementContext)_localctx, predIndex);
		case 25:
			return returnStatement_sempred((ReturnStatementContext)_localctx, predIndex);
		case 26:
			return yieldStatement_sempred((YieldStatementContext)_localctx, predIndex);
		case 34:
			return throwStatement_sempred((ThrowStatementContext)_localctx, predIndex);
		case 42:
			return classElement_sempred((ClassElementContext)_localctx, predIndex);
		case 57:
			return singleExpression_sempred((SingleExpressionContext)_localctx, predIndex);
		case 62:
			return htmlTagClosingName_sempred((HtmlTagClosingNameContext)_localctx, predIndex);
		case 80:
			return getter_sempred((GetterContext)_localctx, predIndex);
		case 81:
			return setter_sempred((SetterContext)_localctx, predIndex);
		case 87:
			return eos_sempred((EosContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expressionStatement_sempred(ExpressionStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return this.notOpenBraceAndNotFunction();
		}
		return true;
	}
	private boolean iterationStatement_sempred(IterationStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return this.p("of");
		}
		return true;
	}
	private boolean continueStatement_sempred(ContinueStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean breakStatement_sempred(BreakStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean returnStatement_sempred(ReturnStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean yieldStatement_sempred(YieldStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean throwStatement_sempred(ThrowStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean classElement_sempred(ClassElementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 7:
			return this.n("static");
		}
		return true;
	}
	private boolean singleExpression_sempred(SingleExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 8:
			return precpred(_ctx, 28);
		case 9:
			return precpred(_ctx, 27);
		case 10:
			return precpred(_ctx, 26);
		case 11:
			return precpred(_ctx, 25);
		case 12:
			return precpred(_ctx, 24);
		case 13:
			return precpred(_ctx, 23);
		case 14:
			return precpred(_ctx, 22);
		case 15:
			return precpred(_ctx, 21);
		case 16:
			return precpred(_ctx, 20);
		case 17:
			return precpred(_ctx, 19);
		case 18:
			return precpred(_ctx, 18);
		case 19:
			return precpred(_ctx, 17);
		case 20:
			return precpred(_ctx, 16);
		case 21:
			return precpred(_ctx, 15);
		case 22:
			return precpred(_ctx, 14);
		case 23:
			return precpred(_ctx, 13);
		case 24:
			return precpred(_ctx, 12);
		case 25:
			return precpred(_ctx, 46);
		case 26:
			return precpred(_ctx, 45);
		case 27:
			return precpred(_ctx, 42);
		case 28:
			return precpred(_ctx, 40);
		case 29:
			return this.notLineTerminator();
		case 30:
			return precpred(_ctx, 39);
		case 31:
			return this.notLineTerminator();
		case 32:
			return precpred(_ctx, 10);
		}
		return true;
	}
	private boolean htmlTagClosingName_sempred(HtmlTagClosingNameContext _localctx, int predIndex) {
		switch (predIndex) {
		case 33:
			return this.popHtmlTagName((((HtmlTagClosingNameContext)_localctx).htmlTagName!=null?_input.getText(((HtmlTagClosingNameContext)_localctx).htmlTagName.start,((HtmlTagClosingNameContext)_localctx).htmlTagName.stop):null));
		}
		return true;
	}
	private boolean getter_sempred(GetterContext _localctx, int predIndex) {
		switch (predIndex) {
		case 34:
			return this.p("get");
		}
		return true;
	}
	private boolean setter_sempred(SetterContext _localctx, int predIndex) {
		switch (predIndex) {
		case 35:
			return this.p("set");
		}
		return true;
	}
	private boolean eos_sempred(EosContext _localctx, int predIndex) {
		switch (predIndex) {
		case 36:
			return this.lineTerminatorAhead();
		case 37:
			return this.closeBrace();
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u008c\u04ad\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\3\2\5\2\u00b4\n\2\3\2\5\2\u00b7\n\2\3\2"+
		"\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\5\4\u00d1\n\4\3\5\3\5\5\5\u00d5\n\5\3\5\3\5\3\6"+
		"\6\6\u00da\n\6\r\6\16\6\u00db\3\7\3\7\3\7\3\b\5\b\u00e2\n\b\3\b\3\b\5"+
		"\b\u00e6\n\b\3\b\3\b\3\b\3\b\3\b\5\b\u00ed\n\b\3\t\3\t\3\t\3\t\7\t\u00f3"+
		"\n\t\f\t\16\t\u00f6\13\t\3\t\3\t\5\t\u00fa\n\t\5\t\u00fc\n\t\3\t\3\t\3"+
		"\n\3\n\3\n\3\13\3\13\5\13\u0105\n\13\3\13\3\13\5\13\u0109\n\13\3\f\3\f"+
		"\3\f\3\r\3\r\3\r\5\r\u0111\n\r\3\16\3\16\3\16\5\16\u0116\n\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\5\16\u011f\n\16\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\5\17\u0127\n\17\3\17\3\17\5\17\u012b\n\17\3\20\3\20\3\20\5\20\u0130\n"+
		"\20\3\21\3\21\3\21\3\22\3\22\3\22\3\22\7\22\u0139\n\22\f\22\16\22\u013c"+
		"\13\22\3\23\3\23\3\23\5\23\u0141\n\23\3\24\3\24\3\25\3\25\3\25\3\25\3"+
		"\26\3\26\3\26\3\26\3\26\3\26\3\26\5\26\u0150\n\26\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\5\27\u0164\n\27\3\27\3\27\5\27\u0168\n\27\3\27\3\27\5\27\u016c\n\27\3"+
		"\27\3\27\3\27\3\27\3\27\3\27\5\27\u0174\n\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\5\27\u017d\n\27\3\27\3\27\3\27\5\27\u0182\n\27\3\27\3\27\3"+
		"\27\3\27\3\27\3\27\5\27\u018a\n\27\3\30\3\30\3\30\5\30\u018f\n\30\3\31"+
		"\3\31\3\31\5\31\u0194\n\31\3\31\3\31\3\32\3\32\3\32\5\32\u019b\n\32\3"+
		"\32\3\32\3\33\3\33\3\33\5\33\u01a2\n\33\3\33\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\5\33\u01ab\n\33\3\34\3\34\3\34\5\34\u01b0\n\34\3\34\3\34\3\35\3"+
		"\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\5\37\u01c2"+
		"\n\37\3\37\3\37\5\37\u01c6\n\37\5\37\u01c8\n\37\3\37\3\37\3 \6 \u01cd"+
		"\n \r \16 \u01ce\3!\3!\3!\3!\5!\u01d5\n!\3\"\3\"\3\"\5\"\u01da\n\"\3#"+
		"\3#\3#\3#\3$\3$\3$\3$\3$\3%\3%\3%\3%\5%\u01e9\n%\3%\5%\u01ec\n%\3&\3&"+
		"\3&\5&\u01f1\n&\3&\5&\u01f4\n&\3&\3&\3\'\3\'\3\'\3(\3(\3(\3)\5)\u01ff"+
		"\n)\3)\3)\5)\u0203\n)\3)\3)\3)\5)\u0208\n)\3)\3)\3)\3)\3)\3*\3*\3*\3*"+
		"\3+\3+\5+\u0215\n+\3+\3+\7+\u0219\n+\f+\16+\u021c\13+\3+\3+\3,\3,\3,\3"+
		",\7,\u0224\n,\f,\16,\u0227\13,\3,\3,\3,\3,\3,\3,\5,\u022f\n,\3,\3,\5,"+
		"\u0233\n,\3,\3,\3,\3,\5,\u0239\n,\3-\5-\u023c\n-\3-\5-\u023f\n-\3-\3-"+
		"\3-\5-\u0244\n-\3-\3-\3-\3-\3-\3-\5-\u024c\n-\3-\5-\u024f\n-\3-\3-\3-"+
		"\3-\3-\3-\3-\3-\5-\u0259\n-\3-\5-\u025c\n-\3-\3-\3-\5-\u0261\n-\3-\3-"+
		"\3-\3-\3-\5-\u0268\n-\3.\3.\3.\7.\u026d\n.\f.\16.\u0270\13.\3.\3.\5.\u0274"+
		"\n.\3.\5.\u0277\n.\3/\3/\3/\5/\u027c\n/\3\60\3\60\3\60\3\61\5\61\u0282"+
		"\n\61\3\62\6\62\u0285\n\62\r\62\16\62\u0286\3\63\3\63\3\63\3\63\3\64\7"+
		"\64\u028e\n\64\f\64\16\64\u0291\13\64\3\64\5\64\u0294\n\64\3\64\6\64\u0297"+
		"\n\64\r\64\16\64\u0298\3\64\7\64\u029c\n\64\f\64\16\64\u029f\13\64\3\64"+
		"\7\64\u02a2\n\64\f\64\16\64\u02a5\13\64\3\65\5\65\u02a8\n\65\3\65\3\65"+
		"\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\5\66\u02b7\n\66"+
		"\3\66\5\66\u02ba\n\66\3\66\3\66\3\66\5\66\u02bf\n\66\3\66\3\66\3\66\3"+
		"\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3"+
		"\66\3\66\3\66\3\66\5\66\u02d6\n\66\3\66\5\66\u02d9\n\66\3\67\3\67\3\67"+
		"\3\67\3\67\3\67\3\67\5\67\u02e2\n\67\38\38\38\38\78\u02e8\n8\f8\168\u02eb"+
		"\138\38\58\u02ee\n8\58\u02f0\n8\38\38\39\59\u02f5\n9\39\39\59\u02f9\n"+
		"9\3:\5:\u02fc\n:\3:\3:\3:\5:\u0301\n:\3:\7:\u0304\n:\f:\16:\u0307\13:"+
		"\3;\3;\3;\3;\5;\u030d\n;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;"+
		"\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;"+
		"\3;\3;\3;\3;\3;\3;\3;\3;\3;\5;\u033e\n;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;"+
		"\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;"+
		"\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;"+
		"\3;\3;\3;\3;\3;\3;\5;\u037e\n;\3;\3;\5;\u0382\n;\3;\3;\3;\3;\3;\3;\3;"+
		"\3;\3;\3;\3;\7;\u038f\n;\f;\16;\u0392\13;\3<\6<\u0395\n<\r<\16<\u0396"+
		"\3=\3=\3=\7=\u039c\n=\f=\16=\u039f\13=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\7"+
		"=\u03ab\n=\f=\16=\u03ae\13=\3=\3=\3=\3=\3=\3=\3=\7=\u03b7\n=\f=\16=\u03ba"+
		"\13=\3=\3=\3=\3=\3=\3=\7=\u03c2\n=\f=\16=\u03c5\13=\3=\3=\5=\u03c9\n="+
		"\3>\5>\u03cc\n>\3>\3>\5>\u03d0\n>\3>\5>\u03d3\n>\7>\u03d5\n>\f>\16>\u03d8"+
		"\13>\3?\3?\3?\3@\3@\3@\3A\3A\3A\5A\u03e3\nA\3B\3B\3B\3B\3B\5B\u03ea\n"+
		"B\3C\3C\3C\3C\7C\u03f0\nC\fC\16C\u03f3\13C\5C\u03f5\nC\3D\6D\u03f8\nD"+
		"\rD\16D\u03f9\3E\3E\3E\5E\u03ff\nE\3F\3F\3F\5F\u0404\nF\3G\3G\3G\3G\7"+
		"G\u040a\nG\fG\16G\u040d\13G\3G\5G\u0410\nG\5G\u0412\nG\3G\3G\3H\3H\3H"+
		"\3H\3I\3I\5I\u041c\nI\3I\3I\5I\u0420\nI\3I\3I\5I\u0424\nI\3I\3I\3I\3I"+
		"\3I\3I\5I\u042c\nI\3I\3I\3I\3I\5I\u0432\nI\3J\3J\3J\5J\u0437\nJ\3J\5J"+
		"\u043a\nJ\3K\3K\3K\3K\3K\5K\u0441\nK\3L\3L\3M\3M\3M\3M\3M\3M\3M\5M\u044c"+
		"\nM\3N\3N\7N\u0450\nN\fN\16N\u0453\13N\3N\3N\3O\3O\3O\3O\3O\5O\u045c\n"+
		"O\3P\3P\3Q\3Q\3R\3R\3R\3R\3S\3S\3S\3S\3T\3T\5T\u046c\nT\3U\3U\3V\3V\3"+
		"V\5V\u0473\nV\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3"+
		"W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3"+
		"W\3W\3W\3W\3W\5W\u04a3\nW\3X\3X\3Y\3Y\3Y\3Y\5Y\u04ab\nY\3Y\2\3tZ\2\4\6"+
		"\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRT"+
		"VXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e"+
		"\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6"+
		"\u00a8\u00aa\u00ac\u00ae\u00b0\2\r\3\2\30\32\3\2\24\25\3\2\36 \3\2!$\3"+
		"\2%(\4\2\b\b!!\3\2.9\3\2=A\3\2BE\5\2iimmuu\3\2lm\2\u055e\2\u00b3\3\2\2"+
		"\2\4\u00ba\3\2\2\2\6\u00d0\3\2\2\2\b\u00d2\3\2\2\2\n\u00d9\3\2\2\2\f\u00dd"+
		"\3\2\2\2\16\u00ec\3\2\2\2\20\u00ee\3\2\2\2\22\u00ff\3\2\2\2\24\u0104\3"+
		"\2\2\2\26\u010a\3\2\2\2\30\u010d\3\2\2\2\32\u011e\3\2\2\2\34\u012a\3\2"+
		"\2\2\36\u012f\3\2\2\2 \u0131\3\2\2\2\"\u0134\3\2\2\2$\u013d\3\2\2\2&\u0142"+
		"\3\2\2\2(\u0144\3\2\2\2*\u0148\3\2\2\2,\u0189\3\2\2\2.\u018e\3\2\2\2\60"+
		"\u0190\3\2\2\2\62\u0197\3\2\2\2\64\u01aa\3\2\2\2\66\u01ac\3\2\2\28\u01b3"+
		"\3\2\2\2:\u01b9\3\2\2\2<\u01bf\3\2\2\2>\u01cc\3\2\2\2@\u01d0\3\2\2\2B"+
		"\u01d6\3\2\2\2D\u01db\3\2\2\2F\u01df\3\2\2\2H\u01e4\3\2\2\2J\u01ed\3\2"+
		"\2\2L\u01f7\3\2\2\2N\u01fa\3\2\2\2P\u01fe\3\2\2\2R\u020e\3\2\2\2T\u0214"+
		"\3\2\2\2V\u0238\3\2\2\2X\u0267\3\2\2\2Z\u0276\3\2\2\2\\\u0278\3\2\2\2"+
		"^\u027d\3\2\2\2`\u0281\3\2\2\2b\u0284\3\2\2\2d\u0288\3\2\2\2f\u028f\3"+
		"\2\2\2h\u02a7\3\2\2\2j\u02d8\3\2\2\2l\u02e1\3\2\2\2n\u02e3\3\2\2\2p\u02f4"+
		"\3\2\2\2r\u02fb\3\2\2\2t\u033d\3\2\2\2v\u0394\3\2\2\2x\u03c8\3\2\2\2z"+
		"\u03cb\3\2\2\2|\u03d9\3\2\2\2~\u03dc\3\2\2\2\u0080\u03e2\3\2\2\2\u0082"+
		"\u03e9\3\2\2\2\u0084\u03f4\3\2\2\2\u0086\u03f7\3\2\2\2\u0088\u03fe\3\2"+
		"\2\2\u008a\u0403\3\2\2\2\u008c\u0405\3\2\2\2\u008e\u0415\3\2\2\2\u0090"+
		"\u0431\3\2\2\2\u0092\u0439\3\2\2\2\u0094\u0440\3\2\2\2\u0096\u0442\3\2"+
		"\2\2\u0098\u044b\3\2\2\2\u009a\u044d\3\2\2\2\u009c\u045b\3\2\2\2\u009e"+
		"\u045d\3\2\2\2\u00a0\u045f\3\2\2\2\u00a2\u0461\3\2\2\2\u00a4\u0465\3\2"+
		"\2\2\u00a6\u046b\3\2\2\2\u00a8\u046d\3\2\2\2\u00aa\u0472\3\2\2\2\u00ac"+
		"\u04a2\3\2\2\2\u00ae\u04a4\3\2\2\2\u00b0\u04aa\3\2\2\2\u00b2\u00b4\7\3"+
		"\2\2\u00b3\u00b2\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\u00b6\3\2\2\2\u00b5"+
		"\u00b7\5b\62\2\u00b6\u00b5\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00b8\3\2"+
		"\2\2\u00b8\u00b9\7\2\2\3\u00b9\3\3\2\2\2\u00ba\u00bb\5\6\4\2\u00bb\5\3"+
		"\2\2\2\u00bc\u00d1\5\b\5\2\u00bd\u00d1\5 \21\2\u00be\u00d1\5\f\7\2\u00bf"+
		"\u00d1\5\32\16\2\u00c0\u00d1\5&\24\2\u00c1\u00d1\5R*\2\u00c2\u00d1\5("+
		"\25\2\u00c3\u00d1\5*\26\2\u00c4\u00d1\5,\27\2\u00c5\u00d1\5\60\31\2\u00c6"+
		"\u00d1\5\62\32\2\u00c7\u00d1\5\64\33\2\u00c8\u00d1\5\66\34\2\u00c9\u00d1"+
		"\58\35\2\u00ca\u00d1\5D#\2\u00cb\u00d1\5:\36\2\u00cc\u00d1\5F$\2\u00cd"+
		"\u00d1\5H%\2\u00ce\u00d1\5N(\2\u00cf\u00d1\5P)\2\u00d0\u00bc\3\2\2\2\u00d0"+
		"\u00bd\3\2\2\2\u00d0\u00be\3\2\2\2\u00d0\u00bf\3\2\2\2\u00d0\u00c0\3\2"+
		"\2\2\u00d0\u00c1\3\2\2\2\u00d0\u00c2\3\2\2\2\u00d0\u00c3\3\2\2\2\u00d0"+
		"\u00c4\3\2\2\2\u00d0\u00c5\3\2\2\2\u00d0\u00c6\3\2\2\2\u00d0\u00c7\3\2"+
		"\2\2\u00d0\u00c8\3\2\2\2\u00d0\u00c9\3\2\2\2\u00d0\u00ca\3\2\2\2\u00d0"+
		"\u00cb\3\2\2\2\u00d0\u00cc\3\2\2\2\u00d0\u00cd\3\2\2\2\u00d0\u00ce\3\2"+
		"\2\2\u00d0\u00cf\3\2\2\2\u00d1\7\3\2\2\2\u00d2\u00d4\7\b\2\2\u00d3\u00d5"+
		"\5\n\6\2\u00d4\u00d3\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5\u00d6\3\2\2\2\u00d6"+
		"\u00d7\7\n\2\2\u00d7\t\3\2\2\2\u00d8\u00da\5\6\4\2\u00d9\u00d8\3\2\2\2"+
		"\u00da\u00db\3\2\2\2\u00db\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc\13"+
		"\3\2\2\2\u00dd\u00de\7h\2\2\u00de\u00df\5\16\b\2\u00df\r\3\2\2\2\u00e0"+
		"\u00e2\5\22\n\2\u00e1\u00e0\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2\u00e5\3"+
		"\2\2\2\u00e3\u00e6\5\24\13\2\u00e4\u00e6\5\20\t\2\u00e5\u00e3\3\2\2\2"+
		"\u00e5\u00e4\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e8\5\26\f\2\u00e8\u00e9"+
		"\5\u00b0Y\2\u00e9\u00ed\3\2\2\2\u00ea\u00eb\7v\2\2\u00eb\u00ed\5\u00b0"+
		"Y\2\u00ec\u00e1\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ed\17\3\2\2\2\u00ee\u00f4"+
		"\7\b\2\2\u00ef\u00f0\5\30\r\2\u00f0\u00f1\7\f\2\2\u00f1\u00f3\3\2\2\2"+
		"\u00f2\u00ef\3\2\2\2\u00f3\u00f6\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f4\u00f5"+
		"\3\2\2\2\u00f5\u00fb\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f7\u00f9\5\30\r\2"+
		"\u00f8\u00fa\7\f\2\2\u00f9\u00f8\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00fc"+
		"\3\2\2\2\u00fb\u00f7\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd"+
		"\u00fe\7\n\2\2\u00fe\21\3\2\2\2\u00ff\u0100\5\30\r\2\u0100\u0101\7\f\2"+
		"\2\u0101\23\3\2\2\2\u0102\u0105\7\30\2\2\u0103\u0105\5\u00a6T\2\u0104"+
		"\u0102\3\2\2\2\u0104\u0103\3\2\2\2\u0105\u0108\3\2\2\2\u0106\u0107\7`"+
		"\2\2\u0107\u0109\5\u00a6T\2\u0108\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109"+
		"\25\3\2\2\2\u010a\u010b\7a\2\2\u010b\u010c\7v\2\2\u010c\27\3\2\2\2\u010d"+
		"\u0110\5\u00a6T\2\u010e\u010f\7`\2\2\u010f\u0111\5\u00a6T\2\u0110\u010e"+
		"\3\2\2\2\u0110\u0111\3\2\2\2\u0111\31\3\2\2\2\u0112\u0115\7g\2\2\u0113"+
		"\u0116\5\34\17\2\u0114\u0116\5\36\20\2\u0115\u0113\3\2\2\2\u0115\u0114"+
		"\3\2\2\2\u0116\u0117\3\2\2\2\u0117\u0118\5\u00b0Y\2\u0118\u011f\3\2\2"+
		"\2\u0119\u011a\7g\2\2\u011a\u011b\7Z\2\2\u011b\u011c\5t;\2\u011c\u011d"+
		"\5\u00b0Y\2\u011d\u011f\3\2\2\2\u011e\u0112\3\2\2\2\u011e\u0119\3\2\2"+
		"\2\u011f\33\3\2\2\2\u0120\u0121\5\24\13\2\u0121\u0122\5\26\f\2\u0122\u0123"+
		"\5\u00b0Y\2\u0123\u012b\3\2\2\2\u0124\u0126\5\20\t\2\u0125\u0127\5\26"+
		"\f\2\u0126\u0125\3\2\2\2\u0126\u0127\3\2\2\2\u0127\u0128\3\2\2\2\u0128"+
		"\u0129\5\u00b0Y\2\u0129\u012b\3\2\2\2\u012a\u0120\3\2\2\2\u012a\u0124"+
		"\3\2\2\2\u012b\35\3\2\2\2\u012c\u0130\5 \21\2\u012d\u0130\5R*\2\u012e"+
		"\u0130\5P)\2\u012f\u012c\3\2\2\2\u012f\u012d\3\2\2\2\u012f\u012e\3\2\2"+
		"\2\u0130\37\3\2\2\2\u0131\u0132\5\"\22\2\u0132\u0133\5\u00b0Y\2\u0133"+
		"!\3\2\2\2\u0134\u0135\5.\30\2\u0135\u013a\5$\23\2\u0136\u0137\7\f\2\2"+
		"\u0137\u0139\5$\23\2\u0138\u0136\3\2\2\2\u0139\u013c\3\2\2\2\u013a\u0138"+
		"\3\2\2\2\u013a\u013b\3\2\2\2\u013b#\3\2\2\2\u013c\u013a\3\2\2\2\u013d"+
		"\u0140\5\u008aF\2\u013e\u013f\7\r\2\2\u013f\u0141\5t;\2\u0140\u013e\3"+
		"\2\2\2\u0140\u0141\3\2\2\2\u0141%\3\2\2\2\u0142\u0143\7\13\2\2\u0143\'"+
		"\3\2\2\2\u0144\u0145\6\25\2\2\u0145\u0146\5r:\2\u0146\u0147\5\u00b0Y\2"+
		"\u0147)\3\2\2\2\u0148\u0149\7[\2\2\u0149\u014a\7\6\2\2\u014a\u014b\5r"+
		":\2\u014b\u014c\7\7\2\2\u014c\u014f\5\6\4\2\u014d\u014e\7K\2\2\u014e\u0150"+
		"\5\6\4\2\u014f\u014d\3\2\2\2\u014f\u0150\3\2\2\2\u0150+\3\2\2\2\u0151"+
		"\u0152\7G\2\2\u0152\u0153\5\6\4\2\u0153\u0154\7U\2\2\u0154\u0155\7\6\2"+
		"\2\u0155\u0156\5r:\2\u0156\u0157\7\7\2\2\u0157\u0158\5\u00b0Y\2\u0158"+
		"\u018a\3\2\2\2\u0159\u015a\7U\2\2\u015a\u015b\7\6\2\2\u015b\u015c\5r:"+
		"\2\u015c\u015d\7\7\2\2\u015d\u015e\5\6\4\2\u015e\u018a\3\2\2\2\u015f\u0160"+
		"\7S\2\2\u0160\u0163\7\6\2\2\u0161\u0164\5r:\2\u0162\u0164\5\"\22\2\u0163"+
		"\u0161\3\2\2\2\u0163\u0162\3\2\2\2\u0163\u0164\3\2\2\2\u0164\u0165\3\2"+
		"\2\2\u0165\u0167\7\13\2\2\u0166\u0168\5r:\2\u0167\u0166\3\2\2\2\u0167"+
		"\u0168\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016b\7\13\2\2\u016a\u016c\5"+
		"r:\2\u016b\u016a\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\3\2\2\2\u016d"+
		"\u016e\7\7\2\2\u016e\u018a\5\6\4\2\u016f\u0170\7S\2\2\u0170\u0173\7\6"+
		"\2\2\u0171\u0174\5t;\2\u0172\u0174\5\"\22\2\u0173\u0171\3\2\2\2\u0173"+
		"\u0172\3\2\2\2\u0174\u0175\3\2\2\2\u0175\u0176\7^\2\2\u0176\u0177\5r:"+
		"\2\u0177\u0178\7\7\2\2\u0178\u0179\5\6\4\2\u0179\u018a\3\2\2\2\u017a\u017c"+
		"\7S\2\2\u017b\u017d\7j\2\2\u017c\u017b\3\2\2\2\u017c\u017d\3\2\2\2\u017d"+
		"\u017e\3\2\2\2\u017e\u0181\7\6\2\2\u017f\u0182\5t;\2\u0180\u0182\5\"\22"+
		"\2\u0181\u017f\3\2\2\2\u0181\u0180\3\2\2\2\u0182\u0183\3\2\2\2\u0183\u0184"+
		"\5\u00a8U\2\u0184\u0185\6\27\3\2\u0185\u0186\5r:\2\u0186\u0187\7\7\2\2"+
		"\u0187\u0188\5\6\4\2\u0188\u018a\3\2\2\2\u0189\u0151\3\2\2\2\u0189\u0159"+
		"\3\2\2\2\u0189\u015f\3\2\2\2\u0189\u016f\3\2\2\2\u0189\u017a\3\2\2\2\u018a"+
		"-\3\2\2\2\u018b\u018f\7M\2\2\u018c\u018f\5\u00aeX\2\u018d\u018f\7f\2\2"+
		"\u018e\u018b\3\2\2\2\u018e\u018c\3\2\2\2\u018e\u018d\3\2\2\2\u018f/\3"+
		"\2\2\2\u0190\u0193\7R\2\2\u0191\u0192\6\31\4\2\u0192\u0194\5\u00a8U\2"+
		"\u0193\u0191\3\2\2\2\u0193\u0194\3\2\2\2\u0194\u0195\3\2\2\2\u0195\u0196"+
		"\5\u00b0Y\2\u0196\61\3\2\2\2\u0197\u019a\7F\2\2\u0198\u0199\6\32\5\2\u0199"+
		"\u019b\5\u00a8U\2\u019a\u0198\3\2\2\2\u019a\u019b\3\2\2\2\u019b\u019c"+
		"\3\2\2\2\u019c\u019d\5\u00b0Y\2\u019d\63\3\2\2\2\u019e\u01a1\7P\2\2\u019f"+
		"\u01a0\6\33\6\2\u01a0\u01a2\5r:\2\u01a1\u019f\3\2\2\2\u01a1\u01a2\3\2"+
		"\2\2\u01a2\u01a3\3\2\2\2\u01a3\u01ab\5\u00b0Y\2\u01a4\u01a5\7P\2\2\u01a5"+
		"\u01a6\7\6\2\2\u01a6\u01a7\5v<\2\u01a7\u01a8\7\7\2\2\u01a8\u01a9\5\u00b0"+
		"Y\2\u01a9\u01ab\3\2\2\2\u01aa\u019e\3\2\2\2\u01aa\u01a4\3\2\2\2\u01ab"+
		"\65\3\2\2\2\u01ac\u01af\7t\2\2\u01ad\u01ae\6\34\7\2\u01ae\u01b0\5r:\2"+
		"\u01af\u01ad\3\2\2\2\u01af\u01b0\3\2\2\2\u01b0\u01b1\3\2\2\2\u01b1\u01b2"+
		"\5\u00b0Y\2\u01b2\67\3\2\2\2\u01b3\u01b4\7Y\2\2\u01b4\u01b5\7\6\2\2\u01b5"+
		"\u01b6\5r:\2\u01b6\u01b7\7\7\2\2\u01b7\u01b8\5\6\4\2\u01b89\3\2\2\2\u01b9"+
		"\u01ba\7T\2\2\u01ba\u01bb\7\6\2\2\u01bb\u01bc\5r:\2\u01bc\u01bd\7\7\2"+
		"\2\u01bd\u01be\5<\37\2\u01be;\3\2\2\2\u01bf\u01c1\7\b\2\2\u01c0\u01c2"+
		"\5> \2\u01c1\u01c0\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2\u01c7\3\2\2\2\u01c3"+
		"\u01c5\5B\"\2\u01c4\u01c6\5> \2\u01c5\u01c4\3\2\2\2\u01c5\u01c6\3\2\2"+
		"\2\u01c6\u01c8\3\2\2\2\u01c7\u01c3\3\2\2\2\u01c7\u01c8\3\2\2\2\u01c8\u01c9"+
		"\3\2\2\2\u01c9\u01ca\7\n\2\2\u01ca=\3\2\2\2\u01cb\u01cd\5@!\2\u01cc\u01cb"+
		"\3\2\2\2\u01cd\u01ce\3\2\2\2\u01ce\u01cc\3\2\2\2\u01ce\u01cf\3\2\2\2\u01cf"+
		"?\3\2\2\2\u01d0\u01d1\7J\2\2\u01d1\u01d2\5r:\2\u01d2\u01d4\7\17\2\2\u01d3"+
		"\u01d5\5\n\6\2\u01d4\u01d3\3\2\2\2\u01d4\u01d5\3\2\2\2\u01d5A\3\2\2\2"+
		"\u01d6\u01d7\7Z\2\2\u01d7\u01d9\7\17\2\2\u01d8\u01da\5\n\6\2\u01d9\u01d8"+
		"\3\2\2\2\u01d9\u01da\3\2\2\2\u01daC\3\2\2\2\u01db\u01dc\5\u00a8U\2\u01dc"+
		"\u01dd\7\17\2\2\u01dd\u01de\5\6\4\2\u01deE\3\2\2\2\u01df\u01e0\7\\\2\2"+
		"\u01e0\u01e1\6$\b\2\u01e1\u01e2\5r:\2\u01e2\u01e3\5\u00b0Y\2\u01e3G\3"+
		"\2\2\2\u01e4\u01e5\7_\2\2\u01e5\u01eb\5\b\5\2\u01e6\u01e8\5J&\2\u01e7"+
		"\u01e9\5L\'\2\u01e8\u01e7\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9\u01ec\3\2"+
		"\2\2\u01ea\u01ec\5L\'\2\u01eb\u01e6\3\2\2\2\u01eb\u01ea\3\2\2\2\u01ec"+
		"I\3\2\2\2\u01ed\u01f3\7N\2\2\u01ee\u01f0\7\6\2\2\u01ef\u01f1\5\u008aF"+
		"\2\u01f0\u01ef\3\2\2\2\u01f0\u01f1\3\2\2\2\u01f1\u01f2\3\2\2\2\u01f2\u01f4"+
		"\7\7\2\2\u01f3\u01ee\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5"+
		"\u01f6\5\b\5\2\u01f6K\3\2\2\2\u01f7\u01f8\7O\2\2\u01f8\u01f9\5\b\5\2\u01f9"+
		"M\3\2\2\2\u01fa\u01fb\7V\2\2\u01fb\u01fc\5\u00b0Y\2\u01fcO\3\2\2\2\u01fd"+
		"\u01ff\7i\2\2\u01fe\u01fd\3\2\2\2\u01fe\u01ff\3\2\2\2\u01ff\u0200\3\2"+
		"\2\2\u0200\u0202\7W\2\2\u0201\u0203\7\30\2\2\u0202\u0201\3\2\2\2\u0202"+
		"\u0203\3\2\2\2\u0203\u0204\3\2\2\2\u0204\u0205\5\u00a8U\2\u0205\u0207"+
		"\7\6\2\2\u0206\u0208\5Z.\2\u0207\u0206\3\2\2\2\u0207\u0208\3\2\2\2\u0208"+
		"\u0209\3\2\2\2\u0209\u020a\7\7\2\2\u020a\u020b\7\b\2\2\u020b\u020c\5`"+
		"\61\2\u020c\u020d\7\n\2\2\u020dQ\3\2\2\2\u020e\u020f\7b\2\2\u020f\u0210"+
		"\5\u00a8U\2\u0210\u0211\5T+\2\u0211S\3\2\2\2\u0212\u0213\7d\2\2\u0213"+
		"\u0215\5t;\2\u0214\u0212\3\2\2\2\u0214\u0215\3\2\2\2\u0215\u0216\3\2\2"+
		"\2\u0216\u021a\7\b\2\2\u0217\u0219\5V,\2\u0218\u0217\3\2\2\2\u0219\u021c"+
		"\3\2\2\2\u021a\u0218\3\2\2\2\u021a\u021b\3\2\2\2\u021b\u021d\3\2\2\2\u021c"+
		"\u021a\3\2\2\2\u021d\u021e\7\n\2\2\u021eU\3\2\2\2\u021f\u0224\7s\2\2\u0220"+
		"\u0221\6,\t\2\u0221\u0224\5\u00a8U\2\u0222\u0224\7i\2\2\u0223\u021f\3"+
		"\2\2\2\u0223\u0220\3\2\2\2\u0223\u0222\3\2\2\2\u0224\u0227\3\2\2\2\u0225"+
		"\u0223\3\2\2\2\u0225\u0226\3\2\2\2\u0226\u022e\3\2\2\2\u0227\u0225\3\2"+
		"\2\2\u0228\u022f\5X-\2\u0229\u022a\5\u008aF\2\u022a\u022b\7\r\2\2\u022b"+
		"\u022c\5\u008cG\2\u022c\u022d\7\13\2\2\u022d\u022f\3\2\2\2\u022e\u0228"+
		"\3\2\2\2\u022e\u0229\3\2\2\2\u022f\u0239\3\2\2\2\u0230\u0239\5&\24\2\u0231"+
		"\u0233\7\35\2\2\u0232\u0231\3\2\2\2\u0232\u0233\3\2\2\2\u0233\u0234\3"+
		"\2\2\2\u0234\u0235\5l\67\2\u0235\u0236\7\r\2\2\u0236\u0237\5t;\2\u0237"+
		"\u0239\3\2\2\2\u0238\u0225\3\2\2\2\u0238\u0230\3\2\2\2\u0238\u0232\3\2"+
		"\2\2\u0239W\3\2\2\2\u023a\u023c\7\30\2\2\u023b\u023a\3\2\2\2\u023b\u023c"+
		"\3\2\2\2\u023c\u023e\3\2\2\2\u023d\u023f\7\35\2\2\u023e\u023d\3\2\2\2"+
		"\u023e\u023f\3\2\2\2\u023f\u0240\3\2\2\2\u0240\u0241\5l\67\2\u0241\u0243"+
		"\7\6\2\2\u0242\u0244\5Z.\2\u0243\u0242\3\2\2\2\u0243\u0244\3\2\2\2\u0244"+
		"\u0245\3\2\2\2\u0245\u0246\7\7\2\2\u0246\u0247\7\b\2\2\u0247\u0248\5`"+
		"\61\2\u0248\u0249\7\n\2\2\u0249\u0268\3\2\2\2\u024a\u024c\7\30\2\2\u024b"+
		"\u024a\3\2\2\2\u024b\u024c\3\2\2\2\u024c\u024e\3\2\2\2\u024d\u024f\7\35"+
		"\2\2\u024e\u024d\3\2\2\2\u024e\u024f\3\2\2\2\u024f\u0250\3\2\2\2\u0250"+
		"\u0251\5\u00a2R\2\u0251\u0252\7\6\2\2\u0252\u0253\7\7\2\2\u0253\u0254"+
		"\7\b\2\2\u0254\u0255\5`\61\2\u0255\u0256\7\n\2\2\u0256\u0268\3\2\2\2\u0257"+
		"\u0259\7\30\2\2\u0258\u0257\3\2\2\2\u0258\u0259\3\2\2\2\u0259\u025b\3"+
		"\2\2\2\u025a\u025c\7\35\2\2\u025b\u025a\3\2\2\2\u025b\u025c\3\2\2\2\u025c"+
		"\u025d\3\2\2\2\u025d\u025e\5\u00a4S\2\u025e\u0260\7\6\2\2\u025f\u0261"+
		"\5Z.\2\u0260\u025f\3\2\2\2\u0260\u0261\3\2\2\2\u0261\u0262\3\2\2\2\u0262"+
		"\u0263\7\7\2\2\u0263\u0264\7\b\2\2\u0264\u0265\5`\61\2\u0265\u0266\7\n"+
		"\2\2\u0266\u0268\3\2\2\2\u0267\u023b\3\2\2\2\u0267\u024b\3\2\2\2\u0267"+
		"\u0258\3\2\2\2\u0268Y\3\2\2\2\u0269\u026e\5\\/\2\u026a\u026b\7\f\2\2\u026b"+
		"\u026d\5\\/\2\u026c\u026a\3\2\2\2\u026d\u0270\3\2\2\2\u026e\u026c\3\2"+
		"\2\2\u026e\u026f\3\2\2\2\u026f\u0273\3\2\2\2\u0270\u026e\3\2\2\2\u0271"+
		"\u0272\7\f\2\2\u0272\u0274\5^\60\2\u0273\u0271\3\2\2\2\u0273\u0274\3\2"+
		"\2\2\u0274\u0277\3\2\2\2\u0275\u0277\5^\60\2\u0276\u0269\3\2\2\2\u0276"+
		"\u0275\3\2\2\2\u0277[\3\2\2\2\u0278\u027b\5\u008aF\2\u0279\u027a\7\r\2"+
		"\2\u027a\u027c\5t;\2\u027b\u0279\3\2\2\2\u027b\u027c\3\2\2\2\u027c]\3"+
		"\2\2\2\u027d\u027e\7\20\2\2\u027e\u027f\5t;\2\u027f_\3\2\2\2\u0280\u0282"+
		"\5b\62\2\u0281\u0280\3\2\2\2\u0281\u0282\3\2\2\2\u0282a\3\2\2\2\u0283"+
		"\u0285\5\4\3\2\u0284\u0283\3\2\2\2\u0285\u0286\3\2\2\2\u0286\u0284\3\2"+
		"\2\2\u0286\u0287\3\2\2\2\u0287c\3\2\2\2\u0288\u0289\7\4\2\2\u0289\u028a"+
		"\5f\64\2\u028a\u028b\7\5\2\2\u028be\3\2\2\2\u028c\u028e\7\f\2\2\u028d"+
		"\u028c\3\2\2\2\u028e\u0291\3\2\2\2\u028f\u028d\3\2\2\2\u028f\u0290\3\2"+
		"\2\2\u0290\u0293\3\2\2\2\u0291\u028f\3\2\2\2\u0292\u0294\5h\65\2\u0293"+
		"\u0292\3\2\2\2\u0293\u0294\3\2\2\2\u0294\u029d\3\2\2\2\u0295\u0297\7\f"+
		"\2\2\u0296\u0295\3\2\2\2\u0297\u0298\3\2\2\2\u0298\u0296\3\2\2\2\u0298"+
		"\u0299\3\2\2\2\u0299\u029a\3\2\2\2\u029a\u029c\5h\65\2\u029b\u0296\3\2"+
		"\2\2\u029c\u029f\3\2\2\2\u029d\u029b\3\2\2\2\u029d\u029e\3\2\2\2\u029e"+
		"\u02a3\3\2\2\2\u029f\u029d\3\2\2\2\u02a0\u02a2\7\f\2\2\u02a1\u02a0\3\2"+
		"\2\2\u02a2\u02a5\3\2\2\2\u02a3\u02a1\3\2\2\2\u02a3\u02a4\3\2\2\2\u02a4"+
		"g\3\2\2\2\u02a5\u02a3\3\2\2\2\u02a6\u02a8\7\20\2\2\u02a7\u02a6\3\2\2\2"+
		"\u02a7\u02a8\3\2\2\2\u02a8\u02a9\3\2\2\2\u02a9\u02aa\5t;\2\u02aai\3\2"+
		"\2\2\u02ab\u02ac\5l\67\2\u02ac\u02ad\7\17\2\2\u02ad\u02ae\5t;\2\u02ae"+
		"\u02d9\3\2\2\2\u02af\u02b0\7\4\2\2\u02b0\u02b1\5t;\2\u02b1\u02b2\7\5\2"+
		"\2\u02b2\u02b3\7\17\2\2\u02b3\u02b4\5t;\2\u02b4\u02d9\3\2\2\2\u02b5\u02b7"+
		"\7i\2\2\u02b6\u02b5\3\2\2\2\u02b6\u02b7\3\2\2\2\u02b7\u02b9\3\2\2\2\u02b8"+
		"\u02ba\7\30\2\2\u02b9\u02b8\3\2\2\2\u02b9\u02ba\3\2\2\2\u02ba\u02bb\3"+
		"\2\2\2\u02bb\u02bc\5l\67\2\u02bc\u02be\7\6\2\2\u02bd\u02bf\5Z.\2\u02be"+
		"\u02bd\3\2\2\2\u02be\u02bf\3\2\2\2\u02bf\u02c0\3\2\2\2\u02c0\u02c1\7\7"+
		"\2\2\u02c1\u02c2\7\b\2\2\u02c2\u02c3\5`\61\2\u02c3\u02c4\7\n\2\2\u02c4"+
		"\u02d9\3\2\2\2\u02c5\u02c6\5\u00a2R\2\u02c6\u02c7\7\6\2\2\u02c7\u02c8"+
		"\7\7\2\2\u02c8\u02c9\7\b\2\2\u02c9\u02ca\5`\61\2\u02ca\u02cb\7\n\2\2\u02cb"+
		"\u02d9\3\2\2\2\u02cc\u02cd\5\u00a4S\2\u02cd\u02ce\7\6\2\2\u02ce\u02cf"+
		"\5\\/\2\u02cf\u02d0\7\7\2\2\u02d0\u02d1\7\b\2\2\u02d1\u02d2\5`\61\2\u02d2"+
		"\u02d3\7\n\2\2\u02d3\u02d9\3\2\2\2\u02d4\u02d6\7\20\2\2\u02d5\u02d4\3"+
		"\2\2\2\u02d5\u02d6\3\2\2\2\u02d6\u02d7\3\2\2\2\u02d7\u02d9\5t;\2\u02d8"+
		"\u02ab\3\2\2\2\u02d8\u02af\3\2\2\2\u02d8\u02b6\3\2\2\2\u02d8\u02c5\3\2"+
		"\2\2\u02d8\u02cc\3\2\2\2\u02d8\u02d5\3\2\2\2\u02d9k\3\2\2\2\u02da\u02e2"+
		"\5\u00a6T\2\u02db\u02e2\7v\2\2\u02dc\u02e2\5\u009eP\2\u02dd\u02de\7\4"+
		"\2\2\u02de\u02df\5t;\2\u02df\u02e0\7\5\2\2\u02e0\u02e2\3\2\2\2\u02e1\u02da"+
		"\3\2\2\2\u02e1\u02db\3\2\2\2\u02e1\u02dc\3\2\2\2\u02e1\u02dd\3\2\2\2\u02e2"+
		"m\3\2\2\2\u02e3\u02ef\7\6\2\2\u02e4\u02e9\5p9\2\u02e5\u02e6\7\f\2\2\u02e6"+
		"\u02e8\5p9\2\u02e7\u02e5\3\2\2\2\u02e8\u02eb\3\2\2\2\u02e9\u02e7\3\2\2"+
		"\2\u02e9\u02ea\3\2\2\2\u02ea\u02ed\3\2\2\2\u02eb\u02e9\3\2\2\2\u02ec\u02ee"+
		"\7\f\2\2\u02ed\u02ec\3\2\2\2\u02ed\u02ee\3\2\2\2\u02ee\u02f0\3\2\2\2\u02ef"+
		"\u02e4\3\2\2\2\u02ef\u02f0\3\2\2\2\u02f0\u02f1\3\2\2\2\u02f1\u02f2\7\7"+
		"\2\2\u02f2o\3\2\2\2\u02f3\u02f5\7\20\2\2\u02f4\u02f3\3\2\2\2\u02f4\u02f5"+
		"\3\2\2\2\u02f5\u02f8\3\2\2\2\u02f6\u02f9\5t;\2\u02f7\u02f9\5\u00a8U\2"+
		"\u02f8\u02f6\3\2\2\2\u02f8\u02f7\3\2\2\2\u02f9q\3\2\2\2\u02fa\u02fc\7"+
		"\20\2\2\u02fb\u02fa\3\2\2\2\u02fb\u02fc\3\2\2\2\u02fc\u02fd\3\2\2\2\u02fd"+
		"\u0305\5t;\2\u02fe\u0300\7\f\2\2\u02ff\u0301\7\20\2\2\u0300\u02ff\3\2"+
		"\2\2\u0300\u0301\3\2\2\2\u0301\u0302\3\2\2\2\u0302\u0304\5t;\2\u0303\u02fe"+
		"\3\2\2\2\u0304\u0307\3\2\2\2\u0305\u0303\3\2\2\2\u0305\u0306\3\2\2\2\u0306"+
		"s\3\2\2\2\u0307\u0305\3\2\2\2\u0308\u0309\b;\1\2\u0309\u033e\5\u0090I"+
		"\2\u030a\u030c\7b\2\2\u030b\u030d\5\u00a8U\2\u030c\u030b\3\2\2\2\u030c"+
		"\u030d\3\2\2\2\u030d\u030e\3\2\2\2\u030e\u033e\5T+\2\u030f\u0310\7L\2"+
		"\2\u0310\u0311\5t;\2\u0311\u0312\5n8\2\u0312\u033e\3\2\2\2\u0313\u0314"+
		"\7L\2\2\u0314\u033e\5t;-\u0315\u0316\7L\2\2\u0316\u0317\7\21\2\2\u0317"+
		"\u033e\5\u00a8U\2\u0318\u0319\7]\2\2\u0319\u033e\5t;(\u031a\u031b\7Q\2"+
		"\2\u031b\u033e\5t;\'\u031c\u031d\7I\2\2\u031d\u033e\5t;&\u031e\u031f\7"+
		"\22\2\2\u031f\u033e\5t;%\u0320\u0321\7\23\2\2\u0321\u033e\5t;$\u0322\u0323"+
		"\7\24\2\2\u0323\u033e\5t;#\u0324\u0325\7\25\2\2\u0325\u033e\5t;\"\u0326"+
		"\u0327\7\26\2\2\u0327\u033e\5t;!\u0328\u0329\7\27\2\2\u0329\u033e\5t;"+
		" \u032a\u032b\7j\2\2\u032b\u033e\5t;\37\u032c\u032d\7h\2\2\u032d\u032e"+
		"\7\6\2\2\u032e\u032f\5t;\2\u032f\u0330\7\7\2\2\u0330\u033e\3\2\2\2\u0331"+
		"\u033e\5\66\34\2\u0332\u033e\7X\2\2\u0333\u033e\5\u00a8U\2\u0334\u033e"+
		"\7e\2\2\u0335\u033e\5\u0098M\2\u0336\u033e\5d\63\2\u0337\u033e\5\u008c"+
		"G\2\u0338\u033e\5v<\2\u0339\u033a\7\6\2\2\u033a\u033b\5r:\2\u033b\u033c"+
		"\7\7\2\2\u033c\u033e\3\2\2\2\u033d\u0308\3\2\2\2\u033d\u030a\3\2\2\2\u033d"+
		"\u030f\3\2\2\2\u033d\u0313\3\2\2\2\u033d\u0315\3\2\2\2\u033d\u0318\3\2"+
		"\2\2\u033d\u031a\3\2\2\2\u033d\u031c\3\2\2\2\u033d\u031e\3\2\2\2\u033d"+
		"\u0320\3\2\2\2\u033d\u0322\3\2\2\2\u033d\u0324\3\2\2\2\u033d\u0326\3\2"+
		"\2\2\u033d\u0328\3\2\2\2\u033d\u032a\3\2\2\2\u033d\u032c\3\2\2\2\u033d"+
		"\u0331\3\2\2\2\u033d\u0332\3\2\2\2\u033d\u0333\3\2\2\2\u033d\u0334\3\2"+
		"\2\2\u033d\u0335\3\2\2\2\u033d\u0336\3\2\2\2\u033d\u0337\3\2\2\2\u033d"+
		"\u0338\3\2\2\2\u033d\u0339\3\2\2\2\u033e\u0390\3\2\2\2\u033f\u0340\f\36"+
		"\2\2\u0340\u0341\7\33\2\2\u0341\u038f\5t;\36\u0342\u0343\f\35\2\2\u0343"+
		"\u0344\t\2\2\2\u0344\u038f\5t;\36\u0345\u0346\f\34\2\2\u0346\u0347\t\3"+
		"\2\2\u0347\u038f\5t;\35\u0348\u0349\f\33\2\2\u0349\u034a\7\34\2\2\u034a"+
		"\u038f\5t;\34\u034b\u034c\f\32\2\2\u034c\u034d\t\4\2\2\u034d\u038f\5t"+
		";\33\u034e\u034f\f\31\2\2\u034f\u0350\t\5\2\2\u0350\u038f\5t;\32\u0351"+
		"\u0352\f\30\2\2\u0352\u0353\7H\2\2\u0353\u038f\5t;\31\u0354\u0355\f\27"+
		"\2\2\u0355\u0356\7^\2\2\u0356\u038f\5t;\30\u0357\u0358\f\26\2\2\u0358"+
		"\u0359\t\6\2\2\u0359\u038f\5t;\27\u035a\u035b\f\25\2\2\u035b\u035c\7)"+
		"\2\2\u035c\u038f\5t;\26\u035d\u035e\f\24\2\2\u035e\u035f\7*\2\2\u035f"+
		"\u038f\5t;\25\u0360\u0361\f\23\2\2\u0361\u0362\7+\2\2\u0362\u038f\5t;"+
		"\24\u0363\u0364\f\22\2\2\u0364\u0365\7,\2\2\u0365\u038f\5t;\23\u0366\u0367"+
		"\f\21\2\2\u0367\u0368\7-\2\2\u0368\u038f\5t;\22\u0369\u036a\f\20\2\2\u036a"+
		"\u036b\7\16\2\2\u036b\u036c\5t;\2\u036c\u036d\7\17\2\2\u036d\u036e\5t"+
		";\21\u036e\u038f\3\2\2\2\u036f\u0370\f\17\2\2\u0370\u0371\7\r\2\2\u0371"+
		"\u038f\5t;\17\u0372\u0373\f\16\2\2\u0373\u0374\5\u0096L\2\u0374\u0375"+
		"\5t;\16\u0375\u038f\3\2\2\2\u0376\u0377\f\60\2\2\u0377\u0378\7\4\2\2\u0378"+
		"\u0379\5r:\2\u0379\u037a\7\5\2\2\u037a\u038f\3\2\2\2\u037b\u037d\f/\2"+
		"\2\u037c\u037e\7\16\2\2\u037d\u037c\3\2\2\2\u037d\u037e\3\2\2\2\u037e"+
		"\u037f\3\2\2\2\u037f\u0381\7\21\2\2\u0380\u0382\7\35\2\2\u0381\u0380\3"+
		"\2\2\2\u0381\u0382\3\2\2\2\u0382\u0383\3\2\2\2\u0383\u038f\5\u00a6T\2"+
		"\u0384\u0385\f,\2\2\u0385\u038f\5n8\2\u0386\u0387\f*\2\2\u0387\u0388\6"+
		";\37\2\u0388\u038f\7\22\2\2\u0389\u038a\f)\2\2\u038a\u038b\6;!\2\u038b"+
		"\u038f\7\23\2\2\u038c\u038d\f\f\2\2\u038d\u038f\5\u009aN\2\u038e\u033f"+
		"\3\2\2\2\u038e\u0342\3\2\2\2\u038e\u0345\3\2\2\2\u038e\u0348\3\2\2\2\u038e"+
		"\u034b\3\2\2\2\u038e\u034e\3\2\2\2\u038e\u0351\3\2\2\2\u038e\u0354\3\2"+
		"\2\2\u038e\u0357\3\2\2\2\u038e\u035a\3\2\2\2\u038e\u035d\3\2\2\2\u038e"+
		"\u0360\3\2\2\2\u038e\u0363\3\2\2\2\u038e\u0366\3\2\2\2\u038e\u0369\3\2"+
		"\2\2\u038e\u036f\3\2\2\2\u038e\u0372\3\2\2\2\u038e\u0376\3\2\2\2\u038e"+
		"\u037b\3\2\2\2\u038e\u0384\3\2\2\2\u038e\u0386\3\2\2\2\u038e\u0389\3\2"+
		"\2\2\u038e\u038c\3\2\2\2\u038f\u0392\3\2\2\2\u0390\u038e\3\2\2\2\u0390"+
		"\u0391\3\2\2\2\u0391u\3\2\2\2\u0392\u0390\3\2\2\2\u0393\u0395\5x=\2\u0394"+
		"\u0393\3\2\2\2\u0395\u0396\3\2\2\2\u0396\u0394\3\2\2\2\u0396\u0397\3\2"+
		"\2\2\u0397w\3\2\2\2\u0398\u0399\7!\2\2\u0399\u039d\5|?\2\u039a\u039c\5"+
		"\u0082B\2\u039b\u039a\3\2\2\2\u039c\u039f\3\2\2\2\u039d\u039b\3\2\2\2"+
		"\u039d\u039e\3\2\2\2\u039e\u03a0\3\2\2\2\u039f\u039d\3\2\2\2\u03a0\u03a1"+
		"\7\"\2\2\u03a1\u03a2\5z>\2\u03a2\u03a3\7!\2\2\u03a3\u03a4\7\31\2\2\u03a4"+
		"\u03a5\5~@\2\u03a5\u03a6\7\"\2\2\u03a6\u03c9\3\2\2\2\u03a7\u03a8\7!\2"+
		"\2\u03a8\u03ac\5\u0080A\2\u03a9\u03ab\5\u0082B\2\u03aa\u03a9\3\2\2\2\u03ab"+
		"\u03ae\3\2\2\2\u03ac\u03aa\3\2\2\2\u03ac\u03ad\3\2\2\2\u03ad\u03af\3\2"+
		"\2\2\u03ae\u03ac\3\2\2\2\u03af\u03b0\5z>\2\u03b0\u03b1\7\31\2\2\u03b1"+
		"\u03b2\7\"\2\2\u03b2\u03c9\3\2\2\2\u03b3\u03b4\7!\2\2\u03b4\u03b8\5\u0080"+
		"A\2\u03b5\u03b7\5\u0082B\2\u03b6\u03b5\3\2\2\2\u03b7\u03ba\3\2\2\2\u03b8"+
		"\u03b6\3\2\2\2\u03b8\u03b9\3\2\2\2\u03b9\u03bb\3\2\2\2\u03ba\u03b8\3\2"+
		"\2\2\u03bb\u03bc\7\31\2\2\u03bc\u03bd\7\"\2\2\u03bd\u03c9\3\2\2\2\u03be"+
		"\u03bf\7!\2\2\u03bf\u03c3\5\u0080A\2\u03c0\u03c2\5\u0082B\2\u03c1\u03c0"+
		"\3\2\2\2\u03c2\u03c5\3\2\2\2\u03c3\u03c1\3\2\2\2\u03c3\u03c4\3\2\2\2\u03c4"+
		"\u03c6\3\2\2\2\u03c5\u03c3\3\2\2\2\u03c6\u03c7\7\"\2\2\u03c7\u03c9\3\2"+
		"\2\2\u03c8\u0398\3\2\2\2\u03c8\u03a7\3\2\2\2\u03c8\u03b3\3\2\2\2\u03c8"+
		"\u03be\3\2\2\2\u03c9y\3\2\2\2\u03ca\u03cc\5\u0086D\2\u03cb\u03ca\3\2\2"+
		"\2\u03cb\u03cc\3\2\2\2\u03cc\u03d6\3\2\2\2\u03cd\u03d0\5x=\2\u03ce\u03d0"+
		"\5\u008eH\2\u03cf\u03cd\3\2\2\2\u03cf\u03ce\3\2\2\2\u03d0\u03d2\3\2\2"+
		"\2\u03d1\u03d3\5\u0086D\2\u03d2\u03d1\3\2\2\2\u03d2\u03d3\3\2\2\2\u03d3"+
		"\u03d5\3\2\2\2\u03d4\u03cf\3\2\2\2\u03d5\u03d8\3\2\2\2\u03d6\u03d4\3\2"+
		"\2\2\u03d6\u03d7\3\2\2\2\u03d7{\3\2\2\2\u03d8\u03d6\3\2\2\2\u03d9\u03da"+
		"\5\u0080A\2\u03da\u03db\b?\1\2\u03db}\3\2\2\2\u03dc\u03dd\5\u0080A\2\u03dd"+
		"\u03de\6@#\3\u03de\177\3\2\2\2\u03df\u03e3\7\u0089\2\2\u03e0\u03e3\5\u00ac"+
		"W\2\u03e1\u03e3\7u\2\2\u03e2\u03df\3\2\2\2\u03e2\u03e0\3\2\2\2\u03e2\u03e1"+
		"\3\2\2\2\u03e3\u0081\3\2\2\2\u03e4\u03e5\5\u0084C\2\u03e5\u03e6\7\r\2"+
		"\2\u03e6\u03e7\5\u0088E\2\u03e7\u03ea\3\2\2\2\u03e8\u03ea\5\u0084C\2\u03e9"+
		"\u03e4\3\2\2\2\u03e9\u03e8\3\2\2\2\u03ea\u0083\3\2\2\2\u03eb\u03f5\7\u0089"+
		"\2\2\u03ec\u03f1\7u\2\2\u03ed\u03ee\7\25\2\2\u03ee\u03f0\7u\2\2\u03ef"+
		"\u03ed\3\2\2\2\u03f0\u03f3\3\2\2\2\u03f1\u03ef\3\2\2\2\u03f1\u03f2\3\2"+
		"\2\2\u03f2\u03f5\3\2\2\2\u03f3\u03f1\3\2\2\2\u03f4\u03eb\3\2\2\2\u03f4"+
		"\u03ec\3\2\2\2\u03f5\u0085\3\2\2\2\u03f6\u03f8\n\7\2\2\u03f7\u03f6\3\2"+
		"\2\2\u03f8\u03f9\3\2\2\2\u03f9\u03f7\3\2\2\2\u03f9\u03fa\3\2\2\2\u03fa"+
		"\u0087\3\2\2\2\u03fb\u03ff\7\u008a\2\2\u03fc\u03ff\7v\2\2\u03fd\u03ff"+
		"\5\u008eH\2\u03fe\u03fb\3\2\2\2\u03fe\u03fc\3\2\2\2\u03fe\u03fd\3\2\2"+
		"\2\u03ff\u0089\3\2\2\2\u0400\u0404\5\u00a8U\2\u0401\u0404\5d\63\2\u0402"+
		"\u0404\5\u008cG\2\u0403\u0400\3\2\2\2\u0403\u0401\3\2\2\2\u0403\u0402"+
		"\3\2\2\2\u0404\u008b\3\2\2\2\u0405\u0411\7\b\2\2\u0406\u040b\5j\66\2\u0407"+
		"\u0408\7\f\2\2\u0408\u040a\5j\66\2\u0409\u0407\3\2\2\2\u040a\u040d\3\2"+
		"\2\2\u040b\u0409\3\2\2\2\u040b\u040c\3\2\2\2\u040c\u040f\3\2\2\2\u040d"+
		"\u040b\3\2\2\2\u040e\u0410\7\f\2\2\u040f\u040e\3\2\2\2\u040f\u0410\3\2"+
		"\2\2\u0410\u0412\3\2\2\2\u0411\u0406\3\2\2\2\u0411\u0412\3\2\2\2\u0412"+
		"\u0413\3\2\2\2\u0413\u0414\7\n\2\2\u0414\u008d\3\2\2\2\u0415\u0416\7\b"+
		"\2\2\u0416\u0417\5r:\2\u0417\u0418\7\n\2\2\u0418\u008f\3\2\2\2\u0419\u0432"+
		"\5P)\2\u041a\u041c\7i\2\2\u041b\u041a\3\2\2\2\u041b\u041c\3\2\2\2\u041c"+
		"\u041d\3\2\2\2\u041d\u041f\7W\2\2\u041e\u0420\7\30\2\2\u041f\u041e\3\2"+
		"\2\2\u041f\u0420\3\2\2\2\u0420\u0421\3\2\2\2\u0421\u0423\7\6\2\2\u0422"+
		"\u0424\5Z.\2\u0423\u0422\3\2\2\2\u0423\u0424\3\2\2\2\u0424\u0425\3\2\2"+
		"\2\u0425\u0426\7\7\2\2\u0426\u0427\7\b\2\2\u0427\u0428\5`\61\2\u0428\u0429"+
		"\7\n\2\2\u0429\u0432\3\2\2\2\u042a\u042c\7i\2\2\u042b\u042a\3\2\2\2\u042b"+
		"\u042c\3\2\2\2\u042c\u042d\3\2\2\2\u042d\u042e\5\u0092J\2\u042e\u042f"+
		"\7:\2\2\u042f\u0430\5\u0094K\2\u0430\u0432\3\2\2\2\u0431\u0419\3\2\2\2"+
		"\u0431\u041b\3\2\2\2\u0431\u042b\3\2\2\2\u0432\u0091\3\2\2\2\u0433\u043a"+
		"\5\u00a8U\2\u0434\u0436\7\6\2\2\u0435\u0437\5Z.\2\u0436\u0435\3\2\2\2"+
		"\u0436\u0437\3\2\2\2\u0437\u0438\3\2\2\2\u0438\u043a\7\7\2\2\u0439\u0433"+
		"\3\2\2\2\u0439\u0434\3\2\2\2\u043a\u0093\3\2\2\2\u043b\u0441\5t;\2\u043c"+
		"\u043d\7\b\2\2\u043d\u043e\5`\61\2\u043e\u043f\7\n\2\2\u043f\u0441\3\2"+
		"\2\2\u0440\u043b\3\2\2\2\u0440\u043c\3\2\2\2\u0441\u0095\3\2\2\2\u0442"+
		"\u0443\t\b\2\2\u0443\u0097\3\2\2\2\u0444\u044c\7;\2\2\u0445\u044c\7<\2"+
		"\2\u0446\u044c\7v\2\2\u0447\u044c\5\u009aN\2\u0448\u044c\7~\2\2\u0449"+
		"\u044c\5\u009eP\2\u044a\u044c\5\u00a0Q\2\u044b\u0444\3\2\2\2\u044b\u0445"+
		"\3\2\2\2\u044b\u0446\3\2\2\2\u044b\u0447\3\2\2\2\u044b\u0448\3\2\2\2\u044b"+
		"\u0449\3\2\2\2\u044b\u044a\3\2\2\2\u044c\u0099\3\2\2\2\u044d\u0451\7x"+
		"\2\2\u044e\u0450\5\u009cO\2\u044f\u044e\3\2\2\2\u0450\u0453\3\2\2\2\u0451"+
		"\u044f\3\2\2\2\u0451\u0452\3\2\2\2\u0452\u0454\3\2\2\2\u0453\u0451\3\2"+
		"\2\2\u0454\u0455\7x\2\2\u0455\u009b\3\2\2\2\u0456\u045c\7\u0084\2\2\u0457"+
		"\u0458\7\u0083\2\2\u0458\u0459\5t;\2\u0459\u045a\7\t\2\2\u045a\u045c\3"+
		"\2\2\2\u045b\u0456\3\2\2\2\u045b\u0457\3\2\2\2\u045c\u009d\3\2\2\2\u045d"+
		"\u045e\t\t\2\2\u045e\u009f\3\2\2\2\u045f\u0460\t\n\2\2\u0460\u00a1\3\2"+
		"\2\2\u0461\u0462\5\u00a8U\2\u0462\u0463\6R$\2\u0463\u0464\5l\67\2\u0464"+
		"\u00a3\3\2\2\2\u0465\u0466\5\u00a8U\2\u0466\u0467\6S%\2\u0467\u0468\5"+
		"l\67\2\u0468\u00a5\3\2\2\2\u0469\u046c\5\u00a8U\2\u046a\u046c\5\u00aa"+
		"V\2\u046b\u0469\3\2\2\2\u046b\u046a\3\2\2\2\u046c\u00a7\3\2\2\2\u046d"+
		"\u046e\t\13\2\2\u046e\u00a9\3\2\2\2\u046f\u0473\5\u00acW\2\u0470\u0473"+
		"\7;\2\2\u0471\u0473\7<\2\2\u0472\u046f\3\2\2\2\u0472\u0470\3\2\2\2\u0472"+
		"\u0471\3\2\2\2\u0473\u00ab\3\2\2\2\u0474\u04a3\7F\2\2\u0475\u04a3\7G\2"+
		"\2\u0476\u04a3\7H\2\2\u0477\u04a3\7I\2\2\u0478\u04a3\7J\2\2\u0479\u04a3"+
		"\7K\2\2\u047a\u04a3\7L\2\2\u047b\u04a3\7M\2\2\u047c\u04a3\7N\2\2\u047d"+
		"\u04a3\7O\2\2\u047e\u04a3\7P\2\2\u047f\u04a3\7Q\2\2\u0480\u04a3\7R\2\2"+
		"\u0481\u04a3\7S\2\2\u0482\u04a3\7T\2\2\u0483\u04a3\7U\2\2\u0484\u04a3"+
		"\7V\2\2\u0485\u04a3\7W\2\2\u0486\u04a3\7X\2\2\u0487\u04a3\7Y\2\2\u0488"+
		"\u04a3\7Z\2\2\u0489\u04a3\7[\2\2\u048a\u04a3\7\\\2\2\u048b\u04a3\7]\2"+
		"\2\u048c\u04a3\7^\2\2\u048d\u04a3\7_\2\2\u048e\u04a3\7b\2\2\u048f\u04a3"+
		"\7c\2\2\u0490\u04a3\7d\2\2\u0491\u04a3\7e\2\2\u0492\u04a3\7f\2\2\u0493"+
		"\u04a3\7g\2\2\u0494\u04a3\7h\2\2\u0495\u04a3\7k\2\2\u0496\u04a3\5\u00ae"+
		"X\2\u0497\u04a3\7n\2\2\u0498\u04a3\7o\2\2\u0499\u04a3\7p\2\2\u049a\u04a3"+
		"\7q\2\2\u049b\u04a3\7r\2\2\u049c\u04a3\7s\2\2\u049d\u04a3\7t\2\2\u049e"+
		"\u04a3\7i\2\2\u049f\u04a3\7j\2\2\u04a0\u04a3\7a\2\2\u04a1\u04a3\7`\2\2"+
		"\u04a2\u0474\3\2\2\2\u04a2\u0475\3\2\2\2\u04a2\u0476\3\2\2\2\u04a2\u0477"+
		"\3\2\2\2\u04a2\u0478\3\2\2\2\u04a2\u0479\3\2\2\2\u04a2\u047a\3\2\2\2\u04a2"+
		"\u047b\3\2\2\2\u04a2\u047c\3\2\2\2\u04a2\u047d\3\2\2\2\u04a2\u047e\3\2"+
		"\2\2\u04a2\u047f\3\2\2\2\u04a2\u0480\3\2\2\2\u04a2\u0481\3\2\2\2\u04a2"+
		"\u0482\3\2\2\2\u04a2\u0483\3\2\2\2\u04a2\u0484\3\2\2\2\u04a2\u0485\3\2"+
		"\2\2\u04a2\u0486\3\2\2\2\u04a2\u0487\3\2\2\2\u04a2\u0488\3\2\2\2\u04a2"+
		"\u0489\3\2\2\2\u04a2\u048a\3\2\2\2\u04a2\u048b\3\2\2\2\u04a2\u048c\3\2"+
		"\2\2\u04a2\u048d\3\2\2\2\u04a2\u048e\3\2\2\2\u04a2\u048f\3\2\2\2\u04a2"+
		"\u0490\3\2\2\2\u04a2\u0491\3\2\2\2\u04a2\u0492\3\2\2\2\u04a2\u0493\3\2"+
		"\2\2\u04a2\u0494\3\2\2\2\u04a2\u0495\3\2\2\2\u04a2\u0496\3\2\2\2\u04a2"+
		"\u0497\3\2\2\2\u04a2\u0498\3\2\2\2\u04a2\u0499\3\2\2\2\u04a2\u049a\3\2"+
		"\2\2\u04a2\u049b\3\2\2\2\u04a2\u049c\3\2\2\2\u04a2\u049d\3\2\2\2\u04a2"+
		"\u049e\3\2\2\2\u04a2\u049f\3\2\2\2\u04a2\u04a0\3\2\2\2\u04a2\u04a1\3\2"+
		"\2\2\u04a3\u00ad\3\2\2\2\u04a4\u04a5\t\f\2\2\u04a5\u00af\3\2\2\2\u04a6"+
		"\u04ab\7\13\2\2\u04a7\u04ab\7\2\2\3\u04a8\u04ab\6Y&\2\u04a9\u04ab\6Y\'"+
		"\2\u04aa\u04a6\3\2\2\2\u04aa\u04a7\3\2\2\2\u04aa\u04a8\3\2\2\2\u04aa\u04a9"+
		"\3\2\2\2\u04ab\u00b1\3\2\2\2\u0085\u00b3\u00b6\u00d0\u00d4\u00db\u00e1"+
		"\u00e5\u00ec\u00f4\u00f9\u00fb\u0104\u0108\u0110\u0115\u011e\u0126\u012a"+
		"\u012f\u013a\u0140\u014f\u0163\u0167\u016b\u0173\u017c\u0181\u0189\u018e"+
		"\u0193\u019a\u01a1\u01aa\u01af\u01c1\u01c5\u01c7\u01ce\u01d4\u01d9\u01e8"+
		"\u01eb\u01f0\u01f3\u01fe\u0202\u0207\u0214\u021a\u0223\u0225\u022e\u0232"+
		"\u0238\u023b\u023e\u0243\u024b\u024e\u0258\u025b\u0260\u0267\u026e\u0273"+
		"\u0276\u027b\u0281\u0286\u028f\u0293\u0298\u029d\u02a3\u02a7\u02b6\u02b9"+
		"\u02be\u02d5\u02d8\u02e1\u02e9\u02ed\u02ef\u02f4\u02f8\u02fb\u0300\u0305"+
		"\u030c\u033d\u037d\u0381\u038e\u0390\u0396\u039d\u03ac\u03b8\u03c3\u03c8"+
		"\u03cb\u03cf\u03d2\u03d6\u03e2\u03e9\u03f1\u03f4\u03f9\u03fe\u0403\u040b"+
		"\u040f\u0411\u041b\u041f\u0423\u042b\u0431\u0436\u0439\u0440\u044b\u0451"+
		"\u045b\u046b\u0472\u04a2\u04aa";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}