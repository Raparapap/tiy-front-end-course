function sendPostRequest(success, failure) {
	setTimeout(function sendingMessage() {
		success();
		//failure()
	}, 1000)
}


module.exports = {
	sendPostRequest: sendPostRequest
}