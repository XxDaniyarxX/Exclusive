// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKLigktZDcSEhWIXrfS-s_eJVGuTe0YKE",
  authDomain: "exclusive-gg-register.firebaseapp.com",
  projectId: "exclusive-gg-register",
  storageBucket: "exclusive-gg-register.firebasestorage.app",
  messagingSenderId: "1085464494032",
  appId: "1:1085464494032:web:2ad79f5e3ab1097d9b43d5",
  measurementId: "G-M8WVHKLB42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);