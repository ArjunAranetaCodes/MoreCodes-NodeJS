/*
Problem 1: Write a program to print the number pattern of ones and zeros using loop.
11111
11111
11111
11111
11111
*/
var y = 0;
for(y = 0; y < 5; y++){
 var x = 0;
 for(x = 0; x < 5; x++){
  process.stdout.write("1");
 }
 console.log();
}