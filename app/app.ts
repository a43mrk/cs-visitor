import * as fs from 'fs';
import * as path from 'path';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { CSharpLexer } from './lib/module';
import { CSharpParser, Method_declarationContext} from './lib/module';
import { CharStream } from "antlr4ts/CharStream";
import { TokenStream } from "antlr4ts/TokenStream";
import { CSharpParserListener } from "./lib/module";

import { CSharpParserVisitor } from './lib/module'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ANTLRInputStream } from 'antlr4ts/ANTLRInputStream';
import { CommonTokenStream } from 'antlr4ts/CommonTokenStream';

// =================================== main ========================================
//
var filePath = process.argv[2]

var input: Buffer;

fs.readFile(filePath, (err, data) => {
  if(err) throw err;
  // console.log(data);
  input = data;

  // console.log(input.toString());
  // var chars = new InputStream(input.toString());
  let chars = new ANTLRInputStream(input.toString());
  var lexer = new CSharpLexer(chars);
  var tokens = new CommonTokenStream(lexer);
  var parser = new CSharpParser(tokens);

  parser.buildParseTree = true;

  // We want to print parser's properties to see if we have a rule function there:
  // console.log(Object.keys(parser))

  // this will throw an error
  let tree = parser.compilation_unit();

  //
  // Listener Approach
  var walker = new ParseTreeWalker(); // create standard walker

  // Create the listener
  const extractor: CSharpParserListener = new MyListener();

  // Use the entry point for listeners
  ParseTreeWalker.DEFAULT.walk(extractor, tree);

  //
  // Visitor Approach
  // Create the visitor
  const countFunctionsVisitor = new CountFunctionsVisitor()
  // Use the visitor entry point
  countFunctionsVisitor.visit(tree)
});


//
// =================================================================================
//
export class MyListener implements CSharpParserListener {

  // Assuming a parser rule with name: `functionDeclaration`
	enterMethod_declaration(ctx: Method_declarationContext) {
    console.log(`Function start line number ${ctx._start.line}`);
    // ...
  }

  // other enterX functions...
}

// Visitor Approach
// Extend the AbstractParseTreeVisitor to get default visitor behaviour
class CountFunctionsVisitor extends AbstractParseTreeVisitor<number> implements CSharpParserVisitor<number> {

  defaultResult() {
    return 0
  }

  aggregateResult(aggregate: number, nextResult: number) {
    return aggregate + nextResult
  }

  visitMethod_declaration(context: Method_declarationContext): number {
    return 1 + super.visitChildren(context)
  }
}

