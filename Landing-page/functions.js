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
    // Add more airports as needed...
];

// Populate the "From" and "To" select inputs
const fromSelect = document.querySelector('.from-select');
const toSelect = document.querySelector('.to-select');

// Function to populate options from the airport object
function populateAirports(selectElement) {
    airports.forEach(airport => {
        const option = document.createElement('option');
        option.value = `${airport.skyId}-${airport.entityId}`;
        option.text = airport.name;
        selectElement.appendChild(option);
    });
}

// Populate both the From and To select elements
populateAirports(fromSelect);
populateAirports(toSelect);

const flightOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '7918f68582msh2daf36f29550a146p1dc33djsn9d88ce7759ca',
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    }
};

const flightSearchForm = document.querySelector('.flight-search-form');
const resultsDiv = document.querySelector('.results');

// Event listener for form submission
flightSearchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const from = fromSelect.value.split('-');
    const to = toSelect.value.split('-');
    const departDate = document.querySelector('.depart-date').value;
    const returnDate = document.querySelector('.return-date').value;
    const passengers = document.querySelector('.passengers').value;
    const cabinClass = document.querySelector('.cabin-class').value;

    const flightUrl = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=${from[0]}&destinationSkyId=${to[0]}&originEntityId=${from[1]}&destinationEntityId=${to[1]}&date=${departDate}&returnDate=${returnDate}&cabinClass=${cabinClass}&adults=${passengers}&sortBy=best&currency=USD&market=en-US&countryCode=US`;

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
            console.log(data); 
            data = data.data; 
            displayFlightResults(data.itineraries);
        } catch (error) {
            console.error('Error fetching flight data:', error);
        }
    }
    GetResults();
});

// Function to display flight results
function displayFlightResults(itineraries) {
    resultsDiv.innerHTML = ''; // Clear previous results

    if (Array.isArray(itineraries) && itineraries.length > 0) {
        itineraries.forEach((itinerary, index) => {
            const flightDiv = document.createElement('div');
            flightDiv.classList.add('flight-result');
            flightDiv.innerHTML = `
                <p>Flight ${index + 1} - Price: ${itinerary.price.formatted || 'N/A'}</p>
                <button onclick="toggleDetails(${index})">View Details</button>
                <div class="flight-details" id="details-${index}" style="display:none;">
                    <table>
                        <tr><th>Leg</th><th>Origin</th><th>Destination</th><th>Departure</th><th>Arrival</th><th>Carrier</th><th>Flight Number</th></tr>
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
            `;
            resultsDiv.appendChild(flightDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No flights found. Please try again later.</p>';
    }
}

// Function to toggle flight details visibility
function toggleDetails(index) {
    const detailsDiv = document.getElementById(`details-${index}`);
    detailsDiv.style.display = (detailsDiv.style.display === 'block') ? 'none' : 'block';
}
