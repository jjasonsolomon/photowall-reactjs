import * as firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "*******", //masked
    authDomain: "*****", //masked
    databaseURL: "***", //masked
    projectId: "photowall-reactjs7",
    storageBucket: "photowall-reactjs7.appspot.com",
    messagingSenderId: "872459625496",
    appId: "1:872459625496:web:99373bff46b2032b808f6d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()

  export {database}
  


