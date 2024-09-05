import { auth, signInWithEmailAndPassword } from '../FIREBASE/firebaseConfig';

const signInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
       
    } catch (error) {
        console.error('Error signing in:', error.message);
       
    }
};


