
//AÑADE TUS ENLACES DE FIREBASE
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCj752ifQJB3uPfP6u_JywDjoFHhfCiBNA",
authDomain: "redsocial-1f84d.firebaseapp.com",
databaseURL: "https://redsocial-1f84d-default-rtdb.firebaseio.com/",
projectId: "redsocial-1f84d",
storageBucket: "redsocial-1f84d.appspot.com",
messagingSenderId: "198439734271",
appId: "1:198439734271:web:7a33ed4c96aa8407b5f5ca"
      };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="¡hola " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("room name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();

function add_room(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"nombre de la sala añadida"
});
localStorage.setItem("room_name" , room_name);
window.location="kwitter_page.html";}
function RedirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}