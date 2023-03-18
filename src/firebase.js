// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCLDCe2VplqQaHVYdOOYGaKSa29y3IaDxM",
    authDomain: "reels-project-7b3c2.firebaseapp.com",
    projectId: "reels-project-7b3c2",
    storageBucket: "reels-project-7b3c2.appspot.com",
    messagingSenderId: "57277946594",
    appId: "1:57277946594:web:f9dbf4de0fa47bf33f9cbb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const storage = firebase.storage();
export const database ={
  users : firestore.collection('users'),
  posts : firestore.collection('posts'),
  comments : firestore.collection('comments'),
  getTimeStamp: firebase.firestore.FieldValue.serverTimestamp
}