//Problem 4: Write a program that converts a string to array/list.
var numbers = "1,2,3";
var arrNumbers = numbers.split(",");
for(var x = 0 ; x < arrNumbers.length; x++){
 console.log(arrNumbers[x]);
}
