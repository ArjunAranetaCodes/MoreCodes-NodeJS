
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter the value of length: ", function(length) {
 rl.question("Enter the value of width: ", function(width) {
   area = parseInt(length) * parseInt(width);
   console.log("Area of Rectangle is " + area);
   rl.close();
 });
});


