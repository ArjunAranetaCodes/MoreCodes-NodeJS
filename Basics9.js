//Basics of Functions

//function that has no return value
//no passing argument/parameter
function function1(){
  console.log("Hello there!");
}

//function that has no return value
//has passing argument/parameter
function function2(num){
 console.log("That number is " + num);
}

//function that has return value
//has no passing argument/parameter
function function3(){
 var sum = 1 + 1;
 return sum;
}

//function that has return value
//has passing argument/parameter
function function4(firstName, lastName){
 var fullName = firstName + " " + lastName;
 return fullName;
}

function1();
function2(5);
console.log("It's true! 1+1 = " + function3());
console.log("Hi " + function4("More","Codes"));


