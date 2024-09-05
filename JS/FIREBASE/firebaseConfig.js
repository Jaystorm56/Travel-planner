import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

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

export { auth };
export default app;
