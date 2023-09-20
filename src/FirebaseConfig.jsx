// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "popping-inferno-4113.firebaseapp.com",
  databaseURL: "https://popping-inferno-4113.firebaseio.com",
  projectId: "popping-inferno-4113",
  storageBucket: "popping-inferno-4113.appspot.com",
  messagingSenderId: import.meta.env.VITE_APP_MSG_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const database = getAuth(app);