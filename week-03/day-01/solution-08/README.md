Explain why undefined is logged and how to get the actual message logged:

var message = (function () {
  var message = 'Welcome';

  function getMessage(message) {
    return message;
  }

  return {
    getMessage: getMessage
  };
})();

console.log(message.getMessage());


Solution: 

var message = (function () {
  var message = 'Welcome';

  function getMessage() { // I removed the parameter "message" here because basically you are returning the variable "message" which is undefined. 
    return message;
  }

  return {
    getMessage: getMessage
  };
})();

console.log(message.getMessage());