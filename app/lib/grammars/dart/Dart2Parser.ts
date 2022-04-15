// Generated from ./lib/grammars/dart/Dart2.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { Dart2Listener } from "./Dart2Listener";
import { Dart2Visitor } from "./Dart2Visitor";


export class Dart2Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly T__106 = 107;
	public static readonly T__107 = 108;
	public static readonly T__108 = 109;
	public static readonly T__109 = 110;
	public static readonly T__110 = 111;
	public static readonly T__111 = 112;
	public static readonly T__112 = 113;
	public static readonly T__113 = 114;
	public static readonly T__114 = 115;
	public static readonly T__115 = 116;
	public static readonly T__116 = 117;
	public static readonly WHITESPACE = 118;
	public static readonly NUMBER = 119;
	public static readonly HEX_NUMBER = 120;
	public static readonly SingleLineString = 121;
	public static readonly MultiLineString = 122;
	public static readonly NEWLINE = 123;
	public static readonly IDENTIFIER = 124;
	public static readonly SINGLE_LINE_COMMENT = 125;
	public static readonly MULTI_LINE_COMMENT = 126;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_variableDeclaration = 1;
	public static readonly RULE_declaredIdentifier = 2;
	public static readonly RULE_finalConstVarOrType = 3;
	public static readonly RULE_varOrType = 4;
	public static readonly RULE_initializedVariableDeclaration = 5;
	public static readonly RULE_initializedIdentifier = 6;
	public static readonly RULE_initializedIdentifierList = 7;
	public static readonly RULE_functionSignature = 8;
	public static readonly RULE_formalParameterPart = 9;
	public static readonly RULE_returnType = 10;
	public static readonly RULE_functionBody = 11;
	public static readonly RULE_block = 12;
	public static readonly RULE_formalParameterList = 13;
	public static readonly RULE_normalFormalParameters = 14;
	public static readonly RULE_optionalFormalParameters = 15;
	public static readonly RULE_optionalPositionalFormalParameters = 16;
	public static readonly RULE_namedFormalParameters = 17;
	public static readonly RULE_normalFormalParameter = 18;
	public static readonly RULE_functionFormalParameter = 19;
	public static readonly RULE_simpleFormalParameter = 20;
	public static readonly RULE_fieldFormalParameter = 21;
	public static readonly RULE_defaultFormalParameter = 22;
	public static readonly RULE_defaultNamedParameter = 23;
	public static readonly RULE_classDefinition = 24;
	public static readonly RULE_mixins = 25;
	public static readonly RULE_classMemberDefinition = 26;
	public static readonly RULE_methodSignature = 27;
	public static readonly RULE_declaration = 28;
	public static readonly RULE_staticFinalDeclarationList = 29;
	public static readonly RULE_staticFinalDeclaration = 30;
	public static readonly RULE_operatorSignature = 31;
	public static readonly RULE_operator_ = 32;
	public static readonly RULE_binaryOperator = 33;
	public static readonly RULE_getterSignature = 34;
	public static readonly RULE_setterSignature = 35;
	public static readonly RULE_constructorSignature = 36;
	public static readonly RULE_redirection = 37;
	public static readonly RULE_initializers = 38;
	public static readonly RULE_initializerListEntry = 39;
	public static readonly RULE_fieldInitializer = 40;
	public static readonly RULE_factoryConstructorSignature = 41;
	public static readonly RULE_redirectingFactoryConstructorSignature = 42;
	public static readonly RULE_constantConstructorSignature = 43;
	public static readonly RULE_superclass = 44;
	public static readonly RULE_interfaces = 45;
	public static readonly RULE_mixinApplicationClass = 46;
	public static readonly RULE_mixinApplication = 47;
	public static readonly RULE_enumType = 48;
	public static readonly RULE_enumEntry = 49;
	public static readonly RULE_typeParameter = 50;
	public static readonly RULE_typeParameters = 51;
	public static readonly RULE_metadata = 52;
	public static readonly RULE_expression = 53;
	public static readonly RULE_expressionWithoutCascade = 54;
	public static readonly RULE_expressionList = 55;
	public static readonly RULE_primary = 56;
	public static readonly RULE_literal = 57;
	public static readonly RULE_nullLiteral = 58;
	public static readonly RULE_numericLiteral = 59;
	public static readonly RULE_booleanLiteral = 60;
	public static readonly RULE_stringLiteral = 61;
	public static readonly RULE_stringInterpolation = 62;
	public static readonly RULE_symbolLiteral = 63;
	public static readonly RULE_listLiteral = 64;
	public static readonly RULE_mapLiteral = 65;
	public static readonly RULE_mapLiteralEntry = 66;
	public static readonly RULE_throwExpression = 67;
	public static readonly RULE_throwExpressionWithoutCascade = 68;
	public static readonly RULE_functionExpression = 69;
	public static readonly RULE_thisExpression = 70;
	public static readonly RULE_nayaExpression = 71;
	public static readonly RULE_constObjectExpression = 72;
	public static readonly RULE_arguments = 73;
	public static readonly RULE_argumentList = 74;
	public static readonly RULE_namedArgument = 75;
	public static readonly RULE_cascadeSection = 76;
	public static readonly RULE_cascadeSelector = 77;
	public static readonly RULE_argumentPart = 78;
	public static readonly RULE_assignmentOperator = 79;
	public static readonly RULE_compoundAssignmentOperator = 80;
	public static readonly RULE_conditionalExpression = 81;
	public static readonly RULE_ifNullExpression = 82;
	public static readonly RULE_logicalOrExpression = 83;
	public static readonly RULE_logicalAndExpression = 84;
	public static readonly RULE_equalityExpression = 85;
	public static readonly RULE_equalityOperator = 86;
	public static readonly RULE_relationalExpression = 87;
	public static readonly RULE_relationalOperator = 88;
	public static readonly RULE_bitwiseOrExpression = 89;
	public static readonly RULE_bitwiseXorExpression = 90;
	public static readonly RULE_bitwiseAndExpression = 91;
	public static readonly RULE_bitwiseOperator = 92;
	public static readonly RULE_shiftExpression = 93;
	public static readonly RULE_shiftOperator = 94;
	public static readonly RULE_additiveExpression = 95;
	public static readonly RULE_additiveOperator = 96;
	public static readonly RULE_multiplicativeExpression = 97;
	public static readonly RULE_multiplicativeOperator = 98;
	public static readonly RULE_unaryExpression = 99;
	public static readonly RULE_prefixOperator = 100;
	public static readonly RULE_minusOperator = 101;
	public static readonly RULE_negationOperator = 102;
	public static readonly RULE_tildeOperator = 103;
	public static readonly RULE_awaitExpression = 104;
	public static readonly RULE_postfixExpression = 105;
	public static readonly RULE_postfixOperator = 106;
	public static readonly RULE_selector = 107;
	public static readonly RULE_incrementOperator = 108;
	public static readonly RULE_assignableExpression = 109;
	public static readonly RULE_unconditionalAssignableSelector = 110;
	public static readonly RULE_assignableSelector = 111;
	public static readonly RULE_identifier = 112;
	public static readonly RULE_qualified = 113;
	public static readonly RULE_typeTest = 114;
	public static readonly RULE_isOperator = 115;
	public static readonly RULE_typeCast = 116;
	public static readonly RULE_asOperator = 117;
	public static readonly RULE_statements = 118;
	public static readonly RULE_statement = 119;
	public static readonly RULE_nonLabledStatment = 120;
	public static readonly RULE_expressionStatement = 121;
	public static readonly RULE_localVariableDeclaration = 122;
	public static readonly RULE_localFunctionDeclaration = 123;
	public static readonly RULE_ifStatement = 124;
	public static readonly RULE_forStatement = 125;
	public static readonly RULE_forLoopParts = 126;
	public static readonly RULE_forInitializerStatement = 127;
	public static readonly RULE_whileStatement = 128;
	public static readonly RULE_doStatement = 129;
	public static readonly RULE_switchStatement = 130;
	public static readonly RULE_switchCase = 131;
	public static readonly RULE_defaultCase = 132;
	public static readonly RULE_rethrowStatment = 133;
	public static readonly RULE_tryStatement = 134;
	public static readonly RULE_onPart = 135;
	public static readonly RULE_catchPart = 136;
	public static readonly RULE_finallyPart = 137;
	public static readonly RULE_returnStatement = 138;
	public static readonly RULE_label = 139;
	public static readonly RULE_breakStatement = 140;
	public static readonly RULE_continueStatement = 141;
	public static readonly RULE_yieldStatement = 142;
	public static readonly RULE_yieldEachStatement = 143;
	public static readonly RULE_assertStatement = 144;
	public static readonly RULE_assertion = 145;
	public static readonly RULE_topLevelDefinition = 146;
	public static readonly RULE_getOrSet = 147;
	public static readonly RULE_libraryDefinition = 148;
	public static readonly RULE_scriptTag = 149;
	public static readonly RULE_libraryName = 150;
	public static readonly RULE_importOrExport = 151;
	public static readonly RULE_dottedIdentifierList = 152;
	public static readonly RULE_libraryimport = 153;
	public static readonly RULE_importSpecification = 154;
	public static readonly RULE_combinator = 155;
	public static readonly RULE_identifierList = 156;
	public static readonly RULE_libraryExport = 157;
	public static readonly RULE_partDirective = 158;
	public static readonly RULE_partHeader = 159;
	public static readonly RULE_partDeclaration = 160;
	public static readonly RULE_uri = 161;
	public static readonly RULE_configurableUri = 162;
	public static readonly RULE_configurationUri = 163;
	public static readonly RULE_uriTest = 164;
	public static readonly RULE_dtype = 165;
	public static readonly RULE_typeName = 166;
	public static readonly RULE_typeArguments = 167;
	public static readonly RULE_typeList = 168;
	public static readonly RULE_typeAlias = 169;
	public static readonly RULE_typeAliasBody = 170;
	public static readonly RULE_functionTypeAlias = 171;
	public static readonly RULE_functionPrefix = 172;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "variableDeclaration", "declaredIdentifier", "finalConstVarOrType", 
		"varOrType", "initializedVariableDeclaration", "initializedIdentifier", 
		"initializedIdentifierList", "functionSignature", "formalParameterPart", 
		"returnType", "functionBody", "block", "formalParameterList", "normalFormalParameters", 
		"optionalFormalParameters", "optionalPositionalFormalParameters", "namedFormalParameters", 
		"normalFormalParameter", "functionFormalParameter", "simpleFormalParameter", 
		"fieldFormalParameter", "defaultFormalParameter", "defaultNamedParameter", 
		"classDefinition", "mixins", "classMemberDefinition", "methodSignature", 
		"declaration", "staticFinalDeclarationList", "staticFinalDeclaration", 
		"operatorSignature", "operator_", "binaryOperator", "getterSignature", 
		"setterSignature", "constructorSignature", "redirection", "initializers", 
		"initializerListEntry", "fieldInitializer", "factoryConstructorSignature", 
		"redirectingFactoryConstructorSignature", "constantConstructorSignature", 
		"superclass", "interfaces", "mixinApplicationClass", "mixinApplication", 
		"enumType", "enumEntry", "typeParameter", "typeParameters", "metadata", 
		"expression", "expressionWithoutCascade", "expressionList", "primary", 
		"literal", "nullLiteral", "numericLiteral", "booleanLiteral", "stringLiteral", 
		"stringInterpolation", "symbolLiteral", "listLiteral", "mapLiteral", "mapLiteralEntry", 
		"throwExpression", "throwExpressionWithoutCascade", "functionExpression", 
		"thisExpression", "nayaExpression", "constObjectExpression", "arguments", 
		"argumentList", "namedArgument", "cascadeSection", "cascadeSelector", 
		"argumentPart", "assignmentOperator", "compoundAssignmentOperator", "conditionalExpression", 
		"ifNullExpression", "logicalOrExpression", "logicalAndExpression", "equalityExpression", 
		"equalityOperator", "relationalExpression", "relationalOperator", "bitwiseOrExpression", 
		"bitwiseXorExpression", "bitwiseAndExpression", "bitwiseOperator", "shiftExpression", 
		"shiftOperator", "additiveExpression", "additiveOperator", "multiplicativeExpression", 
		"multiplicativeOperator", "unaryExpression", "prefixOperator", "minusOperator", 
		"negationOperator", "tildeOperator", "awaitExpression", "postfixExpression", 
		"postfixOperator", "selector", "incrementOperator", "assignableExpression", 
		"unconditionalAssignableSelector", "assignableSelector", "identifier", 
		"qualified", "typeTest", "isOperator", "typeCast", "asOperator", "statements", 
		"statement", "nonLabledStatment", "expressionStatement", "localVariableDeclaration", 
		"localFunctionDeclaration", "ifStatement", "forStatement", "forLoopParts", 
		"forInitializerStatement", "whileStatement", "doStatement", "switchStatement", 
		"switchCase", "defaultCase", "rethrowStatment", "tryStatement", "onPart", 
		"catchPart", "finallyPart", "returnStatement", "label", "breakStatement", 
		"continueStatement", "yieldStatement", "yieldEachStatement", "assertStatement", 
		"assertion", "topLevelDefinition", "getOrSet", "libraryDefinition", "scriptTag", 
		"libraryName", "importOrExport", "dottedIdentifierList", "libraryimport", 
		"importSpecification", "combinator", "identifierList", "libraryExport", 
		"partDirective", "partHeader", "partDeclaration", "uri", "configurableUri", 
		"configurationUri", "uriTest", "dtype", "typeName", "typeArguments", "typeList", 
		"typeAlias", "typeAliasBody", "functionTypeAlias", "functionPrefix",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'final'", "'const'", "'var'", "'='", "'void'", "'async'", 
		"'=>'", "';'", "'async*'", "'sync*'", "'{'", "'}'", "'('", "')'", "'['", 
		"']'", "'covariant'", "'this'", "'.'", "':'", "'abstract'", "'class'", 
		"'with'", "'static'", "'external'", "'operator'", "'~'", "'[]'", "'[]='", 
		"'=='", "'get'", "'set'", "'super'", "'factory'", "'extends'", "'implements'", 
		"'enum'", "'<'", "'>'", "'@'", "'null'", "'true'", "'false'", "'$'", "'${'", 
		"'#'", "'throw'", "'new'", "'..'", "'*='", "'/='", "'~/='", "'%='", "'+='", 
		"'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'??='", "'?'", "'??'", 
		"'||'", "'&&'", "'!='", "'>='", "'<='", "'|'", "'^'", "'&'", "'<<'", "'>>'", 
		"'>>>'", "'+'", "'-'", "'*'", "'/'", "'%'", "'~/'", "'!'", "'await'", 
		"'++'", "'--'", "'?.'", "'is'", "'as'", "'if'", "'else'", "'for'", "'in'", 
		"'while'", "'do'", "'switch'", "'case'", "'default'", "'rethrow'", "'try'", 
		"'on'", "'catch'", "'finally'", "'return'", "'break'", "'continue'", "'yield'", 
		"'yield*'", "'assert'", "'#!'", "'library'", "'import'", "'show'", "'hide'", 
		"'export'", "'part'", "'of'", "'typedef'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "WHITESPACE", 
		"NUMBER", "HEX_NUMBER", "SingleLineString", "MultiLineString", "NEWLINE", 
		"IDENTIFIER", "SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Dart2Parser._LITERAL_NAMES, Dart2Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Dart2Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Dart2.g4"; }

	// @Override
	public get ruleNames(): string[] { return Dart2Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Dart2Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Dart2Parser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Dart2Parser.RULE_compilationUnit);
		try {
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 346;
				this.libraryDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 347;
				this.partDeclaration();
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Dart2Parser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.declaredIdentifier();
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__0) {
				{
				{
				this.state = 351;
				this.match(Dart2Parser.T__0);
				this.state = 352;
				this.identifier();
				}
				}
				this.state = 357;
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
	public declaredIdentifier(): DeclaredIdentifierContext {
		let _localctx: DeclaredIdentifierContext = new DeclaredIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Dart2Parser.RULE_declaredIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.metadata();
			this.state = 359;
			this.finalConstVarOrType();
			this.state = 360;
			this.identifier();
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
	public finalConstVarOrType(): FinalConstVarOrTypeContext {
		let _localctx: FinalConstVarOrTypeContext = new FinalConstVarOrTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Dart2Parser.RULE_finalConstVarOrType);
		try {
			this.state = 371;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 362;
				this.match(Dart2Parser.T__1);
				this.state = 364;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 363;
					this.dtype();
					}
					break;
				}
				}
				break;
			case Dart2Parser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 366;
				this.match(Dart2Parser.T__2);
				this.state = 368;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 367;
					this.dtype();
					}
					break;
				}
				}
				break;
			case Dart2Parser.T__3:
			case Dart2Parser.T__5:
			case Dart2Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 370;
				this.varOrType();
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
	public varOrType(): VarOrTypeContext {
		let _localctx: VarOrTypeContext = new VarOrTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Dart2Parser.RULE_varOrType);
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.match(Dart2Parser.T__3);
				}
				break;
			case Dart2Parser.T__5:
			case Dart2Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.dtype();
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
	public initializedVariableDeclaration(): InitializedVariableDeclarationContext {
		let _localctx: InitializedVariableDeclarationContext = new InitializedVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Dart2Parser.RULE_initializedVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.declaredIdentifier();
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__4) {
				{
				this.state = 378;
				this.match(Dart2Parser.T__4);
				this.state = 379;
				this.expression();
				}
			}

			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__0) {
				{
				{
				this.state = 382;
				this.match(Dart2Parser.T__0);
				this.state = 383;
				this.initializedIdentifier();
				}
				}
				this.state = 388;
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
	public initializedIdentifier(): InitializedIdentifierContext {
		let _localctx: InitializedIdentifierContext = new InitializedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Dart2Parser.RULE_initializedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.identifier();
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__4) {
				{
				this.state = 390;
				this.match(Dart2Parser.T__4);
				this.state = 391;
				this.expression();
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
	public initializedIdentifierList(): InitializedIdentifierListContext {
		let _localctx: InitializedIdentifierListContext = new InitializedIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Dart2Parser.RULE_initializedIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.initializedIdentifier();
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__0) {
				{
				{
				this.state = 395;
				this.match(Dart2Parser.T__0);
				this.state = 396;
				this.initializedIdentifier();
				}
				}
				this.state = 401;
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
	public functionSignature(): FunctionSignatureContext {
		let _localctx: FunctionSignatureContext = new FunctionSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Dart2Parser.RULE_functionSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.metadata();
			this.state = 404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 403;
				this.returnType();
				}
				break;
			}
			this.state = 406;
			this.identifier();
			this.state = 407;
			this.formalParameterPart();
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
	public formalParameterPart(): FormalParameterPartContext {
		let _localctx: FormalParameterPartContext = new FormalParameterPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Dart2Parser.RULE_formalParameterPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__38) {
				{
				this.state = 409;
				this.typeParameters();
				}
			}

			this.state = 412;
			this.formalParameterList();
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
	public returnType(): ReturnTypeContext {
		let _localctx: ReturnTypeContext = new ReturnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Dart2Parser.RULE_returnType);
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 414;
				this.match(Dart2Parser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 415;
				this.dtype();
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
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Dart2Parser.RULE_functionBody);
		let _la: number;
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__6) {
					{
					this.state = 418;
					this.match(Dart2Parser.T__6);
					}
				}

				this.state = 421;
				this.match(Dart2Parser.T__7);
				this.state = 422;
				this.expression();
				this.state = 423;
				this.match(Dart2Parser.T__8);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__6) | (1 << Dart2Parser.T__9) | (1 << Dart2Parser.T__10))) !== 0)) {
					{
					this.state = 425;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__6) | (1 << Dart2Parser.T__9) | (1 << Dart2Parser.T__10))) !== 0))) {
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

				this.state = 428;
				this.block();
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
		this.enterRule(_localctx, 24, Dart2Parser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(Dart2Parser.T__11);
			this.state = 432;
			this.statements();
			this.state = 433;
			this.match(Dart2Parser.T__12);
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
		this.enterRule(_localctx, 26, Dart2Parser.RULE_formalParameterList);
		let _la: number;
		try {
			this.state = 453;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 435;
				this.match(Dart2Parser.T__13);
				this.state = 436;
				this.match(Dart2Parser.T__14);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 437;
				this.match(Dart2Parser.T__13);
				this.state = 438;
				this.normalFormalParameters();
				this.state = 439;
				this.match(Dart2Parser.T__14);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 441;
				this.match(Dart2Parser.T__13);
				this.state = 442;
				this.normalFormalParameters();
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__0) {
					{
					this.state = 443;
					this.match(Dart2Parser.T__0);
					this.state = 444;
					this.optionalFormalParameters();
					}
				}

				this.state = 447;
				this.match(Dart2Parser.T__14);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 449;
				this.match(Dart2Parser.T__13);
				this.state = 450;
				this.optionalFormalParameters();
				this.state = 451;
				this.match(Dart2Parser.T__14);
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
	public normalFormalParameters(): NormalFormalParametersContext {
		let _localctx: NormalFormalParametersContext = new NormalFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Dart2Parser.RULE_normalFormalParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.normalFormalParameter();
			this.state = 460;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 456;
					this.match(Dart2Parser.T__0);
					this.state = 457;
					this.normalFormalParameter();
					}
					}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
	public optionalFormalParameters(): OptionalFormalParametersContext {
		let _localctx: OptionalFormalParametersContext = new OptionalFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Dart2Parser.RULE_optionalFormalParameters);
		try {
			this.state = 465;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 463;
				this.optionalPositionalFormalParameters();
				}
				break;
			case Dart2Parser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 464;
				this.namedFormalParameters();
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
	public optionalPositionalFormalParameters(): OptionalPositionalFormalParametersContext {
		let _localctx: OptionalPositionalFormalParametersContext = new OptionalPositionalFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Dart2Parser.RULE_optionalPositionalFormalParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.match(Dart2Parser.T__15);
			this.state = 468;
			this.defaultFormalParameter();
			this.state = 473;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 469;
					this.match(Dart2Parser.T__0);
					this.state = 470;
					this.defaultFormalParameter();
					}
					}
				}
				this.state = 475;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__0) {
				{
				this.state = 476;
				this.match(Dart2Parser.T__0);
				}
			}

			this.state = 479;
			this.match(Dart2Parser.T__16);
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
	public namedFormalParameters(): NamedFormalParametersContext {
		let _localctx: NamedFormalParametersContext = new NamedFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Dart2Parser.RULE_namedFormalParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(Dart2Parser.T__11);
			this.state = 482;
			this.defaultNamedParameter();
			this.state = 487;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 483;
					this.match(Dart2Parser.T__0);
					this.state = 484;
					this.defaultNamedParameter();
					}
					}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__0) {
				{
				this.state = 490;
				this.match(Dart2Parser.T__0);
				}
			}

			this.state = 493;
			this.match(Dart2Parser.T__12);
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
	public normalFormalParameter(): NormalFormalParameterContext {
		let _localctx: NormalFormalParameterContext = new NormalFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Dart2Parser.RULE_normalFormalParameter);
		try {
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this.functionFormalParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 496;
				this.fieldFormalParameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
				this.simpleFormalParameter();
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
	public functionFormalParameter(): FunctionFormalParameterContext {
		let _localctx: FunctionFormalParameterContext = new FunctionFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Dart2Parser.RULE_functionFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.metadata();
			this.state = 502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__17) {
				{
				this.state = 501;
				this.match(Dart2Parser.T__17);
				}
			}

			this.state = 505;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 504;
				this.returnType();
				}
				break;
			}
			this.state = 507;
			this.identifier();
			this.state = 508;
			this.formalParameterPart();
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
	public simpleFormalParameter(): SimpleFormalParameterContext {
		let _localctx: SimpleFormalParameterContext = new SimpleFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Dart2Parser.RULE_simpleFormalParameter);
		let _la: number;
		try {
			this.state = 517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 510;
				this.declaredIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 511;
				this.metadata();
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__17) {
					{
					this.state = 512;
					this.match(Dart2Parser.T__17);
					}
				}

				this.state = 515;
				this.identifier();
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
	public fieldFormalParameter(): FieldFormalParameterContext {
		let _localctx: FieldFormalParameterContext = new FieldFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Dart2Parser.RULE_fieldFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this.metadata();
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__5))) !== 0) || _la === Dart2Parser.IDENTIFIER) {
				{
				this.state = 520;
				this.finalConstVarOrType();
				}
			}

			this.state = 523;
			this.match(Dart2Parser.T__18);
			this.state = 524;
			this.match(Dart2Parser.T__19);
			this.state = 525;
			this.identifier();
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__13 || _la === Dart2Parser.T__38) {
				{
				this.state = 526;
				this.formalParameterPart();
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
	public defaultFormalParameter(): DefaultFormalParameterContext {
		let _localctx: DefaultFormalParameterContext = new DefaultFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Dart2Parser.RULE_defaultFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.normalFormalParameter();
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__4) {
				{
				this.state = 530;
				this.match(Dart2Parser.T__4);
				this.state = 531;
				this.expression();
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
	public defaultNamedParameter(): DefaultNamedParameterContext {
		let _localctx: DefaultNamedParameterContext = new DefaultNamedParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Dart2Parser.RULE_defaultNamedParameter);
		let _la: number;
		try {
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 534;
				this.normalFormalParameter();
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__4) {
					{
					this.state = 535;
					this.match(Dart2Parser.T__4);
					this.state = 536;
					this.expression();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 539;
				this.normalFormalParameter();
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__20) {
					{
					this.state = 540;
					this.match(Dart2Parser.T__20);
					this.state = 541;
					this.expression();
					}
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
	// @RuleVersion(0)
	public classDefinition(): ClassDefinitionContext {
		let _localctx: ClassDefinitionContext = new ClassDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Dart2Parser.RULE_classDefinition);
		let _la: number;
		try {
			this.state = 582;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 546;
				this.metadata();
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__21) {
					{
					this.state = 547;
					this.match(Dart2Parser.T__21);
					}
				}

				this.state = 550;
				this.match(Dart2Parser.T__22);
				this.state = 551;
				this.identifier();
				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__38) {
					{
					this.state = 552;
					this.typeParameters();
					}
				}

				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__35) {
					{
					this.state = 555;
					this.superclass();
					}
				}

				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__23) {
					{
					this.state = 558;
					this.mixins();
					}
				}

				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__36) {
					{
					this.state = 561;
					this.interfaces();
					}
				}

				this.state = 564;
				this.match(Dart2Parser.T__11);
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__5) | (1 << Dart2Parser.T__17) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__21) | (1 << Dart2Parser.T__22) | (1 << Dart2Parser.T__24) | (1 << Dart2Parser.T__25) | (1 << Dart2Parser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Dart2Parser.T__31 - 32)) | (1 << (Dart2Parser.T__32 - 32)) | (1 << (Dart2Parser.T__34 - 32)) | (1 << (Dart2Parser.T__37 - 32)) | (1 << (Dart2Parser.T__40 - 32)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (Dart2Parser.T__109 - 110)) | (1 << (Dart2Parser.T__110 - 110)) | (1 << (Dart2Parser.T__113 - 110)) | (1 << (Dart2Parser.T__114 - 110)) | (1 << (Dart2Parser.T__116 - 110)) | (1 << (Dart2Parser.IDENTIFIER - 110)))) !== 0)) {
					{
					{
					this.state = 565;
					this.metadata();
					this.state = 566;
					this.classMemberDefinition();
					}
					}
					this.state = 572;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 573;
				this.match(Dart2Parser.T__12);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 575;
				this.metadata();
				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__21) {
					{
					this.state = 576;
					this.match(Dart2Parser.T__21);
					}
				}

				this.state = 579;
				this.match(Dart2Parser.T__22);
				this.state = 580;
				this.mixinApplicationClass();
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
	public mixins(): MixinsContext {
		let _localctx: MixinsContext = new MixinsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Dart2Parser.RULE_mixins);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.match(Dart2Parser.T__23);
			this.state = 585;
			this.typeList();
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
	public classMemberDefinition(): ClassMemberDefinitionContext {
		let _localctx: ClassMemberDefinitionContext = new ClassMemberDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Dart2Parser.RULE_classMemberDefinition);
		try {
			this.state = 593;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 587;
				this.declaration();
				this.state = 588;
				this.match(Dart2Parser.T__8);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.methodSignature();
				this.state = 591;
				this.functionBody();
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
	public methodSignature(): MethodSignatureContext {
		let _localctx: MethodSignatureContext = new MethodSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Dart2Parser.RULE_methodSignature);
		let _la: number;
		try {
			this.state = 613;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 595;
				this.constructorSignature();
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__20) {
					{
					this.state = 596;
					this.initializers();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 599;
				this.factoryConstructorSignature();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 601;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 600;
					this.match(Dart2Parser.T__24);
					}
					break;
				}
				this.state = 603;
				this.functionSignature();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__24) {
					{
					this.state = 604;
					this.match(Dart2Parser.T__24);
					}
				}

				this.state = 607;
				this.getterSignature();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__24) {
					{
					this.state = 608;
					this.match(Dart2Parser.T__24);
					}
				}

				this.state = 611;
				this.setterSignature();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 612;
				this.operatorSignature();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Dart2Parser.RULE_declaration);
		let _la: number;
		try {
			this.state = 673;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 615;
				this.constantConstructorSignature();
				this.state = 618;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 616;
					this.redirection();
					}
					break;

				case 2:
					{
					this.state = 617;
					this.initializers();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 620;
				this.constructorSignature();
				this.state = 623;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 621;
					this.redirection();
					}
					break;

				case 2:
					{
					this.state = 622;
					this.initializers();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 625;
				this.match(Dart2Parser.T__25);
				this.state = 626;
				this.constantConstructorSignature();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 627;
				this.match(Dart2Parser.T__25);
				this.state = 628;
				this.constructorSignature();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__25) {
					{
					this.state = 629;
					this.match(Dart2Parser.T__25);
					this.state = 631;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Dart2Parser.T__24) {
						{
						this.state = 630;
						this.match(Dart2Parser.T__24);
						}
					}

					}
				}

				this.state = 635;
				this.getterSignature();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__25) {
					{
					this.state = 636;
					this.match(Dart2Parser.T__25);
					this.state = 638;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Dart2Parser.T__24) {
						{
						this.state = 637;
						this.match(Dart2Parser.T__24);
						}
					}

					}
				}

				this.state = 642;
				this.setterSignature();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__25) {
					{
					this.state = 643;
					this.match(Dart2Parser.T__25);
					}
				}

				this.state = 646;
				this.operatorSignature();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 651;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 647;
					this.match(Dart2Parser.T__25);
					this.state = 649;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
					case 1:
						{
						this.state = 648;
						this.match(Dart2Parser.T__24);
						}
						break;
					}
					}
					break;
				}
				this.state = 653;
				this.functionSignature();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 654;
				this.match(Dart2Parser.T__24);
				this.state = 655;
				_la = this._input.LA(1);
				if (!(_la === Dart2Parser.T__1 || _la === Dart2Parser.T__2)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 657;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 656;
					this.dtype();
					}
					break;
				}
				this.state = 659;
				this.staticFinalDeclarationList();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 660;
				this.match(Dart2Parser.T__1);
				this.state = 662;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 661;
					this.dtype();
					}
					break;
				}
				this.state = 664;
				this.initializedIdentifierList();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__17 || _la === Dart2Parser.T__24) {
					{
					this.state = 665;
					_la = this._input.LA(1);
					if (!(_la === Dart2Parser.T__17 || _la === Dart2Parser.T__24)) {
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

				this.state = 670;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Dart2Parser.T__3:
					{
					this.state = 668;
					this.match(Dart2Parser.T__3);
					}
					break;
				case Dart2Parser.T__5:
				case Dart2Parser.IDENTIFIER:
					{
					this.state = 669;
					this.dtype();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 672;
				this.initializedIdentifierList();
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
	public staticFinalDeclarationList(): StaticFinalDeclarationListContext {
		let _localctx: StaticFinalDeclarationListContext = new StaticFinalDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Dart2Parser.RULE_staticFinalDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this.staticFinalDeclaration();
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__0) {
				{
				{
				this.state = 676;
				this.match(Dart2Parser.T__0);
				this.state = 677;
				this.staticFinalDeclaration();
				}
				}
				this.state = 682;
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
	public staticFinalDeclaration(): StaticFinalDeclarationContext {
		let _localctx: StaticFinalDeclarationContext = new StaticFinalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Dart2Parser.RULE_staticFinalDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.identifier();
			this.state = 684;
			this.match(Dart2Parser.T__4);
			this.state = 685;
			this.expression();
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
	public operatorSignature(): OperatorSignatureContext {
		let _localctx: OperatorSignatureContext = new OperatorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Dart2Parser.RULE_operatorSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
				{
				this.state = 687;
				this.returnType();
				}
			}

			this.state = 690;
			this.match(Dart2Parser.T__26);
			this.state = 691;
			this.operator_();
			this.state = 692;
			this.formalParameterList();
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
	public operator_(): Operator_Context {
		let _localctx: Operator_Context = new Operator_Context(this._ctx, this.state);
		this.enterRule(_localctx, 64, Dart2Parser.RULE_operator_);
		try {
			this.state = 698;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__27:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 694;
				this.match(Dart2Parser.T__27);
				}
				break;
			case Dart2Parser.T__30:
			case Dart2Parser.T__38:
			case Dart2Parser.T__39:
			case Dart2Parser.T__67:
			case Dart2Parser.T__68:
			case Dart2Parser.T__69:
			case Dart2Parser.T__70:
			case Dart2Parser.T__71:
			case Dart2Parser.T__72:
			case Dart2Parser.T__73:
			case Dart2Parser.T__74:
			case Dart2Parser.T__75:
			case Dart2Parser.T__76:
			case Dart2Parser.T__77:
			case Dart2Parser.T__78:
			case Dart2Parser.T__79:
			case Dart2Parser.T__80:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 695;
				this.binaryOperator();
				}
				break;
			case Dart2Parser.T__28:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 696;
				this.match(Dart2Parser.T__28);
				}
				break;
			case Dart2Parser.T__29:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 697;
				this.match(Dart2Parser.T__29);
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
	public binaryOperator(): BinaryOperatorContext {
		let _localctx: BinaryOperatorContext = new BinaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Dart2Parser.RULE_binaryOperator);
		try {
			this.state = 706;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__77:
			case Dart2Parser.T__78:
			case Dart2Parser.T__79:
			case Dart2Parser.T__80:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 700;
				this.multiplicativeOperator();
				}
				break;
			case Dart2Parser.T__75:
			case Dart2Parser.T__76:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 701;
				this.additiveOperator();
				}
				break;
			case Dart2Parser.T__72:
			case Dart2Parser.T__73:
			case Dart2Parser.T__74:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 702;
				this.shiftOperator();
				}
				break;
			case Dart2Parser.T__38:
			case Dart2Parser.T__39:
			case Dart2Parser.T__67:
			case Dart2Parser.T__68:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 703;
				this.relationalOperator();
				}
				break;
			case Dart2Parser.T__30:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 704;
				this.match(Dart2Parser.T__30);
				}
				break;
			case Dart2Parser.T__69:
			case Dart2Parser.T__70:
			case Dart2Parser.T__71:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 705;
				this.bitwiseOperator();
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
	public getterSignature(): GetterSignatureContext {
		let _localctx: GetterSignatureContext = new GetterSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Dart2Parser.RULE_getterSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
				{
				this.state = 708;
				this.returnType();
				}
			}

			this.state = 711;
			this.match(Dart2Parser.T__31);
			this.state = 712;
			this.identifier();
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
	public setterSignature(): SetterSignatureContext {
		let _localctx: SetterSignatureContext = new SetterSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Dart2Parser.RULE_setterSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
				{
				this.state = 714;
				this.returnType();
				}
			}

			this.state = 717;
			this.match(Dart2Parser.T__32);
			this.state = 718;
			this.identifier();
			this.state = 719;
			this.formalParameterList();
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
	public constructorSignature(): ConstructorSignatureContext {
		let _localctx: ConstructorSignatureContext = new ConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Dart2Parser.RULE_constructorSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.identifier();
			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__19) {
				{
				this.state = 722;
				this.match(Dart2Parser.T__19);
				this.state = 723;
				this.identifier();
				}
			}

			this.state = 726;
			this.formalParameterList();
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
	public redirection(): RedirectionContext {
		let _localctx: RedirectionContext = new RedirectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Dart2Parser.RULE_redirection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.match(Dart2Parser.T__20);
			this.state = 729;
			this.match(Dart2Parser.T__18);
			this.state = 732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__19) {
				{
				this.state = 730;
				this.match(Dart2Parser.T__19);
				this.state = 731;
				this.identifier();
				}
			}

			this.state = 734;
			this.arguments();
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
	public initializers(): InitializersContext {
		let _localctx: InitializersContext = new InitializersContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Dart2Parser.RULE_initializers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this.match(Dart2Parser.T__20);
			this.state = 737;
			this.initializerListEntry();
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__0) {
				{
				{
				this.state = 738;
				this.match(Dart2Parser.T__0);
				this.state = 739;
				this.initializerListEntry();
				}
				}
				this.state = 744;
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
	public initializerListEntry(): InitializerListEntryContext {
		let _localctx: InitializerListEntryContext = new InitializerListEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Dart2Parser.RULE_initializerListEntry);
		try {
			this.state = 754;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 745;
				this.match(Dart2Parser.T__33);
				this.state = 746;
				this.arguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.match(Dart2Parser.T__33);
				this.state = 748;
				this.match(Dart2Parser.T__19);
				this.state = 749;
				this.identifier();
				this.state = 750;
				this.arguments();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 752;
				this.fieldInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 753;
				this.assertion();
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
	public fieldInitializer(): FieldInitializerContext {
		let _localctx: FieldInitializerContext = new FieldInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Dart2Parser.RULE_fieldInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__18) {
				{
				this.state = 756;
				this.match(Dart2Parser.T__18);
				this.state = 757;
				this.match(Dart2Parser.T__19);
				}
			}

			this.state = 760;
			this.identifier();
			this.state = 761;
			this.match(Dart2Parser.T__4);
			this.state = 762;
			this.conditionalExpression();
			this.state = 766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__49) {
				{
				{
				this.state = 763;
				this.cascadeSection();
				}
				}
				this.state = 768;
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
	public factoryConstructorSignature(): FactoryConstructorSignatureContext {
		let _localctx: FactoryConstructorSignatureContext = new FactoryConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Dart2Parser.RULE_factoryConstructorSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.match(Dart2Parser.T__34);
			this.state = 770;
			this.identifier();
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__19) {
				{
				this.state = 771;
				this.match(Dart2Parser.T__19);
				this.state = 772;
				this.identifier();
				}
			}

			this.state = 775;
			this.formalParameterList();
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
	public redirectingFactoryConstructorSignature(): RedirectingFactoryConstructorSignatureContext {
		let _localctx: RedirectingFactoryConstructorSignatureContext = new RedirectingFactoryConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Dart2Parser.RULE_redirectingFactoryConstructorSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__2) {
				{
				this.state = 777;
				this.match(Dart2Parser.T__2);
				}
			}

			this.state = 780;
			this.match(Dart2Parser.T__34);
			this.state = 781;
			this.identifier();
			this.state = 784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__19) {
				{
				this.state = 782;
				this.match(Dart2Parser.T__19);
				this.state = 783;
				this.identifier();
				}
			}

			this.state = 786;
			this.formalParameterList();
			this.state = 787;
			this.match(Dart2Parser.T__4);
			this.state = 788;
			this.dtype();
			this.state = 791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__19) {
				{
				this.state = 789;
				this.match(Dart2Parser.T__19);
				this.state = 790;
				this.identifier();
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
	public constantConstructorSignature(): ConstantConstructorSignatureContext {
		let _localctx: ConstantConstructorSignatureContext = new ConstantConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Dart2Parser.RULE_constantConstructorSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(Dart2Parser.T__2);
			this.state = 794;
			this.qualified();
			this.state = 795;
			this.formalParameterList();
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
	public superclass(): SuperclassContext {
		let _localctx: SuperclassContext = new SuperclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Dart2Parser.RULE_superclass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.match(Dart2Parser.T__35);
			this.state = 798;
			this.dtype();
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
	public interfaces(): InterfacesContext {
		let _localctx: InterfacesContext = new InterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Dart2Parser.RULE_interfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.match(Dart2Parser.T__36);
			this.state = 801;
			this.typeList();
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
	public mixinApplicationClass(): MixinApplicationClassContext {
		let _localctx: MixinApplicationClassContext = new MixinApplicationClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Dart2Parser.RULE_mixinApplicationClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.identifier();
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__38) {
				{
				this.state = 804;
				this.typeParameters();
				}
			}

			this.state = 807;
			this.match(Dart2Parser.T__4);
			this.state = 808;
			this.mixinApplication();
			this.state = 809;
			this.match(Dart2Parser.T__8);
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
	public mixinApplication(): MixinApplicationContext {
		let _localctx: MixinApplicationContext = new MixinApplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Dart2Parser.RULE_mixinApplication);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.dtype();
			this.state = 812;
			this.mixins();
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__36) {
				{
				this.state = 813;
				this.interfaces();
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
	public enumType(): EnumTypeContext {
		let _localctx: EnumTypeContext = new EnumTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Dart2Parser.RULE_enumType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.metadata();
			this.state = 817;
			this.match(Dart2Parser.T__37);
			this.state = 818;
			this.identifier();
			this.state = 819;
			this.match(Dart2Parser.T__11);
			this.state = 820;
			this.enumEntry();
			this.state = 825;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 821;
					this.match(Dart2Parser.T__0);
					this.state = 822;
					this.enumEntry();
					}
					}
				}
				this.state = 827;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			}
			this.state = 829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__0) {
				{
				this.state = 828;
				this.match(Dart2Parser.T__0);
				}
			}

			this.state = 831;
			this.match(Dart2Parser.T__12);
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
	public enumEntry(): EnumEntryContext {
		let _localctx: EnumEntryContext = new EnumEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Dart2Parser.RULE_enumEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.metadata();
			this.state = 834;
			this.identifier();
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
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Dart2Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.metadata();
			this.state = 837;
			this.identifier();
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__35) {
				{
				this.state = 838;
				this.match(Dart2Parser.T__35);
				this.state = 839;
				this.dtype();
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
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Dart2Parser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.match(Dart2Parser.T__38);
			this.state = 843;
			this.typeParameter();
			this.state = 848;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__0) {
				{
				{
				this.state = 844;
				this.match(Dart2Parser.T__0);
				this.state = 845;
				this.typeParameter();
				}
				}
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 851;
			this.match(Dart2Parser.T__39);
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
	public metadata(): MetadataContext {
		let _localctx: MetadataContext = new MetadataContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Dart2Parser.RULE_metadata);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 853;
					this.match(Dart2Parser.T__40);
					this.state = 854;
					this.qualified();
					this.state = 857;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Dart2Parser.T__19) {
						{
						this.state = 855;
						this.match(Dart2Parser.T__19);
						this.state = 856;
						this.identifier();
						}
					}

					this.state = 860;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Dart2Parser.T__13) {
						{
						this.state = 859;
						this.arguments();
						}
					}

					}
					}
				}
				this.state = 866;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Dart2Parser.RULE_expression);
		let _la: number;
		try {
			this.state = 879;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 867;
				this.assignableExpression();
				this.state = 868;
				this.assignmentOperator();
				this.state = 869;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 871;
				this.conditionalExpression();
				this.state = 875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Dart2Parser.T__49) {
					{
					{
					this.state = 872;
					this.cascadeSection();
					}
					}
					this.state = 877;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 878;
				this.throwExpression();
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
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		let _localctx: ExpressionWithoutCascadeContext = new ExpressionWithoutCascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Dart2Parser.RULE_expressionWithoutCascade);
		try {
			this.state = 887;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 881;
				this.assignableExpression();
				this.state = 882;
				this.assignmentOperator();
				this.state = 883;
				this.expressionWithoutCascade();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 885;
				this.conditionalExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 886;
				this.throwExpressionWithoutCascade();
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
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Dart2Parser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 889;
			this.expression();
			this.state = 894;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 890;
					this.match(Dart2Parser.T__0);
					this.state = 891;
					this.expression();
					}
					}
				}
				this.state = 896;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
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
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Dart2Parser.RULE_primary);
		try {
			this.state = 909;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 897;
				this.thisExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 898;
				this.match(Dart2Parser.T__33);
				this.state = 899;
				this.unconditionalAssignableSelector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 900;
				this.functionExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 901;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 902;
				this.identifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 903;
				this.nayaExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 904;
				this.constObjectExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 905;
				this.match(Dart2Parser.T__13);
				this.state = 906;
				this.expression();
				this.state = 907;
				this.match(Dart2Parser.T__14);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Dart2Parser.RULE_literal);
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 911;
				this.nullLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 912;
				this.booleanLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 913;
				this.numericLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 914;
				this.stringLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 915;
				this.symbolLiteral();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 916;
				this.mapLiteral();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 917;
				this.listLiteral();
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
	public nullLiteral(): NullLiteralContext {
		let _localctx: NullLiteralContext = new NullLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Dart2Parser.RULE_nullLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this.match(Dart2Parser.T__41);
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
		this.enterRule(_localctx, 118, Dart2Parser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			_la = this._input.LA(1);
			if (!(_la === Dart2Parser.NUMBER || _la === Dart2Parser.HEX_NUMBER)) {
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
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Dart2Parser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 924;
			_la = this._input.LA(1);
			if (!(_la === Dart2Parser.T__42 || _la === Dart2Parser.T__43)) {
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
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Dart2Parser.RULE_stringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 926;
				_la = this._input.LA(1);
				if (!(_la === Dart2Parser.SingleLineString || _la === Dart2Parser.MultiLineString)) {
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
				this.state = 929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === Dart2Parser.SingleLineString || _la === Dart2Parser.MultiLineString);
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
	public stringInterpolation(): StringInterpolationContext {
		let _localctx: StringInterpolationContext = new StringInterpolationContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Dart2Parser.RULE_stringInterpolation);
		try {
			this.state = 937;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__44:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 931;
				this.match(Dart2Parser.T__44);
				this.state = 932;
				this.identifier();
				}
				break;
			case Dart2Parser.T__45:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 933;
				this.match(Dart2Parser.T__45);
				this.state = 934;
				this.expression();
				this.state = 935;
				this.match(Dart2Parser.T__12);
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
	public symbolLiteral(): SymbolLiteralContext {
		let _localctx: SymbolLiteralContext = new SymbolLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Dart2Parser.RULE_symbolLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 939;
			this.match(Dart2Parser.T__46);
			this.state = 949;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__27:
			case Dart2Parser.T__28:
			case Dart2Parser.T__29:
			case Dart2Parser.T__30:
			case Dart2Parser.T__38:
			case Dart2Parser.T__39:
			case Dart2Parser.T__67:
			case Dart2Parser.T__68:
			case Dart2Parser.T__69:
			case Dart2Parser.T__70:
			case Dart2Parser.T__71:
			case Dart2Parser.T__72:
			case Dart2Parser.T__73:
			case Dart2Parser.T__74:
			case Dart2Parser.T__75:
			case Dart2Parser.T__76:
			case Dart2Parser.T__77:
			case Dart2Parser.T__78:
			case Dart2Parser.T__79:
			case Dart2Parser.T__80:
				{
				this.state = 940;
				this.operator_();
				}
				break;
			case Dart2Parser.IDENTIFIER:
				{
				{
				this.state = 941;
				this.identifier();
				this.state = 946;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 942;
						this.match(Dart2Parser.T__0);
						this.state = 943;
						this.identifier();
						}
						}
					}
					this.state = 948;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
				}
				}
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
	public listLiteral(): ListLiteralContext {
		let _localctx: ListLiteralContext = new ListLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Dart2Parser.RULE_listLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__2) {
				{
				this.state = 951;
				this.match(Dart2Parser.T__2);
				}
			}

			this.state = 955;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__38) {
				{
				this.state = 954;
				this.typeArguments();
				}
			}

			this.state = 957;
			this.match(Dart2Parser.T__15);
			this.state = 962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
				{
				this.state = 958;
				this.expressionList();
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__0) {
					{
					this.state = 959;
					this.match(Dart2Parser.T__0);
					}
				}

				}
			}

			this.state = 964;
			this.match(Dart2Parser.T__16);
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
	public mapLiteral(): MapLiteralContext {
		let _localctx: MapLiteralContext = new MapLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Dart2Parser.RULE_mapLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__2) {
				{
				this.state = 966;
				this.match(Dart2Parser.T__2);
				}
			}

			this.state = 970;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__38) {
				{
				this.state = 969;
				this.typeArguments();
				}
			}

			this.state = 972;
			this.match(Dart2Parser.T__11);
			this.state = 984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
				{
				this.state = 973;
				this.mapLiteralEntry();
				this.state = 978;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 974;
						this.match(Dart2Parser.T__0);
						this.state = 975;
						this.mapLiteralEntry();
						}
						}
					}
					this.state = 980;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				}
				this.state = 982;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__0) {
					{
					this.state = 981;
					this.match(Dart2Parser.T__0);
					}
				}

				}
			}

			this.state = 986;
			this.match(Dart2Parser.T__12);
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
	public mapLiteralEntry(): MapLiteralEntryContext {
		let _localctx: MapLiteralEntryContext = new MapLiteralEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Dart2Parser.RULE_mapLiteralEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this.expression();
			this.state = 989;
			this.match(Dart2Parser.T__20);
			this.state = 990;
			this.expression();
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
	public throwExpression(): ThrowExpressionContext {
		let _localctx: ThrowExpressionContext = new ThrowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Dart2Parser.RULE_throwExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this.match(Dart2Parser.T__47);
			this.state = 993;
			this.expression();
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
	public throwExpressionWithoutCascade(): ThrowExpressionWithoutCascadeContext {
		let _localctx: ThrowExpressionWithoutCascadeContext = new ThrowExpressionWithoutCascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Dart2Parser.RULE_throwExpressionWithoutCascade);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 995;
			this.match(Dart2Parser.T__47);
			this.state = 996;
			this.expressionWithoutCascade();
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
	public functionExpression(): FunctionExpressionContext {
		let _localctx: FunctionExpressionContext = new FunctionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Dart2Parser.RULE_functionExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.formalParameterPart();
			this.state = 999;
			this.functionBody();
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
	public thisExpression(): ThisExpressionContext {
		let _localctx: ThisExpressionContext = new ThisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Dart2Parser.RULE_thisExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1001;
			this.match(Dart2Parser.T__18);
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
	public nayaExpression(): NayaExpressionContext {
		let _localctx: NayaExpressionContext = new NayaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Dart2Parser.RULE_nayaExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			this.match(Dart2Parser.T__48);
			this.state = 1004;
			this.dtype();
			this.state = 1007;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__19) {
				{
				this.state = 1005;
				this.match(Dart2Parser.T__19);
				this.state = 1006;
				this.identifier();
				}
			}

			this.state = 1009;
			this.arguments();
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
	public constObjectExpression(): ConstObjectExpressionContext {
		let _localctx: ConstObjectExpressionContext = new ConstObjectExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Dart2Parser.RULE_constObjectExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.match(Dart2Parser.T__2);
			this.state = 1012;
			this.dtype();
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__19) {
				{
				this.state = 1013;
				this.match(Dart2Parser.T__19);
				this.state = 1014;
				this.identifier();
				}
			}

			this.state = 1017;
			this.arguments();
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
		this.enterRule(_localctx, 146, Dart2Parser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.match(Dart2Parser.T__13);
			this.state = 1024;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
				{
				this.state = 1020;
				this.argumentList();
				this.state = 1022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__0) {
					{
					this.state = 1021;
					this.match(Dart2Parser.T__0);
					}
				}

				}
			}

			this.state = 1026;
			this.match(Dart2Parser.T__14);
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
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Dart2Parser.RULE_argumentList);
		try {
			let _alt: number;
			this.state = 1044;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1028;
				this.namedArgument();
				this.state = 1033;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1029;
						this.match(Dart2Parser.T__0);
						this.state = 1030;
						this.namedArgument();
						}
						}
					}
					this.state = 1035;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1036;
				this.expressionList();
				this.state = 1041;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1037;
						this.match(Dart2Parser.T__0);
						this.state = 1038;
						this.namedArgument();
						}
						}
					}
					this.state = 1043;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
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
	// @RuleVersion(0)
	public namedArgument(): NamedArgumentContext {
		let _localctx: NamedArgumentContext = new NamedArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Dart2Parser.RULE_namedArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1046;
			this.label();
			this.state = 1047;
			this.expression();
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
	public cascadeSection(): CascadeSectionContext {
		let _localctx: CascadeSectionContext = new CascadeSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Dart2Parser.RULE_cascadeSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1049;
			this.match(Dart2Parser.T__49);
			{
			this.state = 1050;
			this.cascadeSelector();
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__13 || _la === Dart2Parser.T__38) {
				{
				{
				this.state = 1051;
				this.argumentPart();
				}
				}
				this.state = 1056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 1066;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__15 || _la === Dart2Parser.T__19 || _la === Dart2Parser.T__85) {
				{
				{
				this.state = 1057;
				this.assignableSelector();
				this.state = 1061;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Dart2Parser.T__13 || _la === Dart2Parser.T__38) {
					{
					{
					this.state = 1058;
					this.argumentPart();
					}
					}
					this.state = 1063;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__4 || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (Dart2Parser.T__50 - 51)) | (1 << (Dart2Parser.T__51 - 51)) | (1 << (Dart2Parser.T__52 - 51)) | (1 << (Dart2Parser.T__53 - 51)) | (1 << (Dart2Parser.T__54 - 51)) | (1 << (Dart2Parser.T__55 - 51)) | (1 << (Dart2Parser.T__56 - 51)) | (1 << (Dart2Parser.T__57 - 51)) | (1 << (Dart2Parser.T__58 - 51)) | (1 << (Dart2Parser.T__59 - 51)) | (1 << (Dart2Parser.T__60 - 51)) | (1 << (Dart2Parser.T__61 - 51)))) !== 0)) {
				{
				this.state = 1069;
				this.assignmentOperator();
				this.state = 1070;
				this.expressionWithoutCascade();
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
	public cascadeSelector(): CascadeSelectorContext {
		let _localctx: CascadeSelectorContext = new CascadeSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Dart2Parser.RULE_cascadeSelector);
		try {
			this.state = 1079;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1074;
				this.match(Dart2Parser.T__15);
				this.state = 1075;
				this.expression();
				this.state = 1076;
				this.match(Dart2Parser.T__16);
				}
				break;
			case Dart2Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1078;
				this.identifier();
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
	public argumentPart(): ArgumentPartContext {
		let _localctx: ArgumentPartContext = new ArgumentPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Dart2Parser.RULE_argumentPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__38) {
				{
				this.state = 1081;
				this.typeArguments();
				}
			}

			this.state = 1084;
			this.arguments();
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
		this.enterRule(_localctx, 158, Dart2Parser.RULE_assignmentOperator);
		try {
			this.state = 1088;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1086;
				this.match(Dart2Parser.T__4);
				}
				break;
			case Dart2Parser.T__50:
			case Dart2Parser.T__51:
			case Dart2Parser.T__52:
			case Dart2Parser.T__53:
			case Dart2Parser.T__54:
			case Dart2Parser.T__55:
			case Dart2Parser.T__56:
			case Dart2Parser.T__57:
			case Dart2Parser.T__58:
			case Dart2Parser.T__59:
			case Dart2Parser.T__60:
			case Dart2Parser.T__61:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1087;
				this.compoundAssignmentOperator();
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
	public compoundAssignmentOperator(): CompoundAssignmentOperatorContext {
		let _localctx: CompoundAssignmentOperatorContext = new CompoundAssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Dart2Parser.RULE_compoundAssignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (Dart2Parser.T__50 - 51)) | (1 << (Dart2Parser.T__51 - 51)) | (1 << (Dart2Parser.T__52 - 51)) | (1 << (Dart2Parser.T__53 - 51)) | (1 << (Dart2Parser.T__54 - 51)) | (1 << (Dart2Parser.T__55 - 51)) | (1 << (Dart2Parser.T__56 - 51)) | (1 << (Dart2Parser.T__57 - 51)) | (1 << (Dart2Parser.T__58 - 51)) | (1 << (Dart2Parser.T__59 - 51)) | (1 << (Dart2Parser.T__60 - 51)) | (1 << (Dart2Parser.T__61 - 51)))) !== 0))) {
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
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Dart2Parser.RULE_conditionalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1092;
			this.ifNullExpression();
			this.state = 1098;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__62) {
				{
				this.state = 1093;
				this.match(Dart2Parser.T__62);
				this.state = 1094;
				this.expressionWithoutCascade();
				this.state = 1095;
				this.match(Dart2Parser.T__20);
				this.state = 1096;
				this.expressionWithoutCascade();
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
	public ifNullExpression(): IfNullExpressionContext {
		let _localctx: IfNullExpressionContext = new IfNullExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Dart2Parser.RULE_ifNullExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this.logicalOrExpression();
			this.state = 1105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__63) {
				{
				{
				this.state = 1101;
				this.match(Dart2Parser.T__63);
				this.state = 1102;
				this.logicalOrExpression();
				}
				}
				this.state = 1107;
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
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Dart2Parser.RULE_logicalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1108;
			this.logicalAndExpression();
			this.state = 1113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__64) {
				{
				{
				this.state = 1109;
				this.match(Dart2Parser.T__64);
				this.state = 1110;
				this.logicalAndExpression();
				}
				}
				this.state = 1115;
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
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Dart2Parser.RULE_logicalAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1116;
			this.equalityExpression();
			this.state = 1121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__65) {
				{
				{
				this.state = 1117;
				this.match(Dart2Parser.T__65);
				this.state = 1118;
				this.equalityExpression();
				}
				}
				this.state = 1123;
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
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Dart2Parser.RULE_equalityExpression);
		let _la: number;
		try {
			this.state = 1134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1124;
				this.relationalExpression();
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__30 || _la === Dart2Parser.T__66) {
					{
					this.state = 1125;
					this.equalityOperator();
					this.state = 1126;
					this.relationalExpression();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1130;
				this.match(Dart2Parser.T__33);
				this.state = 1131;
				this.equalityOperator();
				this.state = 1132;
				this.relationalExpression();
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
	public equalityOperator(): EqualityOperatorContext {
		let _localctx: EqualityOperatorContext = new EqualityOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, Dart2Parser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			_la = this._input.LA(1);
			if (!(_la === Dart2Parser.T__30 || _la === Dart2Parser.T__66)) {
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
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Dart2Parser.RULE_relationalExpression);
		try {
			this.state = 1150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1138;
				this.bitwiseOrExpression();
				this.state = 1144;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Dart2Parser.T__86:
					{
					this.state = 1139;
					this.typeTest();
					}
					break;
				case Dart2Parser.T__87:
					{
					this.state = 1140;
					this.typeCast();
					}
					break;
				case Dart2Parser.T__38:
				case Dart2Parser.T__39:
				case Dart2Parser.T__67:
				case Dart2Parser.T__68:
					{
					this.state = 1141;
					this.relationalOperator();
					this.state = 1142;
					this.bitwiseOrExpression();
					}
					break;
				case Dart2Parser.T__0:
				case Dart2Parser.T__6:
				case Dart2Parser.T__7:
				case Dart2Parser.T__8:
				case Dart2Parser.T__9:
				case Dart2Parser.T__10:
				case Dart2Parser.T__11:
				case Dart2Parser.T__12:
				case Dart2Parser.T__14:
				case Dart2Parser.T__16:
				case Dart2Parser.T__20:
				case Dart2Parser.T__30:
				case Dart2Parser.T__49:
				case Dart2Parser.T__62:
				case Dart2Parser.T__63:
				case Dart2Parser.T__64:
				case Dart2Parser.T__65:
				case Dart2Parser.T__66:
					break;
				default:
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1146;
				this.match(Dart2Parser.T__33);
				this.state = 1147;
				this.relationalOperator();
				this.state = 1148;
				this.bitwiseOrExpression();
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
	public relationalOperator(): RelationalOperatorContext {
		let _localctx: RelationalOperatorContext = new RelationalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Dart2Parser.RULE_relationalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1152;
			_la = this._input.LA(1);
			if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Dart2Parser.T__38 - 39)) | (1 << (Dart2Parser.T__39 - 39)) | (1 << (Dart2Parser.T__67 - 39)) | (1 << (Dart2Parser.T__68 - 39)))) !== 0))) {
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
	public bitwiseOrExpression(): BitwiseOrExpressionContext {
		let _localctx: BitwiseOrExpressionContext = new BitwiseOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Dart2Parser.RULE_bitwiseOrExpression);
		try {
			let _alt: number;
			this.state = 1169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1154;
				this.bitwiseXorExpression();
				this.state = 1159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1155;
						this.match(Dart2Parser.T__69);
						this.state = 1156;
						this.bitwiseXorExpression();
						}
						}
					}
					this.state = 1161;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1162;
				this.match(Dart2Parser.T__33);
				this.state = 1165;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1163;
						this.match(Dart2Parser.T__69);
						this.state = 1164;
						this.bitwiseOrExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1167;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public bitwiseXorExpression(): BitwiseXorExpressionContext {
		let _localctx: BitwiseXorExpressionContext = new BitwiseXorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Dart2Parser.RULE_bitwiseXorExpression);
		let _la: number;
		try {
			this.state = 1186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1171;
				this.bitwiseAndExpression();
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Dart2Parser.T__70) {
					{
					{
					this.state = 1172;
					this.match(Dart2Parser.T__70);
					this.state = 1173;
					this.bitwiseAndExpression();
					}
					}
					this.state = 1178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1179;
				this.match(Dart2Parser.T__33);
				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1180;
					this.match(Dart2Parser.T__70);
					this.state = 1181;
					this.bitwiseAndExpression();
					}
					}
					this.state = 1184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Dart2Parser.T__70);
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
	public bitwiseAndExpression(): BitwiseAndExpressionContext {
		let _localctx: BitwiseAndExpressionContext = new BitwiseAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, Dart2Parser.RULE_bitwiseAndExpression);
		let _la: number;
		try {
			this.state = 1203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1188;
				this.shiftExpression();
				this.state = 1193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Dart2Parser.T__71) {
					{
					{
					this.state = 1189;
					this.match(Dart2Parser.T__71);
					this.state = 1190;
					this.shiftExpression();
					}
					}
					this.state = 1195;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1196;
				this.match(Dart2Parser.T__33);
				this.state = 1199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1197;
					this.match(Dart2Parser.T__71);
					this.state = 1198;
					this.shiftExpression();
					}
					}
					this.state = 1201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Dart2Parser.T__71);
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
	public bitwiseOperator(): BitwiseOperatorContext {
		let _localctx: BitwiseOperatorContext = new BitwiseOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, Dart2Parser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1205;
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Dart2Parser.T__69 - 70)) | (1 << (Dart2Parser.T__70 - 70)) | (1 << (Dart2Parser.T__71 - 70)))) !== 0))) {
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
	public shiftExpression(): ShiftExpressionContext {
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, Dart2Parser.RULE_shiftExpression);
		let _la: number;
		try {
			this.state = 1224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1207;
				this.additiveExpression();
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Dart2Parser.T__72 - 73)) | (1 << (Dart2Parser.T__73 - 73)) | (1 << (Dart2Parser.T__74 - 73)))) !== 0)) {
					{
					{
					this.state = 1208;
					this.shiftOperator();
					this.state = 1209;
					this.additiveExpression();
					}
					}
					this.state = 1215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1216;
				this.match(Dart2Parser.T__33);
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1217;
					this.shiftOperator();
					this.state = 1218;
					this.additiveExpression();
					}
					}
					this.state = 1222;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Dart2Parser.T__72 - 73)) | (1 << (Dart2Parser.T__73 - 73)) | (1 << (Dart2Parser.T__74 - 73)))) !== 0));
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
	public shiftOperator(): ShiftOperatorContext {
		let _localctx: ShiftOperatorContext = new ShiftOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, Dart2Parser.RULE_shiftOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1226;
			_la = this._input.LA(1);
			if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Dart2Parser.T__72 - 73)) | (1 << (Dart2Parser.T__73 - 73)) | (1 << (Dart2Parser.T__74 - 73)))) !== 0))) {
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
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, Dart2Parser.RULE_additiveExpression);
		let _la: number;
		try {
			this.state = 1245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1228;
				this.multiplicativeExpression();
				this.state = 1234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Dart2Parser.T__75 || _la === Dart2Parser.T__76) {
					{
					{
					this.state = 1229;
					this.additiveOperator();
					this.state = 1230;
					this.multiplicativeExpression();
					}
					}
					this.state = 1236;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1237;
				this.match(Dart2Parser.T__33);
				this.state = 1241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1238;
					this.additiveOperator();
					this.state = 1239;
					this.multiplicativeExpression();
					}
					}
					this.state = 1243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Dart2Parser.T__75 || _la === Dart2Parser.T__76);
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
	public additiveOperator(): AdditiveOperatorContext {
		let _localctx: AdditiveOperatorContext = new AdditiveOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, Dart2Parser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			_la = this._input.LA(1);
			if (!(_la === Dart2Parser.T__75 || _la === Dart2Parser.T__76)) {
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
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, Dart2Parser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.state = 1266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1249;
				this.unaryExpression();
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Dart2Parser.T__77 - 78)) | (1 << (Dart2Parser.T__78 - 78)) | (1 << (Dart2Parser.T__79 - 78)) | (1 << (Dart2Parser.T__80 - 78)))) !== 0)) {
					{
					{
					this.state = 1250;
					this.multiplicativeOperator();
					this.state = 1251;
					this.unaryExpression();
					}
					}
					this.state = 1257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1258;
				this.match(Dart2Parser.T__33);
				this.state = 1262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1259;
					this.multiplicativeOperator();
					this.state = 1260;
					this.unaryExpression();
					}
					}
					this.state = 1264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Dart2Parser.T__77 - 78)) | (1 << (Dart2Parser.T__78 - 78)) | (1 << (Dart2Parser.T__79 - 78)) | (1 << (Dart2Parser.T__80 - 78)))) !== 0));
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
	public multiplicativeOperator(): MultiplicativeOperatorContext {
		let _localctx: MultiplicativeOperatorContext = new MultiplicativeOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, Dart2Parser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1268;
			_la = this._input.LA(1);
			if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Dart2Parser.T__77 - 78)) | (1 << (Dart2Parser.T__78 - 78)) | (1 << (Dart2Parser.T__79 - 78)) | (1 << (Dart2Parser.T__80 - 78)))) !== 0))) {
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
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, Dart2Parser.RULE_unaryExpression);
		try {
			this.state = 1284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1270;
				this.prefixOperator();
				this.state = 1271;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1273;
				this.awaitExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1274;
				this.postfixExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1277;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Dart2Parser.T__76:
					{
					this.state = 1275;
					this.minusOperator();
					}
					break;
				case Dart2Parser.T__27:
					{
					this.state = 1276;
					this.tildeOperator();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1279;
				this.match(Dart2Parser.T__33);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1281;
				this.incrementOperator();
				this.state = 1282;
				this.assignableExpression();
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
	public prefixOperator(): PrefixOperatorContext {
		let _localctx: PrefixOperatorContext = new PrefixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, Dart2Parser.RULE_prefixOperator);
		try {
			this.state = 1289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__76:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1286;
				this.minusOperator();
				}
				break;
			case Dart2Parser.T__81:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1287;
				this.negationOperator();
				}
				break;
			case Dart2Parser.T__27:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1288;
				this.tildeOperator();
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
	public minusOperator(): MinusOperatorContext {
		let _localctx: MinusOperatorContext = new MinusOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, Dart2Parser.RULE_minusOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1291;
			this.match(Dart2Parser.T__76);
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
	public negationOperator(): NegationOperatorContext {
		let _localctx: NegationOperatorContext = new NegationOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, Dart2Parser.RULE_negationOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1293;
			this.match(Dart2Parser.T__81);
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
	public tildeOperator(): TildeOperatorContext {
		let _localctx: TildeOperatorContext = new TildeOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, Dart2Parser.RULE_tildeOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1295;
			this.match(Dart2Parser.T__27);
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
	public awaitExpression(): AwaitExpressionContext {
		let _localctx: AwaitExpressionContext = new AwaitExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, Dart2Parser.RULE_awaitExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1297;
			this.match(Dart2Parser.T__82);
			this.state = 1298;
			this.unaryExpression();
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
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, Dart2Parser.RULE_postfixExpression);
		try {
			let _alt: number;
			this.state = 1310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1300;
				this.assignableExpression();
				this.state = 1301;
				this.postfixOperator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1303;
				this.primary();
				this.state = 1307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1304;
						this.selector();
						}
						}
					}
					this.state = 1309;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
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
	// @RuleVersion(0)
	public postfixOperator(): PostfixOperatorContext {
		let _localctx: PostfixOperatorContext = new PostfixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, Dart2Parser.RULE_postfixOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1312;
			this.incrementOperator();
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
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, Dart2Parser.RULE_selector);
		try {
			this.state = 1316;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__15:
			case Dart2Parser.T__19:
			case Dart2Parser.T__85:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1314;
				this.assignableSelector();
				}
				break;
			case Dart2Parser.T__13:
			case Dart2Parser.T__38:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1315;
				this.argumentPart();
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
	public incrementOperator(): IncrementOperatorContext {
		let _localctx: IncrementOperatorContext = new IncrementOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, Dart2Parser.RULE_incrementOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1318;
			_la = this._input.LA(1);
			if (!(_la === Dart2Parser.T__83 || _la === Dart2Parser.T__84)) {
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
	public assignableExpression(): AssignableExpressionContext {
		let _localctx: AssignableExpressionContext = new AssignableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, Dart2Parser.RULE_assignableExpression);
		let _la: number;
		try {
			this.state = 1334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1320;
				this.primary();
				this.state = 1328;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
				case 1:
					{
					this.state = 1324;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Dart2Parser.T__13 || _la === Dart2Parser.T__38) {
						{
						{
						this.state = 1321;
						this.argumentPart();
						}
						}
						this.state = 1326;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1327;
					this.assignableSelector();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1330;
				this.match(Dart2Parser.T__33);
				this.state = 1331;
				this.unconditionalAssignableSelector();
				this.state = 1332;
				this.identifier();
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
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext {
		let _localctx: UnconditionalAssignableSelectorContext = new UnconditionalAssignableSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, Dart2Parser.RULE_unconditionalAssignableSelector);
		try {
			this.state = 1342;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1336;
				this.match(Dart2Parser.T__15);
				this.state = 1337;
				this.expression();
				this.state = 1338;
				this.match(Dart2Parser.T__16);
				}
				break;
			case Dart2Parser.T__19:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1340;
				this.match(Dart2Parser.T__19);
				this.state = 1341;
				this.identifier();
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
	public assignableSelector(): AssignableSelectorContext {
		let _localctx: AssignableSelectorContext = new AssignableSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, Dart2Parser.RULE_assignableSelector);
		try {
			this.state = 1347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__15:
			case Dart2Parser.T__19:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1344;
				this.unconditionalAssignableSelector();
				}
				break;
			case Dart2Parser.T__85:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1345;
				this.match(Dart2Parser.T__85);
				this.state = 1346;
				this.identifier();
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, Dart2Parser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1349;
			this.match(Dart2Parser.IDENTIFIER);
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
	public qualified(): QualifiedContext {
		let _localctx: QualifiedContext = new QualifiedContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, Dart2Parser.RULE_qualified);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1351;
			this.identifier();
			this.state = 1354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1352;
				this.match(Dart2Parser.T__19);
				this.state = 1353;
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
	public typeTest(): TypeTestContext {
		let _localctx: TypeTestContext = new TypeTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, Dart2Parser.RULE_typeTest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1356;
			this.isOperator();
			this.state = 1357;
			this.dtype();
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
	public isOperator(): IsOperatorContext {
		let _localctx: IsOperatorContext = new IsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, Dart2Parser.RULE_isOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1359;
			this.match(Dart2Parser.T__86);
			this.state = 1361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__81) {
				{
				this.state = 1360;
				this.match(Dart2Parser.T__81);
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
	public typeCast(): TypeCastContext {
		let _localctx: TypeCastContext = new TypeCastContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, Dart2Parser.RULE_typeCast);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1363;
			this.asOperator();
			this.state = 1364;
			this.dtype();
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
	public asOperator(): AsOperatorContext {
		let _localctx: AsOperatorContext = new AsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, Dart2Parser.RULE_asOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1366;
			this.match(Dart2Parser.T__87);
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
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, Dart2Parser.RULE_statements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1371;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1368;
					this.statement();
					}
					}
				}
				this.state = 1373;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, Dart2Parser.RULE_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1377;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1374;
					this.label();
					}
					}
				}
				this.state = 1379;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			}
			this.state = 1380;
			this.nonLabledStatment();
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
	public nonLabledStatment(): NonLabledStatmentContext {
		let _localctx: NonLabledStatmentContext = new NonLabledStatmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, Dart2Parser.RULE_nonLabledStatment);
		try {
			this.state = 1399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1382;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1383;
				this.localVariableDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1384;
				this.forStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1385;
				this.whileStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1386;
				this.doStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1387;
				this.switchStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1388;
				this.ifStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1389;
				this.rethrowStatment();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1390;
				this.tryStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1391;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1392;
				this.continueStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1393;
				this.returnStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1394;
				this.yieldStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1395;
				this.yieldEachStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1396;
				this.expressionStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1397;
				this.assertStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1398;
				this.localFunctionDeclaration();
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, Dart2Parser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
				{
				this.state = 1401;
				this.expression();
				}
			}

			this.state = 1404;
			this.match(Dart2Parser.T__8);
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
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, Dart2Parser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1406;
			this.initializedVariableDeclaration();
			this.state = 1407;
			this.match(Dart2Parser.T__8);
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
	public localFunctionDeclaration(): LocalFunctionDeclarationContext {
		let _localctx: LocalFunctionDeclarationContext = new LocalFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, Dart2Parser.RULE_localFunctionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1409;
			this.functionSignature();
			this.state = 1410;
			this.functionBody();
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
		this.enterRule(_localctx, 248, Dart2Parser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			this.match(Dart2Parser.T__88);
			this.state = 1413;
			this.match(Dart2Parser.T__13);
			this.state = 1414;
			this.expression();
			this.state = 1415;
			this.match(Dart2Parser.T__14);
			this.state = 1416;
			this.statement();
			this.state = 1419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				{
				this.state = 1417;
				this.match(Dart2Parser.T__89);
				this.state = 1418;
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, Dart2Parser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__82) {
				{
				this.state = 1421;
				this.match(Dart2Parser.T__82);
				}
			}

			this.state = 1424;
			this.match(Dart2Parser.T__90);
			this.state = 1425;
			this.match(Dart2Parser.T__13);
			this.state = 1426;
			this.forLoopParts();
			this.state = 1427;
			this.match(Dart2Parser.T__14);
			this.state = 1428;
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
	public forLoopParts(): ForLoopPartsContext {
		let _localctx: ForLoopPartsContext = new ForLoopPartsContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, Dart2Parser.RULE_forLoopParts);
		let _la: number;
		try {
			this.state = 1446;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1430;
				this.forInitializerStatement();
				this.state = 1432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
					{
					this.state = 1431;
					this.expression();
					}
				}

				this.state = 1434;
				this.match(Dart2Parser.T__8);
				this.state = 1436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
					{
					this.state = 1435;
					this.expressionList();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1438;
				this.declaredIdentifier();
				this.state = 1439;
				this.match(Dart2Parser.T__91);
				this.state = 1440;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1442;
				this.identifier();
				this.state = 1443;
				this.match(Dart2Parser.T__91);
				this.state = 1444;
				this.expression();
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
	public forInitializerStatement(): ForInitializerStatementContext {
		let _localctx: ForInitializerStatementContext = new ForInitializerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, Dart2Parser.RULE_forInitializerStatement);
		let _la: number;
		try {
			this.state = 1453;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1448;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
					{
					this.state = 1449;
					this.expression();
					}
				}

				this.state = 1452;
				this.match(Dart2Parser.T__8);
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, Dart2Parser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1455;
			this.match(Dart2Parser.T__92);
			this.state = 1456;
			this.match(Dart2Parser.T__13);
			this.state = 1457;
			this.expression();
			this.state = 1458;
			this.match(Dart2Parser.T__14);
			this.state = 1459;
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
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, Dart2Parser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1461;
			this.match(Dart2Parser.T__93);
			this.state = 1462;
			this.statement();
			this.state = 1463;
			this.match(Dart2Parser.T__92);
			this.state = 1464;
			this.match(Dart2Parser.T__13);
			this.state = 1465;
			this.expression();
			this.state = 1466;
			this.match(Dart2Parser.T__14);
			this.state = 1467;
			this.match(Dart2Parser.T__8);
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
		this.enterRule(_localctx, 260, Dart2Parser.RULE_switchStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1469;
			this.match(Dart2Parser.T__94);
			this.state = 1470;
			this.match(Dart2Parser.T__13);
			this.state = 1471;
			this.expression();
			this.state = 1472;
			this.match(Dart2Parser.T__14);
			this.state = 1473;
			this.match(Dart2Parser.T__11);
			this.state = 1477;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1474;
					this.switchCase();
					}
					}
				}
				this.state = 1479;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
			}
			this.state = 1481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__96 || _la === Dart2Parser.IDENTIFIER) {
				{
				this.state = 1480;
				this.defaultCase();
				}
			}

			this.state = 1483;
			this.match(Dart2Parser.T__12);
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
	public switchCase(): SwitchCaseContext {
		let _localctx: SwitchCaseContext = new SwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, Dart2Parser.RULE_switchCase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.IDENTIFIER) {
				{
				{
				this.state = 1485;
				this.label();
				}
				}
				this.state = 1490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1491;
			this.match(Dart2Parser.T__95);
			this.state = 1492;
			this.expression();
			this.state = 1493;
			this.match(Dart2Parser.T__20);
			this.state = 1494;
			this.statements();
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
	public defaultCase(): DefaultCaseContext {
		let _localctx: DefaultCaseContext = new DefaultCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, Dart2Parser.RULE_defaultCase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.IDENTIFIER) {
				{
				{
				this.state = 1496;
				this.label();
				}
				}
				this.state = 1501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1502;
			this.match(Dart2Parser.T__96);
			this.state = 1503;
			this.match(Dart2Parser.T__20);
			this.state = 1504;
			this.statements();
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
	public rethrowStatment(): RethrowStatmentContext {
		let _localctx: RethrowStatmentContext = new RethrowStatmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, Dart2Parser.RULE_rethrowStatment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this.match(Dart2Parser.T__97);
			this.state = 1507;
			this.match(Dart2Parser.T__8);
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
		this.enterRule(_localctx, 268, Dart2Parser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1509;
			this.match(Dart2Parser.T__98);
			this.state = 1510;
			this.block();
			this.state = 1520;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__99:
			case Dart2Parser.T__100:
				{
				this.state = 1512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1511;
					this.onPart();
					}
					}
					this.state = 1514;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Dart2Parser.T__99 || _la === Dart2Parser.T__100);
				this.state = 1517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__101) {
					{
					this.state = 1516;
					this.finallyPart();
					}
				}

				}
				break;
			case Dart2Parser.T__101:
				{
				this.state = 1519;
				this.finallyPart();
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
	public onPart(): OnPartContext {
		let _localctx: OnPartContext = new OnPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, Dart2Parser.RULE_onPart);
		let _la: number;
		try {
			this.state = 1532;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__100:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1522;
				this.catchPart();
				this.state = 1523;
				this.block();
				}
				break;
			case Dart2Parser.T__99:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1525;
				this.match(Dart2Parser.T__99);
				this.state = 1526;
				this.dtype();
				this.state = 1528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__100) {
					{
					this.state = 1527;
					this.catchPart();
					}
				}

				this.state = 1530;
				this.block();
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
	public catchPart(): CatchPartContext {
		let _localctx: CatchPartContext = new CatchPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, Dart2Parser.RULE_catchPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1534;
			this.match(Dart2Parser.T__100);
			this.state = 1535;
			this.match(Dart2Parser.T__13);
			this.state = 1536;
			this.identifier();
			this.state = 1539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__0) {
				{
				this.state = 1537;
				this.match(Dart2Parser.T__0);
				this.state = 1538;
				this.identifier();
				}
			}

			this.state = 1541;
			this.match(Dart2Parser.T__14);
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
	public finallyPart(): FinallyPartContext {
		let _localctx: FinallyPartContext = new FinallyPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, Dart2Parser.RULE_finallyPart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1543;
			this.match(Dart2Parser.T__101);
			this.state = 1544;
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, Dart2Parser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1546;
			this.match(Dart2Parser.T__102);
			this.state = 1548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
				{
				this.state = 1547;
				this.expression();
				}
			}

			this.state = 1550;
			this.match(Dart2Parser.T__8);
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, Dart2Parser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1552;
			this.identifier();
			this.state = 1553;
			this.match(Dart2Parser.T__20);
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
		this.enterRule(_localctx, 280, Dart2Parser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1555;
			this.match(Dart2Parser.T__103);
			this.state = 1557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.IDENTIFIER) {
				{
				this.state = 1556;
				this.identifier();
				}
			}

			this.state = 1559;
			this.match(Dart2Parser.T__8);
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
		this.enterRule(_localctx, 282, Dart2Parser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1561;
			this.match(Dart2Parser.T__104);
			this.state = 1563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.IDENTIFIER) {
				{
				this.state = 1562;
				this.identifier();
				}
			}

			this.state = 1565;
			this.match(Dart2Parser.T__8);
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
		this.enterRule(_localctx, 284, Dart2Parser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1567;
			this.match(Dart2Parser.T__105);
			this.state = 1568;
			this.expression();
			this.state = 1569;
			this.match(Dart2Parser.T__8);
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
	public yieldEachStatement(): YieldEachStatementContext {
		let _localctx: YieldEachStatementContext = new YieldEachStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, Dart2Parser.RULE_yieldEachStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1571;
			this.match(Dart2Parser.T__106);
			this.state = 1572;
			this.expression();
			this.state = 1573;
			this.match(Dart2Parser.T__8);
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
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, Dart2Parser.RULE_assertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1575;
			this.assertion();
			this.state = 1576;
			this.match(Dart2Parser.T__8);
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
	public assertion(): AssertionContext {
		let _localctx: AssertionContext = new AssertionContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, Dart2Parser.RULE_assertion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1578;
			this.match(Dart2Parser.T__107);
			this.state = 1579;
			this.match(Dart2Parser.T__13);
			this.state = 1580;
			this.expression();
			this.state = 1583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1581;
				this.match(Dart2Parser.T__0);
				this.state = 1582;
				this.expression();
				}
				break;
			}
			this.state = 1586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__0) {
				{
				this.state = 1585;
				this.match(Dart2Parser.T__0);
				}
			}

			this.state = 1588;
			this.match(Dart2Parser.T__14);
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
	public topLevelDefinition(): TopLevelDefinitionContext {
		let _localctx: TopLevelDefinitionContext = new TopLevelDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, Dart2Parser.RULE_topLevelDefinition);
		let _la: number;
		try {
			this.state = 1639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1590;
				this.classDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1591;
				this.enumType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1592;
				this.typeAlias();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1594;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
				case 1:
					{
					this.state = 1593;
					this.match(Dart2Parser.T__25);
					}
					break;
				}
				this.state = 1596;
				this.functionSignature();
				this.state = 1597;
				this.match(Dart2Parser.T__8);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__25) {
					{
					this.state = 1599;
					this.match(Dart2Parser.T__25);
					}
				}

				this.state = 1602;
				this.getterSignature();
				this.state = 1603;
				this.match(Dart2Parser.T__8);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__25) {
					{
					this.state = 1605;
					this.match(Dart2Parser.T__25);
					}
				}

				this.state = 1608;
				this.setterSignature();
				this.state = 1609;
				this.match(Dart2Parser.T__8);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1611;
				this.functionSignature();
				this.state = 1612;
				this.functionBody();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
					{
					this.state = 1614;
					this.returnType();
					}
				}

				this.state = 1617;
				this.match(Dart2Parser.T__31);
				this.state = 1618;
				this.identifier();
				this.state = 1619;
				this.functionBody();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
					{
					this.state = 1621;
					this.returnType();
					}
				}

				this.state = 1624;
				this.match(Dart2Parser.T__32);
				this.state = 1625;
				this.identifier();
				this.state = 1626;
				this.formalParameterList();
				this.state = 1627;
				this.functionBody();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1629;
				_la = this._input.LA(1);
				if (!(_la === Dart2Parser.T__1 || _la === Dart2Parser.T__2)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1631;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
				case 1:
					{
					this.state = 1630;
					this.dtype();
					}
					break;
				}
				this.state = 1633;
				this.staticFinalDeclarationList();
				this.state = 1634;
				this.match(Dart2Parser.T__8);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1636;
				this.variableDeclaration();
				this.state = 1637;
				this.match(Dart2Parser.T__8);
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
	public getOrSet(): GetOrSetContext {
		let _localctx: GetOrSetContext = new GetOrSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, Dart2Parser.RULE_getOrSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1641;
			_la = this._input.LA(1);
			if (!(_la === Dart2Parser.T__31 || _la === Dart2Parser.T__32)) {
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
	public libraryDefinition(): LibraryDefinitionContext {
		let _localctx: LibraryDefinitionContext = new LibraryDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, Dart2Parser.RULE_libraryDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__108) {
				{
				this.state = 1643;
				this.scriptTag();
				}
			}

			this.state = 1647;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				{
				this.state = 1646;
				this.libraryName();
				}
				break;
			}
			this.state = 1652;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1649;
					this.importOrExport();
					}
					}
				}
				this.state = 1654;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			}
			this.state = 1658;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1655;
					this.partDirective();
					}
					}
				}
				this.state = 1660;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
			}
			this.state = 1664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__5) | (1 << Dart2Parser.T__17) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__21) | (1 << Dart2Parser.T__22) | (1 << Dart2Parser.T__24) | (1 << Dart2Parser.T__25) | (1 << Dart2Parser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Dart2Parser.T__31 - 32)) | (1 << (Dart2Parser.T__32 - 32)) | (1 << (Dart2Parser.T__34 - 32)) | (1 << (Dart2Parser.T__37 - 32)) | (1 << (Dart2Parser.T__40 - 32)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (Dart2Parser.T__109 - 110)) | (1 << (Dart2Parser.T__110 - 110)) | (1 << (Dart2Parser.T__113 - 110)) | (1 << (Dart2Parser.T__114 - 110)) | (1 << (Dart2Parser.T__116 - 110)) | (1 << (Dart2Parser.IDENTIFIER - 110)))) !== 0)) {
				{
				{
				this.state = 1661;
				this.topLevelDefinition();
				}
				}
				this.state = 1666;
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
	public scriptTag(): ScriptTagContext {
		let _localctx: ScriptTagContext = new ScriptTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, Dart2Parser.RULE_scriptTag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1667;
			this.match(Dart2Parser.T__108);
			this.state = 1671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__0) | (1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__4) | (1 << Dart2Parser.T__5) | (1 << Dart2Parser.T__6) | (1 << Dart2Parser.T__7) | (1 << Dart2Parser.T__8) | (1 << Dart2Parser.T__9) | (1 << Dart2Parser.T__10) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__12) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__14) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__16) | (1 << Dart2Parser.T__17) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__19) | (1 << Dart2Parser.T__20) | (1 << Dart2Parser.T__21) | (1 << Dart2Parser.T__22) | (1 << Dart2Parser.T__23) | (1 << Dart2Parser.T__24) | (1 << Dart2Parser.T__25) | (1 << Dart2Parser.T__26) | (1 << Dart2Parser.T__27) | (1 << Dart2Parser.T__28) | (1 << Dart2Parser.T__29) | (1 << Dart2Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Dart2Parser.T__31 - 32)) | (1 << (Dart2Parser.T__32 - 32)) | (1 << (Dart2Parser.T__33 - 32)) | (1 << (Dart2Parser.T__34 - 32)) | (1 << (Dart2Parser.T__35 - 32)) | (1 << (Dart2Parser.T__36 - 32)) | (1 << (Dart2Parser.T__37 - 32)) | (1 << (Dart2Parser.T__38 - 32)) | (1 << (Dart2Parser.T__39 - 32)) | (1 << (Dart2Parser.T__40 - 32)) | (1 << (Dart2Parser.T__41 - 32)) | (1 << (Dart2Parser.T__42 - 32)) | (1 << (Dart2Parser.T__43 - 32)) | (1 << (Dart2Parser.T__44 - 32)) | (1 << (Dart2Parser.T__45 - 32)) | (1 << (Dart2Parser.T__46 - 32)) | (1 << (Dart2Parser.T__47 - 32)) | (1 << (Dart2Parser.T__48 - 32)) | (1 << (Dart2Parser.T__49 - 32)) | (1 << (Dart2Parser.T__50 - 32)) | (1 << (Dart2Parser.T__51 - 32)) | (1 << (Dart2Parser.T__52 - 32)) | (1 << (Dart2Parser.T__53 - 32)) | (1 << (Dart2Parser.T__54 - 32)) | (1 << (Dart2Parser.T__55 - 32)) | (1 << (Dart2Parser.T__56 - 32)) | (1 << (Dart2Parser.T__57 - 32)) | (1 << (Dart2Parser.T__58 - 32)) | (1 << (Dart2Parser.T__59 - 32)) | (1 << (Dart2Parser.T__60 - 32)) | (1 << (Dart2Parser.T__61 - 32)) | (1 << (Dart2Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Dart2Parser.T__63 - 64)) | (1 << (Dart2Parser.T__64 - 64)) | (1 << (Dart2Parser.T__65 - 64)) | (1 << (Dart2Parser.T__66 - 64)) | (1 << (Dart2Parser.T__67 - 64)) | (1 << (Dart2Parser.T__68 - 64)) | (1 << (Dart2Parser.T__69 - 64)) | (1 << (Dart2Parser.T__70 - 64)) | (1 << (Dart2Parser.T__71 - 64)) | (1 << (Dart2Parser.T__72 - 64)) | (1 << (Dart2Parser.T__73 - 64)) | (1 << (Dart2Parser.T__74 - 64)) | (1 << (Dart2Parser.T__75 - 64)) | (1 << (Dart2Parser.T__76 - 64)) | (1 << (Dart2Parser.T__77 - 64)) | (1 << (Dart2Parser.T__78 - 64)) | (1 << (Dart2Parser.T__79 - 64)) | (1 << (Dart2Parser.T__80 - 64)) | (1 << (Dart2Parser.T__81 - 64)) | (1 << (Dart2Parser.T__82 - 64)) | (1 << (Dart2Parser.T__83 - 64)) | (1 << (Dart2Parser.T__84 - 64)) | (1 << (Dart2Parser.T__85 - 64)) | (1 << (Dart2Parser.T__86 - 64)) | (1 << (Dart2Parser.T__87 - 64)) | (1 << (Dart2Parser.T__88 - 64)) | (1 << (Dart2Parser.T__89 - 64)) | (1 << (Dart2Parser.T__90 - 64)) | (1 << (Dart2Parser.T__91 - 64)) | (1 << (Dart2Parser.T__92 - 64)) | (1 << (Dart2Parser.T__93 - 64)) | (1 << (Dart2Parser.T__94 - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (Dart2Parser.T__95 - 96)) | (1 << (Dart2Parser.T__96 - 96)) | (1 << (Dart2Parser.T__97 - 96)) | (1 << (Dart2Parser.T__98 - 96)) | (1 << (Dart2Parser.T__99 - 96)) | (1 << (Dart2Parser.T__100 - 96)) | (1 << (Dart2Parser.T__101 - 96)) | (1 << (Dart2Parser.T__102 - 96)) | (1 << (Dart2Parser.T__103 - 96)) | (1 << (Dart2Parser.T__104 - 96)) | (1 << (Dart2Parser.T__105 - 96)) | (1 << (Dart2Parser.T__106 - 96)) | (1 << (Dart2Parser.T__107 - 96)) | (1 << (Dart2Parser.T__108 - 96)) | (1 << (Dart2Parser.T__109 - 96)) | (1 << (Dart2Parser.T__110 - 96)) | (1 << (Dart2Parser.T__111 - 96)) | (1 << (Dart2Parser.T__112 - 96)) | (1 << (Dart2Parser.T__113 - 96)) | (1 << (Dart2Parser.T__114 - 96)) | (1 << (Dart2Parser.T__115 - 96)) | (1 << (Dart2Parser.T__116 - 96)) | (1 << (Dart2Parser.WHITESPACE - 96)) | (1 << (Dart2Parser.NUMBER - 96)) | (1 << (Dart2Parser.HEX_NUMBER - 96)) | (1 << (Dart2Parser.SingleLineString - 96)) | (1 << (Dart2Parser.MultiLineString - 96)) | (1 << (Dart2Parser.IDENTIFIER - 96)) | (1 << (Dart2Parser.SINGLE_LINE_COMMENT - 96)) | (1 << (Dart2Parser.MULTI_LINE_COMMENT - 96)))) !== 0)) {
				{
				{
				this.state = 1668;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === Dart2Parser.NEWLINE)) {
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
				this.state = 1673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1674;
			this.match(Dart2Parser.NEWLINE);
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
	public libraryName(): LibraryNameContext {
		let _localctx: LibraryNameContext = new LibraryNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, Dart2Parser.RULE_libraryName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1676;
			this.metadata();
			this.state = 1677;
			this.match(Dart2Parser.T__109);
			this.state = 1678;
			this.dottedIdentifierList();
			this.state = 1679;
			this.match(Dart2Parser.T__8);
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
	public importOrExport(): ImportOrExportContext {
		let _localctx: ImportOrExportContext = new ImportOrExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, Dart2Parser.RULE_importOrExport);
		try {
			this.state = 1683;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1681;
				this.libraryimport();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1682;
				this.libraryExport();
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
	public dottedIdentifierList(): DottedIdentifierListContext {
		let _localctx: DottedIdentifierListContext = new DottedIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, Dart2Parser.RULE_dottedIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1685;
			this.identifier();
			this.state = 1690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__0) {
				{
				{
				this.state = 1686;
				this.match(Dart2Parser.T__0);
				this.state = 1687;
				this.identifier();
				}
				}
				this.state = 1692;
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
	public libraryimport(): LibraryimportContext {
		let _localctx: LibraryimportContext = new LibraryimportContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, Dart2Parser.RULE_libraryimport);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1693;
			this.metadata();
			this.state = 1694;
			this.importSpecification();
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
	public importSpecification(): ImportSpecificationContext {
		let _localctx: ImportSpecificationContext = new ImportSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, Dart2Parser.RULE_importSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1696;
			this.match(Dart2Parser.T__110);
			this.state = 1697;
			this.configurableUri();
			this.state = 1700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__87) {
				{
				this.state = 1698;
				this.match(Dart2Parser.T__87);
				this.state = 1699;
				this.identifier();
				}
			}

			this.state = 1705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__111 || _la === Dart2Parser.T__112) {
				{
				{
				this.state = 1702;
				this.combinator();
				}
				}
				this.state = 1707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1708;
			this.match(Dart2Parser.T__8);
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
	public combinator(): CombinatorContext {
		let _localctx: CombinatorContext = new CombinatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, Dart2Parser.RULE_combinator);
		try {
			this.state = 1714;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.T__111:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1710;
				this.match(Dart2Parser.T__111);
				this.state = 1711;
				this.identifierList();
				}
				break;
			case Dart2Parser.T__112:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1712;
				this.match(Dart2Parser.T__112);
				this.state = 1713;
				this.identifierList();
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
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, Dart2Parser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this.identifier();
			this.state = 1721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__0) {
				{
				{
				this.state = 1717;
				this.match(Dart2Parser.T__0);
				this.state = 1718;
				this.identifier();
				}
				}
				this.state = 1723;
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
	public libraryExport(): LibraryExportContext {
		let _localctx: LibraryExportContext = new LibraryExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, Dart2Parser.RULE_libraryExport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1724;
			this.metadata();
			this.state = 1725;
			this.match(Dart2Parser.T__113);
			this.state = 1726;
			this.configurableUri();
			this.state = 1730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__111 || _la === Dart2Parser.T__112) {
				{
				{
				this.state = 1727;
				this.combinator();
				}
				}
				this.state = 1732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1733;
			this.match(Dart2Parser.T__8);
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
	public partDirective(): PartDirectiveContext {
		let _localctx: PartDirectiveContext = new PartDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, Dart2Parser.RULE_partDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1735;
			this.metadata();
			this.state = 1736;
			this.match(Dart2Parser.T__114);
			this.state = 1737;
			this.uri();
			this.state = 1738;
			this.match(Dart2Parser.T__8);
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
	public partHeader(): PartHeaderContext {
		let _localctx: PartHeaderContext = new PartHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, Dart2Parser.RULE_partHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1740;
			this.metadata();
			this.state = 1741;
			this.match(Dart2Parser.T__114);
			this.state = 1742;
			this.match(Dart2Parser.T__115);
			this.state = 1743;
			this.identifier();
			this.state = 1748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__19) {
				{
				{
				this.state = 1744;
				this.match(Dart2Parser.T__19);
				this.state = 1745;
				this.identifier();
				}
				}
				this.state = 1750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1751;
			this.match(Dart2Parser.T__8);
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
	public partDeclaration(): PartDeclarationContext {
		let _localctx: PartDeclarationContext = new PartDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, Dart2Parser.RULE_partDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1753;
			this.partHeader();
			this.state = 1757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__5) | (1 << Dart2Parser.T__17) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__21) | (1 << Dart2Parser.T__22) | (1 << Dart2Parser.T__24) | (1 << Dart2Parser.T__25) | (1 << Dart2Parser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Dart2Parser.T__31 - 32)) | (1 << (Dart2Parser.T__32 - 32)) | (1 << (Dart2Parser.T__34 - 32)) | (1 << (Dart2Parser.T__37 - 32)) | (1 << (Dart2Parser.T__40 - 32)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (Dart2Parser.T__109 - 110)) | (1 << (Dart2Parser.T__110 - 110)) | (1 << (Dart2Parser.T__113 - 110)) | (1 << (Dart2Parser.T__114 - 110)) | (1 << (Dart2Parser.T__116 - 110)) | (1 << (Dart2Parser.IDENTIFIER - 110)))) !== 0)) {
				{
				{
				this.state = 1754;
				this.topLevelDefinition();
				}
				}
				this.state = 1759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1760;
			this.match(Dart2Parser.EOF);
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
	public uri(): UriContext {
		let _localctx: UriContext = new UriContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, Dart2Parser.RULE_uri);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1762;
			this.stringLiteral();
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
	public configurableUri(): ConfigurableUriContext {
		let _localctx: ConfigurableUriContext = new ConfigurableUriContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, Dart2Parser.RULE_configurableUri);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1764;
			this.uri();
			this.state = 1768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__88) {
				{
				{
				this.state = 1765;
				this.configurationUri();
				}
				}
				this.state = 1770;
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
	public configurationUri(): ConfigurationUriContext {
		let _localctx: ConfigurationUriContext = new ConfigurationUriContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, Dart2Parser.RULE_configurationUri);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1771;
			this.match(Dart2Parser.T__88);
			this.state = 1772;
			this.match(Dart2Parser.T__13);
			this.state = 1773;
			this.uriTest();
			this.state = 1774;
			this.match(Dart2Parser.T__14);
			this.state = 1775;
			this.uri();
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
	public uriTest(): UriTestContext {
		let _localctx: UriTestContext = new UriTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, Dart2Parser.RULE_uriTest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
			this.dottedIdentifierList();
			this.state = 1780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__30) {
				{
				this.state = 1778;
				this.match(Dart2Parser.T__30);
				this.state = 1779;
				this.stringLiteral();
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
	public dtype(): DtypeContext {
		let _localctx: DtypeContext = new DtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, Dart2Parser.RULE_dtype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1782;
			this.typeName();
			this.state = 1784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__38) {
				{
				this.state = 1783;
				this.typeArguments();
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
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, Dart2Parser.RULE_typeName);
		try {
			this.state = 1788;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Dart2Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1786;
				this.qualified();
				}
				break;
			case Dart2Parser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1787;
				this.match(Dart2Parser.T__5);
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
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, Dart2Parser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1790;
			this.match(Dart2Parser.T__38);
			this.state = 1791;
			this.typeList();
			this.state = 1792;
			this.match(Dart2Parser.T__39);
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
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, Dart2Parser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1794;
			this.dtype();
			this.state = 1799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Dart2Parser.T__0) {
				{
				{
				this.state = 1795;
				this.match(Dart2Parser.T__0);
				this.state = 1796;
				this.dtype();
				}
				}
				this.state = 1801;
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
	public typeAlias(): TypeAliasContext {
		let _localctx: TypeAliasContext = new TypeAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, Dart2Parser.RULE_typeAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1802;
			this.metadata();
			this.state = 1803;
			this.match(Dart2Parser.T__116);
			this.state = 1804;
			this.typeAliasBody();
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
	public typeAliasBody(): TypeAliasBodyContext {
		let _localctx: TypeAliasBodyContext = new TypeAliasBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, Dart2Parser.RULE_typeAliasBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1806;
			this.functionTypeAlias();
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
	public functionTypeAlias(): FunctionTypeAliasContext {
		let _localctx: FunctionTypeAliasContext = new FunctionTypeAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, Dart2Parser.RULE_functionTypeAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1808;
			this.functionPrefix();
			this.state = 1810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Dart2Parser.T__38) {
				{
				this.state = 1809;
				this.typeParameters();
				}
			}

			this.state = 1812;
			this.formalParameterList();
			this.state = 1813;
			this.match(Dart2Parser.T__8);
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
	public functionPrefix(): FunctionPrefixContext {
		let _localctx: FunctionPrefixContext = new FunctionPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, Dart2Parser.RULE_functionPrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				{
				this.state = 1815;
				this.returnType();
				}
				break;
			}
			this.state = 1818;
			this.identifier();
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

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x80\u071F\x04" +
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
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x03\x02\x03\x02\x05\x02\u015F\n\x02\x03\x03\x03\x03\x03\x03\x07\x03\u0164" +
		"\n\x03\f\x03\x0E\x03\u0167\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x05\x05\u016F\n\x05\x03\x05\x03\x05\x05\x05\u0173\n\x05\x03\x05" +
		"\x05\x05\u0176\n\x05\x03\x06\x03\x06\x05\x06\u017A\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\u017F\n\x07\x03\x07\x03\x07\x07\x07\u0183\n\x07\f\x07" +
		"\x0E\x07\u0186\v\x07\x03\b\x03\b\x03\b\x05\b\u018B\n\b\x03\t\x03\t\x03" +
		"\t\x07\t\u0190\n\t\f\t\x0E\t\u0193\v\t\x03\n\x03\n\x05\n\u0197\n\n\x03" +
		"\n\x03\n\x03\n\x03\v\x05\v\u019D\n\v\x03\v\x03\v\x03\f\x03\f\x05\f\u01A3" +
		"\n\f\x03\r\x05\r\u01A6\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01AD\n" +
		"\r\x03\r\x05\r\u01B0\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u01C0\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01C8" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u01CD\n\x10\f\x10\x0E\x10\u01D0" +
		"\v\x10\x03\x11\x03\x11\x05\x11\u01D4\n\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x07\x12\u01DA\n\x12\f\x12\x0E\x12\u01DD\v\x12\x03\x12\x05\x12\u01E0" +
		"\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u01E8\n" +
		"\x13\f\x13\x0E\x13\u01EB\v\x13\x03\x13\x05\x13\u01EE\n\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x05\x14\u01F5\n\x14\x03\x15\x03\x15\x05\x15" +
		"\u01F9\n\x15\x03\x15\x05\x15\u01FC\n\x15\x03\x15\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u0204\n\x16\x03\x16\x03\x16\x05\x16\u0208\n\x16" +
		"\x03\x17\x03\x17\x05\x17\u020C\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05" +
		"\x17\u0212\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0217\n\x18\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\u021C\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0221" +
		"\n\x19\x05\x19\u0223\n\x19\x03\x1A\x03\x1A\x05\x1A\u0227\n\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u022C\n\x1A\x03\x1A\x05\x1A\u022F\n\x1A\x03\x1A" +
		"\x05\x1A\u0232\n\x1A\x03\x1A\x05\x1A\u0235\n\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x07\x1A\u023B\n\x1A\f\x1A\x0E\x1A\u023E\v\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u0244\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0249" +
		"\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u0254\n\x1C\x03\x1D\x03\x1D\x05\x1D\u0258\n\x1D\x03\x1D" +
		"\x03\x1D\x05\x1D\u025C\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0260\n\x1D\x03\x1D" +
		"\x03\x1D\x05\x1D\u0264\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0268\n\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u026D\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0272" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u027A\n" +
		"\x1E\x05\x1E\u027C\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0281\n\x1E\x05" +
		"\x1E\u0283\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0287\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u028C\n\x1E\x05\x1E\u028E\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0294\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0299\n\x1E\x03" +
		"\x1E\x03\x1E\x05\x1E\u029D\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02A1\n\x1E\x03" +
		"\x1E\x05\x1E\u02A4\n\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u02A9\n\x1F\f" +
		"\x1F\x0E\x1F\u02AC\v\x1F\x03 \x03 \x03 \x03 \x03!\x05!\u02B3\n!\x03!\x03" +
		"!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x05\"\u02BD\n\"\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x05#\u02C5\n#\x03$\x05$\u02C8\n$\x03$\x03$\x03$\x03%\x05%" +
		"\u02CE\n%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x05&\u02D7\n&\x03&\x03&\x03" +
		"\'\x03\'\x03\'\x03\'\x05\'\u02DF\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x07" +
		"(\u02E7\n(\f(\x0E(\u02EA\v(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x05)\u02F5\n)\x03*\x03*\x05*\u02F9\n*\x03*\x03*\x03*\x03*\x07*\u02FF" +
		"\n*\f*\x0E*\u0302\v*\x03+\x03+\x03+\x03+\x05+\u0308\n+\x03+\x03+\x03," +
		"\x05,\u030D\n,\x03,\x03,\x03,\x03,\x05,\u0313\n,\x03,\x03,\x03,\x03,\x03" +
		",\x05,\u031A\n,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
		"0\x030\x050\u0328\n0\x030\x030\x030\x030\x031\x031\x031\x051\u0331\n1" +
		"\x032\x032\x032\x032\x032\x032\x032\x072\u033A\n2\f2\x0E2\u033D\v2\x03" +
		"2\x052\u0340\n2\x032\x032\x033\x033\x033\x034\x034\x034\x034\x054\u034B" +
		"\n4\x035\x035\x035\x035\x075\u0351\n5\f5\x0E5\u0354\v5\x035\x035\x036" +
		"\x036\x036\x036\x056\u035C\n6\x036\x056\u035F\n6\x076\u0361\n6\f6\x0E" +
		"6\u0364\v6\x037\x037\x037\x037\x037\x037\x077\u036C\n7\f7\x0E7\u036F\v" +
		"7\x037\x057\u0372\n7\x038\x038\x038\x038\x038\x038\x058\u037A\n8\x039" +
		"\x039\x039\x079\u037F\n9\f9\x0E9\u0382\v9\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0390\n:\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x05;\u0399\n;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x06?\u03A2" +
		"\n?\r?\x0E?\u03A3\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u03AC\n@\x03A\x03" +
		"A\x03A\x03A\x03A\x07A\u03B3\nA\fA\x0EA\u03B6\vA\x05A\u03B8\nA\x03B\x05" +
		"B\u03BB\nB\x03B\x05B\u03BE\nB\x03B\x03B\x03B\x05B\u03C3\nB\x05B\u03C5" +
		"\nB\x03B\x03B\x03C\x05C\u03CA\nC\x03C\x05C\u03CD\nC\x03C\x03C\x03C\x03" +
		"C\x07C\u03D3\nC\fC\x0EC\u03D6\vC\x03C\x05C\u03D9\nC\x05C\u03DB\nC\x03" +
		"C\x03C\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03" +
		"G\x03H\x03H\x03I\x03I\x03I\x03I\x05I\u03F2\nI\x03I\x03I\x03J\x03J\x03" +
		"J\x03J\x05J\u03FA\nJ\x03J\x03J\x03K\x03K\x03K\x05K\u0401\nK\x05K\u0403" +
		"\nK\x03K\x03K\x03L\x03L\x03L\x07L\u040A\nL\fL\x0EL\u040D\vL\x03L\x03L" +
		"\x03L\x07L\u0412\nL\fL\x0EL\u0415\vL\x05L\u0417\nL\x03M\x03M\x03M\x03" +
		"N\x03N\x03N\x07N\u041F\nN\fN\x0EN\u0422\vN\x03N\x03N\x07N\u0426\nN\fN" +
		"\x0EN\u0429\vN\x07N\u042B\nN\fN\x0EN\u042E\vN\x03N\x03N\x03N\x05N\u0433" +
		"\nN\x03O\x03O\x03O\x03O\x03O\x05O\u043A\nO\x03P\x05P\u043D\nP\x03P\x03" +
		"P\x03Q\x03Q\x05Q\u0443\nQ\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x05" +
		"S\u044D\nS\x03T\x03T\x03T\x07T\u0452\nT\fT\x0ET\u0455\vT\x03U\x03U\x03" +
		"U\x07U\u045A\nU\fU\x0EU\u045D\vU\x03V\x03V\x03V\x07V\u0462\nV\fV\x0EV" +
		"\u0465\vV\x03W\x03W\x03W\x03W\x05W\u046B\nW\x03W\x03W\x03W\x03W\x05W\u0471" +
		"\nW\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u047B\nY\x03Y\x03Y\x03" +
		"Y\x03Y\x05Y\u0481\nY\x03Z\x03Z\x03[\x03[\x03[\x07[\u0488\n[\f[\x0E[\u048B" +
		"\v[\x03[\x03[\x03[\x06[\u0490\n[\r[\x0E[\u0491\x05[\u0494\n[\x03\\\x03" +
		"\\\x03\\\x07\\\u0499\n\\\f\\\x0E\\\u049C\v\\\x03\\\x03\\\x03\\\x06\\\u04A1" +
		"\n\\\r\\\x0E\\\u04A2\x05\\\u04A5\n\\\x03]\x03]\x03]\x07]\u04AA\n]\f]\x0E" +
		"]\u04AD\v]\x03]\x03]\x03]\x06]\u04B2\n]\r]\x0E]\u04B3\x05]\u04B6\n]\x03" +
		"^\x03^\x03_\x03_\x03_\x03_\x07_\u04BE\n_\f_\x0E_\u04C1\v_\x03_\x03_\x03" +
		"_\x03_\x06_\u04C7\n_\r_\x0E_\u04C8\x05_\u04CB\n_\x03`\x03`\x03a\x03a\x03" +
		"a\x03a\x07a\u04D3\na\fa\x0Ea\u04D6\va\x03a\x03a\x03a\x03a\x06a\u04DC\n" +
		"a\ra\x0Ea\u04DD\x05a\u04E0\na\x03b\x03b\x03c\x03c\x03c\x03c\x07c\u04E8" +
		"\nc\fc\x0Ec\u04EB\vc\x03c\x03c\x03c\x03c\x06c\u04F1\nc\rc\x0Ec\u04F2\x05" +
		"c\u04F5\nc\x03d\x03d\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0500\ne" +
		"\x03e\x03e\x03e\x03e\x03e\x05e\u0507\ne\x03f\x03f\x03f\x05f\u050C\nf\x03" +
		"g\x03g\x03h\x03h\x03i\x03i\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x03k\x07" +
		"k\u051C\nk\fk\x0Ek\u051F\vk\x05k\u0521\nk\x03l\x03l\x03m\x03m\x05m\u0527" +
		"\nm\x03n\x03n\x03o\x03o\x07o\u052D\no\fo\x0Eo\u0530\vo\x03o\x05o\u0533" +
		"\no\x03o\x03o\x03o\x03o\x05o\u0539\no\x03p\x03p\x03p\x03p\x03p\x03p\x05" +
		"p\u0541\np\x03q\x03q\x03q\x05q\u0546\nq\x03r\x03r\x03s\x03s\x03s\x05s" +
		"\u054D\ns\x03t\x03t\x03t\x03u\x03u\x05u\u0554\nu\x03v\x03v\x03v\x03w\x03" +
		"w\x03x\x07x\u055C\nx\fx\x0Ex\u055F\vx\x03y\x07y\u0562\ny\fy\x0Ey\u0565" +
		"\vy\x03y\x03y\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03" +
		"z\x03z\x03z\x03z\x03z\x03z\x05z\u057A\nz\x03{\x05{\u057D\n{\x03{\x03{" +
		"\x03|\x03|\x03|\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x05" +
		"~\u058E\n~\x03\x7F\x05\x7F\u0591\n\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
		"\x03\x7F\x03\x7F\x03\x80\x03\x80\x05\x80\u059B\n\x80\x03\x80\x03\x80\x05" +
		"\x80\u059F\n\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80" +
		"\x03\x80\x05\x80\u05A9\n\x80\x03\x81\x03\x81\x05\x81\u05AD\n\x81\x03\x81" +
		"\x05\x81\u05B0\n\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03" +
		"\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x03\x84\x07\x84\u05C6\n\x84\f\x84\x0E\x84" +
		"\u05C9\v\x84\x03\x84\x05\x84\u05CC\n\x84\x03\x84\x03\x84\x03\x85\x07\x85" +
		"\u05D1\n\x85\f\x85\x0E\x85\u05D4\v\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x86\x07\x86\u05DC\n\x86\f\x86\x0E\x86\u05DF\v\x86\x03\x86" +
		"\x03\x86\x03\x86\x03\x86\x03\x87\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88" +
		"\x06\x88\u05EB\n\x88\r\x88\x0E\x88\u05EC\x03\x88\x05\x88\u05F0\n\x88\x03" +
		"\x88\x05\x88\u05F3\n\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89" +
		"\x05\x89\u05FB\n\x89\x03\x89\x03\x89\x05\x89\u05FF\n\x89\x03\x8A\x03\x8A" +
		"\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0606\n\x8A\x03\x8A\x03\x8A\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8C\x03\x8C\x05\x8C\u060F\n\x8C\x03\x8C\x03\x8C\x03\x8D" +
		"\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u0618\n\x8E\x03\x8E\x03\x8E\x03" +
		"\x8F\x03\x8F\x05\x8F\u061E\n\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90" +
		"\x03\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03\x93" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x05\x93\u0632\n\x93\x03\x93\x05\x93\u0635" +
		"\n\x93\x03\x93\x03\x93\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u063D\n" +
		"\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u0643\n\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x05\x94\u0649\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03" +
		"\x94\x03\x94\x03\x94\x05\x94\u0652\n\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x05\x94\u0659\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03" +
		"\x94\x03\x94\x05\x94\u0662\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x05\x94\u066A\n\x94\x03\x95\x03\x95\x03\x96\x05\x96\u066F\n\x96" +
		"\x03\x96\x05\x96\u0672\n\x96\x03\x96\x07\x96\u0675\n\x96\f\x96\x0E\x96" +
		"\u0678\v\x96\x03\x96\x07\x96\u067B\n\x96\f\x96\x0E\x96\u067E\v\x96\x03" +
		"\x96\x07\x96\u0681\n\x96\f\x96\x0E\x96\u0684\v\x96\x03\x97\x03\x97\x07" +
		"\x97\u0688\n\x97\f\x97\x0E\x97\u068B\v\x97\x03\x97\x03\x97\x03\x98\x03" +
		"\x98\x03\x98\x03\x98\x03\x98\x03\x99\x03\x99\x05\x99\u0696\n\x99\x03\x9A" +
		"\x03\x9A\x03\x9A\x07\x9A\u069B\n\x9A\f\x9A\x0E\x9A\u069E\v\x9A\x03\x9B" +
		"\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x05\x9C\u06A7\n\x9C\x03" +
		"\x9C\x07\x9C\u06AA\n\x9C\f\x9C\x0E\x9C\u06AD\v\x9C\x03\x9C\x03\x9C\x03" +
		"\x9D\x03\x9D\x03\x9D\x03\x9D\x05\x9D\u06B5\n\x9D\x03\x9E\x03\x9E\x03\x9E" +
		"\x07\x9E\u06BA\n\x9E\f\x9E\x0E\x9E\u06BD\v\x9E\x03\x9F\x03\x9F\x03\x9F" +
		"\x03\x9F\x07\x9F\u06C3\n\x9F\f\x9F\x0E\x9F\u06C6\v\x9F\x03\x9F\x03\x9F" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1" +
		"\x03\xA1\x03\xA1\x07\xA1\u06D5\n\xA1\f\xA1\x0E\xA1\u06D8\v\xA1\x03\xA1" +
		"\x03\xA1\x03\xA2\x03\xA2\x07\xA2\u06DE\n\xA2\f\xA2\x0E\xA2\u06E1\v\xA2" +
		"\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x07\xA4\u06E9\n\xA4\f" +
		"\xA4\x0E\xA4\u06EC\v\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5" +
		"\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u06F7\n\xA6\x03\xA7\x03\xA7\x05\xA7\u06FB" +
		"\n\xA7\x03\xA8\x03\xA8\x05\xA8\u06FF\n\xA8\x03\xA9\x03\xA9\x03\xA9\x03" +
		"\xA9\x03\xAA\x03\xAA\x03\xAA\x07\xAA\u0708\n\xAA\f\xAA\x0E\xAA\u070B\v" +
		"\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x05" +
		"\xAD\u0715\n\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAE\x05\xAE\u071B\n\xAE\x03" +
		"\xAE\x03\xAE\x03\xAE\x02\x02\x02\xAF\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02" +
		"\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02" +
		"\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
		"\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C" +
		"\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A" +
		"\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158" +
		"\x02\u015A\x02\x02\x12\x04\x02\t\t\f\r\x03\x02\x04\x05\x04\x02\x14\x14" +
		"\x1B\x1B\x03\x02yz\x03\x02-.\x03\x02{|\x03\x025@\x04\x02!!EE\x04\x02)" +
		"*FG\x03\x02HJ\x03\x02KM\x03\x02NO\x03\x02PS\x03\x02VW\x03\x02\"#\x03\x02" +
		"}}\x02\u078F\x02\u015E\x03\x02\x02\x02\x04\u0160\x03\x02\x02\x02\x06\u0168" +
		"\x03\x02\x02\x02\b\u0175\x03\x02\x02\x02\n\u0179\x03\x02\x02\x02\f\u017B" +
		"\x03\x02\x02\x02\x0E\u0187\x03\x02\x02\x02\x10\u018C\x03\x02\x02\x02\x12" +
		"\u0194\x03\x02\x02\x02\x14\u019C\x03\x02\x02\x02\x16\u01A2\x03\x02\x02" +
		"\x02\x18\u01AF\x03\x02\x02\x02\x1A\u01B1\x03\x02\x02\x02\x1C\u01C7\x03" +
		"\x02\x02\x02\x1E\u01C9\x03\x02\x02\x02 \u01D3\x03\x02\x02\x02\"\u01D5" +
		"\x03\x02\x02\x02$\u01E3\x03\x02\x02\x02&\u01F4\x03\x02\x02\x02(\u01F6" +
		"\x03\x02\x02\x02*\u0207\x03\x02\x02\x02,\u0209\x03\x02\x02\x02.\u0213" +
		"\x03\x02\x02\x020\u0222\x03\x02\x02\x022\u0248\x03\x02\x02\x024\u024A" +
		"\x03\x02\x02\x026\u0253\x03\x02\x02\x028\u0267\x03\x02\x02\x02:\u02A3" +
		"\x03\x02\x02\x02<\u02A5\x03\x02\x02\x02>\u02AD\x03\x02\x02\x02@\u02B2" +
		"\x03\x02\x02\x02B\u02BC\x03\x02\x02\x02D\u02C4\x03\x02\x02\x02F\u02C7" +
		"\x03\x02\x02\x02H\u02CD\x03\x02\x02\x02J\u02D3\x03\x02\x02\x02L\u02DA" +
		"\x03\x02\x02\x02N\u02E2\x03\x02\x02\x02P\u02F4\x03\x02\x02\x02R\u02F8" +
		"\x03\x02\x02\x02T\u0303\x03\x02\x02\x02V\u030C\x03\x02\x02\x02X\u031B" +
		"\x03\x02\x02\x02Z\u031F\x03\x02\x02\x02\\\u0322\x03\x02\x02\x02^\u0325" +
		"\x03\x02\x02\x02`\u032D\x03\x02\x02\x02b\u0332\x03\x02\x02\x02d\u0343" +
		"\x03\x02\x02\x02f\u0346\x03\x02\x02\x02h\u034C\x03\x02\x02\x02j\u0362" +
		"\x03\x02\x02\x02l\u0371\x03\x02\x02\x02n\u0379\x03\x02\x02\x02p\u037B" +
		"\x03\x02\x02\x02r\u038F\x03\x02\x02\x02t\u0398\x03\x02\x02\x02v\u039A" +
		"\x03\x02\x02\x02x\u039C\x03\x02\x02\x02z\u039E\x03\x02\x02\x02|\u03A1" +
		"\x03\x02\x02\x02~\u03AB\x03\x02\x02\x02\x80\u03AD\x03\x02\x02\x02\x82" +
		"\u03BA\x03\x02\x02\x02\x84\u03C9\x03\x02\x02\x02\x86\u03DE\x03\x02\x02" +
		"\x02\x88\u03E2\x03\x02\x02\x02\x8A\u03E5\x03\x02\x02\x02\x8C\u03E8\x03" +
		"\x02\x02\x02\x8E\u03EB\x03\x02\x02\x02\x90\u03ED\x03\x02\x02\x02\x92\u03F5" +
		"\x03\x02\x02\x02\x94\u03FD\x03\x02\x02\x02\x96\u0416\x03\x02\x02\x02\x98" +
		"\u0418\x03\x02\x02\x02\x9A\u041B\x03\x02\x02\x02\x9C\u0439\x03\x02\x02" +
		"\x02\x9E\u043C\x03\x02\x02\x02\xA0\u0442\x03\x02\x02\x02\xA2\u0444\x03" +
		"\x02\x02\x02\xA4\u0446\x03\x02\x02\x02\xA6\u044E\x03\x02\x02\x02\xA8\u0456" +
		"\x03\x02\x02\x02\xAA\u045E\x03\x02\x02\x02\xAC\u0470\x03\x02\x02\x02\xAE" +
		"\u0472\x03\x02\x02\x02\xB0\u0480\x03\x02\x02\x02\xB2\u0482\x03\x02\x02" +
		"\x02\xB4\u0493\x03\x02\x02\x02\xB6\u04A4\x03\x02\x02\x02\xB8\u04B5\x03" +
		"\x02\x02\x02\xBA\u04B7\x03\x02\x02\x02\xBC\u04CA\x03\x02\x02\x02\xBE\u04CC" +
		"\x03\x02\x02\x02\xC0\u04DF\x03\x02\x02\x02\xC2\u04E1\x03\x02\x02\x02\xC4" +
		"\u04F4\x03\x02\x02\x02\xC6\u04F6\x03\x02\x02\x02\xC8\u0506\x03\x02\x02" +
		"\x02\xCA\u050B\x03\x02\x02\x02\xCC\u050D\x03\x02\x02\x02\xCE\u050F\x03" +
		"\x02\x02\x02\xD0\u0511\x03\x02\x02\x02\xD2\u0513\x03\x02\x02\x02\xD4\u0520" +
		"\x03\x02\x02\x02\xD6\u0522\x03\x02\x02\x02\xD8\u0526\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\xDA\u0528\x03\x02\x02\x02\xDC\u0538\x03\x02\x02\x02\xDE\u0540\x03" +
		"\x02\x02\x02\xE0\u0545\x03\x02\x02\x02\xE2\u0547\x03\x02\x02\x02\xE4\u0549" +
		"\x03\x02\x02\x02\xE6\u054E\x03\x02\x02\x02\xE8\u0551\x03\x02\x02\x02\xEA" +
		"\u0555\x03\x02\x02\x02\xEC\u0558\x03\x02\x02\x02\xEE\u055D\x03\x02\x02" +
		"\x02\xF0\u0563\x03\x02\x02\x02\xF2\u0579\x03\x02\x02\x02\xF4\u057C\x03" +
		"\x02\x02\x02\xF6\u0580\x03\x02\x02\x02\xF8\u0583\x03\x02\x02\x02\xFA\u0586" +
		"\x03\x02\x02\x02\xFC\u0590\x03\x02\x02\x02\xFE\u05A8\x03\x02\x02\x02\u0100" +
		"\u05AF\x03\x02\x02\x02\u0102\u05B1\x03\x02\x02\x02\u0104\u05B7\x03\x02" +
		"\x02\x02\u0106\u05BF\x03\x02\x02\x02\u0108\u05D2\x03\x02\x02\x02\u010A" +
		"\u05DD\x03\x02\x02\x02\u010C\u05E4\x03\x02\x02\x02\u010E\u05E7\x03\x02" +
		"\x02\x02\u0110\u05FE\x03\x02\x02\x02\u0112\u0600\x03\x02\x02\x02\u0114" +
		"\u0609\x03\x02\x02\x02\u0116\u060C\x03\x02\x02\x02\u0118\u0612\x03\x02" +
		"\x02\x02\u011A\u0615\x03\x02\x02\x02\u011C\u061B\x03\x02\x02\x02\u011E" +
		"\u0621\x03\x02\x02\x02\u0120\u0625\x03\x02\x02\x02\u0122\u0629\x03\x02" +
		"\x02\x02\u0124\u062C\x03\x02\x02\x02\u0126\u0669\x03\x02\x02\x02\u0128" +
		"\u066B\x03\x02\x02\x02\u012A\u066E\x03\x02\x02\x02\u012C\u0685\x03\x02" +
		"\x02\x02\u012E\u068E\x03\x02\x02\x02\u0130\u0695\x03\x02\x02\x02\u0132" +
		"\u0697\x03\x02\x02\x02\u0134\u069F\x03\x02\x02\x02\u0136\u06A2\x03\x02" +
		"\x02\x02\u0138\u06B4\x03\x02\x02\x02\u013A\u06B6\x03\x02\x02\x02\u013C" +
		"\u06BE\x03\x02\x02\x02\u013E\u06C9\x03\x02\x02\x02\u0140\u06CE\x03\x02" +
		"\x02\x02\u0142\u06DB\x03\x02\x02\x02\u0144\u06E4\x03\x02\x02\x02\u0146" +
		"\u06E6\x03\x02\x02\x02\u0148\u06ED\x03\x02\x02\x02\u014A\u06F3\x03\x02" +
		"\x02\x02\u014C\u06F8\x03\x02\x02\x02\u014E\u06FE\x03\x02\x02\x02\u0150" +
		"\u0700\x03\x02\x02\x02\u0152\u0704\x03\x02\x02\x02\u0154\u070C\x03\x02" +
		"\x02\x02\u0156\u0710\x03\x02\x02\x02\u0158\u0712\x03\x02\x02\x02\u015A" +
		"\u071A\x03\x02\x02\x02\u015C\u015F\x05\u012A\x96\x02\u015D\u015F\x05\u0142" +
		"\xA2\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015D\x03\x02\x02\x02\u015F" +
		"\x03\x03\x02\x02\x02\u0160\u0165\x05\x06\x04\x02\u0161\u0162\x07\x03\x02" +
		"\x02\u0162\u0164\x05\xE2r\x02\u0163\u0161\x03\x02\x02\x02\u0164\u0167" +
		"\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02" +
		"\u0166\x05\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168\u0169\x05" +
		"j6\x02\u0169\u016A\x05\b\x05\x02\u016A\u016B\x05\xE2r\x02\u016B\x07\x03" +
		"\x02\x02\x02\u016C\u016E\x07\x04\x02\x02\u016D\u016F\x05\u014C\xA7\x02" +
		"\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0176\x03" +
		"\x02\x02\x02\u0170\u0172\x07\x05\x02\x02\u0171\u0173\x05\u014C\xA7\x02" +
		"\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0176\x03" +
		"\x02\x02\x02\u0174\u0176\x05\n\x06\x02\u0175\u016C\x03\x02\x02\x02\u0175" +
		"\u0170\x03\x02\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176\t\x03\x02\x02" +
		"\x02\u0177\u017A\x07\x06\x02\x02\u0178\u017A\x05\u014C\xA7\x02\u0179\u0177" +
		"\x03\x02\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A\v\x03\x02\x02\x02\u017B" +
		"\u017E\x05\x06\x04\x02\u017C\u017D\x07\x07\x02\x02\u017D\u017F\x05l7\x02" +
		"\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0184\x03" +
		"\x02\x02\x02\u0180\u0181\x07\x03\x02\x02\u0181\u0183\x05\x0E\b\x02\u0182" +
		"\u0180\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02" +
		"\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\r\x03\x02\x02\x02\u0186\u0184" +
		"\x03\x02\x02\x02\u0187\u018A\x05\xE2r\x02\u0188\u0189\x07\x07\x02\x02" +
		"\u0189\u018B\x05l7\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02" +
		"\x02\x02\u018B\x0F\x03\x02\x02\x02\u018C\u0191\x05\x0E\b\x02\u018D\u018E" +
		"\x07\x03\x02\x02\u018E\u0190\x05\x0E\b\x02\u018F\u018D\x03\x02\x02\x02" +
		"\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03" +
		"\x02\x02\x02\u0192\x11\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194" +
		"\u0196\x05j6\x02\u0195\u0197\x05\x16\f\x02\u0196\u0195\x03\x02\x02\x02" +
		"\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x05" +
		"\xE2r\x02\u0199\u019A\x05\x14\v\x02\u019A\x13\x03\x02\x02\x02\u019B\u019D" +
		"\x05h5\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D" +
		"\u019E\x03\x02\x02\x02\u019E\u019F\x05\x1C\x0F\x02\u019F\x15\x03\x02\x02" +
		"\x02\u01A0\u01A3\x07\b\x02\x02\u01A1\u01A3\x05\u014C\xA7\x02\u01A2\u01A0" +
		"\x03\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3\x17\x03\x02\x02\x02" +
		"\u01A4\u01A6\x07\t\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03" +
		"\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x07\n\x02\x02\u01A8" +
		"\u01A9\x05l7\x02\u01A9\u01AA\x07\v\x02\x02\u01AA\u01B0\x03\x02\x02\x02" +
		"\u01AB\u01AD\t\x02\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC\u01AD\x03" +
		"\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B0\x05\x1A\x0E\x02\u01AF" +
		"\u01A5\x03\x02\x02\x02\u01AF\u01AC\x03\x02\x02\x02\u01B0\x19\x03\x02\x02" +
		"\x02\u01B1\u01B2\x07\x0E\x02\x02\u01B2\u01B3\x05\xEEx\x02\u01B3\u01B4" +
		"\x07\x0F\x02\x02\u01B4\x1B\x03\x02\x02\x02\u01B5\u01B6\x07\x10\x02\x02" +
		"\u01B6\u01C8\x07\x11\x02\x02\u01B7\u01B8\x07\x10\x02\x02\u01B8\u01B9\x05" +
		"\x1E\x10\x02\u01B9\u01BA\x07\x11\x02\x02\u01BA\u01C8\x03\x02\x02\x02\u01BB" +
		"\u01BC\x07\x10\x02\x02\u01BC\u01BF\x05\x1E\x10\x02\u01BD\u01BE\x07\x03" +
		"\x02\x02\u01BE\u01C0\x05 \x11\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0" +
		"\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x07\x11\x02\x02" +
		"\u01C2\u01C8\x03\x02\x02\x02\u01C3\u01C4\x07\x10\x02\x02\u01C4\u01C5\x05" +
		" \x11\x02\u01C5\u01C6\x07\x11\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7" +
		"\u01B5\x03\x02\x02\x02\u01C7\u01B7\x03\x02\x02\x02\u01C7\u01BB\x03\x02" +
		"\x02\x02\u01C7\u01C3\x03\x02\x02\x02\u01C8\x1D\x03\x02\x02\x02\u01C9\u01CE" +
		"\x05&\x14\x02\u01CA\u01CB\x07\x03\x02\x02\u01CB\u01CD\x05&\x14\x02\u01CC" +
		"\u01CA\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03\x02" +
		"\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\x1F\x03\x02\x02\x02\u01D0\u01CE" +
		"\x03\x02\x02\x02\u01D1\u01D4\x05\"\x12\x02\u01D2\u01D4\x05$\x13\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4!\x03\x02\x02" +
		"\x02\u01D5\u01D6\x07\x12\x02\x02\u01D6\u01DB\x05.\x18\x02\u01D7\u01D8" +
		"\x07\x03\x02\x02\u01D8\u01DA\x05.\x18\x02\u01D9\u01D7\x03\x02\x02\x02" +
		"\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03" +
		"\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DE" +
		"\u01E0\x07\x03\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03\x02" +
		"\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x07\x13\x02\x02\u01E2" +
		"#\x03\x02\x02\x02\u01E3\u01E4\x07\x0E\x02\x02\u01E4\u01E9\x050\x19\x02" +
		"\u01E5\u01E6\x07\x03\x02\x02\u01E6\u01E8\x050\x19\x02\u01E7\u01E5\x03" +
		"\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9" +
		"\u01EA\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03\x02" +
		"\x02\x02\u01EC\u01EE\x07\x03\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED" +
		"\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x07\x0F" +
		"\x02\x02\u01F0%\x03\x02\x02\x02\u01F1\u01F5\x05(\x15\x02\u01F2\u01F5\x05" +
		",\x17\x02\u01F3\u01F5\x05*\x16\x02\u01F4\u01F1\x03\x02\x02\x02\u01F4\u01F2" +
		"\x03\x02\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F5\'\x03\x02\x02\x02\u01F6" +
		"\u01F8\x05j6\x02\u01F7\u01F9\x07\x14\x02\x02\u01F8\u01F7\x03\x02\x02\x02" +
		"\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FB\x03\x02\x02\x02\u01FA\u01FC\x05" +
		"\x16\f\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC" +
		"\u01FD\x03\x02\x02\x02\u01FD\u01FE\x05\xE2r\x02\u01FE\u01FF\x05\x14\v" +
		"\x02\u01FF)\x03\x02\x02\x02\u0200\u0208\x05\x06\x04\x02\u0201\u0203\x05" +
		"j6\x02\u0202\u0204\x07\x14\x02\x02\u0203\u0202\x03\x02\x02\x02\u0203\u0204" +
		"\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x05\xE2r\x02" +
		"\u0206\u0208\x03\x02\x02\x02\u0207\u0200\x03\x02\x02\x02\u0207\u0201\x03" +
		"\x02\x02\x02\u0208+\x03\x02\x02\x02\u0209\u020B\x05j6\x02\u020A\u020C" +
		"\x05\b\x05\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02" +
		"\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x07\x15\x02\x02\u020E\u020F\x07" +
		"\x16\x02\x02\u020F\u0211\x05\xE2r\x02\u0210\u0212\x05\x14\v\x02\u0211" +
		"\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212-\x03\x02\x02" +
		"\x02\u0213\u0216\x05&\x14\x02\u0214\u0215\x07\x07\x02\x02\u0215\u0217" +
		"\x05l7\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217" +
		"/\x03\x02\x02\x02\u0218\u021B\x05&\x14\x02\u0219\u021A\x07\x07\x02\x02" +
		"\u021A\u021C\x05l7\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02" +
		"\x02\x02\u021C\u0223\x03\x02\x02\x02\u021D\u0220\x05&\x14\x02\u021E\u021F" +
		"\x07\x17\x02\x02\u021F\u0221\x05l7\x02\u0220\u021E\x03\x02\x02\x02\u0220" +
		"\u0221\x03\x02\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u0218\x03\x02" +
		"\x02\x02\u0222\u021D\x03\x02\x02\x02\u02231\x03\x02\x02\x02\u0224\u0226" +
		"\x05j6\x02\u0225\u0227\x07\x18\x02\x02\u0226\u0225\x03\x02\x02\x02\u0226" +
		"\u0227\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x07\x19" +
		"\x02\x02\u0229\u022B\x05\xE2r\x02\u022A\u022C\x05h5\x02\u022B\u022A\x03" +
		"\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x03\x02\x02\x02\u022D" +
		"\u022F\x05Z.\x02\u022E\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02" +
		"\u022F\u0231\x03\x02\x02\x02\u0230\u0232\x054\x1B\x02\u0231\u0230\x03" +
		"\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0234\x03\x02\x02\x02\u0233" +
		"\u0235\x05\\/\x02\u0234\u0233\x03\x02\x02\x02\u0234\u0235\x03\x02\x02" +
		"\x02\u0235\u0236\x03\x02\x02\x02\u0236\u023C\x07\x0E\x02\x02\u0237\u0238" +
		"\x05j6\x02\u0238\u0239\x056\x1C\x02\u0239\u023B\x03\x02\x02\x02\u023A" +
		"\u0237\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02" +
		"\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023F\x03\x02\x02\x02\u023E" +
		"\u023C\x03\x02\x02\x02\u023F\u0240\x07\x0F\x02\x02\u0240\u0249\x03\x02" +
		"\x02\x02\u0241\u0243\x05j6\x02\u0242\u0244\x07\x18\x02\x02\u0243\u0242" +
		"\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02" +
		"\u0245\u0246\x07\x19\x02\x02\u0246\u0247\x05^0\x02\u0247\u0249\x03\x02" +
		"\x02\x02\u0248\u0224\x03\x02\x02\x02\u0248\u0241\x03\x02\x02\x02\u0249" +
		"3\x03\x02\x02\x02\u024A\u024B\x07\x1A\x02\x02\u024B\u024C\x05\u0152\xAA" +
		"\x02\u024C5\x03\x02\x02\x02\u024D\u024E\x05:\x1E\x02\u024E\u024F\x07\v" +
		"\x02\x02\u024F\u0254\x03\x02\x02\x02\u0250\u0251\x058\x1D\x02\u0251\u0252" +
		"\x05\x18\r\x02\u0252\u0254\x03\x02\x02\x02\u0253\u024D\x03\x02\x02\x02" +
		"\u0253\u0250\x03\x02\x02\x02\u02547\x03\x02\x02\x02\u0255\u0257\x05J&" +
		"\x02\u0256\u0258\x05N(\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03" +
		"\x02\x02\x02\u0258\u0268\x03\x02\x02\x02\u0259\u0268\x05T+\x02\u025A\u025C" +
		"\x07\x1B\x02\x02\u025B\u025A\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02" +
		"\u025C\u025D\x03\x02\x02\x02\u025D\u0268\x05\x12\n\x02\u025E\u0260\x07" +
		"\x1B\x02\x02\u025F\u025E\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
		"\u0261\x03\x02\x02\x02\u0261\u0268\x05F$\x02\u0262\u0264\x07\x1B\x02\x02" +
		"\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0265\x03" +
		"\x02\x02\x02\u0265\u0268\x05H%\x02\u0266\u0268\x05@!\x02\u0267\u0255\x03" +
		"\x02\x02\x02\u0267\u0259\x03\x02\x02\x02\u0267\u025B\x03\x02\x02\x02\u0267" +
		"\u025F\x03\x02\x02\x02\u0267\u0263\x03\x02\x02\x02\u0267\u0266\x03\x02" +
		"\x02\x02\u02689\x03\x02\x02\x02\u0269\u026C\x05X-\x02\u026A\u026D\x05" +
		"L\'\x02\u026B\u026D\x05N(\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B" +
		"\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u02A4\x03\x02\x02\x02" +
		"\u026E\u0271\x05J&\x02\u026F\u0272\x05L\'\x02\u0270\u0272\x05N(\x02\u0271" +
		"\u026F\x03\x02\x02\x02\u0271\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02" +
		"\x02\x02\u0272\u02A4\x03\x02\x02\x02\u0273\u0274\x07\x1C\x02\x02\u0274" +
		"\u02A4\x05X-\x02\u0275\u0276\x07\x1C\x02\x02\u0276\u02A4\x05J&\x02\u0277" +
		"\u0279\x07\x1C\x02\x02\u0278\u027A\x07\x1B\x02\x02\u0279\u0278\x03\x02" +
		"\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B" +
		"\u0277\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027D\x03\x02" +
		"\x02\x02\u027D\u02A4\x05F$\x02\u027E\u0280\x07\x1C\x02\x02\u027F\u0281" +
		"\x07\x1B\x02\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02" +
		"\u0281\u0283\x03\x02\x02\x02\u0282\u027E\x03\x02\x02\x02\u0282\u0283\x03" +
		"\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u02A4\x05H%\x02\u0285\u0287" +
		"\x07\x1C\x02\x02\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02" +
		"\u0287\u0288\x03\x02\x02\x02\u0288\u02A4\x05@!\x02\u0289\u028B\x07\x1C" +
		"\x02\x02\u028A\u028C\x07\x1B\x02\x02\u028B\u028A\x03\x02\x02\x02\u028B" +
		"\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D\u0289\x03\x02" +
		"\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F" +
		"\u02A4\x05\x12\n\x02\u0290\u0291\x07\x1B\x02\x02\u0291\u0293\t\x03\x02" +
		"\x02\u0292\u0294\x05\u014C\xA7\x02\u0293\u0292\x03\x02\x02\x02\u0293\u0294" +
		"\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u02A4\x05<\x1F\x02" +
		"\u0296\u0298\x07\x04\x02\x02\u0297\u0299\x05\u014C\xA7\x02\u0298\u0297" +
		"\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02" +
		"\u029A\u02A4\x05\x10\t\x02\u029B\u029D\t\x04\x02\x02\u029C\u029B\x03\x02" +
		"\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E" +
		"\u02A1\x07\x06\x02\x02\u029F\u02A1\x05\u014C\xA7\x02\u02A0\u029E\x03\x02" +
		"\x02\x02\u02A0\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
		"\u02A4\x05\x10\t\x02\u02A3\u0269\x03\x02\x02\x02\u02A3\u026E\x03\x02\x02" +
		"\x02\u02A3\u0273\x03\x02\x02\x02\u02A3\u0275\x03\x02\x02\x02\u02A3\u027B" +
		"\x03\x02\x02\x02\u02A3\u0282\x03\x02\x02\x02\u02A3\u0286\x03\x02\x02\x02" +
		"\u02A3\u028D\x03\x02\x02\x02\u02A3\u0290\x03\x02\x02\x02\u02A3\u0296\x03" +
		"\x02\x02\x02\u02A3\u029C\x03\x02\x02\x02\u02A4;\x03\x02\x02\x02\u02A5" +
		"\u02AA\x05> \x02\u02A6\u02A7\x07\x03\x02\x02\u02A7\u02A9\x05> \x02\u02A8" +
		"\u02A6\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02" +
		"\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB=\x03\x02\x02\x02\u02AC\u02AA" +
		"\x03\x02\x02\x02\u02AD\u02AE\x05\xE2r\x02\u02AE\u02AF\x07\x07\x02\x02" +
		"\u02AF\u02B0\x05l7\x02\u02B0?\x03\x02\x02\x02\u02B1\u02B3\x05\x16\f\x02" +
		"\u02B2\u02B1\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B4\x03" +
		"\x02\x02\x02\u02B4\u02B5\x07\x1D\x02\x02\u02B5\u02B6\x05B\"\x02\u02B6" +
		"\u02B7\x05\x1C\x0F\x02\u02B7A\x03\x02\x02\x02\u02B8\u02BD\x07\x1E\x02" +
		"\x02\u02B9\u02BD\x05D#\x02\u02BA\u02BD\x07\x1F\x02\x02\u02BB\u02BD\x07" +
		" \x02\x02\u02BC\u02B8\x03\x02\x02\x02\u02BC\u02B9\x03\x02\x02\x02\u02BC" +
		"\u02BA\x03\x02\x02\x02\u02BC\u02BB\x03\x02\x02\x02\u02BDC\x03\x02\x02" +
		"\x02\u02BE\u02C5\x05\xC6d\x02\u02BF\u02C5\x05\xC2b\x02\u02C0\u02C5\x05" +
		"\xBE`\x02\u02C1\u02C5\x05\xB2Z\x02\u02C2\u02C5\x07!\x02\x02\u02C3\u02C5" +
		"\x05\xBA^\x02\u02C4\u02BE\x03\x02\x02\x02\u02C4\u02BF\x03\x02\x02\x02" +
		"\u02C4\u02C0\x03\x02\x02\x02\u02C4\u02C1\x03\x02\x02\x02\u02C4\u02C2\x03" +
		"\x02\x02\x02\u02C4\u02C3\x03\x02\x02\x02\u02C5E\x03\x02\x02\x02\u02C6" +
		"\u02C8\x05\x16\f\x02\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02" +
		"\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CA\x07\"\x02\x02\u02CA\u02CB" +
		"\x05\xE2r\x02\u02CBG\x03\x02\x02\x02\u02CC\u02CE\x05\x16\f\x02\u02CD\u02CC" +
		"\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02" +
		"\u02CF\u02D0\x07#\x02\x02\u02D0\u02D1\x05\xE2r\x02\u02D1\u02D2\x05\x1C" +
		"\x0F\x02\u02D2I\x03\x02\x02\x02\u02D3\u02D6\x05\xE2r\x02\u02D4\u02D5\x07" +
		"\x16\x02\x02\u02D5\u02D7\x05\xE2r\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6" +
		"\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x05\x1C" +
		"\x0F\x02\u02D9K\x03\x02\x02\x02\u02DA\u02DB\x07\x17\x02\x02\u02DB\u02DE" +
		"\x07\x15\x02\x02\u02DC\u02DD\x07\x16\x02\x02\u02DD\u02DF\x05\xE2r\x02" +
		"\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E0\x03" +
		"\x02\x02\x02\u02E0\u02E1\x05\x94K\x02\u02E1M\x03\x02\x02\x02\u02E2\u02E3" +
		"\x07\x17\x02\x02\u02E3\u02E8\x05P)\x02\u02E4\u02E5\x07\x03\x02\x02\u02E5" +
		"\u02E7\x05P)\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02EA\x03\x02\x02\x02" +
		"\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9O\x03\x02" +
		"\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EC\x07$\x02\x02\u02EC\u02F5" +
		"\x05\x94K\x02\u02ED\u02EE\x07$\x02\x02\u02EE\u02EF\x07\x16\x02\x02\u02EF" +
		"\u02F0\x05\xE2r\x02\u02F0\u02F1\x05\x94K\x02\u02F1\u02F5\x03\x02\x02\x02" +
		"\u02F2\u02F5\x05R*\x02\u02F3\u02F5\x05\u0124\x93\x02\u02F4\u02EB\x03\x02" +
		"\x02\x02\u02F4\u02ED\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4" +
		"\u02F3\x03\x02\x02\x02\u02F5Q\x03\x02\x02\x02\u02F6\u02F7\x07\x15\x02" +
		"\x02\u02F7\u02F9\x07\x16\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9" +
		"\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FB\x05\xE2r\x02" +
		"\u02FB\u02FC\x07\x07\x02\x02\u02FC\u0300\x05\xA4S\x02\u02FD\u02FF\x05" +
		"\x9AN\x02\u02FE\u02FD\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300" +
		"\u02FE\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301S\x03\x02\x02" +
		"\x02\u0302\u0300\x03\x02\x02\x02\u0303\u0304\x07%\x02\x02\u0304\u0307" +
		"\x05\xE2r\x02\u0305\u0306\x07\x16\x02\x02\u0306\u0308\x05\xE2r\x02\u0307" +
		"\u0305\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x03\x02" +
		"\x02\x02\u0309\u030A\x05\x1C\x0F\x02\u030AU\x03\x02\x02\x02\u030B\u030D" +
		"\x07\x05\x02\x02\u030C\u030B\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02" +
		"\u030D\u030E\x03\x02\x02\x02\u030E\u030F\x07%\x02\x02\u030F\u0312\x05" +
		"\xE2r\x02\u0310\u0311\x07\x16\x02\x02\u0311\u0313\x05\xE2r\x02\u0312\u0310" +
		"\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02" +
		"\u0314\u0315\x05\x1C\x0F\x02\u0315\u0316\x07\x07\x02\x02\u0316\u0319\x05" +
		"\u014C\xA7\x02\u0317\u0318\x07\x16\x02\x02\u0318\u031A\x05\xE2r\x02\u0319" +
		"\u0317\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031AW\x03\x02\x02" +
		"\x02\u031B\u031C\x07\x05\x02\x02\u031C\u031D\x05\xE4s\x02\u031D\u031E" +
		"\x05\x1C\x0F\x02\u031EY\x03\x02\x02\x02\u031F\u0320\x07&\x02\x02\u0320" +
		"\u0321\x05\u014C\xA7\x02\u0321[\x03\x02\x02\x02\u0322\u0323\x07\'\x02" +
		"\x02\u0323\u0324\x05\u0152\xAA\x02\u0324]\x03\x02\x02\x02\u0325\u0327" +
		"\x05\xE2r\x02\u0326\u0328\x05h5\x02\u0327\u0326\x03\x02\x02\x02\u0327" +
		"\u0328\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x07\x07" +
		"\x02\x02\u032A\u032B\x05`1\x02\u032B\u032C\x07\v\x02\x02\u032C_\x03\x02" +
		"\x02\x02\u032D\u032E\x05\u014C\xA7\x02\u032E\u0330\x054\x1B\x02\u032F" +
		"\u0331\x05\\/\x02\u0330\u032F\x03\x02\x02\x02\u0330\u0331\x03\x02\x02" +
		"\x02\u0331a\x03\x02\x02\x02\u0332\u0333\x05j6\x02\u0333\u0334\x07(\x02" +
		"\x02\u0334\u0335\x05\xE2r\x02\u0335\u0336\x07\x0E\x02\x02\u0336\u033B" +
		"\x05d3\x02\u0337\u0338\x07\x03\x02\x02\u0338\u033A\x05d3\x02\u0339\u0337" +
		"\x03\x02\x02\x02\u033A\u033D\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02" +
		"\u033B\u033C\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B\x03" +
		"\x02\x02\x02\u033E\u0340\x07\x03\x02\x02\u033F\u033E\x03\x02\x02\x02\u033F" +
		"\u0340\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0342\x07\x0F" +
		"\x02\x02\u0342c\x03\x02\x02\x02\u0343\u0344\x05j6\x02\u0344\u0345\x05" +
		"\xE2r\x02\u0345e\x03\x02\x02\x02\u0346\u0347\x05j6\x02\u0347\u034A\x05" +
		"\xE2r\x02\u0348\u0349\x07&\x02\x02\u0349\u034B\x05\u014C\xA7\x02\u034A" +
		"\u0348\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034Bg\x03\x02\x02" +
		"\x02\u034C\u034D\x07)\x02\x02\u034D\u0352\x05f4\x02\u034E\u034F\x07\x03" +
		"\x02\x02\u034F\u0351\x05f4\x02\u0350\u034E\x03\x02\x02\x02\u0351\u0354" +
		"\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02" +
		"\u0353\u0355\x03\x02\x02\x02\u0354\u0352\x03\x02\x02\x02\u0355\u0356\x07" +
		"*\x02\x02\u0356i\x03\x02\x02\x02\u0357\u0358\x07+\x02\x02\u0358\u035B" +
		"\x05\xE4s\x02\u0359\u035A\x07\x16\x02\x02\u035A\u035C\x05\xE2r\x02\u035B" +
		"\u0359\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035E\x03\x02" +
		"\x02\x02\u035D\u035F\x05\x94K\x02\u035E\u035D\x03\x02\x02\x02\u035E\u035F" +
		"\x03\x02\x02\x02\u035F\u0361\x03\x02\x02\x02\u0360\u0357\x03\x02\x02\x02" +
		"\u0361\u0364\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03" +
		"\x02\x02\x02\u0363k\x03\x02\x02\x02\u0364\u0362\x03\x02\x02\x02\u0365" +
		"\u0366\x05\xDCo\x02\u0366\u0367\x05\xA0Q\x02\u0367\u0368\x05l7\x02\u0368" +
		"\u0372\x03\x02\x02\x02\u0369\u036D\x05\xA4S\x02\u036A\u036C\x05\x9AN\x02" +
		"\u036B\u036A\x03\x02\x02\x02\u036C\u036F\x03\x02\x02\x02\u036D\u036B\x03" +
		"\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u0372\x03\x02\x02\x02\u036F" +
		"\u036D\x03\x02\x02\x02\u0370\u0372\x05\x88E\x02\u0371\u0365\x03\x02\x02" +
		"\x02\u0371\u0369\x03\x02\x02\x02\u0371\u0370\x03\x02\x02\x02\u0372m\x03" +
		"\x02\x02\x02\u0373\u0374\x05\xDCo\x02\u0374\u0375\x05\xA0Q\x02\u0375\u0376" +
		"\x05n8\x02\u0376\u037A\x03\x02\x02\x02\u0377\u037A\x05\xA4S\x02\u0378" +
		"\u037A\x05\x8AF\x02\u0379\u0373\x03\x02\x02\x02\u0379\u0377\x03\x02\x02" +
		"\x02\u0379\u0378\x03\x02\x02\x02\u037Ao\x03\x02\x02\x02\u037B\u0380\x05" +
		"l7\x02\u037C\u037D\x07\x03\x02\x02\u037D\u037F\x05l7\x02\u037E\u037C\x03" +
		"\x02\x02\x02\u037F\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380" +
		"\u0381\x03\x02\x02\x02\u0381q\x03\x02\x02\x02\u0382\u0380\x03\x02\x02" +
		"\x02\u0383\u0390\x05\x8EH\x02\u0384\u0385\x07$\x02\x02\u0385\u0390\x05" +
		"\xDEp\x02\u0386\u0390\x05\x8CG\x02\u0387\u0390\x05t;\x02\u0388\u0390\x05" +
		"\xE2r\x02\u0389\u0390\x05\x90I\x02\u038A\u0390\x05\x92J\x02\u038B\u038C" +
		"\x07\x10\x02\x02\u038C\u038D\x05l7\x02\u038D\u038E\x07\x11\x02\x02\u038E" +
		"\u0390\x03\x02\x02\x02\u038F\u0383\x03\x02\x02\x02\u038F\u0384\x03\x02" +
		"\x02\x02\u038F\u0386\x03\x02\x02\x02\u038F\u0387\x03\x02\x02\x02\u038F" +
		"\u0388\x03\x02\x02\x02\u038F\u0389\x03\x02\x02\x02\u038F\u038A\x03\x02" +
		"\x02\x02\u038F\u038B\x03\x02\x02\x02\u0390s\x03\x02\x02\x02\u0391\u0399" +
		"\x05v<\x02\u0392\u0399\x05z>\x02\u0393\u0399\x05x=\x02\u0394\u0399\x05" +
		"|?\x02\u0395\u0399\x05\x80A\x02\u0396\u0399\x05\x84C\x02\u0397\u0399\x05" +
		"\x82B\x02\u0398\u0391\x03\x02\x02\x02\u0398\u0392\x03\x02\x02\x02\u0398" +
		"\u0393\x03\x02\x02\x02\u0398\u0394\x03\x02\x02\x02\u0398\u0395\x03\x02" +
		"\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397\x03\x02\x02\x02\u0399" +
		"u\x03\x02\x02\x02\u039A\u039B\x07,\x02\x02\u039Bw\x03\x02\x02\x02\u039C" +
		"\u039D\t\x05\x02\x02\u039Dy\x03\x02\x02\x02\u039E\u039F\t\x06\x02\x02" +
		"\u039F{\x03\x02\x02\x02\u03A0\u03A2\t\x07\x02\x02\u03A1\u03A0\x03\x02" +
		"\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A3" +
		"\u03A4\x03\x02\x02\x02\u03A4}\x03\x02\x02\x02\u03A5\u03A6\x07/\x02\x02" +
		"\u03A6\u03AC\x05\xE2r\x02\u03A7\u03A8\x070\x02\x02\u03A8\u03A9\x05l7\x02" +
		"\u03A9\u03AA\x07\x0F\x02\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB\u03A5\x03" +
		"\x02\x02\x02\u03AB\u03A7\x03\x02\x02\x02\u03AC\x7F\x03\x02\x02\x02\u03AD" +
		"\u03B7\x071\x02\x02\u03AE\u03B8\x05B\"\x02\u03AF\u03B4\x05\xE2r\x02\u03B0" +
		"\u03B1\x07\x03\x02\x02\u03B1\u03B3\x05\xE2r\x02\u03B2\u03B0\x03\x02\x02" +
		"\x02\u03B3\u03B6\x03\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B4\u03B5" +
		"\x03\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02\u03B6\u03B4\x03\x02\x02\x02" +
		"\u03B7\u03AE\x03\x02\x02\x02\u03B7\u03AF\x03\x02\x02\x02\u03B8\x81\x03" +
		"\x02\x02\x02\u03B9\u03BB\x07\x05\x02\x02\u03BA\u03B9\x03\x02\x02\x02\u03BA" +
		"\u03BB\x03\x02\x02\x02\u03BB\u03BD\x03\x02\x02\x02\u03BC\u03BE\x05\u0150" +
		"\xA9\x02\u03BD\u03BC\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE" +
		"\u03BF\x03\x02\x02\x02\u03BF\u03C4\x07\x12\x02\x02\u03C0\u03C2\x05p9\x02" +
		"\u03C1\u03C3\x07\x03\x02\x02\u03C2\u03C1\x03\x02\x02\x02\u03C2\u03C3\x03" +
		"\x02\x02\x02\u03C3\u03C5\x03\x02\x02\x02\u03C4\u03C0\x03\x02\x02\x02\u03C4" +
		"\u03C5\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C7\x07\x13" +
		"\x02\x02\u03C7\x83\x03\x02\x02\x02\u03C8\u03CA\x07\x05\x02\x02\u03C9\u03C8" +
		"\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CC\x03\x02\x02\x02" +
		"\u03CB\u03CD\x05\u0150\xA9\x02\u03CC\u03CB\x03\x02\x02\x02\u03CC";
	private static readonly _serializedATNSegment2: string =
		"\u03CD\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03DA\x07\x0E" +
		"\x02\x02\u03CF\u03D4\x05\x86D\x02\u03D0\u03D1\x07\x03\x02\x02\u03D1\u03D3" +
		"\x05\x86D\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02" +
		"\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D8\x03" +
		"\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03D9\x07\x03\x02\x02\u03D8" +
		"\u03D7\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DB\x03\x02" +
		"\x02\x02\u03DA\u03CF\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB" +
		"\u03DC\x03\x02\x02\x02\u03DC\u03DD\x07\x0F\x02\x02\u03DD\x85\x03\x02\x02" +
		"\x02\u03DE\u03DF\x05l7\x02\u03DF\u03E0\x07\x17\x02\x02\u03E0\u03E1\x05" +
		"l7\x02\u03E1\x87\x03\x02\x02\x02\u03E2\u03E3\x072\x02\x02\u03E3\u03E4" +
		"\x05l7\x02\u03E4\x89\x03\x02\x02\x02\u03E5\u03E6\x072\x02\x02\u03E6\u03E7" +
		"\x05n8\x02\u03E7\x8B\x03\x02\x02\x02\u03E8\u03E9\x05\x14\v\x02\u03E9\u03EA" +
		"\x05\x18\r\x02\u03EA\x8D\x03\x02\x02\x02\u03EB\u03EC\x07\x15\x02\x02\u03EC" +
		"\x8F\x03\x02\x02\x02\u03ED\u03EE\x073\x02\x02\u03EE\u03F1\x05\u014C\xA7" +
		"\x02\u03EF\u03F0\x07\x16\x02\x02\u03F0\u03F2\x05\xE2r\x02\u03F1\u03EF" +
		"\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02" +
		"\u03F3\u03F4\x05\x94K\x02\u03F4\x91\x03\x02\x02\x02\u03F5\u03F6\x07\x05" +
		"\x02\x02\u03F6\u03F9\x05\u014C\xA7\x02\u03F7\u03F8\x07\x16\x02\x02\u03F8" +
		"\u03FA\x05\xE2r\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02" +
		"\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FC\x05\x94K\x02\u03FC\x93\x03" +
		"\x02\x02\x02\u03FD\u0402\x07\x10\x02\x02\u03FE\u0400\x05\x96L\x02\u03FF" +
		"\u0401\x07\x03\x02\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401\x03\x02" +
		"\x02\x02\u0401\u0403\x03\x02\x02\x02\u0402\u03FE\x03\x02\x02\x02\u0402" +
		"\u0403\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\u0405\x07\x11" +
		"\x02\x02\u0405\x95\x03\x02\x02\x02\u0406\u040B\x05\x98M\x02\u0407\u0408" +
		"\x07\x03\x02\x02\u0408\u040A\x05\x98M\x02\u0409\u0407\x03\x02\x02\x02" +
		"\u040A\u040D\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040B\u040C\x03" +
		"\x02\x02\x02\u040C\u0417\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E" +
		"\u0413\x05p9\x02\u040F\u0410\x07\x03\x02\x02\u0410\u0412\x05\x98M\x02" +
		"\u0411\u040F\x03\x02\x02\x02\u0412\u0415\x03\x02\x02\x02\u0413\u0411\x03" +
		"\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0417\x03\x02\x02\x02\u0415" +
		"\u0413\x03\x02\x02\x02\u0416\u0406\x03\x02\x02\x02\u0416\u040E\x03\x02" +
		"\x02\x02\u0417\x97\x03\x02\x02\x02\u0418\u0419\x05\u0118\x8D\x02\u0419" +
		"\u041A\x05l7\x02\u041A\x99\x03\x02\x02\x02\u041B\u041C\x074\x02\x02\u041C" +
		"\u0420\x05\x9CO\x02\u041D\u041F\x05\x9EP\x02\u041E\u041D\x03\x02\x02\x02" +
		"\u041F\u0422\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0420\u0421\x03" +
		"\x02\x02\x02\u0421\u042C\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0423" +
		"\u0427\x05\xE0q\x02\u0424\u0426\x05\x9EP\x02\u0425\u0424\x03\x02\x02\x02" +
		"\u0426\u0429\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0428\x03" +
		"\x02\x02\x02\u0428\u042B\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u042A" +
		"\u0423\x03\x02\x02\x02\u042B\u042E\x03\x02\x02\x02\u042C\u042A\x03\x02" +
		"\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u0432\x03\x02\x02\x02\u042E" +
		"\u042C\x03\x02\x02\x02\u042F\u0430\x05\xA0Q\x02\u0430\u0431\x05n8\x02" +
		"\u0431\u0433\x03\x02\x02\x02\u0432\u042F\x03\x02\x02\x02\u0432\u0433\x03" +
		"\x02\x02\x02\u0433\x9B\x03\x02\x02\x02\u0434\u0435\x07\x12\x02\x02\u0435" +
		"\u0436\x05l7\x02\u0436\u0437\x07\x13\x02\x02\u0437\u043A\x03\x02\x02\x02" +
		"\u0438\u043A\x05\xE2r\x02\u0439\u0434\x03\x02\x02\x02\u0439\u0438\x03" +
		"\x02\x02\x02\u043A\x9D\x03\x02\x02\x02\u043B\u043D\x05\u0150\xA9\x02\u043C" +
		"\u043B\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x03\x02" +
		"\x02\x02\u043E\u043F\x05\x94K\x02\u043F\x9F\x03\x02\x02\x02\u0440\u0443" +
		"\x07\x07\x02\x02\u0441\u0443\x05\xA2R\x02\u0442\u0440\x03\x02\x02\x02" +
		"\u0442\u0441\x03\x02\x02\x02\u0443\xA1\x03\x02\x02\x02\u0444\u0445\t\b" +
		"\x02\x02\u0445\xA3\x03\x02\x02\x02\u0446\u044C\x05\xA6T\x02\u0447\u0448" +
		"\x07A\x02\x02\u0448\u0449\x05n8\x02\u0449\u044A\x07\x17\x02\x02\u044A" +
		"\u044B\x05n8\x02\u044B\u044D\x03\x02\x02\x02\u044C\u0447\x03\x02\x02\x02" +
		"\u044C\u044D\x03\x02\x02\x02\u044D\xA5\x03\x02\x02\x02\u044E\u0453\x05" +
		"\xA8U\x02\u044F\u0450\x07B\x02\x02\u0450\u0452\x05\xA8U\x02\u0451\u044F" +
		"\x03\x02\x02\x02\u0452\u0455\x03\x02\x02\x02\u0453\u0451\x03\x02\x02\x02" +
		"\u0453\u0454\x03\x02\x02\x02\u0454\xA7\x03\x02\x02\x02\u0455\u0453\x03" +
		"\x02\x02\x02\u0456\u045B\x05\xAAV\x02\u0457\u0458\x07C\x02\x02\u0458\u045A" +
		"\x05\xAAV\x02\u0459\u0457\x03\x02\x02\x02\u045A\u045D\x03\x02\x02\x02" +
		"\u045B\u0459\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\xA9\x03" +
		"\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045E\u0463\x05\xACW\x02\u045F" +
		"\u0460\x07D\x02\x02\u0460\u0462\x05\xACW\x02\u0461\u045F\x03\x02\x02\x02" +
		"\u0462\u0465\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02\u0463\u0464\x03" +
		"\x02\x02\x02\u0464\xAB\x03\x02\x02\x02\u0465\u0463\x03\x02\x02\x02\u0466" +
		"\u046A\x05\xB0Y\x02\u0467\u0468\x05\xAEX\x02\u0468\u0469\x05\xB0Y\x02" +
		"\u0469\u046B\x03\x02\x02\x02\u046A\u0467\x03\x02\x02\x02\u046A\u046B\x03" +
		"\x02\x02\x02\u046B\u0471\x03\x02\x02\x02\u046C\u046D\x07$\x02\x02\u046D" +
		"\u046E\x05\xAEX\x02\u046E\u046F\x05\xB0Y\x02\u046F\u0471\x03\x02\x02\x02" +
		"\u0470\u0466\x03\x02\x02\x02\u0470\u046C\x03\x02\x02\x02\u0471\xAD\x03" +
		"\x02\x02\x02\u0472\u0473\t\t\x02\x02\u0473\xAF\x03\x02\x02\x02\u0474\u047A" +
		"\x05\xB4[\x02\u0475\u047B\x05\xE6t\x02\u0476\u047B\x05\xEAv\x02\u0477" +
		"\u0478\x05\xB2Z\x02\u0478\u0479\x05\xB4[\x02\u0479\u047B\x03\x02\x02\x02" +
		"\u047A\u0475\x03\x02\x02\x02\u047A\u0476\x03\x02\x02\x02\u047A\u0477\x03" +
		"\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u0481\x03\x02\x02\x02\u047C" +
		"\u047D\x07$\x02\x02\u047D\u047E\x05\xB2Z\x02\u047E\u047F\x05\xB4[\x02" +
		"\u047F\u0481\x03\x02\x02\x02\u0480\u0474\x03\x02\x02\x02\u0480\u047C\x03" +
		"\x02\x02\x02\u0481\xB1\x03\x02\x02\x02\u0482\u0483\t\n\x02\x02\u0483\xB3" +
		"\x03\x02\x02\x02\u0484\u0489\x05\xB6\\\x02\u0485\u0486\x07H\x02\x02\u0486" +
		"\u0488\x05\xB6\\\x02\u0487\u0485\x03\x02\x02\x02\u0488\u048B\x03\x02\x02" +
		"\x02\u0489\u0487\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u0494" +
		"\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048C\u048F\x07$\x02\x02" +
		"\u048D\u048E\x07H\x02\x02\u048E\u0490\x05\xB4[\x02\u048F\u048D\x03\x02" +
		"\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0491" +
		"\u0492\x03\x02\x02\x02\u0492\u0494\x03\x02\x02\x02\u0493\u0484\x03\x02" +
		"\x02\x02\u0493\u048C\x03\x02\x02\x02\u0494\xB5\x03\x02\x02\x02\u0495\u049A" +
		"\x05\xB8]\x02\u0496\u0497\x07I\x02\x02\u0497\u0499\x05\xB8]\x02\u0498" +
		"\u0496\x03\x02\x02\x02\u0499\u049C\x03\x02\x02\x02\u049A\u0498\x03\x02" +
		"\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u04A5\x03\x02\x02\x02\u049C" +
		"\u049A\x03\x02\x02\x02\u049D\u04A0\x07$\x02\x02\u049E\u049F\x07I\x02\x02" +
		"\u049F\u04A1\x05\xB8]\x02\u04A0\u049E\x03\x02\x02\x02\u04A1\u04A2\x03" +
		"\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3" +
		"\u04A5\x03\x02\x02\x02\u04A4\u0495\x03\x02\x02\x02\u04A4\u049D\x03\x02" +
		"\x02\x02\u04A5\xB7\x03\x02\x02\x02\u04A6\u04AB\x05\xBC_\x02\u04A7\u04A8" +
		"\x07J\x02\x02\u04A8\u04AA\x05\xBC_\x02\u04A9\u04A7\x03\x02\x02\x02\u04AA" +
		"\u04AD\x03\x02\x02\x02\u04AB\u04A9\x03\x02\x02\x02\u04AB\u04AC\x03\x02" +
		"\x02\x02\u04AC\u04B6\x03\x02\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AE" +
		"\u04B1\x07$\x02\x02\u04AF\u04B0\x07J\x02\x02\u04B0\u04B2\x05\xBC_\x02" +
		"\u04B1\u04AF\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B1\x03" +
		"\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B6\x03\x02\x02\x02\u04B5" +
		"\u04A6\x03\x02\x02\x02\u04B5\u04AE\x03\x02\x02\x02\u04B6\xB9\x03\x02\x02" +
		"\x02\u04B7\u04B8\t\v\x02\x02\u04B8\xBB\x03\x02\x02\x02\u04B9\u04BF\x05" +
		"\xC0a\x02\u04BA\u04BB\x05\xBE`\x02\u04BB\u04BC\x05\xC0a\x02\u04BC\u04BE" +
		"\x03\x02\x02\x02\u04BD\u04BA\x03\x02\x02\x02\u04BE\u04C1\x03\x02\x02\x02" +
		"\u04BF\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04CB\x03" +
		"\x02\x02\x02\u04C1\u04BF\x03\x02\x02\x02\u04C2\u04C6\x07$\x02\x02\u04C3" +
		"\u04C4\x05\xBE`\x02\u04C4\u04C5\x05\xC0a\x02\u04C5\u04C7\x03\x02\x02\x02" +
		"\u04C6\u04C3\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04C6\x03" +
		"\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CB\x03\x02\x02\x02\u04CA" +
		"\u04B9\x03\x02\x02\x02\u04CA\u04C2\x03\x02\x02\x02\u04CB\xBD\x03\x02\x02" +
		"\x02\u04CC\u04CD\t\f\x02\x02\u04CD\xBF\x03\x02\x02\x02\u04CE\u04D4\x05" +
		"\xC4c\x02\u04CF\u04D0\x05\xC2b\x02\u04D0\u04D1\x05\xC4c\x02\u04D1\u04D3" +
		"\x03\x02\x02\x02\u04D2\u04CF\x03\x02\x02\x02\u04D3\u04D6\x03\x02\x02\x02" +
		"\u04D4\u04D2\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04E0\x03" +
		"\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D7\u04DB\x07$\x02\x02\u04D8" +
		"\u04D9\x05\xC2b\x02\u04D9\u04DA\x05\xC4c\x02\u04DA\u04DC\x03\x02\x02\x02" +
		"\u04DB\u04D8\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DB\x03" +
		"\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE\u04E0\x03\x02\x02\x02\u04DF" +
		"\u04CE\x03\x02\x02\x02\u04DF\u04D7\x03\x02\x02\x02\u04E0\xC1\x03\x02\x02" +
		"\x02\u04E1\u04E2\t\r\x02\x02\u04E2\xC3\x03\x02\x02\x02\u04E3\u04E9\x05" +
		"\xC8e\x02\u04E4\u04E5\x05\xC6d\x02\u04E5\u04E6\x05\xC8e\x02\u04E6\u04E8" +
		"\x03\x02\x02\x02\u04E7\u04E4\x03\x02\x02\x02\u04E8\u04EB\x03\x02\x02\x02" +
		"\u04E9\u04E7\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04F5\x03" +
		"\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EC\u04F0\x07$\x02\x02\u04ED" +
		"\u04EE\x05\xC6d\x02\u04EE\u04EF\x05\xC8e\x02\u04EF\u04F1\x03\x02\x02\x02" +
		"\u04F0\u04ED\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F0\x03" +
		"\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F5\x03\x02\x02\x02\u04F4" +
		"\u04E3\x03\x02\x02\x02\u04F4\u04EC\x03\x02\x02\x02\u04F5\xC5\x03\x02\x02" +
		"\x02\u04F6\u04F7\t\x0E\x02\x02\u04F7\xC7\x03\x02\x02\x02\u04F8\u04F9\x05" +
		"\xCAf\x02\u04F9\u04FA\x05\xC8e\x02\u04FA\u0507\x03\x02\x02\x02\u04FB\u0507" +
		"\x05\xD2j\x02\u04FC\u0507\x05\xD4k\x02\u04FD\u0500\x05\xCCg\x02\u04FE" +
		"\u0500\x05\xD0i\x02\u04FF\u04FD\x03\x02\x02\x02\u04FF\u04FE\x03\x02\x02" +
		"\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0502\x07$\x02\x02\u0502\u0507" +
		"\x03\x02\x02\x02\u0503\u0504\x05\xDAn\x02\u0504\u0505\x05\xDCo\x02\u0505" +
		"\u0507\x03\x02\x02\x02\u0506\u04F8\x03\x02\x02\x02\u0506\u04FB\x03\x02" +
		"\x02\x02\u0506\u04FC\x03\x02\x02\x02\u0506\u04FF\x03\x02\x02\x02\u0506" +
		"\u0503\x03\x02\x02\x02\u0507\xC9\x03\x02\x02\x02\u0508\u050C\x05\xCCg" +
		"\x02\u0509\u050C\x05\xCEh\x02\u050A\u050C\x05\xD0i\x02\u050B\u0508\x03" +
		"\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050B\u050A\x03\x02\x02\x02\u050C" +
		"\xCB\x03\x02\x02\x02\u050D\u050E\x07O\x02\x02\u050E\xCD\x03\x02\x02\x02" +
		"\u050F\u0510\x07T\x02\x02\u0510\xCF\x03\x02\x02\x02\u0511\u0512\x07\x1E" +
		"\x02\x02\u0512\xD1\x03\x02\x02\x02\u0513\u0514\x07U\x02\x02\u0514\u0515" +
		"\x05\xC8e\x02\u0515\xD3\x03\x02\x02\x02\u0516\u0517\x05\xDCo\x02\u0517" +
		"\u0518\x05\xD6l\x02\u0518\u0521\x03\x02\x02\x02\u0519\u051D\x05r:\x02" +
		"\u051A\u051C\x05\xD8m\x02\u051B\u051A\x03\x02\x02\x02\u051C\u051F\x03" +
		"\x02\x02\x02\u051D\u051B\x03\x02\x02\x02\u051D\u051E\x03\x02\x02\x02\u051E" +
		"\u0521\x03\x02\x02\x02\u051F\u051D\x03\x02\x02\x02\u0520\u0516\x03\x02" +
		"\x02\x02\u0520\u0519\x03\x02\x02\x02\u0521\xD5\x03\x02\x02\x02\u0522\u0523" +
		"\x05\xDAn\x02\u0523\xD7\x03\x02\x02\x02\u0524\u0527\x05\xE0q\x02\u0525" +
		"\u0527\x05\x9EP\x02\u0526\u0524\x03\x02\x02\x02\u0526\u0525\x03\x02\x02" +
		"\x02\u0527\xD9\x03\x02\x02\x02\u0528\u0529\t\x0F\x02\x02\u0529\xDB\x03" +
		"\x02\x02\x02\u052A\u0532\x05r:\x02\u052B\u052D\x05\x9EP\x02\u052C\u052B" +
		"\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E\u052C\x03\x02\x02\x02" +
		"\u052E\u052F\x03\x02\x02\x02\u052F\u0531\x03\x02\x02\x02\u0530\u052E\x03" +
		"\x02\x02\x02\u0531\u0533\x05\xE0q\x02\u0532\u052E\x03\x02\x02\x02\u0532" +
		"\u0533\x03\x02\x02\x02\u0533\u0539\x03\x02\x02\x02\u0534\u0535\x07$\x02" +
		"\x02\u0535\u0536\x05\xDEp\x02\u0536\u0537\x05\xE2r\x02\u0537\u0539\x03" +
		"\x02\x02\x02\u0538\u052A\x03\x02\x02\x02\u0538\u0534\x03\x02\x02\x02\u0539" +
		"\xDD\x03\x02\x02\x02\u053A\u053B\x07\x12\x02\x02\u053B\u053C\x05l7\x02" +
		"\u053C\u053D\x07\x13\x02\x02\u053D\u0541\x03\x02\x02\x02\u053E\u053F\x07" +
		"\x16\x02\x02\u053F\u0541\x05\xE2r\x02\u0540\u053A\x03\x02\x02\x02\u0540" +
		"\u053E\x03\x02\x02\x02\u0541\xDF\x03\x02\x02\x02\u0542\u0546\x05\xDEp" +
		"\x02\u0543\u0544\x07X\x02\x02\u0544\u0546\x05\xE2r\x02\u0545\u0542\x03" +
		"\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0546\xE1\x03\x02\x02\x02\u0547" +
		"\u0548\x07~\x02\x02\u0548\xE3\x03\x02\x02\x02\u0549\u054C\x05\xE2r\x02" +
		"\u054A\u054B\x07\x16\x02\x02\u054B\u054D\x05\xE2r\x02\u054C\u054A\x03" +
		"\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\xE5\x03\x02\x02\x02\u054E" +
		"\u054F\x05\xE8u\x02\u054F\u0550\x05\u014C\xA7\x02\u0550\xE7\x03\x02\x02" +
		"\x02\u0551\u0553\x07Y\x02\x02\u0552\u0554\x07T\x02\x02\u0553\u0552\x03" +
		"\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\xE9\x03\x02\x02\x02\u0555" +
		"\u0556\x05\xECw\x02\u0556\u0557\x05\u014C\xA7\x02\u0557\xEB\x03\x02\x02" +
		"\x02\u0558\u0559\x07Z\x02\x02\u0559\xED\x03\x02\x02\x02\u055A\u055C\x05" +
		"\xF0y\x02\u055B\u055A\x03\x02\x02\x02\u055C\u055F\x03\x02\x02\x02\u055D" +
		"\u055B\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\xEF\x03\x02\x02" +
		"\x02\u055F\u055D\x03\x02\x02\x02\u0560\u0562\x05\u0118\x8D\x02\u0561\u0560" +
		"\x03\x02\x02\x02\u0562\u0565\x03\x02\x02\x02\u0563\u0561\x03\x02\x02\x02" +
		"\u0563\u0564\x03\x02\x02\x02\u0564\u0566\x03\x02\x02\x02\u0565\u0563\x03" +
		"\x02\x02\x02\u0566\u0567\x05\xF2z\x02\u0567\xF1\x03\x02\x02\x02\u0568" +
		"\u057A\x05\x1A\x0E\x02\u0569\u057A\x05\xF6|\x02\u056A\u057A\x05\xFC\x7F" +
		"\x02\u056B\u057A\x05\u0102\x82\x02\u056C\u057A\x05\u0104\x83\x02\u056D" +
		"\u057A\x05\u0106\x84\x02\u056E\u057A\x05\xFA~\x02\u056F\u057A\x05\u010C" +
		"\x87\x02\u0570\u057A\x05\u010E\x88\x02\u0571\u057A\x05\u011A\x8E\x02\u0572" +
		"\u057A\x05\u011C\x8F\x02\u0573\u057A\x05\u0116\x8C\x02\u0574\u057A\x05" +
		"\u011E\x90\x02\u0575\u057A\x05\u0120\x91\x02\u0576\u057A\x05\xF4{\x02" +
		"\u0577\u057A\x05\u0122\x92\x02\u0578\u057A\x05\xF8}\x02\u0579\u0568\x03" +
		"\x02\x02\x02\u0579\u0569\x03\x02\x02\x02\u0579\u056A\x03\x02\x02\x02\u0579" +
		"\u056B\x03\x02\x02\x02\u0579\u056C\x03\x02\x02\x02\u0579\u056D\x03\x02" +
		"\x02\x02\u0579\u056E\x03\x02\x02\x02\u0579\u056F\x03\x02\x02\x02\u0579" +
		"\u0570\x03\x02\x02\x02\u0579\u0571\x03\x02\x02\x02\u0579\u0572\x03\x02" +
		"\x02\x02\u0579\u0573\x03\x02\x02\x02\u0579\u0574\x03\x02\x02\x02\u0579" +
		"\u0575\x03\x02\x02\x02\u0579\u0576\x03\x02\x02\x02\u0579\u0577\x03\x02" +
		"\x02\x02\u0579\u0578\x03\x02\x02\x02\u057A\xF3\x03\x02\x02\x02\u057B\u057D" +
		"\x05l7\x02\u057C\u057B\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D" +
		"\u057E\x03\x02\x02\x02\u057E\u057F\x07\v\x02\x02\u057F\xF5\x03\x02\x02" +
		"\x02\u0580\u0581\x05\f\x07\x02\u0581\u0582\x07\v\x02\x02\u0582\xF7\x03" +
		"\x02\x02\x02\u0583\u0584\x05\x12\n\x02\u0584\u0585\x05\x18\r\x02\u0585" +
		"\xF9\x03\x02\x02\x02\u0586\u0587\x07[\x02\x02\u0587\u0588\x07\x10\x02" +
		"\x02\u0588\u0589\x05l7\x02\u0589\u058A\x07\x11\x02\x02\u058A\u058D\x05" +
		"\xF0y\x02\u058B\u058C\x07\\\x02\x02\u058C\u058E\x05\xF0y\x02\u058D\u058B" +
		"\x03\x02\x02\x02\u058D\u058E\x03\x02\x02\x02\u058E\xFB\x03\x02\x02\x02" +
		"\u058F\u0591\x07U\x02\x02\u0590\u058F\x03\x02\x02\x02\u0590\u0591\x03" +
		"\x02\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\u0593\x07]\x02\x02\u0593" +
		"\u0594\x07\x10\x02\x02\u0594\u0595\x05\xFE\x80\x02\u0595\u0596\x07\x11" +
		"\x02\x02\u0596\u0597\x05\xF0y\x02\u0597\xFD\x03\x02\x02\x02\u0598\u059A" +
		"\x05\u0100\x81\x02\u0599\u059B\x05l7\x02\u059A\u0599\x03\x02\x02\x02\u059A" +
		"\u059B\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\u059E\x07\v\x02" +
		"\x02\u059D\u059F\x05p9\x02\u059E\u059D\x03\x02\x02\x02\u059E\u059F\x03" +
		"\x02\x02\x02\u059F\u05A9\x03\x02\x02\x02\u05A0\u05A1\x05\x06\x04\x02\u05A1" +
		"\u05A2\x07^\x02\x02\u05A2\u05A3\x05l7\x02\u05A3\u05A9\x03\x02\x02\x02" +
		"\u05A4\u05A5\x05\xE2r\x02\u05A5\u05A6\x07^\x02\x02\u05A6\u05A7\x05l7\x02" +
		"\u05A7\u05A9\x03\x02\x02\x02\u05A8\u0598\x03\x02\x02\x02\u05A8\u05A0\x03" +
		"\x02\x02\x02\u05A8\u05A4\x03\x02\x02\x02\u05A9\xFF\x03\x02\x02\x02\u05AA" +
		"\u05B0\x05\xF6|\x02\u05AB\u05AD\x05l7\x02\u05AC\u05AB\x03\x02\x02\x02" +
		"\u05AC\u05AD\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE\u05B0\x07" +
		"\v\x02\x02\u05AF\u05AA\x03\x02\x02\x02\u05AF\u05AC\x03\x02\x02\x02\u05B0" +
		"\u0101\x03\x02\x02\x02\u05B1\u05B2\x07_\x02\x02\u05B2\u05B3\x07\x10\x02" +
		"\x02\u05B3\u05B4\x05l7\x02\u05B4\u05B5\x07\x11\x02\x02\u05B5\u05B6\x05" +
		"\xF0y\x02\u05B6\u0103\x03\x02\x02\x02\u05B7\u05B8\x07`\x02\x02\u05B8\u05B9" +
		"\x05\xF0y\x02\u05B9\u05BA\x07_\x02\x02\u05BA\u05BB\x07\x10\x02\x02\u05BB" +
		"\u05BC\x05l7\x02\u05BC\u05BD\x07\x11\x02\x02\u05BD\u05BE\x07\v\x02\x02" +
		"\u05BE\u0105\x03\x02\x02\x02\u05BF\u05C0\x07a\x02\x02\u05C0\u05C1\x07" +
		"\x10\x02\x02\u05C1\u05C2\x05l7\x02\u05C2\u05C3\x07\x11\x02\x02\u05C3\u05C7" +
		"\x07\x0E\x02\x02\u05C4\u05C6\x05\u0108\x85\x02\u05C5\u05C4\x03\x02\x02" +
		"\x02\u05C6\u05C9\x03\x02\x02\x02\u05C7\u05C5\x03\x02\x02\x02\u05C7\u05C8" +
		"\x03\x02\x02\x02\u05C8\u05CB\x03\x02\x02\x02\u05C9\u05C7\x03\x02\x02\x02" +
		"\u05CA\u05CC\x05\u010A\x86\x02\u05CB\u05CA\x03\x02\x02\x02\u05CB\u05CC" +
		"\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05CE\x07\x0F\x02\x02" +
		"\u05CE\u0107\x03\x02\x02\x02\u05CF\u05D1\x05\u0118\x8D\x02\u05D0\u05CF" +
		"\x03\x02\x02\x02\u05D1\u05D4\x03\x02\x02\x02\u05D2\u05D0\x03\x02\x02\x02" +
		"\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D5\x03\x02\x02\x02\u05D4\u05D2\x03" +
		"\x02\x02\x02\u05D5\u05D6\x07b\x02\x02\u05D6\u05D7\x05l7\x02\u05D7\u05D8" +
		"\x07\x17\x02\x02\u05D8\u05D9\x05\xEEx\x02\u05D9\u0109\x03\x02\x02\x02" +
		"\u05DA\u05DC\x05\u0118\x8D\x02\u05DB\u05DA\x03\x02\x02\x02\u05DC\u05DF" +
		"\x03\x02\x02\x02\u05DD\u05DB\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02" +
		"\u05DE\u05E0\x03\x02\x02\x02\u05DF\u05DD\x03\x02\x02\x02\u05E0\u05E1\x07" +
		"c\x02\x02\u05E1\u05E2\x07\x17\x02\x02\u05E2\u05E3\x05\xEEx\x02\u05E3\u010B" +
		"\x03\x02\x02\x02\u05E4\u05E5\x07d\x02\x02\u05E5\u05E6\x07\v\x02\x02\u05E6" +
		"\u010D\x03\x02\x02\x02\u05E7\u05E8\x07e\x02\x02\u05E8\u05F2\x05\x1A\x0E" +
		"\x02\u05E9\u05EB\x05\u0110\x89\x02\u05EA\u05E9\x03\x02\x02\x02\u05EB\u05EC" +
		"\x03\x02\x02\x02\u05EC\u05EA\x03\x02\x02\x02\u05EC\u05ED\x03\x02\x02\x02" +
		"\u05ED\u05EF\x03\x02\x02\x02\u05EE\u05F0\x05\u0114\x8B\x02\u05EF\u05EE" +
		"\x03\x02\x02\x02\u05EF\u05F0\x03\x02\x02\x02\u05F0\u05F3\x03\x02\x02\x02" +
		"\u05F1\u05F3\x05\u0114\x8B\x02\u05F2\u05EA\x03\x02\x02\x02\u05F2\u05F1" +
		"\x03\x02\x02\x02\u05F3\u010F\x03\x02\x02\x02\u05F4\u05F5\x05\u0112\x8A" +
		"\x02\u05F5\u05F6\x05\x1A\x0E\x02\u05F6\u05FF\x03\x02\x02\x02\u05F7\u05F8" +
		"\x07f\x02\x02\u05F8\u05FA\x05\u014C\xA7\x02\u05F9\u05FB\x05\u0112\x8A" +
		"\x02\u05FA\u05F9\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB\u05FC" +
		"\x03\x02\x02\x02\u05FC\u05FD\x05\x1A\x0E\x02\u05FD\u05FF\x03\x02\x02\x02" +
		"\u05FE\u05F4\x03\x02\x02\x02\u05FE\u05F7\x03\x02\x02\x02\u05FF\u0111\x03" +
		"\x02\x02\x02\u0600\u0601\x07g\x02\x02\u0601\u0602\x07\x10\x02\x02\u0602" +
		"\u0605\x05\xE2r\x02\u0603\u0604\x07\x03\x02\x02\u0604\u0606\x05\xE2r\x02" +
		"\u0605\u0603\x03\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606\u0607\x03" +
		"\x02\x02\x02\u0607\u0608\x07\x11\x02\x02\u0608\u0113\x03\x02\x02\x02\u0609" +
		"\u060A\x07h\x02\x02\u060A\u060B\x05\x1A\x0E\x02\u060B\u0115\x03\x02\x02" +
		"\x02\u060C\u060E\x07i\x02\x02\u060D\u060F\x05l7\x02\u060E\u060D\x03\x02" +
		"\x02\x02\u060E\u060F\x03\x02\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610" +
		"\u0611\x07\v\x02\x02\u0611\u0117\x03\x02\x02\x02\u0612\u0613\x05\xE2r" +
		"\x02\u0613\u0614\x07\x17\x02\x02\u0614\u0119\x03\x02\x02\x02\u0615\u0617" +
		"\x07j\x02\x02\u0616\u0618\x05\xE2r\x02\u0617\u0616\x03\x02\x02\x02\u0617" +
		"\u0618\x03\x02\x02\x02\u0618\u0619\x03\x02\x02\x02\u0619\u061A\x07\v\x02" +
		"\x02\u061A\u011B\x03\x02\x02\x02\u061B\u061D\x07k\x02\x02\u061C\u061E" +
		"\x05\xE2r\x02\u061D\u061C\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02" +
		"\u061E\u061F\x03\x02\x02\x02\u061F\u0620\x07\v\x02\x02\u0620\u011D\x03" +
		"\x02\x02\x02\u0621\u0622\x07l\x02\x02\u0622\u0623\x05l7\x02\u0623\u0624" +
		"\x07\v\x02\x02\u0624\u011F\x03\x02\x02\x02\u0625\u0626\x07m\x02\x02\u0626" +
		"\u0627\x05l7\x02\u0627\u0628\x07\v\x02\x02\u0628\u0121\x03\x02\x02\x02" +
		"\u0629\u062A\x05\u0124\x93\x02\u062A\u062B\x07\v\x02\x02\u062B\u0123\x03" +
		"\x02\x02\x02\u062C\u062D\x07n\x02\x02\u062D\u062E\x07\x10\x02\x02\u062E" +
		"\u0631\x05l7\x02\u062F\u0630\x07\x03\x02\x02\u0630\u0632\x05l7\x02\u0631" +
		"\u062F\x03\x02\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632\u0634\x03\x02" +
		"\x02\x02\u0633\u0635\x07\x03\x02\x02\u0634\u0633\x03\x02\x02\x02\u0634" +
		"\u0635\x03\x02\x02\x02\u0635\u0636\x03\x02\x02\x02\u0636\u0637\x07\x11" +
		"\x02\x02\u0637\u0125\x03\x02\x02\x02\u0638\u066A\x052\x1A\x02\u0639\u066A" +
		"\x05b2\x02\u063A\u066A\x05\u0154\xAB\x02\u063B\u063D\x07\x1C\x02\x02\u063C" +
		"\u063B\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02\u063D\u063E\x03\x02" +
		"\x02\x02\u063E\u063F\x05\x12\n\x02\u063F\u0640\x07\v\x02\x02\u0640\u066A" +
		"\x03\x02\x02\x02\u0641\u0643\x07\x1C\x02\x02\u0642\u0641\x03\x02\x02\x02" +
		"\u0642\u0643\x03\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0645\x05" +
		"F$\x02\u0645\u0646\x07\v\x02\x02\u0646\u066A\x03\x02\x02\x02\u0647\u0649" +
		"\x07\x1C\x02\x02\u0648\u0647\x03\x02\x02\x02\u0648\u0649\x03\x02\x02\x02" +
		"\u0649\u064A\x03\x02\x02\x02\u064A\u064B\x05H%\x02\u064B\u064C\x07\v\x02" +
		"\x02\u064C\u066A\x03\x02\x02\x02\u064D\u064E\x05\x12\n\x02\u064E\u064F" +
		"\x05\x18\r\x02\u064F\u066A\x03\x02\x02\x02\u0650\u0652\x05\x16\f\x02\u0651" +
		"\u0650\x03\x02\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652\u0653\x03\x02" +
		"\x02\x02\u0653\u0654\x07\"\x02\x02\u0654\u0655\x05\xE2r\x02\u0655\u0656" +
		"\x05\x18\r\x02\u0656\u066A\x03\x02\x02\x02\u0657\u0659\x05\x16\f\x02\u0658" +
		"\u0657\x03\x02\x02\x02\u0658\u0659\x03\x02\x02\x02\u0659\u065A\x03\x02" +
		"\x02\x02\u065A\u065B\x07#\x02\x02\u065B\u065C\x05\xE2r\x02\u065C\u065D" +
		"\x05\x1C\x0F\x02\u065D\u065E\x05\x18\r\x02\u065E\u066A\x03\x02\x02\x02" +
		"\u065F\u0661\t\x03\x02\x02\u0660\u0662\x05\u014C\xA7\x02\u0661\u0660\x03" +
		"\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663" +
		"\u0664\x05<\x1F\x02\u0664\u0665\x07\v\x02\x02\u0665\u066A\x03\x02\x02" +
		"\x02\u0666\u0667\x05\x04\x03\x02\u0667\u0668\x07\v\x02\x02\u0668\u066A" +
		"\x03\x02\x02\x02\u0669\u0638\x03\x02\x02\x02\u0669\u0639\x03\x02\x02\x02" +
		"\u0669\u063A\x03\x02\x02\x02\u0669\u063C\x03\x02\x02\x02\u0669\u0642\x03" +
		"\x02\x02\x02\u0669\u0648\x03\x02\x02\x02\u0669\u064D\x03\x02\x02\x02\u0669" +
		"\u0651\x03\x02\x02\x02\u0669\u0658\x03\x02\x02\x02\u0669\u065F\x03\x02" +
		"\x02\x02\u0669\u0666\x03\x02\x02\x02\u066A\u0127\x03\x02\x02\x02\u066B" +
		"\u066C\t\x10\x02\x02\u066C\u0129\x03\x02\x02\x02\u066D\u066F\x05\u012C" +
		"\x97\x02\u066E\u066D\x03\x02\x02\x02\u066E\u066F\x03\x02\x02\x02\u066F" +
		"\u0671\x03\x02\x02\x02\u0670\u0672\x05\u012E\x98\x02\u0671\u0670\x03\x02" +
		"\x02\x02\u0671\u0672\x03\x02\x02\x02\u0672\u0676\x03\x02\x02\x02\u0673" +
		"\u0675\x05\u0130\x99\x02\u0674\u0673\x03\x02\x02\x02\u0675\u0678\x03\x02" +
		"\x02\x02\u0676\u0674\x03\x02\x02\x02\u0676\u0677\x03\x02\x02\x02\u0677" +
		"\u067C\x03\x02\x02\x02\u0678\u0676\x03\x02\x02\x02\u0679\u067B\x05\u013E" +
		"\xA0\x02\u067A\u0679\x03\x02\x02\x02\u067B\u067E\x03\x02\x02\x02\u067C" +
		"\u067A\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D\u0682\x03\x02" +
		"\x02\x02\u067E\u067C\x03\x02\x02\x02\u067F\u0681\x05\u0126\x94\x02\u0680" +
		"\u067F\x03\x02\x02\x02\u0681\u0684\x03\x02\x02\x02\u0682\u0680\x03\x02" +
		"\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\u012B\x03\x02\x02\x02\u0684" +
		"\u0682\x03\x02\x02\x02\u0685\u0689\x07o\x02\x02\u0686\u0688\n\x11\x02" +
		"\x02\u0687\u0686\x03\x02\x02\x02\u0688\u068B\x03\x02\x02\x02\u0689\u0687" +
		"\x03\x02\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068C\x03\x02\x02\x02" +
		"\u068B\u0689\x03\x02\x02\x02\u068C\u068D\x07}\x02\x02\u068D\u012D\x03" +
		"\x02\x02\x02\u068E\u068F\x05j6\x02\u068F\u0690\x07";
	private static readonly _serializedATNSegment3: string =
		"p\x02\x02\u0690\u0691\x05\u0132\x9A\x02\u0691\u0692\x07\v\x02\x02\u0692" +
		"\u012F\x03\x02\x02\x02\u0693\u0696\x05\u0134\x9B\x02\u0694\u0696\x05\u013C" +
		"\x9F\x02\u0695\u0693\x03\x02\x02\x02\u0695\u0694\x03\x02\x02\x02\u0696" +
		"\u0131\x03\x02\x02\x02\u0697\u069C\x05\xE2r\x02\u0698\u0699\x07\x03\x02" +
		"\x02\u0699\u069B\x05\xE2r\x02\u069A\u0698\x03\x02\x02\x02\u069B\u069E" +
		"\x03\x02\x02\x02\u069C\u069A\x03\x02\x02\x02\u069C\u069D\x03\x02\x02\x02" +
		"\u069D\u0133\x03\x02\x02\x02\u069E\u069C\x03\x02\x02\x02\u069F\u06A0\x05" +
		"j6\x02\u06A0\u06A1\x05\u0136\x9C\x02\u06A1\u0135\x03\x02\x02\x02\u06A2" +
		"\u06A3\x07q\x02\x02\u06A3\u06A6\x05\u0146\xA4\x02\u06A4\u06A5\x07Z\x02" +
		"\x02\u06A5\u06A7\x05\xE2r\x02\u06A6\u06A4\x03\x02\x02\x02\u06A6\u06A7" +
		"\x03\x02\x02\x02\u06A7\u06AB\x03\x02\x02\x02\u06A8\u06AA\x05\u0138\x9D" +
		"\x02\u06A9\u06A8\x03\x02\x02\x02\u06AA\u06AD\x03\x02\x02\x02\u06AB\u06A9" +
		"\x03\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06AE\x03\x02\x02\x02" +
		"\u06AD\u06AB\x03\x02\x02\x02\u06AE\u06AF\x07\v\x02\x02\u06AF\u0137\x03" +
		"\x02\x02\x02\u06B0\u06B1\x07r\x02\x02\u06B1\u06B5\x05\u013A\x9E\x02\u06B2" +
		"\u06B3\x07s\x02\x02\u06B3\u06B5\x05\u013A\x9E\x02\u06B4\u06B0\x03\x02" +
		"\x02\x02\u06B4\u06B2\x03\x02\x02\x02\u06B5\u0139\x03\x02\x02\x02\u06B6" +
		"\u06BB\x05\xE2r\x02\u06B7\u06B8\x07\x03\x02\x02\u06B8\u06BA\x05\xE2r\x02" +
		"\u06B9\u06B7\x03\x02\x02\x02\u06BA\u06BD\x03\x02\x02\x02\u06BB\u06B9\x03" +
		"\x02\x02\x02\u06BB\u06BC\x03\x02\x02\x02\u06BC\u013B\x03\x02\x02\x02\u06BD" +
		"\u06BB\x03\x02\x02\x02\u06BE\u06BF\x05j6\x02\u06BF\u06C0\x07t\x02\x02" +
		"\u06C0\u06C4\x05\u0146\xA4\x02\u06C1\u06C3\x05\u0138\x9D\x02\u06C2\u06C1" +
		"\x03\x02\x02\x02\u06C3\u06C6\x03\x02\x02\x02\u06C4\u06C2\x03\x02\x02\x02" +
		"\u06C4\u06C5\x03\x02\x02\x02\u06C5\u06C7\x03\x02\x02\x02\u06C6\u06C4\x03" +
		"\x02\x02\x02\u06C7\u06C8\x07\v\x02\x02\u06C8\u013D\x03\x02\x02\x02\u06C9" +
		"\u06CA\x05j6\x02\u06CA\u06CB\x07u\x02\x02\u06CB\u06CC\x05\u0144\xA3\x02" +
		"\u06CC\u06CD\x07\v\x02\x02\u06CD\u013F\x03\x02\x02\x02\u06CE\u06CF\x05" +
		"j6\x02\u06CF\u06D0\x07u\x02\x02\u06D0\u06D1\x07v\x02\x02\u06D1\u06D6\x05" +
		"\xE2r\x02\u06D2\u06D3\x07\x16\x02\x02\u06D3\u06D5\x05\xE2r\x02\u06D4\u06D2" +
		"\x03\x02\x02\x02\u06D5\u06D8\x03\x02\x02\x02\u06D6\u06D4\x03\x02\x02\x02" +
		"\u06D6\u06D7\x03\x02\x02\x02\u06D7\u06D9\x03\x02\x02\x02\u06D8\u06D6\x03" +
		"\x02\x02\x02\u06D9\u06DA\x07\v\x02\x02\u06DA\u0141\x03\x02\x02\x02\u06DB" +
		"\u06DF\x05\u0140\xA1\x02\u06DC\u06DE\x05\u0126\x94\x02\u06DD\u06DC\x03" +
		"\x02\x02\x02\u06DE\u06E1\x03\x02\x02\x02\u06DF\u06DD\x03\x02\x02\x02\u06DF" +
		"\u06E0\x03\x02\x02\x02\u06E0\u06E2\x03\x02\x02\x02\u06E1\u06DF\x03\x02" +
		"\x02\x02\u06E2\u06E3\x07\x02\x02\x03\u06E3\u0143\x03\x02\x02\x02\u06E4" +
		"\u06E5\x05|?\x02\u06E5\u0145\x03\x02\x02\x02\u06E6\u06EA\x05\u0144\xA3" +
		"\x02\u06E7\u06E9\x05\u0148\xA5\x02\u06E8\u06E7\x03\x02\x02\x02\u06E9\u06EC" +
		"\x03\x02\x02\x02\u06EA\u06E8\x03\x02\x02\x02\u06EA\u06EB\x03\x02\x02\x02" +
		"\u06EB\u0147\x03\x02\x02\x02\u06EC\u06EA\x03\x02\x02\x02\u06ED\u06EE\x07" +
		"[\x02\x02\u06EE\u06EF\x07\x10\x02\x02\u06EF\u06F0\x05\u014A\xA6\x02\u06F0" +
		"\u06F1\x07\x11\x02\x02\u06F1\u06F2\x05\u0144\xA3\x02\u06F2\u0149\x03\x02" +
		"\x02\x02\u06F3\u06F6\x05\u0132\x9A\x02\u06F4\u06F5\x07!\x02\x02\u06F5" +
		"\u06F7\x05|?\x02\u06F6\u06F4\x03\x02\x02\x02\u06F6\u06F7\x03\x02\x02\x02" +
		"\u06F7\u014B\x03\x02\x02\x02\u06F8\u06FA\x05\u014E\xA8\x02\u06F9\u06FB" +
		"\x05\u0150\xA9\x02\u06FA\u06F9\x03\x02\x02\x02\u06FA\u06FB\x03\x02\x02" +
		"\x02\u06FB\u014D\x03\x02\x02\x02\u06FC\u06FF\x05\xE4s\x02\u06FD\u06FF" +
		"\x07\b\x02\x02\u06FE\u06FC\x03\x02\x02\x02\u06FE\u06FD\x03\x02\x02\x02" +
		"\u06FF\u014F\x03\x02\x02\x02\u0700\u0701\x07)\x02\x02\u0701\u0702\x05" +
		"\u0152\xAA\x02\u0702\u0703\x07*\x02\x02\u0703\u0151\x03\x02\x02\x02\u0704" +
		"\u0709\x05\u014C\xA7\x02\u0705\u0706\x07\x03\x02\x02\u0706\u0708\x05\u014C" +
		"\xA7\x02\u0707\u0705\x03\x02\x02\x02\u0708\u070B\x03\x02\x02\x02\u0709" +
		"\u0707\x03\x02\x02\x02\u0709\u070A\x03\x02\x02\x02\u070A\u0153\x03\x02" +
		"\x02\x02\u070B\u0709\x03\x02\x02\x02\u070C\u070D\x05j6\x02\u070D\u070E" +
		"\x07w\x02\x02\u070E\u070F\x05\u0156\xAC\x02\u070F\u0155\x03\x02\x02\x02" +
		"\u0710\u0711\x05\u0158\xAD\x02\u0711\u0157\x03\x02\x02\x02\u0712\u0714" +
		"\x05\u015A\xAE\x02\u0713\u0715\x05h5\x02\u0714\u0713\x03\x02\x02\x02\u0714" +
		"\u0715\x03\x02\x02\x02\u0715\u0716\x03\x02\x02\x02\u0716\u0717\x05\x1C" +
		"\x0F\x02\u0717\u0718\x07\v\x02\x02\u0718\u0159\x03\x02\x02\x02\u0719\u071B" +
		"\x05\x16\f\x02\u071A\u0719\x03\x02\x02\x02\u071A\u071B\x03\x02\x02\x02" +
		"\u071B\u071C\x03\x02\x02\x02\u071C\u071D\x05\xE2r\x02\u071D\u015B\x03" +
		"\x02\x02\x02\xD9\u015E\u0165\u016E\u0172\u0175\u0179\u017E\u0184\u018A" +
		"\u0191\u0196\u019C\u01A2\u01A5\u01AC\u01AF\u01BF\u01C7\u01CE\u01D3\u01DB" +
		"\u01DF\u01E9\u01ED\u01F4\u01F8\u01FB\u0203\u0207\u020B\u0211\u0216\u021B" +
		"\u0220\u0222\u0226\u022B\u022E\u0231\u0234\u023C\u0243\u0248\u0253\u0257" +
		"\u025B\u025F\u0263\u0267\u026C\u0271\u0279\u027B\u0280\u0282\u0286\u028B" +
		"\u028D\u0293\u0298\u029C\u02A0\u02A3\u02AA\u02B2\u02BC\u02C4\u02C7\u02CD" +
		"\u02D6\u02DE\u02E8\u02F4\u02F8\u0300\u0307\u030C\u0312\u0319\u0327\u0330" +
		"\u033B\u033F\u034A\u0352\u035B\u035E\u0362\u036D\u0371\u0379\u0380\u038F" +
		"\u0398\u03A3\u03AB\u03B4\u03B7\u03BA\u03BD\u03C2\u03C4\u03C9\u03CC\u03D4" +
		"\u03D8\u03DA\u03F1\u03F9\u0400\u0402\u040B\u0413\u0416\u0420\u0427\u042C" +
		"\u0432\u0439\u043C\u0442\u044C\u0453\u045B\u0463\u046A\u0470\u047A\u0480" +
		"\u0489\u0491\u0493\u049A\u04A2\u04A4\u04AB\u04B3\u04B5\u04BF\u04C8\u04CA" +
		"\u04D4\u04DD\u04DF\u04E9\u04F2\u04F4\u04FF\u0506\u050B\u051D\u0520\u0526" +
		"\u052E\u0532\u0538\u0540\u0545\u054C\u0553\u055D\u0563\u0579\u057C\u058D" +
		"\u0590\u059A\u059E\u05A8\u05AC\u05AF\u05C7\u05CB\u05D2\u05DD\u05EC\u05EF" +
		"\u05F2\u05FA\u05FE\u0605\u060E\u0617\u061D\u0631\u0634\u063C\u0642\u0648" +
		"\u0651\u0658\u0661\u0669\u066E\u0671\u0676\u067C\u0682\u0689\u0695\u069C" +
		"\u06A6\u06AB\u06B4\u06BB\u06C4\u06D6\u06DF\u06EA\u06F6\u06FA\u06FE\u0709" +
		"\u0714\u071A";
	public static readonly _serializedATN: string = Utils.join(
		[
			Dart2Parser._serializedATNSegment0,
			Dart2Parser._serializedATNSegment1,
			Dart2Parser._serializedATNSegment2,
			Dart2Parser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Dart2Parser.__ATN) {
			Dart2Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Dart2Parser._serializedATN));
		}

		return Dart2Parser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public libraryDefinition(): LibraryDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LibraryDefinitionContext);
	}
	public partDeclaration(): PartDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PartDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public declaredIdentifier(): DeclaredIdentifierContext {
		return this.getRuleContext(0, DeclaredIdentifierContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaredIdentifierContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public finalConstVarOrType(): FinalConstVarOrTypeContext {
		return this.getRuleContext(0, FinalConstVarOrTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_declaredIdentifier; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterDeclaredIdentifier) {
			listener.enterDeclaredIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitDeclaredIdentifier) {
			listener.exitDeclaredIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitDeclaredIdentifier) {
			return visitor.visitDeclaredIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinalConstVarOrTypeContext extends ParserRuleContext {
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	public varOrType(): VarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, VarOrTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_finalConstVarOrType; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFinalConstVarOrType) {
			listener.enterFinalConstVarOrType(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFinalConstVarOrType) {
			listener.exitFinalConstVarOrType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFinalConstVarOrType) {
			return visitor.visitFinalConstVarOrType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarOrTypeContext extends ParserRuleContext {
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_varOrType; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterVarOrType) {
			listener.enterVarOrType(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitVarOrType) {
			listener.exitVarOrType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitVarOrType) {
			return visitor.visitVarOrType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializedVariableDeclarationContext extends ParserRuleContext {
	public declaredIdentifier(): DeclaredIdentifierContext {
		return this.getRuleContext(0, DeclaredIdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public initializedIdentifier(): InitializedIdentifierContext[];
	public initializedIdentifier(i: number): InitializedIdentifierContext;
	public initializedIdentifier(i?: number): InitializedIdentifierContext | InitializedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializedIdentifierContext);
		} else {
			return this.getRuleContext(i, InitializedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_initializedVariableDeclaration; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterInitializedVariableDeclaration) {
			listener.enterInitializedVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitInitializedVariableDeclaration) {
			listener.exitInitializedVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitInitializedVariableDeclaration) {
			return visitor.visitInitializedVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializedIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_initializedIdentifier; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterInitializedIdentifier) {
			listener.enterInitializedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitInitializedIdentifier) {
			listener.exitInitializedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitInitializedIdentifier) {
			return visitor.visitInitializedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializedIdentifierListContext extends ParserRuleContext {
	public initializedIdentifier(): InitializedIdentifierContext[];
	public initializedIdentifier(i: number): InitializedIdentifierContext;
	public initializedIdentifier(i?: number): InitializedIdentifierContext | InitializedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializedIdentifierContext);
		} else {
			return this.getRuleContext(i, InitializedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_initializedIdentifierList; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterInitializedIdentifierList) {
			listener.enterInitializedIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitInitializedIdentifierList) {
			listener.exitInitializedIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitInitializedIdentifierList) {
			return visitor.visitInitializedIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSignatureContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_functionSignature; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFunctionSignature) {
			listener.enterFunctionSignature(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFunctionSignature) {
			listener.exitFunctionSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFunctionSignature) {
			return visitor.visitFunctionSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterPartContext extends ParserRuleContext {
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_formalParameterPart; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFormalParameterPart) {
			listener.enterFormalParameterPart(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFormalParameterPart) {
			listener.exitFormalParameterPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFormalParameterPart) {
			return visitor.visitFormalParameterPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnTypeContext extends ParserRuleContext {
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_returnType; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterReturnType) {
			listener.enterReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitReturnType) {
			listener.exitReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitReturnType) {
			return visitor.visitReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_functionBody; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_block; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public normalFormalParameters(): NormalFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, NormalFormalParametersContext);
	}
	public optionalFormalParameters(): OptionalFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, OptionalFormalParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormalParametersContext extends ParserRuleContext {
	public normalFormalParameter(): NormalFormalParameterContext[];
	public normalFormalParameter(i: number): NormalFormalParameterContext;
	public normalFormalParameter(i?: number): NormalFormalParameterContext | NormalFormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NormalFormalParameterContext);
		} else {
			return this.getRuleContext(i, NormalFormalParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_normalFormalParameters; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterNormalFormalParameters) {
			listener.enterNormalFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitNormalFormalParameters) {
			listener.exitNormalFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitNormalFormalParameters) {
			return visitor.visitNormalFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalFormalParametersContext extends ParserRuleContext {
	public optionalPositionalFormalParameters(): OptionalPositionalFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, OptionalPositionalFormalParametersContext);
	}
	public namedFormalParameters(): NamedFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, NamedFormalParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_optionalFormalParameters; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterOptionalFormalParameters) {
			listener.enterOptionalFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitOptionalFormalParameters) {
			listener.exitOptionalFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitOptionalFormalParameters) {
			return visitor.visitOptionalFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalPositionalFormalParametersContext extends ParserRuleContext {
	public defaultFormalParameter(): DefaultFormalParameterContext[];
	public defaultFormalParameter(i: number): DefaultFormalParameterContext;
	public defaultFormalParameter(i?: number): DefaultFormalParameterContext | DefaultFormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefaultFormalParameterContext);
		} else {
			return this.getRuleContext(i, DefaultFormalParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_optionalPositionalFormalParameters; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterOptionalPositionalFormalParameters) {
			listener.enterOptionalPositionalFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitOptionalPositionalFormalParameters) {
			listener.exitOptionalPositionalFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitOptionalPositionalFormalParameters) {
			return visitor.visitOptionalPositionalFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedFormalParametersContext extends ParserRuleContext {
	public defaultNamedParameter(): DefaultNamedParameterContext[];
	public defaultNamedParameter(i: number): DefaultNamedParameterContext;
	public defaultNamedParameter(i?: number): DefaultNamedParameterContext | DefaultNamedParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefaultNamedParameterContext);
		} else {
			return this.getRuleContext(i, DefaultNamedParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_namedFormalParameters; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterNamedFormalParameters) {
			listener.enterNamedFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitNamedFormalParameters) {
			listener.exitNamedFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitNamedFormalParameters) {
			return visitor.visitNamedFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormalParameterContext extends ParserRuleContext {
	public functionFormalParameter(): FunctionFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FunctionFormalParameterContext);
	}
	public fieldFormalParameter(): FieldFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FieldFormalParameterContext);
	}
	public simpleFormalParameter(): SimpleFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, SimpleFormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_normalFormalParameter; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterNormalFormalParameter) {
			listener.enterNormalFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitNormalFormalParameter) {
			listener.exitNormalFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitNormalFormalParameter) {
			return visitor.visitNormalFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionFormalParameterContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_functionFormalParameter; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFunctionFormalParameter) {
			listener.enterFunctionFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFunctionFormalParameter) {
			listener.exitFunctionFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFunctionFormalParameter) {
			return visitor.visitFunctionFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleFormalParameterContext extends ParserRuleContext {
	public declaredIdentifier(): DeclaredIdentifierContext | undefined {
		return this.tryGetRuleContext(0, DeclaredIdentifierContext);
	}
	public metadata(): MetadataContext | undefined {
		return this.tryGetRuleContext(0, MetadataContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_simpleFormalParameter; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterSimpleFormalParameter) {
			listener.enterSimpleFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitSimpleFormalParameter) {
			listener.exitSimpleFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitSimpleFormalParameter) {
			return visitor.visitSimpleFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldFormalParameterContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public finalConstVarOrType(): FinalConstVarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, FinalConstVarOrTypeContext);
	}
	public formalParameterPart(): FormalParameterPartContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_fieldFormalParameter; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFieldFormalParameter) {
			listener.enterFieldFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFieldFormalParameter) {
			listener.exitFieldFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFieldFormalParameter) {
			return visitor.visitFieldFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultFormalParameterContext extends ParserRuleContext {
	public normalFormalParameter(): NormalFormalParameterContext {
		return this.getRuleContext(0, NormalFormalParameterContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_defaultFormalParameter; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterDefaultFormalParameter) {
			listener.enterDefaultFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitDefaultFormalParameter) {
			listener.exitDefaultFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitDefaultFormalParameter) {
			return visitor.visitDefaultFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultNamedParameterContext extends ParserRuleContext {
	public normalFormalParameter(): NormalFormalParameterContext {
		return this.getRuleContext(0, NormalFormalParameterContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_defaultNamedParameter; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterDefaultNamedParameter) {
			listener.enterDefaultNamedParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitDefaultNamedParameter) {
			listener.exitDefaultNamedParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitDefaultNamedParameter) {
			return visitor.visitDefaultNamedParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDefinitionContext extends ParserRuleContext {
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public superclass(): SuperclassContext | undefined {
		return this.tryGetRuleContext(0, SuperclassContext);
	}
	public mixins(): MixinsContext | undefined {
		return this.tryGetRuleContext(0, MixinsContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	public classMemberDefinition(): ClassMemberDefinitionContext[];
	public classMemberDefinition(i: number): ClassMemberDefinitionContext;
	public classMemberDefinition(i?: number): ClassMemberDefinitionContext | ClassMemberDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberDefinitionContext);
		} else {
			return this.getRuleContext(i, ClassMemberDefinitionContext);
		}
	}
	public mixinApplicationClass(): MixinApplicationClassContext | undefined {
		return this.tryGetRuleContext(0, MixinApplicationClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_classDefinition; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterClassDefinition) {
			listener.enterClassDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitClassDefinition) {
			listener.exitClassDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitClassDefinition) {
			return visitor.visitClassDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinsContext extends ParserRuleContext {
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_mixins; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMixins) {
			listener.enterMixins(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMixins) {
			listener.exitMixins(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMixins) {
			return visitor.visitMixins(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberDefinitionContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public methodSignature(): MethodSignatureContext | undefined {
		return this.tryGetRuleContext(0, MethodSignatureContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_classMemberDefinition; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterClassMemberDefinition) {
			listener.enterClassMemberDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitClassMemberDefinition) {
			listener.exitClassMemberDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitClassMemberDefinition) {
			return visitor.visitClassMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodSignatureContext extends ParserRuleContext {
	public constructorSignature(): ConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstructorSignatureContext);
	}
	public initializers(): InitializersContext | undefined {
		return this.tryGetRuleContext(0, InitializersContext);
	}
	public factoryConstructorSignature(): FactoryConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, FactoryConstructorSignatureContext);
	}
	public functionSignature(): FunctionSignatureContext | undefined {
		return this.tryGetRuleContext(0, FunctionSignatureContext);
	}
	public getterSignature(): GetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, GetterSignatureContext);
	}
	public setterSignature(): SetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, SetterSignatureContext);
	}
	public operatorSignature(): OperatorSignatureContext | undefined {
		return this.tryGetRuleContext(0, OperatorSignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_methodSignature; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMethodSignature) {
			listener.enterMethodSignature(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMethodSignature) {
			listener.exitMethodSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMethodSignature) {
			return visitor.visitMethodSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public constantConstructorSignature(): ConstantConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstantConstructorSignatureContext);
	}
	public redirection(): RedirectionContext | undefined {
		return this.tryGetRuleContext(0, RedirectionContext);
	}
	public initializers(): InitializersContext | undefined {
		return this.tryGetRuleContext(0, InitializersContext);
	}
	public constructorSignature(): ConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstructorSignatureContext);
	}
	public getterSignature(): GetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, GetterSignatureContext);
	}
	public setterSignature(): SetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, SetterSignatureContext);
	}
	public operatorSignature(): OperatorSignatureContext | undefined {
		return this.tryGetRuleContext(0, OperatorSignatureContext);
	}
	public functionSignature(): FunctionSignatureContext | undefined {
		return this.tryGetRuleContext(0, FunctionSignatureContext);
	}
	public staticFinalDeclarationList(): StaticFinalDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StaticFinalDeclarationListContext);
	}
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	public initializedIdentifierList(): InitializedIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, InitializedIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_declaration; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticFinalDeclarationListContext extends ParserRuleContext {
	public staticFinalDeclaration(): StaticFinalDeclarationContext[];
	public staticFinalDeclaration(i: number): StaticFinalDeclarationContext;
	public staticFinalDeclaration(i?: number): StaticFinalDeclarationContext | StaticFinalDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StaticFinalDeclarationContext);
		} else {
			return this.getRuleContext(i, StaticFinalDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_staticFinalDeclarationList; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterStaticFinalDeclarationList) {
			listener.enterStaticFinalDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitStaticFinalDeclarationList) {
			listener.exitStaticFinalDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitStaticFinalDeclarationList) {
			return visitor.visitStaticFinalDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticFinalDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_staticFinalDeclaration; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterStaticFinalDeclaration) {
			listener.enterStaticFinalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitStaticFinalDeclaration) {
			listener.exitStaticFinalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitStaticFinalDeclaration) {
			return visitor.visitStaticFinalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorSignatureContext extends ParserRuleContext {
	public operator_(): Operator_Context {
		return this.getRuleContext(0, Operator_Context);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_operatorSignature; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterOperatorSignature) {
			listener.enterOperatorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitOperatorSignature) {
			listener.exitOperatorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitOperatorSignature) {
			return visitor.visitOperatorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operator_Context extends ParserRuleContext {
	public binaryOperator(): BinaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_operator_; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterOperator_) {
			listener.enterOperator_(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitOperator_) {
			listener.exitOperator_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitOperator_) {
			return visitor.visitOperator_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryOperatorContext extends ParserRuleContext {
	public multiplicativeOperator(): MultiplicativeOperatorContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeOperatorContext);
	}
	public additiveOperator(): AdditiveOperatorContext | undefined {
		return this.tryGetRuleContext(0, AdditiveOperatorContext);
	}
	public shiftOperator(): ShiftOperatorContext | undefined {
		return this.tryGetRuleContext(0, ShiftOperatorContext);
	}
	public relationalOperator(): RelationalOperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationalOperatorContext);
	}
	public bitwiseOperator(): BitwiseOperatorContext | undefined {
		return this.tryGetRuleContext(0, BitwiseOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_binaryOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterBinaryOperator) {
			listener.enterBinaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitBinaryOperator) {
			listener.exitBinaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitBinaryOperator) {
			return visitor.visitBinaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterSignatureContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_getterSignature; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterGetterSignature) {
			listener.enterGetterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitGetterSignature) {
			listener.exitGetterSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitGetterSignature) {
			return visitor.visitGetterSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterSignatureContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_setterSignature; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterSetterSignature) {
			listener.enterSetterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitSetterSignature) {
			listener.exitSetterSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitSetterSignature) {
			return visitor.visitSetterSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorSignatureContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_constructorSignature; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterConstructorSignature) {
			listener.enterConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitConstructorSignature) {
			listener.exitConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitConstructorSignature) {
			return visitor.visitConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedirectionContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_redirection; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterRedirection) {
			listener.enterRedirection(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitRedirection) {
			listener.exitRedirection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitRedirection) {
			return visitor.visitRedirection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializersContext extends ParserRuleContext {
	public initializerListEntry(): InitializerListEntryContext[];
	public initializerListEntry(i: number): InitializerListEntryContext;
	public initializerListEntry(i?: number): InitializerListEntryContext | InitializerListEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerListEntryContext);
		} else {
			return this.getRuleContext(i, InitializerListEntryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_initializers; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterInitializers) {
			listener.enterInitializers(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitInitializers) {
			listener.exitInitializers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitInitializers) {
			return visitor.visitInitializers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListEntryContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public fieldInitializer(): FieldInitializerContext | undefined {
		return this.tryGetRuleContext(0, FieldInitializerContext);
	}
	public assertion(): AssertionContext | undefined {
		return this.tryGetRuleContext(0, AssertionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_initializerListEntry; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterInitializerListEntry) {
			listener.enterInitializerListEntry(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitInitializerListEntry) {
			listener.exitInitializerListEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitInitializerListEntry) {
			return visitor.visitInitializerListEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldInitializerContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	public cascadeSection(): CascadeSectionContext[];
	public cascadeSection(i: number): CascadeSectionContext;
	public cascadeSection(i?: number): CascadeSectionContext | CascadeSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CascadeSectionContext);
		} else {
			return this.getRuleContext(i, CascadeSectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_fieldInitializer; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFieldInitializer) {
			listener.enterFieldInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFieldInitializer) {
			listener.exitFieldInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFieldInitializer) {
			return visitor.visitFieldInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactoryConstructorSignatureContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_factoryConstructorSignature; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFactoryConstructorSignature) {
			listener.enterFactoryConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFactoryConstructorSignature) {
			listener.exitFactoryConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFactoryConstructorSignature) {
			return visitor.visitFactoryConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedirectingFactoryConstructorSignatureContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public dtype(): DtypeContext {
		return this.getRuleContext(0, DtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_redirectingFactoryConstructorSignature; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterRedirectingFactoryConstructorSignature) {
			listener.enterRedirectingFactoryConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitRedirectingFactoryConstructorSignature) {
			listener.exitRedirectingFactoryConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitRedirectingFactoryConstructorSignature) {
			return visitor.visitRedirectingFactoryConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantConstructorSignatureContext extends ParserRuleContext {
	public qualified(): QualifiedContext {
		return this.getRuleContext(0, QualifiedContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_constantConstructorSignature; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterConstantConstructorSignature) {
			listener.enterConstantConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitConstantConstructorSignature) {
			listener.exitConstantConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitConstantConstructorSignature) {
			return visitor.visitConstantConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperclassContext extends ParserRuleContext {
	public dtype(): DtypeContext {
		return this.getRuleContext(0, DtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_superclass; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterSuperclass) {
			listener.enterSuperclass(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitSuperclass) {
			listener.exitSuperclass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitSuperclass) {
			return visitor.visitSuperclass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfacesContext extends ParserRuleContext {
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_interfaces; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterInterfaces) {
			listener.enterInterfaces(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitInterfaces) {
			listener.exitInterfaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitInterfaces) {
			return visitor.visitInterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinApplicationClassContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public mixinApplication(): MixinApplicationContext {
		return this.getRuleContext(0, MixinApplicationContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_mixinApplicationClass; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMixinApplicationClass) {
			listener.enterMixinApplicationClass(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMixinApplicationClass) {
			listener.exitMixinApplicationClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMixinApplicationClass) {
			return visitor.visitMixinApplicationClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinApplicationContext extends ParserRuleContext {
	public dtype(): DtypeContext {
		return this.getRuleContext(0, DtypeContext);
	}
	public mixins(): MixinsContext {
		return this.getRuleContext(0, MixinsContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_mixinApplication; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMixinApplication) {
			listener.enterMixinApplication(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMixinApplication) {
			listener.exitMixinApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMixinApplication) {
			return visitor.visitMixinApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enumEntry(): EnumEntryContext[];
	public enumEntry(i: number): EnumEntryContext;
	public enumEntry(i?: number): EnumEntryContext | EnumEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumEntryContext);
		} else {
			return this.getRuleContext(i, EnumEntryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_enumType; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterEnumType) {
			listener.enterEnumType(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitEnumType) {
			listener.exitEnumType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitEnumType) {
			return visitor.visitEnumType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumEntryContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_enumEntry; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterEnumEntry) {
			listener.enterEnumEntry(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitEnumEntry) {
			listener.exitEnumEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitEnumEntry) {
			return visitor.visitEnumEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataContext extends ParserRuleContext {
	public qualified(): QualifiedContext[];
	public qualified(i: number): QualifiedContext;
	public qualified(i?: number): QualifiedContext | QualifiedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedContext);
		} else {
			return this.getRuleContext(i, QualifiedContext);
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
	public arguments(): ArgumentsContext[];
	public arguments(i: number): ArgumentsContext;
	public arguments(i?: number): ArgumentsContext | ArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentsContext);
		} else {
			return this.getRuleContext(i, ArgumentsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_metadata; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMetadata) {
			listener.enterMetadata(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMetadata) {
			listener.exitMetadata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMetadata) {
			return visitor.visitMetadata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public cascadeSection(): CascadeSectionContext[];
	public cascadeSection(i: number): CascadeSectionContext;
	public cascadeSection(i?: number): CascadeSectionContext | CascadeSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CascadeSectionContext);
		} else {
			return this.getRuleContext(i, CascadeSectionContext);
		}
	}
	public throwExpression(): ThrowExpressionContext | undefined {
		return this.tryGetRuleContext(0, ThrowExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_expression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionWithoutCascadeContext extends ParserRuleContext {
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext | undefined {
		return this.tryGetRuleContext(0, ExpressionWithoutCascadeContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public throwExpressionWithoutCascade(): ThrowExpressionWithoutCascadeContext | undefined {
		return this.tryGetRuleContext(0, ThrowExpressionWithoutCascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_expressionWithoutCascade; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterExpressionWithoutCascade) {
			listener.enterExpressionWithoutCascade(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitExpressionWithoutCascade) {
			listener.exitExpressionWithoutCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitExpressionWithoutCascade) {
			return visitor.visitExpressionWithoutCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_expressionList; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public thisExpression(): ThisExpressionContext | undefined {
		return this.tryGetRuleContext(0, ThisExpressionContext);
	}
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
	}
	public functionExpression(): FunctionExpressionContext | undefined {
		return this.tryGetRuleContext(0, FunctionExpressionContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public nayaExpression(): NayaExpressionContext | undefined {
		return this.tryGetRuleContext(0, NayaExpressionContext);
	}
	public constObjectExpression(): ConstObjectExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstObjectExpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_primary; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public nullLiteral(): NullLiteralContext | undefined {
		return this.tryGetRuleContext(0, NullLiteralContext);
	}
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public symbolLiteral(): SymbolLiteralContext | undefined {
		return this.tryGetRuleContext(0, SymbolLiteralContext);
	}
	public mapLiteral(): MapLiteralContext | undefined {
		return this.tryGetRuleContext(0, MapLiteralContext);
	}
	public listLiteral(): ListLiteralContext | undefined {
		return this.tryGetRuleContext(0, ListLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_literal; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NullLiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_nullLiteral; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(Dart2Parser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(Dart2Parser.HEX_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public MultiLineString(): TerminalNode[];
	public MultiLineString(i: number): TerminalNode;
	public MultiLineString(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Dart2Parser.MultiLineString);
		} else {
			return this.getToken(Dart2Parser.MultiLineString, i);
		}
	}
	public SingleLineString(): TerminalNode[];
	public SingleLineString(i: number): TerminalNode;
	public SingleLineString(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Dart2Parser.SingleLineString);
		} else {
			return this.getToken(Dart2Parser.SingleLineString, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringInterpolationContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_stringInterpolation; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterStringInterpolation) {
			listener.enterStringInterpolation(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitStringInterpolation) {
			listener.exitStringInterpolation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitStringInterpolation) {
			return visitor.visitStringInterpolation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolLiteralContext extends ParserRuleContext {
	public operator_(): Operator_Context | undefined {
		return this.tryGetRuleContext(0, Operator_Context);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_symbolLiteral; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterSymbolLiteral) {
			listener.enterSymbolLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitSymbolLiteral) {
			listener.exitSymbolLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitSymbolLiteral) {
			return visitor.visitSymbolLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListLiteralContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_listLiteral; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterListLiteral) {
			listener.enterListLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitListLiteral) {
			listener.exitListLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitListLiteral) {
			return visitor.visitListLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapLiteralContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public mapLiteralEntry(): MapLiteralEntryContext[];
	public mapLiteralEntry(i: number): MapLiteralEntryContext;
	public mapLiteralEntry(i?: number): MapLiteralEntryContext | MapLiteralEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapLiteralEntryContext);
		} else {
			return this.getRuleContext(i, MapLiteralEntryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_mapLiteral; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMapLiteral) {
			listener.enterMapLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMapLiteral) {
			listener.exitMapLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMapLiteral) {
			return visitor.visitMapLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapLiteralEntryContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_mapLiteralEntry; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMapLiteralEntry) {
			listener.enterMapLiteralEntry(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMapLiteralEntry) {
			listener.exitMapLiteralEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMapLiteralEntry) {
			return visitor.visitMapLiteralEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_throwExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterThrowExpression) {
			listener.enterThrowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitThrowExpression) {
			listener.exitThrowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitThrowExpression) {
			return visitor.visitThrowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowExpressionWithoutCascadeContext extends ParserRuleContext {
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		return this.getRuleContext(0, ExpressionWithoutCascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_throwExpressionWithoutCascade; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterThrowExpressionWithoutCascade) {
			listener.enterThrowExpressionWithoutCascade(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitThrowExpressionWithoutCascade) {
			listener.exitThrowExpressionWithoutCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitThrowExpressionWithoutCascade) {
			return visitor.visitThrowExpressionWithoutCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionContext extends ParserRuleContext {
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_functionExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThisExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_thisExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NayaExpressionContext extends ParserRuleContext {
	public dtype(): DtypeContext {
		return this.getRuleContext(0, DtypeContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_nayaExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterNayaExpression) {
			listener.enterNayaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitNayaExpression) {
			listener.exitNayaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitNayaExpression) {
			return visitor.visitNayaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstObjectExpressionContext extends ParserRuleContext {
	public dtype(): DtypeContext {
		return this.getRuleContext(0, DtypeContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_constObjectExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterConstObjectExpression) {
			listener.enterConstObjectExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitConstObjectExpression) {
			listener.exitConstObjectExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitConstObjectExpression) {
			return visitor.visitConstObjectExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_arguments; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public namedArgument(): NamedArgumentContext[];
	public namedArgument(i: number): NamedArgumentContext;
	public namedArgument(i?: number): NamedArgumentContext | NamedArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedArgumentContext);
		} else {
			return this.getRuleContext(i, NamedArgumentContext);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_argumentList; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedArgumentContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_namedArgument; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterNamedArgument) {
			listener.enterNamedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitNamedArgument) {
			listener.exitNamedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitNamedArgument) {
			return visitor.visitNamedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeSectionContext extends ParserRuleContext {
	public cascadeSelector(): CascadeSelectorContext | undefined {
		return this.tryGetRuleContext(0, CascadeSelectorContext);
	}
	public assignableSelector(): AssignableSelectorContext[];
	public assignableSelector(i: number): AssignableSelectorContext;
	public assignableSelector(i?: number): AssignableSelectorContext | AssignableSelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignableSelectorContext);
		} else {
			return this.getRuleContext(i, AssignableSelectorContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext | undefined {
		return this.tryGetRuleContext(0, ExpressionWithoutCascadeContext);
	}
	public argumentPart(): ArgumentPartContext[];
	public argumentPart(i: number): ArgumentPartContext;
	public argumentPart(i?: number): ArgumentPartContext | ArgumentPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentPartContext);
		} else {
			return this.getRuleContext(i, ArgumentPartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_cascadeSection; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterCascadeSection) {
			listener.enterCascadeSection(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitCascadeSection) {
			listener.exitCascadeSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitCascadeSection) {
			return visitor.visitCascadeSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeSelectorContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_cascadeSelector; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterCascadeSelector) {
			listener.enterCascadeSelector(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitCascadeSelector) {
			listener.exitCascadeSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitCascadeSelector) {
			return visitor.visitCascadeSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentPartContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_argumentPart; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterArgumentPart) {
			listener.enterArgumentPart(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitArgumentPart) {
			listener.exitArgumentPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitArgumentPart) {
			return visitor.visitArgumentPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public compoundAssignmentOperator(): CompoundAssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, CompoundAssignmentOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundAssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_compoundAssignmentOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterCompoundAssignmentOperator) {
			listener.enterCompoundAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitCompoundAssignmentOperator) {
			listener.exitCompoundAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitCompoundAssignmentOperator) {
			return visitor.visitCompoundAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public ifNullExpression(): IfNullExpressionContext {
		return this.getRuleContext(0, IfNullExpressionContext);
	}
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext[];
	public expressionWithoutCascade(i: number): ExpressionWithoutCascadeContext;
	public expressionWithoutCascade(i?: number): ExpressionWithoutCascadeContext | ExpressionWithoutCascadeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionWithoutCascadeContext);
		} else {
			return this.getRuleContext(i, ExpressionWithoutCascadeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNullExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext[];
	public logicalOrExpression(i: number): LogicalOrExpressionContext;
	public logicalOrExpression(i?: number): LogicalOrExpressionContext | LogicalOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalOrExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalOrExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_ifNullExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterIfNullExpression) {
			listener.enterIfNullExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitIfNullExpression) {
			listener.exitIfNullExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitIfNullExpression) {
			return visitor.visitIfNullExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext[];
	public logicalAndExpression(i: number): LogicalAndExpressionContext;
	public logicalAndExpression(i?: number): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalAndExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext[];
	public equalityExpression(i: number): EqualityExpressionContext;
	public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExpressionContext);
		} else {
			return this.getRuleContext(i, EqualityExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
	}
	public equalityOperator(): EqualityOperatorContext | undefined {
		return this.tryGetRuleContext(0, EqualityOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_equalityOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterEqualityOperator) {
			listener.enterEqualityOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitEqualityOperator) {
			listener.exitEqualityOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitEqualityOperator) {
			return visitor.visitEqualityOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public bitwiseOrExpression(): BitwiseOrExpressionContext[];
	public bitwiseOrExpression(i: number): BitwiseOrExpressionContext;
	public bitwiseOrExpression(i?: number): BitwiseOrExpressionContext | BitwiseOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseOrExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseOrExpressionContext);
		}
	}
	public typeTest(): TypeTestContext | undefined {
		return this.tryGetRuleContext(0, TypeTestContext);
	}
	public typeCast(): TypeCastContext | undefined {
		return this.tryGetRuleContext(0, TypeCastContext);
	}
	public relationalOperator(): RelationalOperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationalOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_relationalOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterRelationalOperator) {
			listener.enterRelationalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitRelationalOperator) {
			listener.exitRelationalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitRelationalOperator) {
			return visitor.visitRelationalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseOrExpressionContext extends ParserRuleContext {
	public bitwiseXorExpression(): BitwiseXorExpressionContext[];
	public bitwiseXorExpression(i: number): BitwiseXorExpressionContext;
	public bitwiseXorExpression(i?: number): BitwiseXorExpressionContext | BitwiseXorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseXorExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseXorExpressionContext);
		}
	}
	public bitwiseOrExpression(): BitwiseOrExpressionContext[];
	public bitwiseOrExpression(i: number): BitwiseOrExpressionContext;
	public bitwiseOrExpression(i?: number): BitwiseOrExpressionContext | BitwiseOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseOrExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseOrExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_bitwiseOrExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterBitwiseOrExpression) {
			listener.enterBitwiseOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitBitwiseOrExpression) {
			listener.exitBitwiseOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitBitwiseOrExpression) {
			return visitor.visitBitwiseOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseXorExpressionContext extends ParserRuleContext {
	public bitwiseAndExpression(): BitwiseAndExpressionContext[];
	public bitwiseAndExpression(i: number): BitwiseAndExpressionContext;
	public bitwiseAndExpression(i?: number): BitwiseAndExpressionContext | BitwiseAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseAndExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseAndExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_bitwiseXorExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterBitwiseXorExpression) {
			listener.enterBitwiseXorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitBitwiseXorExpression) {
			listener.exitBitwiseXorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitBitwiseXorExpression) {
			return visitor.visitBitwiseXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseAndExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext[];
	public shiftExpression(i: number): ShiftExpressionContext;
	public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ShiftExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_bitwiseAndExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterBitwiseAndExpression) {
			listener.enterBitwiseAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitBitwiseAndExpression) {
			listener.exitBitwiseAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitBitwiseAndExpression) {
			return visitor.visitBitwiseAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_bitwiseOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterBitwiseOperator) {
			listener.enterBitwiseOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitBitwiseOperator) {
			listener.exitBitwiseOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitBitwiseOperator) {
			return visitor.visitBitwiseOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public shiftOperator(): ShiftOperatorContext[];
	public shiftOperator(i: number): ShiftOperatorContext;
	public shiftOperator(i?: number): ShiftOperatorContext | ShiftOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftOperatorContext);
		} else {
			return this.getRuleContext(i, ShiftOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_shiftOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterShiftOperator) {
			listener.enterShiftOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitShiftOperator) {
			listener.exitShiftOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitShiftOperator) {
			return visitor.visitShiftOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public additiveOperator(): AdditiveOperatorContext[];
	public additiveOperator(i: number): AdditiveOperatorContext;
	public additiveOperator(i?: number): AdditiveOperatorContext | AdditiveOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveOperatorContext);
		} else {
			return this.getRuleContext(i, AdditiveOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_additiveOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterAdditiveOperator) {
			listener.enterAdditiveOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitAdditiveOperator) {
			listener.exitAdditiveOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitAdditiveOperator) {
			return visitor.visitAdditiveOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext[];
	public unaryExpression(i: number): UnaryExpressionContext;
	public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpressionContext);
		} else {
			return this.getRuleContext(i, UnaryExpressionContext);
		}
	}
	public multiplicativeOperator(): MultiplicativeOperatorContext[];
	public multiplicativeOperator(i: number): MultiplicativeOperatorContext;
	public multiplicativeOperator(i?: number): MultiplicativeOperatorContext | MultiplicativeOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeOperatorContext);
		} else {
			return this.getRuleContext(i, MultiplicativeOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_multiplicativeOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMultiplicativeOperator) {
			listener.enterMultiplicativeOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMultiplicativeOperator) {
			listener.exitMultiplicativeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMultiplicativeOperator) {
			return visitor.visitMultiplicativeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public prefixOperator(): PrefixOperatorContext | undefined {
		return this.tryGetRuleContext(0, PrefixOperatorContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public awaitExpression(): AwaitExpressionContext | undefined {
		return this.tryGetRuleContext(0, AwaitExpressionContext);
	}
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public minusOperator(): MinusOperatorContext | undefined {
		return this.tryGetRuleContext(0, MinusOperatorContext);
	}
	public tildeOperator(): TildeOperatorContext | undefined {
		return this.tryGetRuleContext(0, TildeOperatorContext);
	}
	public incrementOperator(): IncrementOperatorContext | undefined {
		return this.tryGetRuleContext(0, IncrementOperatorContext);
	}
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixOperatorContext extends ParserRuleContext {
	public minusOperator(): MinusOperatorContext | undefined {
		return this.tryGetRuleContext(0, MinusOperatorContext);
	}
	public negationOperator(): NegationOperatorContext | undefined {
		return this.tryGetRuleContext(0, NegationOperatorContext);
	}
	public tildeOperator(): TildeOperatorContext | undefined {
		return this.tryGetRuleContext(0, TildeOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_prefixOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterPrefixOperator) {
			listener.enterPrefixOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitPrefixOperator) {
			listener.exitPrefixOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitPrefixOperator) {
			return visitor.visitPrefixOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MinusOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_minusOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterMinusOperator) {
			listener.enterMinusOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitMinusOperator) {
			listener.exitMinusOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitMinusOperator) {
			return visitor.visitMinusOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegationOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_negationOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterNegationOperator) {
			listener.enterNegationOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitNegationOperator) {
			listener.exitNegationOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitNegationOperator) {
			return visitor.visitNegationOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TildeOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_tildeOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTildeOperator) {
			listener.enterTildeOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTildeOperator) {
			listener.exitTildeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTildeOperator) {
			return visitor.visitTildeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AwaitExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_awaitExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterAwaitExpression) {
			listener.enterAwaitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitAwaitExpression) {
			listener.exitAwaitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitAwaitExpression) {
			return visitor.visitAwaitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	public postfixOperator(): PostfixOperatorContext | undefined {
		return this.tryGetRuleContext(0, PostfixOperatorContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixOperatorContext extends ParserRuleContext {
	public incrementOperator(): IncrementOperatorContext {
		return this.getRuleContext(0, IncrementOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_postfixOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterPostfixOperator) {
			listener.enterPostfixOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitPostfixOperator) {
			listener.exitPostfixOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitPostfixOperator) {
			return visitor.visitPostfixOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public assignableSelector(): AssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, AssignableSelectorContext);
	}
	public argumentPart(): ArgumentPartContext | undefined {
		return this.tryGetRuleContext(0, ArgumentPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_selector; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncrementOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_incrementOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterIncrementOperator) {
			listener.enterIncrementOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitIncrementOperator) {
			listener.exitIncrementOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitIncrementOperator) {
			return visitor.visitIncrementOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public assignableSelector(): AssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, AssignableSelectorContext);
	}
	public argumentPart(): ArgumentPartContext[];
	public argumentPart(i: number): ArgumentPartContext;
	public argumentPart(i?: number): ArgumentPartContext | ArgumentPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentPartContext);
		} else {
			return this.getRuleContext(i, ArgumentPartContext);
		}
	}
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_assignableExpression; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterAssignableExpression) {
			listener.enterAssignableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitAssignableExpression) {
			listener.exitAssignableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitAssignableExpression) {
			return visitor.visitAssignableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnconditionalAssignableSelectorContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_unconditionalAssignableSelector; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterUnconditionalAssignableSelector) {
			listener.enterUnconditionalAssignableSelector(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitUnconditionalAssignableSelector) {
			listener.exitUnconditionalAssignableSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitUnconditionalAssignableSelector) {
			return visitor.visitUnconditionalAssignableSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableSelectorContext extends ParserRuleContext {
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_assignableSelector; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterAssignableSelector) {
			listener.enterAssignableSelector(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitAssignableSelector) {
			listener.exitAssignableSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitAssignableSelector) {
			return visitor.visitAssignableSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Dart2Parser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_identifier; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_qualified; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterQualified) {
			listener.enterQualified(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitQualified) {
			listener.exitQualified(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitQualified) {
			return visitor.visitQualified(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTestContext extends ParserRuleContext {
	public isOperator(): IsOperatorContext {
		return this.getRuleContext(0, IsOperatorContext);
	}
	public dtype(): DtypeContext {
		return this.getRuleContext(0, DtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_typeTest; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTypeTest) {
			listener.enterTypeTest(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTypeTest) {
			listener.exitTypeTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTypeTest) {
			return visitor.visitTypeTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IsOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_isOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterIsOperator) {
			listener.enterIsOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitIsOperator) {
			listener.exitIsOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitIsOperator) {
			return visitor.visitIsOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeCastContext extends ParserRuleContext {
	public asOperator(): AsOperatorContext {
		return this.getRuleContext(0, AsOperatorContext);
	}
	public dtype(): DtypeContext {
		return this.getRuleContext(0, DtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_typeCast; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTypeCast) {
			listener.enterTypeCast(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTypeCast) {
			listener.exitTypeCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTypeCast) {
			return visitor.visitTypeCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_asOperator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterAsOperator) {
			listener.enterAsOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitAsOperator) {
			listener.exitAsOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitAsOperator) {
			return visitor.visitAsOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return Dart2Parser.RULE_statements; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public nonLabledStatment(): NonLabledStatmentContext {
		return this.getRuleContext(0, NonLabledStatmentContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_statement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonLabledStatmentContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public rethrowStatment(): RethrowStatmentContext | undefined {
		return this.tryGetRuleContext(0, RethrowStatmentContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public yieldStatement(): YieldStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldStatementContext);
	}
	public yieldEachStatement(): YieldEachStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldEachStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public assertStatement(): AssertStatementContext | undefined {
		return this.tryGetRuleContext(0, AssertStatementContext);
	}
	public localFunctionDeclaration(): LocalFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalFunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_nonLabledStatment; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterNonLabledStatment) {
			listener.enterNonLabledStatment(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitNonLabledStatment) {
			listener.exitNonLabledStatment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitNonLabledStatment) {
			return visitor.visitNonLabledStatment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public initializedVariableDeclaration(): InitializedVariableDeclarationContext {
		return this.getRuleContext(0, InitializedVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalFunctionDeclarationContext extends ParserRuleContext {
	public functionSignature(): FunctionSignatureContext {
		return this.getRuleContext(0, FunctionSignatureContext);
	}
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_localFunctionDeclaration; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLocalFunctionDeclaration) {
			listener.enterLocalFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLocalFunctionDeclaration) {
			listener.exitLocalFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLocalFunctionDeclaration) {
			return visitor.visitLocalFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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
	public get ruleIndex(): number { return Dart2Parser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public forLoopParts(): ForLoopPartsContext {
		return this.getRuleContext(0, ForLoopPartsContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_forStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForLoopPartsContext extends ParserRuleContext {
	public forInitializerStatement(): ForInitializerStatementContext | undefined {
		return this.tryGetRuleContext(0, ForInitializerStatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public declaredIdentifier(): DeclaredIdentifierContext | undefined {
		return this.tryGetRuleContext(0, DeclaredIdentifierContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_forLoopParts; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterForLoopParts) {
			listener.enterForLoopParts(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitForLoopParts) {
			listener.exitForLoopParts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitForLoopParts) {
			return visitor.visitForLoopParts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitializerStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_forInitializerStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterForInitializerStatement) {
			listener.enterForInitializerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitForInitializerStatement) {
			listener.exitForInitializerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitForInitializerStatement) {
			return visitor.visitForInitializerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_doStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public switchCase(): SwitchCaseContext[];
	public switchCase(i: number): SwitchCaseContext;
	public switchCase(i?: number): SwitchCaseContext | SwitchCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchCaseContext);
		} else {
			return this.getRuleContext(i, SwitchCaseContext);
		}
	}
	public defaultCase(): DefaultCaseContext | undefined {
		return this.tryGetRuleContext(0, DefaultCaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchCaseContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_switchCase; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterSwitchCase) {
			listener.enterSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitSwitchCase) {
			listener.exitSwitchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitSwitchCase) {
			return visitor.visitSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultCaseContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_defaultCase; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterDefaultCase) {
			listener.enterDefaultCase(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitDefaultCase) {
			listener.exitDefaultCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitDefaultCase) {
			return visitor.visitDefaultCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RethrowStatmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_rethrowStatment; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterRethrowStatment) {
			listener.enterRethrowStatment(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitRethrowStatment) {
			listener.exitRethrowStatment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitRethrowStatment) {
			return visitor.visitRethrowStatment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public finallyPart(): FinallyPartContext | undefined {
		return this.tryGetRuleContext(0, FinallyPartContext);
	}
	public onPart(): OnPartContext[];
	public onPart(i: number): OnPartContext;
	public onPart(i?: number): OnPartContext | OnPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OnPartContext);
		} else {
			return this.getRuleContext(i, OnPartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnPartContext extends ParserRuleContext {
	public catchPart(): CatchPartContext | undefined {
		return this.tryGetRuleContext(0, CatchPartContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_onPart; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterOnPart) {
			listener.enterOnPart(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitOnPart) {
			listener.exitOnPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitOnPart) {
			return visitor.visitOnPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchPartContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_catchPart; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterCatchPart) {
			listener.enterCatchPart(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitCatchPart) {
			listener.exitCatchPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitCatchPart) {
			return visitor.visitCatchPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyPartContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_finallyPart; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFinallyPart) {
			listener.enterFinallyPart(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFinallyPart) {
			listener.exitFinallyPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFinallyPart) {
			return visitor.visitFinallyPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_label; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldEachStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_yieldEachStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterYieldEachStatement) {
			listener.enterYieldEachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitYieldEachStatement) {
			listener.exitYieldEachStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitYieldEachStatement) {
			return visitor.visitYieldEachStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	public assertion(): AssertionContext {
		return this.getRuleContext(0, AssertionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_assertStatement; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_assertion; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterAssertion) {
			listener.enterAssertion(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitAssertion) {
			listener.exitAssertion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitAssertion) {
			return visitor.visitAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelDefinitionContext extends ParserRuleContext {
	public classDefinition(): ClassDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ClassDefinitionContext);
	}
	public enumType(): EnumTypeContext | undefined {
		return this.tryGetRuleContext(0, EnumTypeContext);
	}
	public typeAlias(): TypeAliasContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasContext);
	}
	public functionSignature(): FunctionSignatureContext | undefined {
		return this.tryGetRuleContext(0, FunctionSignatureContext);
	}
	public getterSignature(): GetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, GetterSignatureContext);
	}
	public setterSignature(): SetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, SetterSignatureContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public staticFinalDeclarationList(): StaticFinalDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StaticFinalDeclarationListContext);
	}
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_topLevelDefinition; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTopLevelDefinition) {
			listener.enterTopLevelDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTopLevelDefinition) {
			listener.exitTopLevelDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTopLevelDefinition) {
			return visitor.visitTopLevelDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetOrSetContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_getOrSet; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterGetOrSet) {
			listener.enterGetOrSet(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitGetOrSet) {
			listener.exitGetOrSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitGetOrSet) {
			return visitor.visitGetOrSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryDefinitionContext extends ParserRuleContext {
	public scriptTag(): ScriptTagContext | undefined {
		return this.tryGetRuleContext(0, ScriptTagContext);
	}
	public libraryName(): LibraryNameContext | undefined {
		return this.tryGetRuleContext(0, LibraryNameContext);
	}
	public importOrExport(): ImportOrExportContext[];
	public importOrExport(i: number): ImportOrExportContext;
	public importOrExport(i?: number): ImportOrExportContext | ImportOrExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportOrExportContext);
		} else {
			return this.getRuleContext(i, ImportOrExportContext);
		}
	}
	public partDirective(): PartDirectiveContext[];
	public partDirective(i: number): PartDirectiveContext;
	public partDirective(i?: number): PartDirectiveContext | PartDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartDirectiveContext);
		} else {
			return this.getRuleContext(i, PartDirectiveContext);
		}
	}
	public topLevelDefinition(): TopLevelDefinitionContext[];
	public topLevelDefinition(i: number): TopLevelDefinitionContext;
	public topLevelDefinition(i?: number): TopLevelDefinitionContext | TopLevelDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDefinitionContext);
		} else {
			return this.getRuleContext(i, TopLevelDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_libraryDefinition; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLibraryDefinition) {
			listener.enterLibraryDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLibraryDefinition) {
			listener.exitLibraryDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLibraryDefinition) {
			return visitor.visitLibraryDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptTagContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Dart2Parser.NEWLINE);
		} else {
			return this.getToken(Dart2Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_scriptTag; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterScriptTag) {
			listener.enterScriptTag(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitScriptTag) {
			listener.exitScriptTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitScriptTag) {
			return visitor.visitScriptTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryNameContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public dottedIdentifierList(): DottedIdentifierListContext {
		return this.getRuleContext(0, DottedIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_libraryName; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLibraryName) {
			listener.enterLibraryName(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLibraryName) {
			listener.exitLibraryName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLibraryName) {
			return visitor.visitLibraryName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportOrExportContext extends ParserRuleContext {
	public libraryimport(): LibraryimportContext | undefined {
		return this.tryGetRuleContext(0, LibraryimportContext);
	}
	public libraryExport(): LibraryExportContext | undefined {
		return this.tryGetRuleContext(0, LibraryExportContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_importOrExport; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterImportOrExport) {
			listener.enterImportOrExport(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitImportOrExport) {
			listener.exitImportOrExport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitImportOrExport) {
			return visitor.visitImportOrExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DottedIdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_dottedIdentifierList; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterDottedIdentifierList) {
			listener.enterDottedIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitDottedIdentifierList) {
			listener.exitDottedIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitDottedIdentifierList) {
			return visitor.visitDottedIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryimportContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public importSpecification(): ImportSpecificationContext {
		return this.getRuleContext(0, ImportSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_libraryimport; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLibraryimport) {
			listener.enterLibraryimport(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLibraryimport) {
			listener.exitLibraryimport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLibraryimport) {
			return visitor.visitLibraryimport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportSpecificationContext extends ParserRuleContext {
	public configurableUri(): ConfigurableUriContext {
		return this.getRuleContext(0, ConfigurableUriContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public combinator(): CombinatorContext[];
	public combinator(i: number): CombinatorContext;
	public combinator(i?: number): CombinatorContext | CombinatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinatorContext);
		} else {
			return this.getRuleContext(i, CombinatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_importSpecification; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterImportSpecification) {
			listener.enterImportSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitImportSpecification) {
			listener.exitImportSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitImportSpecification) {
			return visitor.visitImportSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CombinatorContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_combinator; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterCombinator) {
			listener.enterCombinator(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitCombinator) {
			listener.exitCombinator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitCombinator) {
			return visitor.visitCombinator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_identifierList; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryExportContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public configurableUri(): ConfigurableUriContext {
		return this.getRuleContext(0, ConfigurableUriContext);
	}
	public combinator(): CombinatorContext[];
	public combinator(i: number): CombinatorContext;
	public combinator(i?: number): CombinatorContext | CombinatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinatorContext);
		} else {
			return this.getRuleContext(i, CombinatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_libraryExport; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterLibraryExport) {
			listener.enterLibraryExport(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitLibraryExport) {
			listener.exitLibraryExport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitLibraryExport) {
			return visitor.visitLibraryExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartDirectiveContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_partDirective; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterPartDirective) {
			listener.enterPartDirective(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitPartDirective) {
			listener.exitPartDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitPartDirective) {
			return visitor.visitPartDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartHeaderContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_partHeader; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterPartHeader) {
			listener.enterPartHeader(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitPartHeader) {
			listener.exitPartHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitPartHeader) {
			return visitor.visitPartHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartDeclarationContext extends ParserRuleContext {
	public partHeader(): PartHeaderContext {
		return this.getRuleContext(0, PartHeaderContext);
	}
	public EOF(): TerminalNode { return this.getToken(Dart2Parser.EOF, 0); }
	public topLevelDefinition(): TopLevelDefinitionContext[];
	public topLevelDefinition(i: number): TopLevelDefinitionContext;
	public topLevelDefinition(i?: number): TopLevelDefinitionContext | TopLevelDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDefinitionContext);
		} else {
			return this.getRuleContext(i, TopLevelDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_partDeclaration; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterPartDeclaration) {
			listener.enterPartDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitPartDeclaration) {
			listener.exitPartDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitPartDeclaration) {
			return visitor.visitPartDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UriContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_uri; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterUri) {
			listener.enterUri(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitUri) {
			listener.exitUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitUri) {
			return visitor.visitUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigurableUriContext extends ParserRuleContext {
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	public configurationUri(): ConfigurationUriContext[];
	public configurationUri(i: number): ConfigurationUriContext;
	public configurationUri(i?: number): ConfigurationUriContext | ConfigurationUriContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConfigurationUriContext);
		} else {
			return this.getRuleContext(i, ConfigurationUriContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_configurableUri; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterConfigurableUri) {
			listener.enterConfigurableUri(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitConfigurableUri) {
			listener.exitConfigurableUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitConfigurableUri) {
			return visitor.visitConfigurableUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigurationUriContext extends ParserRuleContext {
	public uriTest(): UriTestContext {
		return this.getRuleContext(0, UriTestContext);
	}
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_configurationUri; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterConfigurationUri) {
			listener.enterConfigurationUri(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitConfigurationUri) {
			listener.exitConfigurationUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitConfigurationUri) {
			return visitor.visitConfigurationUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UriTestContext extends ParserRuleContext {
	public dottedIdentifierList(): DottedIdentifierListContext {
		return this.getRuleContext(0, DottedIdentifierListContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_uriTest; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterUriTest) {
			listener.enterUriTest(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitUriTest) {
			listener.exitUriTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitUriTest) {
			return visitor.visitUriTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DtypeContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_dtype; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterDtype) {
			listener.enterDtype(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitDtype) {
			listener.exitDtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitDtype) {
			return visitor.visitDtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public qualified(): QualifiedContext | undefined {
		return this.tryGetRuleContext(0, QualifiedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_typeName; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public dtype(): DtypeContext[];
	public dtype(i: number): DtypeContext;
	public dtype(i?: number): DtypeContext | DtypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DtypeContext);
		} else {
			return this.getRuleContext(i, DtypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_typeList; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public typeAliasBody(): TypeAliasBodyContext {
		return this.getRuleContext(0, TypeAliasBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_typeAlias; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTypeAlias) {
			listener.enterTypeAlias(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTypeAlias) {
			listener.exitTypeAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTypeAlias) {
			return visitor.visitTypeAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasBodyContext extends ParserRuleContext {
	public functionTypeAlias(): FunctionTypeAliasContext {
		return this.getRuleContext(0, FunctionTypeAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_typeAliasBody; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterTypeAliasBody) {
			listener.enterTypeAliasBody(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitTypeAliasBody) {
			listener.exitTypeAliasBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitTypeAliasBody) {
			return visitor.visitTypeAliasBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeAliasContext extends ParserRuleContext {
	public functionPrefix(): FunctionPrefixContext {
		return this.getRuleContext(0, FunctionPrefixContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_functionTypeAlias; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFunctionTypeAlias) {
			listener.enterFunctionTypeAlias(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFunctionTypeAlias) {
			listener.exitFunctionTypeAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFunctionTypeAlias) {
			return visitor.visitFunctionTypeAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionPrefixContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Dart2Parser.RULE_functionPrefix; }
	// @Override
	public enterRule(listener: Dart2Listener): void {
		if (listener.enterFunctionPrefix) {
			listener.enterFunctionPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: Dart2Listener): void {
		if (listener.exitFunctionPrefix) {
			listener.exitFunctionPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Dart2Visitor<Result>): Result {
		if (visitor.visitFunctionPrefix) {
			return visitor.visitFunctionPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


