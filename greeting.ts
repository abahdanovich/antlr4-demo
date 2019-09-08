import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { HelloLexer } from './gen/HelloLexer';
import { GreetingContext, HelloParser } from './gen/HelloParser';
import { HelloVisitor } from './gen/HelloVisitor';

export function greet(input: string) {

    const inputStream = new ANTLRInputStream(input);
    const lexer = new HelloLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HelloParser(tokenStream);

    type Result = string | null;

    class TreeVisitor extends AbstractParseTreeVisitor<Result> implements HelloVisitor<Result> {

        defaultResult() {
            return null;
        }

        // aggregateResult(aggregate: Result, nextResult: Result) {
        //     debugger;
        // }

        // visitTerminal(node: TerminalNode): Result {
        //     debugger;
        // }

        visitGreeting(context: GreetingContext): Result {
            return context.ID().text;
        }
    }

    const visitor = new TreeVisitor();
    const tree = parser.greeting();
    return visitor.visit(tree);

}