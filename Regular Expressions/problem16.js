//Problem 16: Write a program that takes a value inside a <a> tag using Regular Expression.
var word = "<a>Hello World</a>";
var newWord = word.replace(/<(\"[^\"]*\"|\'[^\']*\'|[^\'\">])*>/gi, "");

console.log(newWord);