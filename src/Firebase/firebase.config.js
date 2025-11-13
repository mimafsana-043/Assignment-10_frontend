// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIgi268vXLvF4j9EQYNC98xJWJeZuh7QU",
  authDomain: "assignment-10-630e8.firebaseapp.com",
  projectId: "assignment-10-630e8",
  storageBucket: "assignment-10-630e8.firebasestorage.app",
  messagingSenderId: "17358112921",
  appId: "1:17358112921:web:f80e3306c5365da0d55008",
  measurementId: "G-WTZ49T1G86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;