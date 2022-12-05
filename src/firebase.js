import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPka3cMyXiHVrINdeRmGmxIaRxNLFpZlM",
  authDomain: "software-engineering-3d880.firebaseapp.com",
  databaseURL: "https://software-engineering-3d880-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "software-engineering-3d880",
  storageBucket: "software-engineering-3d880.appspot.com",
  messagingSenderId: "969052116142",
  appId: "1:969052116142:web:cece91248eabe18d1a493f",
  measurementId: "G-DB8VZ73QFH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;