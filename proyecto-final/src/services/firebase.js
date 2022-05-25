// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8eYRhEiWVc6QW4tRv1A43W7e4THAKSLo",
  authDomain: "ecommerce-react-proyecto-final.firebaseapp.com",
  projectId: "ecommerce-react-proyecto-final",
  storageBucket: "ecommerce-react-proyecto-final.appspot.com",
  messagingSenderId: "395794342053",
  appId: "1:395794342053:web:c008e936a63ee7dedf2d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db