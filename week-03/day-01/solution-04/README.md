Write squareList function that takes an array of numbers and returns a new array where each number is squared.

How to test:

squareList(); // returns: []
squareList([]); // returns: []
squareList([2]); // returns: [4]
squareList([2, 4, 1]); // returns: [4, 16, 1]


SOLUTION:

var listOfNumbers = [2,4,5];

function squareList(parameter1) {
  var iterator;
  var value;
  var newList = [];
  
  for (iterator = 0; iterator < parameter1.length; iterator = iterator + 1) {
     value = parameter1[iterator] * parameter1[iterator];
      newList[iterator] = value;
    
  }
  return newList;
}

console.log(squareList(listOfNumbers));