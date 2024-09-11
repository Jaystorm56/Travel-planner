// const skyscannerUrl = 'https://skyscanner44.p.rapidapi.com/v1/searchFlights';
// const flightOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'your-rapidapi-key',  // Replace with your Skyscanner API key
//     'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
//   },
//   params: {
//     origin: 'LAX',  // Departure airport (IATA code)
//     destination: 'JFK',  // Arrival airport (IATA code)
//     departureDate: '2024-09-15', // Departure date
//     adults: '1',  // Number of adults
//     currency: 'USD',
//     locale: 'en-US'
//   }
// };

// // Fetch flight data and store it in sessionStorage
// fetch(`${skyscannerUrl}?${new URLSearchParams(flightOptions.params)}`, { headers: flightOptions.headers })
//   .then(response => response.json())
//   .then(data => {
//     // Store flight data in sessionStorage
//     sessionStorage.setItem('flightsData', JSON.stringify(data));
//     console.log('Flights data saved to sessionStorage:', data);
//   })
//   .catch(error => console.error('Error fetching flight data:', error));



  
const flightUrl = 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=LOND&destinationSkyId=NYCA&originEntityId=27544008&destinationEntityId=27537542&cabinClass=economy&adults=1&sortBy=best&currency=USD&market=en-US&countryCode=US';

const flightOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '7918f68582msh2daf36f2950a146p1dc33djsn9d88ce7759ca',  
    'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com' 
  },
  params: {
    origin: 'LOND',  
    destination: 'NYCA', 
    originEntityId: '27544008',
    destinationEntityId: '27537542',
    date: '2024-09-15', 
    return_date: '2024-09-20', 
    adults: '1',  
    children: '0', 
    cabin_class: 'economy', 
    currency: 'USD' 
  }
};

// Fetch flight data and store it in sessionStorage using .then()
fetch(`${flightUrl}?${new URLSearchParams(flightOptions.params).toString()}`, {
  headers: flightOptions.headers
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  
  })
  .then(data => {
    // Store flight data in sessionStorage
    sessionStorage.setItem('flightData', JSON.stringify(data));
    console.log('Flight data saved to sessionStorage:', data);
  })
  .catch(error => {
    // Handle errors in the fetch or the promise chain
    console.error('Error fetching flight data:', error);
  });
