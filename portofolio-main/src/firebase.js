// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const firebaseEnabled = Object.values(firebaseConfig).every(
  (value) => typeof value === "string" && value.trim() !== ""
);

// Init Firebase only when config is present
const app = firebaseEnabled ? initializeApp(firebaseConfig) : null;

// Auth
export const auth = firebaseEnabled ? getAuth(app) : null;
const provider = firebaseEnabled ? new GoogleAuthProvider() : null;
export const loginWithGoogle = () =>
  firebaseEnabled ? signInWithPopup(auth, provider) : Promise.resolve();
export const logout = () => (firebaseEnabled ? signOut(auth) : Promise.resolve());

// Firestore
export const db = firebaseEnabled ? getFirestore(app) : null;
