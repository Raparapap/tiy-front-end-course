Write findInList function that takes 2 parameters: a string and a character and returns a number of times that character is repeated in that string.



SOLUTION: 

function findInList(parameter1, parameter2) {
  var iterator;
  var value;
  var sum=0;
  for (iterator = 0; iterator < parameter1.length - 1; iterator = iterator + 1) {
    if  (parameter1[iterator] === parameter2) 
      /* (parameter1 === 'string' && parameter1[iterator] === parameter2) */ {
      sum = parameter1[iterator] + parameter1[iterator];
      value = sum.length;
      return value;
    } /* else {
      return '0';
    } */
    
  }
  
  return value;
}


console.log(findInList('hello', 'l'));
