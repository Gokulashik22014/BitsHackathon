// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBepSu0Yblm7DCk9RUPb1D_eXgx8KnLObk",
  authDomain: "bitshackathon-fe0e0.firebaseapp.com",
  projectId: "bitshackathon-fe0e0",
  storageBucket: "bitshackathon-fe0e0.firebasestorage.app",
  messagingSenderId: "158153359323",
  appId: "1:158153359323:web:8b26d7d52151e0d03771fe",
  measurementId: "G-0KF4JRGK50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);