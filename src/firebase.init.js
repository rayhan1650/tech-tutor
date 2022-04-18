// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzYkqH9gjaEoRf0Q2VdMVoXbcToG0jx_U",
  authDomain: "techtutor1650.firebaseapp.com",
  projectId: "techtutor1650",
  storageBucket: "techtutor1650.appspot.com",
  messagingSenderId: "1071105815994",
  appId: "1:1071105815994:web:799f2442eac6e14755d983",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
