const unsplashAccessKey = 'VbrZbEwWE6Jkcy8HlYhTpU0vFHNDmY72JXUeFuXGVmU'; // Unsplash Access Key
const vacationDetailsUrl = 'https://vacations-details-your-ultimate-guide.p.rapidapi.com/api/countries'; // Vacation Details API URL

let allDestinations = []; // Store all destinations
let isAllDisplayed = false; // Track whether all cards are displayed

async function fetchTravelDestinations() {
    try {
        // Fetch country details from Vacation Details API
        const response = await fetch(vacationDetailsUrl, {
            headers: {
                'x-rapidapi-key': '698c363322msh2bf9dce2d4c737ap1f8ffajsn7ee19051a165',
                'x-rapidapi-host': 'vacations-details-your-ultimate-guide.p.rapidapi.com'
            }
        });
        const data = await response.json();
        
        // Convert object to array for easier iteration
        allDestinations = Object.keys(data).map(country => ({
            name: country,
            capital: data[country].capital,
            vacation: data[country].vacation,
            currency: data[country].currency
        }));

        // Display the first 4 destinations
        displayInitialDestinations();
        
    } catch (error) {
        console.error('Error fetching travel destinations:', error);
    }
}

async function fetchImageFromUnsplash(countryName) {
    const unsplashUrl = `https://api.unsplash.com/search/photos?query=${countryName}&client_id=${unsplashAccessKey}`;
    const response = await fetch(unsplashUrl);
    const imageData = await response.json();
    return imageData.results[0]?.urls?.regular || 'default-image.jpg'; // Return first image or a default
}

function displayInitialDestinations() {
    const initialDestinations = allDestinations.slice(0, 4); // Show only 4 cards initially
    const destinationsContainer = document.querySelector('#destinations-container');
    destinationsContainer.innerHTML = ''; // Clear container

    initialDestinations.forEach(async (country) => {
        const imageUrl = await fetchImageFromUnsplash(country.name);
        displayDestination(country, imageUrl);
    });

      // Show the "See All" button and hide the "Close" button
      document.getElementById('see-all-btn').style.display = 'block';
      document.getElementById('close-btn').style.display = 'none';
  }


function displayAllDestinations() {
    const destinationsContainer = document.querySelector('#destinations-container');
    const remainingDestinations = allDestinations.slice(4); // Get remaining cards

    remainingDestinations.forEach(async (country) => {
        const imageUrl = await fetchImageFromUnsplash(country.name);
        displayDestination(country, imageUrl);
    });

   // Show the "Close" button and hide the "See All" button
   document.getElementById('see-all-btn').style.display = 'none';
   document.getElementById('close-btn').style.display = 'block';
}

function displayDestination(country, imageUrl) {
    const destinationsContainer = document.querySelector('#destinations-container');

    // Create card element
    const card = document.createElement('div');
    card.classList.add('destination-card');
    card.style.backgroundImage = `url(${imageUrl})`;

    card.innerHTML = `
        <div class="destination-info">
            <h3>${country.name}</h3>
            <p>Capital: ${country.capital}</p>
            <p>Tip: ${country.vacation}</p>
            <button onclick="viewMore('${country.name}')">View More</button>
        </div>
    `;

    destinationsContainer.appendChild(card);
}

function viewMore(countryName) {
    // Logic to show more photos or details about the destination
    console.log(`Viewing more details for ${countryName}`);
}

// Event listener to load all destinations when the "See All" button is clicked
document.getElementById('see-all-btn').addEventListener('click', () => {
    if (!isAllDisplayed) {
        displayAllDestinations();
        isAllDisplayed = true;
    }
});

// Event listener to restore initial 4 cards when the "Close" button is clicked
document.getElementById('close-btn').addEventListener('click', () => {
    displayInitialDestinations();
    isAllDisplayed = false;
});

// Call the function to display travel destinations when the page loads
document.addEventListener('DOMContentLoaded', fetchTravelDestinations);
