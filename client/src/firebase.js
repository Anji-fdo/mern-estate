// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b4b74.firebaseapp.com",
  projectId: "mern-estate-b4b74",
  storageBucket: "mern-estate-b4b74.appspot.com",
  messagingSenderId: "500468380303",
  appId: "1:500468380303:web:a1ec9a73593c61533db6fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);