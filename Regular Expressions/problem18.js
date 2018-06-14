//Problem 18: Write a program that extracts string inside quotation marks using Regular Expression.
var word = "Hello 'World'";
var newword = (word.match(/\'([^\"]*)\'/g) || []);

console.log(newword[0]);