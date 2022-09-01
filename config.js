import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAYua6Ncwdv6F3pyTAODIqThrgFsXiJq5U",
  authDomain: "clase78-9b5c0.firebaseapp.com",
  projectId: "clase78-9b5c0",
  storageBucket: "clase78-9b5c0.appspot.com",
  messagingSenderId: "568840520028",
  appId: "1:568840520028:web:135922ea39e37753170199"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


