import { auth, sendPasswordResetEmail } from '../../firebaseConfig.js';

const forgottenPasswordForm = document.getElementById('forgotten-password-form');
forgottenPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset link sent to your email!');
        // Redirect to sign-in page
        window.location.href = 'signin.html';
    } catch (error) {
        console.error('Error sending password reset email:', error.message);
        alert('Failed to send password reset email.');
    }
});
