// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDnWx6iAoupjElN1GYgVQPZF9dHG3SO9iM",
  authDomain: "kodegoattendance-e6343.firebaseapp.com",
  databaseURL: "https://kodegoattendance-e6343-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kodegoattendance-e6343",
  storageBucket: "kodegoattendance-e6343.appspot.com",
  messagingSenderId: "395644140326",
  appId: "1:395644140326:web:575e61a2e5a11b3acc1fe7"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app)
export default app;