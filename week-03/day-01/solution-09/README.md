
function mergeArrays(myArray1, myArray2) {
	for(var iterator = 0; iterator < myArray1.length; iterator++){
		myArray1[iterator] = [myArray1[iterator], myArray2[iterator]];
	}
	
	return myArray1;
}

mergeArrays([1,2,3], ['a', 'b', 'c']); // returns [[1, a], [2, b], [3, c]];