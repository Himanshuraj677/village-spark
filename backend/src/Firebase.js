// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAK99Wy55H3V9CXvP5KPoX0YEeNVrCNOqI",
  authDomain: "coastal-set-410613.firebaseapp.com",
  projectId: "coastal-set-410613",
  storageBucket: "coastal-set-410613.appspot.com",
  messagingSenderId: "1056719764103",
  appId: "1:1056719764103:web:b7658387b9602f958cd622",
  measurementId: "G-ZLNTM14691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db
export {app}