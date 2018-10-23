/*
Problem 4: Write a program to print the number pattern of ones and zeros using loop.
10001
10001
10001
10001
10001
*/
var y = 0;
for(y = 0; y < 5; y++){
 var x = 0;
 for(x = 0; x < 5; x++){
  if((x == 0) || (x == 4)){
   process.stdout.write("1");
  }else{
   process.stdout.write("0");
  }			
 }
 process.stdout.write("\n");
}