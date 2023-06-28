import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRWm6jMsPr3EZr8jgCxpIbbHxYBmbrNXI",
  authDomain: "listed-assessment.firebaseapp.com",
  projectId: "listed-assessment",
  storageBucket: "listed-assessment.appspot.com",
  messagingSenderId: "244428150976",
  appId: "1:244428150976:web:0c38026d5d9db214b7b525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();