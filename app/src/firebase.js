// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAnF7VzCUg2QSIuaPqGbBSK_YDEkiAngM",
  authDomain: "shopx-6f095.firebaseapp.com",
  projectId: "shopx-6f095",
  storageBucket: "shopx-6f095.appspot.com",
  messagingSenderId: "705472950191",
  appId: "1:705472950191:web:b0bd51ba7d5274196dc95a",
  measurementId: "G-JVS4HD8PPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);