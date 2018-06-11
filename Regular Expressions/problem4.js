//Problem 4: Write a program that matches time in 12 hour format.
var pattern = /(1[012]|[1-9]):[0-5][0-9](\s)?(am|pm)/;

console.log(pattern.test("8:01"));
console.log(pattern.test("18:01 pm"));