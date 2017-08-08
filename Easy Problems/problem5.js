
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter the value of celsius: ", function(celsius) {
  farenheit = (9.0 / 5.0) * celsius + 32.0

 console.log(celsius + "C equals to " + farenheit + "F");
 rl.close();
});


