//Problem 8: Write a program that converts a decimal number to hexadecimal number.
var dec = 256;
var hex = "";

while (dec > 0){
 hex = (dec % 16).toString() + hex;
 dec = parseInt(dec / 16);
}

console.log(hex);
