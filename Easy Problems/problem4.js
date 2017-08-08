
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter the value of radius: ", function(radius) {
  PI = 3.14
  dia = radius * radius
  area = PI * dia
  cir = 2 * PI * radius

 console.log("Diameter of the circle is " + dia);
 console.log("Area of the circle is " + area);
 console.log("Circumference of the circle is " + cir);
 rl.close();
});


