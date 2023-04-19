//YOUR FIREBASE LINKS
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
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";



}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey; message_data = childData;
                        console.log(firebase_message_id);
                        console.log(message_data);
                        names = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];



                        A1 = "<h4>" + names + "<img class = 'user_tick' src = 'tick.png'></h4>";
                        A2 = "<h4 class='message_h4'>" + message + "</h4>";
                        A3 = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + " onclick= 'updateLike(this.id)'>";
                        A4 = "<span class = 'glyphicon glyphcion-thumbps-up'"
                  }
            });
      });
} getData();