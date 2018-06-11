//Problem 5: Write a program that matches time in 24 hour format.
var pattern = /([01]?[0-9]|2[0-3]):[0-5][0-9]/;

console.log(pattern.test("13 01"));
console.log(pattern.test("8:01 am"));