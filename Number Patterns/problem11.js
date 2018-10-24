/*
Problem 11: Write a program to print the pattern of asterisks using loop.
*
**
***
****
*****
*/
var y = 0;
var row = 5;
for(y = 0; y <= row; y++){
  var x = 0;
  for(x = 0; x < y; x++){
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}