// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKnpl03mNul-DAeJF97nz5PTpvOfgtUX0",
  authDomain: "social-media-app-3b4fd.firebaseapp.com",
  projectId: "social-media-app-3b4fd",
  storageBucket: "social-media-app-3b4fd.appspot.com",
  messagingSenderId: "661002039869",
  appId: "1:661002039869:web:07bd65a4f5ec3cbfb5f054",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default firebaseConfig;
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);
export default firebaseConfig;
