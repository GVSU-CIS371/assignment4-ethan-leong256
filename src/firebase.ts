import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJzeJYHqaa8mIv1MVXDiuhyqUhQPdc1o0",
  authDomain: "cis371-a5bc3.firebaseapp.com",
  projectId: "cis371-a5bc3",
  storageBucket: "cis371-a5bc3.firebasestorage.app",
  messagingSenderId: "504418340",
  appId: "1:504418340:web:063c31389e70578320c8b1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

