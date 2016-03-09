Replace this:

<div>
  <p id="latest"><strong>Friday</strong> is finally here.</p>
  <p>In addition the weather is sunny today.</p>
</div>
With this using JavaScript:

<div>
  <p id="latest">Monday is finally here.</p>
  <p>In addition the weather is sunny today.</p>
</div>


	Solution:


	
var firstLine = document.getElementById('latest');
var selectingP = document.querySelector('div').lastChild;
selectingP.setAttribute('id', 'last');


firstLine.textContent = "Monday is finally here.";

var secondLine = document.getElementById('last');
    
secondLine.textContent = "In addition the weather is sunny today.";