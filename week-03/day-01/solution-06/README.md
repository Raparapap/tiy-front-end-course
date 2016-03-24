Write iterateList function that takes an array and a function and for each item in that array it calls the function and passes array's item as a parameter.

How to test:

iterateList([1, 2, 3, 4, 5], function (listItem) {
  console.log(listItem);
});


Solution: 


function iterateList(myArray, myFunction) {
		
	myFunction(myArray);
	
}


iterateList([1,4,5], function (listItem) {
  console.log(listItem);
})