
const antlr4 = require('antlr4');
const csLexer = require('./lib/CSharpLexer');
const csParser = require('./lib/CSharpParser');

var filePath = process.argv[2]

var input = null;

fs.readFile(filePath, (err, data) => {
   if (err) throw err;
  console.log(data);
  input = data;
});

var chars = new antlr4.InputStream(input);
var lexer = new csLexer.CSharpLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new csParser.CSharpParser(tokens);

parser.buildParseTrees = true;

// We want to print parser's properties to see if we have a rule function there:
console.log(Object.keys(parser))

// this will throw an error
parser.CompilationUnit();
