// Generated from ./lib/grammars/css/css3.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { css3Listener } from "./css3Listener";
import { css3Visitor } from "./css3Visitor";


export class css3Parser extends Parser {
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
	public static readonly Comment = 16;
	public static readonly Space = 17;
	public static readonly Cdo = 18;
	public static readonly Cdc = 19;
	public static readonly Includes = 20;
	public static readonly DashMatch = 21;
	public static readonly Hash = 22;
	public static readonly Import = 23;
	public static readonly Page = 24;
	public static readonly Media = 25;
	public static readonly Namespace = 26;
	public static readonly Charset = 27;
	public static readonly Important = 28;
	public static readonly Percentage = 29;
	public static readonly Uri = 30;
	public static readonly UnicodeRange = 31;
	public static readonly MediaOnly = 32;
	public static readonly Not = 33;
	public static readonly And = 34;
	public static readonly Dimension = 35;
	public static readonly UnknownDimension = 36;
	public static readonly Plus = 37;
	public static readonly Minus = 38;
	public static readonly Greater = 39;
	public static readonly Comma = 40;
	public static readonly Tilde = 41;
	public static readonly PseudoNot = 42;
	public static readonly Number = 43;
	public static readonly String_ = 44;
	public static readonly PrefixMatch = 45;
	public static readonly SuffixMatch = 46;
	public static readonly SubstringMatch = 47;
	public static readonly FontFace = 48;
	public static readonly Supports = 49;
	public static readonly Or = 50;
	public static readonly Keyframes = 51;
	public static readonly From = 52;
	public static readonly To = 53;
	public static readonly Calc = 54;
	public static readonly Viewport = 55;
	public static readonly CounterStyle = 56;
	public static readonly FontFeatureValues = 57;
	public static readonly DxImageTransform = 58;
	public static readonly Variable = 59;
	public static readonly Var = 60;
	public static readonly Ident = 61;
	public static readonly Function_ = 62;
	public static readonly RULE_stylesheet = 0;
	public static readonly RULE_charset = 1;
	public static readonly RULE_imports = 2;
	public static readonly RULE_namespace_ = 3;
	public static readonly RULE_namespacePrefix = 4;
	public static readonly RULE_media = 5;
	public static readonly RULE_mediaQueryList = 6;
	public static readonly RULE_mediaQuery = 7;
	public static readonly RULE_mediaType = 8;
	public static readonly RULE_mediaExpression = 9;
	public static readonly RULE_mediaFeature = 10;
	public static readonly RULE_page = 11;
	public static readonly RULE_pseudoPage = 12;
	public static readonly RULE_selectorGroup = 13;
	public static readonly RULE_selector = 14;
	public static readonly RULE_combinator = 15;
	public static readonly RULE_simpleSelectorSequence = 16;
	public static readonly RULE_typeSelector = 17;
	public static readonly RULE_typeNamespacePrefix = 18;
	public static readonly RULE_elementName = 19;
	public static readonly RULE_universal = 20;
	public static readonly RULE_className = 21;
	public static readonly RULE_attrib = 22;
	public static readonly RULE_pseudo = 23;
	public static readonly RULE_functionalPseudo = 24;
	public static readonly RULE_expression = 25;
	public static readonly RULE_negation = 26;
	public static readonly RULE_negationArg = 27;
	public static readonly RULE_operator_ = 28;
	public static readonly RULE_property_ = 29;
	public static readonly RULE_ruleset = 30;
	public static readonly RULE_declarationList = 31;
	public static readonly RULE_declaration = 32;
	public static readonly RULE_prio = 33;
	public static readonly RULE_value = 34;
	public static readonly RULE_expr = 35;
	public static readonly RULE_term = 36;
	public static readonly RULE_function_ = 37;
	public static readonly RULE_dxImageTransform = 38;
	public static readonly RULE_hexcolor = 39;
	public static readonly RULE_number = 40;
	public static readonly RULE_percentage = 41;
	public static readonly RULE_dimension = 42;
	public static readonly RULE_unknownDimension = 43;
	public static readonly RULE_any_ = 44;
	public static readonly RULE_atRule = 45;
	public static readonly RULE_atKeyword = 46;
	public static readonly RULE_unused = 47;
	public static readonly RULE_block = 48;
	public static readonly RULE_nestedStatement = 49;
	public static readonly RULE_groupRuleBody = 50;
	public static readonly RULE_supportsRule = 51;
	public static readonly RULE_supportsCondition = 52;
	public static readonly RULE_supportsConditionInParens = 53;
	public static readonly RULE_supportsNegation = 54;
	public static readonly RULE_supportsConjunction = 55;
	public static readonly RULE_supportsDisjunction = 56;
	public static readonly RULE_supportsDeclarationCondition = 57;
	public static readonly RULE_generalEnclosed = 58;
	public static readonly RULE_var_ = 59;
	public static readonly RULE_calc = 60;
	public static readonly RULE_calcSum = 61;
	public static readonly RULE_calcProduct = 62;
	public static readonly RULE_calcValue = 63;
	public static readonly RULE_fontFaceRule = 64;
	public static readonly RULE_fontFaceDeclaration = 65;
	public static readonly RULE_keyframesRule = 66;
	public static readonly RULE_keyframesBlocks = 67;
	public static readonly RULE_keyframeSelector = 68;
	public static readonly RULE_viewport = 69;
	public static readonly RULE_counterStyle = 70;
	public static readonly RULE_fontFeatureValuesRule = 71;
	public static readonly RULE_fontFamilyNameList = 72;
	public static readonly RULE_fontFamilyName = 73;
	public static readonly RULE_featureValueBlock = 74;
	public static readonly RULE_featureType = 75;
	public static readonly RULE_featureValueDefinition = 76;
	public static readonly RULE_ident = 77;
	public static readonly RULE_ws = 78;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"stylesheet", "charset", "imports", "namespace_", "namespacePrefix", "media", 
		"mediaQueryList", "mediaQuery", "mediaType", "mediaExpression", "mediaFeature", 
		"page", "pseudoPage", "selectorGroup", "selector", "combinator", "simpleSelectorSequence", 
		"typeSelector", "typeNamespacePrefix", "elementName", "universal", "className", 
		"attrib", "pseudo", "functionalPseudo", "expression", "negation", "negationArg", 
		"operator_", "property_", "ruleset", "declarationList", "declaration", 
		"prio", "value", "expr", "term", "function_", "dxImageTransform", "hexcolor", 
		"number", "percentage", "dimension", "unknownDimension", "any_", "atRule", 
		"atKeyword", "unused", "block", "nestedStatement", "groupRuleBody", "supportsRule", 
		"supportsCondition", "supportsConditionInParens", "supportsNegation", 
		"supportsConjunction", "supportsDisjunction", "supportsDeclarationCondition", 
		"generalEnclosed", "var_", "calc", "calcSum", "calcProduct", "calcValue", 
		"fontFaceRule", "fontFaceDeclaration", "keyframesRule", "keyframesBlocks", 
		"keyframeSelector", "viewport", "counterStyle", "fontFeatureValuesRule", 
		"fontFamilyNameList", "fontFamilyName", "featureValueBlock", "featureType", 
		"featureValueDefinition", "ident", "ws",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'('", "':'", "')'", "'{'", "'}'", "'*'", "'|'", "'.'", 
		"'['", "'='", "']'", "'/'", "'_'", "'@'", undefined, undefined, "'<!--'", 
		"'-->'", "'~='", "'|='", undefined, undefined, undefined, undefined, undefined, 
		"'@charset '", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'+'", "'-'", "'>'", "','", 
		"'~'", undefined, undefined, undefined, "'^='", "'$='", "'*='", undefined, 
		undefined, undefined, undefined, undefined, undefined, "'calc('", undefined, 
		undefined, undefined, undefined, undefined, "'var('",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "Comment", "Space", "Cdo", "Cdc", "Includes", "DashMatch", 
		"Hash", "Import", "Page", "Media", "Namespace", "Charset", "Important", 
		"Percentage", "Uri", "UnicodeRange", "MediaOnly", "Not", "And", "Dimension", 
		"UnknownDimension", "Plus", "Minus", "Greater", "Comma", "Tilde", "PseudoNot", 
		"Number", "String_", "PrefixMatch", "SuffixMatch", "SubstringMatch", "FontFace", 
		"Supports", "Or", "Keyframes", "From", "To", "Calc", "Viewport", "CounterStyle", 
		"FontFeatureValues", "DxImageTransform", "Variable", "Var", "Ident", "Function_",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(css3Parser._LITERAL_NAMES, css3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return css3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "css3.g4"; }

	// @Override
	public get ruleNames(): string[] { return css3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return css3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(css3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public stylesheet(): StylesheetContext {
		let _localctx: StylesheetContext = new StylesheetContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, css3Parser.RULE_stylesheet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.ws();
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.Charset) {
				{
				{
				this.state = 159;
				this.charset();
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0)) {
					{
					{
					this.state = 160;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0))) {
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
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.Import) {
				{
				{
				this.state = 171;
				this.imports();
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0)) {
					{
					{
					this.state = 172;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0))) {
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
					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.Namespace) {
				{
				{
				this.state = 183;
				this.namespace_();
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0)) {
					{
					{
					this.state = 184;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0))) {
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
					this.state = 189;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__6) | (1 << css3Parser.T__7) | (1 << css3Parser.T__8) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Page) | (1 << css3Parser.Media) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.PseudoNot - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.FontFace - 32)) | (1 << (css3Parser.Supports - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.Keyframes - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Viewport - 32)) | (1 << (css3Parser.CounterStyle - 32)) | (1 << (css3Parser.FontFeatureValues - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function_ - 32)))) !== 0)) {
				{
				{
				this.state = 195;
				this.nestedStatement();
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0)) {
					{
					{
					this.state = 196;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0))) {
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
					this.state = 201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 206;
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
	public charset(): CharsetContext {
		let _localctx: CharsetContext = new CharsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, css3Parser.RULE_charset);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				_localctx = new GoodCharsetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 207;
				this.match(css3Parser.Charset);
				this.state = 208;
				this.ws();
				this.state = 209;
				this.match(css3Parser.String_);
				this.state = 210;
				this.ws();
				this.state = 211;
				this.match(css3Parser.T__0);
				this.state = 212;
				this.ws();
				}
				break;

			case 2:
				_localctx = new BadCharsetContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.match(css3Parser.Charset);
				this.state = 215;
				this.ws();
				this.state = 216;
				this.match(css3Parser.String_);
				this.state = 217;
				this.ws();
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
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, css3Parser.RULE_imports);
		let _la: number;
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new GoodImportContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.match(css3Parser.Import);
				this.state = 222;
				this.ws();
				this.state = 223;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Uri || _la === css3Parser.String_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 224;
				this.ws();
				this.state = 225;
				this.mediaQueryList();
				this.state = 226;
				this.match(css3Parser.T__0);
				this.state = 227;
				this.ws();
				}
				break;

			case 2:
				_localctx = new GoodImportContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 229;
				this.match(css3Parser.Import);
				this.state = 230;
				this.ws();
				this.state = 231;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Uri || _la === css3Parser.String_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 232;
				this.ws();
				this.state = 233;
				this.match(css3Parser.T__0);
				this.state = 234;
				this.ws();
				}
				break;

			case 3:
				_localctx = new BadImportContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 236;
				this.match(css3Parser.Import);
				this.state = 237;
				this.ws();
				this.state = 238;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Uri || _la === css3Parser.String_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 239;
				this.ws();
				this.state = 240;
				this.mediaQueryList();
				}
				break;

			case 4:
				_localctx = new BadImportContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 242;
				this.match(css3Parser.Import);
				this.state = 243;
				this.ws();
				this.state = 244;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Uri || _la === css3Parser.String_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 245;
				this.ws();
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
	public namespace_(): Namespace_Context {
		let _localctx: Namespace_Context = new Namespace_Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, css3Parser.RULE_namespace_);
		let _la: number;
		try {
			this.state = 271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				_localctx = new GoodNamespaceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 249;
				this.match(css3Parser.Namespace);
				this.state = 250;
				this.ws();
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
					{
					this.state = 251;
					this.namespacePrefix();
					this.state = 252;
					this.ws();
					}
				}

				this.state = 256;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Uri || _la === css3Parser.String_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 257;
				this.ws();
				this.state = 258;
				this.match(css3Parser.T__0);
				this.state = 259;
				this.ws();
				}
				break;

			case 2:
				_localctx = new BadNamespaceContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 261;
				this.match(css3Parser.Namespace);
				this.state = 262;
				this.ws();
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
					{
					this.state = 263;
					this.namespacePrefix();
					this.state = 264;
					this.ws();
					}
				}

				this.state = 268;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Uri || _la === css3Parser.String_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 269;
				this.ws();
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
	public namespacePrefix(): NamespacePrefixContext {
		let _localctx: NamespacePrefixContext = new NamespacePrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, css3Parser.RULE_namespacePrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public media(): MediaContext {
		let _localctx: MediaContext = new MediaContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, css3Parser.RULE_media);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(css3Parser.Media);
			this.state = 276;
			this.ws();
			this.state = 277;
			this.mediaQueryList();
			this.state = 278;
			this.groupRuleBody();
			this.state = 279;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaQueryList(): MediaQueryListContext {
		let _localctx: MediaQueryListContext = new MediaQueryListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, css3Parser.RULE_mediaQueryList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 281;
				this.mediaQuery();
				this.state = 288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 282;
						this.match(css3Parser.Comma);
						this.state = 283;
						this.ws();
						this.state = 284;
						this.mediaQuery();
						}
						}
					}
					this.state = 290;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				}
				break;
			}
			this.state = 293;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaQuery(): MediaQueryContext {
		let _localctx: MediaQueryContext = new MediaQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, css3Parser.RULE_mediaQuery);
		let _la: number;
		try {
			let _alt: number;
			this.state = 320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 296;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 295;
					_la = this._input.LA(1);
					if (!(_la === css3Parser.MediaOnly || _la === css3Parser.Not)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				this.state = 298;
				this.ws();
				this.state = 299;
				this.mediaType();
				this.state = 300;
				this.ws();
				this.state = 307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 301;
						this.match(css3Parser.And);
						this.state = 302;
						this.ws();
						this.state = 303;
						this.mediaExpression();
						}
						}
					}
					this.state = 309;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 310;
				this.mediaExpression();
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 311;
						this.match(css3Parser.And);
						this.state = 312;
						this.ws();
						this.state = 313;
						this.mediaExpression();
						}
						}
					}
					this.state = 319;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
	public mediaType(): MediaTypeContext {
		let _localctx: MediaTypeContext = new MediaTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, css3Parser.RULE_mediaType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaExpression(): MediaExpressionContext {
		let _localctx: MediaExpressionContext = new MediaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, css3Parser.RULE_mediaExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(css3Parser.T__1);
			this.state = 325;
			this.ws();
			this.state = 326;
			this.mediaFeature();
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === css3Parser.T__2) {
				{
				this.state = 327;
				this.match(css3Parser.T__2);
				this.state = 328;
				this.ws();
				this.state = 329;
				this.expr();
				}
			}

			this.state = 333;
			this.match(css3Parser.T__3);
			this.state = 334;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaFeature(): MediaFeatureContext {
		let _localctx: MediaFeatureContext = new MediaFeatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, css3Parser.RULE_mediaFeature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.ident();
			this.state = 337;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public page(): PageContext {
		let _localctx: PageContext = new PageContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, css3Parser.RULE_page);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(css3Parser.Page);
			this.state = 340;
			this.ws();
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === css3Parser.T__2) {
				{
				this.state = 341;
				this.pseudoPage();
				}
			}

			this.state = 344;
			this.match(css3Parser.T__4);
			this.state = 345;
			this.ws();
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === css3Parser.T__6 || _la === css3Parser.T__13 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
				{
				this.state = 346;
				this.declaration();
				}
			}

			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.T__0) {
				{
				{
				this.state = 349;
				this.match(css3Parser.T__0);
				this.state = 350;
				this.ws();
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === css3Parser.T__6 || _la === css3Parser.T__13 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
					{
					this.state = 351;
					this.declaration();
					}
				}

				}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 359;
			this.match(css3Parser.T__5);
			this.state = 360;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pseudoPage(): PseudoPageContext {
		let _localctx: PseudoPageContext = new PseudoPageContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, css3Parser.RULE_pseudoPage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(css3Parser.T__2);
			this.state = 363;
			this.ident();
			this.state = 364;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectorGroup(): SelectorGroupContext {
		let _localctx: SelectorGroupContext = new SelectorGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, css3Parser.RULE_selectorGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.selector();
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.Comma) {
				{
				{
				this.state = 367;
				this.match(css3Parser.Comma);
				this.state = 368;
				this.ws();
				this.state = 369;
				this.selector();
				}
				}
				this.state = 375;
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
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, css3Parser.RULE_selector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.simpleSelectorSequence();
			this.state = 377;
			this.ws();
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (css3Parser.Space - 17)) | (1 << (css3Parser.Plus - 17)) | (1 << (css3Parser.Greater - 17)) | (1 << (css3Parser.Tilde - 17)))) !== 0)) {
				{
				{
				this.state = 378;
				this.combinator();
				this.state = 379;
				this.simpleSelectorSequence();
				this.state = 380;
				this.ws();
				}
				}
				this.state = 386;
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
	public combinator(): CombinatorContext {
		let _localctx: CombinatorContext = new CombinatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, css3Parser.RULE_combinator);
		try {
			this.state = 395;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.Plus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				this.match(css3Parser.Plus);
				this.state = 388;
				this.ws();
				}
				break;
			case css3Parser.Greater:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 389;
				this.match(css3Parser.Greater);
				this.state = 390;
				this.ws();
				}
				break;
			case css3Parser.Tilde:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 391;
				this.match(css3Parser.Tilde);
				this.state = 392;
				this.ws();
				}
				break;
			case css3Parser.Space:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 393;
				this.match(css3Parser.Space);
				this.state = 394;
				this.ws();
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
	public simpleSelectorSequence(): SimpleSelectorSequenceContext {
		let _localctx: SimpleSelectorSequenceContext = new SimpleSelectorSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, css3Parser.RULE_simpleSelectorSequence);
		try {
			let _alt: number;
			this.state = 420;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.T__6:
			case css3Parser.T__7:
			case css3Parser.MediaOnly:
			case css3Parser.Not:
			case css3Parser.And:
			case css3Parser.Or:
			case css3Parser.From:
			case css3Parser.To:
			case css3Parser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 397;
					this.typeSelector();
					}
					break;

				case 2:
					{
					this.state = 398;
					this.universal();
					}
					break;
				}
				this.state = 408;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 406;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case css3Parser.Hash:
							{
							this.state = 401;
							this.match(css3Parser.Hash);
							}
							break;
						case css3Parser.T__8:
							{
							this.state = 402;
							this.className();
							}
							break;
						case css3Parser.T__9:
							{
							this.state = 403;
							this.attrib();
							}
							break;
						case css3Parser.T__2:
							{
							this.state = 404;
							this.pseudo();
							}
							break;
						case css3Parser.PseudoNot:
							{
							this.state = 405;
							this.negation();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 410;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				}
				break;
			case css3Parser.T__2:
			case css3Parser.T__8:
			case css3Parser.T__9:
			case css3Parser.Hash:
			case css3Parser.PseudoNot:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 416;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 416;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case css3Parser.Hash:
							{
							this.state = 411;
							this.match(css3Parser.Hash);
							}
							break;
						case css3Parser.T__8:
							{
							this.state = 412;
							this.className();
							}
							break;
						case css3Parser.T__9:
							{
							this.state = 413;
							this.attrib();
							}
							break;
						case css3Parser.T__2:
							{
							this.state = 414;
							this.pseudo();
							}
							break;
						case css3Parser.PseudoNot:
							{
							this.state = 415;
							this.negation();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 418;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public typeSelector(): TypeSelectorContext {
		let _localctx: TypeSelectorContext = new TypeSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, css3Parser.RULE_typeSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 422;
				this.typeNamespacePrefix();
				}
				break;
			}
			this.state = 425;
			this.elementName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNamespacePrefix(): TypeNamespacePrefixContext {
		let _localctx: TypeNamespacePrefixContext = new TypeNamespacePrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, css3Parser.RULE_typeNamespacePrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.MediaOnly:
			case css3Parser.Not:
			case css3Parser.And:
			case css3Parser.Or:
			case css3Parser.From:
			case css3Parser.To:
			case css3Parser.Ident:
				{
				this.state = 427;
				this.ident();
				}
				break;
			case css3Parser.T__6:
				{
				this.state = 428;
				this.match(css3Parser.T__6);
				}
				break;
			case css3Parser.T__7:
				break;
			default:
				break;
			}
			this.state = 431;
			this.match(css3Parser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementName(): ElementNameContext {
		let _localctx: ElementNameContext = new ElementNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, css3Parser.RULE_elementName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public universal(): UniversalContext {
		let _localctx: UniversalContext = new UniversalContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, css3Parser.RULE_universal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 435;
				this.typeNamespacePrefix();
				}
				break;
			}
			this.state = 438;
			this.match(css3Parser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public className(): ClassNameContext {
		let _localctx: ClassNameContext = new ClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, css3Parser.RULE_className);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.match(css3Parser.T__8);
			this.state = 441;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrib(): AttribContext {
		let _localctx: AttribContext = new AttribContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, css3Parser.RULE_attrib);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(css3Parser.T__9);
			this.state = 444;
			this.ws();
			this.state = 446;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 445;
				this.typeNamespacePrefix();
				}
				break;
			}
			this.state = 448;
			this.ident();
			this.state = 449;
			this.ws();
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__10) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (css3Parser.PrefixMatch - 45)) | (1 << (css3Parser.SuffixMatch - 45)) | (1 << (css3Parser.SubstringMatch - 45)))) !== 0)) {
				{
				this.state = 450;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__10) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (css3Parser.PrefixMatch - 45)) | (1 << (css3Parser.SuffixMatch - 45)) | (1 << (css3Parser.SubstringMatch - 45)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 451;
				this.ws();
				this.state = 454;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case css3Parser.MediaOnly:
				case css3Parser.Not:
				case css3Parser.And:
				case css3Parser.Or:
				case css3Parser.From:
				case css3Parser.To:
				case css3Parser.Ident:
					{
					this.state = 452;
					this.ident();
					}
					break;
				case css3Parser.String_:
					{
					this.state = 453;
					this.match(css3Parser.String_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 456;
				this.ws();
				}
			}

			this.state = 460;
			this.match(css3Parser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pseudo(): PseudoContext {
		let _localctx: PseudoContext = new PseudoContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, css3Parser.RULE_pseudo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(css3Parser.T__2);
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === css3Parser.T__2) {
				{
				this.state = 463;
				this.match(css3Parser.T__2);
				}
			}

			this.state = 468;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.MediaOnly:
			case css3Parser.Not:
			case css3Parser.And:
			case css3Parser.Or:
			case css3Parser.From:
			case css3Parser.To:
			case css3Parser.Ident:
				{
				this.state = 466;
				this.ident();
				}
				break;
			case css3Parser.Function_:
				{
				this.state = 467;
				this.functionalPseudo();
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
	public functionalPseudo(): FunctionalPseudoContext {
		let _localctx: FunctionalPseudoContext = new FunctionalPseudoContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, css3Parser.RULE_functionalPseudo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.match(css3Parser.Function_);
			this.state = 471;
			this.ws();
			this.state = 472;
			this.expression();
			this.state = 473;
			this.match(css3Parser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 50, css3Parser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 482;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case css3Parser.Plus:
					{
					this.state = 475;
					this.match(css3Parser.Plus);
					}
					break;
				case css3Parser.Minus:
					{
					this.state = 476;
					this.match(css3Parser.Minus);
					}
					break;
				case css3Parser.Dimension:
					{
					this.state = 477;
					this.match(css3Parser.Dimension);
					}
					break;
				case css3Parser.UnknownDimension:
					{
					this.state = 478;
					this.match(css3Parser.UnknownDimension);
					}
					break;
				case css3Parser.Number:
					{
					this.state = 479;
					this.match(css3Parser.Number);
					}
					break;
				case css3Parser.String_:
					{
					this.state = 480;
					this.match(css3Parser.String_);
					}
					break;
				case css3Parser.MediaOnly:
				case css3Parser.Not:
				case css3Parser.And:
				case css3Parser.Or:
				case css3Parser.From:
				case css3Parser.To:
				case css3Parser.Ident:
					{
					this.state = 481;
					this.ident();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 484;
				this.ws();
				}
				}
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public negation(): NegationContext {
		let _localctx: NegationContext = new NegationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, css3Parser.RULE_negation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(css3Parser.PseudoNot);
			this.state = 490;
			this.ws();
			this.state = 491;
			this.negationArg();
			this.state = 492;
			this.ws();
			this.state = 493;
			this.match(css3Parser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public negationArg(): NegationArgContext {
		let _localctx: NegationArgContext = new NegationArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, css3Parser.RULE_negationArg);
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this.typeSelector();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 496;
				this.universal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
				this.match(css3Parser.Hash);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 498;
				this.className();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 499;
				this.attrib();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 500;
				this.pseudo();
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
	public operator_(): Operator_Context {
		let _localctx: Operator_Context = new Operator_Context(this._ctx, this.state);
		this.enterRule(_localctx, 56, css3Parser.RULE_operator_);
		try {
			this.state = 511;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.T__12:
				_localctx = new GoodOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.match(css3Parser.T__12);
				this.state = 504;
				this.ws();
				}
				break;
			case css3Parser.Comma:
				_localctx = new GoodOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 505;
				this.match(css3Parser.Comma);
				this.state = 506;
				this.ws();
				}
				break;
			case css3Parser.Space:
				_localctx = new GoodOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 507;
				this.match(css3Parser.Space);
				this.state = 508;
				this.ws();
				}
				break;
			case css3Parser.T__10:
				_localctx = new BadOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 509;
				this.match(css3Parser.T__10);
				this.state = 510;
				this.ws();
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
	public property_(): Property_Context {
		let _localctx: Property_Context = new Property_Context(this._ctx, this.state);
		this.enterRule(_localctx, 58, css3Parser.RULE_property_);
		try {
			this.state = 522;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.MediaOnly:
			case css3Parser.Not:
			case css3Parser.And:
			case css3Parser.Or:
			case css3Parser.From:
			case css3Parser.To:
			case css3Parser.Ident:
				_localctx = new GoodPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 513;
				this.ident();
				this.state = 514;
				this.ws();
				}
				break;
			case css3Parser.Variable:
				_localctx = new GoodPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 516;
				this.match(css3Parser.Variable);
				this.state = 517;
				this.ws();
				}
				break;
			case css3Parser.T__6:
				_localctx = new BadPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 518;
				this.match(css3Parser.T__6);
				this.state = 519;
				this.ident();
				}
				break;
			case css3Parser.T__13:
				_localctx = new BadPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 520;
				this.match(css3Parser.T__13);
				this.state = 521;
				this.ident();
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
	public ruleset(): RulesetContext {
		let _localctx: RulesetContext = new RulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, css3Parser.RULE_ruleset);
		let _la: number;
		try {
			this.state = 547;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				_localctx = new KnownRulesetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 524;
				this.selectorGroup();
				this.state = 525;
				this.match(css3Parser.T__4);
				this.state = 526;
				this.ws();
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
					{
					this.state = 527;
					this.declarationList();
					}
				}

				this.state = 530;
				this.match(css3Parser.T__5);
				this.state = 531;
				this.ws();
				}
				break;

			case 2:
				_localctx = new UnknownRulesetContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__9) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function_ - 32)))) !== 0)) {
					{
					{
					this.state = 533;
					this.any_();
					}
					}
					this.state = 538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 539;
				this.match(css3Parser.T__4);
				this.state = 540;
				this.ws();
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
					{
					this.state = 541;
					this.declarationList();
					}
				}

				this.state = 544;
				this.match(css3Parser.T__5);
				this.state = 545;
				this.ws();
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
	public declarationList(): DeclarationListContext {
		let _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, css3Parser.RULE_declarationList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.T__0) {
				{
				{
				this.state = 549;
				this.match(css3Parser.T__0);
				this.state = 550;
				this.ws();
				}
				}
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 556;
			this.declaration();
			this.state = 557;
			this.ws();
			this.state = 565;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 558;
					this.match(css3Parser.T__0);
					this.state = 559;
					this.ws();
					this.state = 561;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						this.state = 560;
						this.declaration();
						}
						break;
					}
					}
					}
				}
				this.state = 567;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, css3Parser.RULE_declaration);
		try {
			this.state = 580;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				_localctx = new KnownDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 568;
				this.property_();
				this.state = 569;
				this.match(css3Parser.T__2);
				this.state = 570;
				this.ws();
				this.state = 571;
				this.expr();
				this.state = 573;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
				case 1:
					{
					this.state = 572;
					this.prio();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new UnknownDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 575;
				this.property_();
				this.state = 576;
				this.match(css3Parser.T__2);
				this.state = 577;
				this.ws();
				this.state = 578;
				this.value();
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
	public prio(): PrioContext {
		let _localctx: PrioContext = new PrioContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, css3Parser.RULE_prio);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this.match(css3Parser.Important);
			this.state = 583;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, css3Parser.RULE_value);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 590;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case css3Parser.T__1:
					case css3Parser.T__2:
					case css3Parser.T__9:
					case css3Parser.Includes:
					case css3Parser.DashMatch:
					case css3Parser.Hash:
					case css3Parser.Percentage:
					case css3Parser.Uri:
					case css3Parser.UnicodeRange:
					case css3Parser.MediaOnly:
					case css3Parser.Not:
					case css3Parser.And:
					case css3Parser.Dimension:
					case css3Parser.UnknownDimension:
					case css3Parser.Plus:
					case css3Parser.Minus:
					case css3Parser.Number:
					case css3Parser.String_:
					case css3Parser.Or:
					case css3Parser.From:
					case css3Parser.To:
					case css3Parser.Ident:
					case css3Parser.Function_:
						{
						this.state = 585;
						this.any_();
						}
						break;
					case css3Parser.T__4:
						{
						this.state = 586;
						this.block();
						}
						break;
					case css3Parser.T__14:
						{
						this.state = 587;
						this.atKeyword();
						this.state = 588;
						this.ws();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 592;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
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
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, css3Parser.RULE_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.term();
			this.state = 601;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 596;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (css3Parser.T__10 - 11)) | (1 << (css3Parser.T__12 - 11)) | (1 << (css3Parser.Space - 11)) | (1 << (css3Parser.Comma - 11)))) !== 0)) {
						{
						this.state = 595;
						this.operator_();
						}
					}

					this.state = 598;
					this.term();
					}
					}
				}
				this.state = 603;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, css3Parser.RULE_term);
		try {
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 604;
				this.number();
				this.state = 605;
				this.ws();
				}
				break;

			case 2:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 607;
				this.percentage();
				this.state = 608;
				this.ws();
				}
				break;

			case 3:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 610;
				this.dimension();
				this.state = 611;
				this.ws();
				}
				break;

			case 4:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 613;
				this.match(css3Parser.String_);
				this.state = 614;
				this.ws();
				}
				break;

			case 5:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 615;
				this.match(css3Parser.UnicodeRange);
				this.state = 616;
				this.ws();
				}
				break;

			case 6:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 617;
				this.ident();
				this.state = 618;
				this.ws();
				}
				break;

			case 7:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 620;
				this.var_();
				}
				break;

			case 8:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 621;
				this.match(css3Parser.Uri);
				this.state = 622;
				this.ws();
				}
				break;

			case 9:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 623;
				this.hexcolor();
				}
				break;

			case 10:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 624;
				this.calc();
				}
				break;

			case 11:
				_localctx = new KnownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 625;
				this.function_();
				}
				break;

			case 12:
				_localctx = new UnknownTermContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 626;
				this.unknownDimension();
				this.state = 627;
				this.ws();
				}
				break;

			case 13:
				_localctx = new BadTermContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 629;
				this.dxImageTransform();
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
	public function_(): Function_Context {
		let _localctx: Function_Context = new Function_Context(this._ctx, this.state);
		this.enterRule(_localctx, 74, css3Parser.RULE_function_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.match(css3Parser.Function_);
			this.state = 633;
			this.ws();
			this.state = 634;
			this.expr();
			this.state = 635;
			this.match(css3Parser.T__3);
			this.state = 636;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dxImageTransform(): DxImageTransformContext {
		let _localctx: DxImageTransformContext = new DxImageTransformContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, css3Parser.RULE_dxImageTransform);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.match(css3Parser.DxImageTransform);
			this.state = 639;
			this.ws();
			this.state = 640;
			this.expr();
			this.state = 641;
			this.match(css3Parser.T__3);
			this.state = 642;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hexcolor(): HexcolorContext {
		let _localctx: HexcolorContext = new HexcolorContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, css3Parser.RULE_hexcolor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.match(css3Parser.Hash);
			this.state = 645;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, css3Parser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === css3Parser.Plus || _la === css3Parser.Minus) {
				{
				this.state = 647;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
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

			this.state = 650;
			this.match(css3Parser.Number);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public percentage(): PercentageContext {
		let _localctx: PercentageContext = new PercentageContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, css3Parser.RULE_percentage);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === css3Parser.Plus || _la === css3Parser.Minus) {
				{
				this.state = 652;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
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

			this.state = 655;
			this.match(css3Parser.Percentage);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimension(): DimensionContext {
		let _localctx: DimensionContext = new DimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, css3Parser.RULE_dimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === css3Parser.Plus || _la === css3Parser.Minus) {
				{
				this.state = 657;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
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

			this.state = 660;
			this.match(css3Parser.Dimension);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unknownDimension(): UnknownDimensionContext {
		let _localctx: UnknownDimensionContext = new UnknownDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, css3Parser.RULE_unknownDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === css3Parser.Plus || _la === css3Parser.Minus) {
				{
				this.state = 662;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
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

			this.state = 665;
			this.match(css3Parser.UnknownDimension);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public any_(): Any_Context {
		let _localctx: Any_Context = new Any_Context(this._ctx, this.state);
		this.enterRule(_localctx, 88, css3Parser.RULE_any_);
		let _la: number;
		try {
			this.state = 732;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.ident();
				this.state = 668;
				this.ws();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 670;
				this.number();
				this.state = 671;
				this.ws();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 673;
				this.percentage();
				this.state = 674;
				this.ws();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 676;
				this.dimension();
				this.state = 677;
				this.ws();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 679;
				this.unknownDimension();
				this.state = 680;
				this.ws();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 682;
				this.match(css3Parser.String_);
				this.state = 683;
				this.ws();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 684;
				this.match(css3Parser.Uri);
				this.state = 685;
				this.ws();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 686;
				this.match(css3Parser.Hash);
				this.state = 687;
				this.ws();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 688;
				this.match(css3Parser.UnicodeRange);
				this.state = 689;
				this.ws();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 690;
				this.match(css3Parser.Includes);
				this.state = 691;
				this.ws();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 692;
				this.match(css3Parser.DashMatch);
				this.state = 693;
				this.ws();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 694;
				this.match(css3Parser.T__2);
				this.state = 695;
				this.ws();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 696;
				this.match(css3Parser.Function_);
				this.state = 697;
				this.ws();
				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function_ - 32)))) !== 0)) {
					{
					this.state = 700;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case css3Parser.T__1:
					case css3Parser.T__2:
					case css3Parser.T__9:
					case css3Parser.Includes:
					case css3Parser.DashMatch:
					case css3Parser.Hash:
					case css3Parser.Percentage:
					case css3Parser.Uri:
					case css3Parser.UnicodeRange:
					case css3Parser.MediaOnly:
					case css3Parser.Not:
					case css3Parser.And:
					case css3Parser.Dimension:
					case css3Parser.UnknownDimension:
					case css3Parser.Plus:
					case css3Parser.Minus:
					case css3Parser.Number:
					case css3Parser.String_:
					case css3Parser.Or:
					case css3Parser.From:
					case css3Parser.To:
					case css3Parser.Ident:
					case css3Parser.Function_:
						{
						this.state = 698;
						this.any_();
						}
						break;
					case css3Parser.T__0:
					case css3Parser.T__4:
					case css3Parser.T__14:
					case css3Parser.Cdo:
					case css3Parser.Cdc:
						{
						this.state = 699;
						this.unused();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 704;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 705;
				this.match(css3Parser.T__3);
				this.state = 706;
				this.ws();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 708;
				this.match(css3Parser.T__1);
				this.state = 709;
				this.ws();
				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function_ - 32)))) !== 0)) {
					{
					this.state = 712;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case css3Parser.T__1:
					case css3Parser.T__2:
					case css3Parser.T__9:
					case css3Parser.Includes:
					case css3Parser.DashMatch:
					case css3Parser.Hash:
					case css3Parser.Percentage:
					case css3Parser.Uri:
					case css3Parser.UnicodeRange:
					case css3Parser.MediaOnly:
					case css3Parser.Not:
					case css3Parser.And:
					case css3Parser.Dimension:
					case css3Parser.UnknownDimension:
					case css3Parser.Plus:
					case css3Parser.Minus:
					case css3Parser.Number:
					case css3Parser.String_:
					case css3Parser.Or:
					case css3Parser.From:
					case css3Parser.To:
					case css3Parser.Ident:
					case css3Parser.Function_:
						{
						this.state = 710;
						this.any_();
						}
						break;
					case css3Parser.T__0:
					case css3Parser.T__4:
					case css3Parser.T__14:
					case css3Parser.Cdo:
					case css3Parser.Cdc:
						{
						this.state = 711;
						this.unused();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 716;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 717;
				this.match(css3Parser.T__3);
				this.state = 718;
				this.ws();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 720;
				this.match(css3Parser.T__9);
				this.state = 721;
				this.ws();
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function_ - 32)))) !== 0)) {
					{
					this.state = 724;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case css3Parser.T__1:
					case css3Parser.T__2:
					case css3Parser.T__9:
					case css3Parser.Includes:
					case css3Parser.DashMatch:
					case css3Parser.Hash:
					case css3Parser.Percentage:
					case css3Parser.Uri:
					case css3Parser.UnicodeRange:
					case css3Parser.MediaOnly:
					case css3Parser.Not:
					case css3Parser.And:
					case css3Parser.Dimension:
					case css3Parser.UnknownDimension:
					case css3Parser.Plus:
					case css3Parser.Minus:
					case css3Parser.Number:
					case css3Parser.String_:
					case css3Parser.Or:
					case css3Parser.From:
					case css3Parser.To:
					case css3Parser.Ident:
					case css3Parser.Function_:
						{
						this.state = 722;
						this.any_();
						}
						break;
					case css3Parser.T__0:
					case css3Parser.T__4:
					case css3Parser.T__14:
					case css3Parser.Cdo:
					case css3Parser.Cdc:
						{
						this.state = 723;
						this.unused();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 728;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 729;
				this.match(css3Parser.T__11);
				this.state = 730;
				this.ws();
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
	public atRule(): AtRuleContext {
		let _localctx: AtRuleContext = new AtRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, css3Parser.RULE_atRule);
		let _la: number;
		try {
			_localctx = new UnknownAtRuleContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.atKeyword();
			this.state = 735;
			this.ws();
			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__9) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function_ - 32)))) !== 0)) {
				{
				{
				this.state = 736;
				this.any_();
				}
				}
				this.state = 741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 745;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.T__4:
				{
				this.state = 742;
				this.block();
				}
				break;
			case css3Parser.T__0:
				{
				this.state = 743;
				this.match(css3Parser.T__0);
				this.state = 744;
				this.ws();
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
	public atKeyword(): AtKeywordContext {
		let _localctx: AtKeywordContext = new AtKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, css3Parser.RULE_atKeyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(css3Parser.T__14);
			this.state = 748;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unused(): UnusedContext {
		let _localctx: UnusedContext = new UnusedContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, css3Parser.RULE_unused);
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 750;
				this.block();
				}
				break;
			case css3Parser.T__14:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 751;
				this.atKeyword();
				this.state = 752;
				this.ws();
				}
				break;
			case css3Parser.T__0:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 754;
				this.match(css3Parser.T__0);
				this.state = 755;
				this.ws();
				}
				break;
			case css3Parser.Cdo:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 756;
				this.match(css3Parser.Cdo);
				this.state = 757;
				this.ws();
				}
				break;
			case css3Parser.Cdc:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 758;
				this.match(css3Parser.Cdc);
				this.state = 759;
				this.ws();
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, css3Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 762;
			this.match(css3Parser.T__4);
			this.state = 763;
			this.ws();
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__6) | (1 << css3Parser.T__7) | (1 << css3Parser.T__8) | (1 << css3Parser.T__9) | (1 << css3Parser.T__13) | (1 << css3Parser.T__14) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Page) | (1 << css3Parser.Media) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.PseudoNot - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.FontFace - 32)) | (1 << (css3Parser.Supports - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.Keyframes - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Viewport - 32)) | (1 << (css3Parser.CounterStyle - 32)) | (1 << (css3Parser.FontFeatureValues - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function_ - 32)))) !== 0)) {
				{
				this.state = 773;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 764;
					this.declarationList();
					}
					break;

				case 2:
					{
					this.state = 765;
					this.nestedStatement();
					}
					break;

				case 3:
					{
					this.state = 766;
					this.any_();
					}
					break;

				case 4:
					{
					this.state = 767;
					this.block();
					}
					break;

				case 5:
					{
					this.state = 768;
					this.atKeyword();
					this.state = 769;
					this.ws();
					}
					break;

				case 6:
					{
					this.state = 771;
					this.match(css3Parser.T__0);
					this.state = 772;
					this.ws();
					}
					break;
				}
				}
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 778;
			this.match(css3Parser.T__5);
			this.state = 779;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nestedStatement(): NestedStatementContext {
		let _localctx: NestedStatementContext = new NestedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, css3Parser.RULE_nestedStatement);
		try {
			this.state = 791;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.T__1:
			case css3Parser.T__2:
			case css3Parser.T__4:
			case css3Parser.T__6:
			case css3Parser.T__7:
			case css3Parser.T__8:
			case css3Parser.T__9:
			case css3Parser.Includes:
			case css3Parser.DashMatch:
			case css3Parser.Hash:
			case css3Parser.Percentage:
			case css3Parser.Uri:
			case css3Parser.UnicodeRange:
			case css3Parser.MediaOnly:
			case css3Parser.Not:
			case css3Parser.And:
			case css3Parser.Dimension:
			case css3Parser.UnknownDimension:
			case css3Parser.Plus:
			case css3Parser.Minus:
			case css3Parser.PseudoNot:
			case css3Parser.Number:
			case css3Parser.String_:
			case css3Parser.Or:
			case css3Parser.From:
			case css3Parser.To:
			case css3Parser.Ident:
			case css3Parser.Function_:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 781;
				this.ruleset();
				}
				break;
			case css3Parser.Media:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 782;
				this.media();
				}
				break;
			case css3Parser.Page:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 783;
				this.page();
				}
				break;
			case css3Parser.FontFace:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 784;
				this.fontFaceRule();
				}
				break;
			case css3Parser.Keyframes:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 785;
				this.keyframesRule();
				}
				break;
			case css3Parser.Supports:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 786;
				this.supportsRule();
				}
				break;
			case css3Parser.Viewport:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 787;
				this.viewport();
				}
				break;
			case css3Parser.CounterStyle:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 788;
				this.counterStyle();
				}
				break;
			case css3Parser.FontFeatureValues:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 789;
				this.fontFeatureValuesRule();
				}
				break;
			case css3Parser.T__14:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 790;
				this.atRule();
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
	public groupRuleBody(): GroupRuleBodyContext {
		let _localctx: GroupRuleBodyContext = new GroupRuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, css3Parser.RULE_groupRuleBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(css3Parser.T__4);
			this.state = 794;
			this.ws();
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__6) | (1 << css3Parser.T__7) | (1 << css3Parser.T__8) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Page) | (1 << css3Parser.Media) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.PseudoNot - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.FontFace - 32)) | (1 << (css3Parser.Supports - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.Keyframes - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Viewport - 32)) | (1 << (css3Parser.CounterStyle - 32)) | (1 << (css3Parser.FontFeatureValues - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function_ - 32)))) !== 0)) {
				{
				{
				this.state = 795;
				this.nestedStatement();
				}
				}
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 801;
			this.match(css3Parser.T__5);
			this.state = 802;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public supportsRule(): SupportsRuleContext {
		let _localctx: SupportsRuleContext = new SupportsRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, css3Parser.RULE_supportsRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.match(css3Parser.Supports);
			this.state = 805;
			this.ws();
			this.state = 806;
			this.supportsCondition();
			this.state = 807;
			this.ws();
			this.state = 808;
			this.groupRuleBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public supportsCondition(): SupportsConditionContext {
		let _localctx: SupportsConditionContext = new SupportsConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, css3Parser.RULE_supportsCondition);
		try {
			this.state = 814;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 810;
				this.supportsNegation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 811;
				this.supportsConjunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 812;
				this.supportsDisjunction();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 813;
				this.supportsConditionInParens();
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
	public supportsConditionInParens(): SupportsConditionInParensContext {
		let _localctx: SupportsConditionInParensContext = new SupportsConditionInParensContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, css3Parser.RULE_supportsConditionInParens);
		try {
			this.state = 824;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 816;
				this.match(css3Parser.T__1);
				this.state = 817;
				this.ws();
				this.state = 818;
				this.supportsCondition();
				this.state = 819;
				this.ws();
				this.state = 820;
				this.match(css3Parser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 822;
				this.supportsDeclarationCondition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 823;
				this.generalEnclosed();
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
	public supportsNegation(): SupportsNegationContext {
		let _localctx: SupportsNegationContext = new SupportsNegationContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, css3Parser.RULE_supportsNegation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this.match(css3Parser.Not);
			this.state = 827;
			this.ws();
			this.state = 828;
			this.match(css3Parser.Space);
			this.state = 829;
			this.ws();
			this.state = 830;
			this.supportsConditionInParens();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public supportsConjunction(): SupportsConjunctionContext {
		let _localctx: SupportsConjunctionContext = new SupportsConjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, css3Parser.RULE_supportsConjunction);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.supportsConditionInParens();
			this.state = 842;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 833;
					this.ws();
					this.state = 834;
					this.match(css3Parser.Space);
					this.state = 835;
					this.ws();
					this.state = 836;
					this.match(css3Parser.And);
					this.state = 837;
					this.ws();
					this.state = 838;
					this.match(css3Parser.Space);
					this.state = 839;
					this.ws();
					this.state = 840;
					this.supportsConditionInParens();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 844;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
	public supportsDisjunction(): SupportsDisjunctionContext {
		let _localctx: SupportsDisjunctionContext = new SupportsDisjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, css3Parser.RULE_supportsDisjunction);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this.supportsConditionInParens();
			this.state = 856;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 847;
					this.ws();
					this.state = 848;
					this.match(css3Parser.Space);
					this.state = 849;
					this.ws();
					this.state = 850;
					this.match(css3Parser.Or);
					this.state = 851;
					this.ws();
					this.state = 852;
					this.match(css3Parser.Space);
					this.state = 853;
					this.ws();
					this.state = 854;
					this.supportsConditionInParens();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 858;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
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
	public supportsDeclarationCondition(): SupportsDeclarationConditionContext {
		let _localctx: SupportsDeclarationConditionContext = new SupportsDeclarationConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, css3Parser.RULE_supportsDeclarationCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.match(css3Parser.T__1);
			this.state = 861;
			this.ws();
			this.state = 862;
			this.declaration();
			this.state = 863;
			this.match(css3Parser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generalEnclosed(): GeneralEnclosedContext {
		let _localctx: GeneralEnclosedContext = new GeneralEnclosedContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, css3Parser.RULE_generalEnclosed);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			_la = this._input.LA(1);
			if (!(_la === css3Parser.T__1 || _la === css3Parser.Function_)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String_ - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function_ - 32)))) !== 0)) {
				{
				this.state = 868;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case css3Parser.T__1:
				case css3Parser.T__2:
				case css3Parser.T__9:
				case css3Parser.Includes:
				case css3Parser.DashMatch:
				case css3Parser.Hash:
				case css3Parser.Percentage:
				case css3Parser.Uri:
				case css3Parser.UnicodeRange:
				case css3Parser.MediaOnly:
				case css3Parser.Not:
				case css3Parser.And:
				case css3Parser.Dimension:
				case css3Parser.UnknownDimension:
				case css3Parser.Plus:
				case css3Parser.Minus:
				case css3Parser.Number:
				case css3Parser.String_:
				case css3Parser.Or:
				case css3Parser.From:
				case css3Parser.To:
				case css3Parser.Ident:
				case css3Parser.Function_:
					{
					this.state = 866;
					this.any_();
					}
					break;
				case css3Parser.T__0:
				case css3Parser.T__4:
				case css3Parser.T__14:
				case css3Parser.Cdo:
				case css3Parser.Cdc:
					{
					this.state = 867;
					this.unused();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 873;
			this.match(css3Parser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_(): Var_Context {
		let _localctx: Var_Context = new Var_Context(this._ctx, this.state);
		this.enterRule(_localctx, 118, css3Parser.RULE_var_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
			this.match(css3Parser.Var);
			this.state = 876;
			this.ws();
			this.state = 877;
			this.match(css3Parser.Variable);
			this.state = 878;
			this.ws();
			this.state = 879;
			this.match(css3Parser.T__3);
			this.state = 880;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calc(): CalcContext {
		let _localctx: CalcContext = new CalcContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, css3Parser.RULE_calc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this.match(css3Parser.Calc);
			this.state = 883;
			this.ws();
			this.state = 884;
			this.calcSum();
			this.state = 885;
			this.match(css3Parser.T__3);
			this.state = 886;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calcSum(): CalcSumContext {
		let _localctx: CalcSumContext = new CalcSumContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, css3Parser.RULE_calcSum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 888;
			this.calcProduct();
			this.state = 899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.Space) {
				{
				{
				this.state = 889;
				this.match(css3Parser.Space);
				this.state = 890;
				this.ws();
				this.state = 891;
				_la = this._input.LA(1);
				if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 892;
				this.ws();
				this.state = 893;
				this.match(css3Parser.Space);
				this.state = 894;
				this.ws();
				this.state = 895;
				this.calcProduct();
				}
				}
				this.state = 901;
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
	public calcProduct(): CalcProductContext {
		let _localctx: CalcProductContext = new CalcProductContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, css3Parser.RULE_calcProduct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 902;
			this.calcValue();
			this.state = 914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.T__6 || _la === css3Parser.T__12) {
				{
				this.state = 912;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case css3Parser.T__6:
					{
					this.state = 903;
					this.match(css3Parser.T__6);
					this.state = 904;
					this.ws();
					this.state = 905;
					this.calcValue();
					}
					break;
				case css3Parser.T__12:
					{
					this.state = 907;
					this.match(css3Parser.T__12);
					this.state = 908;
					this.ws();
					this.state = 909;
					this.number();
					this.state = 910;
					this.ws();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 916;
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
	public calcValue(): CalcValueContext {
		let _localctx: CalcValueContext = new CalcValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, css3Parser.RULE_calcValue);
		try {
			this.state = 935;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 917;
				this.number();
				this.state = 918;
				this.ws();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 920;
				this.dimension();
				this.state = 921;
				this.ws();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 923;
				this.unknownDimension();
				this.state = 924;
				this.ws();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 926;
				this.percentage();
				this.state = 927;
				this.ws();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 929;
				this.match(css3Parser.T__1);
				this.state = 930;
				this.ws();
				this.state = 931;
				this.calcSum();
				this.state = 932;
				this.match(css3Parser.T__3);
				this.state = 933;
				this.ws();
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
	public fontFaceRule(): FontFaceRuleContext {
		let _localctx: FontFaceRuleContext = new FontFaceRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, css3Parser.RULE_fontFaceRule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 937;
			this.match(css3Parser.FontFace);
			this.state = 938;
			this.ws();
			this.state = 939;
			this.match(css3Parser.T__4);
			this.state = 940;
			this.ws();
			this.state = 942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === css3Parser.T__6 || _la === css3Parser.T__13 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
				{
				this.state = 941;
				this.fontFaceDeclaration();
				}
			}

			this.state = 951;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.T__0) {
				{
				{
				this.state = 944;
				this.match(css3Parser.T__0);
				this.state = 945;
				this.ws();
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === css3Parser.T__6 || _la === css3Parser.T__13 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
					{
					this.state = 946;
					this.fontFaceDeclaration();
					}
				}

				}
				}
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 954;
			this.match(css3Parser.T__5);
			this.state = 955;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fontFaceDeclaration(): FontFaceDeclarationContext {
		let _localctx: FontFaceDeclarationContext = new FontFaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, css3Parser.RULE_fontFaceDeclaration);
		try {
			this.state = 967;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				_localctx = new KnownFontFaceDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 957;
				this.property_();
				this.state = 958;
				this.match(css3Parser.T__2);
				this.state = 959;
				this.ws();
				this.state = 960;
				this.expr();
				}
				break;

			case 2:
				_localctx = new UnknownFontFaceDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 962;
				this.property_();
				this.state = 963;
				this.match(css3Parser.T__2);
				this.state = 964;
				this.ws();
				this.state = 965;
				this.value();
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
	public keyframesRule(): KeyframesRuleContext {
		let _localctx: KeyframesRuleContext = new KeyframesRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, css3Parser.RULE_keyframesRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.match(css3Parser.Keyframes);
			this.state = 970;
			this.ws();
			this.state = 971;
			this.match(css3Parser.Space);
			this.state = 972;
			this.ws();
			this.state = 973;
			this.ident();
			this.state = 974;
			this.ws();
			this.state = 975;
			this.match(css3Parser.T__4);
			this.state = 976;
			this.ws();
			this.state = 977;
			this.keyframesBlocks();
			this.state = 978;
			this.match(css3Parser.T__5);
			this.state = 979;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyframesBlocks(): KeyframesBlocksContext {
		let _localctx: KeyframesBlocksContext = new KeyframesBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, css3Parser.RULE_keyframesBlocks);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (css3Parser.Percentage - 29)) | (1 << (css3Parser.From - 29)) | (1 << (css3Parser.To - 29)))) !== 0)) {
				{
				{
				this.state = 981;
				this.keyframeSelector();
				this.state = 982;
				this.match(css3Parser.T__4);
				this.state = 983;
				this.ws();
				this.state = 985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
					{
					this.state = 984;
					this.declarationList();
					}
				}

				this.state = 987;
				this.match(css3Parser.T__5);
				this.state = 988;
				this.ws();
				}
				}
				this.state = 994;
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
	public keyframeSelector(): KeyframeSelectorContext {
		let _localctx: KeyframeSelectorContext = new KeyframeSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, css3Parser.RULE_keyframeSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 995;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (css3Parser.Percentage - 29)) | (1 << (css3Parser.From - 29)) | (1 << (css3Parser.To - 29)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 996;
			this.ws();
			this.state = 1004;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.Comma) {
				{
				{
				this.state = 997;
				this.match(css3Parser.Comma);
				this.state = 998;
				this.ws();
				this.state = 999;
				_la = this._input.LA(1);
				if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (css3Parser.Percentage - 29)) | (1 << (css3Parser.From - 29)) | (1 << (css3Parser.To - 29)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1000;
				this.ws();
				}
				}
				this.state = 1006;
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
	public viewport(): ViewportContext {
		let _localctx: ViewportContext = new ViewportContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, css3Parser.RULE_viewport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1007;
			this.match(css3Parser.Viewport);
			this.state = 1008;
			this.ws();
			this.state = 1009;
			this.match(css3Parser.T__4);
			this.state = 1010;
			this.ws();
			this.state = 1012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
				{
				this.state = 1011;
				this.declarationList();
				}
			}

			this.state = 1014;
			this.match(css3Parser.T__5);
			this.state = 1015;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public counterStyle(): CounterStyleContext {
		let _localctx: CounterStyleContext = new CounterStyleContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, css3Parser.RULE_counterStyle);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1017;
			this.match(css3Parser.CounterStyle);
			this.state = 1018;
			this.ws();
			this.state = 1019;
			this.ident();
			this.state = 1020;
			this.ws();
			this.state = 1021;
			this.match(css3Parser.T__4);
			this.state = 1022;
			this.ws();
			this.state = 1024;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
				{
				this.state = 1023;
				this.declarationList();
				}
			}

			this.state = 1026;
			this.match(css3Parser.T__5);
			this.state = 1027;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fontFeatureValuesRule(): FontFeatureValuesRuleContext {
		let _localctx: FontFeatureValuesRuleContext = new FontFeatureValuesRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, css3Parser.RULE_fontFeatureValuesRule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1029;
			this.match(css3Parser.FontFeatureValues);
			this.state = 1030;
			this.ws();
			this.state = 1031;
			this.fontFamilyNameList();
			this.state = 1032;
			this.ws();
			this.state = 1033;
			this.match(css3Parser.T__4);
			this.state = 1034;
			this.ws();
			this.state = 1038;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === css3Parser.T__14) {
				{
				{
				this.state = 1035;
				this.featureValueBlock();
				}
				}
				this.state = 1040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1041;
			this.match(css3Parser.T__5);
			this.state = 1042;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fontFamilyNameList(): FontFamilyNameListContext {
		let _localctx: FontFamilyNameListContext = new FontFamilyNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, css3Parser.RULE_fontFamilyNameList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.fontFamilyName();
			this.state = 1052;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1045;
					this.ws();
					this.state = 1046;
					this.match(css3Parser.Comma);
					this.state = 1047;
					this.ws();
					this.state = 1048;
					this.fontFamilyName();
					}
					}
				}
				this.state = 1054;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
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
	public fontFamilyName(): FontFamilyNameContext {
		let _localctx: FontFamilyNameContext = new FontFamilyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, css3Parser.RULE_fontFamilyName);
		try {
			let _alt: number;
			this.state = 1065;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case css3Parser.String_:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1055;
				this.match(css3Parser.String_);
				}
				break;
			case css3Parser.MediaOnly:
			case css3Parser.Not:
			case css3Parser.And:
			case css3Parser.Or:
			case css3Parser.From:
			case css3Parser.To:
			case css3Parser.Ident:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1056;
				this.ident();
				this.state = 1062;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1057;
						this.ws();
						this.state = 1058;
						this.ident();
						}
						}
					}
					this.state = 1064;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
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
	public featureValueBlock(): FeatureValueBlockContext {
		let _localctx: FeatureValueBlockContext = new FeatureValueBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, css3Parser.RULE_featureValueBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1067;
			this.featureType();
			this.state = 1068;
			this.ws();
			this.state = 1069;
			this.match(css3Parser.T__4);
			this.state = 1070;
			this.ws();
			this.state = 1072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 1071;
				this.featureValueDefinition();
				}
				break;
			}
			this.state = 1082;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1074;
					this.ws();
					this.state = 1075;
					this.match(css3Parser.T__0);
					this.state = 1076;
					this.ws();
					this.state = 1078;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
					case 1:
						{
						this.state = 1077;
						this.featureValueDefinition();
						}
						break;
					}
					}
					}
				}
				this.state = 1084;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			}
			this.state = 1085;
			this.match(css3Parser.T__5);
			this.state = 1086;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public featureType(): FeatureTypeContext {
		let _localctx: FeatureTypeContext = new FeatureTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, css3Parser.RULE_featureType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1088;
			this.atKeyword();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public featureValueDefinition(): FeatureValueDefinitionContext {
		let _localctx: FeatureValueDefinitionContext = new FeatureValueDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, css3Parser.RULE_featureValueDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			this.ident();
			this.state = 1091;
			this.ws();
			this.state = 1092;
			this.match(css3Parser.T__2);
			this.state = 1093;
			this.ws();
			this.state = 1094;
			this.number();
			this.state = 1100;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1095;
					this.ws();
					this.state = 1096;
					this.number();
					}
					}
				}
				this.state = 1102;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
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
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, css3Parser.RULE_ident);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1103;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0))) {
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
	public ws(): WsContext {
		let _localctx: WsContext = new WsContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, css3Parser.RULE_ws);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1108;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1105;
					_la = this._input.LA(1);
					if (!(_la === css3Parser.Comment || _la === css3Parser.Space)) {
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
				}
				this.state = 1110;
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u045A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x03\x02\x03\x02\x03\x02\x07\x02\xA4\n\x02\f\x02\x0E\x02\xA7" +
		"\v\x02\x07\x02\xA9\n\x02\f\x02\x0E\x02\xAC\v\x02\x03\x02\x03\x02\x07\x02" +
		"\xB0\n\x02\f\x02\x0E\x02\xB3\v\x02\x07\x02\xB5\n\x02\f\x02\x0E\x02\xB8" +
		"\v\x02\x03\x02\x03\x02\x07\x02\xBC\n\x02\f\x02\x0E\x02\xBF\v\x02\x07\x02" +
		"\xC1\n\x02\f\x02\x0E\x02\xC4\v\x02\x03\x02\x03\x02\x07\x02\xC8\n\x02\f" +
		"\x02\x0E\x02\xCB\v\x02\x07\x02\xCD\n\x02\f\x02\x0E\x02\xD0\v\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\xDE\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04\xFA\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\u0101\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u010D\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\u0112\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u0121" +
		"\n\b\f\b\x0E\b\u0124\v\b\x05\b\u0126\n\b\x03\b\x03\b\x03\t\x05\t\u012B" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0134\n\t\f\t\x0E" +
		"\t\u0137\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u013E\n\t\f\t\x0E\t\u0141" +
		"\v\t\x05\t\u0143\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\u014E\n\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x05\r\u0159\n\r\x03\r\x03\r\x03\r\x05\r\u015E\n\r\x03\r\x03\r\x03\r" +
		"\x05\r\u0163\n\r\x07\r\u0165\n\r\f\r\x0E\r\u0168\v\r\x03\r\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\u0176\n\x0F\f\x0F\x0E\x0F\u0179\v\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x07\x10\u0181\n\x10\f\x10\x0E\x10\u0184\v\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\u018E\n\x11\x03\x12\x03\x12\x05\x12\u0192\n\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x07\x12\u0199\n\x12\f\x12\x0E\x12\u019C\v\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x06\x12\u01A3\n\x12\r\x12\x0E\x12\u01A4" +
		"\x05\x12\u01A7\n\x12\x03\x13\x05\x13\u01AA\n\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x05\x14\u01B0\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x05" +
		"\x16\u01B7\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u01C1\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x05\x18\u01C9\n\x18\x03\x18\x03\x18\x05\x18\u01CD\n\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x05\x19\u01D3\n\x19\x03\x19\x03\x19\x05\x19\u01D7" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01E5\n\x1B\x03\x1B\x06\x1B\u01E8" +
		"\n\x1B\r\x1B\x0E\x1B\u01E9\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01F8\n\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u0202\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u020D\n\x1F\x03 \x03 \x03 \x03 \x05 \u0213\n \x03" +
		" \x03 \x03 \x03 \x07 \u0219\n \f \x0E \u021C\v \x03 \x03 \x03 \x05 \u0221" +
		"\n \x03 \x03 \x03 \x05 \u0226\n \x03!\x03!\x07!\u022A\n!\f!\x0E!\u022D" +
		"\v!\x03!\x03!\x03!\x03!\x03!\x05!\u0234\n!\x07!\u0236\n!\f!\x0E!\u0239" +
		"\v!\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0240\n\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x05\"\u0247\n\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x06$" +
		"\u0251\n$\r$\x0E$\u0252\x03%\x03%\x05%\u0257\n%\x03%\x07%\u025A\n%\f%" +
		"\x0E%\u025D\v%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&" +
		"\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x05&\u0279\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03)\x03)\x03)\x03*\x05*\u028B\n*\x03*\x03*\x03+\x05" +
		"+\u0290\n+\x03+\x03+\x03,\x05,\u0295\n,\x03,\x03,\x03-\x05-\u029A\n-\x03" +
		"-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u02BF\n.\f.\x0E.\u02C2\v.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x07.\u02CB\n.\f.\x0E.\u02CE\v.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x07.\u02D7\n.\f.\x0E.\u02DA\v.\x03.\x03.\x03.\x05" +
		".\u02DF\n.\x03/\x03/\x03/\x07/\u02E4\n/\f/\x0E/\u02E7\v/\x03/\x03/\x03" +
		"/\x05/\u02EC\n/\x030\x030\x030\x031\x031\x031\x031\x031\x031\x031\x03" +
		"1\x031\x031\x051\u02FB\n1\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x072\u0308\n2\f2\x0E2\u030B\v2\x032\x032\x032\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x033\x033\x053\u031A\n3\x034\x034\x034\x07" +
		"4\u031F\n4\f4\x0E4\u0322\v4\x034\x034\x034\x035\x035\x035\x035\x035\x03" +
		"5\x036\x036\x036\x036\x056\u0331\n6\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x057\u033B\n7\x038\x038\x038\x038\x038\x038\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x069\u034D\n9\r9\x0E9\u034E\x03:\x03:" +
		"\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x06:\u035B\n:\r:\x0E:\u035C\x03" +
		";\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x07<\u0367\n<\f<\x0E<\u036A\v<\x03" +
		"<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u0384\n?\f?\x0E?\u0387" +
		"\v?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u0393\n@\f" +
		"@\x0E@\u0396\v@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u03AA\nA\x03B\x03B\x03B\x03" +
		"B\x03B\x05B\u03B1\nB\x03B\x03B\x03B\x05B\u03B6\nB\x07B\u03B8\nB\fB\x0E" +
		"B\u03BB\vB\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x05C\u03CA\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03E\x03E\x03E\x03E\x05E\u03DC\nE\x03E\x03E\x03E\x07E\u03E1" +
		"\nE\fE\x0EE\u03E4\vE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u03ED\nF" +
		"\fF\x0EF\u03F0\vF\x03G\x03G\x03G\x03G\x03G\x05G\u03F7\nG\x03G\x03G\x03" +
		"G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0403\nH\x03H\x03H\x03H\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x07I\u040F\nI\fI\x0EI\u0412\vI\x03I\x03" +
		"I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x07J\u041D\nJ\fJ\x0EJ\u0420\vJ\x03" +
		"K\x03K\x03K\x03K\x03K\x07K\u0427\nK\fK\x0EK\u042A\vK\x05K\u042C\nK\x03" +
		"L\x03L\x03L\x03L\x03L\x05L\u0433\nL\x03L\x03L\x03L\x03L\x05L\u0439\nL" +
		"\x07L\u043B\nL\fL\x0EL\u043E\vL\x03L\x03L\x03L\x03M\x03M\x03N\x03N\x03" +
		"N\x03N\x03N\x03N\x03N\x03N\x07N\u044D\nN\fN\x0EN\u0450\vN\x03O\x03O\x03" +
		"P\x07P\u0455\nP\fP\x0EP\u0458\vP\x03P\x02\x02\x02Q\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\x02\v\x03\x02\x12\x15\x04\x02" +
		"  ..\x03\x02\"#\x05\x02\r\r\x16\x17/1\x03\x02\'(\x04\x02\x04\x04@@\x04" +
		"\x02\x1F\x1F67\x06\x02\"$4467??\x03\x02\x12\x13\x02\u04BA\x02\xA0\x03" +
		"\x02\x02\x02\x04\xDD\x03\x02\x02\x02\x06\xF9\x03\x02\x02\x02\b\u0111\x03" +
		"\x02\x02\x02\n\u0113\x03\x02\x02\x02\f\u0115\x03\x02\x02\x02\x0E\u0125" +
		"\x03\x02\x02\x02\x10\u0142\x03\x02\x02\x02\x12\u0144\x03\x02\x02\x02\x14" +
		"\u0146\x03\x02\x02\x02\x16\u0152\x03\x02\x02\x02\x18\u0155\x03\x02\x02" +
		"\x02\x1A\u016C\x03\x02\x02\x02\x1C\u0170\x03\x02\x02\x02\x1E\u017A\x03" +
		"\x02\x02\x02 \u018D\x03\x02\x02\x02\"\u01A6\x03\x02\x02\x02$\u01A9\x03" +
		"\x02\x02\x02&\u01AF\x03\x02\x02\x02(\u01B3\x03\x02\x02\x02*\u01B6\x03" +
		"\x02\x02\x02,\u01BA\x03\x02\x02\x02.\u01BD\x03\x02\x02\x020\u01D0\x03" +
		"\x02\x02\x022\u01D8\x03\x02\x02\x024\u01E7\x03\x02\x02\x026\u01EB\x03" +
		"\x02\x02\x028\u01F7\x03\x02\x02\x02:\u0201\x03\x02\x02\x02<\u020C\x03" +
		"\x02\x02\x02>\u0225\x03\x02\x02\x02@\u022B\x03\x02\x02\x02B\u0246\x03" +
		"\x02\x02\x02D\u0248\x03\x02\x02\x02F\u0250\x03\x02\x02\x02H\u0254\x03" +
		"\x02\x02\x02J\u0278\x03\x02\x02\x02L\u027A\x03\x02\x02\x02N\u0280\x03" +
		"\x02\x02\x02P\u0286\x03\x02\x02\x02R\u028A\x03\x02\x02\x02T\u028F\x03" +
		"\x02\x02\x02V\u0294\x03\x02\x02\x02X\u0299\x03\x02\x02\x02Z\u02DE\x03" +
		"\x02\x02\x02\\\u02E0\x03\x02\x02\x02^\u02ED\x03\x02\x02\x02`\u02FA\x03" +
		"\x02\x02\x02b\u02FC\x03\x02\x02\x02d\u0319\x03\x02\x02\x02f\u031B\x03" +
		"\x02\x02\x02h\u0326\x03\x02\x02\x02j\u0330\x03\x02\x02\x02l\u033A\x03" +
		"\x02\x02\x02n\u033C\x03\x02\x02\x02p\u0342\x03\x02\x02\x02r\u0350\x03" +
		"\x02\x02\x02t\u035E\x03\x02\x02\x02v\u0363\x03\x02\x02\x02x\u036D\x03" +
		"\x02\x02\x02z\u0374\x03\x02\x02\x02|\u037A\x03\x02\x02\x02~\u0388\x03" +
		"\x02\x02\x02\x80\u03A9\x03\x02\x02\x02\x82\u03AB\x03\x02\x02\x02\x84\u03C9" +
		"\x03\x02\x02\x02\x86\u03CB\x03\x02\x02\x02\x88\u03E2\x03\x02\x02\x02\x8A" +
		"\u03E5\x03\x02\x02\x02\x8C\u03F1\x03\x02\x02\x02\x8E\u03FB\x03\x02\x02" +
		"\x02\x90\u0407\x03\x02\x02\x02\x92\u0416\x03\x02\x02\x02\x94\u042B\x03" +
		"\x02\x02\x02\x96\u042D\x03\x02\x02\x02\x98\u0442\x03\x02\x02\x02\x9A\u0444" +
		"\x03\x02\x02\x02\x9C\u0451\x03\x02\x02\x02\x9E\u0456\x03\x02\x02\x02\xA0" +
		"\xAA\x05\x9EP\x02\xA1\xA5\x05\x04\x03\x02\xA2\xA4\t\x02\x02\x02\xA3\xA2" +
		"\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6" +
		"\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA1" +
		"\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB" +
		"\x03\x02\x02\x02\xAB\xB6\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xB1" +
		"\x05\x06\x04\x02\xAE\xB0\t\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3" +
		"\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB5" +
		"\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xAD\x03\x02\x02\x02\xB5\xB8" +
		"\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xC2" +
		"\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBD\x05\b\x05\x02\xBA\xBC" +
		"\t\x02\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB" +
		"\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD" +
		"\x03\x02\x02\x02\xC0\xB9\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0" +
		"\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xCE\x03\x02\x02\x02\xC4\xC2" +
		"\x03\x02\x02\x02\xC5\xC9\x05d3\x02\xC6\xC8\t\x02\x02\x02\xC7\xC6\x03\x02" +
		"\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02" +
		"\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xC5\x03\x02" +
		"\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02" +
		"\x02\x02\xCF\x03\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x07\x1D" +
		"\x02\x02\xD2\xD3\x05\x9EP\x02\xD3\xD4\x07.\x02\x02\xD4\xD5\x05\x9EP\x02" +
		"\xD5\xD6\x07\x03\x02\x02\xD6\xD7\x05\x9EP\x02\xD7\xDE\x03\x02\x02\x02" +
		"\xD8\xD9\x07\x1D\x02\x02\xD9\xDA\x05\x9EP\x02\xDA\xDB\x07.\x02\x02\xDB" +
		"\xDC\x05\x9EP\x02\xDC\xDE\x03\x02\x02\x02\xDD\xD1\x03\x02\x02\x02\xDD" +
		"\xD8\x03\x02\x02\x02\xDE\x05\x03\x02\x02\x02\xDF\xE0\x07\x19\x02\x02\xE0" +
		"\xE1\x05\x9EP\x02\xE1\xE2\t\x03\x02\x02\xE2\xE3\x05\x9EP\x02\xE3\xE4\x05" +
		"\x0E\b\x02\xE4\xE5\x07\x03\x02\x02\xE5\xE6\x05\x9EP\x02\xE6\xFA\x03\x02" +
		"\x02\x02\xE7\xE8\x07\x19\x02\x02\xE8\xE9\x05\x9EP\x02\xE9\xEA\t\x03\x02" +
		"\x02\xEA\xEB\x05\x9EP\x02\xEB\xEC\x07\x03\x02\x02\xEC\xED\x05\x9EP\x02" +
		"\xED\xFA\x03\x02\x02\x02\xEE\xEF\x07\x19\x02\x02\xEF\xF0\x05\x9EP\x02" +
		"\xF0\xF1\t\x03\x02\x02\xF1\xF2\x05\x9EP\x02\xF2\xF3\x05\x0E\b\x02\xF3" +
		"\xFA\x03\x02\x02\x02\xF4\xF5\x07\x19\x02\x02\xF5\xF6\x05\x9EP\x02\xF6" +
		"\xF7\t\x03\x02\x02\xF7\xF8\x05\x9EP\x02\xF8\xFA\x03\x02\x02\x02\xF9\xDF" +
		"\x03\x02\x02\x02\xF9\xE7\x03\x02\x02\x02\xF9\xEE\x03\x02\x02\x02\xF9\xF4" +
		"\x03\x02\x02\x02\xFA\x07\x03\x02\x02\x02\xFB\xFC\x07\x1C\x02\x02\xFC\u0100" +
		"\x05\x9EP\x02\xFD\xFE\x05\n\x06\x02\xFE\xFF\x05\x9EP\x02\xFF\u0101\x03" +
		"\x02\x02\x02\u0100\xFD\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
		"\u0102\x03\x02\x02\x02\u0102\u0103\t\x03\x02\x02\u0103\u0104\x05\x9EP" +
		"\x02\u0104\u0105\x07\x03\x02\x02\u0105\u0106\x05\x9EP\x02\u0106\u0112" +
		"\x03\x02\x02\x02\u0107\u0108\x07\x1C\x02\x02\u0108\u010C\x05\x9EP\x02" +
		"\u0109\u010A\x05\n\x06\x02\u010A\u010B\x05\x9EP\x02\u010B\u010D\x03\x02" +
		"\x02\x02\u010C\u0109\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E\u010F\t\x03\x02\x02\u010F\u0110\x05\x9EP" +
		"\x02\u0110\u0112\x03\x02\x02\x02\u0111\xFB\x03\x02\x02\x02\u0111\u0107" +
		"\x03\x02\x02\x02\u0112\t\x03\x02\x02\x02\u0113\u0114\x05\x9CO\x02\u0114" +
		"\v\x03\x02\x02\x02\u0115\u0116\x07\x1B\x02\x02\u0116\u0117\x05\x9EP\x02" +
		"\u0117\u0118\x05\x0E\b\x02\u0118\u0119\x05f4\x02\u0119\u011A\x05\x9EP" +
		"\x02\u011A\r\x03\x02\x02\x02\u011B\u0122\x05\x10\t\x02\u011C\u011D\x07" +
		"*\x02\x02\u011D\u011E\x05\x9EP\x02\u011E\u011F\x05\x10\t\x02\u011F\u0121" +
		"\x03\x02\x02\x02\u0120\u011C\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02" +
		"\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0126\x03" +
		"\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u011B\x03\x02\x02\x02\u0125" +
		"\u0126\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x05\x9E" +
		"P\x02\u0128\x0F\x03\x02\x02\x02\u0129\u012B\t\x04\x02\x02\u012A\u0129" +
		"\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02" +
		"\u012C\u012D\x05\x9EP\x02\u012D\u012E\x05\x12\n\x02\u012E\u0135\x05\x9E" +
		"P\x02\u012F\u0130\x07$\x02\x02\u0130\u0131\x05\x9EP\x02\u0131\u0132\x05" +
		"\x14\v\x02\u0132\u0134\x03\x02\x02\x02\u0133\u012F\x03\x02\x02\x02\u0134" +
		"\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02" +
		"\x02\x02\u0136\u0143\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
		"\u013F\x05\x14\v\x02\u0139\u013A\x07$\x02\x02\u013A\u013B\x05\x9EP\x02" +
		"\u013B\u013C\x05\x14\v\x02\u013C\u013E\x03\x02\x02\x02\u013D\u0139\x03" +
		"\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F" +
		"\u0140\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02" +
		"\x02\x02\u0142\u012A\x03\x02\x02\x02\u0142\u0138\x03\x02\x02\x02\u0143" +
		"\x11\x03\x02\x02\x02\u0144\u0145\x05\x9CO\x02\u0145\x13\x03\x02\x02\x02" +
		"\u0146\u0147\x07\x04\x02\x02\u0147\u0148\x05\x9EP\x02\u0148\u014D\x05" +
		"\x16\f\x02\u0149\u014A\x07\x05\x02\x02\u014A\u014B\x05\x9EP\x02\u014B" +
		"\u014C\x05H%\x02\u014C\u014E\x03\x02\x02\x02\u014D\u0149\x03\x02\x02\x02" +
		"\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x07" +
		"\x06\x02\x02\u0150\u0151\x05\x9EP\x02\u0151\x15\x03\x02\x02\x02\u0152" +
		"\u0153\x05\x9CO\x02\u0153\u0154\x05\x9EP\x02\u0154\x17\x03\x02\x02\x02" +
		"\u0155\u0156\x07\x1A\x02\x02\u0156\u0158\x05\x9EP\x02\u0157\u0159\x05" +
		"\x1A\x0E\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u015B\x07\x07\x02\x02\u015B\u015D\x05\x9E" +
		"P\x02\u015C\u015E\x05B\"\x02\u015D\u015C\x03\x02\x02\x02\u015D\u015E\x03" +
		"\x02\x02\x02\u015E\u0166\x03\x02\x02\x02\u015F\u0160\x07\x03\x02\x02\u0160" +
		"\u0162\x05\x9EP\x02\u0161\u0163\x05B\"\x02\u0162\u0161\x03\x02\x02\x02" +
		"\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u015F\x03" +
		"\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166" +
		"\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168\u0166\x03\x02" +
		"\x02\x02\u0169\u016A\x07\b\x02\x02\u016A\u016B\x05\x9EP\x02\u016B\x19" +
		"\x03\x02\x02\x02\u016C\u016D\x07\x05\x02\x02\u016D\u016E\x05\x9CO\x02" +
		"\u016E\u016F\x05\x9EP\x02\u016F\x1B\x03\x02\x02\x02\u0170\u0177\x05\x1E" +
		"\x10\x02\u0171\u0172\x07*\x02\x02\u0172\u0173\x05\x9EP\x02\u0173\u0174" +
		"\x05\x1E\x10\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0171\x03\x02\x02\x02" +
		"\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03" +
		"\x02\x02\x02\u0178\x1D\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A" +
		"\u017B\x05\"\x12\x02\u017B\u0182\x05\x9EP\x02\u017C\u017D\x05 \x11\x02" +
		"\u017D\u017E\x05\"\x12\x02\u017E\u017F\x05\x9EP\x02\u017F\u0181\x03\x02" +
		"\x02\x02\u0180\u017C\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182" +
		"\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\x1F\x03\x02\x02" +
		"\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0186\x07\'\x02\x02\u0186\u018E" +
		"\x05\x9EP\x02\u0187\u0188\x07)\x02\x02\u0188\u018E\x05\x9EP\x02\u0189" +
		"\u018A\x07+\x02\x02\u018A\u018E\x05\x9EP\x02\u018B\u018C\x07\x13\x02\x02" +
		"\u018C\u018E\x05\x9EP\x02\u018D\u0185\x03\x02\x02\x02\u018D\u0187\x03" +
		"\x02\x02\x02\u018D\u0189\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E" +
		"!\x03\x02\x02\x02\u018F\u0192\x05$\x13\x02\u0190\u0192\x05*\x16\x02\u0191" +
		"\u018F\x03\x02\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192\u019A\x03\x02" +
		"\x02\x02\u0193\u0199\x07\x18\x02\x02\u0194\u0199\x05,\x17\x02\u0195\u0199" +
		"\x05.\x18\x02\u0196\u0199\x050\x19\x02\u0197\u0199\x056\x1C\x02\u0198" +
		"\u0193\x03\x02\x02\x02\u0198\u0194\x03\x02\x02\x02\u0198\u0195\x03\x02" +
		"\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199" +
		"\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02" +
		"\x02\x02\u019B\u01A7\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D" +
		"\u01A3\x07\x18\x02\x02\u019E\u01A3\x05,\x17\x02\u019F\u01A3\x05.\x18\x02" +
		"\u01A0\u01A3\x050\x19\x02\u01A1\u01A3\x056\x1C\x02\u01A2\u019D\x03\x02" +
		"\x02\x02\u01A2\u019E\x03\x02\x02\x02\u01A2\u019F\x03\x02\x02\x02\u01A2" +
		"\u01A0\x03\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
		"\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
		"\u01A7\x03\x02\x02\x02\u01A6\u0191\x03\x02\x02\x02\u01A6\u01A2\x03\x02" +
		"\x02\x02\u01A7#\x03\x02\x02\x02\u01A8\u01AA\x05&\x14\x02\u01A9\u01A8\x03" +
		"\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB" +
		"\u01AC\x05(\x15\x02\u01AC%\x03\x02\x02\x02\u01AD\u01B0\x05\x9CO\x02\u01AE" +
		"\u01B0\x07\t\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02" +
		"\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2" +
		"\x07\n\x02\x02\u01B2\'\x03\x02\x02\x02\u01B3\u01B4\x05\x9CO\x02\u01B4";
	private static readonly _serializedATNSegment1: string =
		")\x03\x02\x02\x02\u01B5\u01B7\x05&\x14\x02\u01B6\u01B5\x03\x02\x02\x02" +
		"\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x07" +
		"\t\x02\x02\u01B9+\x03\x02\x02\x02\u01BA\u01BB\x07\v\x02\x02\u01BB\u01BC" +
		"\x05\x9CO\x02\u01BC-\x03\x02\x02\x02\u01BD\u01BE\x07\f\x02\x02\u01BE\u01C0" +
		"\x05\x9EP\x02\u01BF\u01C1\x05&\x14\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0" +
		"\u01C1\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3\x05\x9C" +
		"O\x02\u01C3\u01CC\x05\x9EP\x02\u01C4\u01C5\t\x05\x02\x02\u01C5\u01C8\x05" +
		"\x9EP\x02\u01C6\u01C9\x05\x9CO\x02\u01C7\u01C9\x07.\x02\x02\u01C8\u01C6" +
		"\x03\x02\x02\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
		"\u01CA\u01CB\x05\x9EP\x02\u01CB\u01CD\x03\x02\x02\x02\u01CC\u01C4\x03" +
		"\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
		"\u01CF\x07\x0E\x02\x02\u01CF/\x03\x02\x02\x02\u01D0\u01D2\x07\x05\x02" +
		"\x02\u01D1\u01D3\x07\x05\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3" +
		"\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D7\x05\x9CO\x02" +
		"\u01D5\u01D7\x052\x1A\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D5\x03" +
		"\x02\x02\x02\u01D71\x03\x02\x02\x02\u01D8\u01D9\x07@\x02\x02\u01D9\u01DA" +
		"\x05\x9EP\x02\u01DA\u01DB\x054\x1B\x02\u01DB\u01DC\x07\x06\x02\x02\u01DC" +
		"3\x03\x02\x02\x02\u01DD\u01E5\x07\'\x02\x02\u01DE\u01E5\x07(\x02\x02\u01DF" +
		"\u01E5\x07%\x02\x02\u01E0\u01E5\x07&\x02\x02\u01E1\u01E5\x07-\x02\x02" +
		"\u01E2\u01E5\x07.\x02\x02\u01E3\u01E5\x05\x9CO\x02\u01E4\u01DD\x03\x02" +
		"\x02\x02\u01E4\u01DE\x03\x02\x02\x02\u01E4\u01DF\x03\x02\x02\x02\u01E4" +
		"\u01E0\x03\x02\x02\x02\u01E4\u01E1\x03\x02\x02\x02\u01E4\u01E2\x03\x02" +
		"\x02\x02\u01E4\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6" +
		"\u01E8\x05\x9EP\x02\u01E7\u01E4\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02" +
		"\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA5\x03" +
		"\x02\x02\x02\u01EB\u01EC\x07,\x02\x02\u01EC\u01ED\x05\x9EP\x02\u01ED\u01EE" +
		"\x058\x1D\x02\u01EE\u01EF\x05\x9EP\x02\u01EF\u01F0\x07\x06\x02\x02\u01F0" +
		"7\x03\x02\x02\x02\u01F1\u01F8\x05$\x13\x02\u01F2\u01F8\x05*\x16\x02\u01F3" +
		"\u01F8\x07\x18\x02\x02\u01F4\u01F8\x05,\x17\x02\u01F5\u01F8\x05.\x18\x02" +
		"\u01F6\u01F8\x050\x19\x02\u01F7\u01F1\x03\x02\x02\x02\u01F7\u01F2\x03" +
		"\x02\x02\x02\u01F7\u01F3\x03\x02\x02\x02\u01F7\u01F4\x03\x02\x02\x02\u01F7" +
		"\u01F5\x03\x02\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F89\x03\x02\x02" +
		"\x02\u01F9\u01FA\x07\x0F\x02\x02\u01FA\u0202\x05\x9EP\x02\u01FB\u01FC" +
		"\x07*\x02\x02\u01FC\u0202\x05\x9EP\x02\u01FD\u01FE\x07\x13\x02\x02\u01FE" +
		"\u0202\x05\x9EP\x02\u01FF\u0200\x07\r\x02\x02\u0200\u0202\x05\x9EP\x02" +
		"\u0201\u01F9\x03\x02\x02\x02\u0201\u01FB\x03\x02\x02\x02\u0201\u01FD\x03" +
		"\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0202;\x03\x02\x02\x02\u0203" +
		"\u0204\x05\x9CO\x02\u0204\u0205\x05\x9EP\x02\u0205\u020D\x03\x02\x02\x02" +
		"\u0206\u0207\x07=\x02\x02\u0207\u020D\x05\x9EP\x02\u0208\u0209\x07\t\x02" +
		"\x02\u0209\u020D\x05\x9CO\x02\u020A\u020B\x07\x10\x02\x02\u020B\u020D" +
		"\x05\x9CO\x02\u020C\u0203\x03\x02\x02\x02\u020C\u0206\x03\x02\x02\x02" +
		"\u020C\u0208\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020D=\x03\x02" +
		"\x02\x02\u020E\u020F\x05\x1C\x0F\x02\u020F\u0210\x07\x07\x02\x02\u0210" +
		"\u0212\x05\x9EP\x02\u0211\u0213\x05@!\x02\u0212\u0211\x03\x02\x02\x02" +
		"\u0212\u0213\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x07" +
		"\b\x02\x02\u0215\u0216\x05\x9EP\x02\u0216\u0226\x03\x02\x02\x02\u0217" +
		"\u0219\x05Z.\x02\u0218\u0217\x03\x02\x02\x02\u0219\u021C\x03\x02\x02\x02" +
		"\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021D\x03" +
		"\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u021E\x07\x07\x02\x02\u021E" +
		"\u0220\x05\x9EP\x02\u021F\u0221\x05@!\x02\u0220\u021F\x03\x02\x02\x02" +
		"\u0220\u0221\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x07" +
		"\b\x02\x02\u0223\u0224\x05\x9EP\x02\u0224\u0226\x03\x02\x02\x02\u0225" +
		"\u020E\x03\x02\x02\x02\u0225\u021A\x03\x02\x02\x02\u0226?\x03\x02\x02" +
		"\x02\u0227\u0228\x07\x03\x02\x02\u0228\u022A\x05\x9EP\x02\u0229\u0227" +
		"\x03\x02\x02\x02\u022A\u022D\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02" +
		"\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x03\x02\x02\x02\u022D\u022B\x03" +
		"\x02\x02\x02\u022E\u022F\x05B\"\x02\u022F\u0237\x05\x9EP\x02\u0230\u0231" +
		"\x07\x03\x02\x02\u0231\u0233\x05\x9EP\x02\u0232\u0234\x05B\"\x02\u0233" +
		"\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0236\x03\x02" +
		"\x02\x02\u0235\u0230\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237" +
		"\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238A\x03\x02\x02" +
		"\x02\u0239\u0237\x03\x02\x02\x02\u023A\u023B\x05<\x1F\x02\u023B\u023C" +
		"\x07\x05\x02\x02\u023C\u023D\x05\x9EP\x02\u023D\u023F\x05H%\x02\u023E" +
		"\u0240\x05D#\x02\u023F\u023E\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02" +
		"\u0240\u0247\x03\x02\x02\x02\u0241\u0242\x05<\x1F\x02\u0242\u0243\x07" +
		"\x05\x02\x02\u0243\u0244\x05\x9EP\x02\u0244\u0245\x05F$\x02\u0245\u0247" +
		"\x03\x02\x02\x02\u0246\u023A\x03\x02\x02\x02\u0246\u0241\x03\x02\x02\x02" +
		"\u0247C\x03\x02\x02\x02\u0248\u0249\x07\x1E\x02\x02\u0249\u024A\x05\x9E" +
		"P\x02\u024AE\x03\x02\x02\x02\u024B\u0251\x05Z.\x02\u024C\u0251\x05b2\x02" +
		"\u024D\u024E\x05^0\x02\u024E\u024F\x05\x9EP\x02\u024F\u0251\x03\x02\x02" +
		"\x02\u0250\u024B\x03\x02\x02\x02\u0250\u024C\x03\x02\x02\x02\u0250\u024D" +
		"\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02" +
		"\u0252\u0253\x03\x02\x02\x02\u0253G\x03\x02\x02\x02\u0254\u025B\x05J&" +
		"\x02\u0255\u0257\x05:\x1E\x02\u0256\u0255\x03\x02\x02\x02\u0256\u0257" +
		"\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025A\x05J&\x02\u0259" +
		"\u0256\x03\x02\x02\x02\u025A\u025D\x03\x02\x02\x02\u025B\u0259\x03\x02" +
		"\x02\x02\u025B\u025C\x03\x02\x02\x02\u025CI\x03\x02\x02\x02\u025D\u025B" +
		"\x03\x02\x02\x02\u025E\u025F\x05R*\x02\u025F\u0260\x05\x9EP\x02\u0260" +
		"\u0279\x03\x02\x02\x02\u0261\u0262\x05T+\x02\u0262\u0263\x05\x9EP\x02" +
		"\u0263\u0279\x03\x02\x02\x02\u0264\u0265\x05V,\x02\u0265\u0266\x05\x9E" +
		"P\x02\u0266\u0279\x03\x02\x02\x02\u0267\u0268\x07.\x02\x02\u0268\u0279" +
		"\x05\x9EP\x02\u0269\u026A\x07!\x02\x02\u026A\u0279\x05\x9EP\x02\u026B" +
		"\u026C\x05\x9CO\x02\u026C\u026D\x05\x9EP\x02\u026D\u0279\x03\x02\x02\x02" +
		"\u026E\u0279\x05x=\x02\u026F\u0270\x07 \x02\x02\u0270\u0279\x05\x9EP\x02" +
		"\u0271\u0279\x05P)\x02\u0272\u0279\x05z>\x02\u0273\u0279\x05L\'\x02\u0274" +
		"\u0275\x05X-\x02\u0275\u0276\x05\x9EP\x02\u0276\u0279\x03\x02\x02\x02" +
		"\u0277\u0279\x05N(\x02\u0278\u025E\x03\x02\x02\x02\u0278\u0261\x03\x02" +
		"\x02\x02\u0278\u0264\x03\x02\x02\x02\u0278\u0267\x03\x02\x02\x02\u0278" +
		"\u0269\x03\x02\x02\x02\u0278\u026B\x03\x02\x02\x02\u0278\u026E\x03\x02" +
		"\x02\x02\u0278\u026F\x03\x02\x02\x02\u0278\u0271\x03\x02\x02\x02\u0278" +
		"\u0272\x03\x02\x02\x02\u0278\u0273\x03\x02\x02\x02\u0278\u0274\x03\x02" +
		"\x02\x02\u0278\u0277\x03\x02\x02\x02\u0279K\x03\x02\x02\x02\u027A\u027B" +
		"\x07@\x02\x02\u027B\u027C\x05\x9EP\x02\u027C\u027D\x05H%\x02\u027D\u027E" +
		"\x07\x06\x02\x02\u027E\u027F\x05\x9EP\x02\u027FM\x03\x02\x02\x02\u0280" +
		"\u0281\x07<\x02\x02\u0281\u0282\x05\x9EP\x02\u0282\u0283\x05H%\x02\u0283" +
		"\u0284\x07\x06\x02\x02\u0284\u0285\x05\x9EP\x02\u0285O\x03\x02\x02\x02" +
		"\u0286\u0287\x07\x18\x02\x02\u0287\u0288\x05\x9EP\x02\u0288Q\x03\x02\x02" +
		"\x02\u0289\u028B\t\x06\x02\x02\u028A\u0289\x03\x02\x02\x02\u028A\u028B" +
		"\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028D\x07-\x02\x02" +
		"\u028DS\x03\x02\x02\x02\u028E\u0290\t\x06\x02\x02\u028F\u028E\x03\x02" +
		"\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291" +
		"\u0292\x07\x1F\x02\x02\u0292U\x03\x02\x02\x02\u0293\u0295\t\x06\x02\x02" +
		"\u0294\u0293\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0296\x03" +
		"\x02\x02\x02\u0296\u0297\x07%\x02\x02\u0297W\x03\x02\x02\x02\u0298\u029A" +
		"\t\x06\x02\x02\u0299\u0298\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02" +
		"\u029A\u029B\x03\x02\x02\x02\u029B\u029C\x07&\x02\x02\u029CY\x03\x02\x02" +
		"\x02\u029D\u029E\x05\x9CO\x02\u029E\u029F\x05\x9EP\x02\u029F\u02DF\x03" +
		"\x02\x02\x02\u02A0\u02A1\x05R*\x02\u02A1\u02A2\x05\x9EP\x02\u02A2\u02DF" +
		"\x03\x02\x02\x02\u02A3\u02A4\x05T+\x02\u02A4\u02A5\x05\x9EP\x02\u02A5" +
		"\u02DF\x03\x02\x02\x02\u02A6\u02A7\x05V,\x02\u02A7\u02A8\x05\x9EP\x02" +
		"\u02A8\u02DF\x03\x02\x02\x02\u02A9\u02AA\x05X-\x02\u02AA\u02AB\x05\x9E" +
		"P\x02\u02AB\u02DF\x03\x02\x02\x02\u02AC\u02AD\x07.\x02\x02\u02AD\u02DF" +
		"\x05\x9EP\x02\u02AE\u02AF\x07 \x02\x02\u02AF\u02DF\x05\x9EP\x02\u02B0" +
		"\u02B1\x07\x18\x02\x02\u02B1\u02DF\x05\x9EP\x02\u02B2\u02B3\x07!\x02\x02" +
		"\u02B3\u02DF\x05\x9EP\x02\u02B4\u02B5\x07\x16\x02\x02\u02B5\u02DF\x05" +
		"\x9EP\x02\u02B6\u02B7\x07\x17\x02\x02\u02B7\u02DF\x05\x9EP\x02\u02B8\u02B9" +
		"\x07\x05\x02\x02\u02B9\u02DF\x05\x9EP\x02\u02BA\u02BB\x07@\x02\x02\u02BB" +
		"\u02C0\x05\x9EP\x02\u02BC\u02BF\x05Z.\x02\u02BD\u02BF\x05`1\x02\u02BE" +
		"\u02BC\x03\x02\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\u02C2\x03\x02" +
		"\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1" +
		"\u02C3\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C4\x07\x06" +
		"\x02\x02\u02C4\u02C5\x05\x9EP\x02\u02C5\u02DF\x03\x02\x02\x02\u02C6\u02C7" +
		"\x07\x04\x02\x02\u02C7\u02CC\x05\x9EP\x02\u02C8\u02CB\x05Z.\x02\u02C9" +
		"\u02CB\x05`1\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02C9\x03\x02\x02\x02" +
		"\u02CB\u02CE\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03" +
		"\x02\x02\x02\u02CD\u02CF\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF" +
		"\u02D0\x07\x06\x02\x02\u02D0\u02D1\x05\x9EP\x02\u02D1\u02DF\x03\x02\x02" +
		"\x02\u02D2\u02D3\x07\f\x02\x02\u02D3\u02D8\x05\x9EP\x02\u02D4\u02D7\x05" +
		"Z.\x02\u02D5\u02D7\x05`1\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D5\x03" +
		"\x02\x02\x02\u02D7\u02DA\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D8" +
		"\u02D9\x03\x02\x02\x02\u02D9\u02DB\x03\x02\x02\x02\u02DA\u02D8\x03\x02" +
		"\x02\x02\u02DB\u02DC\x07\x0E\x02\x02\u02DC\u02DD\x05\x9EP\x02\u02DD\u02DF" +
		"\x03\x02\x02\x02\u02DE\u029D\x03\x02\x02\x02\u02DE\u02A0\x03\x02\x02\x02" +
		"\u02DE\u02A3\x03\x02\x02\x02\u02DE\u02A6\x03\x02\x02\x02\u02DE\u02A9\x03" +
		"\x02\x02\x02\u02DE\u02AC\x03\x02\x02\x02\u02DE\u02AE\x03\x02\x02\x02\u02DE" +
		"\u02B0\x03\x02\x02\x02\u02DE\u02B2\x03\x02\x02\x02\u02DE\u02B4\x03\x02" +
		"\x02\x02\u02DE\u02B6\x03\x02\x02\x02\u02DE\u02B8\x03\x02\x02\x02\u02DE" +
		"\u02BA\x03\x02\x02\x02\u02DE\u02C6\x03\x02\x02\x02\u02DE\u02D2\x03\x02" +
		"\x02\x02\u02DF[\x03\x02\x02\x02\u02E0\u02E1\x05^0\x02\u02E1\u02E5\x05" +
		"\x9EP\x02\u02E2\u02E4\x05Z.\x02\u02E3\u02E2\x03\x02\x02\x02\u02E4\u02E7" +
		"\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02" +
		"\u02E6\u02EB\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E8\u02EC\x05" +
		"b2\x02\u02E9\u02EA\x07\x03\x02\x02\u02EA\u02EC\x05\x9EP\x02\u02EB\u02E8" +
		"\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC]\x03\x02\x02\x02\u02ED" +
		"\u02EE\x07\x11\x02\x02\u02EE\u02EF\x05\x9CO\x02\u02EF_\x03\x02\x02\x02" +
		"\u02F0\u02FB\x05b2\x02\u02F1\u02F2\x05^0\x02\u02F2\u02F3\x05\x9EP\x02" +
		"\u02F3\u02FB\x03\x02\x02\x02\u02F4\u02F5\x07\x03\x02\x02\u02F5\u02FB\x05" +
		"\x9EP\x02\u02F6\u02F7\x07\x14\x02\x02\u02F7\u02FB\x05\x9EP\x02\u02F8\u02F9" +
		"\x07\x15\x02\x02\u02F9\u02FB\x05\x9EP\x02\u02FA\u02F0\x03\x02\x02\x02" +
		"\u02FA\u02F1\x03\x02\x02\x02\u02FA\u02F4\x03\x02\x02\x02\u02FA\u02F6\x03" +
		"\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FBa\x03\x02\x02\x02\u02FC" +
		"\u02FD\x07\x07\x02\x02\u02FD\u0309\x05\x9EP\x02\u02FE\u0308\x05@!\x02" +
		"\u02FF\u0308\x05d3\x02\u0300\u0308\x05Z.\x02\u0301\u0308\x05b2\x02\u0302" +
		"\u0303\x05^0\x02\u0303\u0304\x05\x9EP\x02\u0304\u0308\x03\x02\x02\x02" +
		"\u0305\u0306\x07\x03\x02\x02\u0306\u0308\x05\x9EP\x02\u0307\u02FE\x03" +
		"\x02\x02\x02\u0307\u02FF\x03\x02\x02\x02\u0307\u0300\x03\x02\x02\x02\u0307" +
		"\u0301\x03\x02\x02\x02\u0307\u0302\x03\x02\x02\x02\u0307\u0305\x03\x02" +
		"\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309" +
		"\u030A\x03\x02\x02\x02\u030A\u030C\x03\x02\x02\x02\u030B\u0309\x03\x02" +
		"\x02\x02\u030C\u030D\x07\b\x02\x02\u030D\u030E\x05\x9EP\x02\u030Ec\x03" +
		"\x02\x02\x02\u030F\u031A\x05> \x02\u0310\u031A\x05\f\x07\x02\u0311\u031A" +
		"\x05\x18\r\x02\u0312\u031A\x05\x82B\x02\u0313\u031A\x05\x86D\x02\u0314" +
		"\u031A\x05h5\x02\u0315\u031A\x05\x8CG\x02\u0316\u031A\x05\x8EH\x02\u0317" +
		"\u031A\x05\x90I\x02\u0318\u031A\x05\\/\x02\u0319\u030F\x03\x02\x02\x02" +
		"\u0319\u0310\x03\x02\x02\x02\u0319\u0311\x03\x02\x02\x02\u0319\u0312\x03" +
		"\x02\x02\x02\u0319\u0313\x03\x02\x02\x02\u0319\u0314\x03\x02\x02\x02\u0319" +
		"\u0315\x03\x02\x02\x02\u0319\u0316\x03\x02\x02\x02\u0319\u0317\x03\x02" +
		"\x02\x02\u0319\u0318\x03\x02\x02\x02\u031Ae\x03\x02\x02\x02\u031B\u031C" +
		"\x07\x07\x02\x02\u031C\u0320\x05\x9EP\x02\u031D\u031F\x05d3\x02\u031E" +
		"\u031D\x03\x02\x02\x02\u031F\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02" +
		"\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0323\x03\x02\x02\x02\u0322" +
		"\u0320\x03\x02\x02\x02\u0323\u0324\x07\b\x02\x02\u0324\u0325\x05\x9EP" +
		"\x02\u0325g\x03\x02\x02\x02\u0326\u0327\x073\x02\x02\u0327\u0328\x05\x9E" +
		"P\x02\u0328\u0329\x05j6\x02\u0329\u032A\x05\x9EP\x02\u032A\u032B\x05f" +
		"4\x02\u032Bi\x03\x02\x02\x02\u032C\u0331\x05n8\x02\u032D\u0331\x05p9\x02" +
		"\u032E\u0331\x05r:\x02\u032F\u0331\x05l7\x02\u0330\u032C\x03\x02\x02\x02" +
		"\u0330\u032D\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u032F\x03" +
		"\x02\x02\x02\u0331k\x03\x02\x02\x02\u0332\u0333\x07\x04\x02\x02\u0333" +
		"\u0334\x05\x9EP\x02\u0334\u0335\x05j6\x02\u0335\u0336\x05\x9EP\x02\u0336" +
		"\u0337\x07\x06\x02\x02\u0337\u033B\x03\x02\x02\x02\u0338\u033B\x05t;\x02" +
		"\u0339\u033B\x05v<\x02\u033A\u0332\x03\x02\x02\x02\u033A\u0338\x03\x02" +
		"\x02\x02\u033A\u0339\x03\x02\x02\x02\u033Bm\x03\x02\x02\x02\u033C\u033D" +
		"\x07#\x02\x02\u033D\u033E\x05\x9EP\x02\u033E\u033F\x07\x13\x02\x02\u033F" +
		"\u0340\x05\x9EP\x02\u0340\u0341\x05l7\x02\u0341o\x03\x02\x02\x02\u0342" +
		"\u034C\x05l7\x02\u0343\u0344\x05\x9EP\x02\u0344\u0345\x07\x13\x02\x02" +
		"\u0345\u0346\x05\x9EP\x02\u0346\u0347\x07$\x02\x02\u0347\u0348\x05\x9E" +
		"P\x02\u0348\u0349\x07\x13\x02\x02\u0349\u034A\x05\x9EP\x02\u034A\u034B" +
		"\x05l7\x02\u034B\u034D\x03\x02\x02\x02\u034C\u0343\x03\x02\x02\x02\u034D" +
		"\u034E\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034E\u034F\x03\x02" +
		"\x02\x02\u034Fq\x03\x02\x02\x02\u0350\u035A\x05l7\x02\u0351\u0352\x05" +
		"\x9EP\x02\u0352\u0353\x07\x13\x02\x02\u0353\u0354\x05\x9EP\x02\u0354\u0355" +
		"\x074\x02\x02\u0355\u0356\x05\x9EP\x02\u0356\u0357\x07\x13\x02\x02\u0357" +
		"\u0358\x05\x9EP\x02\u0358\u0359\x05l7\x02\u0359\u035B\x03\x02\x02\x02" +
		"\u035A\u0351\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035A\x03" +
		"\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035Ds\x03\x02\x02\x02\u035E" +
		"\u035F\x07\x04\x02\x02\u035F\u0360\x05\x9EP\x02\u0360\u0361\x05B\"\x02" +
		"\u0361\u0362\x07\x06\x02\x02\u0362u\x03\x02\x02\x02\u0363\u0368\t\x07" +
		"\x02\x02\u0364\u0367\x05Z.\x02\u0365\u0367\x05`1\x02\u0366\u0364\x03\x02" +
		"\x02\x02\u0366\u0365\x03\x02\x02\x02\u0367\u036A\x03\x02\x02\x02\u0368" +
		"\u0366\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036B\x03\x02" +
		"\x02\x02\u036A\u0368\x03\x02\x02\x02\u036B\u036C\x07\x06\x02\x02\u036C" +
		"w\x03\x02\x02\x02\u036D\u036E\x07>\x02\x02\u036E\u036F\x05\x9EP\x02\u036F" +
		"\u0370\x07=\x02\x02\u0370\u0371\x05\x9EP\x02\u0371\u0372\x07\x06\x02\x02" +
		"\u0372\u0373\x05\x9EP\x02\u0373y\x03\x02\x02\x02\u0374\u0375\x078\x02" +
		"\x02\u0375\u0376\x05\x9EP\x02\u0376\u0377\x05|?\x02\u0377\u0378\x07\x06" +
		"\x02\x02\u0378\u0379\x05\x9EP\x02\u0379{\x03\x02\x02\x02\u037A\u0385\x05" +
		"~@\x02\u037B\u037C\x07\x13\x02\x02\u037C\u037D\x05\x9EP\x02\u037D\u037E" +
		"\t\x06\x02\x02\u037E\u037F\x05\x9EP\x02\u037F\u0380\x07\x13\x02\x02\u0380" +
		"\u0381\x05\x9EP\x02\u0381\u0382\x05~@\x02\u0382\u0384\x03\x02\x02\x02" +
		"\u0383\u037B\x03\x02\x02\x02\u0384\u0387\x03\x02\x02\x02\u0385\u0383\x03" +
		"\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386}\x03\x02\x02\x02\u0387" +
		"\u0385\x03\x02\x02\x02\u0388\u0394\x05\x80A\x02\u0389\u038A\x07\t\x02" +
		"\x02\u038A\u038B\x05\x9EP\x02\u038B\u038C\x05\x80A\x02\u038C\u0393\x03" +
		"\x02\x02\x02\u038D\u038E\x07\x0F\x02\x02\u038E\u038F\x05\x9EP\x02\u038F" +
		"\u0390\x05R*\x02\u0390\u0391\x05\x9EP\x02\u0391\u0393\x03\x02\x02\x02" +
		"\u0392\u0389\x03\x02\x02\x02\u0392\u038D\x03\x02\x02\x02\u0393\u0396\x03" +
		"\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395" +
		"\x7F\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02\u0397\u0398\x05R*\x02" +
		"\u0398\u0399\x05\x9EP\x02\u0399\u03AA\x03\x02\x02\x02\u039A\u039B\x05" +
		"V,\x02\u039B\u039C\x05\x9EP\x02\u039C\u03AA\x03\x02\x02\x02\u039D\u039E" +
		"\x05X-\x02\u039E\u039F\x05\x9EP\x02\u039F\u03AA\x03\x02\x02\x02\u03A0" +
		"\u03A1\x05T+\x02\u03A1\u03A2\x05\x9EP\x02\u03A2\u03AA\x03\x02\x02\x02" +
		"\u03A3\u03A4\x07\x04\x02\x02\u03A4\u03A5\x05\x9EP\x02\u03A5\u03A6\x05" +
		"|?\x02\u03A6\u03A7\x07\x06\x02\x02\u03A7\u03A8\x05\x9EP\x02\u03A8\u03AA" +
		"\x03\x02\x02\x02\u03A9\u0397\x03\x02\x02\x02\u03A9\u039A\x03\x02\x02\x02" +
		"\u03A9\u039D\x03\x02\x02\x02\u03A9\u03A0\x03\x02\x02\x02\u03A9\u03A3\x03" +
		"\x02\x02\x02\u03AA\x81\x03\x02\x02\x02\u03AB\u03AC\x072\x02\x02\u03AC" +
		"\u03AD\x05\x9EP\x02\u03AD\u03AE\x07\x07\x02\x02\u03AE\u03B0\x05\x9EP\x02" +
		"\u03AF\u03B1\x05\x84C\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1\x03" +
		"\x02\x02\x02\u03B1\u03B9\x03\x02\x02\x02\u03B2\u03B3\x07\x03\x02\x02\u03B3" +
		"\u03B5\x05\x9EP\x02\u03B4\u03B6\x05\x84C\x02\u03B5\u03B4\x03\x02\x02\x02" +
		"\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B8\x03\x02\x02\x02\u03B7\u03B2\x03" +
		"\x02\x02\x02\u03B8\u03BB\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9" +
		"\u03BA\x03\x02\x02\x02\u03BA\u03BC\x03\x02\x02\x02\u03BB\u03B9\x03\x02" +
		"\x02\x02\u03BC\u03BD\x07\b\x02\x02\u03BD\u03BE\x05\x9EP\x02\u03BE\x83" +
		"\x03\x02\x02\x02\u03BF\u03C0\x05<\x1F\x02\u03C0\u03C1\x07\x05\x02\x02" +
		"\u03C1\u03C2\x05\x9EP\x02\u03C2\u03C3\x05H%\x02\u03C3\u03CA\x03\x02\x02" +
		"\x02\u03C4\u03C5\x05<\x1F\x02\u03C5\u03C6\x07\x05\x02\x02\u03C6\u03C7" +
		"\x05\x9EP\x02\u03C7\u03C8\x05F$\x02\u03C8\u03CA\x03\x02\x02\x02\u03C9" +
		"\u03BF\x03\x02\x02\x02\u03C9\u03C4\x03\x02\x02\x02\u03CA\x85\x03\x02\x02" +
		"\x02\u03CB\u03CC\x075\x02\x02\u03CC\u03CD\x05\x9EP\x02\u03CD\u03CE\x07" +
		"\x13\x02\x02\u03CE\u03CF\x05\x9EP\x02\u03CF\u03D0\x05\x9CO\x02\u03D0\u03D1" +
		"\x05\x9EP\x02\u03D1\u03D2\x07\x07\x02\x02\u03D2\u03D3\x05\x9EP\x02\u03D3" +
		"\u03D4\x05\x88E\x02\u03D4\u03D5\x07\b\x02\x02\u03D5\u03D6\x05\x9EP\x02" +
		"\u03D6\x87\x03\x02\x02\x02\u03D7\u03D8\x05\x8AF\x02\u03D8\u03D9\x07\x07" +
		"\x02\x02\u03D9\u03DB\x05\x9EP\x02\u03DA\u03DC\x05@!\x02\u03DB\u03DA\x03" +
		"\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD" +
		"\u03DE\x07\b\x02\x02\u03DE\u03DF\x05\x9EP\x02\u03DF\u03E1\x03\x02\x02" +
		"\x02\u03E0\u03D7\x03\x02\x02\x02\u03E1\u03E4\x03\x02\x02\x02\u03E2\u03E0" +
		"\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\x89\x03\x02\x02\x02" +
		"\u03E4\u03E2\x03\x02\x02\x02\u03E5\u03E6\t\b\x02\x02\u03E6\u03EE\x05\x9E" +
		"P\x02\u03E7\u03E8\x07*\x02\x02\u03E8\u03E9\x05\x9EP\x02\u03E9\u03EA\t" +
		"\b\x02\x02\u03EA\u03EB\x05\x9EP\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC" +
		"\u03E7\x03\x02\x02\x02\u03ED\u03F0\x03\x02\x02\x02\u03EE\u03EC\x03\x02" +
		"\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\x8B\x03\x02\x02\x02\u03F0\u03EE" +
		"\x03\x02\x02\x02\u03F1\u03F2\x079\x02\x02\u03F2\u03F3\x05\x9EP\x02\u03F3" +
		"\u03F4\x07\x07\x02\x02\u03F4\u03F6\x05\x9EP\x02\u03F5\u03F7\x05@!\x02" +
		"\u03F6\u03F5\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F8\x03" +
		"\x02\x02\x02\u03F8\u03F9\x07\b\x02\x02\u03F9\u03FA\x05\x9EP\x02\u03FA" +
		"\x8D\x03\x02\x02\x02\u03FB\u03FC\x07:\x02\x02\u03FC\u03FD\x05\x9EP\x02" +
		"\u03FD\u03FE\x05\x9CO\x02\u03FE\u03FF\x05\x9EP\x02\u03FF\u0400\x07\x07" +
		"\x02\x02\u0400\u0402\x05\x9EP\x02\u0401\u0403\x05@!\x02\u0402\u0401\x03" +
		"\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404" +
		"\u0405\x07\b\x02\x02\u0405\u0406\x05\x9EP\x02\u0406\x8F\x03\x02\x02\x02" +
		"\u0407\u0408\x07;\x02\x02\u0408\u0409\x05\x9EP\x02\u0409\u040A\x05\x92" +
		"J\x02\u040A\u040B\x05\x9EP\x02\u040B\u040C\x07\x07\x02\x02\u040C\u0410" +
		"\x05\x9EP\x02\u040D\u040F\x05\x96L\x02\u040E\u040D\x03\x02\x02\x02\u040F" +
		"\u0412\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0410\u0411\x03\x02" +
		"\x02\x02\u0411\u0413\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0413" +
		"\u0414\x07\b\x02\x02\u0414\u0415\x05\x9EP\x02\u0415\x91\x03\x02\x02\x02" +
		"\u0416\u041E\x05\x94K\x02\u0417\u0418\x05\x9EP\x02\u0418\u0419\x07*\x02" +
		"\x02\u0419\u041A\x05\x9EP\x02\u041A\u041B\x05\x94K\x02\u041B\u041D\x03" +
		"\x02\x02\x02\u041C\u0417\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E" +
		"\u041C\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\x93\x03\x02\x02" +
		"\x02\u0420\u041E\x03\x02\x02\x02\u0421\u042C\x07.\x02\x02\u0422\u0428" +
		"\x05\x9CO\x02\u0423\u0424\x05\x9EP\x02\u0424\u0425\x05\x9CO\x02\u0425" +
		"\u0427\x03\x02\x02\x02\u0426\u0423\x03\x02\x02\x02\u0427\u042A\x03\x02" +
		"\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429" +
		"\u042C\x03\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042B\u0421\x03\x02" +
		"\x02\x02\u042B\u0422\x03\x02\x02\x02\u042C\x95\x03\x02\x02\x02\u042D\u042E" +
		"\x05\x98M\x02\u042E\u042F\x05\x9EP\x02\u042F\u0430\x07\x07\x02\x02\u0430" +
		"\u0432\x05\x9EP\x02\u0431\u0433\x05\x9AN\x02\u0432\u0431\x03\x02\x02\x02" +
		"\u0432\u0433\x03\x02\x02\x02\u0433\u043C\x03\x02\x02\x02\u0434\u0435\x05" +
		"\x9EP\x02\u0435\u0436\x07\x03\x02\x02\u0436\u0438\x05\x9EP\x02\u0437\u0439" +
		"\x05\x9AN\x02\u0438\u0437\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02" +
		"\u0439\u043B\x03\x02\x02\x02\u043A\u0434\x03\x02\x02\x02\u043B\u043E\x03" +
		"\x02\x02\x02\u043C\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D" +
		"\u043F\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043F\u0440\x07\b\x02" +
		"\x02\u0440\u0441\x05\x9EP\x02\u0441\x97\x03\x02\x02\x02\u0442\u0443\x05" +
		"^0\x02\u0443\x99\x03\x02\x02\x02\u0444\u0445\x05\x9CO\x02\u0445\u0446" +
		"\x05\x9EP\x02\u0446\u0447\x07\x05\x02\x02\u0447\u0448\x05\x9EP\x02\u0448" +
		"\u044E\x05R*\x02\u0449\u044A\x05\x9EP\x02\u044A\u044B\x05R*\x02\u044B" +
		"\u044D\x03\x02\x02\x02\u044C\u0449\x03\x02\x02\x02\u044D\u0450\x03\x02" +
		"\x02\x02\u044E\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F" +
		"\x9B\x03\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0452\t\t\x02\x02" +
		"\u0452\x9D\x03\x02\x02\x02\u0453\u0455\t\n\x02\x02\u0454\u0453\x03\x02" +
		"\x02\x02\u0455\u0458\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456" +
		"\u0457\x03\x02\x02\x02\u0457\x9F\x03\x02\x02\x02\u0458\u0456\x03\x02\x02" +
		"\x02l\xA5\xAA\xB1\xB6\xBD\xC2\xC9\xCE\xDD\xF9\u0100\u010C\u0111\u0122" +
		"\u0125\u012A\u0135\u013F\u0142\u014D\u0158\u015D\u0162\u0166\u0177\u0182" +
		"\u018D\u0191\u0198\u019A\u01A2\u01A4\u01A6\u01A9\u01AF\u01B6\u01C0\u01C8" +
		"\u01CC\u01D2\u01D6\u01E4\u01E9\u01F7\u0201\u020C\u0212\u021A\u0220\u0225" +
		"\u022B\u0233\u0237\u023F\u0246\u0250\u0252\u0256\u025B\u0278\u028A\u028F" +
		"\u0294\u0299\u02BE\u02C0\u02CA\u02CC\u02D6\u02D8\u02DE\u02E5\u02EB\u02FA" +
		"\u0307\u0309\u0319\u0320\u0330\u033A\u034E\u035C\u0366\u0368\u0385\u0392" +
		"\u0394\u03A9\u03B0\u03B5\u03B9\u03C9\u03DB\u03E2\u03EE\u03F6\u0402\u0410" +
		"\u041E\u0428\u042B\u0432\u0438\u043C\u044E\u0456";
	public static readonly _serializedATN: string = Utils.join(
		[
			css3Parser._serializedATNSegment0,
			css3Parser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!css3Parser.__ATN) {
			css3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(css3Parser._serializedATN));
		}

		return css3Parser.__ATN;
	}

}

export class StylesheetContext extends ParserRuleContext {
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public charset(): CharsetContext[];
	public charset(i: number): CharsetContext;
	public charset(i?: number): CharsetContext | CharsetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CharsetContext);
		} else {
			return this.getRuleContext(i, CharsetContext);
		}
	}
	public imports(): ImportsContext[];
	public imports(i: number): ImportsContext;
	public imports(i?: number): ImportsContext | ImportsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportsContext);
		} else {
			return this.getRuleContext(i, ImportsContext);
		}
	}
	public namespace_(): Namespace_Context[];
	public namespace_(i: number): Namespace_Context;
	public namespace_(i?: number): Namespace_Context | Namespace_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_Context);
		} else {
			return this.getRuleContext(i, Namespace_Context);
		}
	}
	public nestedStatement(): NestedStatementContext[];
	public nestedStatement(i: number): NestedStatementContext;
	public nestedStatement(i?: number): NestedStatementContext | NestedStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NestedStatementContext);
		} else {
			return this.getRuleContext(i, NestedStatementContext);
		}
	}
	public Comment(): TerminalNode[];
	public Comment(i: number): TerminalNode;
	public Comment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Comment);
		} else {
			return this.getToken(css3Parser.Comment, i);
		}
	}
	public Space(): TerminalNode[];
	public Space(i: number): TerminalNode;
	public Space(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Space);
		} else {
			return this.getToken(css3Parser.Space, i);
		}
	}
	public Cdo(): TerminalNode[];
	public Cdo(i: number): TerminalNode;
	public Cdo(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Cdo);
		} else {
			return this.getToken(css3Parser.Cdo, i);
		}
	}
	public Cdc(): TerminalNode[];
	public Cdc(i: number): TerminalNode;
	public Cdc(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Cdc);
		} else {
			return this.getToken(css3Parser.Cdc, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_stylesheet; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterStylesheet) {
			listener.enterStylesheet(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitStylesheet) {
			listener.exitStylesheet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitStylesheet) {
			return visitor.visitStylesheet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharsetContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_charset; }
	public copyFrom(ctx: CharsetContext): void {
		super.copyFrom(ctx);
	}
}
export class GoodCharsetContext extends CharsetContext {
	public Charset(): TerminalNode { return this.getToken(css3Parser.Charset, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public String_(): TerminalNode { return this.getToken(css3Parser.String_, 0); }
	constructor(ctx: CharsetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterGoodCharset) {
			listener.enterGoodCharset(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitGoodCharset) {
			listener.exitGoodCharset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitGoodCharset) {
			return visitor.visitGoodCharset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BadCharsetContext extends CharsetContext {
	public Charset(): TerminalNode { return this.getToken(css3Parser.Charset, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public String_(): TerminalNode { return this.getToken(css3Parser.String_, 0); }
	constructor(ctx: CharsetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterBadCharset) {
			listener.enterBadCharset(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitBadCharset) {
			listener.exitBadCharset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitBadCharset) {
			return visitor.visitBadCharset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_imports; }
	public copyFrom(ctx: ImportsContext): void {
		super.copyFrom(ctx);
	}
}
export class GoodImportContext extends ImportsContext {
	public Import(): TerminalNode { return this.getToken(css3Parser.Import, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public mediaQueryList(): MediaQueryListContext | undefined {
		return this.tryGetRuleContext(0, MediaQueryListContext);
	}
	public String_(): TerminalNode | undefined { return this.tryGetToken(css3Parser.String_, 0); }
	public Uri(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Uri, 0); }
	constructor(ctx: ImportsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterGoodImport) {
			listener.enterGoodImport(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitGoodImport) {
			listener.exitGoodImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitGoodImport) {
			return visitor.visitGoodImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BadImportContext extends ImportsContext {
	public Import(): TerminalNode { return this.getToken(css3Parser.Import, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public mediaQueryList(): MediaQueryListContext | undefined {
		return this.tryGetRuleContext(0, MediaQueryListContext);
	}
	public String_(): TerminalNode | undefined { return this.tryGetToken(css3Parser.String_, 0); }
	public Uri(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Uri, 0); }
	constructor(ctx: ImportsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterBadImport) {
			listener.enterBadImport(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitBadImport) {
			listener.exitBadImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitBadImport) {
			return visitor.visitBadImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Namespace_Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_namespace_; }
	public copyFrom(ctx: Namespace_Context): void {
		super.copyFrom(ctx);
	}
}
export class GoodNamespaceContext extends Namespace_Context {
	public Namespace(): TerminalNode { return this.getToken(css3Parser.Namespace, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public String_(): TerminalNode | undefined { return this.tryGetToken(css3Parser.String_, 0); }
	public Uri(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Uri, 0); }
	public namespacePrefix(): NamespacePrefixContext | undefined {
		return this.tryGetRuleContext(0, NamespacePrefixContext);
	}
	constructor(ctx: Namespace_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterGoodNamespace) {
			listener.enterGoodNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitGoodNamespace) {
			listener.exitGoodNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitGoodNamespace) {
			return visitor.visitGoodNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BadNamespaceContext extends Namespace_Context {
	public Namespace(): TerminalNode { return this.getToken(css3Parser.Namespace, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public String_(): TerminalNode | undefined { return this.tryGetToken(css3Parser.String_, 0); }
	public Uri(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Uri, 0); }
	public namespacePrefix(): NamespacePrefixContext | undefined {
		return this.tryGetRuleContext(0, NamespacePrefixContext);
	}
	constructor(ctx: Namespace_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterBadNamespace) {
			listener.enterBadNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitBadNamespace) {
			listener.exitBadNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitBadNamespace) {
			return visitor.visitBadNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespacePrefixContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_namespacePrefix; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterNamespacePrefix) {
			listener.enterNamespacePrefix(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitNamespacePrefix) {
			listener.exitNamespacePrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitNamespacePrefix) {
			return visitor.visitNamespacePrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaContext extends ParserRuleContext {
	public Media(): TerminalNode { return this.getToken(css3Parser.Media, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public mediaQueryList(): MediaQueryListContext {
		return this.getRuleContext(0, MediaQueryListContext);
	}
	public groupRuleBody(): GroupRuleBodyContext {
		return this.getRuleContext(0, GroupRuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_media; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterMedia) {
			listener.enterMedia(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitMedia) {
			listener.exitMedia(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitMedia) {
			return visitor.visitMedia(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaQueryListContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public mediaQuery(): MediaQueryContext[];
	public mediaQuery(i: number): MediaQueryContext;
	public mediaQuery(i?: number): MediaQueryContext | MediaQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MediaQueryContext);
		} else {
			return this.getRuleContext(i, MediaQueryContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Comma);
		} else {
			return this.getToken(css3Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_mediaQueryList; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterMediaQueryList) {
			listener.enterMediaQueryList(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitMediaQueryList) {
			listener.exitMediaQueryList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitMediaQueryList) {
			return visitor.visitMediaQueryList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaQueryContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public mediaType(): MediaTypeContext | undefined {
		return this.tryGetRuleContext(0, MediaTypeContext);
	}
	public And(): TerminalNode[];
	public And(i: number): TerminalNode;
	public And(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.And);
		} else {
			return this.getToken(css3Parser.And, i);
		}
	}
	public mediaExpression(): MediaExpressionContext[];
	public mediaExpression(i: number): MediaExpressionContext;
	public mediaExpression(i?: number): MediaExpressionContext | MediaExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MediaExpressionContext);
		} else {
			return this.getRuleContext(i, MediaExpressionContext);
		}
	}
	public MediaOnly(): TerminalNode | undefined { return this.tryGetToken(css3Parser.MediaOnly, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_mediaQuery; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterMediaQuery) {
			listener.enterMediaQuery(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitMediaQuery) {
			listener.exitMediaQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitMediaQuery) {
			return visitor.visitMediaQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaTypeContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_mediaType; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterMediaType) {
			listener.enterMediaType(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitMediaType) {
			listener.exitMediaType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitMediaType) {
			return visitor.visitMediaType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaExpressionContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public mediaFeature(): MediaFeatureContext {
		return this.getRuleContext(0, MediaFeatureContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_mediaExpression; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterMediaExpression) {
			listener.enterMediaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitMediaExpression) {
			listener.exitMediaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitMediaExpression) {
			return visitor.visitMediaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaFeatureContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_mediaFeature; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterMediaFeature) {
			listener.enterMediaFeature(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitMediaFeature) {
			listener.exitMediaFeature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitMediaFeature) {
			return visitor.visitMediaFeature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PageContext extends ParserRuleContext {
	public Page(): TerminalNode { return this.getToken(css3Parser.Page, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public pseudoPage(): PseudoPageContext | undefined {
		return this.tryGetRuleContext(0, PseudoPageContext);
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_page; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterPage) {
			listener.enterPage(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitPage) {
			listener.exitPage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitPage) {
			return visitor.visitPage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PseudoPageContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_pseudoPage; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterPseudoPage) {
			listener.enterPseudoPage(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitPseudoPage) {
			listener.exitPseudoPage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitPseudoPage) {
			return visitor.visitPseudoPage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorGroupContext extends ParserRuleContext {
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Comma);
		} else {
			return this.getToken(css3Parser.Comma, i);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_selectorGroup; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSelectorGroup) {
			listener.enterSelectorGroup(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSelectorGroup) {
			listener.exitSelectorGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSelectorGroup) {
			return visitor.visitSelectorGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public simpleSelectorSequence(): SimpleSelectorSequenceContext[];
	public simpleSelectorSequence(i: number): SimpleSelectorSequenceContext;
	public simpleSelectorSequence(i?: number): SimpleSelectorSequenceContext | SimpleSelectorSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleSelectorSequenceContext);
		} else {
			return this.getRuleContext(i, SimpleSelectorSequenceContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
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
	public get ruleIndex(): number { return css3Parser.RULE_selector; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CombinatorContext extends ParserRuleContext {
	public Plus(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Plus, 0); }
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Greater, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Tilde, 0); }
	public Space(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Space, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_combinator; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterCombinator) {
			listener.enterCombinator(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitCombinator) {
			listener.exitCombinator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitCombinator) {
			return visitor.visitCombinator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleSelectorSequenceContext extends ParserRuleContext {
	public typeSelector(): TypeSelectorContext | undefined {
		return this.tryGetRuleContext(0, TypeSelectorContext);
	}
	public universal(): UniversalContext | undefined {
		return this.tryGetRuleContext(0, UniversalContext);
	}
	public Hash(): TerminalNode[];
	public Hash(i: number): TerminalNode;
	public Hash(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Hash);
		} else {
			return this.getToken(css3Parser.Hash, i);
		}
	}
	public className(): ClassNameContext[];
	public className(i: number): ClassNameContext;
	public className(i?: number): ClassNameContext | ClassNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassNameContext);
		} else {
			return this.getRuleContext(i, ClassNameContext);
		}
	}
	public attrib(): AttribContext[];
	public attrib(i: number): AttribContext;
	public attrib(i?: number): AttribContext | AttribContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttribContext);
		} else {
			return this.getRuleContext(i, AttribContext);
		}
	}
	public pseudo(): PseudoContext[];
	public pseudo(i: number): PseudoContext;
	public pseudo(i?: number): PseudoContext | PseudoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PseudoContext);
		} else {
			return this.getRuleContext(i, PseudoContext);
		}
	}
	public negation(): NegationContext[];
	public negation(i: number): NegationContext;
	public negation(i?: number): NegationContext | NegationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NegationContext);
		} else {
			return this.getRuleContext(i, NegationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_simpleSelectorSequence; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSimpleSelectorSequence) {
			listener.enterSimpleSelectorSequence(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSimpleSelectorSequence) {
			listener.exitSimpleSelectorSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSimpleSelectorSequence) {
			return visitor.visitSimpleSelectorSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSelectorContext extends ParserRuleContext {
	public elementName(): ElementNameContext {
		return this.getRuleContext(0, ElementNameContext);
	}
	public typeNamespacePrefix(): TypeNamespacePrefixContext | undefined {
		return this.tryGetRuleContext(0, TypeNamespacePrefixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_typeSelector; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterTypeSelector) {
			listener.enterTypeSelector(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitTypeSelector) {
			listener.exitTypeSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitTypeSelector) {
			return visitor.visitTypeSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNamespacePrefixContext extends ParserRuleContext {
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_typeNamespacePrefix; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterTypeNamespacePrefix) {
			listener.enterTypeNamespacePrefix(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitTypeNamespacePrefix) {
			listener.exitTypeNamespacePrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitTypeNamespacePrefix) {
			return visitor.visitTypeNamespacePrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementNameContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_elementName; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterElementName) {
			listener.enterElementName(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitElementName) {
			listener.exitElementName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitElementName) {
			return visitor.visitElementName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UniversalContext extends ParserRuleContext {
	public typeNamespacePrefix(): TypeNamespacePrefixContext | undefined {
		return this.tryGetRuleContext(0, TypeNamespacePrefixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_universal; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterUniversal) {
			listener.enterUniversal(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitUniversal) {
			listener.exitUniversal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitUniversal) {
			return visitor.visitUniversal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassNameContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_className; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterClassName) {
			listener.enterClassName(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitClassName) {
			listener.exitClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitClassName) {
			return visitor.visitClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public typeNamespacePrefix(): TypeNamespacePrefixContext | undefined {
		return this.tryGetRuleContext(0, TypeNamespacePrefixContext);
	}
	public PrefixMatch(): TerminalNode | undefined { return this.tryGetToken(css3Parser.PrefixMatch, 0); }
	public SuffixMatch(): TerminalNode | undefined { return this.tryGetToken(css3Parser.SuffixMatch, 0); }
	public SubstringMatch(): TerminalNode | undefined { return this.tryGetToken(css3Parser.SubstringMatch, 0); }
	public Includes(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Includes, 0); }
	public DashMatch(): TerminalNode | undefined { return this.tryGetToken(css3Parser.DashMatch, 0); }
	public String_(): TerminalNode | undefined { return this.tryGetToken(css3Parser.String_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_attrib; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterAttrib) {
			listener.enterAttrib(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitAttrib) {
			listener.exitAttrib(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitAttrib) {
			return visitor.visitAttrib(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PseudoContext extends ParserRuleContext {
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public functionalPseudo(): FunctionalPseudoContext | undefined {
		return this.tryGetRuleContext(0, FunctionalPseudoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_pseudo; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterPseudo) {
			listener.enterPseudo(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitPseudo) {
			listener.exitPseudo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitPseudo) {
			return visitor.visitPseudo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionalPseudoContext extends ParserRuleContext {
	public Function_(): TerminalNode { return this.getToken(css3Parser.Function_, 0); }
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_functionalPseudo; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterFunctionalPseudo) {
			listener.enterFunctionalPseudo(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitFunctionalPseudo) {
			listener.exitFunctionalPseudo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitFunctionalPseudo) {
			return visitor.visitFunctionalPseudo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public Plus(): TerminalNode[];
	public Plus(i: number): TerminalNode;
	public Plus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Plus);
		} else {
			return this.getToken(css3Parser.Plus, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Minus);
		} else {
			return this.getToken(css3Parser.Minus, i);
		}
	}
	public Dimension(): TerminalNode[];
	public Dimension(i: number): TerminalNode;
	public Dimension(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Dimension);
		} else {
			return this.getToken(css3Parser.Dimension, i);
		}
	}
	public UnknownDimension(): TerminalNode[];
	public UnknownDimension(i: number): TerminalNode;
	public UnknownDimension(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.UnknownDimension);
		} else {
			return this.getToken(css3Parser.UnknownDimension, i);
		}
	}
	public Number(): TerminalNode[];
	public Number(i: number): TerminalNode;
	public Number(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Number);
		} else {
			return this.getToken(css3Parser.Number, i);
		}
	}
	public String_(): TerminalNode[];
	public String_(i: number): TerminalNode;
	public String_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.String_);
		} else {
			return this.getToken(css3Parser.String_, i);
		}
	}
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_expression; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegationContext extends ParserRuleContext {
	public PseudoNot(): TerminalNode { return this.getToken(css3Parser.PseudoNot, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public negationArg(): NegationArgContext {
		return this.getRuleContext(0, NegationArgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_negation; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterNegation) {
			listener.enterNegation(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitNegation) {
			listener.exitNegation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitNegation) {
			return visitor.visitNegation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegationArgContext extends ParserRuleContext {
	public typeSelector(): TypeSelectorContext | undefined {
		return this.tryGetRuleContext(0, TypeSelectorContext);
	}
	public universal(): UniversalContext | undefined {
		return this.tryGetRuleContext(0, UniversalContext);
	}
	public Hash(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Hash, 0); }
	public className(): ClassNameContext | undefined {
		return this.tryGetRuleContext(0, ClassNameContext);
	}
	public attrib(): AttribContext | undefined {
		return this.tryGetRuleContext(0, AttribContext);
	}
	public pseudo(): PseudoContext | undefined {
		return this.tryGetRuleContext(0, PseudoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_negationArg; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterNegationArg) {
			listener.enterNegationArg(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitNegationArg) {
			listener.exitNegationArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitNegationArg) {
			return visitor.visitNegationArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operator_Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_operator_; }
	public copyFrom(ctx: Operator_Context): void {
		super.copyFrom(ctx);
	}
}
export class GoodOperatorContext extends Operator_Context {
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Comma, 0); }
	public Space(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Space, 0); }
	constructor(ctx: Operator_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterGoodOperator) {
			listener.enterGoodOperator(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitGoodOperator) {
			listener.exitGoodOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitGoodOperator) {
			return visitor.visitGoodOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BadOperatorContext extends Operator_Context {
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	constructor(ctx: Operator_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterBadOperator) {
			listener.enterBadOperator(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitBadOperator) {
			listener.exitBadOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitBadOperator) {
			return visitor.visitBadOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Property_Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_property_; }
	public copyFrom(ctx: Property_Context): void {
		super.copyFrom(ctx);
	}
}
export class GoodPropertyContext extends Property_Context {
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public Variable(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Variable, 0); }
	constructor(ctx: Property_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterGoodProperty) {
			listener.enterGoodProperty(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitGoodProperty) {
			listener.exitGoodProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitGoodProperty) {
			return visitor.visitGoodProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BadPropertyContext extends Property_Context {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: Property_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterBadProperty) {
			listener.enterBadProperty(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitBadProperty) {
			listener.exitBadProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitBadProperty) {
			return visitor.visitBadProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesetContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_ruleset; }
	public copyFrom(ctx: RulesetContext): void {
		super.copyFrom(ctx);
	}
}
export class KnownRulesetContext extends RulesetContext {
	public selectorGroup(): SelectorGroupContext {
		return this.getRuleContext(0, SelectorGroupContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(ctx: RulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterKnownRuleset) {
			listener.enterKnownRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitKnownRuleset) {
			listener.exitKnownRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitKnownRuleset) {
			return visitor.visitKnownRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnknownRulesetContext extends RulesetContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public any_(): Any_Context[];
	public any_(i: number): Any_Context;
	public any_(i?: number): Any_Context | Any_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_Context);
		} else {
			return this.getRuleContext(i, Any_Context);
		}
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(ctx: RulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterUnknownRuleset) {
			listener.enterUnknownRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitUnknownRuleset) {
			listener.exitUnknownRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitUnknownRuleset) {
			return visitor.visitUnknownRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationListContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_declarationList; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterDeclarationList) {
			listener.enterDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitDeclarationList) {
			listener.exitDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitDeclarationList) {
			return visitor.visitDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class KnownDeclarationContext extends DeclarationContext {
	public property_(): Property_Context {
		return this.getRuleContext(0, Property_Context);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public prio(): PrioContext | undefined {
		return this.tryGetRuleContext(0, PrioContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterKnownDeclaration) {
			listener.enterKnownDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitKnownDeclaration) {
			listener.exitKnownDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitKnownDeclaration) {
			return visitor.visitKnownDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnknownDeclarationContext extends DeclarationContext {
	public property_(): Property_Context {
		return this.getRuleContext(0, Property_Context);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterUnknownDeclaration) {
			listener.enterUnknownDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitUnknownDeclaration) {
			listener.exitUnknownDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitUnknownDeclaration) {
			return visitor.visitUnknownDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrioContext extends ParserRuleContext {
	public Important(): TerminalNode { return this.getToken(css3Parser.Important, 0); }
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_prio; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterPrio) {
			listener.enterPrio(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitPrio) {
			listener.exitPrio(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitPrio) {
			return visitor.visitPrio(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public any_(): Any_Context[];
	public any_(i: number): Any_Context;
	public any_(i?: number): Any_Context | Any_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_Context);
		} else {
			return this.getRuleContext(i, Any_Context);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public atKeyword(): AtKeywordContext[];
	public atKeyword(i: number): AtKeywordContext;
	public atKeyword(i?: number): AtKeywordContext | AtKeywordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtKeywordContext);
		} else {
			return this.getRuleContext(i, AtKeywordContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_value; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public operator_(): Operator_Context[];
	public operator_(i: number): Operator_Context;
	public operator_(i?: number): Operator_Context | Operator_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Operator_Context);
		} else {
			return this.getRuleContext(i, Operator_Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_expr; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_term; }
	public copyFrom(ctx: TermContext): void {
		super.copyFrom(ctx);
	}
}
export class KnownTermContext extends TermContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public ws(): WsContext | undefined {
		return this.tryGetRuleContext(0, WsContext);
	}
	public percentage(): PercentageContext | undefined {
		return this.tryGetRuleContext(0, PercentageContext);
	}
	public dimension(): DimensionContext | undefined {
		return this.tryGetRuleContext(0, DimensionContext);
	}
	public String_(): TerminalNode | undefined { return this.tryGetToken(css3Parser.String_, 0); }
	public UnicodeRange(): TerminalNode | undefined { return this.tryGetToken(css3Parser.UnicodeRange, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public var_(): Var_Context | undefined {
		return this.tryGetRuleContext(0, Var_Context);
	}
	public Uri(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Uri, 0); }
	public hexcolor(): HexcolorContext | undefined {
		return this.tryGetRuleContext(0, HexcolorContext);
	}
	public calc(): CalcContext | undefined {
		return this.tryGetRuleContext(0, CalcContext);
	}
	public function_(): Function_Context | undefined {
		return this.tryGetRuleContext(0, Function_Context);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterKnownTerm) {
			listener.enterKnownTerm(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitKnownTerm) {
			listener.exitKnownTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitKnownTerm) {
			return visitor.visitKnownTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnknownTermContext extends TermContext {
	public unknownDimension(): UnknownDimensionContext {
		return this.getRuleContext(0, UnknownDimensionContext);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterUnknownTerm) {
			listener.enterUnknownTerm(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitUnknownTerm) {
			listener.exitUnknownTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitUnknownTerm) {
			return visitor.visitUnknownTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BadTermContext extends TermContext {
	public dxImageTransform(): DxImageTransformContext {
		return this.getRuleContext(0, DxImageTransformContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterBadTerm) {
			listener.enterBadTerm(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitBadTerm) {
			listener.exitBadTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitBadTerm) {
			return visitor.visitBadTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_Context extends ParserRuleContext {
	public Function_(): TerminalNode { return this.getToken(css3Parser.Function_, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_function_; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterFunction_) {
			listener.enterFunction_(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitFunction_) {
			listener.exitFunction_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitFunction_) {
			return visitor.visitFunction_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DxImageTransformContext extends ParserRuleContext {
	public DxImageTransform(): TerminalNode { return this.getToken(css3Parser.DxImageTransform, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_dxImageTransform; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterDxImageTransform) {
			listener.enterDxImageTransform(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitDxImageTransform) {
			listener.exitDxImageTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitDxImageTransform) {
			return visitor.visitDxImageTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexcolorContext extends ParserRuleContext {
	public Hash(): TerminalNode { return this.getToken(css3Parser.Hash, 0); }
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_hexcolor; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterHexcolor) {
			listener.enterHexcolor(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitHexcolor) {
			listener.exitHexcolor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitHexcolor) {
			return visitor.visitHexcolor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public Number(): TerminalNode { return this.getToken(css3Parser.Number, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_number; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PercentageContext extends ParserRuleContext {
	public Percentage(): TerminalNode { return this.getToken(css3Parser.Percentage, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_percentage; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterPercentage) {
			listener.enterPercentage(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitPercentage) {
			listener.exitPercentage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitPercentage) {
			return visitor.visitPercentage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensionContext extends ParserRuleContext {
	public Dimension(): TerminalNode { return this.getToken(css3Parser.Dimension, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_dimension; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterDimension) {
			listener.enterDimension(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitDimension) {
			listener.exitDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitDimension) {
			return visitor.visitDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnknownDimensionContext extends ParserRuleContext {
	public UnknownDimension(): TerminalNode { return this.getToken(css3Parser.UnknownDimension, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_unknownDimension; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterUnknownDimension) {
			listener.enterUnknownDimension(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitUnknownDimension) {
			listener.exitUnknownDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitUnknownDimension) {
			return visitor.visitUnknownDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Any_Context extends ParserRuleContext {
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public percentage(): PercentageContext | undefined {
		return this.tryGetRuleContext(0, PercentageContext);
	}
	public dimension(): DimensionContext | undefined {
		return this.tryGetRuleContext(0, DimensionContext);
	}
	public unknownDimension(): UnknownDimensionContext | undefined {
		return this.tryGetRuleContext(0, UnknownDimensionContext);
	}
	public String_(): TerminalNode | undefined { return this.tryGetToken(css3Parser.String_, 0); }
	public Uri(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Uri, 0); }
	public Hash(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Hash, 0); }
	public UnicodeRange(): TerminalNode | undefined { return this.tryGetToken(css3Parser.UnicodeRange, 0); }
	public Includes(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Includes, 0); }
	public DashMatch(): TerminalNode | undefined { return this.tryGetToken(css3Parser.DashMatch, 0); }
	public Function_(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Function_, 0); }
	public any_(): Any_Context[];
	public any_(i: number): Any_Context;
	public any_(i?: number): Any_Context | Any_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_Context);
		} else {
			return this.getRuleContext(i, Any_Context);
		}
	}
	public unused(): UnusedContext[];
	public unused(i: number): UnusedContext;
	public unused(i?: number): UnusedContext | UnusedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnusedContext);
		} else {
			return this.getRuleContext(i, UnusedContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_any_; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterAny_) {
			listener.enterAny_(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitAny_) {
			listener.exitAny_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitAny_) {
			return visitor.visitAny_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtRuleContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_atRule; }
	public copyFrom(ctx: AtRuleContext): void {
		super.copyFrom(ctx);
	}
}
export class UnknownAtRuleContext extends AtRuleContext {
	public atKeyword(): AtKeywordContext {
		return this.getRuleContext(0, AtKeywordContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public any_(): Any_Context[];
	public any_(i: number): Any_Context;
	public any_(i?: number): Any_Context | Any_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_Context);
		} else {
			return this.getRuleContext(i, Any_Context);
		}
	}
	constructor(ctx: AtRuleContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterUnknownAtRule) {
			listener.enterUnknownAtRule(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitUnknownAtRule) {
			listener.exitUnknownAtRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitUnknownAtRule) {
			return visitor.visitUnknownAtRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtKeywordContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_atKeyword; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterAtKeyword) {
			listener.enterAtKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitAtKeyword) {
			listener.exitAtKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitAtKeyword) {
			return visitor.visitAtKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnusedContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public atKeyword(): AtKeywordContext | undefined {
		return this.tryGetRuleContext(0, AtKeywordContext);
	}
	public ws(): WsContext | undefined {
		return this.tryGetRuleContext(0, WsContext);
	}
	public Cdo(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Cdo, 0); }
	public Cdc(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Cdc, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_unused; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterUnused) {
			listener.enterUnused(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitUnused) {
			listener.exitUnused(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitUnused) {
			return visitor.visitUnused(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public declarationList(): DeclarationListContext[];
	public declarationList(i: number): DeclarationListContext;
	public declarationList(i?: number): DeclarationListContext | DeclarationListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationListContext);
		} else {
			return this.getRuleContext(i, DeclarationListContext);
		}
	}
	public nestedStatement(): NestedStatementContext[];
	public nestedStatement(i: number): NestedStatementContext;
	public nestedStatement(i?: number): NestedStatementContext | NestedStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NestedStatementContext);
		} else {
			return this.getRuleContext(i, NestedStatementContext);
		}
	}
	public any_(): Any_Context[];
	public any_(i: number): Any_Context;
	public any_(i?: number): Any_Context | Any_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_Context);
		} else {
			return this.getRuleContext(i, Any_Context);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public atKeyword(): AtKeywordContext[];
	public atKeyword(i: number): AtKeywordContext;
	public atKeyword(i?: number): AtKeywordContext | AtKeywordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtKeywordContext);
		} else {
			return this.getRuleContext(i, AtKeywordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_block; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedStatementContext extends ParserRuleContext {
	public ruleset(): RulesetContext | undefined {
		return this.tryGetRuleContext(0, RulesetContext);
	}
	public media(): MediaContext | undefined {
		return this.tryGetRuleContext(0, MediaContext);
	}
	public page(): PageContext | undefined {
		return this.tryGetRuleContext(0, PageContext);
	}
	public fontFaceRule(): FontFaceRuleContext | undefined {
		return this.tryGetRuleContext(0, FontFaceRuleContext);
	}
	public keyframesRule(): KeyframesRuleContext | undefined {
		return this.tryGetRuleContext(0, KeyframesRuleContext);
	}
	public supportsRule(): SupportsRuleContext | undefined {
		return this.tryGetRuleContext(0, SupportsRuleContext);
	}
	public viewport(): ViewportContext | undefined {
		return this.tryGetRuleContext(0, ViewportContext);
	}
	public counterStyle(): CounterStyleContext | undefined {
		return this.tryGetRuleContext(0, CounterStyleContext);
	}
	public fontFeatureValuesRule(): FontFeatureValuesRuleContext | undefined {
		return this.tryGetRuleContext(0, FontFeatureValuesRuleContext);
	}
	public atRule(): AtRuleContext | undefined {
		return this.tryGetRuleContext(0, AtRuleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_nestedStatement; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterNestedStatement) {
			listener.enterNestedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitNestedStatement) {
			listener.exitNestedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitNestedStatement) {
			return visitor.visitNestedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupRuleBodyContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public nestedStatement(): NestedStatementContext[];
	public nestedStatement(i: number): NestedStatementContext;
	public nestedStatement(i?: number): NestedStatementContext | NestedStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NestedStatementContext);
		} else {
			return this.getRuleContext(i, NestedStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_groupRuleBody; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterGroupRuleBody) {
			listener.enterGroupRuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitGroupRuleBody) {
			listener.exitGroupRuleBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitGroupRuleBody) {
			return visitor.visitGroupRuleBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SupportsRuleContext extends ParserRuleContext {
	public Supports(): TerminalNode { return this.getToken(css3Parser.Supports, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public supportsCondition(): SupportsConditionContext {
		return this.getRuleContext(0, SupportsConditionContext);
	}
	public groupRuleBody(): GroupRuleBodyContext {
		return this.getRuleContext(0, GroupRuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_supportsRule; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSupportsRule) {
			listener.enterSupportsRule(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSupportsRule) {
			listener.exitSupportsRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSupportsRule) {
			return visitor.visitSupportsRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SupportsConditionContext extends ParserRuleContext {
	public supportsNegation(): SupportsNegationContext | undefined {
		return this.tryGetRuleContext(0, SupportsNegationContext);
	}
	public supportsConjunction(): SupportsConjunctionContext | undefined {
		return this.tryGetRuleContext(0, SupportsConjunctionContext);
	}
	public supportsDisjunction(): SupportsDisjunctionContext | undefined {
		return this.tryGetRuleContext(0, SupportsDisjunctionContext);
	}
	public supportsConditionInParens(): SupportsConditionInParensContext | undefined {
		return this.tryGetRuleContext(0, SupportsConditionInParensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_supportsCondition; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSupportsCondition) {
			listener.enterSupportsCondition(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSupportsCondition) {
			listener.exitSupportsCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSupportsCondition) {
			return visitor.visitSupportsCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SupportsConditionInParensContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public supportsCondition(): SupportsConditionContext | undefined {
		return this.tryGetRuleContext(0, SupportsConditionContext);
	}
	public supportsDeclarationCondition(): SupportsDeclarationConditionContext | undefined {
		return this.tryGetRuleContext(0, SupportsDeclarationConditionContext);
	}
	public generalEnclosed(): GeneralEnclosedContext | undefined {
		return this.tryGetRuleContext(0, GeneralEnclosedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_supportsConditionInParens; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSupportsConditionInParens) {
			listener.enterSupportsConditionInParens(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSupportsConditionInParens) {
			listener.exitSupportsConditionInParens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSupportsConditionInParens) {
			return visitor.visitSupportsConditionInParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SupportsNegationContext extends ParserRuleContext {
	public Not(): TerminalNode { return this.getToken(css3Parser.Not, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public Space(): TerminalNode { return this.getToken(css3Parser.Space, 0); }
	public supportsConditionInParens(): SupportsConditionInParensContext {
		return this.getRuleContext(0, SupportsConditionInParensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_supportsNegation; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSupportsNegation) {
			listener.enterSupportsNegation(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSupportsNegation) {
			listener.exitSupportsNegation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSupportsNegation) {
			return visitor.visitSupportsNegation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SupportsConjunctionContext extends ParserRuleContext {
	public supportsConditionInParens(): SupportsConditionInParensContext[];
	public supportsConditionInParens(i: number): SupportsConditionInParensContext;
	public supportsConditionInParens(i?: number): SupportsConditionInParensContext | SupportsConditionInParensContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SupportsConditionInParensContext);
		} else {
			return this.getRuleContext(i, SupportsConditionInParensContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public Space(): TerminalNode[];
	public Space(i: number): TerminalNode;
	public Space(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Space);
		} else {
			return this.getToken(css3Parser.Space, i);
		}
	}
	public And(): TerminalNode[];
	public And(i: number): TerminalNode;
	public And(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.And);
		} else {
			return this.getToken(css3Parser.And, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_supportsConjunction; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSupportsConjunction) {
			listener.enterSupportsConjunction(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSupportsConjunction) {
			listener.exitSupportsConjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSupportsConjunction) {
			return visitor.visitSupportsConjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SupportsDisjunctionContext extends ParserRuleContext {
	public supportsConditionInParens(): SupportsConditionInParensContext[];
	public supportsConditionInParens(i: number): SupportsConditionInParensContext;
	public supportsConditionInParens(i?: number): SupportsConditionInParensContext | SupportsConditionInParensContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SupportsConditionInParensContext);
		} else {
			return this.getRuleContext(i, SupportsConditionInParensContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public Space(): TerminalNode[];
	public Space(i: number): TerminalNode;
	public Space(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Space);
		} else {
			return this.getToken(css3Parser.Space, i);
		}
	}
	public Or(): TerminalNode[];
	public Or(i: number): TerminalNode;
	public Or(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Or);
		} else {
			return this.getToken(css3Parser.Or, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_supportsDisjunction; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSupportsDisjunction) {
			listener.enterSupportsDisjunction(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSupportsDisjunction) {
			listener.exitSupportsDisjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSupportsDisjunction) {
			return visitor.visitSupportsDisjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SupportsDeclarationConditionContext extends ParserRuleContext {
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_supportsDeclarationCondition; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterSupportsDeclarationCondition) {
			listener.enterSupportsDeclarationCondition(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitSupportsDeclarationCondition) {
			listener.exitSupportsDeclarationCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitSupportsDeclarationCondition) {
			return visitor.visitSupportsDeclarationCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GeneralEnclosedContext extends ParserRuleContext {
	public Function_(): TerminalNode { return this.getToken(css3Parser.Function_, 0); }
	public any_(): Any_Context[];
	public any_(i: number): Any_Context;
	public any_(i?: number): Any_Context | Any_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_Context);
		} else {
			return this.getRuleContext(i, Any_Context);
		}
	}
	public unused(): UnusedContext[];
	public unused(i: number): UnusedContext;
	public unused(i?: number): UnusedContext | UnusedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnusedContext);
		} else {
			return this.getRuleContext(i, UnusedContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_generalEnclosed; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterGeneralEnclosed) {
			listener.enterGeneralEnclosed(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitGeneralEnclosed) {
			listener.exitGeneralEnclosed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitGeneralEnclosed) {
			return visitor.visitGeneralEnclosed(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_Context extends ParserRuleContext {
	public Var(): TerminalNode { return this.getToken(css3Parser.Var, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public Variable(): TerminalNode { return this.getToken(css3Parser.Variable, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_var_; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterVar_) {
			listener.enterVar_(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitVar_) {
			listener.exitVar_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitVar_) {
			return visitor.visitVar_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcContext extends ParserRuleContext {
	public Calc(): TerminalNode { return this.getToken(css3Parser.Calc, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public calcSum(): CalcSumContext {
		return this.getRuleContext(0, CalcSumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_calc; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterCalc) {
			listener.enterCalc(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitCalc) {
			listener.exitCalc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitCalc) {
			return visitor.visitCalc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcSumContext extends ParserRuleContext {
	public calcProduct(): CalcProductContext[];
	public calcProduct(i: number): CalcProductContext;
	public calcProduct(i?: number): CalcProductContext | CalcProductContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CalcProductContext);
		} else {
			return this.getRuleContext(i, CalcProductContext);
		}
	}
	public Space(): TerminalNode[];
	public Space(i: number): TerminalNode;
	public Space(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Space);
		} else {
			return this.getToken(css3Parser.Space, i);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public Plus(): TerminalNode[];
	public Plus(i: number): TerminalNode;
	public Plus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Plus);
		} else {
			return this.getToken(css3Parser.Plus, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Minus);
		} else {
			return this.getToken(css3Parser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_calcSum; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterCalcSum) {
			listener.enterCalcSum(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitCalcSum) {
			listener.exitCalcSum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitCalcSum) {
			return visitor.visitCalcSum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcProductContext extends ParserRuleContext {
	public calcValue(): CalcValueContext[];
	public calcValue(i: number): CalcValueContext;
	public calcValue(i?: number): CalcValueContext | CalcValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CalcValueContext);
		} else {
			return this.getRuleContext(i, CalcValueContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_calcProduct; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterCalcProduct) {
			listener.enterCalcProduct(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitCalcProduct) {
			listener.exitCalcProduct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitCalcProduct) {
			return visitor.visitCalcProduct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcValueContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public dimension(): DimensionContext | undefined {
		return this.tryGetRuleContext(0, DimensionContext);
	}
	public unknownDimension(): UnknownDimensionContext | undefined {
		return this.tryGetRuleContext(0, UnknownDimensionContext);
	}
	public percentage(): PercentageContext | undefined {
		return this.tryGetRuleContext(0, PercentageContext);
	}
	public calcSum(): CalcSumContext | undefined {
		return this.tryGetRuleContext(0, CalcSumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_calcValue; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterCalcValue) {
			listener.enterCalcValue(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitCalcValue) {
			listener.exitCalcValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitCalcValue) {
			return visitor.visitCalcValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FontFaceRuleContext extends ParserRuleContext {
	public FontFace(): TerminalNode { return this.getToken(css3Parser.FontFace, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public fontFaceDeclaration(): FontFaceDeclarationContext[];
	public fontFaceDeclaration(i: number): FontFaceDeclarationContext;
	public fontFaceDeclaration(i?: number): FontFaceDeclarationContext | FontFaceDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FontFaceDeclarationContext);
		} else {
			return this.getRuleContext(i, FontFaceDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_fontFaceRule; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterFontFaceRule) {
			listener.enterFontFaceRule(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitFontFaceRule) {
			listener.exitFontFaceRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitFontFaceRule) {
			return visitor.visitFontFaceRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FontFaceDeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_fontFaceDeclaration; }
	public copyFrom(ctx: FontFaceDeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class KnownFontFaceDeclarationContext extends FontFaceDeclarationContext {
	public property_(): Property_Context {
		return this.getRuleContext(0, Property_Context);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: FontFaceDeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterKnownFontFaceDeclaration) {
			listener.enterKnownFontFaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitKnownFontFaceDeclaration) {
			listener.exitKnownFontFaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitKnownFontFaceDeclaration) {
			return visitor.visitKnownFontFaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnknownFontFaceDeclarationContext extends FontFaceDeclarationContext {
	public property_(): Property_Context {
		return this.getRuleContext(0, Property_Context);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: FontFaceDeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterUnknownFontFaceDeclaration) {
			listener.enterUnknownFontFaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitUnknownFontFaceDeclaration) {
			listener.exitUnknownFontFaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitUnknownFontFaceDeclaration) {
			return visitor.visitUnknownFontFaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyframesRuleContext extends ParserRuleContext {
	public Keyframes(): TerminalNode { return this.getToken(css3Parser.Keyframes, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public Space(): TerminalNode { return this.getToken(css3Parser.Space, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public keyframesBlocks(): KeyframesBlocksContext {
		return this.getRuleContext(0, KeyframesBlocksContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_keyframesRule; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterKeyframesRule) {
			listener.enterKeyframesRule(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitKeyframesRule) {
			listener.exitKeyframesRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitKeyframesRule) {
			return visitor.visitKeyframesRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyframesBlocksContext extends ParserRuleContext {
	public keyframeSelector(): KeyframeSelectorContext[];
	public keyframeSelector(i: number): KeyframeSelectorContext;
	public keyframeSelector(i?: number): KeyframeSelectorContext | KeyframeSelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyframeSelectorContext);
		} else {
			return this.getRuleContext(i, KeyframeSelectorContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public declarationList(): DeclarationListContext[];
	public declarationList(i: number): DeclarationListContext;
	public declarationList(i?: number): DeclarationListContext | DeclarationListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationListContext);
		} else {
			return this.getRuleContext(i, DeclarationListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_keyframesBlocks; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterKeyframesBlocks) {
			listener.enterKeyframesBlocks(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitKeyframesBlocks) {
			listener.exitKeyframesBlocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitKeyframesBlocks) {
			return visitor.visitKeyframesBlocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyframeSelectorContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public From(): TerminalNode[];
	public From(i: number): TerminalNode;
	public From(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.From);
		} else {
			return this.getToken(css3Parser.From, i);
		}
	}
	public To(): TerminalNode[];
	public To(i: number): TerminalNode;
	public To(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.To);
		} else {
			return this.getToken(css3Parser.To, i);
		}
	}
	public Percentage(): TerminalNode[];
	public Percentage(i: number): TerminalNode;
	public Percentage(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Percentage);
		} else {
			return this.getToken(css3Parser.Percentage, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Comma);
		} else {
			return this.getToken(css3Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_keyframeSelector; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterKeyframeSelector) {
			listener.enterKeyframeSelector(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitKeyframeSelector) {
			listener.exitKeyframeSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitKeyframeSelector) {
			return visitor.visitKeyframeSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViewportContext extends ParserRuleContext {
	public Viewport(): TerminalNode { return this.getToken(css3Parser.Viewport, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_viewport; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterViewport) {
			listener.enterViewport(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitViewport) {
			listener.exitViewport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitViewport) {
			return visitor.visitViewport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CounterStyleContext extends ParserRuleContext {
	public CounterStyle(): TerminalNode { return this.getToken(css3Parser.CounterStyle, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_counterStyle; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterCounterStyle) {
			listener.enterCounterStyle(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitCounterStyle) {
			listener.exitCounterStyle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitCounterStyle) {
			return visitor.visitCounterStyle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FontFeatureValuesRuleContext extends ParserRuleContext {
	public FontFeatureValues(): TerminalNode { return this.getToken(css3Parser.FontFeatureValues, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public fontFamilyNameList(): FontFamilyNameListContext {
		return this.getRuleContext(0, FontFamilyNameListContext);
	}
	public featureValueBlock(): FeatureValueBlockContext[];
	public featureValueBlock(i: number): FeatureValueBlockContext;
	public featureValueBlock(i?: number): FeatureValueBlockContext | FeatureValueBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FeatureValueBlockContext);
		} else {
			return this.getRuleContext(i, FeatureValueBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_fontFeatureValuesRule; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterFontFeatureValuesRule) {
			listener.enterFontFeatureValuesRule(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitFontFeatureValuesRule) {
			listener.exitFontFeatureValuesRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitFontFeatureValuesRule) {
			return visitor.visitFontFeatureValuesRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FontFamilyNameListContext extends ParserRuleContext {
	public fontFamilyName(): FontFamilyNameContext[];
	public fontFamilyName(i: number): FontFamilyNameContext;
	public fontFamilyName(i?: number): FontFamilyNameContext | FontFamilyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FontFamilyNameContext);
		} else {
			return this.getRuleContext(i, FontFamilyNameContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Comma);
		} else {
			return this.getToken(css3Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_fontFamilyNameList; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterFontFamilyNameList) {
			listener.enterFontFamilyNameList(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitFontFamilyNameList) {
			listener.exitFontFamilyNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitFontFamilyNameList) {
			return visitor.visitFontFamilyNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FontFamilyNameContext extends ParserRuleContext {
	public String_(): TerminalNode | undefined { return this.tryGetToken(css3Parser.String_, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_fontFamilyName; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterFontFamilyName) {
			listener.enterFontFamilyName(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitFontFamilyName) {
			listener.exitFontFamilyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitFontFamilyName) {
			return visitor.visitFontFamilyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeatureValueBlockContext extends ParserRuleContext {
	public featureType(): FeatureTypeContext {
		return this.getRuleContext(0, FeatureTypeContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public featureValueDefinition(): FeatureValueDefinitionContext[];
	public featureValueDefinition(i: number): FeatureValueDefinitionContext;
	public featureValueDefinition(i?: number): FeatureValueDefinitionContext | FeatureValueDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FeatureValueDefinitionContext);
		} else {
			return this.getRuleContext(i, FeatureValueDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_featureValueBlock; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterFeatureValueBlock) {
			listener.enterFeatureValueBlock(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitFeatureValueBlock) {
			listener.exitFeatureValueBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitFeatureValueBlock) {
			return visitor.visitFeatureValueBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeatureTypeContext extends ParserRuleContext {
	public atKeyword(): AtKeywordContext {
		return this.getRuleContext(0, AtKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_featureType; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterFeatureType) {
			listener.enterFeatureType(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitFeatureType) {
			listener.exitFeatureType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitFeatureType) {
			return visitor.visitFeatureType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeatureValueDefinitionContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_featureValueDefinition; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterFeatureValueDefinition) {
			listener.enterFeatureValueDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitFeatureValueDefinition) {
			listener.exitFeatureValueDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitFeatureValueDefinition) {
			return visitor.visitFeatureValueDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public Ident(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Ident, 0); }
	public MediaOnly(): TerminalNode | undefined { return this.tryGetToken(css3Parser.MediaOnly, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Not, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(css3Parser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(css3Parser.Or, 0); }
	public From(): TerminalNode | undefined { return this.tryGetToken(css3Parser.From, 0); }
	public To(): TerminalNode | undefined { return this.tryGetToken(css3Parser.To, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_ident; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WsContext extends ParserRuleContext {
	public Comment(): TerminalNode[];
	public Comment(i: number): TerminalNode;
	public Comment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Comment);
		} else {
			return this.getToken(css3Parser.Comment, i);
		}
	}
	public Space(): TerminalNode[];
	public Space(i: number): TerminalNode;
	public Space(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(css3Parser.Space);
		} else {
			return this.getToken(css3Parser.Space, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return css3Parser.RULE_ws; }
	// @Override
	public enterRule(listener: css3Listener): void {
		if (listener.enterWs) {
			listener.enterWs(this);
		}
	}
	// @Override
	public exitRule(listener: css3Listener): void {
		if (listener.exitWs) {
			listener.exitWs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: css3Visitor<Result>): Result {
		if (visitor.visitWs) {
			return visitor.visitWs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


