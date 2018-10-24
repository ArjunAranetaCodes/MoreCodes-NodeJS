/*
Problem 18: Write a program to print the number pattern using loop.
  *  
 ***
*****
 ***
  *
*/
var y = 0;
var x = 0;
var rows = 3;
var stars = 1; 
var blank = rows - 1;

for(y=1; y<rows*2; y++){
  for(x=1; x<=blank; x++){
    process.stdout.write(" ");
  }

  for(x=1; x<stars*2; x++){
    process.stdout.write("*");
  }

  process.stdout.write("\n");

  if(y<rows){
    blank--;
    stars++;
  }else{
    blank++;
    stars--;
  }
}