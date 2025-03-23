import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBucEwdvYgfziOix8sOzL2rMaiCIsQ4T0k",
    authDomain: "diabetes-prediction-portal.firebaseapp.com",
    projectId: "diabetes-prediction-portal",
    storageBucket: "diabetes-prediction-portal.firebasestorage.app",
    messagingSenderId: "157888787312",
    appId: "1:157888787312:web:f802f93395239da1e155b5",
    measurementId: "G-JW1TPZE0ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };