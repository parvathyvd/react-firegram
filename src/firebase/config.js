import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPG2XH4RSy0XvfjVEqTep85edu98ndoso",
  authDomain: "firegram-703bd.firebaseapp.com",
  projectId: "firegram-703bd",
  storageBucket: "firegram-703bd.appspot.com",
  messagingSenderId: "508822689848",
  appId: "1:508822689848:web:64ae6009bc379310d86ecd",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
