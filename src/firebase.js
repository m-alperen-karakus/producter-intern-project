import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ7tvBzKAFMS3OMXBWt8lqQt68vxhTfJc",
  authDomain: "producter-intern-project.firebaseapp.com",
  projectId: "producter-intern-project",
  storageBucket: "producter-intern-project.appspot.com",
  messagingSenderId: "343329276544",
  appId: "1:343329276544:web:ee10febffac5e367cc1c65",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
