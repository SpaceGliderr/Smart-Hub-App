import firebase from "firebase";

// TODO: Do not hardcode these variables, put them into a development env file
var firebaseConfig = {
  apiKey: "AIzaSyDQulKbAIG-d8EumeSLHD5R-DZibVpaDFE",
  authDomain: "smart-hub-app.firebaseapp.com",
  databaseURL: "https://smart-hub-app.firebaseio.com",
  projectId: "smart-hub-app",
  storageBucket: "smart-hub-app.appspot.com",
  messagingSenderId: "726373454968",
  appId: "1:726373454968:web:1bf920a6c4edd6c41f898d",
  measurementId: "G-BV8VVVYK6S",
};

// Initialize Firebase - Firebase Analytics not needed at the moment
try {
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error: ", err.stack);
  }
}

export const fb = firebase;
export const db = firebase.firestore();
