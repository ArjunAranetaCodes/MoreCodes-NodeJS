
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter the value of num1: ", function(num1) {
 rl.question("Enter the value of num2: ", function(num2) {
   sum = parseInt(num1) + parseInt(num2);
   console.log("Sum is " + sum);
   rl.close();
 });
});


