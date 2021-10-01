import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAOnyn1ezt-0gTsMQ1pybuW-4VUM9fQe08",
  authDomain: "insta-76025.firebaseapp.com",
  databaseURL: "https://insta-76025-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "insta-76025",
  storageBucket: "insta-76025.appspot.com",
  messagingSenderId: "1014329238969",
  appId: "1:1014329238969:web:dadd8bdc6e79898a4c4268"
  
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
