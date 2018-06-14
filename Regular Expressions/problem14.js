//Problem 14: Write a program that recognizes valid hex color value using Regular Expression.
var pattern = /^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$/;

console.log(pattern.test("192.168.1.1"));
console.log(pattern.test("1.1.1.1.1"));