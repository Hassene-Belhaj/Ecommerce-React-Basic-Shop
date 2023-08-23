// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvhEjycSvbgtDGIifAWukkxkU1D5OcZEw",
  authDomain: "ecommerce-react-basic-shop.firebaseapp.com",
  projectId: "ecommerce-react-basic-shop",
  storageBucket: "ecommerce-react-basic-shop.appspot.com",
  messagingSenderId: "653249583280",
  appId: "1:653249583280:web:c4134e070f4a33d4254375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const Provider = new GoogleAuthProvider