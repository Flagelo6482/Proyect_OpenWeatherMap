// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXq6BlBByUVB0yNO0pVHEcgO4u6cU4gj4",
  authDomain: "login-e7735.firebaseapp.com",
  projectId: "login-e7735",
  storageBucket: "login-e7735.appspot.com",
  messagingSenderId: "57846249059",
  appId: "1:57846249059:web:2d1b41e88caa1f67222a56"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;