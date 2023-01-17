// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAesdwgVx94aI2iVaRTEApgjXoACrdvlUE",

  authDomain: "kodegoattendance.firebaseapp.com",

  databaseURL: "https://kodegoattendance-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "kodegoattendance",

  storageBucket: "kodegoattendance.appspot.com",

  messagingSenderId: "77630224319",

  appId: "1:77630224319:web:f519bdce6e76667fefd30a"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app)
export default app;