// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-CnChixx0lm1aJMOT9MZt93-u0i-UGy0",
  authDomain: "likest-8296f.firebaseapp.com",
  projectId: "likest-8296f",
  storageBucket: "likest-8296f.firebasestorage.app",
  messagingSenderId: "179723975364",
  appId: "1:179723975364:web:f4a784daa8ad9ef1c56791",
  measurementId: "G-VL4ELC48RC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

const analytics = getAnalytics(app);