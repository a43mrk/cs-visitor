// Generated from ./lib/grammars/html/HTMLParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { HtmlDocumentContext } from "./HTMLParser";
import { ScriptletOrSeaWsContext } from "./HTMLParser";
import { HtmlElementsContext } from "./HTMLParser";
import { HtmlElementContext } from "./HTMLParser";
import { HtmlContentContext } from "./HTMLParser";
import { HtmlAttributeContext } from "./HTMLParser";
import { HtmlChardataContext } from "./HTMLParser";
import { HtmlMiscContext } from "./HTMLParser";
import { HtmlCommentContext } from "./HTMLParser";
import { ScriptContext } from "./HTMLParser";
import { StyleContext } from "./HTMLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HTMLParser`.
 */
export interface HTMLParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HTMLParser.htmlDocument`.
	 * @param ctx the parse tree
	 */
	enterHtmlDocument?: (ctx: HtmlDocumentContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.htmlDocument`.
	 * @param ctx the parse tree
	 */
	exitHtmlDocument?: (ctx: HtmlDocumentContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.scriptletOrSeaWs`.
	 * @param ctx the parse tree
	 */
	enterScriptletOrSeaWs?: (ctx: ScriptletOrSeaWsContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.scriptletOrSeaWs`.
	 * @param ctx the parse tree
	 */
	exitScriptletOrSeaWs?: (ctx: ScriptletOrSeaWsContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.htmlElements`.
	 * @param ctx the parse tree
	 */
	enterHtmlElements?: (ctx: HtmlElementsContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.htmlElements`.
	 * @param ctx the parse tree
	 */
	exitHtmlElements?: (ctx: HtmlElementsContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.htmlElement`.
	 * @param ctx the parse tree
	 */
	enterHtmlElement?: (ctx: HtmlElementContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.htmlElement`.
	 * @param ctx the parse tree
	 */
	exitHtmlElement?: (ctx: HtmlElementContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.htmlContent`.
	 * @param ctx the parse tree
	 */
	enterHtmlContent?: (ctx: HtmlContentContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.htmlContent`.
	 * @param ctx the parse tree
	 */
	exitHtmlContent?: (ctx: HtmlContentContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.htmlAttribute`.
	 * @param ctx the parse tree
	 */
	enterHtmlAttribute?: (ctx: HtmlAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.htmlAttribute`.
	 * @param ctx the parse tree
	 */
	exitHtmlAttribute?: (ctx: HtmlAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.htmlChardata`.
	 * @param ctx the parse tree
	 */
	enterHtmlChardata?: (ctx: HtmlChardataContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.htmlChardata`.
	 * @param ctx the parse tree
	 */
	exitHtmlChardata?: (ctx: HtmlChardataContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.htmlMisc`.
	 * @param ctx the parse tree
	 */
	enterHtmlMisc?: (ctx: HtmlMiscContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.htmlMisc`.
	 * @param ctx the parse tree
	 */
	exitHtmlMisc?: (ctx: HtmlMiscContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.htmlComment`.
	 * @param ctx the parse tree
	 */
	enterHtmlComment?: (ctx: HtmlCommentContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.htmlComment`.
	 * @param ctx the parse tree
	 */
	exitHtmlComment?: (ctx: HtmlCommentContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.script`.
	 * @param ctx the parse tree
	 */
	enterScript?: (ctx: ScriptContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.script`.
	 * @param ctx the parse tree
	 */
	exitScript?: (ctx: ScriptContext) => void;

	/**
	 * Enter a parse tree produced by `HTMLParser.style`.
	 * @param ctx the parse tree
	 */
	enterStyle?: (ctx: StyleContext) => void;
	/**
	 * Exit a parse tree produced by `HTMLParser.style`.
	 * @param ctx the parse tree
	 */
	exitStyle?: (ctx: StyleContext) => void;
}

