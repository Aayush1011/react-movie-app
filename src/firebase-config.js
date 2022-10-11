// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwXaO3aA5V4vCIecrnC9oyGwAK1VjrY7E",
  authDomain: "react-movie-app-26ff6.firebaseapp.com",
  projectId: "react-movie-app-26ff6",
  storageBucket: "react-movie-app-26ff6.appspot.com",
  messagingSenderId: "440968060051",
  appId: "1:440968060051:web:2bc95b915b1806af35c166",
  measurementId: "G-H9S2TZR0PG",
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const db = getFirestore(firebase);

export { firebase };

