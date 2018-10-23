/*
Problem 8: Write a program to print the number pattern of ones and zeros using loop.
11111
11111
11011
11111
11111
*/
var y = 0;
var row = 5;
var col = 5;
for(y = 0; y < row; y++){
 var x = 0;
 for(x = 0; x < col; x++){
  if(x == (row / 2) && y == (col / 2)){
   process.stdout.write("0");
  }else{
   process.stdout.write("1");
  }			
 }
 process.stdout.write("\n");
}