// Generated from ./lib/grammars/jsx/JavaScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JavaScriptParserListener } from "./JavaScriptParserListener";
import { JavaScriptParserVisitor } from "./JavaScriptParserVisitor";


export class JavaScriptParser extends JavaScriptParserBase {
	public static readonly HashBangLine = 1;
	public static readonly OpenBracket = 2;
	public static readonly CloseBracket = 3;
	public static readonly OpenParen = 4;
	public static readonly CloseParen = 5;
	public static readonly OpenBrace = 6;
	public static readonly TemplateCloseBrace = 7;
	public static readonly CloseBrace = 8;
	public static readonly SemiColon = 9;
	public static readonly Comma = 10;
	public static readonly Assign = 11;
	public static readonly QuestionMark = 12;
	public static readonly Colon = 13;
	public static readonly Ellipsis = 14;
	public static readonly Dot = 15;
	public static readonly PlusPlus = 16;
	public static readonly MinusMinus = 17;
	public static readonly Plus = 18;
	public static readonly Minus = 19;
	public static readonly BitNot = 20;
	public static readonly Not = 21;
	public static readonly Multiply = 22;
	public static readonly Divide = 23;
	public static readonly Modulus = 24;
	public static readonly Power = 25;
	public static readonly NullCoalesce = 26;
	public static readonly Hashtag = 27;
	public static readonly RightShiftArithmetic = 28;
	public static readonly LeftShiftArithmetic = 29;
	public static readonly RightShiftLogical = 30;
	public static readonly LessThan = 31;
	public static readonly MoreThan = 32;
	public static readonly LessThanEquals = 33;
	public static readonly GreaterThanEquals = 34;
	public static readonly Equals_ = 35;
	public static readonly NotEquals = 36;
	public static readonly IdentityEquals = 37;
	public static readonly IdentityNotEquals = 38;
	public static readonly BitAnd = 39;
	public static readonly BitXOr = 40;
	public static readonly BitOr = 41;
	public static readonly And = 42;
	public static readonly Or = 43;
	public static readonly MultiplyAssign = 44;
	public static readonly DivideAssign = 45;
	public static readonly ModulusAssign = 46;
	public static readonly PlusAssign = 47;
	public static readonly MinusAssign = 48;
	public static readonly LeftShiftArithmeticAssign = 49;
	public static readonly RightShiftArithmeticAssign = 50;
	public static readonly RightShiftLogicalAssign = 51;
	public static readonly BitAndAssign = 52;
	public static readonly BitXorAssign = 53;
	public static readonly BitOrAssign = 54;
	public static readonly PowerAssign = 55;
	public static readonly ARROW = 56;
	public static readonly NullLiteral = 57;
	public static readonly BooleanLiteral = 58;
	public static readonly DecimalLiteral = 59;
	public static readonly HexIntegerLiteral = 60;
	public static readonly OctalIntegerLiteral = 61;
	public static readonly OctalIntegerLiteral2 = 62;
	public static readonly BinaryIntegerLiteral = 63;
	public static readonly BigHexIntegerLiteral = 64;
	public static readonly BigOctalIntegerLiteral = 65;
	public static readonly BigBinaryIntegerLiteral = 66;
	public static readonly BigDecimalIntegerLiteral = 67;
	public static readonly Break = 68;
	public static readonly Do = 69;
	public static readonly Instanceof = 70;
	public static readonly Typeof = 71;
	public static readonly Case = 72;
	public static readonly Else = 73;
	public static readonly New = 74;
	public static readonly Var = 75;
	public static readonly Catch = 76;
	public static readonly Finally = 77;
	public static readonly Return = 78;
	public static readonly Void = 79;
	public static readonly Continue = 80;
	public static readonly For = 81;
	public static readonly Switch = 82;
	public static readonly While = 83;
	public static readonly Debugger = 84;
	public static readonly Function_ = 85;
	public static readonly This = 86;
	public static readonly With = 87;
	public static readonly Default = 88;
	public static readonly If = 89;
	public static readonly Throw = 90;
	public static readonly Delete = 91;
	public static readonly In = 92;
	public static readonly Try = 93;
	public static readonly As = 94;
	public static readonly From = 95;
	public static readonly Class = 96;
	public static readonly Enum = 97;
	public static readonly Extends = 98;
	public static readonly Super = 99;
	public static readonly Const = 100;
	public static readonly Export = 101;
	public static readonly Import = 102;
	public static readonly Async = 103;
	public static readonly Await = 104;
	public static readonly Implements = 105;
	public static readonly StrictLet = 106;
	public static readonly NonStrictLet = 107;
	public static readonly Private = 108;
	public static readonly Public = 109;
	public static readonly Interface = 110;
	public static readonly Package = 111;
	public static readonly Protected = 112;
	public static readonly Static = 113;
	public static readonly Yield = 114;
	public static readonly Identifier = 115;
	public static readonly StringLiteral = 116;
	public static readonly LinkLiteral = 117;
	public static readonly BackTick = 118;
	public static readonly WhiteSpaces = 119;
	public static readonly LineTerminator = 120;
	public static readonly JsxComment = 121;
	public static readonly MultiLineComment = 122;
	public static readonly SingleLineComment = 123;
	public static readonly RegularExpressionLiteral = 124;
	public static readonly HtmlComment = 125;
	public static readonly CDataComment = 126;
	public static readonly UnexpectedCharacter = 127;
	public static readonly CDATA = 128;
	public static readonly TemplateStringStartExpression = 129;
	public static readonly TemplateStringAtom = 130;
	public static readonly TagOpen = 131;
	public static readonly TagClose = 132;
	public static readonly TagSlashClose = 133;
	public static readonly TagSlash = 134;
	public static readonly TagName = 135;
	public static readonly AttributeValue = 136;
	public static readonly Attribute = 137;
	public static readonly TagEquals = 138;
	public static readonly RULE_program = 0;
	public static readonly RULE_sourceElement = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statementList = 4;
	public static readonly RULE_importStatement = 5;
	public static readonly RULE_importFromBlock = 6;
	public static readonly RULE_moduleItems = 7;
	public static readonly RULE_importDefault = 8;
	public static readonly RULE_importNamespace = 9;
	public static readonly RULE_importFrom = 10;
	public static readonly RULE_aliasName = 11;
	public static readonly RULE_exportStatement = 12;
	public static readonly RULE_exportFromBlock = 13;
	public static readonly RULE_declaration = 14;
	public static readonly RULE_variableStatement = 15;
	public static readonly RULE_variableDeclarationList = 16;
	public static readonly RULE_variableDeclaration = 17;
	public static readonly RULE_emptyStatement_ = 18;
	public static readonly RULE_expressionStatement = 19;
	public static readonly RULE_ifStatement = 20;
	public static readonly RULE_iterationStatement = 21;
	public static readonly RULE_varModifier = 22;
	public static readonly RULE_continueStatement = 23;
	public static readonly RULE_breakStatement = 24;
	public static readonly RULE_returnStatement = 25;
	public static readonly RULE_yieldStatement = 26;
	public static readonly RULE_withStatement = 27;
	public static readonly RULE_switchStatement = 28;
	public static readonly RULE_caseBlock = 29;
	public static readonly RULE_caseClauses = 30;
	public static readonly RULE_caseClause = 31;
	public static readonly RULE_defaultClause = 32;
	public static readonly RULE_labelledStatement = 33;
	public static readonly RULE_throwStatement = 34;
	public static readonly RULE_tryStatement = 35;
	public static readonly RULE_catchProduction = 36;
	public static readonly RULE_finallyProduction = 37;
	public static readonly RULE_debuggerStatement = 38;
	public static readonly RULE_functionDeclaration = 39;
	public static readonly RULE_classDeclaration = 40;
	public static readonly RULE_classTail = 41;
	public static readonly RULE_classElement = 42;
	public static readonly RULE_methodDefinition = 43;
	public static readonly RULE_formalParameterList = 44;
	public static readonly RULE_formalParameterArg = 45;
	public static readonly RULE_lastFormalParameterArg = 46;
	public static readonly RULE_functionBody = 47;
	public static readonly RULE_sourceElements = 48;
	public static readonly RULE_arrayLiteral = 49;
	public static readonly RULE_elementList = 50;
	public static readonly RULE_arrayElement = 51;
	public static readonly RULE_propertyAssignment = 52;
	public static readonly RULE_propertyName = 53;
	public static readonly RULE_arguments = 54;
	public static readonly RULE_argument = 55;
	public static readonly RULE_expressionSequence = 56;
	public static readonly RULE_singleExpression = 57;
	public static readonly RULE_htmlElements = 58;
	public static readonly RULE_htmlElement = 59;
	public static readonly RULE_htmlContent = 60;
	public static readonly RULE_htmlTagStartName = 61;
	public static readonly RULE_htmlTagClosingName = 62;
	public static readonly RULE_htmlTagName = 63;
	public static readonly RULE_htmlAttribute = 64;
	public static readonly RULE_htmlAttributeName = 65;
	public static readonly RULE_htmlChardata = 66;
	public static readonly RULE_htmlAttributeValue = 67;
	public static readonly RULE_assignable = 68;
	public static readonly RULE_objectLiteral = 69;
	public static readonly RULE_objectExpressionSequence = 70;
	public static readonly RULE_anoymousFunction = 71;
	public static readonly RULE_arrowFunctionParameters = 72;
	public static readonly RULE_arrowFunctionBody = 73;
	public static readonly RULE_assignmentOperator = 74;
	public static readonly RULE_literal = 75;
	public static readonly RULE_templateStringLiteral = 76;
	public static readonly RULE_templateStringAtom = 77;
	public static readonly RULE_numericLiteral = 78;
	public static readonly RULE_bigintLiteral = 79;
	public static readonly RULE_getter = 80;
	public static readonly RULE_setter = 81;
	public static readonly RULE_identifierName = 82;
	public static readonly RULE_identifier = 83;
	public static readonly RULE_reservedWord = 84;
	public static readonly RULE_keyword = 85;
	public static readonly RULE_let_ = 86;
	public static readonly RULE_eos = 87;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
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
		"htmlChardata", "htmlAttributeValue", "assignable", "objectLiteral", "objectExpressionSequence", 
		"anoymousFunction", "arrowFunctionParameters", "arrowFunctionBody", "assignmentOperator", 
		"literal", "templateStringLiteral", "templateStringAtom", "numericLiteral", 
		"bigintLiteral", "getter", "setter", "identifierName", "identifier", "reservedWord", 
		"keyword", "let_", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'['", "']'", "'('", "')'", "'{'", undefined, "'}'", 
		"';'", "','", "'='", "'?'", "':'", "'...'", "'.'", "'++'", "'--'", "'+'", 
		"'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'**'", "'??'", "'#'", "'>>'", 
		"'<<'", "'>>>'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'==='", 
		"'!=='", "'&'", "'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", 
		"'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'**='", 
		"'=>'", "'null'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'break'", "'do'", 
		"'instanceof'", "'typeof'", "'case'", "'else'", "'new'", "'var'", "'catch'", 
		"'finally'", "'return'", "'void'", "'continue'", "'for'", "'switch'", 
		"'while'", "'debugger'", "'function'", "'this'", "'with'", "'default'", 
		"'if'", "'throw'", "'delete'", "'in'", "'try'", "'as'", "'from'", "'class'", 
		"'enum'", "'extends'", "'super'", "'const'", "'export'", "'import'", "'async'", 
		"'await'", "'implements'", undefined, undefined, "'private'", "'public'", 
		"'interface'", "'package'", "'protected'", "'static'", "'yield'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'${'", 
		undefined, undefined, undefined, "'/>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HashBangLine", "OpenBracket", "CloseBracket", "OpenParen", 
		"CloseParen", "OpenBrace", "TemplateCloseBrace", "CloseBrace", "SemiColon", 
		"Comma", "Assign", "QuestionMark", "Colon", "Ellipsis", "Dot", "PlusPlus", 
		"MinusMinus", "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", 
		"Modulus", "Power", "NullCoalesce", "Hashtag", "RightShiftArithmetic", 
		"LeftShiftArithmetic", "RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", 
		"GreaterThanEquals", "Equals_", "NotEquals", "IdentityEquals", "IdentityNotEquals", 
		"BitAnd", "BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", 
		"ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "PowerAssign", "ARROW", "NullLiteral", 
		"BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral", "OctalIntegerLiteral", 
		"OctalIntegerLiteral2", "BinaryIntegerLiteral", "BigHexIntegerLiteral", 
		"BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", "BigDecimalIntegerLiteral", 
		"Break", "Do", "Instanceof", "Typeof", "Case", "Else", "New", "Var", "Catch", 
		"Finally", "Return", "Void", "Continue", "For", "Switch", "While", "Debugger", 
		"Function_", "This", "With", "Default", "If", "Throw", "Delete", "In", 
		"Try", "As", "From", "Class", "Enum", "Extends", "Super", "Const", "Export", 
		"Import", "Async", "Await", "Implements", "StrictLet", "NonStrictLet", 
		"Private", "Public", "Interface", "Package", "Protected", "Static", "Yield", 
		"Identifier", "StringLiteral", "LinkLiteral", "BackTick", "WhiteSpaces", 
		"LineTerminator", "JsxComment", "MultiLineComment", "SingleLineComment", 
		"RegularExpressionLiteral", "HtmlComment", "CDataComment", "UnexpectedCharacter", 
		"CDATA", "TemplateStringStartExpression", "TemplateStringAtom", "TagOpen", 
		"TagClose", "TagSlashClose", "TagSlash", "TagName", "AttributeValue", 
		"Attribute", "TagEquals",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaScriptParser._LITERAL_NAMES, JavaScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JavaScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavaScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavaScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaScriptParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 176;
				this.match(JavaScriptParser.HashBangLine);
				}
				break;
			}
			this.state = 180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 179;
				this.sourceElements();
				}
				break;
			}
			this.state = 182;
			this.match(JavaScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaScriptParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavaScriptParser.RULE_statement);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 186;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 187;
				this.variableStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 188;
				this.importStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 189;
				this.exportStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 190;
				this.emptyStatement_();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 191;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 192;
				this.expressionStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 193;
				this.ifStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 194;
				this.iterationStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 195;
				this.continueStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 196;
				this.breakStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 197;
				this.returnStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 198;
				this.yieldStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 199;
				this.withStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 200;
				this.labelledStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 201;
				this.switchStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 202;
				this.throwStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 203;
				this.tryStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 204;
				this.debuggerStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 205;
				this.functionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaScriptParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 209;
				this.statementList();
				}
				break;
			}
			this.state = 212;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaScriptParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 214;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 217;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaScriptParser.RULE_importStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(JavaScriptParser.Import);
			this.state = 220;
			this.importFromBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importFromBlock(): ImportFromBlockContext {
		let _localctx: ImportFromBlockContext = new ImportFromBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaScriptParser.RULE_importFromBlock);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.OpenBrace:
			case JavaScriptParser.Multiply:
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 223;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 222;
					this.importDefault();
					}
					break;
				}
				this.state = 227;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaScriptParser.Multiply:
				case JavaScriptParser.NullLiteral:
				case JavaScriptParser.BooleanLiteral:
				case JavaScriptParser.Break:
				case JavaScriptParser.Do:
				case JavaScriptParser.Instanceof:
				case JavaScriptParser.Typeof:
				case JavaScriptParser.Case:
				case JavaScriptParser.Else:
				case JavaScriptParser.New:
				case JavaScriptParser.Var:
				case JavaScriptParser.Catch:
				case JavaScriptParser.Finally:
				case JavaScriptParser.Return:
				case JavaScriptParser.Void:
				case JavaScriptParser.Continue:
				case JavaScriptParser.For:
				case JavaScriptParser.Switch:
				case JavaScriptParser.While:
				case JavaScriptParser.Debugger:
				case JavaScriptParser.Function_:
				case JavaScriptParser.This:
				case JavaScriptParser.With:
				case JavaScriptParser.Default:
				case JavaScriptParser.If:
				case JavaScriptParser.Throw:
				case JavaScriptParser.Delete:
				case JavaScriptParser.In:
				case JavaScriptParser.Try:
				case JavaScriptParser.As:
				case JavaScriptParser.From:
				case JavaScriptParser.Class:
				case JavaScriptParser.Enum:
				case JavaScriptParser.Extends:
				case JavaScriptParser.Super:
				case JavaScriptParser.Const:
				case JavaScriptParser.Export:
				case JavaScriptParser.Import:
				case JavaScriptParser.Async:
				case JavaScriptParser.Await:
				case JavaScriptParser.Implements:
				case JavaScriptParser.StrictLet:
				case JavaScriptParser.NonStrictLet:
				case JavaScriptParser.Private:
				case JavaScriptParser.Public:
				case JavaScriptParser.Interface:
				case JavaScriptParser.Package:
				case JavaScriptParser.Protected:
				case JavaScriptParser.Static:
				case JavaScriptParser.Yield:
				case JavaScriptParser.Identifier:
					{
					this.state = 225;
					this.importNamespace();
					}
					break;
				case JavaScriptParser.OpenBrace:
					{
					this.state = 226;
					this.moduleItems();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 229;
				this.importFrom();
				this.state = 230;
				this.eos();
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.match(JavaScriptParser.StringLiteral);
				this.state = 233;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleItems(): ModuleItemsContext {
		let _localctx: ModuleItemsContext = new ModuleItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavaScriptParser.RULE_moduleItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 242;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 237;
					this.aliasName();
					this.state = 238;
					this.match(JavaScriptParser.Comma);
					}
					}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (JavaScriptParser.NullLiteral - 57)) | (1 << (JavaScriptParser.BooleanLiteral - 57)) | (1 << (JavaScriptParser.Break - 57)) | (1 << (JavaScriptParser.Do - 57)) | (1 << (JavaScriptParser.Instanceof - 57)) | (1 << (JavaScriptParser.Typeof - 57)) | (1 << (JavaScriptParser.Case - 57)) | (1 << (JavaScriptParser.Else - 57)) | (1 << (JavaScriptParser.New - 57)) | (1 << (JavaScriptParser.Var - 57)) | (1 << (JavaScriptParser.Catch - 57)) | (1 << (JavaScriptParser.Finally - 57)) | (1 << (JavaScriptParser.Return - 57)) | (1 << (JavaScriptParser.Void - 57)) | (1 << (JavaScriptParser.Continue - 57)) | (1 << (JavaScriptParser.For - 57)) | (1 << (JavaScriptParser.Switch - 57)) | (1 << (JavaScriptParser.While - 57)) | (1 << (JavaScriptParser.Debugger - 57)) | (1 << (JavaScriptParser.Function_ - 57)) | (1 << (JavaScriptParser.This - 57)) | (1 << (JavaScriptParser.With - 57)) | (1 << (JavaScriptParser.Default - 57)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (JavaScriptParser.If - 89)) | (1 << (JavaScriptParser.Throw - 89)) | (1 << (JavaScriptParser.Delete - 89)) | (1 << (JavaScriptParser.In - 89)) | (1 << (JavaScriptParser.Try - 89)) | (1 << (JavaScriptParser.As - 89)) | (1 << (JavaScriptParser.From - 89)) | (1 << (JavaScriptParser.Class - 89)) | (1 << (JavaScriptParser.Enum - 89)) | (1 << (JavaScriptParser.Extends - 89)) | (1 << (JavaScriptParser.Super - 89)) | (1 << (JavaScriptParser.Const - 89)) | (1 << (JavaScriptParser.Export - 89)) | (1 << (JavaScriptParser.Import - 89)) | (1 << (JavaScriptParser.Async - 89)) | (1 << (JavaScriptParser.Await - 89)) | (1 << (JavaScriptParser.Implements - 89)) | (1 << (JavaScriptParser.StrictLet - 89)) | (1 << (JavaScriptParser.NonStrictLet - 89)) | (1 << (JavaScriptParser.Private - 89)) | (1 << (JavaScriptParser.Public - 89)) | (1 << (JavaScriptParser.Interface - 89)) | (1 << (JavaScriptParser.Package - 89)) | (1 << (JavaScriptParser.Protected - 89)) | (1 << (JavaScriptParser.Static - 89)) | (1 << (JavaScriptParser.Yield - 89)) | (1 << (JavaScriptParser.Identifier - 89)))) !== 0)) {
				{
				this.state = 245;
				this.aliasName();
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 246;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
			}

			this.state = 251;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDefault(): ImportDefaultContext {
		let _localctx: ImportDefaultContext = new ImportDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaScriptParser.RULE_importDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.aliasName();
			this.state = 254;
			this.match(JavaScriptParser.Comma);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importNamespace(): ImportNamespaceContext {
		let _localctx: ImportNamespaceContext = new ImportNamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaScriptParser.RULE_importNamespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Multiply:
				{
				this.state = 256;
				this.match(JavaScriptParser.Multiply);
				}
				break;
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				{
				this.state = 257;
				this.identifierName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.As) {
				{
				this.state = 260;
				this.match(JavaScriptParser.As);
				this.state = 261;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importFrom(): ImportFromContext {
		let _localctx: ImportFromContext = new ImportFromContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaScriptParser.RULE_importFrom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(JavaScriptParser.From);
			this.state = 265;
			this.match(JavaScriptParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasName(): AliasNameContext {
		let _localctx: AliasNameContext = new AliasNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavaScriptParser.RULE_aliasName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.identifierName();
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.As) {
				{
				this.state = 268;
				this.match(JavaScriptParser.As);
				this.state = 269;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportStatement(): ExportStatementContext {
		let _localctx: ExportStatementContext = new ExportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavaScriptParser.RULE_exportStatement);
		try {
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new ExportDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 272;
				this.match(JavaScriptParser.Export);
				this.state = 275;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 273;
					this.exportFromBlock();
					}
					break;

				case 2:
					{
					this.state = 274;
					this.declaration();
					}
					break;
				}
				this.state = 277;
				this.eos();
				}
				break;

			case 2:
				_localctx = new ExportDefaultDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.match(JavaScriptParser.Export);
				this.state = 280;
				this.match(JavaScriptParser.Default);
				this.state = 281;
				this.singleExpression(0);
				this.state = 282;
				this.eos();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportFromBlock(): ExportFromBlockContext {
		let _localctx: ExportFromBlockContext = new ExportFromBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavaScriptParser.RULE_exportFromBlock);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Multiply:
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.importNamespace();
				this.state = 287;
				this.importFrom();
				this.state = 288;
				this.eos();
				}
				break;
			case JavaScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 290;
				this.moduleItems();
				this.state = 292;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 291;
					this.importFrom();
					}
					break;
				}
				this.state = 294;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavaScriptParser.RULE_declaration);
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Var:
			case JavaScriptParser.Const:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 298;
				this.variableStatement();
				}
				break;
			case JavaScriptParser.Class:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 299;
				this.classDeclaration();
				}
				break;
			case JavaScriptParser.Function_:
			case JavaScriptParser.Async:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 300;
				this.functionDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavaScriptParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.variableDeclarationList();
			this.state = 304;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavaScriptParser.RULE_variableDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.varModifier();
			this.state = 307;
			this.variableDeclaration();
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					this.match(JavaScriptParser.Comma);
					this.state = 309;
					this.variableDeclaration();
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavaScriptParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.assignable();
			this.state = 318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 316;
				this.match(JavaScriptParser.Assign);
				this.state = 317;
				this.singleExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let _localctx: EmptyStatement_Context = new EmptyStatement_Context(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaScriptParser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(JavaScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavaScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			if (!(this.notOpenBraceAndNotFunction())) {
				throw this.createFailedPredicateException("this.notOpenBraceAndNotFunction()");
			}
			this.state = 323;
			this.expressionSequence();
			this.state = 324;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavaScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.match(JavaScriptParser.If);
			this.state = 327;
			this.match(JavaScriptParser.OpenParen);
			this.state = 328;
			this.expressionSequence();
			this.state = 329;
			this.match(JavaScriptParser.CloseParen);
			this.state = 330;
			this.statement();
			this.state = 333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 331;
				this.match(JavaScriptParser.Else);
				this.state = 332;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavaScriptParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 391;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 335;
				this.match(JavaScriptParser.Do);
				this.state = 336;
				this.statement();
				this.state = 337;
				this.match(JavaScriptParser.While);
				this.state = 338;
				this.match(JavaScriptParser.OpenParen);
				this.state = 339;
				this.expressionSequence();
				this.state = 340;
				this.match(JavaScriptParser.CloseParen);
				this.state = 341;
				this.eos();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.match(JavaScriptParser.While);
				this.state = 344;
				this.match(JavaScriptParser.OpenParen);
				this.state = 345;
				this.expressionSequence();
				this.state = 346;
				this.match(JavaScriptParser.CloseParen);
				this.state = 347;
				this.statement();
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 349;
				this.match(JavaScriptParser.For);
				this.state = 350;
				this.match(JavaScriptParser.OpenParen);
				this.state = 353;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 351;
					this.expressionSequence();
					}
					break;

				case 2:
					{
					this.state = 352;
					this.variableDeclarationList();
					}
					break;
				}
				this.state = 355;
				this.match(JavaScriptParser.SemiColon);
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not) | (1 << JavaScriptParser.LessThan))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (JavaScriptParser.NullLiteral - 57)) | (1 << (JavaScriptParser.BooleanLiteral - 57)) | (1 << (JavaScriptParser.DecimalLiteral - 57)) | (1 << (JavaScriptParser.HexIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 57)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 57)) | (1 << (JavaScriptParser.Typeof - 57)) | (1 << (JavaScriptParser.New - 57)) | (1 << (JavaScriptParser.Void - 57)) | (1 << (JavaScriptParser.Function_ - 57)) | (1 << (JavaScriptParser.This - 57)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.NonStrictLet - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)) | (1 << (JavaScriptParser.StringLiteral - 91)) | (1 << (JavaScriptParser.BackTick - 91)))) !== 0) || _la === JavaScriptParser.RegularExpressionLiteral) {
					{
					this.state = 356;
					this.expressionSequence();
					}
				}

				this.state = 359;
				this.match(JavaScriptParser.SemiColon);
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not) | (1 << JavaScriptParser.LessThan))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (JavaScriptParser.NullLiteral - 57)) | (1 << (JavaScriptParser.BooleanLiteral - 57)) | (1 << (JavaScriptParser.DecimalLiteral - 57)) | (1 << (JavaScriptParser.HexIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 57)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 57)) | (1 << (JavaScriptParser.Typeof - 57)) | (1 << (JavaScriptParser.New - 57)) | (1 << (JavaScriptParser.Void - 57)) | (1 << (JavaScriptParser.Function_ - 57)) | (1 << (JavaScriptParser.This - 57)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.NonStrictLet - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)) | (1 << (JavaScriptParser.StringLiteral - 91)) | (1 << (JavaScriptParser.BackTick - 91)))) !== 0) || _la === JavaScriptParser.RegularExpressionLiteral) {
					{
					this.state = 360;
					this.expressionSequence();
					}
				}

				this.state = 363;
				this.match(JavaScriptParser.CloseParen);
				this.state = 364;
				this.statement();
				}
				break;

			case 4:
				_localctx = new ForInStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 365;
				this.match(JavaScriptParser.For);
				this.state = 366;
				this.match(JavaScriptParser.OpenParen);
				this.state = 369;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 367;
					this.singleExpression(0);
					}
					break;

				case 2:
					{
					this.state = 368;
					this.variableDeclarationList();
					}
					break;
				}
				this.state = 371;
				this.match(JavaScriptParser.In);
				this.state = 372;
				this.expressionSequence();
				this.state = 373;
				this.match(JavaScriptParser.CloseParen);
				this.state = 374;
				this.statement();
				}
				break;

			case 5:
				_localctx = new ForOfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 376;
				this.match(JavaScriptParser.For);
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Await) {
					{
					this.state = 377;
					this.match(JavaScriptParser.Await);
					}
				}

				this.state = 380;
				this.match(JavaScriptParser.OpenParen);
				this.state = 383;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 381;
					this.singleExpression(0);
					}
					break;

				case 2:
					{
					this.state = 382;
					this.variableDeclarationList();
					}
					break;
				}
				this.state = 385;
				this.identifier();
				this.state = 386;
				if (!(this.p("of"))) {
					throw this.createFailedPredicateException("this.p(\"of\")");
				}
				this.state = 387;
				this.expressionSequence();
				this.state = 388;
				this.match(JavaScriptParser.CloseParen);
				this.state = 389;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varModifier(): VarModifierContext {
		let _localctx: VarModifierContext = new VarModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JavaScriptParser.RULE_varModifier);
		try {
			this.state = 396;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Var:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 393;
				this.match(JavaScriptParser.Var);
				}
				break;
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 394;
				this.let_();
				}
				break;
			case JavaScriptParser.Const:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 395;
				this.match(JavaScriptParser.Const);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JavaScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(JavaScriptParser.Continue);
			this.state = 401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 399;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 400;
				this.identifier();
				}
				break;
			}
			this.state = 403;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JavaScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.match(JavaScriptParser.Break);
			this.state = 408;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 406;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 407;
				this.identifier();
				}
				break;
			}
			this.state = 410;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JavaScriptParser.RULE_returnStatement);
		try {
			this.state = 424;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 412;
				this.match(JavaScriptParser.Return);
				this.state = 415;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 413;
					if (!(this.notLineTerminator())) {
						throw this.createFailedPredicateException("this.notLineTerminator()");
					}
					this.state = 414;
					this.expressionSequence();
					}
					break;
				}
				this.state = 417;
				this.eos();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 418;
				this.match(JavaScriptParser.Return);
				this.state = 419;
				this.match(JavaScriptParser.OpenParen);
				this.state = 420;
				this.htmlElements();
				this.state = 421;
				this.match(JavaScriptParser.CloseParen);
				this.state = 422;
				this.eos();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let _localctx: YieldStatementContext = new YieldStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JavaScriptParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.match(JavaScriptParser.Yield);
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 427;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 428;
				this.expressionSequence();
				}
				break;
			}
			this.state = 431;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withStatement(): WithStatementContext {
		let _localctx: WithStatementContext = new WithStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JavaScriptParser.RULE_withStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(JavaScriptParser.With);
			this.state = 434;
			this.match(JavaScriptParser.OpenParen);
			this.state = 435;
			this.expressionSequence();
			this.state = 436;
			this.match(JavaScriptParser.CloseParen);
			this.state = 437;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JavaScriptParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(JavaScriptParser.Switch);
			this.state = 440;
			this.match(JavaScriptParser.OpenParen);
			this.state = 441;
			this.expressionSequence();
			this.state = 442;
			this.match(JavaScriptParser.CloseParen);
			this.state = 443;
			this.caseBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let _localctx: CaseBlockContext = new CaseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JavaScriptParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Case) {
				{
				this.state = 446;
				this.caseClauses();
				}
			}

			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Default) {
				{
				this.state = 449;
				this.defaultClause();
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Case) {
					{
					this.state = 450;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 455;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClauses(): CaseClausesContext {
		let _localctx: CaseClausesContext = new CaseClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JavaScriptParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 457;
				this.caseClause();
				}
				}
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JavaScriptParser.Case);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClause(): CaseClauseContext {
		let _localctx: CaseClauseContext = new CaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JavaScriptParser.RULE_caseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(JavaScriptParser.Case);
			this.state = 463;
			this.expressionSequence();
			this.state = 464;
			this.match(JavaScriptParser.Colon);
			this.state = 466;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 465;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let _localctx: DefaultClauseContext = new DefaultClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JavaScriptParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(JavaScriptParser.Default);
			this.state = 469;
			this.match(JavaScriptParser.Colon);
			this.state = 471;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 470;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelledStatement(): LabelledStatementContext {
		let _localctx: LabelledStatementContext = new LabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JavaScriptParser.RULE_labelledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.identifier();
			this.state = 474;
			this.match(JavaScriptParser.Colon);
			this.state = 475;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JavaScriptParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(JavaScriptParser.Throw);
			this.state = 478;
			if (!(this.notLineTerminator())) {
				throw this.createFailedPredicateException("this.notLineTerminator()");
			}
			this.state = 479;
			this.expressionSequence();
			this.state = 480;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JavaScriptParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(JavaScriptParser.Try);
			this.state = 483;
			this.block();
			this.state = 489;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Catch:
				{
				this.state = 484;
				this.catchProduction();
				this.state = 486;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 485;
					this.finallyProduction();
					}
					break;
				}
				}
				break;
			case JavaScriptParser.Finally:
				{
				this.state = 488;
				this.finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchProduction(): CatchProductionContext {
		let _localctx: CatchProductionContext = new CatchProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JavaScriptParser.RULE_catchProduction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(JavaScriptParser.Catch);
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.OpenParen) {
				{
				this.state = 492;
				this.match(JavaScriptParser.OpenParen);
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.OpenBracket || _la === JavaScriptParser.OpenBrace || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JavaScriptParser.Async - 103)) | (1 << (JavaScriptParser.NonStrictLet - 103)) | (1 << (JavaScriptParser.Identifier - 103)))) !== 0)) {
					{
					this.state = 493;
					this.assignable();
					}
				}

				this.state = 496;
				this.match(JavaScriptParser.CloseParen);
				}
			}

			this.state = 499;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyProduction(): FinallyProductionContext {
		let _localctx: FinallyProductionContext = new FinallyProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JavaScriptParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.match(JavaScriptParser.Finally);
			this.state = 502;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public debuggerStatement(): DebuggerStatementContext {
		let _localctx: DebuggerStatementContext = new DebuggerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JavaScriptParser.RULE_debuggerStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.match(JavaScriptParser.Debugger);
			this.state = 505;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JavaScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Async) {
				{
				this.state = 507;
				this.match(JavaScriptParser.Async);
				}
			}

			this.state = 510;
			this.match(JavaScriptParser.Function_);
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Multiply) {
				{
				this.state = 511;
				this.match(JavaScriptParser.Multiply);
				}
			}

			this.state = 514;
			this.identifier();
			this.state = 515;
			this.match(JavaScriptParser.OpenParen);
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JavaScriptParser.Async - 103)) | (1 << (JavaScriptParser.NonStrictLet - 103)) | (1 << (JavaScriptParser.Identifier - 103)))) !== 0)) {
				{
				this.state = 516;
				this.formalParameterList();
				}
			}

			this.state = 519;
			this.match(JavaScriptParser.CloseParen);
			this.state = 520;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 521;
			this.functionBody();
			this.state = 522;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JavaScriptParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(JavaScriptParser.Class);
			this.state = 525;
			this.identifier();
			this.state = 526;
			this.classTail();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classTail(): ClassTailContext {
		let _localctx: ClassTailContext = new ClassTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JavaScriptParser.RULE_classTail);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Extends) {
				{
				this.state = 528;
				this.match(JavaScriptParser.Extends);
				this.state = 529;
				this.singleExpression(0);
				}
			}

			this.state = 532;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 536;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 533;
					this.classElement();
					}
					}
				}
				this.state = 538;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 539;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classElement(): ClassElementContext {
		let _localctx: ClassElementContext = new ClassElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JavaScriptParser.RULE_classElement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 547;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 545;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
						case 1:
							{
							this.state = 541;
							this.match(JavaScriptParser.Static);
							}
							break;

						case 2:
							{
							this.state = 542;
							if (!(this.n("static"))) {
								throw this.createFailedPredicateException("this.n(\"static\")");
							}
							this.state = 543;
							this.identifier();
							}
							break;

						case 3:
							{
							this.state = 544;
							this.match(JavaScriptParser.Async);
							}
							break;
						}
						}
					}
					this.state = 549;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				this.state = 556;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 550;
					this.methodDefinition();
					}
					break;

				case 2:
					{
					this.state = 551;
					this.assignable();
					this.state = 552;
					this.match(JavaScriptParser.Assign);
					this.state = 553;
					this.objectLiteral();
					this.state = 554;
					this.match(JavaScriptParser.SemiColon);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 558;
				this.emptyStatement_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 559;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 562;
				this.propertyName();
				this.state = 563;
				this.match(JavaScriptParser.Assign);
				this.state = 564;
				this.singleExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDefinition(): MethodDefinitionContext {
		let _localctx: MethodDefinitionContext = new MethodDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, JavaScriptParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.state = 613;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 568;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 571;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 574;
				this.propertyName();
				this.state = 575;
				this.match(JavaScriptParser.OpenParen);
				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JavaScriptParser.Async - 103)) | (1 << (JavaScriptParser.NonStrictLet - 103)) | (1 << (JavaScriptParser.Identifier - 103)))) !== 0)) {
					{
					this.state = 576;
					this.formalParameterList();
					}
				}

				this.state = 579;
				this.match(JavaScriptParser.CloseParen);
				this.state = 580;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 581;
				this.functionBody();
				this.state = 582;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 584;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 587;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 590;
				this.getter();
				this.state = 591;
				this.match(JavaScriptParser.OpenParen);
				this.state = 592;
				this.match(JavaScriptParser.CloseParen);
				this.state = 593;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 594;
				this.functionBody();
				this.state = 595;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 597;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 600;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 603;
				this.setter();
				this.state = 604;
				this.match(JavaScriptParser.OpenParen);
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JavaScriptParser.Async - 103)) | (1 << (JavaScriptParser.NonStrictLet - 103)) | (1 << (JavaScriptParser.Identifier - 103)))) !== 0)) {
					{
					this.state = 605;
					this.formalParameterList();
					}
				}

				this.state = 608;
				this.match(JavaScriptParser.CloseParen);
				this.state = 609;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 610;
				this.functionBody();
				this.state = 611;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, JavaScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 628;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.OpenBracket:
			case JavaScriptParser.OpenBrace:
			case JavaScriptParser.Async:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 615;
				this.formalParameterArg();
				this.state = 620;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 616;
						this.match(JavaScriptParser.Comma);
						this.state = 617;
						this.formalParameterArg();
						}
						}
					}
					this.state = 622;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				}
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 623;
					this.match(JavaScriptParser.Comma);
					this.state = 624;
					this.lastFormalParameterArg();
					}
				}

				}
				break;
			case JavaScriptParser.Ellipsis:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 627;
				this.lastFormalParameterArg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterArg(): FormalParameterArgContext {
		let _localctx: FormalParameterArgContext = new FormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, JavaScriptParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.assignable();
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Assign) {
				{
				this.state = 631;
				this.match(JavaScriptParser.Assign);
				this.state = 632;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		let _localctx: LastFormalParameterArgContext = new LastFormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, JavaScriptParser.RULE_lastFormalParameterArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			this.match(JavaScriptParser.Ellipsis);
			this.state = 636;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, JavaScriptParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 638;
				this.sourceElements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let _localctx: SourceElementsContext = new SourceElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, JavaScriptParser.RULE_sourceElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 641;
					this.sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 644;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, JavaScriptParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 646;
			this.match(JavaScriptParser.OpenBracket);
			this.state = 647;
			this.elementList();
			this.state = 648;
			this.match(JavaScriptParser.CloseBracket);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, JavaScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 650;
					this.match(JavaScriptParser.Comma);
					}
					}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not) | (1 << JavaScriptParser.LessThan))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (JavaScriptParser.NullLiteral - 57)) | (1 << (JavaScriptParser.BooleanLiteral - 57)) | (1 << (JavaScriptParser.DecimalLiteral - 57)) | (1 << (JavaScriptParser.HexIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 57)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 57)) | (1 << (JavaScriptParser.Typeof - 57)) | (1 << (JavaScriptParser.New - 57)) | (1 << (JavaScriptParser.Void - 57)) | (1 << (JavaScriptParser.Function_ - 57)) | (1 << (JavaScriptParser.This - 57)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.NonStrictLet - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)) | (1 << (JavaScriptParser.StringLiteral - 91)) | (1 << (JavaScriptParser.BackTick - 91)))) !== 0) || _la === JavaScriptParser.RegularExpressionLiteral) {
				{
				this.state = 656;
				this.arrayElement();
				}
			}

			this.state = 667;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 660;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 659;
						this.match(JavaScriptParser.Comma);
						}
						}
						this.state = 662;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === JavaScriptParser.Comma);
					this.state = 664;
					this.arrayElement();
					}
					}
				}
				this.state = 669;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaScriptParser.Comma) {
				{
				{
				this.state = 670;
				this.match(JavaScriptParser.Comma);
				}
				}
				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayElement(): ArrayElementContext {
		let _localctx: ArrayElementContext = new ArrayElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, JavaScriptParser.RULE_arrayElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Ellipsis) {
				{
				this.state = 676;
				this.match(JavaScriptParser.Ellipsis);
				}
			}

			this.state = 679;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, JavaScriptParser.RULE_propertyAssignment);
		let _la: number;
		try {
			this.state = 726;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				_localctx = new PropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 681;
				this.propertyName();
				this.state = 682;
				this.match(JavaScriptParser.Colon);
				this.state = 683;
				this.singleExpression(0);
				}
				break;

			case 2:
				_localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 685;
				this.match(JavaScriptParser.OpenBracket);
				this.state = 686;
				this.singleExpression(0);
				this.state = 687;
				this.match(JavaScriptParser.CloseBracket);
				this.state = 688;
				this.match(JavaScriptParser.Colon);
				this.state = 689;
				this.singleExpression(0);
				}
				break;

			case 3:
				_localctx = new FunctionPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 692;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 691;
					this.match(JavaScriptParser.Async);
					}
					break;
				}
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 694;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 697;
				this.propertyName();
				this.state = 698;
				this.match(JavaScriptParser.OpenParen);
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JavaScriptParser.Async - 103)) | (1 << (JavaScriptParser.NonStrictLet - 103)) | (1 << (JavaScriptParser.Identifier - 103)))) !== 0)) {
					{
					this.state = 699;
					this.formalParameterList();
					}
				}

				this.state = 702;
				this.match(JavaScriptParser.CloseParen);
				this.state = 703;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 704;
				this.functionBody();
				this.state = 705;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 4:
				_localctx = new PropertyGetterContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 707;
				this.getter();
				this.state = 708;
				this.match(JavaScriptParser.OpenParen);
				this.state = 709;
				this.match(JavaScriptParser.CloseParen);
				this.state = 710;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 711;
				this.functionBody();
				this.state = 712;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 5:
				_localctx = new PropertySetterContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 714;
				this.setter();
				this.state = 715;
				this.match(JavaScriptParser.OpenParen);
				this.state = 716;
				this.formalParameterArg();
				this.state = 717;
				this.match(JavaScriptParser.CloseParen);
				this.state = 718;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 719;
				this.functionBody();
				this.state = 720;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 6:
				_localctx = new PropertyShorthandContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Ellipsis) {
					{
					this.state = 722;
					this.match(JavaScriptParser.Ellipsis);
					}
				}

				this.state = 725;
				this.singleExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, JavaScriptParser.RULE_propertyName);
		try {
			this.state = 735;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 728;
				this.identifierName();
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 729;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 730;
				this.numericLiteral();
				}
				break;
			case JavaScriptParser.OpenBracket:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 731;
				this.match(JavaScriptParser.OpenBracket);
				this.state = 732;
				this.singleExpression(0);
				this.state = 733;
				this.match(JavaScriptParser.CloseBracket);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, JavaScriptParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this.match(JavaScriptParser.OpenParen);
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not) | (1 << JavaScriptParser.LessThan))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (JavaScriptParser.NullLiteral - 57)) | (1 << (JavaScriptParser.BooleanLiteral - 57)) | (1 << (JavaScriptParser.DecimalLiteral - 57)) | (1 << (JavaScriptParser.HexIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 57)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 57)) | (1 << (JavaScriptParser.Typeof - 57)) | (1 << (JavaScriptParser.New - 57)) | (1 << (JavaScriptParser.Void - 57)) | (1 << (JavaScriptParser.Function_ - 57)) | (1 << (JavaScriptParser.This - 57)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.NonStrictLet - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)) | (1 << (JavaScriptParser.StringLiteral - 91)) | (1 << (JavaScriptParser.BackTick - 91)))) !== 0) || _la === JavaScriptParser.RegularExpressionLiteral) {
				{
				this.state = 738;
				this.argument();
				this.state = 743;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 739;
						this.match(JavaScriptParser.Comma);
						this.state = 740;
						this.argument();
						}
						}
					}
					this.state = 745;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				}
				this.state = 747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 746;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
			}

			this.state = 751;
			this.match(JavaScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JavaScriptParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Ellipsis) {
				{
				this.state = 753;
				this.match(JavaScriptParser.Ellipsis);
				}
			}

			this.state = 758;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 756;
				this.singleExpression(0);
				}
				break;

			case 2:
				{
				this.state = 757;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JavaScriptParser.RULE_expressionSequence);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Ellipsis) {
				{
				this.state = 760;
				this.match(JavaScriptParser.Ellipsis);
				}
			}

			this.state = 763;
			this.singleExpression(0);
			this.state = 771;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 764;
					this.match(JavaScriptParser.Comma);
					this.state = 766;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaScriptParser.Ellipsis) {
						{
						this.state = 765;
						this.match(JavaScriptParser.Ellipsis);
						}
					}

					this.state = 768;
					this.singleExpression(0);
					}
					}
				}
				this.state = 773;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 114;
		this.enterRecursionRule(_localctx, 114, JavaScriptParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 775;
				this.anoymousFunction();
				}
				break;

			case 2:
				{
				_localctx = new ClassExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 776;
				this.match(JavaScriptParser.Class);
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JavaScriptParser.Async - 103)) | (1 << (JavaScriptParser.NonStrictLet - 103)) | (1 << (JavaScriptParser.Identifier - 103)))) !== 0)) {
					{
					this.state = 777;
					this.identifier();
					}
				}

				this.state = 780;
				this.classTail();
				}
				break;

			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 781;
				this.match(JavaScriptParser.New);
				this.state = 782;
				this.singleExpression(0);
				this.state = 783;
				this.arguments();
				}
				break;

			case 4:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 785;
				this.match(JavaScriptParser.New);
				this.state = 786;
				this.singleExpression(43);
				}
				break;

			case 5:
				{
				_localctx = new MetaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 787;
				this.match(JavaScriptParser.New);
				this.state = 788;
				this.match(JavaScriptParser.Dot);
				this.state = 789;
				this.identifier();
				}
				break;

			case 6:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 790;
				this.match(JavaScriptParser.Delete);
				this.state = 791;
				this.singleExpression(38);
				}
				break;

			case 7:
				{
				_localctx = new VoidExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 792;
				this.match(JavaScriptParser.Void);
				this.state = 793;
				this.singleExpression(37);
				}
				break;

			case 8:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 794;
				this.match(JavaScriptParser.Typeof);
				this.state = 795;
				this.singleExpression(36);
				}
				break;

			case 9:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 796;
				this.match(JavaScriptParser.PlusPlus);
				this.state = 797;
				this.singleExpression(35);
				}
				break;

			case 10:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 798;
				this.match(JavaScriptParser.MinusMinus);
				this.state = 799;
				this.singleExpression(34);
				}
				break;

			case 11:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 800;
				this.match(JavaScriptParser.Plus);
				this.state = 801;
				this.singleExpression(33);
				}
				break;

			case 12:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 802;
				this.match(JavaScriptParser.Minus);
				this.state = 803;
				this.singleExpression(32);
				}
				break;

			case 13:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 804;
				this.match(JavaScriptParser.BitNot);
				this.state = 805;
				this.singleExpression(31);
				}
				break;

			case 14:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 806;
				this.match(JavaScriptParser.Not);
				this.state = 807;
				this.singleExpression(30);
				}
				break;

			case 15:
				{
				_localctx = new AwaitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 808;
				this.match(JavaScriptParser.Await);
				this.state = 809;
				this.singleExpression(29);
				}
				break;

			case 16:
				{
				_localctx = new ImportExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 810;
				this.match(JavaScriptParser.Import);
				this.state = 811;
				this.match(JavaScriptParser.OpenParen);
				this.state = 812;
				this.singleExpression(0);
				this.state = 813;
				this.match(JavaScriptParser.CloseParen);
				}
				break;

			case 17:
				{
				_localctx = new YieldExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 815;
				this.yieldStatement();
				}
				break;

			case 18:
				{
				_localctx = new ThisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 816;
				this.match(JavaScriptParser.This);
				}
				break;

			case 19:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 817;
				this.identifier();
				}
				break;

			case 20:
				{
				_localctx = new SuperExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 818;
				this.match(JavaScriptParser.Super);
				}
				break;

			case 21:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 819;
				this.literal();
				}
				break;

			case 22:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 820;
				this.arrayLiteral();
				}
				break;

			case 23:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 821;
				this.objectLiteral();
				}
				break;

			case 24:
				{
				_localctx = new HtmlElementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 822;
				this.htmlElements();
				}
				break;

			case 25:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 823;
				this.match(JavaScriptParser.OpenParen);
				this.state = 824;
				this.expressionSequence();
				this.state = 825;
				this.match(JavaScriptParser.CloseParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 910;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 908;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 829;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 830;
						this.match(JavaScriptParser.Power);
						this.state = 831;
						this.singleExpression(28);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 832;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 833;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.Multiply) | (1 << JavaScriptParser.Divide) | (1 << JavaScriptParser.Modulus))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 834;
						this.singleExpression(28);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 835;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 836;
						_la = this._input.LA(1);
						if (!(_la === JavaScriptParser.Plus || _la === JavaScriptParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 837;
						this.singleExpression(27);
						}
						break;

					case 4:
						{
						_localctx = new CoalesceExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 838;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 839;
						this.match(JavaScriptParser.NullCoalesce);
						this.state = 840;
						this.singleExpression(26);
						}
						break;

					case 5:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 841;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 842;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RightShiftArithmetic) | (1 << JavaScriptParser.LeftShiftArithmetic) | (1 << JavaScriptParser.RightShiftLogical))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 843;
						this.singleExpression(25);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 844;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 845;
						_la = this._input.LA(1);
						if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (JavaScriptParser.LessThan - 31)) | (1 << (JavaScriptParser.MoreThan - 31)) | (1 << (JavaScriptParser.LessThanEquals - 31)) | (1 << (JavaScriptParser.GreaterThanEquals - 31)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 846;
						this.singleExpression(24);
						}
						break;

					case 7:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 847;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 848;
						this.match(JavaScriptParser.Instanceof);
						this.state = 849;
						this.singleExpression(23);
						}
						break;

					case 8:
						{
						_localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 850;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 851;
						this.match(JavaScriptParser.In);
						this.state = 852;
						this.singleExpression(22);
						}
						break;

					case 9:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 853;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 854;
						_la = this._input.LA(1);
						if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (JavaScriptParser.Equals_ - 35)) | (1 << (JavaScriptParser.NotEquals - 35)) | (1 << (JavaScriptParser.IdentityEquals - 35)) | (1 << (JavaScriptParser.IdentityNotEquals - 35)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 855;
						this.singleExpression(21);
						}
						break;

					case 10:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 856;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 857;
						this.match(JavaScriptParser.BitAnd);
						this.state = 858;
						this.singleExpression(20);
						}
						break;

					case 11:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 859;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 860;
						this.match(JavaScriptParser.BitXOr);
						this.state = 861;
						this.singleExpression(19);
						}
						break;

					case 12:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 862;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 863;
						this.match(JavaScriptParser.BitOr);
						this.state = 864;
						this.singleExpression(18);
						}
						break;

					case 13:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 865;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 866;
						this.match(JavaScriptParser.And);
						this.state = 867;
						this.singleExpression(17);
						}
						break;

					case 14:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 868;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 869;
						this.match(JavaScriptParser.Or);
						this.state = 870;
						this.singleExpression(16);
						}
						break;

					case 15:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 871;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 872;
						this.match(JavaScriptParser.QuestionMark);
						this.state = 873;
						this.singleExpression(0);
						this.state = 874;
						this.match(JavaScriptParser.Colon);
						this.state = 875;
						this.singleExpression(15);
						}
						break;

					case 16:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 877;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 878;
						this.match(JavaScriptParser.Assign);
						this.state = 879;
						this.singleExpression(13);
						}
						break;

					case 17:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 880;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 881;
						this.assignmentOperator();
						this.state = 882;
						this.singleExpression(12);
						}
						break;

					case 18:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 884;
						if (!(this.precpred(this._ctx, 46))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 46)");
						}
						this.state = 885;
						this.match(JavaScriptParser.OpenBracket);
						this.state = 886;
						this.expressionSequence();
						this.state = 887;
						this.match(JavaScriptParser.CloseBracket);
						}
						break;

					case 19:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 889;
						if (!(this.precpred(this._ctx, 45))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 45)");
						}
						this.state = 891;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JavaScriptParser.QuestionMark) {
							{
							this.state = 890;
							this.match(JavaScriptParser.QuestionMark);
							}
						}

						this.state = 893;
						this.match(JavaScriptParser.Dot);
						this.state = 895;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JavaScriptParser.Hashtag) {
							{
							this.state = 894;
							this.match(JavaScriptParser.Hashtag);
							}
						}

						this.state = 897;
						this.identifierName();
						}
						break;

					case 20:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 898;
						if (!(this.precpred(this._ctx, 42))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
						}
						this.state = 899;
						this.arguments();
						}
						break;

					case 21:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 900;
						if (!(this.precpred(this._ctx, 40))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
						}
						this.state = 901;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 902;
						this.match(JavaScriptParser.PlusPlus);
						}
						break;

					case 22:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 903;
						if (!(this.precpred(this._ctx, 39))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 39)");
						}
						this.state = 904;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 905;
						this.match(JavaScriptParser.MinusMinus);
						}
						break;

					case 23:
						{
						_localctx = new TemplateStringExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 906;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 907;
						this.templateStringLiteral();
						}
						break;
					}
					}
				}
				this.state = 912;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlElements(): HtmlElementsContext {
		let _localctx: HtmlElementsContext = new HtmlElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, JavaScriptParser.RULE_htmlElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 914;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 913;
					this.htmlElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 916;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlElement(): HtmlElementContext {
		let _localctx: HtmlElementContext = new HtmlElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, JavaScriptParser.RULE_htmlElement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 966;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 918;
				this.match(JavaScriptParser.LessThan);
				this.state = 919;
				this.htmlTagStartName();
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaScriptParser.Identifier || _la === JavaScriptParser.TagName) {
					{
					{
					this.state = 920;
					this.htmlAttribute();
					}
					}
					this.state = 925;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 926;
				this.match(JavaScriptParser.MoreThan);
				this.state = 927;
				this.htmlContent();
				this.state = 928;
				this.match(JavaScriptParser.LessThan);
				this.state = 929;
				this.match(JavaScriptParser.Divide);
				this.state = 930;
				this.htmlTagClosingName();
				this.state = 931;
				this.match(JavaScriptParser.MoreThan);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 933;
				this.match(JavaScriptParser.LessThan);
				this.state = 934;
				this.htmlTagName();
				this.state = 938;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 935;
						this.htmlAttribute();
						}
						}
					}
					this.state = 940;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
				}
				this.state = 941;
				this.htmlContent();
				this.state = 942;
				this.match(JavaScriptParser.Divide);
				this.state = 943;
				this.match(JavaScriptParser.MoreThan);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 945;
				this.match(JavaScriptParser.LessThan);
				this.state = 946;
				this.htmlTagName();
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaScriptParser.Identifier || _la === JavaScriptParser.TagName) {
					{
					{
					this.state = 947;
					this.htmlAttribute();
					}
					}
					this.state = 952;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 953;
				this.match(JavaScriptParser.Divide);
				this.state = 954;
				this.match(JavaScriptParser.MoreThan);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 956;
				this.match(JavaScriptParser.LessThan);
				this.state = 957;
				this.htmlTagName();
				this.state = 961;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaScriptParser.Identifier || _la === JavaScriptParser.TagName) {
					{
					{
					this.state = 958;
					this.htmlAttribute();
					}
					}
					this.state = 963;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 964;
				this.match(JavaScriptParser.MoreThan);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlContent(): HtmlContentContext {
		let _localctx: HtmlContentContext = new HtmlContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, JavaScriptParser.RULE_htmlContent);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 968;
				this.htmlChardata();
				}
				break;
			}
			this.state = 980;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 973;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case JavaScriptParser.LessThan:
						{
						this.state = 971;
						this.htmlElement();
						}
						break;
					case JavaScriptParser.OpenBrace:
						{
						this.state = 972;
						this.objectExpressionSequence();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 976;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
					case 1:
						{
						this.state = 975;
						this.htmlChardata();
						}
						break;
					}
					}
					}
				}
				this.state = 982;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlTagStartName(): HtmlTagStartNameContext {
		let _localctx: HtmlTagStartNameContext = new HtmlTagStartNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, JavaScriptParser.RULE_htmlTagStartName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			_localctx._htmlTagName = this.htmlTagName();
			this.pushHtmlTagName((_localctx._htmlTagName != null ? this._input.getTextFromRange(_localctx._htmlTagName._start, _localctx._htmlTagName._stop) : undefined));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlTagClosingName(): HtmlTagClosingNameContext {
		let _localctx: HtmlTagClosingNameContext = new HtmlTagClosingNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, JavaScriptParser.RULE_htmlTagClosingName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 986;
			_localctx._htmlTagName = this.htmlTagName();
			this.state = 987;
			if (!(this.popHtmlTagName((_localctx._htmlTagName != null ? this._input.getTextFromRange(_localctx._htmlTagName._start, _localctx._htmlTagName._stop) : undefined)))) {
				throw this.createFailedPredicateException("this.popHtmlTagName($htmlTagName.text)");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlTagName(): HtmlTagNameContext {
		let _localctx: HtmlTagNameContext = new HtmlTagNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JavaScriptParser.RULE_htmlTagName);
		try {
			this.state = 992;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.TagName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 989;
				this.match(JavaScriptParser.TagName);
				}
				break;
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 990;
				this.keyword();
				}
				break;
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 991;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlAttribute(): HtmlAttributeContext {
		let _localctx: HtmlAttributeContext = new HtmlAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, JavaScriptParser.RULE_htmlAttribute);
		try {
			this.state = 999;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 994;
				this.htmlAttributeName();
				this.state = 995;
				this.match(JavaScriptParser.Assign);
				this.state = 996;
				this.htmlAttributeValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 998;
				this.htmlAttributeName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlAttributeName(): HtmlAttributeNameContext {
		let _localctx: HtmlAttributeNameContext = new HtmlAttributeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, JavaScriptParser.RULE_htmlAttributeName);
		try {
			let _alt: number;
			this.state = 1010;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.TagName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1001;
				this.match(JavaScriptParser.TagName);
				}
				break;
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1002;
				this.match(JavaScriptParser.Identifier);
				this.state = 1007;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1003;
						this.match(JavaScriptParser.Minus);
						this.state = 1004;
						this.match(JavaScriptParser.Identifier);
						}
						}
					}
					this.state = 1009;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlChardata(): HtmlChardataContext {
		let _localctx: HtmlChardataContext = new HtmlChardataContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, JavaScriptParser.RULE_htmlChardata);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1013;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1012;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === JavaScriptParser.OpenBrace || _la === JavaScriptParser.LessThan)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1015;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlAttributeValue(): HtmlAttributeValueContext {
		let _localctx: HtmlAttributeValueContext = new HtmlAttributeValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, JavaScriptParser.RULE_htmlAttributeValue);
		try {
			this.state = 1020;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.AttributeValue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1017;
				this.match(JavaScriptParser.AttributeValue);
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1018;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case JavaScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1019;
				this.objectExpressionSequence();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignable(): AssignableContext {
		let _localctx: AssignableContext = new AssignableContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, JavaScriptParser.RULE_assignable);
		try {
			this.state = 1025;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Async:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1022;
				this.identifier();
				}
				break;
			case JavaScriptParser.OpenBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1023;
				this.arrayLiteral();
				}
				break;
			case JavaScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1024;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, JavaScriptParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1027;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not) | (1 << JavaScriptParser.Multiply) | (1 << JavaScriptParser.LessThan))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (JavaScriptParser.NullLiteral - 57)) | (1 << (JavaScriptParser.BooleanLiteral - 57)) | (1 << (JavaScriptParser.DecimalLiteral - 57)) | (1 << (JavaScriptParser.HexIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 57)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 57)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 57)) | (1 << (JavaScriptParser.Break - 57)) | (1 << (JavaScriptParser.Do - 57)) | (1 << (JavaScriptParser.Instanceof - 57)) | (1 << (JavaScriptParser.Typeof - 57)) | (1 << (JavaScriptParser.Case - 57)) | (1 << (JavaScriptParser.Else - 57)) | (1 << (JavaScriptParser.New - 57)) | (1 << (JavaScriptParser.Var - 57)) | (1 << (JavaScriptParser.Catch - 57)) | (1 << (JavaScriptParser.Finally - 57)) | (1 << (JavaScriptParser.Return - 57)) | (1 << (JavaScriptParser.Void - 57)) | (1 << (JavaScriptParser.Continue - 57)) | (1 << (JavaScriptParser.For - 57)) | (1 << (JavaScriptParser.Switch - 57)) | (1 << (JavaScriptParser.While - 57)) | (1 << (JavaScriptParser.Debugger - 57)) | (1 << (JavaScriptParser.Function_ - 57)) | (1 << (JavaScriptParser.This - 57)) | (1 << (JavaScriptParser.With - 57)) | (1 << (JavaScriptParser.Default - 57)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (JavaScriptParser.If - 89)) | (1 << (JavaScriptParser.Throw - 89)) | (1 << (JavaScriptParser.Delete - 89)) | (1 << (JavaScriptParser.In - 89)) | (1 << (JavaScriptParser.Try - 89)) | (1 << (JavaScriptParser.As - 89)) | (1 << (JavaScriptParser.From - 89)) | (1 << (JavaScriptParser.Class - 89)) | (1 << (JavaScriptParser.Enum - 89)) | (1 << (JavaScriptParser.Extends - 89)) | (1 << (JavaScriptParser.Super - 89)) | (1 << (JavaScriptParser.Const - 89)) | (1 << (JavaScriptParser.Export - 89)) | (1 << (JavaScriptParser.Import - 89)) | (1 << (JavaScriptParser.Async - 89)) | (1 << (JavaScriptParser.Await - 89)) | (1 << (JavaScriptParser.Implements - 89)) | (1 << (JavaScriptParser.StrictLet - 89)) | (1 << (JavaScriptParser.NonStrictLet - 89)) | (1 << (JavaScriptParser.Private - 89)) | (1 << (JavaScriptParser.Public - 89)) | (1 << (JavaScriptParser.Interface - 89)) | (1 << (JavaScriptParser.Package - 89)) | (1 << (JavaScriptParser.Protected - 89)) | (1 << (JavaScriptParser.Static - 89)) | (1 << (JavaScriptParser.Yield - 89)) | (1 << (JavaScriptParser.Identifier - 89)) | (1 << (JavaScriptParser.StringLiteral - 89)) | (1 << (JavaScriptParser.BackTick - 89)))) !== 0) || _la === JavaScriptParser.RegularExpressionLiteral) {
				{
				this.state = 1028;
				this.propertyAssignment();
				this.state = 1033;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1029;
						this.match(JavaScriptParser.Comma);
						this.state = 1030;
						this.propertyAssignment();
						}
						}
					}
					this.state = 1035;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
				}
				this.state = 1037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 1036;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
			}

			this.state = 1041;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectExpressionSequence(): ObjectExpressionSequenceContext {
		let _localctx: ObjectExpressionSequenceContext = new ObjectExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, JavaScriptParser.RULE_objectExpressionSequence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1043;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 1044;
			this.expressionSequence();
			this.state = 1045;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anoymousFunction(): AnoymousFunctionContext {
		let _localctx: AnoymousFunctionContext = new AnoymousFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, JavaScriptParser.RULE_anoymousFunction);
		let _la: number;
		try {
			this.state = 1071;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				_localctx = new FunctionDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1047;
				this.functionDeclaration();
				}
				break;

			case 2:
				_localctx = new AnoymousFunctionDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1049;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Async) {
					{
					this.state = 1048;
					this.match(JavaScriptParser.Async);
					}
				}

				this.state = 1051;
				this.match(JavaScriptParser.Function_);
				this.state = 1053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 1052;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 1055;
				this.match(JavaScriptParser.OpenParen);
				this.state = 1057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JavaScriptParser.Async - 103)) | (1 << (JavaScriptParser.NonStrictLet - 103)) | (1 << (JavaScriptParser.Identifier - 103)))) !== 0)) {
					{
					this.state = 1056;
					this.formalParameterList();
					}
				}

				this.state = 1059;
				this.match(JavaScriptParser.CloseParen);
				this.state = 1060;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 1061;
				this.functionBody();
				this.state = 1062;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 3:
				_localctx = new ArrowFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1065;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 1064;
					this.match(JavaScriptParser.Async);
					}
					break;
				}
				this.state = 1067;
				this.arrowFunctionParameters();
				this.state = 1068;
				this.match(JavaScriptParser.ARROW);
				this.state = 1069;
				this.arrowFunctionBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		let _localctx: ArrowFunctionParametersContext = new ArrowFunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, JavaScriptParser.RULE_arrowFunctionParameters);
		let _la: number;
		try {
			this.state = 1079;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Async:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1073;
				this.identifier();
				}
				break;
			case JavaScriptParser.OpenParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1074;
				this.match(JavaScriptParser.OpenParen);
				this.state = 1076;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JavaScriptParser.Async - 103)) | (1 << (JavaScriptParser.NonStrictLet - 103)) | (1 << (JavaScriptParser.Identifier - 103)))) !== 0)) {
					{
					this.state = 1075;
					this.formalParameterList();
					}
				}

				this.state = 1078;
				this.match(JavaScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		let _localctx: ArrowFunctionBodyContext = new ArrowFunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, JavaScriptParser.RULE_arrowFunctionBody);
		try {
			this.state = 1086;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1081;
				this.singleExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1082;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 1083;
				this.functionBody();
				this.state = 1084;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, JavaScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1088;
			_la = this._input.LA(1);
			if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (JavaScriptParser.MultiplyAssign - 44)) | (1 << (JavaScriptParser.DivideAssign - 44)) | (1 << (JavaScriptParser.ModulusAssign - 44)) | (1 << (JavaScriptParser.PlusAssign - 44)) | (1 << (JavaScriptParser.MinusAssign - 44)) | (1 << (JavaScriptParser.LeftShiftArithmeticAssign - 44)) | (1 << (JavaScriptParser.RightShiftArithmeticAssign - 44)) | (1 << (JavaScriptParser.RightShiftLogicalAssign - 44)) | (1 << (JavaScriptParser.BitAndAssign - 44)) | (1 << (JavaScriptParser.BitXorAssign - 44)) | (1 << (JavaScriptParser.BitOrAssign - 44)) | (1 << (JavaScriptParser.PowerAssign - 44)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, JavaScriptParser.RULE_literal);
		try {
			this.state = 1097;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1090;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case JavaScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1091;
				this.match(JavaScriptParser.BooleanLiteral);
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1092;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case JavaScriptParser.BackTick:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1093;
				this.templateStringLiteral();
				}
				break;
			case JavaScriptParser.RegularExpressionLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1094;
				this.match(JavaScriptParser.RegularExpressionLiteral);
				}
				break;
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1095;
				this.numericLiteral();
				}
				break;
			case JavaScriptParser.BigHexIntegerLiteral:
			case JavaScriptParser.BigOctalIntegerLiteral:
			case JavaScriptParser.BigBinaryIntegerLiteral:
			case JavaScriptParser.BigDecimalIntegerLiteral:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1096;
				this.bigintLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateStringLiteral(): TemplateStringLiteralContext {
		let _localctx: TemplateStringLiteralContext = new TemplateStringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, JavaScriptParser.RULE_templateStringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1099;
			this.match(JavaScriptParser.BackTick);
			this.state = 1103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaScriptParser.TemplateStringStartExpression || _la === JavaScriptParser.TemplateStringAtom) {
				{
				{
				this.state = 1100;
				this.templateStringAtom();
				}
				}
				this.state = 1105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1106;
			this.match(JavaScriptParser.BackTick);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateStringAtom(): TemplateStringAtomContext {
		let _localctx: TemplateStringAtomContext = new TemplateStringAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, JavaScriptParser.RULE_templateStringAtom);
		try {
			this.state = 1113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.TemplateStringAtom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1108;
				this.match(JavaScriptParser.TemplateStringAtom);
				}
				break;
			case JavaScriptParser.TemplateStringStartExpression:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1109;
				this.match(JavaScriptParser.TemplateStringStartExpression);
				this.state = 1110;
				this.singleExpression(0);
				this.state = 1111;
				this.match(JavaScriptParser.TemplateCloseBrace);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, JavaScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1115;
			_la = this._input.LA(1);
			if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bigintLiteral(): BigintLiteralContext {
		let _localctx: BigintLiteralContext = new BigintLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, JavaScriptParser.RULE_bigintLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1117;
			_la = this._input.LA(1);
			if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JavaScriptParser.BigHexIntegerLiteral - 64)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 64)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 64)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 64)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, JavaScriptParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1119;
			this.identifier();
			this.state = 1120;
			if (!(this.p("get"))) {
				throw this.createFailedPredicateException("this.p(\"get\")");
			}
			this.state = 1121;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, JavaScriptParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1123;
			this.identifier();
			this.state = 1124;
			if (!(this.p("set"))) {
				throw this.createFailedPredicateException("this.p(\"set\")");
			}
			this.state = 1125;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, JavaScriptParser.RULE_identifierName);
		try {
			this.state = 1129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1127;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1128;
				this.reservedWord();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, JavaScriptParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1131;
			_la = this._input.LA(1);
			if (!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JavaScriptParser.Async - 103)) | (1 << (JavaScriptParser.NonStrictLet - 103)) | (1 << (JavaScriptParser.Identifier - 103)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, JavaScriptParser.RULE_reservedWord);
		try {
			this.state = 1136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1133;
				this.keyword();
				}
				break;
			case JavaScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1134;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case JavaScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1135;
				this.match(JavaScriptParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, JavaScriptParser.RULE_keyword);
		try {
			this.state = 1184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Break:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1138;
				this.match(JavaScriptParser.Break);
				}
				break;
			case JavaScriptParser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1139;
				this.match(JavaScriptParser.Do);
				}
				break;
			case JavaScriptParser.Instanceof:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1140;
				this.match(JavaScriptParser.Instanceof);
				}
				break;
			case JavaScriptParser.Typeof:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1141;
				this.match(JavaScriptParser.Typeof);
				}
				break;
			case JavaScriptParser.Case:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1142;
				this.match(JavaScriptParser.Case);
				}
				break;
			case JavaScriptParser.Else:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1143;
				this.match(JavaScriptParser.Else);
				}
				break;
			case JavaScriptParser.New:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1144;
				this.match(JavaScriptParser.New);
				}
				break;
			case JavaScriptParser.Var:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1145;
				this.match(JavaScriptParser.Var);
				}
				break;
			case JavaScriptParser.Catch:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1146;
				this.match(JavaScriptParser.Catch);
				}
				break;
			case JavaScriptParser.Finally:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1147;
				this.match(JavaScriptParser.Finally);
				}
				break;
			case JavaScriptParser.Return:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1148;
				this.match(JavaScriptParser.Return);
				}
				break;
			case JavaScriptParser.Void:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1149;
				this.match(JavaScriptParser.Void);
				}
				break;
			case JavaScriptParser.Continue:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1150;
				this.match(JavaScriptParser.Continue);
				}
				break;
			case JavaScriptParser.For:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1151;
				this.match(JavaScriptParser.For);
				}
				break;
			case JavaScriptParser.Switch:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1152;
				this.match(JavaScriptParser.Switch);
				}
				break;
			case JavaScriptParser.While:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1153;
				this.match(JavaScriptParser.While);
				}
				break;
			case JavaScriptParser.Debugger:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1154;
				this.match(JavaScriptParser.Debugger);
				}
				break;
			case JavaScriptParser.Function_:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1155;
				this.match(JavaScriptParser.Function_);
				}
				break;
			case JavaScriptParser.This:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1156;
				this.match(JavaScriptParser.This);
				}
				break;
			case JavaScriptParser.With:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1157;
				this.match(JavaScriptParser.With);
				}
				break;
			case JavaScriptParser.Default:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1158;
				this.match(JavaScriptParser.Default);
				}
				break;
			case JavaScriptParser.If:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1159;
				this.match(JavaScriptParser.If);
				}
				break;
			case JavaScriptParser.Throw:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1160;
				this.match(JavaScriptParser.Throw);
				}
				break;
			case JavaScriptParser.Delete:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1161;
				this.match(JavaScriptParser.Delete);
				}
				break;
			case JavaScriptParser.In:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1162;
				this.match(JavaScriptParser.In);
				}
				break;
			case JavaScriptParser.Try:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1163;
				this.match(JavaScriptParser.Try);
				}
				break;
			case JavaScriptParser.Class:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1164;
				this.match(JavaScriptParser.Class);
				}
				break;
			case JavaScriptParser.Enum:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1165;
				this.match(JavaScriptParser.Enum);
				}
				break;
			case JavaScriptParser.Extends:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1166;
				this.match(JavaScriptParser.Extends);
				}
				break;
			case JavaScriptParser.Super:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1167;
				this.match(JavaScriptParser.Super);
				}
				break;
			case JavaScriptParser.Const:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1168;
				this.match(JavaScriptParser.Const);
				}
				break;
			case JavaScriptParser.Export:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1169;
				this.match(JavaScriptParser.Export);
				}
				break;
			case JavaScriptParser.Import:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1170;
				this.match(JavaScriptParser.Import);
				}
				break;
			case JavaScriptParser.Implements:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1171;
				this.match(JavaScriptParser.Implements);
				}
				break;
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1172;
				this.let_();
				}
				break;
			case JavaScriptParser.Private:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1173;
				this.match(JavaScriptParser.Private);
				}
				break;
			case JavaScriptParser.Public:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1174;
				this.match(JavaScriptParser.Public);
				}
				break;
			case JavaScriptParser.Interface:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 1175;
				this.match(JavaScriptParser.Interface);
				}
				break;
			case JavaScriptParser.Package:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 1176;
				this.match(JavaScriptParser.Package);
				}
				break;
			case JavaScriptParser.Protected:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 1177;
				this.match(JavaScriptParser.Protected);
				}
				break;
			case JavaScriptParser.Static:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 1178;
				this.match(JavaScriptParser.Static);
				}
				break;
			case JavaScriptParser.Yield:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 1179;
				this.match(JavaScriptParser.Yield);
				}
				break;
			case JavaScriptParser.Async:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 1180;
				this.match(JavaScriptParser.Async);
				}
				break;
			case JavaScriptParser.Await:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 1181;
				this.match(JavaScriptParser.Await);
				}
				break;
			case JavaScriptParser.From:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 1182;
				this.match(JavaScriptParser.From);
				}
				break;
			case JavaScriptParser.As:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 1183;
				this.match(JavaScriptParser.As);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public let_(): Let_Context {
		let _localctx: Let_Context = new Let_Context(this._ctx, this.state);
		this.enterRule(_localctx, 172, JavaScriptParser.RULE_let_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1186;
			_la = this._input.LA(1);
			if (!(_la === JavaScriptParser.StrictLet || _la === JavaScriptParser.NonStrictLet)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, JavaScriptParser.RULE_eos);
		try {
			this.state = 1192;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1188;
				this.match(JavaScriptParser.SemiColon);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1189;
				this.match(JavaScriptParser.EOF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1190;
				if (!(this.lineTerminatorAhead())) {
					throw this.createFailedPredicateException("this.lineTerminatorAhead()");
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1191;
				if (!(this.closeBrace())) {
					throw this.createFailedPredicateException("this.closeBrace()");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 19:
			return this.expressionStatement_sempred(_localctx as ExpressionStatementContext, predIndex);

		case 21:
			return this.iterationStatement_sempred(_localctx as IterationStatementContext, predIndex);

		case 23:
			return this.continueStatement_sempred(_localctx as ContinueStatementContext, predIndex);

		case 24:
			return this.breakStatement_sempred(_localctx as BreakStatementContext, predIndex);

		case 25:
			return this.returnStatement_sempred(_localctx as ReturnStatementContext, predIndex);

		case 26:
			return this.yieldStatement_sempred(_localctx as YieldStatementContext, predIndex);

		case 34:
			return this.throwStatement_sempred(_localctx as ThrowStatementContext, predIndex);

		case 42:
			return this.classElement_sempred(_localctx as ClassElementContext, predIndex);

		case 57:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);

		case 62:
			return this.htmlTagClosingName_sempred(_localctx as HtmlTagClosingNameContext, predIndex);

		case 80:
			return this.getter_sempred(_localctx as GetterContext, predIndex);

		case 81:
			return this.setter_sempred(_localctx as SetterContext, predIndex);

		case 87:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private expressionStatement_sempred(_localctx: ExpressionStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.notOpenBraceAndNotFunction();
		}
		return true;
	}
	private iterationStatement_sempred(_localctx: IterationStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.p("of");
		}
		return true;
	}
	private continueStatement_sempred(_localctx: ContinueStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.notLineTerminator();
		}
		return true;
	}
	private breakStatement_sempred(_localctx: BreakStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.notLineTerminator();
		}
		return true;
	}
	private returnStatement_sempred(_localctx: ReturnStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.notLineTerminator();
		}
		return true;
	}
	private yieldStatement_sempred(_localctx: YieldStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.notLineTerminator();
		}
		return true;
	}
	private throwStatement_sempred(_localctx: ThrowStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.notLineTerminator();
		}
		return true;
	}
	private classElement_sempred(_localctx: ClassElementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.n("static");
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 28);

		case 9:
			return this.precpred(this._ctx, 27);

		case 10:
			return this.precpred(this._ctx, 26);

		case 11:
			return this.precpred(this._ctx, 25);

		case 12:
			return this.precpred(this._ctx, 24);

		case 13:
			return this.precpred(this._ctx, 23);

		case 14:
			return this.precpred(this._ctx, 22);

		case 15:
			return this.precpred(this._ctx, 21);

		case 16:
			return this.precpred(this._ctx, 20);

		case 17:
			return this.precpred(this._ctx, 19);

		case 18:
			return this.precpred(this._ctx, 18);

		case 19:
			return this.precpred(this._ctx, 17);

		case 20:
			return this.precpred(this._ctx, 16);

		case 21:
			return this.precpred(this._ctx, 15);

		case 22:
			return this.precpred(this._ctx, 14);

		case 23:
			return this.precpred(this._ctx, 13);

		case 24:
			return this.precpred(this._ctx, 12);

		case 25:
			return this.precpred(this._ctx, 46);

		case 26:
			return this.precpred(this._ctx, 45);

		case 27:
			return this.precpred(this._ctx, 42);

		case 28:
			return this.precpred(this._ctx, 40);

		case 29:
			return this.notLineTerminator();

		case 30:
			return this.precpred(this._ctx, 39);

		case 31:
			return this.notLineTerminator();

		case 32:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}
	private htmlTagClosingName_sempred(_localctx: HtmlTagClosingNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return this.popHtmlTagName((_localctx._htmlTagName != null ? this._input.getTextFromRange(_localctx._htmlTagName._start, _localctx._htmlTagName._stop) : undefined));
		}
		return true;
	}
	private getter_sempred(_localctx: GetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return this.p("get");
		}
		return true;
	}
	private setter_sempred(_localctx: SetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.p("set");
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.lineTerminatorAhead();

		case 37:
			return this.closeBrace();
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x8C\u04AD\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x03\x02\x05\x02\xB4\n\x02\x03\x02\x05\x02\xB7\n\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xD1\n\x04\x03\x05\x03" +
		"\x05\x05\x05\xD5\n\x05\x03\x05\x03\x05\x03\x06\x06\x06\xDA\n\x06\r\x06" +
		"\x0E\x06\xDB\x03\x07\x03\x07\x03\x07\x03\b\x05\b\xE2\n\b\x03\b\x03\b\x05" +
		"\b\xE6\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xED\n\b\x03\t\x03\t\x03" +
		"\t\x03\t\x07\t\xF3\n\t\f\t\x0E\t\xF6\v\t\x03\t\x03\t\x05\t\xFA\n\t\x05" +
		"\t\xFC\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x05\v\u0105\n\v\x03" +
		"\v\x03\v\x05\v\u0109\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\u0111" +
		"\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0116\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u011F\n\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0127\n\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u012B\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0130\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0139\n\x12\f\x12\x0E" +
		"\x12\u013C\v\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0141\n\x13\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x05\x16\u0150\n\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0164\n\x17\x03\x17\x03" +
		"\x17\x05\x17\u0168\n\x17\x03\x17\x03\x17\x05\x17\u016C\n\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0174\n\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u017D\n\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u0182\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x05\x17\u018A\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u018F\n\x18" +
		"\x03\x19\x03\x19\x03\x19\x05\x19\u0194\n\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u019B\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u01A2\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u01AB\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01B0\n\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u01C2\n\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u01C6\n\x1F\x05\x1F\u01C8\n\x1F\x03\x1F\x03\x1F" +
		"\x03 \x06 \u01CD\n \r \x0E \u01CE\x03!\x03!\x03!\x03!\x05!\u01D5\n!\x03" +
		"\"\x03\"\x03\"\x05\"\u01DA\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03" +
		"$\x03$\x03%\x03%\x03%\x03%\x05%\u01E9\n%\x03%\x05%\u01EC\n%\x03&\x03&" +
		"\x03&\x05&\u01F1\n&\x03&\x05&\u01F4\n&\x03&\x03&\x03\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x03)\x05)\u01FF\n)\x03)\x03)\x05)\u0203\n)\x03)\x03)\x03)" +
		"\x05)\u0208\n)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+" +
		"\x05+\u0215\n+\x03+\x03+\x07+\u0219\n+\f+\x0E+\u021C\v+\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x07,\u0224\n,\f,\x0E,\u0227\v,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x05,\u022F\n,\x03,\x03,\x05,\u0233\n,\x03,\x03,\x03,\x03,\x05," +
		"\u0239\n,\x03-\x05-\u023C\n-\x03-\x05-\u023F\n-\x03-\x03-\x03-\x05-\u0244" +
		"\n-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u024C\n-\x03-\x05-\u024F\n-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0259\n-\x03-\x05-\u025C\n-" +
		"\x03-\x03-\x03-\x05-\u0261\n-\x03-\x03-\x03-\x03-\x03-\x05-\u0268\n-\x03" +
		".\x03.\x03.\x07.\u026D\n.\f.\x0E.\u0270\v.\x03.\x03.\x05.\u0274\n.\x03" +
		".\x05.\u0277\n.\x03/\x03/\x03/\x05/\u027C\n/\x030\x030\x030\x031\x051" +
		"\u0282\n1\x032\x062\u0285\n2\r2\x0E2\u0286\x033\x033\x033\x033\x034\x07" +
		"4\u028E\n4\f4\x0E4\u0291\v4\x034\x054\u0294\n4\x034\x064\u0297\n4\r4\x0E" +
		"4\u0298\x034\x074\u029C\n4\f4\x0E4\u029F\v4\x034\x074\u02A2\n4\f4\x0E" +
		"4\u02A5\v4\x035\x055\u02A8\n5\x035\x035\x036\x036\x036\x036\x036\x036" +
		"\x036\x036\x036\x036\x036\x056\u02B7\n6\x036\x056\u02BA\n6\x036\x036\x03" +
		"6\x056\u02BF\n6\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x03" +
		"6\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x056\u02D6\n6\x03" +
		"6\x056\u02D9\n6\x037\x037\x037\x037\x037\x037\x037\x057\u02E2\n7\x038" +
		"\x038\x038\x038\x078\u02E8\n8\f8\x0E8\u02EB\v8\x038\x058\u02EE\n8\x05" +
		"8\u02F0\n8\x038\x038\x039\x059\u02F5\n9\x039\x039\x059\u02F9\n9\x03:\x05" +
		":\u02FC\n:\x03:\x03:\x03:\x05:\u0301\n:\x03:\x07:\u0304\n:\f:\x0E:\u0307" +
		"\v:\x03;\x03;\x03;\x03;\x05;\u030D\n;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u033E" +
		"\n;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u037E\n;\x03;\x03;\x05;\u0382\n;" +
		"\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u038F\n;" +
		"\f;\x0E;\u0392\v;\x03<\x06<\u0395\n<\r<\x0E<\u0396\x03=\x03=\x03=\x07" +
		"=\u039C\n=\f=\x0E=\u039F\v=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x07=\u03AB\n=\f=\x0E=\u03AE\v=\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x07=\u03B7\n=\f=\x0E=\u03BA\v=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u03C2" +
		"\n=\f=\x0E=\u03C5\v=\x03=\x03=\x05=\u03C9\n=\x03>\x05>\u03CC\n>\x03>\x03" +
		">\x05>\u03D0\n>\x03>\x05>\u03D3\n>\x07>\u03D5\n>\f>\x0E>\u03D8\v>\x03" +
		"?\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03A\x05A\u03E3\nA\x03B\x03B\x03" +
		"B\x03B\x03B\x05B\u03EA\nB\x03C\x03C\x03C\x03C\x07C\u03F0\nC\fC\x0EC\u03F3" +
		"\vC\x05C\u03F5\nC\x03D\x06D\u03F8\nD\rD\x0ED\u03F9\x03E\x03E\x03E\x05" +
		"E\u03FF\nE\x03F\x03F\x03F\x05F\u0404\nF\x03G\x03G\x03G\x03G\x07G\u040A" +
		"\nG\fG\x0EG\u040D\vG\x03G\x05G\u0410\nG\x05G\u0412\nG\x03G\x03G\x03H\x03" +
		"H\x03H\x03H\x03I\x03I\x05I\u041C\nI\x03I\x03I\x05I\u0420\nI\x03I\x03I" +
		"\x05I\u0424\nI\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u042C\nI\x03I\x03I\x03" +
		"I\x03I\x05I\u0432\nI\x03J\x03J\x03J\x05J\u0437\nJ\x03J\x05J\u043A\nJ\x03" +
		"K\x03K\x03K\x03K\x03K\x05K\u0441\nK\x03L\x03L\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x05M\u044C\nM\x03N\x03N\x07N\u0450\nN\fN\x0EN\u0453\vN\x03" +
		"N\x03N\x03O\x03O\x03O\x03O\x03O\x05O\u045C\nO\x03P\x03P\x03Q\x03Q\x03" +
		"R\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x03T\x03T\x05T\u046C\nT\x03U\x03" +
		"U\x03V\x03V\x03V\x05V\u0473\nV\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u04A3\nW\x03" +
		"X\x03X\x03Y\x03Y\x03Y\x03Y\x05Y\u04AB\nY\x03Y\x02\x02\x03tZ\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\x02\r\x03\x02\x18" +
		"\x1A\x03\x02\x14\x15\x03\x02\x1E \x03\x02!$\x03\x02%(\x04\x02\b\b!!\x03" +
		"\x02.9\x03\x02=A\x03\x02BE\x05\x02iimmuu\x03\x02lm\x02\u055E\x02\xB3\x03" +
		"\x02\x02\x02\x04\xBA\x03\x02\x02\x02\x06\xD0\x03\x02\x02\x02\b\xD2\x03" +
		"\x02\x02\x02\n\xD9\x03\x02\x02\x02\f\xDD\x03\x02\x02\x02\x0E\xEC\x03\x02" +
		"\x02\x02\x10\xEE\x03\x02\x02\x02\x12\xFF\x03\x02\x02\x02\x14\u0104\x03" +
		"\x02\x02\x02\x16\u010A\x03\x02\x02\x02\x18\u010D\x03\x02\x02\x02\x1A\u011E" +
		"\x03\x02\x02\x02\x1C\u012A\x03\x02\x02\x02\x1E\u012F\x03\x02\x02\x02 " +
		"\u0131\x03\x02\x02\x02\"\u0134\x03\x02\x02\x02$\u013D\x03\x02\x02\x02" +
		"&\u0142\x03\x02\x02\x02(\u0144\x03\x02\x02\x02*\u0148\x03\x02\x02\x02" +
		",\u0189\x03\x02\x02\x02.\u018E\x03\x02\x02\x020\u0190\x03\x02\x02\x02" +
		"2\u0197\x03\x02\x02\x024\u01AA\x03\x02\x02\x026\u01AC\x03\x02\x02\x02" +
		"8\u01B3\x03\x02\x02\x02:\u01B9\x03\x02\x02\x02<\u01BF\x03\x02\x02\x02" +
		">\u01CC\x03\x02\x02\x02@\u01D0\x03\x02\x02\x02B\u01D6\x03\x02\x02\x02" +
		"D\u01DB\x03\x02\x02\x02F\u01DF\x03\x02\x02\x02H\u01E4\x03\x02\x02\x02" +
		"J\u01ED\x03\x02\x02\x02L\u01F7\x03\x02\x02\x02N\u01FA\x03\x02\x02\x02" +
		"P\u01FE\x03\x02\x02\x02R\u020E\x03\x02\x02\x02T\u0214\x03\x02\x02\x02" +
		"V\u0238\x03\x02\x02\x02X\u0267\x03\x02\x02\x02Z\u0276\x03\x02\x02\x02" +
		"\\\u0278\x03\x02\x02\x02^\u027D\x03\x02\x02\x02`\u0281\x03\x02\x02\x02" +
		"b\u0284\x03\x02\x02\x02d\u0288\x03\x02\x02\x02f\u028F\x03\x02\x02\x02" +
		"h\u02A7\x03\x02\x02\x02j\u02D8\x03\x02\x02\x02l\u02E1\x03\x02\x02\x02" +
		"n\u02E3\x03\x02\x02\x02p\u02F4\x03\x02\x02\x02r\u02FB\x03\x02\x02\x02" +
		"t\u033D\x03\x02\x02\x02v\u0394\x03\x02\x02\x02x\u03C8\x03\x02\x02\x02" +
		"z\u03CB\x03\x02\x02\x02|\u03D9\x03\x02\x02\x02~\u03DC\x03\x02\x02\x02" +
		"\x80\u03E2\x03\x02\x02\x02\x82\u03E9\x03\x02\x02\x02\x84\u03F4\x03\x02" +
		"\x02\x02\x86\u03F7\x03\x02\x02\x02\x88\u03FE\x03\x02\x02\x02\x8A\u0403" +
		"\x03\x02\x02\x02\x8C\u0405\x03\x02\x02\x02\x8E\u0415\x03\x02\x02\x02\x90" +
		"\u0431\x03\x02\x02\x02\x92\u0439\x03\x02\x02\x02\x94\u0440\x03\x02\x02" +
		"\x02\x96\u0442\x03\x02\x02\x02\x98\u044B\x03\x02\x02\x02\x9A\u044D\x03" +
		"\x02\x02\x02\x9C\u045B\x03\x02\x02\x02\x9E\u045D\x03\x02\x02\x02\xA0\u045F" +
		"\x03\x02\x02\x02\xA2\u0461\x03\x02\x02\x02\xA4\u0465\x03\x02\x02\x02\xA6" +
		"\u046B\x03\x02\x02\x02\xA8\u046D\x03\x02\x02\x02\xAA\u0472\x03\x02\x02" +
		"\x02\xAC\u04A2\x03\x02\x02\x02\xAE\u04A4\x03\x02\x02\x02\xB0\u04AA\x03" +
		"\x02\x02\x02\xB2\xB4\x07\x03\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03" +
		"\x02\x02\x02\xB4\xB6\x03\x02\x02\x02\xB5\xB7\x05b2\x02\xB6\xB5\x03\x02" +
		"\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x07\x02" +
		"\x02\x03\xB9\x03\x03\x02\x02\x02\xBA\xBB\x05\x06\x04\x02\xBB\x05\x03\x02" +
		"\x02\x02\xBC\xD1\x05\b\x05\x02\xBD\xD1\x05 \x11\x02\xBE\xD1\x05\f\x07" +
		"\x02\xBF\xD1\x05\x1A\x0E\x02\xC0\xD1\x05&\x14\x02\xC1\xD1\x05R*\x02\xC2" +
		"\xD1\x05(\x15\x02\xC3\xD1\x05*\x16\x02\xC4\xD1\x05,\x17\x02\xC5\xD1\x05" +
		"0\x19\x02\xC6\xD1\x052\x1A\x02\xC7\xD1\x054\x1B\x02\xC8\xD1\x056\x1C\x02" +
		"\xC9\xD1\x058\x1D\x02\xCA\xD1\x05D#\x02\xCB\xD1\x05:\x1E\x02\xCC\xD1\x05" +
		"F$\x02\xCD\xD1\x05H%\x02\xCE\xD1\x05N(\x02\xCF\xD1\x05P)\x02\xD0\xBC\x03" +
		"\x02\x02\x02\xD0\xBD\x03\x02\x02\x02\xD0\xBE\x03\x02\x02\x02\xD0\xBF\x03" +
		"\x02\x02\x02\xD0\xC0\x03\x02\x02\x02\xD0\xC1\x03\x02\x02\x02\xD0\xC2\x03" +
		"\x02\x02\x02\xD0\xC3\x03\x02\x02\x02\xD0\xC4\x03\x02\x02\x02\xD0\xC5\x03" +
		"\x02\x02\x02\xD0\xC6\x03\x02\x02\x02\xD0\xC7\x03\x02\x02\x02\xD0\xC8\x03" +
		"\x02\x02\x02\xD0\xC9\x03\x02\x02\x02\xD0\xCA\x03\x02\x02\x02\xD0\xCB\x03" +
		"\x02\x02\x02\xD0\xCC\x03\x02\x02\x02\xD0\xCD\x03\x02\x02\x02\xD0\xCE\x03" +
		"\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\x07\x03\x02\x02\x02\xD2\xD4\x07" +
		"\b\x02\x02\xD3\xD5\x05\n\x06\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02" +
		"\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x07\n\x02\x02\xD7\t\x03\x02\x02" +
		"\x02\xD8\xDA\x05\x06\x04\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02" +
		"\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\v\x03\x02\x02" +
		"\x02\xDD\xDE\x07h\x02\x02\xDE\xDF\x05\x0E\b\x02\xDF\r\x03\x02\x02\x02" +
		"\xE0\xE2\x05\x12\n\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02" +
		"\xE2\xE5\x03\x02\x02\x02\xE3\xE6\x05\x14\v\x02\xE4\xE6\x05\x10\t\x02\xE5" +
		"\xE3\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7" +
		"\xE8\x05\x16\f\x02\xE8\xE9\x05\xB0Y\x02\xE9\xED\x03\x02\x02\x02\xEA\xEB" +
		"\x07v\x02\x02\xEB\xED\x05\xB0Y\x02\xEC\xE1\x03\x02\x02\x02\xEC\xEA\x03" +
		"\x02\x02\x02\xED\x0F\x03\x02\x02\x02\xEE\xF4\x07\b\x02\x02\xEF\xF0\x05" +
		"\x18\r\x02\xF0\xF1\x07\f\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xEF\x03\x02" +
		"\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02" +
		"\x02\x02\xF5\xFB\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF9\x05\x18" +
		"\r\x02\xF8\xFA\x07\f\x02\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02" +
		"\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF7\x03\x02\x02\x02\xFB\xFC\x03\x02\x02" +
		"\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x07\n\x02\x02\xFE\x11\x03\x02\x02" +
		"\x02\xFF\u0100\x05\x18\r\x02\u0100\u0101\x07\f\x02\x02\u0101\x13\x03\x02" +
		"\x02\x02\u0102\u0105\x07\x18\x02\x02\u0103\u0105\x05\xA6T\x02\u0104\u0102" +
		"\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02" +
		"\u0106\u0107\x07`\x02\x02\u0107\u0109\x05\xA6T\x02\u0108\u0106\x03\x02" +
		"\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\x15\x03\x02\x02\x02\u010A\u010B" +
		"\x07a\x02\x02\u010B\u010C\x07v\x02\x02\u010C\x17\x03\x02\x02\x02\u010D" +
		"\u0110\x05\xA6T\x02\u010E\u010F\x07`\x02\x02\u010F\u0111\x05\xA6T\x02" +
		"\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\x19\x03" +
		"\x02\x02\x02\u0112\u0115\x07g\x02\x02\u0113\u0116\x05\x1C\x0F\x02\u0114" +
		"\u0116\x05\x1E\x10\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0114\x03\x02" +
		"\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x05\xB0Y\x02\u0118\u011F" +
		"\x03\x02\x02\x02\u0119\u011A\x07g\x02\x02\u011A\u011B\x07Z\x02\x02\u011B" +
		"\u011C\x05t;\x02\u011C\u011D\x05\xB0Y\x02\u011D\u011F\x03\x02\x02\x02" +
		"\u011E\u0112\x03\x02\x02\x02\u011E\u0119\x03\x02\x02\x02\u011F\x1B\x03" +
		"\x02\x02\x02\u0120\u0121\x05\x14\v\x02\u0121\u0122\x05\x16\f\x02\u0122" +
		"\u0123\x05\xB0Y\x02\u0123\u012B\x03\x02\x02\x02\u0124\u0126\x05\x10\t" +
		"\x02\u0125\u0127\x05\x16\f\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127" +
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x05\xB0Y\x02" +
		"\u0129\u012B\x03\x02\x02\x02\u012A\u0120\x03\x02\x02\x02\u012A\u0124\x03" +
		"\x02\x02\x02\u012B\x1D\x03\x02\x02\x02\u012C\u0130\x05 \x11\x02\u012D" +
		"\u0130\x05R*\x02\u012E\u0130\x05P)\x02\u012F\u012C\x03\x02\x02\x02\u012F" +
		"\u012D\x03\x02\x02\x02\u012F\u012E\x03\x02\x02\x02\u0130\x1F\x03\x02\x02" +
		"\x02\u0131\u0132\x05\"\x12\x02\u0132\u0133\x05\xB0Y\x02\u0133!\x03\x02" +
		"\x02\x02\u0134\u0135\x05.\x18\x02\u0135\u013A\x05$\x13\x02\u0136\u0137" +
		"\x07\f\x02\x02\u0137\u0139\x05$\x13\x02\u0138\u0136\x03\x02\x02\x02\u0139" +
		"\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02" +
		"\x02\x02\u013B#\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u0140" +
		"\x05\x8AF\x02\u013E\u013F\x07\r\x02\x02\u013F\u0141\x05t;\x02\u0140\u013E" +
		"\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141%\x03\x02\x02\x02\u0142" +
		"\u0143\x07\v\x02\x02\u0143\'\x03\x02\x02\x02\u0144\u0145\x06\x15\x02\x02" +
		"\u0145\u0146\x05r:\x02\u0146\u0147\x05\xB0Y\x02\u0147)\x03\x02\x02\x02" +
		"\u0148\u0149\x07[\x02\x02\u0149\u014A\x07\x06\x02\x02\u014A\u014B\x05" +
		"r:\x02\u014B\u014C\x07\x07\x02\x02\u014C\u014F\x05\x06\x04\x02\u014D\u014E" +
		"\x07K\x02\x02\u014E\u0150\x05\x06\x04\x02\u014F\u014D\x03\x02\x02\x02" +
		"\u014F\u0150\x03\x02\x02\x02\u0150+\x03\x02\x02\x02\u0151\u0152\x07G\x02" +
		"\x02\u0152\u0153\x05\x06\x04\x02\u0153\u0154\x07U\x02\x02\u0154\u0155" +
		"\x07\x06\x02\x02\u0155\u0156\x05r:\x02\u0156\u0157\x07\x07\x02\x02\u0157" +
		"\u0158\x05\xB0Y\x02\u0158\u018A\x03\x02\x02\x02\u0159\u015A\x07U\x02\x02" +
		"\u015A\u015B\x07\x06\x02\x02\u015B\u015C\x05r:\x02\u015C\u015D\x07\x07" +
		"\x02\x02\u015D\u015E\x05\x06\x04\x02\u015E\u018A\x03\x02\x02\x02\u015F" +
		"\u0160\x07S\x02\x02\u0160\u0163\x07\x06\x02\x02\u0161\u0164\x05r:\x02" +
		"\u0162\u0164\x05\"\x12\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0162\x03" +
		"\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165" +
		"\u0167\x07\v\x02\x02\u0166\u0168\x05r:\x02\u0167\u0166\x03\x02\x02\x02" +
		"\u0167\u0168\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x07" +
		"\v\x02\x02\u016A\u016C\x05r:\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C" +
		"\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x07\x07\x02\x02" +
		"\u016E\u018A\x05\x06\x04\x02\u016F\u0170\x07S\x02\x02\u0170\u0173\x07" +
		"\x06\x02\x02\u0171\u0174\x05t;\x02\u0172\u0174\x05\"\x12\x02\u0173\u0171" +
		"\x03\x02\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02" +
		"\u0175\u0176\x07^\x02\x02\u0176\u0177\x05r:\x02\u0177\u0178\x07\x07\x02" +
		"\x02\u0178\u0179\x05\x06\x04\x02\u0179\u018A\x03\x02\x02\x02\u017A\u017C" +
		"\x07S\x02\x02\u017B\u017D\x07j\x02\x02\u017C\u017B\x03\x02\x02\x02\u017C" +
		"\u017D\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0181\x07\x06" +
		"\x02\x02\u017F\u0182\x05t;\x02\u0180\u0182\x05\"\x12\x02\u0181\u017F\x03" +
		"\x02\x02\x02\u0181\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183" +
		"\u0184\x05\xA8U\x02\u0184\u0185\x06\x17\x03\x02\u0185\u0186\x05r:\x02" +
		"\u0186\u0187\x07\x07\x02\x02\u0187\u0188\x05\x06\x04\x02\u0188\u018A\x03" +
		"\x02\x02\x02\u0189\u0151\x03\x02\x02\x02\u0189\u0159\x03\x02\x02\x02\u0189" +
		"\u015F\x03\x02\x02\x02\u0189\u016F\x03\x02\x02\x02\u0189\u017A\x03\x02" +
		"\x02\x02\u018A-\x03\x02\x02\x02\u018B\u018F\x07M\x02\x02\u018C\u018F\x05" +
		"\xAEX\x02\u018D\u018F\x07f\x02\x02\u018E\u018B\x03\x02\x02\x02\u018E\u018C" +
		"\x03\x02\x02\x02\u018E\u018D\x03\x02\x02\x02\u018F/\x03\x02\x02\x02\u0190" +
		"\u0193\x07R\x02\x02\u0191\u0192\x06\x19\x04\x02\u0192\u0194\x05\xA8U\x02" +
		"\u0193\u0191\x03\x02\x02\x02\u0193";
	private static readonly _serializedATNSegment1: string =
		"\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0196\x05\xB0" +
		"Y\x02\u01961\x03\x02\x02\x02\u0197\u019A\x07F\x02\x02\u0198\u0199\x06" +
		"\x1A\x05\x02\u0199\u019B\x05\xA8U\x02\u019A\u0198\x03\x02\x02\x02\u019A" +
		"\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x05\xB0" +
		"Y\x02\u019D3\x03\x02\x02\x02\u019E\u01A1\x07P\x02\x02\u019F\u01A0\x06" +
		"\x1B\x06\x02\u01A0\u01A2\x05r:\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A2" +
		"\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01AB\x05\xB0Y\x02" +
		"\u01A4\u01A5\x07P\x02\x02\u01A5\u01A6\x07\x06\x02\x02\u01A6\u01A7\x05" +
		"v<\x02\u01A7\u01A8\x07\x07\x02\x02\u01A8\u01A9\x05\xB0Y\x02\u01A9\u01AB" +
		"\x03\x02\x02\x02\u01AA\u019E\x03\x02\x02\x02\u01AA\u01A4\x03\x02\x02\x02" +
		"\u01AB5\x03\x02\x02\x02\u01AC\u01AF\x07t\x02\x02\u01AD\u01AE\x06\x1C\x07" +
		"\x02\u01AE\u01B0\x05r:\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03" +
		"\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x05\xB0Y\x02\u01B2" +
		"7\x03\x02\x02\x02\u01B3\u01B4\x07Y\x02\x02\u01B4\u01B5\x07\x06\x02\x02" +
		"\u01B5\u01B6\x05r:\x02\u01B6\u01B7\x07\x07\x02\x02\u01B7\u01B8\x05\x06" +
		"\x04\x02\u01B89\x03\x02\x02\x02\u01B9\u01BA\x07T\x02\x02\u01BA\u01BB\x07" +
		"\x06\x02\x02\u01BB\u01BC\x05r:\x02\u01BC\u01BD\x07\x07\x02\x02\u01BD\u01BE" +
		"\x05<\x1F\x02\u01BE;\x03\x02\x02\x02\u01BF\u01C1\x07\b\x02\x02\u01C0\u01C2" +
		"\x05> \x02\u01C1\u01C0\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C7\x03\x02\x02\x02\u01C3\u01C5\x05B\"\x02\u01C4\u01C6\x05> \x02\u01C5" +
		"\u01C4\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C8\x03\x02" +
		"\x02\x02\u01C7\u01C3\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8" +
		"\u01C9\x03\x02\x02\x02\u01C9\u01CA\x07\n\x02\x02\u01CA=\x03\x02\x02\x02" +
		"\u01CB\u01CD\x05@!\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
		"\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
		"?\x03\x02\x02\x02\u01D0\u01D1\x07J\x02\x02\u01D1\u01D2\x05r:\x02\u01D2" +
		"\u01D4\x07\x0F\x02\x02\u01D3\u01D5\x05\n\x06\x02\u01D4\u01D3\x03\x02\x02" +
		"\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5A\x03\x02\x02\x02\u01D6\u01D7\x07" +
		"Z\x02\x02\u01D7\u01D9\x07\x0F\x02\x02\u01D8\u01DA\x05\n\x06\x02\u01D9" +
		"\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DAC\x03\x02\x02" +
		"\x02\u01DB\u01DC\x05\xA8U\x02\u01DC\u01DD\x07\x0F\x02\x02\u01DD\u01DE" +
		"\x05\x06\x04\x02\u01DEE\x03\x02\x02\x02\u01DF\u01E0\x07\\\x02\x02\u01E0" +
		"\u01E1\x06$\b\x02\u01E1\u01E2\x05r:\x02\u01E2\u01E3\x05\xB0Y\x02\u01E3" +
		"G\x03\x02\x02\x02\u01E4\u01E5\x07_\x02\x02\u01E5\u01EB\x05\b\x05\x02\u01E6" +
		"\u01E8\x05J&\x02\u01E7\u01E9\x05L\'\x02\u01E8\u01E7\x03\x02\x02\x02\u01E8" +
		"\u01E9\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA\u01EC\x05L\'" +
		"\x02\u01EB\u01E6\x03\x02\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01ECI\x03" +
		"\x02\x02\x02\u01ED\u01F3\x07N\x02\x02\u01EE\u01F0\x07\x06\x02\x02\u01EF" +
		"\u01F1\x05\x8AF\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02" +
		"\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F4\x07\x07\x02\x02\u01F3\u01EE" +
		"\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02" +
		"\u01F5\u01F6\x05\b\x05\x02\u01F6K\x03\x02\x02\x02\u01F7\u01F8\x07O\x02" +
		"\x02\u01F8\u01F9\x05\b\x05\x02\u01F9M\x03\x02\x02\x02\u01FA\u01FB\x07" +
		"V\x02\x02\u01FB\u01FC\x05\xB0Y\x02\u01FCO\x03\x02\x02\x02\u01FD\u01FF" +
		"\x07i\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02" +
		"\u01FF\u0200\x03\x02\x02\x02\u0200\u0202\x07W\x02\x02\u0201\u0203\x07" +
		"\x18\x02\x02\u0202\u0201\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203" +
		"\u0204\x03\x02\x02\x02\u0204\u0205\x05\xA8U\x02\u0205\u0207\x07\x06\x02" +
		"\x02\u0206\u0208\x05Z.\x02\u0207\u0206\x03\x02\x02\x02\u0207\u0208\x03" +
		"\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x07\x07\x02\x02\u020A" +
		"\u020B\x07\b\x02\x02\u020B\u020C\x05`1\x02\u020C\u020D\x07\n\x02\x02\u020D" +
		"Q\x03\x02\x02\x02\u020E\u020F\x07b\x02\x02\u020F\u0210\x05\xA8U\x02\u0210" +
		"\u0211\x05T+\x02\u0211S\x03\x02\x02\x02\u0212\u0213\x07d\x02\x02\u0213" +
		"\u0215\x05t;\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02" +
		"\u0215\u0216\x03\x02\x02\x02\u0216\u021A\x07\b\x02\x02\u0217\u0219\x05" +
		"V,\x02\u0218\u0217\x03\x02\x02\x02\u0219\u021C\x03\x02\x02\x02\u021A\u0218" +
		"\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021D\x03\x02\x02\x02" +
		"\u021C\u021A\x03\x02\x02\x02\u021D\u021E\x07\n\x02\x02\u021EU\x03\x02" +
		"\x02\x02\u021F\u0224\x07s\x02\x02\u0220\u0221\x06,\t\x02\u0221\u0224\x05" +
		"\xA8U\x02\u0222\u0224\x07i\x02\x02\u0223\u021F\x03\x02\x02\x02\u0223\u0220" +
		"\x03\x02\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02" +
		"\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u022E\x03" +
		"\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u022F\x05X-\x02\u0229\u022A" +
		"\x05\x8AF\x02\u022A\u022B\x07\r\x02\x02\u022B\u022C\x05\x8CG\x02\u022C" +
		"\u022D\x07\v\x02\x02\u022D\u022F\x03\x02\x02\x02\u022E\u0228\x03\x02\x02" +
		"\x02\u022E\u0229\x03\x02\x02\x02\u022F\u0239\x03\x02\x02\x02\u0230\u0239" +
		"\x05&\x14\x02\u0231\u0233\x07\x1D\x02\x02\u0232\u0231\x03\x02\x02\x02" +
		"\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x05" +
		"l7\x02\u0235\u0236\x07\r\x02\x02\u0236\u0237\x05t;\x02\u0237\u0239\x03" +
		"\x02\x02\x02\u0238\u0225\x03\x02\x02\x02\u0238\u0230\x03\x02\x02\x02\u0238" +
		"\u0232\x03\x02\x02\x02\u0239W\x03\x02\x02\x02\u023A\u023C\x07\x18\x02" +
		"\x02\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E" +
		"\x03\x02\x02\x02\u023D\u023F\x07\x1D\x02\x02\u023E\u023D\x03\x02\x02\x02" +
		"\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0241\x05" +
		"l7\x02\u0241\u0243\x07\x06\x02\x02\u0242\u0244\x05Z.\x02\u0243\u0242\x03" +
		"\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245" +
		"\u0246\x07\x07\x02\x02\u0246\u0247\x07\b\x02\x02\u0247\u0248\x05`1\x02" +
		"\u0248\u0249\x07\n\x02\x02\u0249\u0268\x03\x02\x02\x02\u024A\u024C\x07" +
		"\x18\x02\x02\u024B\u024A\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C" +
		"\u024E\x03\x02\x02\x02\u024D\u024F\x07\x1D\x02\x02\u024E\u024D\x03\x02" +
		"\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
		"\u0251\x05\xA2R\x02\u0251\u0252\x07\x06\x02\x02\u0252\u0253\x07\x07\x02" +
		"\x02\u0253\u0254\x07\b\x02\x02\u0254\u0255\x05`1\x02\u0255\u0256\x07\n" +
		"\x02\x02\u0256\u0268\x03\x02\x02\x02\u0257\u0259\x07\x18\x02\x02\u0258" +
		"\u0257\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025B\x03\x02" +
		"\x02\x02\u025A\u025C\x07\x1D\x02\x02\u025B\u025A\x03\x02\x02\x02\u025B" +
		"\u025C\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x05\xA4" +
		"S\x02\u025E\u0260\x07\x06\x02\x02\u025F\u0261\x05Z.\x02\u0260\u025F\x03" +
		"\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262" +
		"\u0263\x07\x07\x02\x02\u0263\u0264\x07\b\x02\x02\u0264\u0265\x05`1\x02" +
		"\u0265\u0266\x07\n\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u023B\x03" +
		"\x02\x02\x02\u0267\u024B\x03\x02\x02\x02\u0267\u0258\x03\x02\x02\x02\u0268" +
		"Y\x03\x02\x02\x02\u0269\u026E\x05\\/\x02\u026A\u026B\x07\f\x02\x02\u026B" +
		"\u026D\x05\\/\x02\u026C\u026A\x03\x02\x02\x02\u026D\u0270\x03\x02\x02" +
		"\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0273" +
		"\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0272\x07\f\x02\x02" +
		"\u0272\u0274\x05^0\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03\x02" +
		"\x02\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0277\x05^0\x02\u0276\u0269" +
		"\x03\x02\x02\x02\u0276\u0275\x03\x02\x02\x02\u0277[\x03\x02\x02\x02\u0278" +
		"\u027B\x05\x8AF\x02\u0279\u027A\x07\r\x02\x02\u027A\u027C\x05t;\x02\u027B" +
		"\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C]\x03\x02\x02" +
		"\x02\u027D\u027E\x07\x10\x02\x02\u027E\u027F\x05t;\x02\u027F_\x03\x02" +
		"\x02\x02\u0280\u0282\x05b2\x02\u0281\u0280\x03\x02\x02\x02\u0281\u0282" +
		"\x03\x02\x02\x02\u0282a\x03\x02\x02\x02\u0283\u0285\x05\x04\x03\x02\u0284" +
		"\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0284\x03\x02" +
		"\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287c\x03\x02\x02\x02\u0288\u0289" +
		"\x07\x04\x02\x02\u0289\u028A\x05f4\x02\u028A\u028B\x07\x05\x02\x02\u028B" +
		"e\x03\x02\x02\x02\u028C\u028E\x07\f\x02\x02\u028D\u028C\x03\x02\x02\x02" +
		"\u028E\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03" +
		"\x02\x02\x02\u0290\u0293\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292" +
		"\u0294\x05h5\x02\u0293\u0292\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02" +
		"\u0294\u029D\x03\x02\x02\x02\u0295\u0297\x07\f\x02\x02\u0296\u0295\x03" +
		"\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0298" +
		"\u0299\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029C\x05h5\x02" +
		"\u029B\u0296\x03\x02\x02\x02\u029C\u029F\x03\x02\x02\x02\u029D\u029B\x03" +
		"\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u02A3\x03\x02\x02\x02\u029F" +
		"\u029D\x03\x02\x02\x02\u02A0\u02A2\x07\f\x02\x02\u02A1\u02A0\x03\x02\x02" +
		"\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A3\u02A4" +
		"\x03\x02\x02\x02\u02A4g\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A6" +
		"\u02A8\x07\x10\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A7\u02A8\x03\x02" +
		"\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AA\x05t;\x02\u02AAi\x03" +
		"\x02\x02\x02\u02AB\u02AC\x05l7\x02\u02AC\u02AD\x07\x0F\x02\x02\u02AD\u02AE" +
		"\x05t;\x02\u02AE\u02D9\x03\x02\x02\x02\u02AF\u02B0\x07\x04\x02\x02\u02B0" +
		"\u02B1\x05t;\x02\u02B1\u02B2\x07\x05\x02\x02\u02B2\u02B3\x07\x0F\x02\x02" +
		"\u02B3\u02B4\x05t;\x02\u02B4\u02D9\x03\x02\x02\x02\u02B5\u02B7\x07i\x02" +
		"\x02\u02B6\u02B5\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B9" +
		"\x03\x02\x02\x02\u02B8\u02BA\x07\x18\x02\x02\u02B9\u02B8\x03\x02\x02\x02" +
		"\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC\x05" +
		"l7\x02\u02BC\u02BE\x07\x06\x02\x02\u02BD\u02BF\x05Z.\x02\u02BE\u02BD\x03" +
		"\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
		"\u02C1\x07\x07\x02\x02\u02C1\u02C2\x07\b\x02\x02\u02C2\u02C3\x05`1\x02" +
		"\u02C3\u02C4\x07\n\x02\x02\u02C4\u02D9\x03\x02\x02\x02\u02C5\u02C6\x05" +
		"\xA2R\x02\u02C6\u02C7\x07\x06\x02\x02\u02C7\u02C8\x07\x07\x02\x02\u02C8" +
		"\u02C9\x07\b\x02\x02\u02C9\u02CA\x05`1\x02\u02CA\u02CB\x07\n\x02\x02\u02CB" +
		"\u02D9\x03\x02\x02\x02\u02CC\u02CD\x05\xA4S\x02\u02CD\u02CE\x07\x06\x02" +
		"\x02\u02CE\u02CF\x05\\/\x02\u02CF\u02D0\x07\x07\x02\x02\u02D0\u02D1\x07" +
		"\b\x02\x02\u02D1\u02D2\x05`1\x02\u02D2\u02D3\x07\n\x02\x02\u02D3\u02D9" +
		"\x03\x02\x02\x02\u02D4\u02D6\x07\x10\x02\x02\u02D5\u02D4\x03\x02\x02\x02" +
		"\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D9\x05" +
		"t;\x02\u02D8\u02AB\x03\x02\x02\x02\u02D8\u02AF\x03\x02\x02\x02\u02D8\u02B6" +
		"\x03\x02\x02\x02\u02D8\u02C5\x03\x02\x02\x02\u02D8\u02CC\x03\x02\x02\x02" +
		"\u02D8\u02D5\x03\x02\x02\x02\u02D9k\x03\x02\x02\x02\u02DA\u02E2\x05\xA6" +
		"T\x02\u02DB\u02E2\x07v\x02\x02\u02DC\u02E2\x05\x9EP\x02\u02DD\u02DE\x07" +
		"\x04\x02\x02\u02DE\u02DF\x05t;\x02\u02DF\u02E0\x07\x05\x02\x02\u02E0\u02E2" +
		"\x03\x02\x02\x02\u02E1\u02DA\x03\x02\x02\x02\u02E1\u02DB\x03\x02\x02\x02" +
		"\u02E1\u02DC\x03\x02\x02\x02\u02E1\u02DD\x03\x02\x02\x02\u02E2m\x03\x02" +
		"\x02\x02\u02E3\u02EF\x07\x06\x02\x02\u02E4\u02E9\x05p9\x02\u02E5\u02E6" +
		"\x07\f\x02\x02\u02E6\u02E8\x05p9\x02\u02E7\u02E5\x03\x02\x02\x02\u02E8" +
		"\u02EB\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02" +
		"\x02\x02\u02EA\u02ED\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC" +
		"\u02EE\x07\f\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02" +
		"\x02\u02EE\u02F0\x03\x02\x02\x02\u02EF\u02E4\x03\x02\x02\x02\u02EF\u02F0" +
		"\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x07\x07\x02\x02" +
		"\u02F2o\x03\x02\x02\x02\u02F3\u02F5\x07\x10\x02\x02\u02F4\u02F3\x03\x02" +
		"\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6" +
		"\u02F9\x05t;\x02\u02F7\u02F9\x05\xA8U\x02\u02F8\u02F6\x03\x02\x02\x02" +
		"\u02F8\u02F7\x03\x02\x02\x02\u02F9q\x03\x02\x02\x02\u02FA\u02FC\x07\x10" +
		"\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC" +
		"\u02FD\x03\x02\x02\x02\u02FD\u0305\x05t;\x02\u02FE\u0300\x07\f\x02\x02" +
		"\u02FF\u0301\x07\x10\x02\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301\x03" +
		"\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0304\x05t;\x02\u0303\u02FE" +
		"\x03\x02\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02" +
		"\u0305\u0306\x03\x02\x02\x02\u0306s\x03\x02\x02\x02\u0307\u0305\x03\x02" +
		"\x02\x02\u0308\u0309\b;\x01\x02\u0309\u033E\x05\x90I\x02\u030A\u030C\x07" +
		"b\x02\x02\u030B\u030D\x05\xA8U\x02\u030C\u030B\x03\x02\x02\x02\u030C\u030D" +
		"\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u033E\x05T+\x02\u030F" +
		"\u0310\x07L\x02\x02\u0310\u0311\x05t;\x02\u0311\u0312\x05n8\x02\u0312" +
		"\u033E\x03\x02\x02\x02\u0313\u0314\x07L\x02\x02\u0314\u033E\x05t;-\u0315" +
		"\u0316\x07L\x02\x02\u0316\u0317\x07\x11\x02\x02\u0317\u033E\x05\xA8U\x02" +
		"\u0318\u0319\x07]\x02\x02\u0319\u033E\x05t;(\u031A\u031B\x07Q\x02\x02" +
		"\u031B\u033E\x05t;\'\u031C\u031D\x07I\x02\x02\u031D\u033E\x05t;&\u031E" +
		"\u031F\x07\x12\x02\x02\u031F\u033E\x05t;%\u0320\u0321\x07\x13\x02\x02" +
		"\u0321\u033E\x05t;$\u0322\u0323\x07\x14\x02\x02\u0323\u033E\x05t;#\u0324" +
		"\u0325\x07\x15\x02\x02\u0325\u033E\x05t;\"\u0326\u0327\x07\x16\x02\x02" +
		"\u0327\u033E\x05t;!\u0328\u0329\x07\x17\x02\x02\u0329\u033E\x05t; \u032A" +
		"\u032B\x07j\x02\x02\u032B\u033E\x05t;\x1F\u032C\u032D\x07h\x02\x02\u032D" +
		"\u032E\x07\x06\x02\x02\u032E\u032F\x05t;\x02\u032F\u0330\x07\x07\x02\x02" +
		"\u0330\u033E\x03\x02\x02\x02\u0331\u033E\x056\x1C\x02\u0332\u033E\x07" +
		"X\x02\x02\u0333\u033E\x05\xA8U\x02\u0334\u033E\x07e\x02\x02\u0335\u033E" +
		"\x05\x98M\x02\u0336\u033E\x05d3\x02\u0337\u033E\x05\x8CG\x02\u0338\u033E" +
		"\x05v<\x02\u0339\u033A\x07\x06\x02\x02\u033A\u033B\x05r:\x02\u033B\u033C" +
		"\x07\x07\x02\x02\u033C\u033E\x03\x02\x02\x02\u033D\u0308\x03\x02\x02\x02" +
		"\u033D\u030A\x03\x02\x02\x02\u033D\u030F\x03\x02\x02\x02\u033D\u0313\x03" +
		"\x02\x02\x02\u033D\u0315\x03\x02\x02\x02\u033D\u0318\x03\x02\x02\x02\u033D" +
		"\u031A\x03\x02\x02\x02\u033D\u031C\x03\x02\x02\x02\u033D\u031E\x03\x02" +
		"\x02\x02\u033D\u0320\x03\x02\x02\x02\u033D\u0322\x03\x02\x02\x02\u033D" +
		"\u0324\x03\x02\x02\x02\u033D\u0326\x03\x02\x02\x02\u033D\u0328\x03\x02" +
		"\x02\x02\u033D\u032A\x03\x02\x02\x02\u033D\u032C\x03\x02\x02\x02\u033D" +
		"\u0331\x03\x02\x02\x02\u033D\u0332\x03\x02\x02\x02\u033D\u0333\x03\x02" +
		"\x02\x02\u033D\u0334\x03\x02\x02\x02\u033D\u0335\x03\x02\x02\x02\u033D" +
		"\u0336\x03\x02\x02\x02\u033D\u0337\x03\x02\x02\x02\u033D\u0338\x03\x02" +
		"\x02\x02\u033D\u0339\x03\x02\x02\x02\u033E\u0390\x03\x02\x02\x02\u033F" +
		"\u0340\f\x1E\x02\x02\u0340\u0341\x07\x1B\x02\x02\u0341\u038F\x05t;\x1E" +
		"\u0342\u0343\f\x1D\x02\x02\u0343\u0344\t\x02\x02\x02\u0344\u038F\x05t" +
		";\x1E\u0345\u0346\f\x1C\x02\x02\u0346\u0347\t\x03\x02\x02\u0347\u038F" +
		"\x05t;\x1D\u0348\u0349\f\x1B\x02\x02\u0349\u034A\x07\x1C\x02\x02\u034A" +
		"\u038F\x05t;\x1C\u034B\u034C\f\x1A\x02\x02\u034C\u034D\t\x04\x02\x02\u034D" +
		"\u038F\x05t;\x1B\u034E\u034F\f\x19\x02\x02\u034F\u0350\t\x05\x02\x02\u0350" +
		"\u038F\x05t;\x1A\u0351\u0352\f\x18\x02\x02\u0352\u0353\x07H\x02\x02\u0353" +
		"\u038F\x05t;\x19\u0354\u0355\f\x17\x02\x02\u0355\u0356\x07^\x02\x02\u0356" +
		"\u038F\x05t;\x18\u0357\u0358\f\x16\x02\x02\u0358\u0359\t\x06\x02\x02\u0359" +
		"\u038F\x05t;\x17\u035A\u035B\f\x15\x02\x02\u035B\u035C\x07)\x02\x02\u035C" +
		"\u038F\x05t;\x16\u035D\u035E\f\x14\x02\x02\u035E\u035F\x07*\x02\x02\u035F" +
		"\u038F\x05t;\x15\u0360\u0361\f\x13\x02\x02\u0361\u0362\x07+\x02\x02\u0362" +
		"\u038F\x05t;\x14\u0363\u0364\f\x12\x02\x02\u0364\u0365\x07,\x02\x02\u0365" +
		"\u038F\x05t;\x13\u0366\u0367\f\x11\x02\x02\u0367\u0368\x07-\x02\x02\u0368" +
		"\u038F\x05t;\x12\u0369\u036A\f\x10\x02\x02\u036A\u036B\x07\x0E\x02\x02" +
		"\u036B\u036C\x05t;\x02\u036C\u036D\x07\x0F\x02\x02\u036D\u036E\x05t;\x11" +
		"\u036E\u038F\x03\x02\x02\x02\u036F\u0370\f\x0F\x02\x02\u0370\u0371\x07" +
		"\r\x02\x02\u0371\u038F\x05t;\x0F\u0372\u0373\f\x0E\x02\x02\u0373\u0374" +
		"\x05\x96L\x02\u0374\u0375\x05t;\x0E\u0375\u038F\x03\x02\x02\x02\u0376" +
		"\u0377\f0\x02\x02\u0377\u0378\x07\x04\x02\x02\u0378\u0379\x05r:\x02\u0379" +
		"\u037A\x07\x05\x02\x02\u037A\u038F\x03\x02\x02\x02\u037B\u037D\f/\x02" +
		"\x02\u037C\u037E\x07\x0E\x02\x02\u037D\u037C\x03\x02\x02\x02\u037D\u037E" +
		"\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0381\x07\x11\x02\x02" +
		"\u0380\u0382\x07\x1D\x02\x02\u0381\u0380\x03\x02\x02\x02\u0381\u0382\x03" +
		"\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u038F\x05\xA6T\x02\u0384" +
		"\u0385\f,\x02\x02\u0385\u038F\x05n8\x02\u0386\u0387\f*\x02\x02\u0387\u0388" +
		"\x06;\x1F\x02\u0388\u038F\x07\x12\x02\x02\u0389\u038A\f)\x02\x02\u038A" +
		"\u038B\x06;!\x02\u038B\u038F\x07\x13\x02\x02\u038C\u038D\f\f\x02\x02\u038D" +
		"\u038F\x05\x9AN\x02\u038E\u033F\x03\x02\x02\x02\u038E\u0342\x03\x02\x02" +
		"\x02\u038E\u0345\x03\x02\x02\x02\u038E\u0348\x03\x02\x02\x02\u038E\u034B" +
		"\x03\x02\x02\x02\u038E\u034E\x03\x02\x02\x02\u038E\u0351\x03\x02\x02\x02" +
		"\u038E\u0354\x03\x02\x02\x02\u038E\u0357\x03\x02\x02\x02\u038E\u035A\x03" +
		"\x02\x02\x02\u038E\u035D\x03\x02\x02\x02\u038E\u0360\x03\x02\x02\x02\u038E" +
		"\u0363\x03\x02\x02\x02\u038E\u0366\x03\x02\x02\x02\u038E\u0369\x03\x02" +
		"\x02\x02\u038E\u036F\x03\x02\x02\x02\u038E\u0372\x03\x02\x02\x02\u038E" +
		"\u0376\x03\x02\x02\x02\u038E\u037B\x03\x02\x02\x02\u038E\u0384\x03\x02" +
		"\x02\x02\u038E\u0386\x03\x02\x02\x02\u038E\u0389\x03\x02\x02\x02\u038E" +
		"\u038C\x03\x02\x02\x02\u038F\u0392\x03\x02\x02\x02\u0390\u038E\x03\x02" +
		"\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391u\x03\x02\x02\x02\u0392\u0390" +
		"\x03\x02\x02\x02\u0393\u0395\x05x=\x02\u0394\u0393\x03\x02\x02\x02\u0395" +
		"\u0396\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02\u0396\u0397\x03\x02" +
		"\x02\x02\u0397w\x03\x02\x02\x02\u0398\u0399\x07!\x02\x02\u0399\u039D\x05" +
		"|?\x02\u039A\u039C\x05\x82B\x02\u039B\u039A\x03\x02\x02\x02\u039C\u039F" +
		"\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02" +
		"\u039E\u03A0\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u03A0\u03A1\x07" +
		"\"\x02\x02\u03A1\u03A2\x05z>\x02\u03A2\u03A3\x07!\x02\x02\u03A3\u03A4" +
		"\x07\x19\x02\x02\u03A4\u03A5\x05~@\x02\u03A5\u03A6\x07\"\x02\x02\u03A6" +
		"\u03C9\x03\x02\x02\x02\u03A7\u03A8\x07!\x02\x02\u03A8\u03AC\x05\x80A\x02" +
		"\u03A9\u03AB\x05\x82B\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AE\x03" +
		"\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD" +
		"\u03AF\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u03B0\x05z>\x02" +
		"\u03B0\u03B1\x07\x19\x02\x02\u03B1\u03B2\x07\"\x02\x02\u03B2\u03C9\x03" +
		"\x02\x02\x02\u03B3\u03B4\x07!\x02\x02\u03B4\u03B8\x05\x80A\x02\u03B5\u03B7" +
		"\x05\x82B\x02\u03B6\u03B5\x03\x02\x02\x02\u03B7\u03BA\x03\x02\x02\x02" +
		"\u03B8\u03B6\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BB\x03" +
		"\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BB\u03BC\x07\x19\x02\x02\u03BC" +
		"\u03BD\x07\"\x02\x02\u03BD\u03C9\x03\x02\x02\x02\u03BE\u03BF\x07!\x02" +
		"\x02\u03BF\u03C3\x05\x80A\x02\u03C0\u03C2\x05\x82B\x02\u03C1\u03C0\x03" +
		"\x02\x02\x02\u03C2\u03C5\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3" +
		"\u03C4\x03\x02\x02\x02\u03C4\u03C6\x03\x02\x02\x02\u03C5\u03C3\x03\x02" +
		"\x02\x02\u03C6\u03C7\x07\"\x02\x02\u03C7\u03C9\x03\x02\x02\x02\u03C8\u0398" +
		"\x03\x02\x02\x02\u03C8\u03A7\x03\x02\x02\x02\u03C8\u03B3\x03\x02\x02\x02" +
		"\u03C8\u03BE\x03\x02\x02\x02\u03C9y\x03\x02\x02\x02\u03CA\u03CC\x05\x86" +
		"D\x02\u03CB\u03CA\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03D6" +
		"\x03\x02\x02\x02\u03CD\u03D0\x05x=\x02\u03CE\u03D0\x05\x8EH\x02\u03CF" +
		"\u03CD\x03\x02\x02\x02\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D2\x03\x02" +
		"\x02\x02\u03D1\u03D3\x05\x86D\x02\u03D2\u03D1\x03\x02\x02\x02\u03D2\u03D3" +
		"\x03\x02\x02\x02\u03D3\u03D5\x03\x02\x02\x02\u03D4\u03CF\x03\x02\x02\x02" +
		"\u03D5\u03D8\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03" +
		"\x02\x02\x02\u03D7{\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D9" +
		"\u03DA\x05\x80A\x02\u03DA\u03DB\b?\x01\x02\u03DB}\x03\x02\x02\x02\u03DC" +
		"\u03DD\x05\x80A\x02\u03DD\u03DE\x06@#\x03\u03DE\x7F\x03\x02\x02\x02\u03DF" +
		"\u03E3\x07\x89\x02\x02\u03E0\u03E3\x05\xACW\x02\u03E1\u03E3\x07u\x02\x02" +
		"\u03E2\u03DF\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E1\x03" +
		"\x02\x02\x02\u03E3\x81\x03\x02\x02\x02\u03E4\u03E5\x05\x84C\x02\u03E5" +
		"\u03E6\x07\r\x02\x02\u03E6\u03E7\x05\x88E\x02\u03E7\u03EA\x03\x02\x02" +
		"\x02\u03E8\u03EA\x05\x84C\x02\u03E9\u03E4\x03\x02\x02\x02\u03E9\u03E8" +
		"\x03\x02\x02\x02\u03EA\x83\x03\x02\x02\x02\u03EB\u03F5\x07\x89\x02\x02" +
		"\u03EC\u03F1\x07u\x02\x02\u03ED\u03EE\x07\x15\x02\x02\u03EE\u03F0\x07" +
		"u\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03F0\u03F3\x03\x02\x02\x02\u03F1" +
		"\u03EF\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F5\x03\x02" +
		"\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F4\u03EB\x03\x02\x02\x02\u03F4" +
		"\u03EC\x03\x02\x02\x02\u03F5\x85\x03\x02\x02\x02\u03F6\u03F8\n\x07\x02" +
		"\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03F7" +
		"\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\x87\x03\x02\x02\x02" +
		"\u03FB\u03FF\x07\x8A\x02\x02\u03FC\u03FF\x07v\x02\x02\u03FD\u03FF\x05" +
		"\x8EH\x02\u03FE\u03FB\x03\x02\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE" +
		"\u03FD\x03\x02\x02\x02\u03FF\x89\x03\x02\x02\x02\u0400\u0404\x05\xA8U" +
		"\x02\u0401\u0404\x05d3\x02\u0402\u0404\x05\x8CG\x02\u0403\u0400\x03\x02" +
		"\x02\x02\u0403\u0401\x03\x02\x02\x02\u0403\u0402\x03\x02\x02\x02\u0404" +
		"\x8B\x03\x02\x02\x02\u0405\u0411\x07\b\x02\x02\u0406\u040B\x05j6\x02\u0407" +
		"\u0408\x07\f\x02\x02\u0408\u040A\x05j6\x02\u0409\u0407\x03\x02\x02\x02" +
		"\u040A\u040D\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040B\u040C\x03" +
		"\x02\x02\x02\u040C\u040F\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E" +
		"\u0410\x07\f\x02\x02\u040F\u040E\x03\x02\x02\x02\u040F\u0410\x03\x02\x02" +
		"\x02\u0410\u0412\x03\x02\x02\x02\u0411\u0406\x03\x02\x02\x02\u0411\u0412" +
		"\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0414\x07\n\x02\x02" +
		"\u0414\x8D\x03\x02\x02\x02\u0415\u0416\x07\b\x02\x02\u0416\u0417\x05r" +
		":\x02\u0417\u0418\x07\n\x02\x02\u0418\x8F\x03\x02\x02\x02\u0419\u0432" +
		"\x05P)\x02\u041A\u041C\x07i\x02\x02\u041B\u041A\x03\x02\x02\x02\u041B" +
		"\u041C\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u041F\x07W\x02" +
		"\x02\u041E\u0420\x07\x18\x02\x02\u041F\u041E\x03\x02\x02\x02\u041F\u0420" +
		"\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0423\x07\x06\x02\x02" +
		"\u0422\u0424\x05Z.\x02\u0423\u0422\x03\x02\x02\x02\u0423\u0424\x03\x02" +
		"\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425\u0426\x07\x07\x02\x02\u0426" +
		"\u0427\x07\b\x02\x02\u0427\u0428\x05`1\x02\u0428\u0429\x07\n\x02\x02\u0429" +
		"\u0432\x03\x02\x02\x02\u042A\u042C\x07i\x02\x02\u042B\u042A\x03\x02\x02" +
		"\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042E" +
		"\x05\x92J\x02\u042E\u042F\x07:\x02\x02\u042F\u0430\x05\x94K\x02\u0430" +
		"\u0432\x03\x02\x02\x02\u0431\u0419\x03\x02\x02\x02\u0431\u041B\x03\x02" +
		"\x02\x02\u0431\u042B\x03\x02\x02\x02\u0432\x91\x03\x02\x02\x02\u0433\u043A" +
		"\x05\xA8U\x02\u0434\u0436\x07\x06\x02\x02\u0435\u0437\x05Z.\x02\u0436" +
		"\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\u0438\x03\x02" +
		"\x02\x02\u0438\u043A\x07\x07\x02\x02\u0439\u0433\x03\x02\x02\x02\u0439" +
		"\u0434\x03\x02\x02\x02\u043A\x93\x03\x02\x02\x02\u043B\u0441\x05t;\x02" +
		"\u043C\u043D\x07\b\x02\x02\u043D\u043E\x05";
	private static readonly _serializedATNSegment2: string =
		"`1\x02\u043E\u043F\x07\n\x02\x02\u043F\u0441\x03\x02\x02\x02\u0440\u043B" +
		"\x03\x02\x02\x02\u0440\u043C\x03\x02\x02\x02\u0441\x95\x03\x02\x02\x02" +
		"\u0442\u0443\t\b\x02\x02\u0443\x97\x03\x02\x02\x02\u0444\u044C\x07;\x02" +
		"\x02\u0445\u044C\x07<\x02\x02\u0446\u044C\x07v\x02\x02\u0447\u044C\x05" +
		"\x9AN\x02\u0448\u044C\x07~\x02\x02\u0449\u044C\x05\x9EP\x02\u044A\u044C" +
		"\x05\xA0Q\x02\u044B\u0444\x03\x02\x02\x02\u044B\u0445\x03\x02\x02\x02" +
		"\u044B\u0446\x03\x02\x02\x02\u044B\u0447\x03\x02\x02\x02\u044B\u0448\x03" +
		"\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044B\u044A\x03\x02\x02\x02\u044C" +
		"\x99\x03\x02\x02\x02\u044D\u0451\x07x\x02\x02\u044E\u0450\x05\x9CO\x02" +
		"\u044F\u044E\x03\x02\x02\x02\u0450\u0453\x03\x02\x02\x02\u0451\u044F\x03" +
		"\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0454\x03\x02\x02\x02\u0453" +
		"\u0451\x03\x02\x02\x02\u0454\u0455\x07x\x02\x02\u0455\x9B\x03\x02\x02" +
		"\x02\u0456\u045C\x07\x84\x02\x02\u0457\u0458\x07\x83\x02\x02\u0458\u0459" +
		"\x05t;\x02\u0459\u045A\x07\t\x02\x02\u045A\u045C\x03\x02\x02\x02\u045B" +
		"\u0456\x03\x02\x02\x02\u045B\u0457\x03\x02\x02\x02\u045C\x9D\x03\x02\x02" +
		"\x02\u045D\u045E\t\t\x02\x02\u045E\x9F\x03\x02\x02\x02\u045F\u0460\t\n" +
		"\x02\x02\u0460\xA1\x03\x02\x02\x02\u0461\u0462\x05\xA8U\x02\u0462\u0463" +
		"\x06R$\x02\u0463\u0464\x05l7\x02\u0464\xA3\x03\x02\x02\x02\u0465\u0466" +
		"\x05\xA8U\x02\u0466\u0467\x06S%\x02\u0467\u0468\x05l7\x02\u0468\xA5\x03" +
		"\x02\x02\x02\u0469\u046C\x05\xA8U\x02\u046A\u046C\x05\xAAV\x02\u046B\u0469" +
		"\x03\x02\x02\x02\u046B\u046A\x03\x02\x02\x02\u046C\xA7\x03\x02\x02\x02" +
		"\u046D\u046E\t\v\x02\x02\u046E\xA9\x03\x02\x02\x02\u046F\u0473\x05\xAC" +
		"W\x02\u0470\u0473\x07;\x02\x02\u0471\u0473\x07<\x02\x02\u0472\u046F\x03" +
		"\x02\x02\x02\u0472\u0470\x03\x02\x02\x02\u0472\u0471\x03\x02\x02\x02\u0473" +
		"\xAB\x03\x02\x02\x02\u0474\u04A3\x07F\x02\x02\u0475\u04A3\x07G\x02\x02" +
		"\u0476\u04A3\x07H\x02\x02\u0477\u04A3\x07I\x02\x02\u0478\u04A3\x07J\x02" +
		"\x02\u0479\u04A3\x07K\x02\x02\u047A\u04A3\x07L\x02\x02\u047B\u04A3\x07" +
		"M\x02\x02\u047C\u04A3\x07N\x02\x02\u047D\u04A3\x07O\x02\x02\u047E\u04A3" +
		"\x07P\x02\x02\u047F\u04A3\x07Q\x02\x02\u0480\u04A3\x07R\x02\x02\u0481" +
		"\u04A3\x07S\x02\x02\u0482\u04A3\x07T\x02\x02\u0483\u04A3\x07U\x02\x02" +
		"\u0484\u04A3\x07V\x02\x02\u0485\u04A3\x07W\x02\x02\u0486\u04A3\x07X\x02" +
		"\x02\u0487\u04A3\x07Y\x02\x02\u0488\u04A3\x07Z\x02\x02\u0489\u04A3\x07" +
		"[\x02\x02\u048A\u04A3\x07\\\x02\x02\u048B\u04A3\x07]\x02\x02\u048C\u04A3" +
		"\x07^\x02\x02\u048D\u04A3\x07_\x02\x02\u048E\u04A3\x07b\x02\x02\u048F" +
		"\u04A3\x07c\x02\x02\u0490\u04A3\x07d\x02\x02\u0491\u04A3\x07e\x02\x02" +
		"\u0492\u04A3\x07f\x02\x02\u0493\u04A3\x07g\x02\x02\u0494\u04A3\x07h\x02" +
		"\x02\u0495\u04A3\x07k\x02\x02\u0496\u04A3\x05\xAEX\x02\u0497\u04A3\x07" +
		"n\x02\x02\u0498\u04A3\x07o\x02\x02\u0499\u04A3\x07p\x02\x02\u049A\u04A3" +
		"\x07q\x02\x02\u049B\u04A3\x07r\x02\x02\u049C\u04A3\x07s\x02\x02\u049D" +
		"\u04A3\x07t\x02\x02\u049E\u04A3\x07i\x02\x02\u049F\u04A3\x07j\x02\x02" +
		"\u04A0\u04A3\x07a\x02\x02\u04A1\u04A3\x07`\x02\x02\u04A2\u0474\x03\x02" +
		"\x02\x02\u04A2\u0475\x03\x02\x02\x02\u04A2\u0476\x03\x02\x02\x02\u04A2" +
		"\u0477\x03\x02\x02\x02\u04A2\u0478\x03\x02\x02\x02\u04A2\u0479\x03\x02" +
		"\x02\x02\u04A2\u047A\x03\x02\x02\x02\u04A2\u047B\x03\x02\x02\x02\u04A2" +
		"\u047C\x03\x02\x02\x02\u04A2\u047D\x03\x02\x02\x02\u04A2\u047E\x03\x02" +
		"\x02\x02\u04A2\u047F\x03\x02\x02\x02\u04A2\u0480\x03\x02\x02\x02\u04A2" +
		"\u0481\x03\x02\x02\x02\u04A2\u0482\x03\x02\x02\x02\u04A2\u0483\x03\x02" +
		"\x02\x02\u04A2\u0484\x03\x02\x02\x02\u04A2\u0485\x03\x02\x02\x02\u04A2" +
		"\u0486\x03\x02\x02\x02\u04A2\u0487\x03\x02\x02\x02\u04A2\u0488\x03\x02" +
		"\x02\x02\u04A2\u0489\x03\x02\x02\x02\u04A2\u048A\x03\x02\x02\x02\u04A2" +
		"\u048B\x03\x02\x02\x02\u04A2\u048C\x03\x02\x02\x02\u04A2\u048D\x03\x02" +
		"\x02\x02\u04A2\u048E\x03\x02\x02\x02\u04A2\u048F\x03\x02\x02\x02\u04A2" +
		"\u0490\x03\x02\x02\x02\u04A2\u0491\x03\x02\x02\x02\u04A2\u0492\x03\x02" +
		"\x02\x02\u04A2\u0493\x03\x02\x02\x02\u04A2\u0494\x03\x02\x02\x02\u04A2" +
		"\u0495\x03\x02\x02\x02\u04A2\u0496\x03\x02\x02\x02\u04A2\u0497\x03\x02" +
		"\x02\x02\u04A2\u0498\x03\x02\x02\x02\u04A2\u0499\x03\x02\x02\x02\u04A2" +
		"\u049A\x03\x02\x02\x02\u04A2\u049B\x03\x02\x02\x02\u04A2\u049C\x03\x02" +
		"\x02\x02\u04A2\u049D\x03\x02\x02\x02\u04A2\u049E\x03\x02\x02\x02\u04A2" +
		"\u049F\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A2\u04A1\x03\x02" +
		"\x02\x02\u04A3\xAD\x03\x02\x02\x02\u04A4\u04A5\t\f\x02\x02\u04A5\xAF\x03" +
		"\x02\x02\x02\u04A6\u04AB\x07\v\x02\x02\u04A7\u04AB\x07\x02\x02\x03\u04A8" +
		"\u04AB\x06Y&\x02\u04A9\u04AB\x06Y\'\x02\u04AA\u04A6\x03\x02\x02\x02\u04AA" +
		"\u04A7\x03\x02\x02\x02\u04AA\u04A8\x03\x02\x02\x02\u04AA\u04A9\x03\x02" +
		"\x02\x02\u04AB\xB1\x03\x02\x02\x02\x85\xB3\xB6\xD0\xD4\xDB\xE1\xE5\xEC" +
		"\xF4\xF9\xFB\u0104\u0108\u0110\u0115\u011E\u0126\u012A\u012F\u013A\u0140" +
		"\u014F\u0163\u0167\u016B\u0173\u017C\u0181\u0189\u018E\u0193\u019A\u01A1" +
		"\u01AA\u01AF\u01C1\u01C5\u01C7\u01CE\u01D4\u01D9\u01E8\u01EB\u01F0\u01F3" +
		"\u01FE\u0202\u0207\u0214\u021A\u0223\u0225\u022E\u0232\u0238\u023B\u023E" +
		"\u0243\u024B\u024E\u0258\u025B\u0260\u0267\u026E\u0273\u0276\u027B\u0281" +
		"\u0286\u028F\u0293\u0298\u029D\u02A3\u02A7\u02B6\u02B9\u02BE\u02D5\u02D8" +
		"\u02E1\u02E9\u02ED\u02EF\u02F4\u02F8\u02FB\u0300\u0305\u030C\u033D\u037D" +
		"\u0381\u038E\u0390\u0396\u039D\u03AC\u03B8\u03C3\u03C8\u03CB\u03CF\u03D2" +
		"\u03D6\u03E2\u03E9\u03F1\u03F4\u03F9\u03FE\u0403\u040B\u040F\u0411\u041B" +
		"\u041F\u0423\u042B\u0431\u0436\u0439\u0440\u044B\u0451\u045B\u046B\u0472" +
		"\u04A2\u04AA";
	public static readonly _serializedATN: string = Utils.join(
		[
			JavaScriptParser._serializedATNSegment0,
			JavaScriptParser._serializedATNSegment1,
			JavaScriptParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaScriptParser.__ATN) {
			JavaScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaScriptParser._serializedATN));
		}

		return JavaScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavaScriptParser.EOF, 0); }
	public HashBangLine(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.HashBangLine, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_program; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_sourceElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSourceElement) {
			listener.enterSourceElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSourceElement) {
			listener.exitSourceElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElement) {
			return visitor.visitSourceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public importStatement(): ImportStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportStatementContext);
	}
	public exportStatement(): ExportStatementContext | undefined {
		return this.tryGetRuleContext(0, ExportStatementContext);
	}
	public emptyStatement_(): EmptyStatement_Context | undefined {
		return this.tryGetRuleContext(0, EmptyStatement_Context);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public yieldStatement(): YieldStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldStatementContext);
	}
	public withStatement(): WithStatementContext | undefined {
		return this.tryGetRuleContext(0, WithStatementContext);
	}
	public labelledStatement(): LabelledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabelledStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public debuggerStatement(): DebuggerStatementContext | undefined {
		return this.tryGetRuleContext(0, DebuggerStatementContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_statementList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public Import(): TerminalNode { return this.getToken(JavaScriptParser.Import, 0); }
	public importFromBlock(): ImportFromBlockContext {
		return this.getRuleContext(0, ImportFromBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportFromBlockContext extends ParserRuleContext {
	public importFrom(): ImportFromContext | undefined {
		return this.tryGetRuleContext(0, ImportFromContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public importNamespace(): ImportNamespaceContext | undefined {
		return this.tryGetRuleContext(0, ImportNamespaceContext);
	}
	public moduleItems(): ModuleItemsContext | undefined {
		return this.tryGetRuleContext(0, ModuleItemsContext);
	}
	public importDefault(): ImportDefaultContext | undefined {
		return this.tryGetRuleContext(0, ImportDefaultContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importFromBlock; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportFromBlock) {
			listener.enterImportFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportFromBlock) {
			listener.exitImportFromBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportFromBlock) {
			return visitor.visitImportFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleItemsContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public aliasName(): AliasNameContext[];
	public aliasName(i: number): AliasNameContext;
	public aliasName(i?: number): AliasNameContext | AliasNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AliasNameContext);
		} else {
			return this.getRuleContext(i, AliasNameContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_moduleItems; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterModuleItems) {
			listener.enterModuleItems(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitModuleItems) {
			listener.exitModuleItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitModuleItems) {
			return visitor.visitModuleItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDefaultContext extends ParserRuleContext {
	public aliasName(): AliasNameContext {
		return this.getRuleContext(0, AliasNameContext);
	}
	public Comma(): TerminalNode { return this.getToken(JavaScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importDefault; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportDefault) {
			listener.enterImportDefault(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportDefault) {
			listener.exitImportDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportDefault) {
			return visitor.visitImportDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportNamespaceContext extends ParserRuleContext {
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importNamespace; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportNamespace) {
			listener.enterImportNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportNamespace) {
			listener.exitImportNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportNamespace) {
			return visitor.visitImportNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportFromContext extends ParserRuleContext {
	public From(): TerminalNode { return this.getToken(JavaScriptParser.From, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(JavaScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importFrom; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportFrom) {
			listener.enterImportFrom(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportFrom) {
			listener.exitImportFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportFrom) {
			return visitor.visitImportFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_aliasName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAliasName) {
			listener.enterAliasName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAliasName) {
			listener.exitAliasName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAliasName) {
			return visitor.visitAliasName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_exportStatement; }
	public copyFrom(ctx: ExportStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExportDeclarationContext extends ExportStatementContext {
	public Export(): TerminalNode { return this.getToken(JavaScriptParser.Export, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public exportFromBlock(): ExportFromBlockContext | undefined {
		return this.tryGetRuleContext(0, ExportFromBlockContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(ctx: ExportStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExportDeclaration) {
			listener.enterExportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExportDeclaration) {
			listener.exitExportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportDeclaration) {
			return visitor.visitExportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExportDefaultDeclarationContext extends ExportStatementContext {
	public Export(): TerminalNode { return this.getToken(JavaScriptParser.Export, 0); }
	public Default(): TerminalNode { return this.getToken(JavaScriptParser.Default, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: ExportStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExportDefaultDeclaration) {
			listener.enterExportDefaultDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExportDefaultDeclaration) {
			listener.exitExportDefaultDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportDefaultDeclaration) {
			return visitor.visitExportDefaultDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportFromBlockContext extends ParserRuleContext {
	public importNamespace(): ImportNamespaceContext | undefined {
		return this.tryGetRuleContext(0, ImportNamespaceContext);
	}
	public importFrom(): ImportFromContext | undefined {
		return this.tryGetRuleContext(0, ImportFromContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public moduleItems(): ModuleItemsContext | undefined {
		return this.tryGetRuleContext(0, ModuleItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_exportFromBlock; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExportFromBlock) {
			listener.enterExportFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExportFromBlock) {
			listener.exitExportFromBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportFromBlock) {
			return visitor.visitExportFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_declaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public assignable(): AssignableContext {
		return this.getRuleContext(0, AssignableContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(JavaScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_emptyStatement_; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEmptyStatement_) {
			listener.enterEmptyStatement_(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEmptyStatement_) {
			listener.exitEmptyStatement_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(JavaScriptParser.If, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_iterationStatement; }
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DoStatementContext extends IterationStatementContext {
	public Do(): TerminalNode { return this.getToken(JavaScriptParser.Do, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode { return this.getToken(JavaScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementContext extends IterationStatementContext {
	public While(): TerminalNode { return this.getToken(JavaScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.SemiColon);
		} else {
			return this.getToken(JavaScriptParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForInStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public In(): TerminalNode { return this.getToken(JavaScriptParser.In, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForInStatement) {
			listener.enterForInStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForInStatement) {
			listener.exitForInStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForInStatement) {
			return visitor.visitForInStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForOfStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public Await(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Await, 0); }
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForOfStatement) {
			listener.enterForOfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForOfStatement) {
			listener.exitForOfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForOfStatement) {
			return visitor.visitForOfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarModifierContext extends ParserRuleContext {
	public Var(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Var, 0); }
	public let_(): Let_Context | undefined {
		return this.tryGetRuleContext(0, Let_Context);
	}
	public Const(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Const, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_varModifier; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVarModifier) {
			listener.enterVarModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVarModifier) {
			listener.exitVarModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVarModifier) {
			return visitor.visitVarModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(JavaScriptParser.Continue, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(JavaScriptParser.Break, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(JavaScriptParser.Return, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenParen, 0); }
	public htmlElements(): HtmlElementsContext | undefined {
		return this.tryGetRuleContext(0, HtmlElementsContext);
	}
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public Yield(): TerminalNode { return this.getToken(JavaScriptParser.Yield, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithStatementContext extends ParserRuleContext {
	public With(): TerminalNode { return this.getToken(JavaScriptParser.With, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_withStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterWithStatement) {
			listener.enterWithStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitWithStatement) {
			listener.exitWithStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitWithStatement) {
			return visitor.visitWithStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public Switch(): TerminalNode { return this.getToken(JavaScriptParser.Switch, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public caseBlock(): CaseBlockContext {
		return this.getRuleContext(0, CaseBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseBlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public caseClauses(): CaseClausesContext[];
	public caseClauses(i: number): CaseClausesContext;
	public caseClauses(i?: number): CaseClausesContext | CaseClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClausesContext);
		} else {
			return this.getRuleContext(i, CaseClausesContext);
		}
	}
	public defaultClause(): DefaultClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_caseBlock; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseBlock) {
			listener.enterCaseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseBlock) {
			listener.exitCaseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseBlock) {
			return visitor.visitCaseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClausesContext extends ParserRuleContext {
	public caseClause(): CaseClauseContext[];
	public caseClause(i: number): CaseClauseContext;
	public caseClause(i?: number): CaseClauseContext | CaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClauseContext);
		} else {
			return this.getRuleContext(i, CaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_caseClauses; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseClauses) {
			listener.enterCaseClauses(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseClauses) {
			listener.exitCaseClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClauses) {
			return visitor.visitCaseClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	public Case(): TerminalNode { return this.getToken(JavaScriptParser.Case, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_caseClause; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseClause) {
			listener.enterCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseClause) {
			listener.exitCaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClause) {
			return visitor.visitCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	public Default(): TerminalNode { return this.getToken(JavaScriptParser.Default, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_defaultClause; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDefaultClause) {
			listener.enterDefaultClause(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDefaultClause) {
			listener.exitDefaultClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDefaultClause) {
			return visitor.visitDefaultClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelledStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_labelledStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLabelledStatement) {
			listener.enterLabelledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLabelledStatement) {
			listener.exitLabelledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLabelledStatement) {
			return visitor.visitLabelledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(JavaScriptParser.Throw, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(JavaScriptParser.Try, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catchProduction(): CatchProductionContext | undefined {
		return this.tryGetRuleContext(0, CatchProductionContext);
	}
	public finallyProduction(): FinallyProductionContext | undefined {
		return this.tryGetRuleContext(0, FinallyProductionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchProductionContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(JavaScriptParser.Catch, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseParen, 0); }
	public assignable(): AssignableContext | undefined {
		return this.tryGetRuleContext(0, AssignableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_catchProduction; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCatchProduction) {
			listener.enterCatchProduction(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCatchProduction) {
			listener.exitCatchProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchProduction) {
			return visitor.visitCatchProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyProductionContext extends ParserRuleContext {
	public Finally(): TerminalNode { return this.getToken(JavaScriptParser.Finally, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_finallyProduction; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFinallyProduction) {
			listener.enterFinallyProduction(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFinallyProduction) {
			listener.exitFinallyProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFinallyProduction) {
			return visitor.visitFinallyProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DebuggerStatementContext extends ParserRuleContext {
	public Debugger(): TerminalNode { return this.getToken(JavaScriptParser.Debugger, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_debuggerStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDebuggerStatement) {
			listener.enterDebuggerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDebuggerStatement) {
			listener.exitDebuggerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDebuggerStatement) {
			return visitor.visitDebuggerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Function_(): TerminalNode { return this.getToken(JavaScriptParser.Function_, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public Class(): TerminalNode { return this.getToken(JavaScriptParser.Class, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTailContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Extends, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public classElement(): ClassElementContext[];
	public classElement(i: number): ClassElementContext;
	public classElement(i?: number): ClassElementContext | ClassElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassElementContext);
		} else {
			return this.getRuleContext(i, ClassElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_classTail; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassTail) {
			listener.enterClassTail(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassTail) {
			listener.exitClassTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassTail) {
			return visitor.visitClassTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassElementContext extends ParserRuleContext {
	public methodDefinition(): MethodDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MethodDefinitionContext);
	}
	public assignable(): AssignableContext | undefined {
		return this.tryGetRuleContext(0, AssignableContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.SemiColon, 0); }
	public Static(): TerminalNode[];
	public Static(i: number): TerminalNode;
	public Static(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Static);
		} else {
			return this.getToken(JavaScriptParser.Static, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public Async(): TerminalNode[];
	public Async(i: number): TerminalNode;
	public Async(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Async);
		} else {
			return this.getToken(JavaScriptParser.Async, i);
		}
	}
	public emptyStatement_(): EmptyStatement_Context | undefined {
		return this.tryGetRuleContext(0, EmptyStatement_Context);
	}
	public propertyName(): PropertyNameContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Hashtag, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_classElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassElement) {
			listener.enterClassElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassElement) {
			listener.exitClassElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassElement) {
			return visitor.visitClassElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDefinitionContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Hashtag, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public getter(): GetterContext | undefined {
		return this.tryGetRuleContext(0, GetterContext);
	}
	public setter(): SetterContext | undefined {
		return this.tryGetRuleContext(0, SetterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_methodDefinition; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMethodDefinition) {
			listener.enterMethodDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMethodDefinition) {
			listener.exitMethodDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMethodDefinition) {
			return visitor.visitMethodDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameterArg(): FormalParameterArgContext[];
	public formalParameterArg(i: number): FormalParameterArgContext;
	public formalParameterArg(i?: number): FormalParameterArgContext | FormalParameterArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterArgContext);
		} else {
			return this.getRuleContext(i, FormalParameterArgContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	public lastFormalParameterArg(): LastFormalParameterArgContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterArgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	public assignable(): AssignableContext {
		return this.getRuleContext(0, AssignableContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_formalParameterArg; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFormalParameterArg) {
			listener.enterFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFormalParameterArg) {
			listener.exitFormalParameterArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterArg) {
			return visitor.visitFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterArgContext extends ParserRuleContext {
	public Ellipsis(): TerminalNode { return this.getToken(JavaScriptParser.Ellipsis, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_lastFormalParameterArg; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLastFormalParameterArg) {
			listener.enterLastFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLastFormalParameterArg) {
			listener.exitLastFormalParameterArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameterArg) {
			return visitor.visitLastFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_sourceElements; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSourceElements) {
			listener.enterSourceElements(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSourceElements) {
			listener.exitSourceElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElements) {
			return visitor.visitSourceElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenBracket, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	public arrayElement(): ArrayElementContext[];
	public arrayElement(i: number): ArrayElementContext;
	public arrayElement(i?: number): ArrayElementContext | ArrayElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayElementContext);
		} else {
			return this.getRuleContext(i, ArrayElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_elementList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayElementContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrayElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayElement) {
			listener.enterArrayElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayElement) {
			listener.exitArrayElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayElement) {
			return visitor.visitArrayElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_propertyAssignment; }
	public copyFrom(ctx: PropertyAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyExpressionAssignment) {
			listener.enterPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyExpressionAssignment) {
			listener.exitPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyExpressionAssignment) {
			return visitor.visitPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public OpenBracket(): TerminalNode { return this.getToken(JavaScriptParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(JavaScriptParser.CloseBracket, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterComputedPropertyExpressionAssignment) {
			listener.enterComputedPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitComputedPropertyExpressionAssignment) {
			listener.exitComputedPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitComputedPropertyExpressionAssignment) {
			return visitor.visitComputedPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionPropertyContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionProperty) {
			listener.enterFunctionProperty(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionProperty) {
			listener.exitFunctionProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionProperty) {
			return visitor.visitFunctionProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyGetterContext extends PropertyAssignmentContext {
	public getter(): GetterContext {
		return this.getRuleContext(0, GetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyGetter) {
			listener.enterPropertyGetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyGetter) {
			listener.exitPropertyGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyGetter) {
			return visitor.visitPropertyGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertySetterContext extends PropertyAssignmentContext {
	public setter(): SetterContext {
		return this.getRuleContext(0, SetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public formalParameterArg(): FormalParameterArgContext {
		return this.getRuleContext(0, FormalParameterArgContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertySetter) {
			listener.enterPropertySetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertySetter) {
			listener.exitPropertySetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertySetter) {
			return visitor.visitPropertySetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyShorthandContext extends PropertyAssignmentContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyShorthand) {
			listener.enterPropertyShorthand(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyShorthand) {
			listener.exitPropertyShorthand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyShorthand) {
			return visitor.visitPropertyShorthand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_propertyName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyName) {
			listener.enterPropertyName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyName) {
			listener.exitPropertyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyName) {
			return visitor.visitPropertyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arguments; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_argument; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Ellipsis);
		} else {
			return this.getToken(JavaScriptParser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionExpressionContext extends SingleExpressionContext {
	public anoymousFunction(): AnoymousFunctionContext {
		return this.getRuleContext(0, AnoymousFunctionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClassExpressionContext extends SingleExpressionContext {
	public Class(): TerminalNode { return this.getToken(JavaScriptParser.Class, 0); }
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassExpression) {
			listener.enterClassExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassExpression) {
			listener.exitClassExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassExpression) {
			return visitor.visitClassExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(JavaScriptParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(JavaScriptParser.CloseBracket, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMemberIndexExpression) {
			listener.enterMemberIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMemberIndexExpression) {
			listener.exitMemberIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberIndexExpression) {
			return visitor.visitMemberIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(JavaScriptParser.Dot, 0); }
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.QuestionMark, 0); }
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Hashtag, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMemberDotExpression) {
			listener.enterMemberDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMemberDotExpression) {
			listener.exitMemberDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberDotExpression) {
			return visitor.visitMemberDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewExpressionContext extends SingleExpressionContext {
	public New(): TerminalNode { return this.getToken(JavaScriptParser.New, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArgumentsExpression) {
			listener.enterArgumentsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArgumentsExpression) {
			listener.exitArgumentsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArgumentsExpression) {
			return visitor.visitArgumentsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MetaExpressionContext extends SingleExpressionContext {
	public New(): TerminalNode { return this.getToken(JavaScriptParser.New, 0); }
	public Dot(): TerminalNode { return this.getToken(JavaScriptParser.Dot, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMetaExpression) {
			listener.enterMetaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMetaExpression) {
			listener.exitMetaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMetaExpression) {
			return visitor.visitMetaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(JavaScriptParser.PlusPlus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(JavaScriptParser.MinusMinus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPostDecreaseExpression) {
			listener.enterPostDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPostDecreaseExpression) {
			listener.exitPostDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPostDecreaseExpression) {
			return visitor.visitPostDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteExpressionContext extends SingleExpressionContext {
	public Delete(): TerminalNode { return this.getToken(JavaScriptParser.Delete, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDeleteExpression) {
			listener.enterDeleteExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDeleteExpression) {
			listener.exitDeleteExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDeleteExpression) {
			return visitor.visitDeleteExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VoidExpressionContext extends SingleExpressionContext {
	public Void(): TerminalNode { return this.getToken(JavaScriptParser.Void, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVoidExpression) {
			listener.enterVoidExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVoidExpression) {
			listener.exitVoidExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVoidExpression) {
			return visitor.visitVoidExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	public Typeof(): TerminalNode { return this.getToken(JavaScriptParser.Typeof, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeofExpression) {
			return visitor.visitTypeofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(JavaScriptParser.PlusPlus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(JavaScriptParser.MinusMinus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPreDecreaseExpression) {
			listener.enterPreDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPreDecreaseExpression) {
			listener.exitPreDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPreDecreaseExpression) {
			return visitor.visitPreDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public Plus(): TerminalNode { return this.getToken(JavaScriptParser.Plus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryPlusExpression) {
			return visitor.visitUnaryPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(JavaScriptParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(JavaScriptParser.BitNot, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(JavaScriptParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AwaitExpressionContext extends SingleExpressionContext {
	public Await(): TerminalNode { return this.getToken(JavaScriptParser.Await, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAwaitExpression) {
			listener.enterAwaitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAwaitExpression) {
			listener.exitAwaitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAwaitExpression) {
			return visitor.visitAwaitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Power(): TerminalNode { return this.getToken(JavaScriptParser.Power, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CoalesceExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public NullCoalesce(): TerminalNode { return this.getToken(JavaScriptParser.NullCoalesce, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCoalesceExpression) {
			listener.enterCoalesceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCoalesceExpression) {
			listener.exitCoalesceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCoalesceExpression) {
			return visitor.visitCoalesceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftLogical, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitShiftExpression) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceofExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Instanceof(): TerminalNode { return this.getToken(JavaScriptParser.Instanceof, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterInstanceofExpression) {
			listener.enterInstanceofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitInstanceofExpression) {
			listener.exitInstanceofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitInstanceofExpression) {
			return visitor.visitInstanceofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public In(): TerminalNode { return this.getToken(JavaScriptParser.In, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterInExpression) {
			listener.enterInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitInExpression) {
			listener.exitInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitInExpression) {
			return visitor.visitInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equals_(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Equals_, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NotEquals, 0); }
	public IdentityEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.IdentityEquals, 0); }
	public IdentityNotEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.IdentityNotEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(JavaScriptParser.BitAnd, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitXOr(): TerminalNode { return this.getToken(JavaScriptParser.BitXOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitXOrExpression) {
			listener.enterBitXOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitXOrExpression) {
			listener.exitBitXOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitXOrExpression) {
			return visitor.visitBitXOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(JavaScriptParser.BitOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(JavaScriptParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(JavaScriptParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(JavaScriptParser.QuestionMark, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Assign(): TerminalNode { return this.getToken(JavaScriptParser.Assign, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperatorExpression) {
			return visitor.visitAssignmentOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImportExpressionContext extends SingleExpressionContext {
	public Import(): TerminalNode { return this.getToken(JavaScriptParser.Import, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportExpression) {
			listener.enterImportExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportExpression) {
			listener.exitImportExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportExpression) {
			return visitor.visitImportExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TemplateStringExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public templateStringLiteral(): TemplateStringLiteralContext {
		return this.getRuleContext(0, TemplateStringLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTemplateStringExpression) {
			listener.enterTemplateStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTemplateStringExpression) {
			listener.exitTemplateStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringExpression) {
			return visitor.visitTemplateStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class YieldExpressionContext extends SingleExpressionContext {
	public yieldStatement(): YieldStatementContext {
		return this.getRuleContext(0, YieldStatementContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterYieldExpression) {
			listener.enterYieldExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitYieldExpression) {
			listener.exitYieldExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitYieldExpression) {
			return visitor.visitYieldExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisExpressionContext extends SingleExpressionContext {
	public This(): TerminalNode { return this.getToken(JavaScriptParser.This, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperExpressionContext extends SingleExpressionContext {
	public Super(): TerminalNode { return this.getToken(JavaScriptParser.Super, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSuperExpression) {
			listener.enterSuperExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSuperExpression) {
			listener.exitSuperExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSuperExpression) {
			return visitor.visitSuperExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	public arrayLiteral(): ArrayLiteralContext {
		return this.getRuleContext(0, ArrayLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayLiteralExpression) {
			listener.enterArrayLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayLiteralExpression) {
			listener.exitArrayLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteralExpression) {
			return visitor.visitArrayLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
	public objectLiteral(): ObjectLiteralContext {
		return this.getRuleContext(0, ObjectLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterObjectLiteralExpression) {
			listener.enterObjectLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitObjectLiteralExpression) {
			listener.exitObjectLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteralExpression) {
			return visitor.visitObjectLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HtmlElementExpressionContext extends SingleExpressionContext {
	public htmlElements(): HtmlElementsContext {
		return this.getRuleContext(0, HtmlElementsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlElementExpression) {
			listener.enterHtmlElementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlElementExpression) {
			listener.exitHtmlElementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlElementExpression) {
			return visitor.visitHtmlElementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlElementsContext extends ParserRuleContext {
	public htmlElement(): HtmlElementContext[];
	public htmlElement(i: number): HtmlElementContext;
	public htmlElement(i?: number): HtmlElementContext | HtmlElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlElementContext);
		} else {
			return this.getRuleContext(i, HtmlElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlElements; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlElements) {
			listener.enterHtmlElements(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlElements) {
			listener.exitHtmlElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlElements) {
			return visitor.visitHtmlElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlElementContext extends ParserRuleContext {
	public LessThan(): TerminalNode[];
	public LessThan(i: number): TerminalNode;
	public LessThan(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.LessThan);
		} else {
			return this.getToken(JavaScriptParser.LessThan, i);
		}
	}
	public htmlTagStartName(): HtmlTagStartNameContext | undefined {
		return this.tryGetRuleContext(0, HtmlTagStartNameContext);
	}
	public MoreThan(): TerminalNode[];
	public MoreThan(i: number): TerminalNode;
	public MoreThan(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.MoreThan);
		} else {
			return this.getToken(JavaScriptParser.MoreThan, i);
		}
	}
	public htmlContent(): HtmlContentContext | undefined {
		return this.tryGetRuleContext(0, HtmlContentContext);
	}
	public Divide(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Divide, 0); }
	public htmlTagClosingName(): HtmlTagClosingNameContext | undefined {
		return this.tryGetRuleContext(0, HtmlTagClosingNameContext);
	}
	public htmlAttribute(): HtmlAttributeContext[];
	public htmlAttribute(i: number): HtmlAttributeContext;
	public htmlAttribute(i?: number): HtmlAttributeContext | HtmlAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlAttributeContext);
		} else {
			return this.getRuleContext(i, HtmlAttributeContext);
		}
	}
	public htmlTagName(): HtmlTagNameContext | undefined {
		return this.tryGetRuleContext(0, HtmlTagNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlElement) {
			listener.enterHtmlElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlElement) {
			listener.exitHtmlElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlElement) {
			return visitor.visitHtmlElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlContentContext extends ParserRuleContext {
	public htmlChardata(): HtmlChardataContext[];
	public htmlChardata(i: number): HtmlChardataContext;
	public htmlChardata(i?: number): HtmlChardataContext | HtmlChardataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlChardataContext);
		} else {
			return this.getRuleContext(i, HtmlChardataContext);
		}
	}
	public htmlElement(): HtmlElementContext[];
	public htmlElement(i: number): HtmlElementContext;
	public htmlElement(i?: number): HtmlElementContext | HtmlElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlElementContext);
		} else {
			return this.getRuleContext(i, HtmlElementContext);
		}
	}
	public objectExpressionSequence(): ObjectExpressionSequenceContext[];
	public objectExpressionSequence(i: number): ObjectExpressionSequenceContext;
	public objectExpressionSequence(i?: number): ObjectExpressionSequenceContext | ObjectExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ObjectExpressionSequenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlContent; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlContent) {
			listener.enterHtmlContent(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlContent) {
			listener.exitHtmlContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlContent) {
			return visitor.visitHtmlContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlTagStartNameContext extends ParserRuleContext {
	public _htmlTagName!: HtmlTagNameContext;
	public htmlTagName(): HtmlTagNameContext {
		return this.getRuleContext(0, HtmlTagNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlTagStartName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlTagStartName) {
			listener.enterHtmlTagStartName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlTagStartName) {
			listener.exitHtmlTagStartName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlTagStartName) {
			return visitor.visitHtmlTagStartName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlTagClosingNameContext extends ParserRuleContext {
	public _htmlTagName!: HtmlTagNameContext;
	public htmlTagName(): HtmlTagNameContext {
		return this.getRuleContext(0, HtmlTagNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlTagClosingName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlTagClosingName) {
			listener.enterHtmlTagClosingName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlTagClosingName) {
			listener.exitHtmlTagClosingName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlTagClosingName) {
			return visitor.visitHtmlTagClosingName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlTagNameContext extends ParserRuleContext {
	public TagName(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TagName, 0); }
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlTagName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlTagName) {
			listener.enterHtmlTagName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlTagName) {
			listener.exitHtmlTagName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlTagName) {
			return visitor.visitHtmlTagName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlAttributeContext extends ParserRuleContext {
	public htmlAttributeName(): HtmlAttributeNameContext {
		return this.getRuleContext(0, HtmlAttributeNameContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public htmlAttributeValue(): HtmlAttributeValueContext | undefined {
		return this.tryGetRuleContext(0, HtmlAttributeValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlAttribute; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlAttribute) {
			listener.enterHtmlAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlAttribute) {
			listener.exitHtmlAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlAttribute) {
			return visitor.visitHtmlAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlAttributeNameContext extends ParserRuleContext {
	public TagName(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TagName, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Identifier);
		} else {
			return this.getToken(JavaScriptParser.Identifier, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Minus);
		} else {
			return this.getToken(JavaScriptParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlAttributeName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlAttributeName) {
			listener.enterHtmlAttributeName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlAttributeName) {
			listener.exitHtmlAttributeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlAttributeName) {
			return visitor.visitHtmlAttributeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlChardataContext extends ParserRuleContext {
	public LessThan(): TerminalNode[];
	public LessThan(i: number): TerminalNode;
	public LessThan(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.LessThan);
		} else {
			return this.getToken(JavaScriptParser.LessThan, i);
		}
	}
	public OpenBrace(): TerminalNode[];
	public OpenBrace(i: number): TerminalNode;
	public OpenBrace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.OpenBrace);
		} else {
			return this.getToken(JavaScriptParser.OpenBrace, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlChardata; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlChardata) {
			listener.enterHtmlChardata(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlChardata) {
			listener.exitHtmlChardata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlChardata) {
			return visitor.visitHtmlChardata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlAttributeValueContext extends ParserRuleContext {
	public AttributeValue(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.AttributeValue, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	public objectExpressionSequence(): ObjectExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ObjectExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_htmlAttributeValue; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterHtmlAttributeValue) {
			listener.enterHtmlAttributeValue(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitHtmlAttributeValue) {
			listener.exitHtmlAttributeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitHtmlAttributeValue) {
			return visitor.visitHtmlAttributeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_assignable; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignable) {
			listener.enterAssignable(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignable) {
			listener.exitAssignable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignable) {
			return visitor.visitAssignable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public propertyAssignment(): PropertyAssignmentContext[];
	public propertyAssignment(i: number): PropertyAssignmentContext;
	public propertyAssignment(i?: number): PropertyAssignmentContext | PropertyAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getRuleContext(i, PropertyAssignmentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_objectLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterObjectLiteral) {
			listener.enterObjectLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitObjectLiteral) {
			listener.exitObjectLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) {
			return visitor.visitObjectLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectExpressionSequenceContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_objectExpressionSequence; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterObjectExpressionSequence) {
			listener.enterObjectExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitObjectExpressionSequence) {
			listener.exitObjectExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectExpressionSequence) {
			return visitor.visitObjectExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnoymousFunctionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_anoymousFunction; }
	public copyFrom(ctx: AnoymousFunctionContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionDeclContext extends AnoymousFunctionContext {
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getRuleContext(0, FunctionDeclarationContext);
	}
	constructor(ctx: AnoymousFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnoymousFunctionDeclContext extends AnoymousFunctionContext {
	public Function_(): TerminalNode { return this.getToken(JavaScriptParser.Function_, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(ctx: AnoymousFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAnoymousFunctionDecl) {
			listener.enterAnoymousFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAnoymousFunctionDecl) {
			listener.exitAnoymousFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAnoymousFunctionDecl) {
			return visitor.visitAnoymousFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrowFunctionContext extends AnoymousFunctionContext {
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		return this.getRuleContext(0, ArrowFunctionParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(JavaScriptParser.ARROW, 0); }
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		return this.getRuleContext(0, ArrowFunctionBodyContext);
	}
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	constructor(ctx: AnoymousFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunction) {
			listener.enterArrowFunction(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunction) {
			listener.exitArrowFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunction) {
			return visitor.visitArrowFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionParametersContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseParen, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrowFunctionParameters; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunctionParameters) {
			listener.enterArrowFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunctionParameters) {
			listener.exitArrowFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionParameters) {
			return visitor.visitArrowFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionBodyContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrowFunctionBody; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunctionBody) {
			listener.enterArrowFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunctionBody) {
			listener.exitArrowFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionBody) {
			return visitor.visitArrowFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.MultiplyAssign, 0); }
	public DivideAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.DivideAssign, 0); }
	public ModulusAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.ModulusAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.MinusAssign, 0); }
	public LeftShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LeftShiftArithmeticAssign, 0); }
	public RightShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftArithmeticAssign, 0); }
	public RightShiftLogicalAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftLogicalAssign, 0); }
	public BitAndAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BitAndAssign, 0); }
	public BitXorAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BitXorAssign, 0); }
	public BitOrAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BitOrAssign, 0); }
	public PowerAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.PowerAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	public templateStringLiteral(): TemplateStringLiteralContext | undefined {
		return this.tryGetRuleContext(0, TemplateStringLiteralContext);
	}
	public RegularExpressionLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RegularExpressionLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public bigintLiteral(): BigintLiteralContext | undefined {
		return this.tryGetRuleContext(0, BigintLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_literal; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateStringLiteralContext extends ParserRuleContext {
	public BackTick(): TerminalNode[];
	public BackTick(i: number): TerminalNode;
	public BackTick(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.BackTick);
		} else {
			return this.getToken(JavaScriptParser.BackTick, i);
		}
	}
	public templateStringAtom(): TemplateStringAtomContext[];
	public templateStringAtom(i: number): TemplateStringAtomContext;
	public templateStringAtom(i?: number): TemplateStringAtomContext | TemplateStringAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateStringAtomContext);
		} else {
			return this.getRuleContext(i, TemplateStringAtomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_templateStringLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTemplateStringLiteral) {
			listener.enterTemplateStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTemplateStringLiteral) {
			listener.exitTemplateStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringLiteral) {
			return visitor.visitTemplateStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateStringAtomContext extends ParserRuleContext {
	public TemplateStringAtom(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TemplateStringAtom, 0); }
	public TemplateStringStartExpression(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TemplateStringStartExpression, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public TemplateCloseBrace(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TemplateCloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_templateStringAtom; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTemplateStringAtom) {
			listener.enterTemplateStringAtom(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTemplateStringAtom) {
			listener.exitTemplateStringAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringAtom) {
			return visitor.visitTemplateStringAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.DecimalLiteral, 0); }
	public HexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.HexIntegerLiteral, 0); }
	public OctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral, 0); }
	public OctalIntegerLiteral2(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral2, 0); }
	public BinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BigintLiteralContext extends ParserRuleContext {
	public BigDecimalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigDecimalIntegerLiteral, 0); }
	public BigHexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigHexIntegerLiteral, 0); }
	public BigOctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigOctalIntegerLiteral, 0); }
	public BigBinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigBinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_bigintLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBigintLiteral) {
			listener.enterBigintLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBigintLiteral) {
			listener.exitBigintLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBigintLiteral) {
			return visitor.visitBigintLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_getter; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterGetter) {
			listener.enterGetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitGetter) {
			listener.exitGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitGetter) {
			return visitor.visitGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_setter; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSetter) {
			listener.enterSetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSetter) {
			listener.exitSetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSetter) {
			return visitor.visitSetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_identifierName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifierName) {
			listener.enterIdentifierName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifierName) {
			listener.exitIdentifierName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierName) {
			return visitor.visitIdentifierName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public NonStrictLet(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NonStrictLet, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_identifier; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Break, 0); }
	public Do(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Do, 0); }
	public Instanceof(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Instanceof, 0); }
	public Typeof(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Typeof, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Case, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Else, 0); }
	public New(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.New, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Var, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Catch, 0); }
	public Finally(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Finally, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Return, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Void, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Continue, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.For, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Switch, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.While, 0); }
	public Debugger(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Debugger, 0); }
	public Function_(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Function_, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.This, 0); }
	public With(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.With, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Default, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.If, 0); }
	public Throw(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Throw, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Delete, 0); }
	public In(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.In, 0); }
	public Try(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Try, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Class, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Enum, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Extends, 0); }
	public Super(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Super, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Const, 0); }
	public Export(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Export, 0); }
	public Import(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Import, 0); }
	public Implements(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Implements, 0); }
	public let_(): Let_Context | undefined {
		return this.tryGetRuleContext(0, Let_Context);
	}
	public Private(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Private, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Public, 0); }
	public Interface(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Interface, 0); }
	public Package(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Package, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Protected, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Static, 0); }
	public Yield(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Yield, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Await(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Await, 0); }
	public From(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.From, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_keyword; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Let_Context extends ParserRuleContext {
	public NonStrictLet(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NonStrictLet, 0); }
	public StrictLet(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StrictLet, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_let_; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLet_) {
			listener.enterLet_(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLet_) {
			listener.exitLet_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLet_) {
			return visitor.visitLet_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.SemiColon, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_eos; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


