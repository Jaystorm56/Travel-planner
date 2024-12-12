import { auth, onAuthStateChanged,getDocs,query,where,orderBy,limit, doc,getDoc,getStorage, ref, uploadBytes,addDoc,collection,getFirestore ,db} from '../firebaseConfig.js';

// DOM Elements
const flightSearchForm = document.getElementById('flightSearchForm');
const resultsDiv = document.getElementById('results');
const modal = document.getElementById('signInModal');
const closeModalButton = document.getElementById('closeModalButton');
const signInButton = document.getElementById('signInButton');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
// Initialize the Firestore database
// const db = getFirestore();
// Airports Data 

// DOM Elements
const profilePicContainer = document.getElementById('profilePicContainer');
const userProfilePicture = document.getElementById('userProfilePicture');
const userNameDisplay = document.getElementById('userNameDisplay');

// Function to update the UI based on user authentication status
async function updateUserUI(user) {
    if (user) {
        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid);
        
        try {
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
                const userData = userDoc.data();
                const profilePicUrl = userData.profilePicture || ''; // Adjust the field name as necessary
                const firstName = userData.firstName || 'User'; // Adjust the field name as necessary

                // Set the profile picture and name
                userProfilePicture.src = profilePicUrl;
                userProfilePicture.style.display = profilePicUrl ? 'block' : 'none'; // Show or hide based on availability
                userNameDisplay.textContent = firstName;
            } else {
                console.error('No such user document!');
                setGuestUI(); // Set UI for guest if user doc does not exist
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setGuestUI(); // Set UI for guest if there is an error
        }
    } else {
        setGuestUI(); // Set UI for guest if no user is signed in
    }
}

// Function to set the UI for guest users
function setGuestUI() {
    userProfilePicture.style.display = 'none'; // Hide profile picture
    userNameDisplay.textContent = 'Guest'; // Display "Guest"
}

// Check authentication state and update UI
onAuthStateChanged(auth, async (user) => {
    await updateUserUI(user);
});

const airports = [

{ name: "London Heathrow (LHR)", skyId: "LOND", entityId: "27544008" },
{ name: "New York John F. Kennedy (JFK)", skyId: "NYCA", entityId: "27537542" },
{ name: "Los Angeles International (LAX)", skyId: "LAXA", entityId: "27539633" },
{ name: "Dubai International (DXB)", skyId: "DXBA", entityId: "27543461" },
{ name: "Singapore Changi (SIN)", skyId: "SIN", entityId: "27544553" },
{ name: "Hong Kong International (HKG)", skyId: "HKG", entityId: "27538782" },
{ name: "Sydney Kingsford Smith (SYD)", skyId: "SYDA", entityId: "27540791" },
{ name: "Lagos Murtala Muhammed (LOS)", skyId: "LOS", entityId: "27544551" },
{ name: "Abuja Nnamdi Azikiwe (ABV)", skyId: "ABV", entityId: "27544549" },
{ name: "Tokyo Haneda (HND)", skyId: "HND", entityId: "27546500" },
{ name: "Paris Charles de Gaulle (CDG)", skyId: "PARI", entityId: "27539733" },
{ name: "Frankfurt (FRA)", skyId: "FRAN", entityId: "27539745" },
{ name: "Amsterdam Schiphol (AMS)", skyId: "AMSA", entityId: "27539779" },
{ name: "Chicago O'Hare (ORD)", skyId: "CHIA", entityId: "27539639" },
{ name: "Atlanta Hartsfield-Jackson (ATL)", skyId: "ATLA", entityId: "27539645" },
{ name: "Toronto Pearson (YYZ)", skyId: "YYZA", entityId: "27541631" },
{ name: "Madrid Barajas (MAD)", skyId: "MAD", entityId: "27539760" },
{ name: "Beijing Capital (PEK)", skyId: "PEKA", entityId: "27544846" },
{ name: "Bangkok Suvarnabhumi (BKK)", skyId: "BKKA", entityId: "27544556" },
{ name: "San Francisco International (SFO)", skyId: "SFO", entityId: "27539634" },
{ name: "Miami International (MIA)", skyId: "MIA", entityId: "27539625" },
{ name: "Melbourne Tullamarine (MEL)", skyId: "MELA", entityId: "27540795" },
{ name: "Munich (MUC)", skyId: "MUNI", entityId: "27539743" },
{ name: "Rome Fiumicino (FCO)", skyId: "ROMA", entityId: "27539758" },
{ name: "Istanbul Airport (IST)", skyId: "ISTA", entityId: "27545112" },
{ name: "Kuala Lumpur International (KUL)", skyId: "KUL", entityId: "27544558" },
{ name: "Doha Hamad International (DOH)", skyId: "DOHA", entityId: "27543455" },
{ name: "Seoul Incheon (ICN)", skyId: "ICN", entityId: "27544854" },
{ name: "Mexico City (MEX)", skyId: "MEX", entityId: "27543879" },
{ name: "São Paulo Guarulhos (GRU)", skyId: "GRUA", entityId: "27543972" },
{ name: "Zurich (ZRH)", skyId: "ZRHA", entityId: "27539731" },
{ name: "Vienna International (VIE)", skyId: "VIEA", entityId: "27539741" },
{ name: "Boston Logan International (BOS)", skyId: "BOSA", entityId: "27539638" },
{ name: "Barcelona El Prat (BCN)", skyId: "BCNA", entityId: "27539757" },
{ name: "Shanghai Pudong (PVG)", skyId: "PVGA", entityId: "27544851" },
{ name: "Washington Dulles (IAD)", skyId: "WASA", entityId: "27539642" },
{ name: "Houston George Bush (IAH)", skyId: "HOUA", entityId: "27539628" },
{ name: "Denver International (DEN)", skyId: "DENA", entityId: "27539640" },
{ name: "Philadelphia International (PHL)", skyId: "PHLA", entityId: "27539641" },
{ name: "Orlando International (MCO)", skyId: "MCO", entityId: "27539631" },
{ name: "Dallas/Fort Worth International (DFW)", skyId: "DFWA", entityId: "27539632" },
{ name: "Rio de Janeiro Galeão (GIG)", skyId: "GIG", entityId: "27543974" },
{ name: "Lisbon Humberto Delgado (LIS)", skyId: "LIS", entityId: "27539759" },
{ name: "Vienna International (VIE)", skyId: "VIEA", entityId: "27539741" },
{ name: "Jakarta Soekarno-Hatta (CGK)", skyId: "CGKA", entityId: "27544559" },
{ name: "Brussels Airport (BRU)", skyId: "BRUA", entityId: "27539739" },
{ name: "Auckland International (AKL)", skyId: "AKLA", entityId: "27540797" },
{ name: "Cape Town International (CPT)", skyId: "CPTA", entityId: "27540781" },
{ name: "Bangalore Kempegowda (BLR)", skyId: "BLRA", entityId: "27544554" },
{ name: "Mumbai Chhatrapati Shivaji (BOM)", skyId: "BOM", entityId: "27544557" },
{ name: "Delhi Indira Gandhi (DEL)", skyId: "DEL", entityId: "27544555" },
{ name: "Athens International (ATH)", skyId: "ATH", entityId: "27539737" },
{ name: "Helsinki Vantaa (HEL)", skyId: "HELA", entityId: "27539749" },
{ name: "Oslo Gardermoen (OSL)", skyId: "OSLA", entityId: "27539740" },
{ name: "Stockholm Arlanda (ARN)", skyId: "ARNA", entityId: "27539746" },
{ name: "Copenhagen Kastrup (CPH)", skyId: "CPHA", entityId: "27539738" },
{ name: "Edinburgh (EDI)", skyId: "EDIA", entityId: "27544007" },
{ name: "Manchester (MAN)", skyId: "MANA", entityId: "27544011" },
{ name: "Berlin Brandenburg (BER)", skyId: "BER", entityId: "27539761" },
{ name: "Prague Václav Havel (PRG)", skyId: "PRGA", entityId: "27539750" },
{ name: "Warsaw Chopin (WAW)", skyId: "WAWA", entityId: "27539748" },
{ name: "Dublin (DUB)", skyId: "DUBA", entityId: "27544009" },
{ name: "Glasgow International (GLA)", skyId: "GLAA", entityId: "27544010" },
{ name: "Nice Côte d'Azur (NCE)", skyId: "NCEA", entityId: "27539752" },
{ name: "Venice Marco Polo (VCE)", skyId: "VCEA", entityId: "27539755" },
{ name: "Naples International (NAP)", skyId: "NAPA", entityId: "27539756" },
{ name: "Milan Malpensa (MXP)", skyId: "MXPA", entityId: "27539754" },
{ name: "Florence Peretola (FLR)", skyId: "FLRA", entityId: "27539753" },
{ name: "Geneva (GVA)", skyId: "GVAA", entityId: "27539730" },
{ name: "Hamburg (HAM)", skyId: "HAMA", entityId: "27539744" }
];

// Populating the "From" and "To" select inputs
function populateAirports(selectElement) {
    airports.forEach(airport => {
        const option = document.createElement('option');
        option.value = `${airport.skyId}-${airport.entityId}`;
        option.text = airport.name;
        selectElement.appendChild(option);
    });
    
}

// Populating both the From and To select elements
populateAirports(fromSelect);
populateAirports(toSelect);


//  to Close the modal when the close button is clicked
closeModalButton.onclick = function() {
    modal.style.display = 'none';
};

// Redirect to sign-in page on button click
signInButton.addEventListener('click', () => {
    window.location.href = 'login.html'; 
});



// Function to fetch a random image for the destination
async function getRandomImage(destination) {
    const imageUrl = `https://api.unsplash.com/search/photos?query=${destination}&client_id=VbrZbEwWE6Jkcy8HlYhTpU0vFHNDmY72JXUeFuXGVmU`;
    try {
        const response = await fetch(imageUrl);
        const data = await response.json();
        if (data.results.length > 0) {
            return data.results[Math.floor(Math.random() * data.results.length)].urls.small;
        }
    } catch (error) {
        console.error('Error fetching destination image:', error);
    }
    return null;  // Return null if no image is found
}

// Function to save flight search to Firestore
async function saveFlightSearch(userId, searchDetails) {
    const flightSearchCollection = collection(db, 'flightsbooking');
    try {
        const docRef = await addDoc(flightSearchCollection, {
            userId: userId,
            from: searchDetails.from,
            to: searchDetails.to,
            departDate: searchDetails.departDate,
            returnDate: searchDetails.returnDate,
            passengers: searchDetails.passengers,
            cabinClass: searchDetails.cabinClass,
            timestamp: new Date()
        });
        return docRef.id;  // Return document ID after successful saving
    } catch (error) {
        console.error('Error saving flight search:', error);
    }
    return null;
}



// Function to display recent searches
async function displayRecentSearches(userId) {
    const flightSearchCollection = collection(db, 'flightsbooking');
    const querySnapshot = await getDocs(query(flightSearchCollection, where("userId", "==", userId), orderBy("timestamp", "desc"), limit(4)));
    
    // Clear the flightsearchcontainer instead of resultsDiv
    const flightSearchContainer = document.querySelector('.flightsearchcontainer');
    flightSearchContainer.innerHTML = '';  

    for (const doc of querySnapshot.docs) {
        const data = doc.data();
        const card = document.createElement('div');
        card.className = 'flight-search-card';  // Apply your CSS styles here
        card.innerHTML = `
            <div class="details">
                <h3>Flight from ${data.from} to ${data.to}</h3>
                <p>Depart Date: ${data.departDate}</p>
                <p>Return Date: ${data.returnDate}</p>
                <p>Passengers: ${data.passengers}</p>
                <p>Cabin Class: ${data.cabinClass}</p>
            </div>
            <img src="" alt="Destination image">  <!-- Placeholder for image -->
        `;

        // Append the card to flightsearchcontainer
        flightSearchContainer.appendChild(card);  

        // Fetch the random image for the destination
        const imageUrl = await getRandomImage(data.to);
        if (imageUrl) {
            card.querySelector('img').src = imageUrl;  // Update the image src after it's fetched
        }
    }
}



// Flight Search Form Submission
// Handle flight search form submission
flightSearchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // flight search parameters
    const from = document.getElementById('from').value.split('-');
    const to = document.getElementById('to').value.split('-');
    const departDate = document.getElementById('departDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;
    const cabinClass = document.getElementById('cabinClass').value;

    // Show loader when the search starts
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Check if user is authenticated
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // Fetch a random image of the destination
            const destinationImage = await getRandomImage(to[0]);

            // Prepare the search details
            const searchDetails = {
                from: from[0],  // Use the correct values from the split
                to: to[0],
                departDate,
                returnDate,
                passengers,
                cabinClass,
            };

            // Save flight search details to Firestore
            const docId = await saveFlightSearch(user.uid, searchDetails);

            // Display recent searches after saving
            await displayRecentSearches(user.uid);
        } else {
            resultsDiv.innerHTML = '<p>Please sign in to save your flight search.</p>';
        }
    });

    // API URL for flight search
    const flightUrl = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=${from[0]}&destinationSkyId=${to[0]}&originEntityId=${from[1]}&destinationEntityId=${to[1]}&date=${departDate}&returnDate=${returnDate}&cabinClass=${cabinClass}&adults=${passengers}&sortBy=best&currency=USD&market=en-US&countryCode=US`;

    const flightOptions = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9cca0158aemshf6204827b16c2a3p159952jsn542d52837f5a',
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
        }
    };

    // Flight data fetch function
    async function GetResults() {
        try {
            let response = await fetch(flightUrl, flightOptions);
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Response status:', response.status);
                console.error('Response body:', errorText);
                throw new Error('Network response was not ok');
            }

            let data = await response.json();
            if (data && data.data && data.data.itineraries) {
                displayFlightResults(data.data.itineraries);
            }
        } catch (error) {
            console.error('Error fetching flight data:', error);
            resultsDiv.innerHTML = '<p>Error fetching flight data. Please try again later.</p>';
        } finally {
            // Hide the loader after fetching results
            loader.style.display = 'none';
        }
    }

    // Call the flight search function
    GetResults();
});

// console.log(itineraries);



// Function to display flight results
function displayFlightResults(itineraries) {
    resultsDiv.innerHTML = ''; 
    console.log(itineraries);
    // Check if itineraries is an array and has elements
    if (Array.isArray(itineraries) && itineraries.length > 0) {
        itineraries.forEach((itinerary, index) => {
            const flightDiv = document.createElement('div');
            flightDiv.classList.add('flight-result');

            // Removing dollar sign and commas, then convert to integer
            const amountInUsd = parseInt(itinerary.price.formatted.replace(/[$,]/g, '')) || 0;
            const flightLogo = itinerary.legs[0]?.carriers?.marketing[0]?.logoUrl || ''; // Safe access for logo

            flightDiv.innerHTML = `
                <div class="main-style">
                    <div class="style">
                        <img class="img" src="${flightLogo}" alt="${itinerary.legs[0].carriers.marketing[0].name}" width="70" height="70"/>
                        
                        <div class="flight-details" id="details-${index}" style="display:none;">
                            <table>
                                <tr>
                                    <th>Leg</th>
                                    <th>Origin</th>
                                    <th>Destination</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                    <th>Carrier</th>
                                    <th>Flight Number</th>
                                </tr>
                                ${itinerary.legs.map(leg => `
                                    <tr>
                                        <td>${leg.origin.displayCode} to ${leg.destination.displayCode}</td>
                                        <td>${leg.origin.name || 'Unknown'}</td>
                                        <td>${leg.destination.name || 'Unknown'}</td>
                                        <td>${new Date(leg.departure).toLocaleString() || 'Unknown'}</td>
                                        <td>${new Date(leg.arrival).toLocaleString() || 'Unknown'}</td>
                                        <td><img src="${leg.carriers.marketing[0].logoUrl}" alt="${leg.carriers.marketing[0].name}" width="30" /> ${leg.carriers.marketing[0].name}</td>
                                        <td>${leg.segments[0].flightNumber || 'N/A'}</td>
                                    </tr>
                                `).join('')}
                            </table>
                        </div>
                       
                        <p>Flight ${index + 1} <br> <span class="red"> ${itinerary.price.formatted}
                        </span></p>
                    </div>

                    <div class="btn">
                        <button class="button-view">View Details</button>
                        <button class="button-book">Book Flight</button>                        
                    </div>
                </div>`;

            const flightToggle = flightDiv.querySelector('.button-view');
            const flightBook = flightDiv.querySelector('.button-book');
            
            // Toggle flight details visibility
            flightToggle.addEventListener('click', () => {
                toggleDetails(index);
            });
            
            // Book Flight Button Click
            flightBook.addEventListener('click', () => {
                bookFlight(itinerary, amountInUsd, flightLogo);
            });

            resultsDiv.appendChild(flightDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No flights found. Please try again later.</p>';
    }
}

// Function to toggle flight details visibility
function toggleDetails(index) {
    const detailsDiv = document.getElementById(`details-${index}`);
    if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
        detailsDiv.style.display = 'block';
    } else {
        detailsDiv.style.display = 'none';
    }
}   

let currentUser;
// Authentication State Listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        currentUser = user;
        console.log('User is logged in:', user.displayName || user.email);
    } else {
        // No user is signed in, show sign-in modal
        modal.style.display = 'block';
    }
});

// Function to handle flight booking
function bookFlight(itinerary, amountInUsd, flightLogo, amountInNaira) {
    const user = auth.currentUser;
    if (!user) {
        alert('You must be logged in to book a flight.');
        modal.style.display = 'block';
        return;
    }

    const userEmail = user.email;
    const userFirstName = currentUser.displayName ? user.displayName  : 'User'; // Extract first name or default to 'User'

    // Prepare flight details
    const flightDetails = {
        flightId: itinerary.id || `flight_${Date.now()}`,
        origin: itinerary.legs[0].origin.displayCode,
        destination: itinerary.legs[0].destination.city,
        departureDate: itinerary.legs[0].departure,
        arrivalDate: itinerary.legs[0].arrival,
        passengers: document.getElementById('passengers').value,
        cabinClass: document.getElementById('cabinClass').value,
        price: amountInUsd,
        flightLogo: flightLogo,
        flightCarrier: itinerary.legs[0].carriers.marketing[0].name,
        flightNumber: itinerary.legs[0].segments[0].flightNumber,
       
    };
 

    // Trigger Paystack payment
    processPayment(userFirstName, userEmail, amountInUsd, flightLogo, flightDetails);
}

// Function to process payment using Paystack
function processPayment(name, email, amountInUsd, logo, flightDetails) {
    let conversionRate = 1500; // Define conversion rate as an integer
    console.log('conv rate',conversionRate)
    // Ensure the conversion rate is read as an integer, not a floating-point
    conversionRate = parseInt(conversionRate, 10); // Force it to be treated as an integer
    const amountInNaira = amountInUsd * conversionRate; // Convert the amount to Naira
    // const amountInKobo = amountInNaira * 100; // Convert Naira to Kobo (for Paystack)
    // Add converted price to flightDetails
    flightDetails.convertPrice = amountInNaira;

    return new Promise((resolve, reject) => {
        const handler = PaystackPop.setup({
            key: 'pk_test_82c8d74a7f3be5328a4ed349caaa2344f376a7b0', // Replace with your Paystack public key
            email: email,
            amount: amountInNaira, // Convert to kobo
            currency: 'NGN',
            ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate unique reference
            metadata: {
                custom_fields: [
                    {
                        display_name: "Customer Name",
                        variable_name: "customer_name",
                        value: name
                    },
                    {
                        display_name: "Flight ID",
                        variable_name: "flight_id",
                        value: flightDetails.flightId // Flight ID for reference
                    }
                ]
            },
            logo: logo, // Add your logo URL here if desired
            callback: function(response) {
                alert('Payment successful! Transaction reference: ' + response.reference);
                // Save booking details to Firebase after successful payment
                saveBookingDetailsToFirebase(auth.currentUser, flightDetails, response.reference, amountInNaira
                    )
                    .then(() => {
                        resolve(response);
                    })
                    .catch(error => {
                        console.error('Error saving booking to Firebase:', error);
                        alert('Failed to save booking details.');
                        reject(error);
                    });
            },
            onClose: function() {
                alert('Payment window closed. Transaction was not completed.');
                reject(new Error('Payment window closed.'));
            }
        });
        handler.openIframe();
    });
}

// Import the captureAndUploadReceipt function from receipt.js
import { captureAndUploadReceipt } from '../PAYMENTRECEIPT/receipt.js';
// Function to save booking details to Firebase
async function saveBookingDetailsToFirebase(user, flightDetails, transactionReference, amountInNaira) {
    let receiptDownloadUrl; // Declare the variable here

    try {
        // Define the booking data
        const bookingData = {
            userId: user.uid, // User ID from Firebase authentication
            userEmail: user.email, // User email
            userFirstName: user.displayName || 'User', // User's first name or default to 'User'
            flightId: flightDetails.flightId, // Flight ID
            origin: flightDetails.origin, // Flight origin
            destination: flightDetails.destination, // Flight destination
            departureDate: flightDetails.departureDate, // Departure date
            arrivalDate: flightDetails.arrivalDate, // Arrival date
            passengers: flightDetails.passengers, // Number of passengers
            cabinClass: flightDetails.cabinClass, // Cabin class
            price: flightDetails.price, // Price of the flight
            flightLogo: flightDetails.flightLogo, // Flight logo
            transactionReference: transactionReference, // Transaction reference from Paystack
            bookingDate: new Date().toISOString() // Current date and time of booking
        };

        // Capture and upload the receipt first to get the receipt download URL
        receiptDownloadUrl = await captureAndUploadReceipt(user, flightDetails); // Assign to the variable

        // Include the receipt download URL in the booking data
        bookingData.receiptDownloadUrl = receiptDownloadUrl; // Update the booking data

        // Save the booking data to Firestore
        const docRef = await addDoc(collection(db, 'bookings'), bookingData);

           // Save flight details to sessionStorage
sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
 console.log('flightdetails saved to session storage')

        console.log('Booking details saved successfully with ID:', docRef.id);

    } catch (error) {
        console.error('Error saving booking details:', error);
        throw(error);
    }
}