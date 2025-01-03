import { auth, db, doc, getDoc, uploadBytesResumable, ref, getDownloadURL, setDoc, getStorage } from '../../firebaseConfig.js'; // Add getStorage here

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
                // Save user details to sessionStorage
sessionStorage.setItem('userData', JSON.stringify(userData)); 

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
                    dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
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
       // Create a progress bar dynamically
       const createProgressBar = () => {
        const progressBarContainer = document.createElement('div');
        progressBarContainer.classList.add('progress-bar-overlay');
        progressBarContainer.innerHTML = `
            <div class="progress-bar">
                <div class="progress-bar-fill"></div>
                <span class="progress-bar-text">0%</span> <!-- Percentage text -->
            </div>
        `;
        return progressBarContainer;
    };
    
    

// Event listener for the upload button
uploadButton.addEventListener('click', async () => {
    const file = profilePictureInput.files[0];
    if (file) {
        // Clear any existing progress bar and add a new one
        let progressBarContainer = uploadPopup.querySelector('.progress-bar-overlay');
        if (!progressBarContainer) {
            progressBarContainer = createProgressBar();
            document.body.appendChild(progressBarContainer); // Append to the body so it overlays on the popup
        }
        const progressBarFill = progressBarContainer.querySelector('.progress-bar-fill');
        const progressBarText = progressBarContainer.querySelector('.progress-bar-text');
        progressBarContainer.style.display = 'flex'; // Ensure progress bar is visible

        try {
            const storageRef = ref(storage, `profilePictures/${user.uid}/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file); // Use resumable upload for progress tracking

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Calculate progress as a percentage
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    progressBarFill.style.width = `${progress}%`; // Update progress bar width
                    progressBarText.textContent = `${Math.round(progress)}%`; // Update text to show percentage
                },
                (error) => {
                    console.error("Error uploading file:", error);
                    alert("An error occurred during the upload. Please try again.");
                },
                async () => {
                    // Get the download URL after upload completes
                    const url = await getDownloadURL(storageRef);

                    // Update Firestore with the new profile picture URL
                    await setDoc(userDocRef, { profilePicture: url }, { merge: true });

                    // Update profile picture display
                    profilePicContainer.innerHTML = `
                        <img src="${url}" alt="Profile Picture" class="profile-pic">
                    `;

                    // Confirm upload success to the user
                    alert("Profile picture uploaded successfully!");

                    // Close the upload popup after completion
                    uploadPopup.style.display = 'none';

                    // Hide the progress bar overlay
                    progressBarContainer.style.display = 'none';
                }
            );
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("An error occurred during the upload. Please try again.");
        }
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

document.getElementById('profileButton').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'profile.html';
});



