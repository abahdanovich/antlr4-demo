// Generated from Hello.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { GreetingContext } from "./HelloParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HelloParser`.
 */
export interface HelloListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HelloParser.greeting`.
	 * @param ctx the parse tree
	 */
	enterGreeting?: (ctx: GreetingContext) => void;
	/**
	 * Exit a parse tree produced by `HelloParser.greeting`.
	 * @param ctx the parse tree
	 */
	exitGreeting?: (ctx: GreetingContext) => void;
}

