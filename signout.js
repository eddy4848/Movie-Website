// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDdutsrDFlAG9WpzYW4bbwI2bbu0pvt47A",
    authDomain: "reny-5ed93.firebaseapp.com",
    projectId: "reny-5ed93",
    storageBucket: "reny-5ed93.appspot.com",
    messagingSenderId: "36773305815",
    appId: "1:36773305815:web:265c23e9265e6ef415bf92"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  auth.onAuthStateChanged(function (user){
    if (user){
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);

    }
    else {
        alert("you have been logged out");
        // window.location = "l.html"
    }
  })

//   logout funtion

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("ghhsd")
    auth.signOut();
    // alert("signed outdsdsd")
    window.location = "index.html"
})

 