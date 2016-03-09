
/* Write validateParameter function that takes a parameter, checks whether it's type is string and length is greater than 0.

How to test:

validateParameter(); // returns: false
validateParameter(''); // returns: false
validateParameter(5); // returns: false
validateParameter('Welcome'); // returns: true */


	SOLUTION: 


function validateParameter(parameter) {
  
  if (parameter === 'string' || parameter.length >= 0) {
    return "true";
  } else {
      return "false";
    }
}

console.log(validateParameter());