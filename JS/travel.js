import signUp from '../JS/SIGN-UP/signup';
import signIn from '../JS/SIGN-IN/sign-in';
import handleAuthStateChange from './auth/authState';
import { auth } from "./FIREBASE/firebaseConfig"


const updateUIBasedOnAuthState = (user) => {
  if (user) {
    document.getElementById('userInfo').textContent = `Hello, ${user.email}`;
    document.getElementById('authControls').style.display = 'none'; // Hide auth controls
  } else {
    document.getElementById('userInfo').textContent = '';
    document.getElementById('authControls').style.display = 'block'; // Show auth controls
  }
};


handleAuthStateChange(updateUIBasedOnAuthState);


document.getElementById('signUpButton').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    await signUp(email, password);
  } catch (error) {
    console.error("Sign up failed:", error.message);
    
  }
});


document.getElementById('signInButton').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    await signIn(email, password);
  } catch (error) {
    console.error("Sign in failed:", error.message);
    
  }
});
