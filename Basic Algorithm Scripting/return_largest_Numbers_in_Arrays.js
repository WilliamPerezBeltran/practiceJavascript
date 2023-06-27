function largestOfFour(arr) {
  let mayor
  let newArray = []
  for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr[i].length;j++){
      if(j == 0){
        mayor = arr[i][j]
      }else{
        if(arr[i][j] > mayor){
          mayor = arr[i][j]
        }
      }
    }
    newArray.push(mayor)
  }
  return newArray
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

======================================================

function largestOfFour(arr) {
   var largestNumber = [0,0,0,0];
   for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
          largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
        }
    }
 }
 return largestNumber;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
======================================================
function largestOfFour(mainArray) {
  return mainArray.map(function (subArray){
    return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
      return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
    }, 0);
  });
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
======================================================

function largestOfFour(mainArray) {
  return mainArray.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
======================================================
function largestOfFour(arr) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    answer.push(Math.max(...arr[i]))
  }
  return answer
}
======================================================
function largestOfFour(arr) {
  let answer = []
  arr.forEach(function(array) {
    answer.push(Math.max(...array))
  })
  return answer
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
======================================================
