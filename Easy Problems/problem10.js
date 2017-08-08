
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter the value of num1: ", function(num1) {
 rl.question("Enter the value of num2: ", function(num2) {
  rl.question("Enter the value of num3: ", function(num3) {
   var ave = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
   console.log("Average is " + ave);
   rl.close();
  });
 });
});


