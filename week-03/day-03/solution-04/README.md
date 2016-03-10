 Convert all list item text to links:

	<ul>
  	<li>London</li>
  	<li>Paris</li>
  	<li>New York</li>
	</ul>


	Solution:

	var liElementsFirst = document.querySelectorAll('li')[0];

	var liElementsSecond = document.querySelectorAll('li')[1];

	var liElementsThird = document.querySelectorAll('li')[2];
	

	liElementsFirst.innerHTML = '<a href =\"http://somewebsite.com\">  London  </a>';

	liElementsSecond.innerHTML = '<a href =\"http://somewebsite.com\">  Paris </a>';

	liElementsThird.innerHTML = '<a href =\"http://somewebsite.com\">  New York </a>';
