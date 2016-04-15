
//callback pattern
function sendMessage(message, callMeWhenDone) {
	setTimeout(function sendingMessage() {
		console.log(message);
		callMeWhenDone();
	}, 1000);
}


sendMessage('Everything works', function callback1() {
	sendMessage('not Everything', function callback2() {
		sendMessage('works', function callback3() {
			sendMessage('for you', function callback4() {});

		});
	});
});