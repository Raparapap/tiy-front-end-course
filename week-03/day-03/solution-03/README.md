Log all the text:
	
	<div>
	  <p><em>JavaScript</em> is pretty <strong>powerful</strong>.</p>
	</div>
	

	Solution: 
		var qwerty = document.querySelector('div').firstChild.textContent;
		console.log(qwerty);
