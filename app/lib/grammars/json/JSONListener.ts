// Generated from ./lib/grammars/json/JSON.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { JsonContext } from "./JSONParser";
import { ObjContext } from "./JSONParser";
import { PairContext } from "./JSONParser";
import { ArrContext } from "./JSONParser";
import { ValueContext } from "./JSONParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JSONParser`.
 */
export interface JSONListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JSONParser.json`.
	 * @param ctx the parse tree
	 */
	enterJson?: (ctx: JsonContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.json`.
	 * @param ctx the parse tree
	 */
	exitJson?: (ctx: JsonContext) => void;

	/**
	 * Enter a parse tree produced by `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	enterObj?: (ctx: ObjContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	exitObj?: (ctx: ObjContext) => void;

	/**
	 * Enter a parse tree produced by `JSONParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `JSONParser.arr`.
	 * @param ctx the parse tree
	 */
	enterArr?: (ctx: ArrContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.arr`.
	 * @param ctx the parse tree
	 */
	exitArr?: (ctx: ArrContext) => void;

	/**
	 * Enter a parse tree produced by `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

