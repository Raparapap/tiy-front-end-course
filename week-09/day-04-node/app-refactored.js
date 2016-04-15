
//callback pattern
function sendMessage(message, callMeWhenDone) {
	setTimeout(function sendingMessage() {
		console.log(message);
		callMeWhenDone();
	}, 1000);
}



sendMessage('Everything works', sendMessage2);

function sendMessage2() {
 sendMessage('not Everything', sendMessage3);
}

function sendMessage3() {
 sendMessage('works', sendMessage4)
}

function sendMessage4() {
sendMessage('for you', finished);
}

function finished() {}