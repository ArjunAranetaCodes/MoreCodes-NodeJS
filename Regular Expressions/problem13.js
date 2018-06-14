//Problem 13: Write a program that recognizes valid hex color value using Regular Expression.
var pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

console.log(pattern.test("#fff"));
console.log(pattern.test("#asdf"));