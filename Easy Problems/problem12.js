
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter your name: ", function(name) {
 console.log("Hello " + name);
 rl.close();
});


