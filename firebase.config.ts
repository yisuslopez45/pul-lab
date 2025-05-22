// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqdf-2pntrzK2fKtzHGX9mQifA2lCvKsE",
  authDomain: "pul-lab.firebaseapp.com",
  projectId: "pul-lab",
  storageBucket: "pul-lab.firebasestorage.app",
  messagingSenderId: "576357877832",
  appId: "1:576357877832:web:72339e5b212be7598af07d",
  measurementId: "G-V0MB4HHT80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
