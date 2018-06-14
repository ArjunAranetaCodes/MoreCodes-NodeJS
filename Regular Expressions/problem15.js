//Problem 15: Write a program that takes a value inside a <div> tag using Regular Expression.
var word = "<div>Hello World</div>";
var newWord = word.replace(/<(\"[^\"]*\"|\'[^\']*\'|[^\'\">])*>/gi, "");

console.log(newWord);