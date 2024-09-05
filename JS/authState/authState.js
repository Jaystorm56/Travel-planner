import { auth, onAuthStateChanged } from '../FIREBASE/firebaseConfig';

onAuthStateChanged(auth, user => {
    if (user) {
        console.log('User is signed in:', user);
        
    } else {
        console.log('No user is signed in.');
     
    }
});
