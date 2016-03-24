Write filterList function that takes an array of any values and returns a new array with only non-empty strings.

How to test:

filterList(); // returns: []
filterList([]); // returns: []
filterList(['', 78]); // returns: []
squareList([37, 'Welcome', [], 'back']); // returns: ['Welcome', 'back']

Solution:


function filterList(myArray) {
	var newArray = [];
		for(var iterator = 0; iterator < myArray.length; iterator++) {
			if(typeof myArray[iterator] === 'string') {
				newArray[iterator] = myArray[iterator];
			}
		} 
	return newArray;
}
filterList(); // returns: []
filterList([]); // returns: []
filterList(['', 78]); // returns: []
filterList([37, 'hello', [], 'back']); // returns: ['Welcome', 'back']
