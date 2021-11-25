var firebaseConfig = {
      apiKey: "AIzaSyDuhODyGt8PWgBSrwFolxT7Fmiw9ByFTSI",
      authDomain: "kwitter-social-website-ea3cc.firebaseapp.com",
      databaseURL: "https://kwitter-social-website-ea3cc-default-rtdb.firebaseio.com",
      projectId: "kwitter-social-website-ea3cc",
      storageBucket: "kwitter-social-website-ea3cc.appspot.com",
      messagingSenderId: "499736750283",
      appId: "1:499736750283:web:9fd1e2634e10e71c40934e"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

         console.log("room_name - " +Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>#" +Room_names+ "</div><hr>";
         document.getElementById("output").innerHTML += row;

      });});}
getData();

function addRoom() {

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";

}

function RedirectToRoomName(name) {

       console.log(name);

       localStorage.setItem("room_name" , name);

       window.location = "kwitter_page.html";

}

function logout() {

       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";

}
