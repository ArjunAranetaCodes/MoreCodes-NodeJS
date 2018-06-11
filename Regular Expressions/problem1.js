//Problem 1: Write a program to test if the first character of the String is uppercase using Regular Expression.
var pattern = /^[A-Z][a-z0-9_-]{3,19}/;

console.log(pattern.test("Hello"));
console.log(pattern.test("world"));
