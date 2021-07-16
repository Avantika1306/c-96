var firebaseConfig = {
    apiKey: "AIzaSyCRzjUAFAr6_Mfn12HOmp9AT7EAe0tqOPQ",
    authDomain: "practice-29f49.firebaseapp.com",
    databaseURL: "https://practice-29f49-default-rtdb.firebaseio.com",
    projectId: "practice-29f49",
    storageBucket: "practice-29f49.appspot.com",
    messagingSenderId: "281651035411",
    appId: "1:281651035411:web:6cbd77f8f07a9b8c79aee6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function send() {
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
 });
 document.getElementById("msg").value="";
 
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();