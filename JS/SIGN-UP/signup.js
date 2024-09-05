import { auth, createUserWithEmailAndPassword } from '../FIREBASE/firebaseConfig';

const signUpUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up:', userCredential.user);

    } catch (error) {
        console.error('Error signing up:', error.message);
    
    }
};

