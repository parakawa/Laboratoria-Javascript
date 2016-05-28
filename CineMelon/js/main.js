

$(function(){
  $("#seleccion").on("change",seleccion)

 })

function filtrado(filtro) {
    var xhr = new XMLHttpRequest();
    var data = [];
    document.getElementById("lista").innerHTML = "";

        

    xhr.open('GET', encodeURI('http://api.themoviedb.org/3/movie/'+filtro+'?api_key=12865ae0cb6774f79f4732530a443938'));
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
            data.push(xhr.responseText);
            var mydata = JSON.parse(data);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
      

        for (i in mydata.results) {
            var movies_title = mydata.results[i].original_title;
           

            //document.getElementById("result").appendChild("result") = (mydata.results[i].original_title + "<br />");

            var div = document.createElement('div')
            div.className = "col-xs-12 col-sm-4 col-md-3 text-center";
            var a = document.createElement('a');
            a.setAttribute('href', 'pelicula.html');
            var img = document.createElement('img');
            img.setAttribute('src', 'http://image.tmdb.org/t/p/w185/'+ mydata.results[i].poster_path);
            var h4 = document.createElement('h4');
            var title = document.createTextNode(movies_title);
            h4.appendChild(title);
            a.appendChild(img);
            a.appendChild(h4);
            div.appendChild(a);
            document.getElementById("lista").appendChild(div);


        }
        //document.getElementById("result").innerHTML = mydata;
    };
    xhr.send();
};

function baseUrl_Image() {

    var xhr = new XMLHttpRequest();
    var data = [];
    document.getElementById("result").innerHTML = 'BaseURL';
    xhr.open('GET', encodeURI('http://api.themoviedb.org/3/configuration?api_key=12865ae0cb6774f79f4732530a443938'));
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
            data.push(xhr.responseText);
            var mydata = JSON.parse(data);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }

        movies_image_url = mydata.images.base_url;
  
        movies_posters_sizes = mydata.images.poster_sizes[2];
   
    };
    xhr.send();
    //return movies_image_url;
};

function seleccion(){
	var eleccion=$("#seleccion").val()
	switch(eleccion){
    case "popular":
          filtrado('popular')       
          break;
    case "top":
          filtrado('top_rated')     
          break;
    case "upcoming":
          filtrado('upcoming')      
          break;
    case "now-playing":
          filtrado('now_playing')      
          break;
    default: 
          alert("Selecciona una categoría")
           }
}
