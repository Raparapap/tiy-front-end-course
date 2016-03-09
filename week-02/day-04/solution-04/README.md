
Convert this function into Immediately Invoked Function Expression (IIFE):

function getMessageLength(message) {
  return message.length;
}

			Solution:

			(function getMessageLength(message) {
		  return message.length;
		}) ()
