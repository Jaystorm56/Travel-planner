import { auth, db, doc, getDoc, uploadBytes, ref, getDownloadURL, setDoc, getStorage } from '../../firebaseConfig.js'; // Add getStorage here

// Initialize Firebase Storage
const storage = getStorage(); // Create a storage instance

document.addEventListener('DOMContentLoaded', () => {
    const uploadPopup = document.getElementById('uploadPopup');
    const closePopup = document.getElementById('closePopup');
    const profilePictureInput = document.getElementById('profilePictureInput');
    const uploadButton = document.getElementById('uploadButton');

    // Fetch the current logged-in user's details
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // user's first name in Firestore
            const userDocRef = doc(db, 'users', user.uid); // Change 'users' to your collection name
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();
                const userFirstName = userData.firstName || "Guest"; 
                const userProfilePic = userData.profilePicture || null; 

                // Update the #userNameDisplay element to show the user's first name
                const userNameDisplay = document.getElementById('userNameDisplay');
                userNameDisplay.textContent = userFirstName; // Set the text to the user's first name

                const welcomeMessage = document.getElementById('welcomeMessage');
                const fullMessage = `Welcome, ${userFirstName}`;

                welcomeMessage.textContent = ''; 

                // Type the message one character at a time
                let index = 0;
                const typingSpeed = 150; // Speed of typing in milliseconds

                function typeLetter() {
                    if (index < fullMessage.length) {
                        welcomeMessage.textContent += fullMessage.charAt(index);
                        index++;
                        setTimeout(typeLetter, typingSpeed); // Recursively type the next letter
                    }
                }

                typeLetter(); // Start the typing effect

                // Display user profile picture and first name
                const profilePicContainer = document.getElementById('profilePicContainer');
                if (userProfilePic) {
                    // If the user has uploaded a profile picture, display it
                    profilePicContainer.innerHTML = `
                        <img src="${userProfilePic}" alt="Profile Picture" class="profile-pic">
                        
                    `;
                } else {
                    // If no profile picture, display placeholder
                    profilePicContainer.innerHTML = `
                        <div class="placeholder-pic"><img src="./IMAGES/profile-pic.svg" alt=""></div>
                       
                    `;
                }

                // Show upload popup on click
                profilePicContainer.addEventListener('click', () => {
                    uploadPopup.style.display = 'flex'; // Show the popup
                });

                // Close the popup
                closePopup.addEventListener('click', () => {
                    uploadPopup.style.display = 'none';
                });

                //  Logout logic
                document.getElementById('userNameDisplay').addEventListener('click', function() {
                    const dropdown = document.getElementById('dropdown');
                    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
                });
                
                document.getElementById('logoutButton').addEventListener('click', function(e) {
                    e.preventDefault();
                    auth.signOut().then(() => {
                        window.location.href = 'signin.html'; 
                    }).catch((error) => {
                        console.error('Error logging out:', error);
                    });
                });
                
                //hiding the dropdown when clicking outside of it
                window.addEventListener('click', function(event) {
                    const dropdown = document.getElementById('dropdown');
                    if (!event.target.matches('#userNameDisplay')) {
                        if (dropdown.style.display === 'block') {
                            dropdown.style.display = 'none';
                        }
                    }
                });

                // Upload profile picture
                uploadButton.addEventListener('click', async () => {
                    const file = profilePictureInput.files[0];
                    if (file) {
                        const storageRef = ref(storage, `profilePictures/${user.uid}/${file.name}`);
                        await uploadBytes(storageRef, file);
                        const url = await getDownloadURL(storageRef);

                        // Update Firestore with the new profile picture URL
                        await setDoc(userDocRef, { profilePicture: url }, { merge: true });
                        profilePicContainer.innerHTML = `
                            <img src="${url}" alt="Profile Picture" class="profile-pic">
                            <span class="user-first-name">${userFirstName}</span>
                        `;
                        uploadPopup.style.display = 'none'; // Hide the popup
                    } else {
                        alert('Please select a file to upload.');
                    }
                });
            } else {
                console.error('No user data found');
            }
        } else {
            // if no user is logged in, set guest display
            const userNameDisplay = document.getElementById('userNameDisplay');
            userNameDisplay.textContent = "Guest"; // Show "Guest" if no user is logged in
        }
    });
});

document.getElementById('chatButton').addEventListener('click', function() {
    // Open your chatbot HTML file in a new tab or modal
    window.open('chatbot.html', '_blank');
});


