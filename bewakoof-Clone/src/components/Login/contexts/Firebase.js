// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAFv8_L5J9pMgoybMTcfueCFNfBJSWRUTQ",
  authDomain: "bewakoof-clone-aa527.firebaseapp.com",
  projectId: "bewakoof-clone-aa527",
  storageBucket: "bewakoof-clone-aa527.appspot.com",
  messagingSenderId: "304317146256",
  appId: "1:304317146256:web:c8bcaba67f3579e50e2415",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth ,app}
