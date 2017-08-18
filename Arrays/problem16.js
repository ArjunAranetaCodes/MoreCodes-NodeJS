
var arrNumbers = [1,2,3]
var n = 2
var indexOfNum = arrNumbers.indexOf(n)
arrNumbers.splice(indexOfNum, indexOfNum)

for(var x = 0; x < arrNumbers.length; x++){
 console.log(arrNumbers[x])
}


