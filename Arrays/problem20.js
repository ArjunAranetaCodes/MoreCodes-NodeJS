
var arrNumbers = [1,3,2,4]
var closest = 0
var numDiff = Math.max(...arrNumbers)

for(var x = 0; x < arrNumbers.length; x++){
 var diff = 0 - arrNumbers[x]
 diff = Math.abs(diff)
 if (diff < numDiff){
  numDiff = diff
  closest = arrNumbers[x]
 }
}

console.log("Closest to zero is " + closest)


