//Variables and Input

var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("What is your name? ", function(name) {
 rl.question("What is your sex? ", function(sex) {
  rl.question("What is your age? ", function(age) {
   console.log("Name: " + name);
   console.log("Sex: " + sex);
   console.log("Age: " + age);
   rl.close();
  });
 });
});


