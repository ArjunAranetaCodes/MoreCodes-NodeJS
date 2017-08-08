
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter the value of num: ", function(num) {
 var sum = 0;

 for(var x = 0; x <= num; x++){
  sum = sum + x;
 }

 console.log("Sum of 1 to " + num +
  " is " + sum);

 rl.close();
});


