//Problem 8: Write a program that checks if the String if valid url using Regular Expression.
var pattern = /^(https?:\/\/)?(www\.)?([\w]+\.)+[‌​\w]{2,63}\/?$/;

console.log(pattern.test("http://www.example.com"));
console.log(pattern.test("wwwexamplecom"));