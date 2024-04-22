// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmWn3vPByxtESuHnM1WjYyEjRPRYwrzsk",
  authDomain: "back-marruecos.firebaseapp.com",
  projectId: "back-marruecos",
  storageBucket: "back-marruecos.appspot.com",
  messagingSenderId: "359154107960",
  appId: "1:359154107960:web:65dab18fb6cf021be6c8cd",
  measurementId: "G-GXV9M8HE98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app; // Exporta la instancia de la aplicación Firebase
