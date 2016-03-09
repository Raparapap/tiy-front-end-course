Create a JavaScript object that has a property which you can access like this:

message.explained.translated.comments;

					Solution:
						
						
				var message = {
				  explained : 
				              {translated: 
				               
				               {comments:1}
				              
				              }
				  
				};

				console.log(message.explained.translated.comments);