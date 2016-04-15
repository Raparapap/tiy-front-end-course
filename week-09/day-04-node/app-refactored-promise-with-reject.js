var Utilities = require('./utilities.js');


//callback pattern
function sendMessage(message) {

	return new Promise(function (resolve, reject) {

		if (message === 'Not Everything') {
			reject('bad message!')
			return
		};

		sendPostRequest(function sentMessage() {
			console.log(message);
			resolve();
		}, function failedToSendMessage() {
			console.log('failed to send message!');
			reject();
			}
	});
}


sendMessage('Everything works')
	.then(sendMessage2, onRejected)
	.catch(onRejected)
	.then(sendMessage3)
	.then(sendMessage4)
	.then(finished);

function sendMessage2() {
  return sendMessage('not Everything');
}

function sendMessage3() {
 return sendMessage('works')
}

function sendMessage4() {
return sendMessage('for you')
}

function finished() {}

function onRejected(reason) {
	console.log('error:', reason)
}