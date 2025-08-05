// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNPkc5n_lDtNieEmS6WMnF3b3F27jQYbk",
  authDomain: "ckaili-portfolio-website.firebaseapp.com",
  projectId: "ckaili-portfolio-website",
  storageBucket: "ckaili-portfolio-website.firebasestorage.app",
  messagingSenderId: "509065369817",
  appId: "1:509065369817:web:95820720375fa88b2a86c8",
  measurementId: "G-RJFB0HT975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
export { db };