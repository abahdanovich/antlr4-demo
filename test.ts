import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { AbstractParseTreeVisitor, TerminalNode } from 'antlr4ts/tree';
import { HelloLexer } from './HelloLexer';
import { GreetingContext, HelloParser } from './HelloParser';
import { HelloVisitor } from './HelloVisitor';

const inputStream = new ANTLRInputStream("hello worlddddd");
const lexer = new HelloLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new HelloParser(tokenStream);

class TreeVisitor extends AbstractParseTreeVisitor<string[]> implements HelloVisitor<string[]> {

    defaultResult() {
        return [];
    }

    aggregateResult(aggregate: string[], nextResult: string[]) {
        return aggregate.concat(nextResult);
    }

    visitTerminal(node: TerminalNode): string[] {
        debugger;
        return [node.text];
    }

    // visitGreeting(context: GreetingContext): string[] {
    //     return super.visitChildren(context);
    // }
}

const visitor = new TreeVisitor();
const tree = parser.greeting();
const result: string[] = visitor.visit(tree);
console.log(result);
