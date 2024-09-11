// const bookingUrl = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates'; 

// // Booking API options
// const bookingOptions = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': '7918f68582msh2daf36f2950a146p1dc33djsn9d88ce7759ca',   
//     'x-rapidapi-host': 'booking-com15.p.rapidapi.com'  
//   },
//   params: {
//     latitude: '19.24232736426361',
//     longitude: '72.85841985686734',
//     adults: '1',
//     children_age: '0,17',
//     room_qty: '1',
//     units: 'metric',
//     page_number: '1',
//     temperature_unit: 'c',
//     languagecode: 'en-us',
//     currency_code: 'EUR',
//     arrival_date: '2024-09-15',  
//     departure_date: '2024-09-20', 
//     adults_number: '2',          
//     order_by: 'popularity',
//     locale: 'en-gb',
//     currency: 'USD'
//   }
// };

// // Fetch hotel data and store in sessionStorage
// fetch(`${bookingUrl}?${new URLSearchParams(bookingOptions.params).toString()}`, { headers: bookingOptions.headers })
//   .then(response => response.json())
//   .then(data => {
//     // Store hotel data in sessionStorage
//     sessionStorage.setItem('hotelsData', JSON.stringify(data));
//     console.log('Hotels data saved to sessionStorage:', data);
//   })
//   .catch(error => console.error('Error fetching hotel data:', error));








const bookingUrl = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates'; 

// Booking API options
const bookingOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '7918f68582msh2daf36f2950a146p1dc33djsn9d88ce7759ca',   
    'x-rapidapi-host': 'booking-com15.p.rapidapi.com'  
  },
  params: {
    latitude: '19.24232736426361',
    longitude: '72.85841985686734',
    adults: '1',
    children_age: '0,17',
    room_qty: '1',
    units: 'metric',
    page_number: '1',
    temperature_unit: 'c',
    languagecode: 'en-us',
    currency_code: 'EUR',
    arrival_date: '2024-09-15',  
    departure_date: '2024-09-20', 
    adults_number: '2',          
    order_by: 'popularity',
    locale: 'en-gb',
    currency: 'USD'
  }
};

// Async function to fetch hotel data and store in sessionStorage
async function fetchHotelData() {
  try {
    // Make the API call using fetch and await the response
    const response = await fetch(`${bookingUrl}?${new URLSearchParams(bookingOptions.params).toString()}`, {
      headers: bookingOptions.headers
    });
    
    // Await and parse the response to JSON
    const data = await response.json();
    
    // Store hotel data in sessionStorage
    sessionStorage.setItem('hotelsData', JSON.stringify(data));
    
    // Log the hotel data
    console.log('Hotels data saved to sessionStorage:', data);
    
  } catch (error) {
    // Handle and log any errors that occur
    console.error('Error fetching hotel data:', error);
  }
}

// Call the async function
fetchHotelData();
