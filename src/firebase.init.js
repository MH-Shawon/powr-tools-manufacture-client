// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB43ABe9-1YSPBEFX7hhUuFpjBitVPPNRs",
  authDomain: "menufacturar-website.firebaseapp.com",
  projectId: "menufacturar-website",
  storageBucket: "menufacturar-website.appspot.com",
  messagingSenderId: "143509777782",
  appId: "1:143509777782:web:bba67deb3f1188cde1de57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
