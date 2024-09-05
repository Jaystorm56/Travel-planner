import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';

const handleAuthStateChange = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:", user);
      callback(user); 
    } else {
      console.log("No user is signed in.");
      callback(null); 
    }
  });
};

export default handleAuthStateChange;
