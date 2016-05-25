// format movie data that gets passed into getData
var formatMovieData = function(data) {
	$('#title').text(data.Title);
	$('#plot').text(data.Plot);
	$('#img').attr("src",data.Poster);
	
	
}


// test ajax request to OMDB server 
var getData = function() {
	// key-value pairs being requested from api server
	var request = {
		// y:'2016',
		type: 'movie',
		t:'3 idiots',
		r: 'json',
	}

	// ajax method to return the data 
	$.ajax({
		url: 'http://www.omdbapi.com/', // url to access for the ajax request and will add request parameters to html as endpoints
		data: request, // data being requested from omdb api 
		type: 'GET', // want to get data from omdb api 

	})
	// if request is successful, run this function 
	.done(function(result0fRequest) {
		
		$('.results').append(formatMovieData(result0fRequest));

	})
	
}

getData();