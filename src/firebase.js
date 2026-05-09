import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your actual Firebase config!
const firebaseConfig = {
  apiKey: "AIzaSyC2OCIUziZdcxBfeFRbCHFe2m2IYzndwyY",
  authDomain: "drifty-9f59e.firebaseapp.com",
  projectId: "drifty-9f59e",
  storageBucket: "drifty-9f59e.firebasestorage.app",
  messagingSenderId: "760488160305",
  appId: "1:760488160305:web:79002eb6d02a1aca3eb910",
  measurementId: "G-Q9427DBE4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);