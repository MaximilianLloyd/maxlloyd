
import pug from 'pug';

// Compile the source code
export const compiledFunction = pug.compileFile('./templates/pages/experiments.pug');

// Render a set of data
console.log(compiledFunction());
// "<p>Timothy's Pug source code!</p>"

// Render another set of data

