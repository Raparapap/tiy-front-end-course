
	Solution:

/* 1. make a div
   2. make an image 
   4. append image to div
   5. set attribute to div - id
   6. set attribute to img - src for first image
   7. set interval
   8. set loop changing the src for the img attribute
   9. 


*/


  
  var images = [
  'http://valuestockphoto.com/freehighresimages/roast_veg_DSC2834.jpg',
  'http://valuestockphoto.com/freehighresimages/snowy_trees1995.jpg',
  'http://valuestockphoto.com/freehighresimages/nt_alice_springs140362.jpg',
  'http://valuestockphoto.com/freehighresimages/diwali_deepavali_DSC2292.jpg'
];
 

var divElement = document.createElement('div');
  
var imgElement = document.createElement('img');
  
document.body.appendChild(divElement);
  
divElement.appendChild(imgElement);
  
divElement.setAttribute('id', 'class');
  
imgElement.setAttribute('src', 'http://valuestockphoto.com/freehighresimages/roast_veg_DSC2834.jpg');

var slideShow = setInterval(slideShowFunction, 2000);
  
var iterator = 0; 

function slideShowFunction() {
  
   iterator = iterator + 1;

         if (iterator === images.length) {
             iterator = 0;
         }
   imgElement.setAttribute('src', images[iterator]);
}