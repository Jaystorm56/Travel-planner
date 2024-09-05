import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyDAtBbDusZ6MFNsNPJuYmmQDZ-7GMP0sDY",
  authDomain: "travel-planner-c2b70.firebaseapp.com",
  projectId: "travel-planner-c2b70",
  storageBucket: "travel-planner-c2b70.appspot.com",
  messagingSenderId: "478058540340",
  appId: "1:478058540340:web:8ef980375fc2c02bd1c961",
  measurementId: "G-H870K1NJ2D"
};



const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, doc, setDoc, getDoc, collection, getDocs, addDoc, updateDoc, ref, uploadBytes, getDownloadURL };
