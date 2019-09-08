// Generated from Hello.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GreetingContext } from "./HelloParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HelloParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HelloVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HelloParser.greeting`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreeting?: (ctx: GreetingContext) => Result;
}

