import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDjltVsaUKuuQ0eZub04aFXXoW3lAnx_vI",
    authDomain: "pharmacy-1c40f.firebaseapp.com",
    projectId: "pharmacy-1c40f",
    storageBucket: "pharmacy-1c40f.appspot.com",
    messagingSenderId: "323831762861",
    appId: "1:323831762861:web:1dad07a4ef6b525ab85b24",
    measurementId: "G-T3D8PSPZTX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;