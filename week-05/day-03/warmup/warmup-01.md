var getMessage = function () {
  console.log('Comment:' + this.message);
};

var comments = [
  {
    message: 'Yesterday'
  },
  {
    message: 'Today'
  },
  {
    message: 'Tomorrow'
  }
];




function logComments(myArray,myFunction) {
  var iterator;
  for (iterator = 0; iterator < myArray.length; iterator = iterator + 1) {
    myFunction.call(myArray[iterator]);
  }
  
}



// console.log(comments[0].message);


logComments(comments, getMessage);
// // Yesterday
// // Today
// // Tomorrow