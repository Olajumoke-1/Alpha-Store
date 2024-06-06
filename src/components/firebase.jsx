// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArq60vQuEzwEo9KGTx-XKotJ89pqLQaH0",
  authDomain: "alpha-stores-c43d8.firebaseapp.com",
  projectId: "alpha-stores-c43d8",
  storageBucket: "alpha-stores-c43d8.appspot.com",
  messagingSenderId: "1072732376224",
  appId: "1:1072732376224:web:7156d5e60d1185b5580dc5",
  measurementId: "G-WK0D0YPZGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, analytics, auth };