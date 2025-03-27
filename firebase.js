// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI-xiQDIsbQANfGr-xPY_ydslNCr2sgM4",
  authDomain: "likeest-84e6e.firebaseapp.com",
  projectId: "likeest-84e6e",
  storageBucket: "likeest-84e6e.firebasestorage.app",
  messagingSenderId: "1000515170120",
  appId: "1:1000515170120:web:750b6788aefcedcf178d7d",
  measurementId: "G-3DN6RGGTKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { db, collection, addDoc };