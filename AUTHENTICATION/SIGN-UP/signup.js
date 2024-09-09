import { 
    auth, 
    googleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithPopup, 
   
    storage, 
    ref, 
    uploadBytes, 
    db, 
    setDoc, 
    doc 
} from '../../firebaseConfig.js';

// Function to sign up the user using email and password
const signUpUser = async (email, password, firstName, lastName, phone) => {
    try {
        // Sign up the user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed up:', user);

        // Example user data to save
        const userData = {
            email: user.email,
            uid: user.uid,
            firstName: firstName,
            lastName: lastName,
            phone: phone
        };

        // Add user data to Firestore
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, userData);
        console.log('User data successfully saved to Firestore!');

        // Create a reference to Firebase Storage
        const storageRef = ref(storage, 'user_data/' + user.uid + '/profile.json');

        // Convert user data to a Blob
        const userDataBlob = new Blob([JSON.stringify(userData)], { type: 'application/json' });

        // Upload user data to Firebase Storage
        await uploadBytes(storageRef, userDataBlob);
        console.log('User data successfully uploaded to Firebase Storage!');

        // Redirect to sign-in page
        window.location.href = 'signin.html';

    } catch (error) {
        console.error('Error during sign-up or file upload:', error.message);
    }
};

// Function to sign up the user using Google authentication
const signUpWithGoogle = async () => {
    try {
        const userCredential = await signInWithPopup(auth, googleAuthProvider);
        const user = userCredential.user;

        // Example user data to save
        const userData = {
            email: user.email,
            uid: user.uid,
            firstName: user.displayName.split(" ")[0],
            lastName: user.displayName.split(" ")[1] || "",
            phone: user.phoneNumber || ""
        };

        // Add user data to Firestore
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, userData);
        console.log('User data successfully saved to Firestore via Google Sign-In!');

        // Redirect to sign-in page
        window.location.href = 'signin.html';

    } catch (error) {
        console.error('Error during Google sign-in:', error.message);
    }
};

// Event listener for the form submission
const signUpForm = document.getElementById('sign-up-form');
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Collect input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const termsCheckbox = document.getElementById('terms-checkbox').checked;

    // Validate password confirmation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Validate terms and conditions
    if (!termsCheckbox) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    // Call signUpUser function with the collected data
    await signUpUser(email, password, firstName, lastName, phone);
});

// Event listener for Google sign-up button
const googleSignupBtn = document.getElementById('google-signup');
googleSignupBtn.addEventListener('click', signUpWithGoogle);