// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAegAlQPwPmXJuvVLizvhJ39DtAYwc93vU",
  authDomain: "career-up-b9.firebaseapp.com",
  projectId: "career-up-b9",
  storageBucket: "career-up-b9.firebasestorage.app",
  messagingSenderId: "840910502488",
  appId: "1:840910502488:web:7de1ad5b6b22d3b336282d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth