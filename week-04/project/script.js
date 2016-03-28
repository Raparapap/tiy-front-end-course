window.onload = function myCalendar() {
	//creates the layout for the calendar!! 
	var calendarElement = document.createElement('div');
	calendarElement.setAttribute('class', 'calendar');
	document.body.appendChild(calendarElement);

	var monthBanner = document.createElement('div');
	monthBanner.setAttribute('class', 'month');
	calendarElement.appendChild(monthBanner);
	monthBanner.innerHTML = "<h1> March 2016</h1>";

	var dayDiv = document.createElement('div');
	dayDiv.setAttribute('class', 'dayLine');
	calendarElement.appendChild(dayDiv);



	//creates the names of the week line and puts names in it.
	for(var iterator = 0; iterator < 7; iterator++) {
		var dayNamesOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	    var dayNameBox = document.createElement('div');
	    dayNameBox.setAttribute('class', 'dayBox');
	    dayDiv.appendChild(dayNameBox);
	    dayNameBox.innerHTML = dayNamesOfTheWeek[iterator];
	}


	//creates the date boxes and puts the number in them
	var numBoxes = document.createElement('div');
	numBoxes.setAttribute('class', 'numberLines');
	calendarElement.appendChild(numBoxes);


	for(var index = 0; index < 42; index++) {
    var dateBox = document.createElement('div');
    dateBox.setAttribute('class', 'boxes')
    numBoxes.appendChild(dateBox);

	}


	for(var z = 1; z < 32; z++) {
	    document.getElementsByClassName('boxes')[z].innerHTML = '<p>' + z + '</p>';
	}


	//gets the date today 
	var today = new Date().getDate();
	var value = today.toString();
	console.log(value);

	//for loop that iterates allover the dateboxes and finds the box with the same text content as the date value and highlights it. 
	for(var x = 0; x < document.getElementsByClassName('boxes').length; x++){
		if (document.getElementsByClassName('boxes')[x].textContent === value){
        document.getElementsByClassName('boxes')[x].setAttribute('class', 'highlighted');
		}
	}
}


