// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAcylCn3V8UsC0PJdXrIAFAVgSKkny0fQ",
  authDomain: "project01-my1streact.firebaseapp.com",
  databaseURL: "https://project01-my1streact-default-rtdb.firebaseio.com",
  projectId: "project01-my1streact",
  storageBucket: "project01-my1streact.firebasestorage.app",
  messagingSenderId: "318217172154",
  appId: "1:318217172154:web:e6d73aa97282ad475bbe83",
  measurementId: "G-FLDXVSGF80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
export { db };