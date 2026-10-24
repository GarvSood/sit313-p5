import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQUeV5MXeVQELGUoxXpFHshYHwxGu3y5o",
  authDomain: "task-p4-8b5f0.firebaseapp.com",
  projectId: "task-p4-8b5f0",
  storageBucket: "task-p4-8b5f0.firebasestorage.app",
  messagingSenderId: "222814191908",
  appId: "1:222814191908:web:ac82f0f66721fd4a9c33b1",
  measurementId: "G-J9T5Z9CP9V"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);