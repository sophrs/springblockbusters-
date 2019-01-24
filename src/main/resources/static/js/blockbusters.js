//let requestURL = "http://127.0.0.1:8080/api/films";
//let request = new XMLHttpRequest();
//request.open('GET', requestURL);
//request.setRequestHeader("Content-Type", "application/json");
//request.setRequestHeader("Access-Control-Allow-Origin","*");
//request.responseType = 'json'
//request.send();
//request.onload = function() {
  //  let requestData = request.response;
   //document.getElementById("hey").innerHTML= requestData[1].title;
//}
let filmList = [];

function joinDatabase(){
    let requestURL = "http://127.0.0.1:8080/api/films";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Access-Control-Allow-Origin","*");
    request.responseType = 'json'
    request.send();
    request.onload = function(){
        filmList = request.response;
    }
}



function searchTitles(film){ 
    document.getElementById("hey").innerHTML = "";
    for(i = 0; i<filmList.length; i++){
        if(filmList[i].title.includes(film.value.toUpperCase())){
            document.getElementById("hey").innerHTML += filmList[i].title + "<br>";
            
        }
    } 
}

function searchCategories(category){ 
    
    document.getElementById("hi").innerHTML = "";
    for(i = 0; i<filmList.length; i++){
       if(filmList[i].category.toUpperCase().includes(category.value.toUpperCase())){
          document.getElementById("hi").innerHTML += filmList[i].title + "<br>";
            
        }
    }
}



