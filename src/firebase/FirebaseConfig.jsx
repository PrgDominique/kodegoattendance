// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: "AIzaSyDnWx6iAoupjElN1GYgVQPZF9dHG3SO9iM",
  authDomain: "kodegoattendance-e6343.firebaseapp.com",
  databaseURL: "https://kodegoattendance-e6343-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kodegoattendance-e6343",
  storageBucket: "kodegoattendance-e6343.appspot.com",
  messagingSenderId: "395644140326",
  appId: "1:395644140326:web:575e61a2e5a11b3acc1fe7"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);

export {db, auth, database}


