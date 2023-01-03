// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: "AIzaSyCDIovx_HQXk1FZIBBcwDZjKP6kpYvq7JA",
  authDomain: "attendance-9c18b.firebaseapp.com",
  databaseURL: "https://attendance-9c18b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "attendance-9c18b",
  storageBucket: "attendance-9c18b.appspot.com",
  messagingSenderId: "161562708716",
  appId: "1:161562708716:web:3cffa915f30f89d6cc33c9",
  measurementId: "G-6VT34YSF0Q"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}


