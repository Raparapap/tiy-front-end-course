
//callback pattern
function sendMessage(message) {

	return new Promise(function (resolve, reject) {

		setTimeout(function sendingMessage() {
			console.log(message);
			resolve();
		}, 1000);
	});
}






sendMessage('Everything works').then(sendMessage2);

function sendMessage2() {
 sendMessage('not Everything').then(sendMessage3);
}

function sendMessage3() {
 sendMessage('works').then(sendMessage4);
}

function sendMessage4() {
sendMessage('for you').then(finished);
}

function finished() {}