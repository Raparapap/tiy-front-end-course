	window.onload = function myCalendar() {
		//creates the layout for the calendar!! 
		var calendarElement = document.createElement('div');
		calendarElement.setAttribute('class', 'calendar');
		document.body.appendChild(calendarElement);

		var monthBanner = document.createElement('div');
		var monthBannerTextElement = document.createTextNode('March 2016')
		monthBanner.setAttribute('class', 'month');
		monthBanner.appendChild(monthBannerTextElement);
		calendarElement.appendChild(monthBanner);


		//creates the names of the week line and puts names in it.
		var dayDiv = document.createElement('div');
		dayDiv.setAttribute('class', 'dayLine');
		calendarElement.appendChild(dayDiv);

		
		for(var iterator = 0; iterator < 7; iterator++) {
			var dayNamesOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
		    var dayNameBox = document.createElement('div');
		    var dayNameTextElement = document.createTextNode(dayNamesOfTheWeek[iterator]);
		    dayNameBox.setAttribute('class', 'dayBox');
		    dayNameBox.appendChild(dayNameTextElement);
		    dayDiv.appendChild(dayNameBox);
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
		    var boxElement = document.getElementsByClassName('boxes')[z];
		    var boxElementTextNode = document.createTextNode(z);
		    boxElement.appendChild(boxElementTextNode);

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

		//adding the modal window function
		function modalWindowPopup(clickEvent){



			//layout for modalWindow
			var modalWindowDiv = document.createElement('div');
			var formElement = document.createElement('form');
			modalWindowDiv.appendChild(formElement);
			var textAreaElement = document.createElement('textarea');
			formElement.appendChild(textAreaElement);
			var textAreaTextElement = document.createTextNode('Write notes here.');
			textAreaElement.appendChild(textAreaTextElement);
			var buttonElement = document.createElement('button');
			formElement.appendChild(buttonElement);
			var buttonElementTextElement = document.createTextNode('Finshed');
			buttonElement.appendChild(buttonElementTextElement);
			document.querySelector('body').appendChild(modalWindowDiv);


			//setting attributes for the elements

			modalWindowDiv.setAttribute('class', 'modalWindow')

			textAreaElement.setAttribute('rows', '20');
			textAreaElement.setAttribute('cols', '50');

			//sets attribute to clicked target
			(clickEvent.target).setAttribute('class', 'clicked');

			//removes event listener while the modal window is up. 
			numBoxes.removeEventListener('click', modalWindowPopup, false);


			return clickEvent.target;

		}


		//adding event listener to the calendar
		numBoxes.addEventListener("click", modalWindowPopup, false);


	}


