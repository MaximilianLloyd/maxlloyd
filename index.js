import pug from 'pug';

// Compile the source code
const compiledFunction = pug.compileFile('./templates/pages/index.pug');

// Render a set of data
console.log(compiledFunction());
// "<p>Timothy's Pug source code!</p>"

// Render another set of data

