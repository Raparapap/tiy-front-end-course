window.onload = function myCalendar() {
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

					var mondayBox = document.createElement('div');
					mondayBox.setAttribute('class', 'dayBox')
					dayDiv.appendChild(mondayBox);
					mondayBox.innerHTML = "<h2> Monday </h2>";

					var tuesdayBox = document.createElement('div');
					tuesdayBox.setAttribute('class', 'dayBox')
					dayDiv.appendChild(tuesdayBox);
					tuesdayBox.innerHTML = "<h2> Tuesday </h2>";

					var wednesdayBox = document.createElement('div');
					wednesdayBox.setAttribute('class', 'dayBox')
					dayDiv.appendChild(wednesdayBox);
					wednesdayBox.innerHTML = "<h2> Wednesday </h2>";

					var thursdayBox = document.createElement('div');
					thursdayBox.setAttribute('class', 'dayBox')
					dayDiv.appendChild(thursdayBox);
					thursdayBox.innerHTML = "<h2> Thursday </h2>";

					var fridayBox = document.createElement('div');
					fridayBox.setAttribute('class', 'dayBox')
					dayDiv.appendChild(fridayBox);
					fridayBox.innerHTML = "<h2> Friday </h2>";

					var saturdayBox = document.createElement('div');
					saturdayBox.setAttribute('class', 'dayBox')
					dayDiv.appendChild(saturdayBox);
					saturdayBox.innerHTML = "<h2> Saturday </h2>";

					var sundayBox = document.createElement('div');
					sundayBox.setAttribute('class', 'dayBox')
					dayDiv.appendChild(sundayBox);
					sundayBox.innerHTML = "<h2> Sunday </h2>";

								var numBoxes = document.createElement('div');
								numBoxes.setAttribute('class', 'numberLines');
								calendarElement.appendChild(numBoxes);

								var boxOne = document.createElement('div');
								boxOne.setAttribute('class', 'boxOne boxes');
								numBoxes.appendChild(boxOne);
								boxOne.innerHTML = ""

								var boxTwo = document.createElement('div');
								boxTwo.setAttribute('class', 'boxTwo boxes 1');
								numBoxes.appendChild(boxTwo);
								boxTwo.innerHTML = "1"

								var boxThree = document.createElement('div');
								boxThree.setAttribute('class', 'boxThree boxes 2');
								numBoxes.appendChild(boxThree);
								boxThree.innerHTML = "2"

								var boxFour = document.createElement('div');
								boxFour.setAttribute('class', 'boxFour boxes 3');
								numBoxes.appendChild(boxFour);
								boxFour.innerHTML = "3"

								var boxFive = document.createElement('div');
								boxFive.setAttribute('class', 'boxFive boxes 4');
								numBoxes.appendChild(boxFive);
								boxFive.innerHTML = "4"

								var boxSix = document.createElement('div');
								boxSix.setAttribute('class', 'boxSix boxes 5');
								numBoxes.appendChild(boxSix);
								boxSix.innerHTML = "5"

								var boxSeven = document.createElement('div');
								boxSeven.setAttribute('class', 'boxSeven boxes 6');
								numBoxes.appendChild(boxSeven);
								boxSeven.innerHTML = "6"

								var boxEight = document.createElement('div');
								boxEight.setAttribute('class', 'boxEight boxes 7');
								numBoxes.appendChild(boxEight);
								boxEight.innerHTML = "7"

								var boxNine = document.createElement('div');
								boxNine.setAttribute('class', 'boxNine boxes 8');
								numBoxes.appendChild(boxNine);
								boxNine.innerHTML = "8"

								var boxTen = document.createElement('div');
								boxTen.setAttribute('class', 'boxTen boxes 9');
								numBoxes.appendChild(boxTen);
								boxTen.innerHTML = "9"

								var boxEleven = document.createElement('div');
								boxEleven.setAttribute('class', 'boxEleven boxes 10');
								numBoxes.appendChild(boxEleven);
								boxEleven.innerHTML = "10"

								var boxTwelve = document.createElement('div');
								boxTwelve.setAttribute('class', 'boxTwelve boxes 11');
								numBoxes.appendChild(boxTwelve);
								boxTwelve.innerHTML = "11"

								var boxThirteen = document.createElement('div');
								boxThirteen.setAttribute('class', 'boxThirteen boxes 12');
								numBoxes.appendChild(boxThirteen);
								boxThirteen.innerHTML = "12"

								var boxFourteen = document.createElement('div');
								boxFourteen.setAttribute('class', 'boxFourteen boxes 13');
								numBoxes.appendChild(boxFourteen);
								boxFourteen.innerHTML = "13"

								var boxFifteen = document.createElement('div');
								boxFifteen.setAttribute('class', 'boxFifteen boxes 14');
								numBoxes.appendChild(boxFifteen);
								boxFifteen.innerHTML = "14"

								var boxSixteen = document.createElement('div');
								boxSixteen.setAttribute('class', 'boxSixteen boxes 15');
								numBoxes.appendChild(boxSixteen);
								boxSixteen.innerHTML = "15"

								var boxSeventeen = document.createElement('div');
								boxSeventeen.setAttribute('class', 'boxSeventeen boxes 16');
								numBoxes.appendChild(boxSeventeen);
								boxSeventeen.innerHTML = "16"

								var boxEighteen = document.createElement('div');
								boxEighteen.setAttribute('class', 'boxEighteen boxes 17');
								numBoxes.appendChild(boxEighteen);
								boxEighteen.innerHTML = "17"

								var boxNineteen = document.createElement('div');
								boxNineteen.setAttribute('class', 'boxNineteen boxes 18');
								numBoxes.appendChild(boxNineteen);
								boxNineteen.innerHTML = "18"

								var boxTwenty = document.createElement('div');
								boxTwenty.setAttribute('class', 'boxTwenty boxes 19');
								numBoxes.appendChild(boxTwenty);
								boxTwenty.innerHTML = "19"

								var boxTwentyOne = document.createElement('div');
								boxTwentyOne.setAttribute('class', 'boxTwentyOne boxes 20');
								numBoxes.appendChild(boxTwentyOne);
								boxTwentyOne.innerHTML = "20"

								var boxTwentyTwo = document.createElement('div');
								boxTwentyTwo.setAttribute('class', 'boxTwentyTwo boxes 21');
								numBoxes.appendChild(boxTwentyTwo);
								boxTwentyTwo.innerHTML = "21"

								var boxTwentyThree = document.createElement('div');
								boxTwentyThree.setAttribute('class', 'boxTwentyThree boxes 22');
								numBoxes.appendChild(boxTwentyThree);
								boxTwentyThree.innerHTML = "22"

								var boxTwentyFour = document.createElement('div');
								boxTwentyFour.setAttribute('class', 'boxTwentyFour boxes 23');
								numBoxes.appendChild(boxTwentyFour);
								boxTwentyFour.innerHTML = "23"

								var boxTwentyFive = document.createElement('div');
								boxTwentyFive.setAttribute('class', 'boxTwentyFive boxes 24');
								numBoxes.appendChild(boxTwentyFive);
								boxTwentyFive.innerHTML = "24"

								var boxTwentySix = document.createElement('div');
								boxTwentySix.setAttribute('class', 'boxTwentySix boxes 25');
								numBoxes.appendChild(boxTwentySix);
								boxTwentySix.innerHTML = "25"

								var boxTwentySeven = document.createElement('div');
								boxTwentySeven.setAttribute('class', 'boxTwentySeven boxes 26');
								numBoxes.appendChild(boxTwentySeven);
								boxTwentySeven.innerHTML = "26"

								var boxTwentyEight = document.createElement('div');
								boxTwentyEight.setAttribute('class', 'boxTwentyEight boxes 27');
								numBoxes.appendChild(boxTwentyEight);
								boxTwentyEight.innerHTML = "27"

								var boxTwentyNine = document.createElement('div');
								boxTwentyNine.setAttribute('class', 'boxTwentyNine boxes 28');
								numBoxes.appendChild(boxTwentyNine);
								boxTwentyNine.innerHTML = "28"

								var boxThirty = document.createElement('div');
								boxThirty.setAttribute('class', 'boxThirty boxes 29');
								numBoxes.appendChild(boxThirty);
								boxThirty.innerHTML = "29"

								var boxThirtyOne = document.createElement('div');
								boxThirtyOne.setAttribute('class', 'boxThirtyOne boxes 30');
								numBoxes.appendChild(boxThirtyOne);
								boxThirtyOne.innerHTML = "30"

								var boxThirtyTwo = document.createElement('div');
								boxThirtyTwo.setAttribute('class', 'boxThirtyTwo boxes 31');
								numBoxes.appendChild(boxThirtyTwo);
								boxThirtyTwo.innerHTML = "31"

								var boxThirtyThree = document.createElement('div');
								boxThirtyThree.setAttribute('class', 'boxThirtyThree boxes');
								numBoxes.appendChild(boxThirtyThree);
								boxThirtyThree.innerHTML = " "

								var boxThirtyFour = document.createElement('div');
								boxThirtyFour.setAttribute('class', 'boxThirtyFour boxes');
								numBoxes.appendChild(boxThirtyFour);
								boxThirtyFour.innerHTML = " "

								var boxThirtyFive = document.createElement('div');
								boxThirtyFive.setAttribute('class', 'boxThirtyFive boxes');
								numBoxes.appendChild(boxThirtyFive);
								boxThirtyFive.innerHTML = " "

								var boxThirtySix = document.createElement('div');
								boxThirtySix.setAttribute('class', 'boxThirtySix boxes');
								numBoxes.appendChild(boxThirtySix);
								boxThirtySix.innerHTML = " "

								var boxThirtySeven = document.createElement('div');
								boxThirtySeven.setAttribute('class', 'boxThirtySeven boxes');
								numBoxes.appendChild(boxThirtySeven);
								boxThirtySeven.innerHTML = " "

								var boxThirtyEight = document.createElement('div');
								boxThirtyEight.setAttribute('class', 'boxThirtyEight boxes');
								numBoxes.appendChild(boxThirtyEight);
								boxThirtyEight.innerHTML = " "

								var boxThirtyNine = document.createElement('div');
								boxThirtyNine.setAttribute('class', 'boxThirtyNine boxes');
								numBoxes.appendChild(boxThirtyNine);
								boxThirtyNine.innerHTML = " "

								var boxFourty = document.createElement('div');
								boxFourty.setAttribute('class', 'boxFourty boxes');
								numBoxes.appendChild(boxFourty);
								boxFourty.innerHTML = " "

								var boxFourtyOne = document.createElement('div');
								boxFourtyOne.setAttribute('class', 'boxFourtyOne boxes');
								numBoxes.appendChild(boxFourtyOne);
								boxFourtyOne.innerHTML = " "

								var boxFourtyTwo = document.createElement('div');
								boxFourtyTwo.setAttribute('class', 'boxFourtyTwo boxes');
								numBoxes.appendChild(boxFourtyTwo);
								boxFourtyTwo.innerHTML = " "





var today = new Date().getDate();
var value = today.toString();
console.log(value);

var boxElement = document.getElementsByClassName(today)[0];

console.log(boxElement);

boxElement.setAttribute('class', 'highlighted');





}