var slideShow = setInterval(slideShowFunction, 2000);
  
var iterator = 0; 

function slideShowFunction() {
  
   iterator = iterator + 1;

         if (iterator === images.length) {
             iterator = 0;
         }
   mainPhotoElement.setAttribute('src', images[iterator]);


}



var thumbnailElements = document.getElementsByClassName('thumbnail');


for (counter = 0; counter < thumbnailElements.length; counter = counter + 1) {

   		if(counter === thumbnailElements.length) {
   		counter = 0;
   		}
   		
   		thumbnailElements[counter].setAttribute('class', 'highlighted')
   		thumbnailElements[counter - 1].setAttribute('class', 'thumbnail')


   	
   	}