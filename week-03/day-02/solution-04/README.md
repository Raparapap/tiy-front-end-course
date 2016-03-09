Write a function greeting that takes a greeting message as a parameter and returns a new function that takes a name as a parameter and prints the greeting message with the name.

How to test:

var dayGreeting = greeting('Good morning');
var nightGreeting = greeting('Good evening');

var name = 'Art';

console.log(dayGreeting(name)); // 'Good morning, Art!'
console.log(nightGreeting(name)); // 'Good evening, Art!’


	Solution:

	

var name = 'Art';

function greeting(parameter) {
  var value;
  if (parameter === 'Good morning') {
   value = function (name) {
     return 'Good morning' + ' ' + name;
   };
   return value;
  }
  
  if (parameter === 'Good evening') {
   value = function (name) {
     return 'Good evening' + ' ' + name;
   };
   return value;
  }
  
  return value();
}

var dayGreeting = greeting('Good morning');
var nightGreeting = greeting('Good evening');

console.log(dayGreeting(name)); // 'Good morning, Art!'
console.log(nightGreeting(name)); // 'Good evening, Art!' 