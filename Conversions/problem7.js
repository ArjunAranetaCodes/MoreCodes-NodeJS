//Problem 7: Write a program that converts a decimal number to binary number.
var dec = 10;
var binary = "";

while (dec > 0){
 binary = (dec % 2).toString() + binary;
 dec = parseInt(dec / 2);
}

console.log(binary);
