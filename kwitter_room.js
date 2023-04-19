
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAYqLsoNSM28iIBR-PApDHcd4jFMCkl6IE",
      authDomain: "kwitter-final-16c55.firebaseapp.com",
      projectId: "kwitter-final-16c55",
      databaseURL: "https://kwitter-final-16c55-default-rtdb.firebaseio.com",
      storageBucket: "kwitter-final-16c55.appspot.com",
      messagingSenderId: "98710535673",
      appId: "1:98710535673:web:56ce5833fbfb645d6c5128",
      measurementId: "G-CRKPCVC6PE"
};

user_name = localStorage.getItem("user_name");

document.getElementById("room_name").innerHTML = " welcome " + user_name + " | ";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function getData() { firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } getData();
