Write a function that: 
Takes an array as a parameter 
2. Iterates over each value in that array 
3. Checks if the value's type is number 
4. If it is - calculate the sum of all numbers

	SOLUTION:

var asdfgh = [1,2,3,4];

function qwerty(parameter) {
  var iterator;
  var sum=0;
  for (iterator = 0; iterator < parameter.length; iterator = iterator + 1) {
    sum = parameter[iterator] + sum;
  }
  return sum;
}



console.log(qwerty(asdfgh));
