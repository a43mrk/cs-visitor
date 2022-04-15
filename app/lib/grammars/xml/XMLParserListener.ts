// Generated from ./lib/grammars/xml/XMLParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DocumentContext } from "./XMLParser";
import { PrologContext } from "./XMLParser";
import { ContentContext } from "./XMLParser";
import { ElementContext } from "./XMLParser";
import { ReferenceContext } from "./XMLParser";
import { AttributeContext } from "./XMLParser";
import { ChardataContext } from "./XMLParser";
import { MiscContext } from "./XMLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `XMLParser`.
 */
export interface XMLParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `XMLParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `XMLParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `XMLParser.prolog`.
	 * @param ctx the parse tree
	 */
	enterProlog?: (ctx: PrologContext) => void;
	/**
	 * Exit a parse tree produced by `XMLParser.prolog`.
	 * @param ctx the parse tree
	 */
	exitProlog?: (ctx: PrologContext) => void;

	/**
	 * Enter a parse tree produced by `XMLParser.content`.
	 * @param ctx the parse tree
	 */
	enterContent?: (ctx: ContentContext) => void;
	/**
	 * Exit a parse tree produced by `XMLParser.content`.
	 * @param ctx the parse tree
	 */
	exitContent?: (ctx: ContentContext) => void;

	/**
	 * Enter a parse tree produced by `XMLParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `XMLParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `XMLParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `XMLParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `XMLParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `XMLParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `XMLParser.chardata`.
	 * @param ctx the parse tree
	 */
	enterChardata?: (ctx: ChardataContext) => void;
	/**
	 * Exit a parse tree produced by `XMLParser.chardata`.
	 * @param ctx the parse tree
	 */
	exitChardata?: (ctx: ChardataContext) => void;

	/**
	 * Enter a parse tree produced by `XMLParser.misc`.
	 * @param ctx the parse tree
	 */
	enterMisc?: (ctx: MiscContext) => void;
	/**
	 * Exit a parse tree produced by `XMLParser.misc`.
	 * @param ctx the parse tree
	 */
	exitMisc?: (ctx: MiscContext) => void;
}

