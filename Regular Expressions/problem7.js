//Problem 7: Write a program that counts vowels in a String using Regular Expression.
var word = "Hello World";
var newword = word.replace(/[^aeiouAEIOU]/gi, "");
var count = newword.length;

console.log(count);