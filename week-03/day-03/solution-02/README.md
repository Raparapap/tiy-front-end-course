Access the text node and log it's value:

		<div>
 		 <p>JavaScript is pretty powerful.</p>
		</div>

	Solution:
			var x = document.querySelector('p').firstChild;
				console.log(x.nodeValue);
