Given this HTML, add first class to the first element in the list and last class to the last element in the list using JavaScript:

<ul>
  <li>London</li>
  <li>Paris</li>
  <li>Tokyo</li>
  <li>New York</li>
</ul>

	Solution:

	<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  
  <style>
.first {
  background-color: red;
}

.last {
  background-color: red;
}
  </style>
</head>
<body> 

<ul
  ><li>London</li
  ><li>Paris</li
  ><li>Tokyo</li
  ><li>New York</li
></ul>

  <script>
    var hello =     document.querySelector('ul').firstChild;
var world = document.querySelector('ul').lastChild;



hello.setAttribute('class', 'first');

world.setAttribute('class', 'last');
  

    
    
  </script>
  
</body>
</html>