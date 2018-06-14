//Problem 17: Write a program that removes the last word in a string using Regular Expression.
var word = "Hello World";
var newWord = word.replace(/\w+$/gi, "");

console.log(newWord);