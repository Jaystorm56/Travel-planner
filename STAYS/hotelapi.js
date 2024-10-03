import { auth, db, doc, getDoc, uploadBytes, ref, getDownloadURL, setDoc, storage, getStorage } from '../firebaseConfig.js'; // Add getStorage here

let autocomplete;
let lat, lon;

function initAutocomplete() {
    const destinationInput = document.querySelector("#destination");
    autocomplete = new google.maps.places.Autocomplete(destinationInput);

    // Update lat/lon when user selects a location from Google Places
    autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
            lat = place.geometry.location.lat();
            lon = place.geometry.location.lng();
        } else {
            alert("Please select a valid location from the list.");
        }
    });

    // Display user profile picture and name in the header
    const userProfileImg = document.querySelector("#userProfilePicture"); // Updated: Select userProfilePicture by ID
    const userProfileName = document.querySelector("#userNameDisplay"); // Updated: Select userNameDisplay by ID

    // Get and display the user's profile picture and first name
    auth.onAuthStateChanged(async user => {
        console.log("User state changed:", user);
        if (user) {
            const userDocRef = doc(db, 'users', user.uid); // Assuming you're storing user data under a 'users' collection
    
            try {
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const { profilePicture, firstName } = userData;
    
                    // Display the user's first name and profile picture
                    userProfileName.textContent = firstName || "User"; // Display first name
                    if (profilePicture) {
                        userProfileImg.src = profilePicture; // Display profile picture
                        userProfileImg.style.display = 'block';
                    } else {
                        userProfileImg.style.display = 'none'; // Hide profile picture if not available
                    }
                } else {
                    console.error("User document not found");
                    userProfileName.textContent = "User";
                    userProfileImg.style.display = 'none';
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        } else {
            userProfileName.textContent = "Guest"; // User is not logged in
            userProfileImg.style.display = 'none'; // Hide profile picture when not logged in
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initAutocomplete();

    // Hotel search functionality
    document.querySelector("#Search").addEventListener("click", (e) => {
        e.preventDefault();

        // Ensure valid lat/lon are selected
        if (!lat || !lon) {
            alert("Please enter and select a valid destination.");
            return;
    }

        const checkIN = document.querySelector("#checkin");
        const checkOut = document.querySelector("#checkout");
        const checkInDate = new Date(checkIN.value);
        const checkOutDate = new Date(checkOut.value);
        const today = new Date();


        // Check for valid check-in/check-out dates
        if (checkInDate < today || checkOutDate < today) {
            alert("Check-in and check-out dates must be today or in the future.");
            return;
        }

        if (checkOutDate <= checkInDate) {
            alert("Check-out date must be after check-in date.");
            return;
        }
    

        // Show loading indicator while fetching data
        const resultsContainer = document.getElementById('hotel-results');
        const loadingIndicator = document.createElement('p');
        loadingIndicator.textContent = "Loading results...";
        resultsContainer.innerHTML = '';  // Clear previous results
        resultsContainer.appendChild(loadingIndicator);

        async function checkResult() {
            try {
                // Fetch hotel data from TripAdvisor API
                let flightURL = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=${lat}&longitude=${lon}&checkIn=${checkIN.value}&checkOut=${checkOut.value}&pageNumber=1&currencyCode=USD`;
                
                let response = await fetch(flightURL, {
                    headers: {
                        "x-rapidapi-host": "tripadvisor16.p.rapidapi.com",
                        "x-rapidapi-key": "fc319603d2msh239c6e8d8323b58p1f8e91jsn8363451e80e8"
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                let fetchs = await response.json();
                console.log("Full API Response:", fetchs);

                if (!fetchs.status) {
                    console.error("Error from API:", fetchs.message);
                    return;
                }

                if (fetchs.data && Array.isArray(fetchs.data.data)) {
                    let hotels = fetchs.data.data;
                    displayHotels(hotels); // Pass the fetched hotels to displayHotels function
                } else {
                    console.error("Unexpected response structure", fetchs);
                }

            } catch (error) {
                console.error("Fetch error:", error);
                alert("There was a problem fetching hotel data. Please try again later.");
            } finally {
                loadingIndicator.remove();
            }
        }
    

        checkResult();
    
    });

    // Function to display hotels and their details
    function displayHotels(hotels, checkInDate, checkOutDate) {
        const resultsContainer = document.getElementById('hotel-results');
        resultsContainer.innerHTML = '';

        let resultsHeader = document.getElementById('results-header');
        
        if (!resultsHeader) {
            resultsHeader = document.createElement('h2');
            resultsHeader.id = 'results-header';
            resultsHeader.textContent = 'Here are your results:';
            resultsContainer.before(resultsHeader); 
        }

        if (hotels.length === 0) {
            resultsHeader.style.display = 'none';
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'Sorry, no hotels available.';
            noResultsMessage.classList.add('no-results');
            resultsContainer.appendChild(noResultsMessage);
            return;
        }

        resultsHeader.style.display = 'block';

        hotels.forEach(hotel => {
            const hotelDiv = document.createElement('div');
            hotelDiv.classList.add('hotel');

            const hotelInfoContainer = document.createElement('div');
            hotelInfoContainer.classList.add('hotel-info-container');

            const title = document.createElement('h3');
            title.textContent = hotel.title;

            const primaryInfo = document.createElement('p');
            primaryInfo.textContent = hotel.primaryInfo;

            const secondaryInfo = document.createElement('p');
            secondaryInfo.textContent = hotel.secondaryInfo;

            const rating = document.createElement('p');
            rating.innerHTML = getStarRatingHTML(hotel.bubbleRating.rating);
            rating.classList.add('rating');

            const provider = document.createElement('p');
            provider.textContent = `Provider: ${hotel.provider}`;

            const price = document.createElement('p');
            let hotelPrice;
            if (hotel.commerceInfo && hotel.commerceInfo.priceForDisplay && hotel.commerceInfo.priceForDisplay.text) {
                price.textContent = `Price: ${hotel.commerceInfo.priceForDisplay.text}`;
                hotelPrice = hotel.commerceInfo.priceForDisplay.text.replace(/[^0-9.-]+/g, ""); // Extract numeric value from price text
            } else {
                 // Generate a random price between 100 and 500 (you can adjust the range as needed)
            const minPrice = 50; // Minimum price
            const maxPrice = 1500; // Maximum price
            hotelPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice; // Generate random price

            price.textContent = `Price: $${hotelPrice.toFixed(2)}`; // Display random price formatted to 2 decimal places
            }

            // Trigger Paystack payment instead of external URL
            const bookButton = document.createElement('button');
            bookButton.textContent = "Book Now";
            bookButton.classList.add("book-button");

            // Event listener to trigger Paystack payment on button click
            bookButton.addEventListener('click', () => {
                const checkInDate = document.getElementById("checkin").value;
                const checkOutDate = document.getElementById("checkout").value;

                console.log("Check-In Date: ", checkInDate);
                console.log("Check-Out Date: ", checkOutDate);

                triggerPaystackPayment(hotel.title, hotelPrice, checkInDate, checkOutDate);
            });

            const photoGallery = document.createElement('div');
        photoGallery.classList.add('photo-gallery');

        const currentImage = document.createElement('img');
        currentImage.src = hotel.cardPhotos[0].sizes.urlTemplate.replace('{width}', '400').replace('{height}', '300');
        currentImage.alt = hotel.title;
        photoGallery.appendChild(currentImage);

        // Create navigation buttons
        const prevButton = document.createElement('button');
        prevButton.textContent = '←';
        prevButton.classList.add('arrow', 'arrow-left');
        photoGallery.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.textContent = '→';
        nextButton.classList.add('arrow', 'arrow-right');
        photoGallery.appendChild(nextButton);

        // Add event listeners for the buttons
        let currentIndex = 0;
        const totalImages = hotel.cardPhotos.length;

        prevButton.onclick = () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
            currentImage.src = hotel.cardPhotos[currentIndex].sizes.urlTemplate.replace('{width}', '400').replace('{height}', '300');
        };

        nextButton.onclick = () => {
            currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
            currentImage.src = hotel.cardPhotos[currentIndex].sizes.urlTemplate.replace('{width}', '400').replace('{height}', '300');
        };


            hotelInfoContainer.appendChild(title);
            hotelInfoContainer.appendChild(primaryInfo);
            hotelInfoContainer.appendChild(secondaryInfo);
            hotelInfoContainer.appendChild(rating);
            hotelInfoContainer.appendChild(provider);
            hotelInfoContainer.appendChild(price);
            hotelInfoContainer.appendChild(bookButton);
            hotelDiv.appendChild(photoGallery);
            
            hotelDiv.appendChild(hotelInfoContainer);
            resultsContainer.appendChild(hotelDiv);
        });
    }

    // Function to generate HTML for star rating display
    function getStarRatingHTML(rating) {
        const fullStar = '★';
        const emptyStar = '☆';
        const starCount = 5;
        let stars = '';
        const ratingValue = Math.round(rating);

        for (let i = 1; i <= starCount; i++) {
            stars += (i <= ratingValue) ? fullStar : emptyStar;
        }

        return stars;
    }

    // Function to handle Paystack payment
   async function triggerPaystackPayment(hotelName, hotelPrice, checkInDate, checkOutDate) {
    
        const user = getCurrentUser();
        if (!user) {
            alert("You must be logged in to book a hotel.");
            return;
        }

        const handler = PaystackPop.setup({
            key: 'pk_test_82c8d74a7f3be5328a4ed349caaa2344f376a7b0', // Replace with your Paystack public key
            email: user.email,
            amount: hotelPrice * 100, // Convert to kobo (for Paystack)
            currency: "NGN",
            metadata: {
                custom_fields: [
                    {
                        display_name: "Hotel Name",
                        variable_name: "hotel_name",
                        value: hotelName
                    }
                ]
        },
            callback:  function(response) {
                alert('Payment successful! Reference: ' + response.reference);
                saveBookingDetails(response.reference, hotelName, hotelPrice, checkInDate, checkOutDate, user);
            },
            onClose: function() {
                alert('Payment popup closed.');
        }
        });
    
        handler.openIframe(); // Open Paystack payment modal
}

       
    

    async function saveBookingDetails(paymentReference, hotelName, hotelPrice, checkInDate, checkOutDate, user) {
        const bookingDetails = {
            userId: user.uid,
            firstName: user.displayName.split(" ")[0], // Assuming displayName contains the full name
            email: user.email,
            hotelName: hotelName,
            amount: hotelPrice,
            checkInDate: checkInDate, // Use the captured check-in date
            checkOutDate: checkOutDate, // Use the captured check-out date
            paymentReference: paymentReference,
            bookingDate: new Date().toISOString() // Store the booking date
        };
    
        try {
            // Save the booking details to your Firebase database
            const bookingRef = doc(db, "bookings", paymentReference); // Assuming 'bookings' is your Firestore collection
            await setDoc(bookingRef, bookingDetails);
            console.log("Booking details saved successfully.");
        } catch (error) {
            console.error("Error saving booking details:", error);
        }
    }

    function getCurrentUser() {
        return auth.currentUser; // Directly returns the logged-in user object from Firebase
    }
});

        // Save booking details to Firestore
      

// Expose initAutocomplete globally
window.initAutocomplete = initAutocomplete; // This allows the function to be called in HTML
