const firebaseConfig = {
    apiKey: "AIzaSyCCsrxHDLQ6CvW889g_7lLAzQodPpr1S8M",
    authDomain: "my-signin-or-signup-page.firebaseapp.com",
    projectId: "my-signin-or-signup-page",
    storageBucket: "my-signin-or-signup-page.appspot.com",
    messagingSenderId: "127819700520",
    appId: "1:127819700520:web:141488775edfddebaa581d"
  };

  var firebase = firebase.initializeApp(firebaseConfig);
  function getValue()
  {
      var email = document.getElementById("email");
      var password = document.getElementById("pass");

      console.log(email.value)
     
      firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    alert("Your Email Succesfully Verified")
  });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
  email.value = "";
  password.value = "";
}

// ***************************SignIn Email***********************


function getLogin(){
  var email = document.getElementById("Useremail")
  var password = document.getElementById("Userpass")
  
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
  email.value = "";
  password.value = "";
}

//**************************Forgot Password Auth************************* */

function forgotpass(){
  var Useremail = document.getElementById("Useremail")
  firebase.auth().sendPasswordResetEmail(Useremail.value)
  .then(() => {
    alert("Open Your Gmail")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}


//**********************************Google Authentication******************** */

function GoogleloginAuth(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    var token = credential.accessToken;
    var user = result.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    var credential = error.credential;
  });
}