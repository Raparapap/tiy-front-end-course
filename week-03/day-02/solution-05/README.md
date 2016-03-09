Write a function that takes a string as a parameter and returns a reversed version of that string.

Don't use .reverse() method.

How to test:

var result = reverse('Hello');

console.log(result); // olleH



		Solution: 
var result = reverse('Hello')



function reverse(parameter) {
  
  var iterator;
  var newString = ;
  for (iterator = parameter.length-1; iterator > -1 ; iterator = iterator - 1) {
          newString = newString + parameter[iterator];
    
  }
  
  return newString;
}


console.log(result);