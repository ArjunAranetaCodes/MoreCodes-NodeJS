//Problem 2: Write a program that matches email address.
var pattern = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})/;

console.log(pattern.test("mark@yahoo.com"));
console.log(pattern.test("mark-yahoo.com"));