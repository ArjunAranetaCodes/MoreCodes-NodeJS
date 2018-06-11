//Problem 3: Write a program that checks if string contains sample format date of (yyyy-mm-dd)
var pattern = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

console.log(pattern.test("2018-01-02"));
console.log(pattern.test("01-01-02"));