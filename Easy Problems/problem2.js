
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter the value of num1: ", function(num1) {
 rl.question("Enter the value of num2: ", function(num2) {
   sum = parseInt(num1) + parseInt(num2);
   diff = parseInt(num1) - parseInt(num2);
   prod = parseInt(num1) * parseInt(num2);
   quot = parseInt(num1) / parseInt(num2);
   console.log("Sum is " + sum);
   console.log("Difference is " + diff);
   console.log("Product is " + prod);
   console.log("Quotient is " + quot);
   rl.close();
 });
});


