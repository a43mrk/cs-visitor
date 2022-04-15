// Generated from ./lib/grammars/xml/XMLParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { XMLParserListener } from "./XMLParserListener";
import { XMLParserVisitor } from "./XMLParserVisitor";


export class XMLParser extends Parser {
	public static readonly COMMENT = 1;
	public static readonly CDATA = 2;
	public static readonly DTD = 3;
	public static readonly EntityRef = 4;
	public static readonly CharRef = 5;
	public static readonly SEA_WS = 6;
	public static readonly OPEN = 7;
	public static readonly XMLDeclOpen = 8;
	public static readonly TEXT = 9;
	public static readonly CLOSE = 10;
	public static readonly SPECIAL_CLOSE = 11;
	public static readonly SLASH_CLOSE = 12;
	public static readonly SLASH = 13;
	public static readonly EQUALS = 14;
	public static readonly STRING = 15;
	public static readonly Name = 16;
	public static readonly S = 17;
	public static readonly PI = 18;
	public static readonly RULE_document = 0;
	public static readonly RULE_prolog = 1;
	public static readonly RULE_content = 2;
	public static readonly RULE_element = 3;
	public static readonly RULE_reference = 4;
	public static readonly RULE_attribute = 5;
	public static readonly RULE_chardata = 6;
	public static readonly RULE_misc = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "prolog", "content", "element", "reference", "attribute", 
		"chardata", "misc",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'<'", undefined, undefined, "'>'", undefined, "'/>'", "'/'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENT", "CDATA", "DTD", "EntityRef", "CharRef", "SEA_WS", 
		"OPEN", "XMLDeclOpen", "TEXT", "CLOSE", "SPECIAL_CLOSE", "SLASH_CLOSE", 
		"SLASH", "EQUALS", "STRING", "Name", "S", "PI",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XMLParser._LITERAL_NAMES, XMLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XMLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XMLParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XMLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XMLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XMLParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XMLParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XMLParser.XMLDeclOpen) {
				{
				this.state = 16;
				this.prolog();
				}
			}

			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
				{
				{
				this.state = 19;
				this.misc();
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 25;
			this.element();
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
				{
				{
				this.state = 26;
				this.misc();
				}
				}
				this.state = 31;
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
	public prolog(): PrologContext {
		let _localctx: PrologContext = new PrologContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XMLParser.RULE_prolog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.match(XMLParser.XMLDeclOpen);
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XMLParser.Name) {
				{
				{
				this.state = 33;
				this.attribute();
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 39;
			this.match(XMLParser.SPECIAL_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public content(): ContentContext {
		let _localctx: ContentContext = new ContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XMLParser.RULE_content);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XMLParser.SEA_WS || _la === XMLParser.TEXT) {
				{
				this.state = 41;
				this.chardata();
				}
			}

			this.state = 56;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 49;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XMLParser.OPEN:
						{
						this.state = 44;
						this.element();
						}
						break;
					case XMLParser.EntityRef:
					case XMLParser.CharRef:
						{
						this.state = 45;
						this.reference();
						}
						break;
					case XMLParser.CDATA:
						{
						this.state = 46;
						this.match(XMLParser.CDATA);
						}
						break;
					case XMLParser.PI:
						{
						this.state = 47;
						this.match(XMLParser.PI);
						}
						break;
					case XMLParser.COMMENT:
						{
						this.state = 48;
						this.match(XMLParser.COMMENT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 52;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XMLParser.SEA_WS || _la === XMLParser.TEXT) {
						{
						this.state = 51;
						this.chardata();
						}
					}

					}
					}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XMLParser.RULE_element);
		let _la: number;
		try {
			this.state = 83;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.match(XMLParser.OPEN);
				this.state = 60;
				this.match(XMLParser.Name);
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XMLParser.Name) {
					{
					{
					this.state = 61;
					this.attribute();
					}
					}
					this.state = 66;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 67;
				this.match(XMLParser.CLOSE);
				this.state = 68;
				this.content();
				this.state = 69;
				this.match(XMLParser.OPEN);
				this.state = 70;
				this.match(XMLParser.SLASH);
				this.state = 71;
				this.match(XMLParser.Name);
				this.state = 72;
				this.match(XMLParser.CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.match(XMLParser.OPEN);
				this.state = 75;
				this.match(XMLParser.Name);
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XMLParser.Name) {
					{
					{
					this.state = 76;
					this.attribute();
					}
					}
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 82;
				this.match(XMLParser.SLASH_CLOSE);
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
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XMLParser.RULE_reference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			_la = this._input.LA(1);
			if (!(_la === XMLParser.EntityRef || _la === XMLParser.CharRef)) {
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XMLParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(XMLParser.Name);
			this.state = 88;
			this.match(XMLParser.EQUALS);
			this.state = 89;
			this.match(XMLParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chardata(): ChardataContext {
		let _localctx: ChardataContext = new ChardataContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XMLParser.RULE_chardata);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			_la = this._input.LA(1);
			if (!(_la === XMLParser.SEA_WS || _la === XMLParser.TEXT)) {
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
	public misc(): MiscContext {
		let _localctx: MiscContext = new MiscContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XMLParser.RULE_misc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0))) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14b\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x05\x02\x14\n\x02\x03\x02\x07\x02\x17" +
		"\n\x02\f\x02\x0E\x02\x1A\v\x02\x03\x02\x03\x02\x07\x02\x1E\n\x02\f\x02" +
		"\x0E\x02!\v\x02\x03\x03\x03\x03\x07\x03%\n\x03\f\x03\x0E\x03(\v\x03\x03" +
		"\x03\x03\x03\x03\x04\x05\x04-\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x044\n\x04\x03\x04\x05\x047\n\x04\x07\x049\n\x04\f\x04\x0E\x04" +
		"<\v\x04\x03\x05\x03\x05\x03\x05\x07\x05A\n\x05\f\x05\x0E\x05D\v\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x07\x05P\n\x05\f\x05\x0E\x05S\v\x05\x03\x05\x05\x05V\n\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x02\x05\x03\x02\x06\x07\x04\x02\b\b\v\v\x05\x02\x03\x03\b\b\x14\x14\x02" +
		"g\x02\x13\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b" +
		"U\x03\x02\x02\x02\nW\x03\x02\x02\x02\fY\x03\x02\x02\x02\x0E]\x03\x02\x02" +
		"\x02\x10_\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x12\x03\x02\x02" +
		"\x02\x13\x14\x03\x02\x02\x02\x14\x18\x03\x02\x02\x02\x15\x17\x05\x10\t" +
		"\x02\x16\x15\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02" +
		"\x02\x18\x19\x03\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x18\x03\x02\x02" +
		"\x02\x1B\x1F\x05\b\x05\x02\x1C\x1E\x05\x10\t\x02\x1D\x1C\x03\x02\x02\x02" +
		"\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x03" +
		"\x03\x02\x02\x02!\x1F\x03\x02\x02\x02\"&\x07\n\x02\x02#%\x05\f\x07\x02" +
		"$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02" +
		"\x02\')\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x07\r\x02\x02*\x05\x03\x02" +
		"\x02\x02+-\x05\x0E\b\x02,+\x03\x02\x02\x02,-\x03\x02\x02\x02-:\x03\x02" +
		"\x02\x02.4\x05\b\x05\x02/4\x05\n\x06\x0204\x07\x04\x02\x0214\x07\x14\x02" +
		"\x0224\x07\x03\x02\x023.\x03\x02\x02\x023/\x03\x02\x02\x0230\x03\x02\x02" +
		"\x0231\x03\x02\x02\x0232\x03\x02\x02\x0246\x03\x02\x02\x0257\x05\x0E\b" +
		"\x0265\x03\x02\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x0283\x03\x02\x02" +
		"\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;\x07\x03\x02" +
		"\x02\x02<:\x03\x02\x02\x02=>\x07\t\x02\x02>B\x07\x12\x02\x02?A\x05\f\x07" +
		"\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02" +
		"\x02CE\x03\x02\x02\x02DB\x03\x02\x02\x02EF\x07\f\x02\x02FG\x05\x06\x04" +
		"\x02GH\x07\t\x02\x02HI\x07\x0F\x02\x02IJ\x07\x12\x02\x02JK\x07\f\x02\x02" +
		"KV\x03\x02\x02\x02LM\x07\t\x02\x02MQ\x07\x12\x02\x02NP\x05\f\x07\x02O" +
		"N\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02" +
		"RT\x03\x02\x02\x02SQ\x03\x02\x02\x02TV\x07\x0E\x02\x02U=\x03\x02\x02\x02" +
		"UL\x03\x02\x02\x02V\t\x03\x02\x02\x02WX\t\x02\x02\x02X\v\x03\x02\x02\x02" +
		"YZ\x07\x12\x02\x02Z[\x07\x10\x02\x02[\\\x07\x11\x02\x02\\\r\x03\x02\x02" +
		"\x02]^\t\x03\x02\x02^\x0F\x03\x02\x02\x02_`\t\x04\x02\x02`\x11\x03\x02" +
		"\x02\x02\r\x13\x18\x1F&,36:BQU";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XMLParser.__ATN) {
			XMLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XMLParser._serializedATN));
		}

		return XMLParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	public prolog(): PrologContext | undefined {
		return this.tryGetRuleContext(0, PrologContext);
	}
	public misc(): MiscContext[];
	public misc(i: number): MiscContext;
	public misc(i?: number): MiscContext | MiscContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MiscContext);
		} else {
			return this.getRuleContext(i, MiscContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XMLParser.RULE_document; }
	// @Override
	public enterRule(listener: XMLParserListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: XMLParserListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XMLParserVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrologContext extends ParserRuleContext {
	public XMLDeclOpen(): TerminalNode { return this.getToken(XMLParser.XMLDeclOpen, 0); }
	public SPECIAL_CLOSE(): TerminalNode { return this.getToken(XMLParser.SPECIAL_CLOSE, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XMLParser.RULE_prolog; }
	// @Override
	public enterRule(listener: XMLParserListener): void {
		if (listener.enterProlog) {
			listener.enterProlog(this);
		}
	}
	// @Override
	public exitRule(listener: XMLParserListener): void {
		if (listener.exitProlog) {
			listener.exitProlog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XMLParserVisitor<Result>): Result {
		if (visitor.visitProlog) {
			return visitor.visitProlog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContentContext extends ParserRuleContext {
	public chardata(): ChardataContext[];
	public chardata(i: number): ChardataContext;
	public chardata(i?: number): ChardataContext | ChardataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChardataContext);
		} else {
			return this.getRuleContext(i, ChardataContext);
		}
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public reference(): ReferenceContext[];
	public reference(i: number): ReferenceContext;
	public reference(i?: number): ReferenceContext | ReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReferenceContext);
		} else {
			return this.getRuleContext(i, ReferenceContext);
		}
	}
	public CDATA(): TerminalNode[];
	public CDATA(i: number): TerminalNode;
	public CDATA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XMLParser.CDATA);
		} else {
			return this.getToken(XMLParser.CDATA, i);
		}
	}
	public PI(): TerminalNode[];
	public PI(i: number): TerminalNode;
	public PI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XMLParser.PI);
		} else {
			return this.getToken(XMLParser.PI, i);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XMLParser.COMMENT);
		} else {
			return this.getToken(XMLParser.COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XMLParser.RULE_content; }
	// @Override
	public enterRule(listener: XMLParserListener): void {
		if (listener.enterContent) {
			listener.enterContent(this);
		}
	}
	// @Override
	public exitRule(listener: XMLParserListener): void {
		if (listener.exitContent) {
			listener.exitContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XMLParserVisitor<Result>): Result {
		if (visitor.visitContent) {
			return visitor.visitContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XMLParser.OPEN);
		} else {
			return this.getToken(XMLParser.OPEN, i);
		}
	}
	public Name(): TerminalNode[];
	public Name(i: number): TerminalNode;
	public Name(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XMLParser.Name);
		} else {
			return this.getToken(XMLParser.Name, i);
		}
	}
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XMLParser.CLOSE);
		} else {
			return this.getToken(XMLParser.CLOSE, i);
		}
	}
	public content(): ContentContext | undefined {
		return this.tryGetRuleContext(0, ContentContext);
	}
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XMLParser.SLASH, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public SLASH_CLOSE(): TerminalNode | undefined { return this.tryGetToken(XMLParser.SLASH_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XMLParser.RULE_element; }
	// @Override
	public enterRule(listener: XMLParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: XMLParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XMLParserVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public EntityRef(): TerminalNode | undefined { return this.tryGetToken(XMLParser.EntityRef, 0); }
	public CharRef(): TerminalNode | undefined { return this.tryGetToken(XMLParser.CharRef, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XMLParser.RULE_reference; }
	// @Override
	public enterRule(listener: XMLParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: XMLParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XMLParserVisitor<Result>): Result {
		if (visitor.visitReference) {
			return visitor.visitReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public Name(): TerminalNode { return this.getToken(XMLParser.Name, 0); }
	public EQUALS(): TerminalNode { return this.getToken(XMLParser.EQUALS, 0); }
	public STRING(): TerminalNode { return this.getToken(XMLParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XMLParser.RULE_attribute; }
	// @Override
	public enterRule(listener: XMLParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: XMLParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XMLParserVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChardataContext extends ParserRuleContext {
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(XMLParser.TEXT, 0); }
	public SEA_WS(): TerminalNode | undefined { return this.tryGetToken(XMLParser.SEA_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XMLParser.RULE_chardata; }
	// @Override
	public enterRule(listener: XMLParserListener): void {
		if (listener.enterChardata) {
			listener.enterChardata(this);
		}
	}
	// @Override
	public exitRule(listener: XMLParserListener): void {
		if (listener.exitChardata) {
			listener.exitChardata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XMLParserVisitor<Result>): Result {
		if (visitor.visitChardata) {
			return visitor.visitChardata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MiscContext extends ParserRuleContext {
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(XMLParser.COMMENT, 0); }
	public PI(): TerminalNode | undefined { return this.tryGetToken(XMLParser.PI, 0); }
	public SEA_WS(): TerminalNode | undefined { return this.tryGetToken(XMLParser.SEA_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XMLParser.RULE_misc; }
	// @Override
	public enterRule(listener: XMLParserListener): void {
		if (listener.enterMisc) {
			listener.enterMisc(this);
		}
	}
	// @Override
	public exitRule(listener: XMLParserListener): void {
		if (listener.exitMisc) {
			listener.exitMisc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XMLParserVisitor<Result>): Result {
		if (visitor.visitMisc) {
			return visitor.visitMisc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


