import {
    auth,
    signInWithEmailAndPassword,
    storage,
    ref,
    getDownloadURL,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    googleAuthProvider,
    signInWithPopup
} from '../../firebaseConfig.js';

// Function to show the loading modal
const showLoadingModal = () => {
    const modal = document.getElementById('loading-modal');
    modal.style.display = 'flex';
};

// Function to hide the loading modal
const hideLoadingModal = () => {
    const modal = document.getElementById('loading-modal');
    modal.style.display = 'none';
};

let currentUser;
const signInUser = async (email, password, rememberMe) => {
    // console.log('Current user first name:', currentUser.displayName);

    try {

        showLoadingModal(); // Show loading modal
        // Set persistence based on "Remember me" checkbox
        const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
        await setPersistence(auth, persistence);

        // Sign in the user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        currentUser = userCredential.user;
        console.log('User signed in:', currentUser.displayName || currentUser.email);

        // Firebase Storage reference for user data
        const storageRef = ref(storage, 'user_data/' + currentUser.uid + '/profile.json');

        // Retrieve the download URL for profile.json
        const downloadURL = await getDownloadURL(storageRef);
        const response = await fetch(downloadURL);
        const userDataBlob = await response.blob();
        const userData = JSON.parse(await userDataBlob.text());

        // Check if the email matches the user data
        if (userData.email === currentUser.email) {
            console.log('User information matches, signed in successfully!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            console.error('User information does not match.');
        }
    } catch (error) {
        console.error('Error signing in:', error.message);
    }finally {
        hideLoadingModal(); // Hide loading modal
    }
};


const togglePasswordVisibility = () => {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Show password
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash'); // Change icon to "eye-slash"
    } else {
        passwordField.type = 'password'; // Hide password
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye'); // Change icon back to "eye"
    }
};



// Google sign-in
const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleAuthProvider);
        console.log('Google sign-in success:', result.user);
        window.location.href = 'dashboard.html'; // Redirect to dashboard after Google sign-in
    } catch (error) {
        console.error('Error during Google sign-in:', error.message);
    }
};


// Event listener for form submission
const signInForm = document.getElementById('sign-in-form');
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    await signInUser(email, password, rememberMe);
});

// Event listener for password visibility toggle
document.getElementById('eye-icon').addEventListener('click', togglePasswordVisibility);


// Event listener for Google sign-in button
document.getElementById('google-sign-in').addEventListener('click', signInWithGoogle);




