import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBkXnQ54BPpUZlAdFcMV4pqJk9X6uR-VsE",
  authDomain: "ecommerce-6f339.firebaseapp.com",
  projectId: "ecommerce-6f339",
  storageBucket: "ecommerce-6f339.appspot.com",
  messagingSenderId: "684657879709",
  appId: "1:684657879709:web:4b3161202bd3183dae4274"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
