//Problem 20: Write a program that validates if string length is between 5 to 10 using Regular Expression.
var pattern = /\w{5,10}\b/;

console.log(pattern.test("Hello World"));
console.log(pattern.test("Hi"));