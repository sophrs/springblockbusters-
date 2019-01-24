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

//function joinDatabase(){
    let requestURL = "http://192.168.1.123:8080/api/films";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Access-Control-Allow-Origin","*");
    request.responseType = 'json'
    request.send();
    request.onload = function(){
        filmList = request.response;
    }
//}



function searchTitles(film){ 
    document.getElementById("hey").innerHTML = "";
    for(i = 0; i<filmList.length; i++){
        if(filmList[i].title.includes(film.value.toUpperCase())){
            document.getElementById("hey").innerHTML += filmList[i].title + "<br>";
            
        }
    } 
}

// function searchTitles(film){
//     document.getElementById("hey").innerHTML = "HELLO THERE!!!!"
// }

function searchCategories(category){ 
    
    document.getElementById("hi").innerHTML = "";
    for(i = 0; i<filmList.length; i++){
       if(filmList[i].category == "Comedy"){
          document.getElementById("hi").innerHTML += filmList[i].title + "<br>";
            
        }
    }
}

function listComedies(){

    for(i = 0; i<filmList.length; i++){
        if(filmList[i].category == "Comedy"){
        document.getElementById("Comedy").innerHTML += filmList[i].title + "<br>"
    }

}
}

function listHorrors(){

    for(i = 0; i<filmList.length; i++){
        if(filmList[i].category == "Horror"){
        document.getElementById("Horror").innerHTML += filmList[i].title + "<br>"
    }

}
}
function listDocumentarys(){

    for(i = 0; i<filmList.length; i++){
        if(filmList[i].category == "Documentary"){
        document.getElementById("Documentary").innerHTML += filmList[i].title + "<br>"
    }

}
}

function listActions(){

    for(i = 0; i<filmList.length; i++){
        if(filmList[i].category == "Action"){
        document.getElementById("Action").innerHTML += filmList[i].title + "<br>"
    }

}
}
function listSciFi(){

    for(i = 0; i<filmList.length; i++){
        if(filmList[i].category == "Sci-Fi"){
        document.getElementById("SciFi").innerHTML += filmList[i].title + "<br>"
    }

}
}

function listFamilys(){

    for(i = 0; i<filmList.length; i++){
        if(filmList[i].category == "Family"){
        document.getElementById("Family").innerHTML += filmList[i].title + "<br>"
    }

}
}

function getallinfo(film){
     document.getElementById("hey").innerHTML = "";
    for(i = 0; i<filmList.length; i++){
        if(filmList[i].title.includes(film.value.toUpperCase())){
            document.getElementById("hey").innerHTML += filmList[i].title + "<br>" + filmList[i].description + "<br>" + "Length: " + filmList[i].length + "<br>" + "Rating:" + filmList[i].rating + "<br>" + "<br>";
            


}}}
