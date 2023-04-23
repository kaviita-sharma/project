
function signUpForm(){
    document.getElementById("loginForm").style.display="block";
}

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function logInUser(){
  var first= document.getElementById("fname");
  var last=document.getElementById("lname");
  alert("Enter");
  document.getElementById("mainHeader").style.display="hidden";
  document.getElementById("name").write(first+last);
}

