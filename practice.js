//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDqAue-EvYSvvIgCHF2cp3oFKY1lwUKecE",
    authDomain: "kwitter-2a4dc.firebaseapp.com",
    databaseURL: "https://kwitter-2a4dc-default-rtdb.firebaseio.com",
    projectId: "kwitter-2a4dc",
    storageBucket: "kwitter-2a4dc.appspot.com",
    messagingSenderId: "657987380575",
    appId: "1:657987380575:web:a5b61dba8075fc4577c2ea"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Adding User"
    });
}