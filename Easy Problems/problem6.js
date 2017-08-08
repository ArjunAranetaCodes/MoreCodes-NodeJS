
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter the value of num: ", function(num) {
 if(parseInt(num) % 2 == 0){
  console.log("Number is even");
 }else{
  console.log("Number is odd");
 }

 rl.close();
});


