/*
Problem 15: Write a program to print the number pattern using loop.
11111
2222
333
44
5
*/
var y = 0;
var row = 5;
var num = 1;
for(y = row; y > 0; y--){
  for(x = 0; x < y; x++){
    process.stdout.write(num.toString());
  }
  num = num + 1;
  process.stdout.write("\n");
}