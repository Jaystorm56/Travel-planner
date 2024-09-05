import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);
    
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

export default signUp;
