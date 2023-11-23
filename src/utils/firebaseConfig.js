// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo3mvbuS4phf84kV5QAPXMkuynP3OyWkY",
  authDomain: "poooo-ffc4f.firebaseapp.com",
  projectId: "poooo-ffc4f",
  storageBucket: "poooo-ffc4f.appspot.com",
  messagingSenderId: "993131187469",
  appId: "1:993131187469:web:0e34322e79c2dd7fd3f444",
  measurementId: "G-QFMK1VYJNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
