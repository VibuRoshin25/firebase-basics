// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {} from "firebase/auth";
import {} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPsG18_hdDmFbBaOdecEEsFJC_Acjn-vI",
  authDomain: "thisisanewprojectforlearning.firebaseapp.com",
  projectId: "thisisanewprojectforlearning",
  storageBucket: "thisisanewprojectforlearning.appspot.com",
  messagingSenderId: "284327267057",
  appId: "1:284327267057:web:5184e771f474265bbaf750",
  measurementId: "G-SBXZ76BJDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
