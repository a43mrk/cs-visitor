// Generated from ./lib/grammars/html/HTMLParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HTMLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HTMLParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HTMLParser.htmlDocument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlDocument?: (ctx: HtmlDocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.scriptletOrSeaWs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptletOrSeaWs?: (ctx: ScriptletOrSeaWsContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.htmlElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlElements?: (ctx: HtmlElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.htmlElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlElement?: (ctx: HtmlElementContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.htmlContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlContent?: (ctx: HtmlContentContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.htmlAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlAttribute?: (ctx: HtmlAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.htmlChardata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlChardata?: (ctx: HtmlChardataContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.htmlMisc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlMisc?: (ctx: HtmlMiscContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.htmlComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlComment?: (ctx: HtmlCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `HTMLParser.style`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStyle?: (ctx: StyleContext) => Result;
}

