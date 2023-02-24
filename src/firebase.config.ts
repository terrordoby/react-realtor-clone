// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmUPRTaAUbcLm6Ja1p9UvW4SSy-DkxnH0",
  authDomain: "realtor-clone-react-3849b.firebaseapp.com",
  projectId: "realtor-clone-react-3849b",
  storageBucket: "realtor-clone-react-3849b.appspot.com",
  messagingSenderId: "630811379288",
  appId: "1:630811379288:web:fdb8ae5b384cfb2e6eac2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, db};
