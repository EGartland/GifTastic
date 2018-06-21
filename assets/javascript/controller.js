var controller = {

	topicButtonClick: () => {
	 	$("body").on("click", ".topic-button", function() {
	      var dogs = $(this).text();
	      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
	        dogs + "&api_key=sjlzOWfub3JnEJXJodGfuqMHMvSFdAfN";

	      $.ajax({
	        url: queryURL,
	        method: "GET"
	      }).done(function(response) {

	      	$('.gif-display').empty();

	      	var results = response.data;

	      	console.log(results)

	      	for (var i = 0; i < results.length; i++) {


	      		var gifDiv = $('<div>');
	      		gifDiv.addClass('col-4 gif-div');

	      		var rated = $('<p>');
	      		rated.addClass('rating');

	      	
	      		rated.text("rated: "+results[i].rating);

	    
	      		var gifImage = $('<img>')

	      		gifImage.attr("src", results[i].images.fixed_height_still.url);
	      		gifImage.attr("gif-still", results[i].images.fixed_height_still.url);
	      		gifImage.attr("gif-animate", results[i].images.fixed_height.url);
	      		gifImage.attr("gif-state", "still")
	      		gifImage.addClass('image-gif');

	      		gifDiv.prepend(rated);

	      		gifDiv.prepend(gifImage);

	      		$('.gif-display').append(gifDiv);
	      		
	      	}
	      	
	      	})

	    });
	},

	addTopicToArray: () => {
		$("body").on("click",".add-button", function() {
			// prevent form from submitting
      		event.preventDefault();

			var newTopic = $('#new-topic').val().trim();
			console.log(newTopic);
			topics.push(newTopic);
			$('#new-topic').val("");
			view.displayButtons();
		});

	},

	playGifs: () => {
		$("body").on("click", ".image-gif", function() {

			var state = $(this).attr("gif-state");
		  
		      if (state === "still") {
		        $(this).attr("src", $(this).attr("gif-animate"));
		        $(this).attr("gif-state", "animate");
		      } else {
		        $(this).attr("src", $(this).attr("gif-still"));
		        $(this).attr("gif-state", "still");
		      }

		});
	},

};