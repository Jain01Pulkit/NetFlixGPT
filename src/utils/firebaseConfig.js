// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { REACT_APP_FIREBASE_apiKey, REACT_APP_FIREBASE_authDomain, REACT_APP_FIREBASE_measurementId, REACT_APP_FIREBASE_messagingSenderId, REACT_APP_FIREBASE_projectId, REACT_APP_FIREBASE_storageBucket } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_apiKey,
    authDomain: REACT_APP_FIREBASE_authDomain,
    projectId: REACT_APP_FIREBASE_projectId,
    storageBucket: REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: REACT_APP_FIREBASE_messagingSenderId,
    appId: REACT_APP_FIREBASE_messagingSenderId,
    measurementId: REACT_APP_FIREBASE_measurementId,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
