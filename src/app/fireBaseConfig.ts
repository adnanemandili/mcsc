// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDB1pDHJyU9Zlp2jqGnztyXRRqxfsmwwXA",
  authDomain: "mcsc-b2474.firebaseapp.com",
  projectId: "mcsc-b2474",
  storageBucket: "mcsc-b2474.appspot.com",
  messagingSenderId: "937288381218",
  appId: "1:937288381218:web:07469a97727f528a386b7b",
  measurementId: "G-0KRNTVKF4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export {DB};