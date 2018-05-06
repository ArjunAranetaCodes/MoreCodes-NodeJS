//Problem 9: Write a program that converys a hexadecimal number to decimal number.
var dec = 0;
var hex = "100";
hex = hex.split("").reverse();

for (var x = 0; x < hex.length; x++){
 if (hex[x] == '1'){
  dec = dec + (parseInt(hex[x]) * parseInt(Math.pow(16, x)));
 }
}

console.log(dec);
