// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtps1EDJsa5fty4aPaqIBWgOGLZsfZIds",
  authDomain: "goobike-b125c.firebaseapp.com",
  projectId: "goobike-b125c",
  storageBucket: "goobike-b125c.appspot.com",
  messagingSenderId: "258435694203",
  appId: "1:258435694203:web:0fc3973397e323a9baacde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;