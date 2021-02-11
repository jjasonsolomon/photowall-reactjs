import * as firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAGzv0BjITPqZdiV6UtIZ7ch7KxE8N_NOs",
    authDomain: "photowall-reactjs7.firebaseapp.com",
    databaseURL: "https://photowall-reactjs7-default-rtdb.firebaseio.com",
    projectId: "photowall-reactjs7",
    storageBucket: "photowall-reactjs7.appspot.com",
    messagingSenderId: "872459625496",
    appId: "1:872459625496:web:99373bff46b2032b808f6d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()

  export {database}
  


