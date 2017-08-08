
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
 });
var sum = 0;
var ave = 0;

var recursiveAsyncReadLine = function () {
 rl.question('Enter a number: ', function (num) {
  sum = parseInt(sum) + parseInt(num);
  if (num < 0){
   console.log("Terminated");
   return rl.close();
  }
  recursiveAsyncReadLine();
 });
};

recursiveAsyncReadLine();


