//Problem 12: Write a program that counts the occurrence of digits in a string using Regular Expression.
var word = "Hello12 World12";
var count = word.replace(/\D/gi, "").length;

console.log(count);