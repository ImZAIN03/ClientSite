/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseAuth } from "firebase/auth";
import { firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDduDJVNsQNtDYQv1cUda_YsPs8vwgdg-I",
  authDomain: "alia-farid.firebaseapp.com",
  projectId: "alia-farid",
  storageBucket: "alia-farid.appspot.com",
  messagingSenderId: "1009204390984",
  appId: "1:1009204390984:web:61775f40e632c304eb3c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebaseAuth(app);
const db = firestore(app);
