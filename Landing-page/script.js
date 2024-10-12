// const airports = [
//     { name: "London Heathrow (LHR)", skyId: "LOND", entityId: "27544008" },
//     { name: "New York John F. Kennedy (JFK)", skyId: "NYCA", entityId: "27537542" },
//     { name: "Los Angeles International (LAX)", skyId: "LAXA", entityId: "27539633" },
//     { name: "Dubai International (DXB)", skyId: "DXBA", entityId: "27543461" },
//     { name: "Singapore Changi (SIN)", skyId: "SIN", entityId: "27544553" },
//     { name: "Hong Kong International (HKG)", skyId: "HKG", entityId: "27538782" },
//     { name: "Sydney Kingsford Smith (SYD)", skyId: "SYDA", entityId: "27540791" },
//     { name: "Lagos Murtala Muhammed (LOS)", skyId: "LOS", entityId: "27544551" },
//     { name: "Abuja Nnamdi Azikiwe (ABV)", skyId: "ABV", entityId: "27544549" },
//     { name: "Tokyo Haneda (HND)", skyId: "HND", entityId: "27546500" },
//     { name: "Paris Charles de Gaulle (CDG)", skyId: "PARI", entityId: "27539733" },
//     { name: "Frankfurt (FRA)", skyId: "FRAN", entityId: "27539745" },
//     { name: "Amsterdam Schiphol (AMS)", skyId: "AMSA", entityId: "27539779" },
//     { name: "Chicago O'Hare (ORD)", skyId: "CHIA", entityId: "27539639" },
//     { name: "Atlanta Hartsfield-Jackson (ATL)", skyId: "ATLA", entityId: "27539645" },
//     { name: "Toronto Pearson (YYZ)", skyId: "YYZA", entityId: "27541631" },
//     { name: "Madrid Barajas (MAD)", skyId: "MAD", entityId: "27539760" },
//     { name: "Beijing Capital (PEK)", skyId: "PEKA", entityId: "27544846" },
//     { name: "Bangkok Suvarnabhumi (BKK)", skyId: "BKKA", entityId: "27544556" },
//     { name: "San Francisco International (SFO)", skyId: "SFO", entityId: "27539634" },
//     { name: "Miami International (MIA)", skyId: "MIA", entityId: "27539625" },
//     { name: "Melbourne Tullamarine (MEL)", skyId: "MELA", entityId: "27540795" },
//     { name: "Munich (MUC)", skyId: "MUNI", entityId: "27539743" },
//     { name: "Rome Fiumicino (FCO)", skyId: "ROMA", entityId: "27539758" },
//     { name: "Istanbul Airport (IST)", skyId: "ISTA", entityId: "27545112" },
//     { name: "Kuala Lumpur International (KUL)", skyId: "KUL", entityId: "27544558" },
//     { name: "Doha Hamad International (DOH)", skyId: "DOHA", entityId: "27543455" },
//     { name: "Seoul Incheon (ICN)", skyId: "ICN", entityId: "27544854" },
//     { name: "Mexico City (MEX)", skyId: "MEX", entityId: "27543879" },
//     { name: "São Paulo Guarulhos (GRU)", skyId: "GRUA", entityId: "27543972" },
//     { name: "Zurich (ZRH)", skyId: "ZRHA", entityId: "27539731" },
//     { name: "Vienna International (VIE)", skyId: "VIEA", entityId: "27539741" },
//     { name: "Boston Logan International (BOS)", skyId: "BOSA", entityId: "27539638" },
//     { name: "Barcelona El Prat (BCN)", skyId: "BCNA", entityId: "27539757" },
//     { name: "Shanghai Pudong (PVG)", skyId: "PVGA", entityId: "27544851" },
//     { name: "Washington Dulles (IAD)", skyId: "WASA", entityId: "27539642" },
//     { name: "Houston George Bush (IAH)", skyId: "HOUA", entityId: "27539628" },
//     { name: "Denver International (DEN)", skyId: "DENA", entityId: "27539640" },
//     { name: "Philadelphia International (PHL)", skyId: "PHLA", entityId: "27539641" },
//     { name: "Orlando International (MCO)", skyId: "MCO", entityId: "27539631" },
//     { name: "Dallas/Fort Worth International (DFW)", skyId: "DFWA", entityId: "27539632" },
//     { name: "Rio de Janeiro Galeão (GIG)", skyId: "GIG", entityId: "27543974" },
//     { name: "Lisbon Humberto Delgado (LIS)", skyId: "LIS", entityId: "27539759" },
//     { name: "Vienna International (VIE)", skyId: "VIEA", entityId: "27539741" },
//     { name: "Jakarta Soekarno-Hatta (CGK)", skyId: "CGKA", entityId: "27544559" },
//     { name: "Brussels Airport (BRU)", skyId: "BRUA", entityId: "27539739" },
//     { name: "Auckland International (AKL)", skyId: "AKLA", entityId: "27540797" },
//     { name: "Cape Town International (CPT)", skyId: "CPTA", entityId: "27540781" },
//     { name: "Bangalore Kempegowda (BLR)", skyId: "BLRA", entityId: "27544554" },
//     { name: "Mumbai Chhatrapati Shivaji (BOM)", skyId: "BOM", entityId: "27544557" },
//     { name: "Delhi Indira Gandhi (DEL)", skyId: "DEL", entityId: "27544555" },
//     { name: "Athens International (ATH)", skyId: "ATH", entityId: "27539737" },
//     { name: "Helsinki Vantaa (HEL)", skyId: "HELA", entityId: "27539749" },
//     { name: "Oslo Gardermoen (OSL)", skyId: "OSLA", entityId: "27539740" },
//     { name: "Stockholm Arlanda (ARN)", skyId: "ARNA", entityId: "27539746" },
//     { name: "Copenhagen Kastrup (CPH)", skyId: "CPHA", entityId: "27539738" },
//     { name: "Edinburgh (EDI)", skyId: "EDIA", entityId: "27544007" },
//     { name: "Manchester (MAN)", skyId: "MANA", entityId: "27544011" },
//     { name: "Berlin Brandenburg (BER)", skyId: "BER", entityId: "27539761" },
//     { name: "Prague Václav Havel (PRG)", skyId: "PRGA", entityId: "27539750" },
//     { name: "Warsaw Chopin (WAW)", skyId: "WAWA", entityId: "27539748" },
//     { name: "Dublin (DUB)", skyId: "DUBA", entityId: "27544009" },
//     { name: "Glasgow International (GLA)", skyId: "GLAA", entityId: "27544010" },
//     { name: "Nice Côte d'Azur (NCE)", skyId: "NCEA", entityId: "27539752" },
//     { name: "Venice Marco Polo (VCE)", skyId: "VCEA", entityId: "27539755" },
//     { name: "Naples International (NAP)", skyId: "NAPA", entityId: "27539756" },
//     { name: "Milan Malpensa (MXP)", skyId: "MXPA", entityId: "27539754" },
//     { name: "Florence Peretola (FLR)", skyId: "FLRA", entityId: "27539753" },
//     { name: "Geneva (GVA)", skyId: "GVAA", entityId: "27539730" },
//     { name: "Hamburg (HAM)", skyId: "HAMA", entityId: "27539744" }
// ];


// // Function to search airports by country name
// function searchAirportsByCountry(country) {
//     return airports.filter(airport => airport.name.toLowerCase().includes(country.toLowerCase()));
// }

// // Add event listener to "Show Flights" button
// document.getElementById('showFlightsBtn').addEventListener('click', async () => {
//     const fromCountry = document.getElementById('fromCity').value;
//     const toCountry = document.getElementById('toCity').value;
//     const departDate = document.getElementById('departDate').value;
//     const returnDate = document.getElementById('returnDate').value;
//     const passengers = document.getElementById('passengers').value;
//     const cabinClass = document.getElementById('cabinClass').value;

//     // Find airports in the selected countries
//     const fromAirports = searchAirportsByCountry(fromCountry);
//     const toAirports = searchAirportsByCountry(toCountry);

//     if (fromAirports.length === 0 || toAirports.length === 0) {
//         alert("No airports found for the selected countries.");
//         return;
//     }

//     const fromAirport = fromAirports[0];
//     const toAirport = toAirports[0];

//         const flightUrl = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=${from[0]}&destinationSkyId=${to[0]}&originEntityId=${from[1]}&destinationEntityId=${to[1]}&date=${departDate}&returnDate=${returnDate}&cabinClass=${cabinClass}&adults=${passengers}&sortBy=best&currency=USD&market=en-US&countryCode=US`;

//     const flightOptions = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '7918f68582msh2daf36f2950a146p1dc33djsn9d88ce7759ca',
//             'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
//         }
//     };

//     try {
//         let response = await fetch(flightUrl, flightOptions);
//         if (!response.ok) {
//             const errorText = await response.text();
//             console.error('Response status:', response.status);
//             console.error('Response body:', errorText);
//             throw new Error('Network response was not ok');
//         }

//         let data = await response.json();
//         displayFlightResults(data.data.itineraries);
//     } catch (error) {
//         console.error('Error fetching flight data:', error);
//     }
// });

// // Function to display flight results in the results div
// function displayFlightResults(itineraries) {
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = ''; // Clear previous results

//     if (Array.isArray(itineraries) && itineraries.length > 0) {
//         itineraries.forEach((itinerary, index) => {
//             const flightDiv = document.createElement('div');
//             flightDiv.classList.add('flight-result');
//             flightDiv.innerHTML = `
//                 <p>Flight ${index + 1} - Price: ${itinerary.price.formatted || 'N/A'}</p>
//                 <button onclick="toggleDetails(${index})">View Details</button>
//                 <div class="flight-details" id="details-${index}" style="display:none;">
//                     <table>
//                         <tr><th>Leg</th><th>Origin</th><th>Destination</th><th>Departure</th><th>Arrival</th><th>Carrier</th><th>Flight Number</th></tr>
//                         ${itinerary.legs.map(leg => `
//                             <tr>
//                                 <td>${leg.origin.displayCode} to ${leg.destination.displayCode}</td>
//                                 <td>${leg.origin.name || 'Unknown'}</td>
//                                 <td>${leg.destination.name || 'Unknown'}</td>
//                                 <td>${new Date(leg.departure).toLocaleString() || 'Unknown'}</td>
//                                 <td>${new Date(leg.arrival).toLocaleString() || 'Unknown'}</td>
//                                 <td><img src="${leg.carriers.marketing[0].logoUrl}" alt="${leg.carriers.marketing[0].name}" width="30" /> ${leg.carriers.marketing[0].name}</td>
//                                 <td>${leg.segments[0].flightNumber || 'N/A'}</td>
//                             </tr>
//                         `).join('')}
//                     </table>
//                 </div>
//             `;
//             resultsDiv.appendChild(flightDiv);
//         });
//     } else {
//         resultsDiv.innerHTML = '<p>No flights found. Please try again later.</p>';
//     }
// }

// // Function to toggle flight details visibility
// function toggleDetails(index) {
//     const detailsDiv = document.getElementById(`details-${index}`);
//     if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
//         detailsDiv.style.display = 'block';
//     } else {
//         detailsDiv.style.display = 'none';
//     }
// }

// // Function to display flight results in the modal
// function displayFlightResults(itineraries) {
//     const modal = document.getElementById('flightModal');
//     const modalResults = document.getElementById('modalResults');
//     modalResults.innerHTML = ''; // Clear previous results

//     if (Array.isArray(itineraries) && itineraries.length > 0) {
//         itineraries.forEach((itinerary, index) => {
//             const flightDiv = document.createElement('div');
//             flightDiv.classList.add('flight-result');
//             flightDiv.innerHTML = `
//                 <p>Flight ${index + 1} - Price: ${itinerary.price.formatted || 'N/A'}</p>
//                 <button onclick="toggleDetails(${index})">View Details</button>
//                 <div class="flight-details" id="details-${index}" style="display:none;">
//                     <table>
//                         <tr><th>Leg</th><th>Origin</th><th>Destination</th><th>Departure</th><th>Arrival</th><th>Carrier</th><th>Flight Number</th></tr>
//                         ${itinerary.legs.map(leg => `
//                             <tr>
//                                 <td>${leg.origin.displayCode} to ${leg.destination.displayCode}</td>
//                                 <td>${leg.origin.name || 'Unknown'}</td>
//                                 <td>${leg.destination.name || 'Unknown'}</td>
//                                 <td>${new Date(leg.departure).toLocaleString() || 'Unknown'}</td>
//                                 <td>${new Date(leg.arrival).toLocaleString() || 'Unknown'}</td>
//                                 <td><img src="${leg.carriers.marketing[0].logoUrl}" alt="${leg.carriers.marketing[0].name}" width="30" /> ${leg.carriers.marketing[0].name}</td>
//                                 <td>${leg.segments[0].flightNumber || 'N/A'}</td>
//                             </tr>
//                         `).join('')}
//                     </table>
//                 </div>
//             `;
//             modalResults.appendChild(flightDiv);
//         });

//         // Show the modal after adding results
//         modal.style.display = 'block';
//     } else {
//         modalResults.innerHTML = '<p>No flights found. Please try again later.</p>';
//         modal.style.display = 'block'; // Show modal even if no results are found
//     }
// }

// // Function to toggle flight details visibility (already exists)
// function toggleDetails(index) {
//     const detailsDiv = document.getElementById(`details-${index}`);
//     if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
//         detailsDiv.style.display = 'block';
//     } else {
//         detailsDiv.style.display = 'none';
//     }
// }

// // Add close functionality to the modal
// document.querySelector('.close').addEventListener('click', () => {
//     document.getElementById('flightModal').style.display = 'none';
// });

// // Close the modal when clicking outside of the modal content
// window.addEventListener('click', (event) => {
//     const modal = document.getElementById('flightModal');
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });


//     // Populate the "From" and "To" select inputs
//     const fromSelect = document.getElementById('from');
//     const toSelect = document.getElementById('to');

//     // Function to populate options from the airport object
//     function populateAirports(selectElement) {
//         airports.forEach(airport => {
//             const option = document.createElement('option');
//             option.value = `${airport.skyId}-${airport.entityId}`;
//             option.text = airport.name;
//             selectElement.appendChild(option);
//         });
//     }

//     // Populate both the From and To select elements
//     populateAirports(fromSelect);
//     populateAirports(toSelect);

//     const flightOptions = {
//         method: 'GET',
//         headers: {
//     'x-rapidapi-key': '7918f68582msh2daf36f2950a146p1dc33djsn9d88ce7759ca',
//     'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
// }
//     };

//     const flightSearchForm = document.getElementById('flightSearchForm');
//     const resultsDiv = document.getElementById('results');

//     flightSearchForm.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         const from = document.getElementById('from').value.split('-');
//         const to = document.getElementById('to').value.split('-');
//         const departDate = document.getElementById('departDate').value;
//         const returnDate = document.getElementById('returnDate').value;
//         const passengers = document.getElementById('passengers').value;
//         const cabinClass = document.getElementById('cabinClass').value;

//         const flightUrl = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=${from[0]}&destinationSkyId=${to[0]}&originEntityId=${from[1]}&destinationEntityId=${to[1]}&date=${departDate}&returnDate=${returnDate}&cabinClass=${cabinClass}&adults=${passengers}&sortBy=best&currency=USD&market=en-US&countryCode=US`;

//         async function GetResults(){
//             try {
//                 let response = await fetch(flightUrl, flightOptions);
//                 if (!response.ok) {
//                     const errorText = await response.text(); 
//                     console.error('Response status:', response.status);
//                     console.error('Response body:', errorText);
//                     throw new Error('Network response was not ok');
//                 }
    
//                 let data = await response.json();
//                 console.log(data); 
//                 data = await data.data;
//                 console.log("hey");
//                 console.log(data);
//                 console.log("haaa");
//                 displayFlightResults(data.itineraries);
//             } catch (error) {
//                 console.error('Error fetching flight data:', error);
//             }
//         }
//         GetResults();
//     });

//     function displayFlightResults(itineraries) {
//         console.log(itineraries);
// resultsDiv.innerHTML = ''; // Clear previous results

// // Check if itineraries is an array and has elements
// if (Array.isArray(itineraries) && itineraries.length > 0) {
//     itineraries.forEach((itinerary, index) => {
//         const flightDiv = document.createElement('div');
//         flightDiv.classList.add('flight-result');
//         flightDiv.innerHTML = `
//             <p>Flight ${index + 1} - Price: ${itinerary.price.formatted || 'N/A'}</p>
//             <button onclick="toggleDetails(${index})">View Details</button>
//             <div class="flight-details" id="details-${index}" style="display:none;">
//                 <table>
//                     <tr><th>Leg</th><th>Origin</th><th>Destination</th><th>Departure</th><th>Arrival</th><th>Carrier</th><th>Flight Number</th></tr>
//                     ${itinerary.legs.map(leg => `
//                         <tr>
//                             <td>${leg.origin.displayCode} to ${leg.destination.displayCode}</td>
//                             <td>${leg.origin.name || 'Unknown'}</td>
//                             <td>${leg.destination.name || 'Unknown'}</td>
//                             <td>${new Date(leg.departure).toLocaleString() || 'Unknown'}</td>
//                             <td>${new Date(leg.arrival).toLocaleString() || 'Unknown'}</td>
//                             <td><img src="${leg.carriers.marketing[0].logoUrl}" alt="${leg.carriers.marketing[0].name}" width="30" /> ${leg.carriers.marketing[0].name}</td>
//                             <td>${leg.segments[0].flightNumber || 'N/A'}</td>
//                         </tr>
//                     `).join('')}
//                 </table>
//             </div>
//         `;
//         resultsDiv.appendChild(flightDiv);
//     });
// } else {
//     resultsDiv.innerHTML = '<p>No flights found. Please try again later.</p>';
// }
// }

// // Function to toggle flight details visibility
//     function toggleDetails(index) {
//         const detailsDiv = document.getElementById(`details-${index}`);
//         if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
//             detailsDiv.style.display = 'block';
//         } else {
//             detailsDiv.style.display = 'none';
//         }
//     }

// //        // Populate the "From" and "To" select inputs
// //     const fromSelect = document.getElementById('from');
// //     const toSelect = document.getElementById('to');

// //     function populateAirports(selectElement) {
// //         airports.forEach(airport => {
// //             const option = document.createElement('option');
// //             option.value = `${airport.skyId}-${airport.entityId}`;
// //             option.text = airport.name;
// //             selectElement.appendChild(option);
// //         });
// //     }

// //     populateAirports(fromSelect);
// //     populateAirports(toSelect);

// //     const flightOptions = {
// //                 method: 'GET',
// //                 headers: {
// //             'x-rapidapi-key': '7918f68582msh2daf36f2950a146p1dc33djsn9d88ce7759ca',
// //             'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
// //         }
// //             };

// //     const flightSearchForm = document.getElementById('flightSearchForm');
// //     const resultsDiv = document.getElementById('results');
// //     const showFlightsBtn = document.getElementById('showFlightsBtn');

// //     // Event listener for "Show Flights" button
// //     showFlightsBtn.addEventListener('click', async (e) => {
// //         e.preventDefault();

// //         const from = document.getElementById('from').value.split('-');
// //         const to = document.getElementById('to').value.split('-');
// //         const departDate = document.getElementById('departDate').value;
// //         const returnDate = document.getElementById('returnDate').value || '';
// //         const passengers = document.getElementById('passengers').value;
// //         const cabinClass = document.getElementById('cabinClass').value;

// //         const flightUrl = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=${from[0]}&destinationSkyId=${to[0]}&originEntityId=${from[1]}&destinationEntityId=${to[1]}&date=${departDate}&returnDate=${returnDate}&cabinClass=${cabinClass}&adults=${passengers}&sortBy=best&currency=USD&market=en-US&countryCode=US`;

// //         try {
// //             const response = await fetch(flightUrl, flightOptions);
// //             if (!response.ok) {
// //                 const errorText = await response.text(); 
// //                 console.error('Response status:', response.status);
// //                 console.error('Response body:', errorText);
// //                 throw new Error('Network response was not ok');
// //             }

// //             const data = await response.json();
// //             displayFlightResults(data.data.itineraries);
// //         } catch (error) {
// //             console.error('Error fetching flight data:', error);
// //         }
// //     });

// //     // function displayFlightResults(itineraries) {
// //     //     resultsDiv.innerHTML = ''; // Clear previous results

// //     //     if (Array.isArray(itineraries) && itineraries.length > 0) {
// //     //         itineraries.forEach((itinerary, index) => {
// //     //             const flightDiv = document.createElement('div');
// //     //             flightDiv.classList.add('flight-result');
// //     //             flightDiv.innerHTML = `
// //     //                 <p>Flight ${index + 1} - Price: ${itinerary.price.formatted || 'N/A'}</p>
// //     //                 <button onclick="toggleDetails(${index})">View Details</button>
// //     //                 <div class="flight-details" id="details-${index}" style="display:none;">
// //     //                     <table>
// //     //                         <tr><th>Leg</th><th>Origin</th><th>Destination</th><th>Departure</th><th>Arrival</th><th>Carrier</th><th>Flight Number</th></tr>
// //     //                         ${itinerary.legs.map(leg => `
// //     //                             <tr>
// //     //                                 <td>${leg.origin.displayCode} to ${leg.destination.displayCode}</td>
// //     //                                 <td>${leg.origin.name || 'Unknown'}</td>
// //     //                                 <td>${leg.destination.name || 'Unknown'}</td>
// //     //                                 <td>${new Date(leg.departure).toLocaleString() || 'Unknown'}</td>
// //     //                                 <td>${new Date(leg.arrival).toLocaleString() || 'Unknown'}</td>
// //     //                                 <td><img src="${leg.carriers.marketing[0].logoUrl}" alt="${leg.carriers.marketing[0].name}" width="30" /> ${leg.carriers.marketing[0].name}</td>
// //     //                                 <td>${leg.segments[0].flightNumber || 'N/A'}</td>
// //     //                             </tr>
// //     //                         `).join('')}
// //     //                     </table>
// //     //                 </div>
// //     //             `;
// //     //             resultsDiv.appendChild(flightDiv);
// //     //         });
// //     //     } else {
// //     //         resultsDiv.innerHTML = '<p>No flights found. Please try again later.</p>';
// //     //     }
// //     // }

// //     function displayFlightResults(itineraries) {
// //         resultsDiv.innerHTML = ''; // Clear previous results
    
// //         if (Array.isArray(itineraries) && itineraries.length > 0) {
// //             itineraries.forEach((itinerary, index) => {
// //                 const flightDiv = document.createElement('div');
// //                 flightDiv.classList.add('flight-result');
// //                 flightDiv.innerHTML = `
// //                     <p>Flight ${index + 1} - Price: ${itinerary.price.formatted || 'N/A'}</p>
// //                     <button onclick="toggleDetails(${index})">View Details</button>
// //                     <div class="flight-details" id="details-${index}" style="display:none;">
// //                         <table>
// //                             <tr><th>Leg</th><th>Origin City</th><th>Origin Country</th><th>Destination City</th><th>Destination Country</th><th>Departure</th><th>Arrival</th><th>Carrier</th><th>Flight Number</th></tr>
// //                             ${itinerary.legs.map(leg => `
// //                                 <tr>
// //                                     <td>${leg.origin.displayCode} to ${leg.destination.displayCode}</td>
// //                                     <td>${leg.origin.city || 'Unknown'}</td>
// //                                     <td>${leg.origin.country || 'Unknown'}</td>
// //                                     <td>${leg.destination.city || 'Unknown'}</td>
// //                                     <td>${leg.destination.country || 'Unknown'}</td>
// //                                     <td>${new Date(leg.departure).toLocaleString() || 'Unknown'}</td>
// //                                     <td>${new Date(leg.arrival).toLocaleString() || 'Unknown'}</td>
// //                                     <td><img src="${leg.carriers.marketing[0].logoUrl}" alt="${leg.carriers.marketing[0].name}" width="30" /> ${leg.carriers.marketing[0].name}</td>
// //                                     <td>${leg.segments[0].flightNumber || 'N/A'}</td>
// //                                 </tr>
// //                             `).join('')}
// //                         </table>
// //                     </div>
// //                 `;
// //                 resultsDiv.appendChild(flightDiv);
// //             });
// //         } else {
// //             resultsDiv.innerHTML = '<p>No flights found. Please try again later.</p>';
// //         }
// //     }
    

// //     function toggleDetails(index) {
// //         const detailsDiv = document.getElementById(`details-${index}`);
// //         if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
// //             detailsDiv.style.display = 'block';
// //         } else {
// //             detailsDiv.style.display = 'none';
// //         }
// //     }

// const airports = [
//     { name: "London Heathrow (LHR)", skyId: "LOND", entityId: "27544008" },
//     { name: "New York John F. Kennedy (JFK)", skyId: "NYCA", entityId: "27537542" },
//     { name: "Los Angeles International (LAX)", skyId: "LAXA", entityId: "27539633" },
//     { name: "Dubai International (DXB)", skyId: "DXBA", entityId: "27543461" },
//     { name: "Singapore Changi (SIN)", skyId: "SIN", entityId: "27544553" },
//     { name: "Hong Kong International (HKG)", skyId: "HKG", entityId: "27538782" },
//     { name: "Sydney Kingsford Smith (SYD)", skyId: "SYDA", entityId: "27540791" },
//     { name: "Lagos Murtala Muhammed (LOS)", skyId: "LOS", entityId: "27544551" },
//     { name: "Abuja Nnamdi Azikiwe (ABV)", skyId: "ABV", entityId: "27544549" },
//     { name: "Tokyo Haneda (HND)", skyId: "HND", entityId: "27546500" },
//     { name: "Paris Charles de Gaulle (CDG)", skyId: "PARI", entityId: "27539733" },
//     { name: "Frankfurt (FRA)", skyId: "FRAN", entityId: "27539745" },
//     { name: "Amsterdam Schiphol (AMS)", skyId: "AMSA", entityId: "27539779" },
//     { name: "Chicago O'Hare (ORD)", skyId: "CHIA", entityId: "27539639" },
//     { name: "Atlanta Hartsfield-Jackson (ATL)", skyId: "ATLA", entityId: "27539645" },
//     { name: "Toronto Pearson (YYZ)", skyId: "YYZA", entityId: "27541631" },
//     { name: "Madrid Barajas (MAD)", skyId: "MAD", entityId: "27539760" },
//     { name: "Beijing Capital (PEK)", skyId: "PEKA", entityId: "27544846" },
//     { name: "Bangkok Suvarnabhumi (BKK)", skyId: "BKKA", entityId: "27544556" },
//     { name: "San Francisco International (SFO)", skyId: "SFO", entityId: "27539634" },
//     { name: "Miami International (MIA)", skyId: "MIA", entityId: "27539625" },
//     { name: "Melbourne Tullamarine (MEL)", skyId: "MELA", entityId: "27540795" },
//     { name: "Munich (MUC)", skyId: "MUNI", entityId: "27539743" },
//     { name: "Rome Fiumicino (FCO)", skyId: "ROMA", entityId: "27539758" },
//     { name: "Istanbul Airport (IST)", skyId: "ISTA", entityId: "27545112" },
//     { name: "Kuala Lumpur International (KUL)", skyId: "KUL", entityId: "27544558" },
//     { name: "Doha Hamad International (DOH)", skyId: "DOHA", entityId: "27543455" },
//     { name: "Seoul Incheon (ICN)", skyId: "ICN", entityId: "27544854" },
//     { name: "Mexico City (MEX)", skyId: "MEX", entityId: "27543879" },
//     { name: "São Paulo Guarulhos (GRU)", skyId: "GRUA", entityId: "27543972" },
//     { name: "Zurich (ZRH)", skyId: "ZRHA", entityId: "27539731" },
//     { name: "Vienna International (VIE)", skyId: "VIEA", entityId: "27539741" },
//     { name: "Boston Logan International (BOS)", skyId: "BOSA", entityId: "27539638" },
//     { name: "Barcelona El Prat (BCN)", skyId: "BCNA", entityId: "27539757" },
//     { name: "Shanghai Pudong (PVG)", skyId: "PVGA", entityId: "27544851" },
//     { name: "Washington Dulles (IAD)", skyId: "WASA", entityId: "27539642" },
//     { name: "Houston George Bush (IAH)", skyId: "HOUA", entityId: "27539628" },
//     { name: "Denver International (DEN)", skyId: "DENA", entityId: "27539640" },
//     { name: "Philadelphia International (PHL)", skyId: "PHLA", entityId: "27539641" },
//     { name: "Orlando International (MCO)", skyId: "MCO", entityId: "27539631" },
//     { name: "Dallas/Fort Worth International (DFW)", skyId: "DFWA", entityId: "27539632" },
//     { name: "Rio de Janeiro Galeão (GIG)", skyId: "GIG", entityId: "27543974" },
//     { name: "Lisbon Humberto Delgado (LIS)", skyId: "LIS", entityId: "27539759" },
//     { name: "Vienna International (VIE)", skyId: "VIEA", entityId: "27539741" },
//     { name: "Jakarta Soekarno-Hatta (CGK)", skyId: "CGKA", entityId: "27544559" },
//     { name: "Brussels Airport (BRU)", skyId: "BRUA", entityId: "27539739" },
//     { name: "Auckland International (AKL)", skyId: "AKLA", entityId: "27540797" },
//     { name: "Cape Town International (CPT)", skyId: "CPTA", entityId: "27540781" },
//     { name: "Bangalore Kempegowda (BLR)", skyId: "BLRA", entityId: "27544554" },
//     { name: "Mumbai Chhatrapati Shivaji (BOM)", skyId: "BOM", entityId: "27544557" },
//     { name: "Delhi Indira Gandhi (DEL)", skyId: "DEL", entityId: "27544555" },
//     { name: "Athens International (ATH)", skyId: "ATH", entityId: "27539737" },
//     { name: "Helsinki Vantaa (HEL)", skyId: "HELA", entityId: "27539749" },
//     { name: "Oslo Gardermoen (OSL)", skyId: "OSLA", entityId: "27539740" },
//     { name: "Stockholm Arlanda (ARN)", skyId: "ARNA", entityId: "27539746" },
//     { name: "Copenhagen Kastrup (CPH)", skyId: "CPHA", entityId: "27539738" },
//     { name: "Edinburgh (EDI)", skyId: "EDIA", entityId: "27544007" },
//     { name: "Manchester (MAN)", skyId: "MANA", entityId: "27544011" },
//     { name: "Berlin Brandenburg (BER)", skyId: "BER", entityId: "27539761" },
//     { name: "Prague Václav Havel (PRG)", skyId: "PRGA", entityId: "27539750" },
//     { name: "Warsaw Chopin (WAW)", skyId: "WAWA", entityId: "27539748" },
//     { name: "Dublin (DUB)", skyId: "DUBA", entityId: "27544009" },
//     { name: "Glasgow International (GLA)", skyId: "GLAA", entityId: "27544010" },
//     { name: "Nice Côte d'Azur (NCE)", skyId: "NCEA", entityId: "27539752" },
//     { name: "Venice Marco Polo (VCE)", skyId: "VCEA", entityId: "27539755" },
//     { name: "Naples International (NAP)", skyId: "NAPA", entityId: "27539756" },
//     { name: "Milan Malpensa (MXP)", skyId: "MXPA", entityId: "27539754" },
//     { name: "Florence Peretola (FLR)", skyId: "FLRA", entityId: "27539753" },
//     { name: "Geneva (GVA)", skyId: "GVAA", entityId: "27539730" },
//     { name: "Hamburg (HAM)", skyId: "HAMA", entityId: "27539744" }
// ];

// // Populate the "From" and "To" select inputs
// const fromSelect = document.getElementById('from');
// const toSelect = document.getElementById('to');

// function populateAirports(selectElement) {
//     airports.forEach(airport => {
//         const option = document.createElement('option');
//         option.value = `${airport.skyId}-${airport.entityId}`;
//         option.text = airport.name;
//         selectElement.appendChild(option);
//     });
// }
//                     // Attaching event listener to the "Show Flights" button
//                     document.getElementById('showFlightsBtn').addEventListener('click', function () {
//                         // Trigger form submission via JavaScript
//                         document.getElementById('flightSearchForm').submit();
//                     });

// populateAirports(fromSelect);
// populateAirports(toSelect);

// const flightOptions = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '7918f68582msh2daf36f2950a146p1dc33djsn9d88ce7759ca',
//         'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
//     }
// };

// const resultsDiv = document.getElementById('results');
// const showFlightsBtn = document.getElementById('showFlightsBtn');

// // Function to get SkyID and EntityID from the country name
// async function getLocationData(country) {
//     const url = `https://sky-scrapper.p.rapidapi.com/api/v1/locations/search?query=${encodeURIComponent(country)}&type=COUNTRY`;
//     try {
//         const response = await fetch(url, flightOptions);
//         if (!response.ok) {
//             throw new Error('Failed to fetch location data');
//         }
//         const data = await response.json();
//         return data.locations[0]; // Adjust this based on your API's actual response structure
//     } catch (error) {
//         console.error('Error fetching location data:', error);
//         return null;
//     }
// }

// // Event listener for "Show Flights" button
// showFlightsBtn.addEventListener('click', async (e) => {
//     e.preventDefault();

//     // Get user input
//     const fromCountryElement = document.getElementById('fromCountry');
//     const toCountryElement = document.getElementById('toCountry');
//     const departDateElement = document.getElementById('departDate');
//     const returnDateElement = document.getElementById('returnDate');
//     const passengersElement = document.getElementById('passengers');
//     const cabinClassElement = document.getElementById('cabinClass');
//     const tripTypeElement = document.getElementById('tripType'); 

//     const fromCountry = fromCountryElement.value;
//     const toCountry = toCountryElement.value;
//     const departDate = departDateElement.value;
//     const returnDate = returnDateElement ? returnDateElement.value : '';
//     const passengers = passengersElement.value;
//     const cabinClass = cabinClassElement.value;
//     const tripType = tripTypeElement.value; // Get selected trip type (one way or return)

//     // Check if required fields are filled
//     if (!fromCountry || !toCountry || !departDate || !passengers || !cabinClass || !tripType) {
//         resultsDiv.innerHTML = '<p>Please fill in all required fields.</p>';
//         return;
//     }

//     // Get SkyID and EntityID for 'From' and 'To' countries
//     const fromLocation = await getLocationData(fromCountry);
//     const toLocation = await getLocationData(toCountry);

//     if (!fromLocation || !toLocation) {
//         resultsDiv.innerHTML = '<p>Unable to find SkyID for the specified country. Please try again.</p>';
//         return;
//     }

//     const fromSkyId = fromLocation.skyId;
//     const fromEntityId = fromLocation.entityId;
//     const toSkyId = toLocation.skyId;
//     const toEntityId = toLocation.entityId;

//     // Construct the flight search URL using the SkyIDs and EntityIDs
//     let flightUrl = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=${fromSkyId}&destinationSkyId=${toSkyId}&originEntityId=${fromEntityId}&destinationEntityId=${toEntityId}&date=${departDate}&cabinClass=${cabinClass}&adults=${passengers}&sortBy=best&currency=USD&market=en-US&countryCode=US`;

//     // If it's a return trip, add the return date to the URL
//     if (tripType === 'return' && returnDate) {
//         flightUrl += `&returnDate=${returnDate}`;
//     }

//     try {
//         const response = await fetch(flightUrl, flightOptions);
//         if (!response.ok) {
//             const errorText = await response.text();
//             console.error('Response status:', response.status);
//             console.error('Response body:', errorText);
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();

//         // Ensure there are itineraries before displaying results
//         if (data && data.data && data.data.itineraries && data.data.itineraries.length > 0) {
//             displayFlightResults(data.data.itineraries);
//         } else {
//             resultsDiv.innerHTML = '<p>No flights available for the selected route and dates. Please try again with different options.</p>';
//         }
//     } catch (error) {
//         console.error('Error fetching flight data:', error);
//         resultsDiv.innerHTML = '<p>An error occurred while searching for flights. Please try again later.</p>';
//     }
// });

// // Function to display flight results
// function displayFlightResults(itineraries) {
//     resultsDiv.innerHTML = ''; // Clear previous results

//     itineraries.forEach((itinerary, index) => {
//         const flightDiv = document.createElement('div');
//         flightDiv.classList.add('flight-result');
//         flightDiv.innerHTML = `
//             <p>Flight ${index + 1} - Price: ${itinerary.price.formatted || 'N/A'}</p>
//             <button onclick="toggleDetails(${index})">View Details</button>
//             <div class="flight-details" id="details-${index}" style="display:none;">
//                 <table>
//                     <tr><th>Leg</th><th>Origin</th><th>Destination</th><th>Departure</th><th>Arrival</th><th>Carrier</th><th>Flight Number</th></tr>
//                     ${itinerary.legs.map(leg => `
//                         <tr>
//                             <td>${leg.origin.displayCode} to ${leg.destination.displayCode}</td>
//                             <td>${leg.origin.name || 'Unknown'}</td>
//                             <td>${leg.destination.name || 'Unknown'}</td>
//                             <td>${new Date(leg.departure).toLocaleString() || 'Unknown'}</td>
//                             <td>${new Date(leg.arrival).toLocaleString() || 'Unknown'}</td>
//                             <td><img src="${leg.carriers.marketing[0].logoUrl}" alt="${leg.carriers.marketing[0].name}" width="30" /> ${leg.carriers.marketing[0].name}</td>
//                             <td>${leg.segments[0].flightNumber || 'N/A'}</td>
//                         </tr>
//                     `).join('')}
//                 </table>
//             </div>
//         `;
//         resultsDiv.appendChild(flightDiv);
//     });
// }

// // Function to toggle flight details display
// function toggleDetails(index) {
//     const detailsDiv = document.getElementById(`details-${index}`);
//     if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
//         detailsDiv.style.display = 'block';
//     } else {
//         detailsDiv.style.display = 'none';
//     }
// }

// // // Populate the "From" and "To" select inputs
// // const fromSelect = document.getElementById('from');
// // const toSelect = document.getElementById('to');

// // function populateAirports(selectElement) {
// //     airports.forEach(airport => {
// //         const option = document.createElement('option');
// //         option.value = `${airport.skyId}-${airport.entityId}`;
// //         option.text = airport.name;
// //         selectElement.appendChild(option);
// //     });
// // }

// // populateAirports(fromSelect);
// // populateAirports(toSelect);

// // const flightOptions = {
// //     method: 'GET',
// //     headers: {
// //         'x-rapidapi-key': '7918f68582msh2daf36f2950a146p1dc33djsn9d88ce7759ca',
// //         'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
// //     }
// // };

// // const resultsDiv = document.getElementById('results');
// // const showFlightsBtn = document.getElementById('showFlightsBtn');

// // // Function to get SkyID and EntityID from the city or country name
// // async function getLocationData(cityOrCountry) {
// //     const url = `https://sky-scrapper.p.rapidapi.com/api/v1/locations/search?query=${encodeURIComponent(cityOrCountry)}`;
// //     try {
// //         const response = await fetch(url, flightOptions);
// //         if (!response.ok) {
// //             throw new Error('Failed to fetch location data');
// //         }
// //         const data = await response.json();
// //         return data.locations[0]; // Adjust this based on your API's actual response structure
// //     } catch (error) {
// //         console.error('Error fetching location data:', error);
// //         return null;
// //     }
// // }

// // // Event listener for "Show Flights" button
// // showFlightsBtn.addEventListener('click', async (e) => {
// //     e.preventDefault();

// //     // Get user input
// //     const fromCityElement = document.getElementById('fromCity');
// //     const toCityElement = document.getElementById('toCity');
// //     const departDateElement = document.getElementById('departDate');
// //     const returnDateElement = document.getElementById('returnDate');
// //     const passengersElement = document.getElementById('passengers');
// //     const cabinClassElement = document.getElementById('cabinClass');
// //     const tripTypeElement = document.getElementById('tripType'); 

// //     // Ensure that all elements exist before accessing their values
// //     // if (!fromCityElement || !toCityElement || !departDateElement || !passengersElement || !cabinClassElement || !tripTypeElement) {
// //     //     // console.error('One or more form elements are missing.');
// //     //     resultsDiv.innerHTML = '<p>Error: Some form fields are missing. Please refresh the page and try again.</p>';
// //     //     return;
// //     // }

// //     const fromCity = fromCityElement.value;
// //     const toCity = toCityElement.value;
// //     const departDate = departDateElement.value;
// //     const returnDate = returnDateElement ? returnDateElement.value : '';
// //     const passengers = passengersElement.value;
// //     const cabinClass = cabinClassElement.value;
// //     const tripType = tripTypeElement.value; // Get selected trip type (one way or return)

// //     // Check if required fields are filled
// //     if (!fromCity || !toCity || !departDate || !passengers || !cabinClass || !tripType) {
// //         resultsDiv.innerHTML = '<p>Please fill in all required fields.</p>';
// //         return;
// //     }

// //     // Get SkyID and EntityID for 'From' and 'To' cities
// //     const fromLocation = await getLocationData(fromCity);
// //     const toLocation = await getLocationData(toCity);

// //     if (!fromLocation || !toLocation) {
// //         resultsDiv.innerHTML = '<p>Unable to find SkyID for the specified city or country. Please try again.</p>';
// //         return;
// //     }

// //     const fromSkyId = fromLocation.skyId;
// //     const fromEntityId = fromLocation.entityId;
// //     const toSkyId = toLocation.skyId;
// //     const toEntityId = toLocation.entityId;

// //     // Construct the flight search URL using the SkyIDs and EntityIDs
// //     let flightUrl = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=${fromSkyId}&destinationSkyId=${toSkyId}&originEntityId=${fromEntityId}&destinationEntityId=${toEntityId}&date=${departDate}&cabinClass=${cabinClass}&adults=${passengers}&sortBy=best&currency=USD&market=en-US&countryCode=US`;

// //     // If it's a return trip, add the return date to the URL
// //     if (tripType === 'return' && returnDate) {
// //         flightUrl += `&returnDate=${returnDate}`;
// //     }

// //     try {
// //         const response = await fetch(flightUrl, flightOptions);
// //         if (!response.ok) {
// //             const errorText = await response.text();
// //             console.error('Response status:', response.status);
// //             console.error('Response body:', errorText);
// //             throw new Error('Network response was not ok');
// //         }

// //         const data = await response.json();

// //         // Ensure there are itineraries before displaying results
// //         if (data && data.data && data.data.itineraries && data.data.itineraries.length > 0) {
// //             displayFlightResults(data.data.itineraries);
// //         } else {
// //             resultsDiv.innerHTML = '<p>No flights available for the selected route and dates. Please try again with different options.</p>';
// //         }
// //     } catch (error) {
// //         console.error('Error fetching flight data:', error);
// //         resultsDiv.innerHTML = '<p>An error occurred while searching for flights. Please try again later.</p>';
// //     }
// // });

// // // Function to display flight results
// // function displayFlightResults(itineraries) {
// //     resultsDiv.innerHTML = ''; // Clear previous results

// //     itineraries.forEach((itinerary, index) => {
// //         const flightDiv = document.createElement('div');
// //         flightDiv.classList.add('flight-result');
// //         flightDiv.innerHTML = `
// //             <p>Flight ${index + 1} - Price: ${itinerary.price.formatted || 'N/A'}</p>
// //             <button onclick="toggleDetails(${index})">View Details</button>
// //             <div class="flight-details" id="details-${index}" style="display:none;">
// //                 <table>
// //                     <tr><th>Leg</th><th>Origin</th><th>Destination</th><th>Departure</th><th>Arrival</th><th>Carrier</th><th>Flight Number</th></tr>
// //                     ${itinerary.legs.map(leg => `
// //                         <tr>
// //                             <td>${leg.origin.displayCode} to ${leg.destination.displayCode}</td>
// //                             <td>${leg.origin.name || 'Unknown'}</td>
// //                             <td>${leg.destination.name || 'Unknown'}</td>
// //                             <td>${new Date(leg.departure).toLocaleString() || 'Unknown'}</td>
// //                             <td>${new Date(leg.arrival).toLocaleString() || 'Unknown'}</td>
// //                             <td><img src="${leg.carriers.marketing[0].logoUrl}" alt="${leg.carriers.marketing[0].name}" width="30" /> ${leg.carriers.marketing[0].name}</td>
// //                             <td>${leg.segments[0].flightNumber || 'N/A'}</td>
// //                         </tr>
// //                     `).join('')}
// //                 </table>
// //             </div>
// //         `;
// //         resultsDiv.appendChild(flightDiv);
// //     });
// // }

// // // Function to toggle flight details display
// // function toggleDetails(index) {
// //     const detailsDiv = document.getElementById(`details-${index}`);
// //     if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
// //         detailsDiv.style.display = 'block';
// //     } else {
// //         detailsDiv.style.display = 'none';
// //     }
// // }

// const airports = [
//         { name: "London Heathrow (LHR)", skyId: "LOND", entityId: "27544008" },
//         { name: "New York John F. Kennedy (JFK)", skyId: "NYCA", entityId: "27537542" },
//         { name: "Los Angeles International (LAX)", skyId: "LAXA", entityId: "27539633" },
//         { name: "Dubai International (DXB)", skyId: "DXBA", entityId: "27543461" },
//         { name: "Singapore Changi (SIN)", skyId: "SIN", entityId: "27544553" },
//         { name: "Hong Kong International (HKG)", skyId: "HKG", entityId: "27538782" },
//         { name: "Sydney Kingsford Smith (SYD)", skyId: "SYDA", entityId: "27540791" },
//         { name: "Lagos Murtala Muhammed (LOS)", skyId: "LOS", entityId: "27544551" },
//         { name: "Abuja Nnamdi Azikiwe (ABV)", skyId: "ABV", entityId: "27544549" },
//         { name: "Tokyo Haneda (HND)", skyId: "HND", entityId: "27546500" },
//         { name: "Paris Charles de Gaulle (CDG)", skyId: "PARI", entityId: "27539733" },
//         { name: "Frankfurt (FRA)", skyId: "FRAN", entityId: "27539745" },
//         { name: "Amsterdam Schiphol (AMS)", skyId: "AMSA", entityId: "27539779" },
//         { name: "Chicago O'Hare (ORD)", skyId: "CHIA", entityId: "27539639" },
//         { name: "Atlanta Hartsfield-Jackson (ATL)", skyId: "ATLA", entityId: "27539645" },
//         { name: "Toronto Pearson (YYZ)", skyId: "YYZA", entityId: "27541631" },
//         { name: "Madrid Barajas (MAD)", skyId: "MAD", entityId: "27539760" },
//         { name: "Beijing Capital (PEK)", skyId: "PEKA", entityId: "27544846" },
//         { name: "Bangkok Suvarnabhumi (BKK)", skyId: "BKKA", entityId: "27544556" },
//         { name: "San Francisco International (SFO)", skyId: "SFO", entityId: "27539634" },
//         { name: "Miami International (MIA)", skyId: "MIA", entityId: "27539625" },
//         { name: "Melbourne Tullamarine (MEL)", skyId: "MELA", entityId: "27540795" },
//         { name: "Munich (MUC)", skyId: "MUNI", entityId: "27539743" },
//         { name: "Rome Fiumicino (FCO)", skyId: "ROMA", entityId: "27539758" },
//         { name: "Istanbul Airport (IST)", skyId: "ISTA", entityId: "27545112" },
//         { name: "Kuala Lumpur International (KUL)", skyId: "KUL", entityId: "27544558" },
//         { name: "Doha Hamad International (DOH)", skyId: "DOHA", entityId: "27543455" },
//         { name: "Seoul Incheon (ICN)", skyId: "ICN", entityId: "27544854" },
//         { name: "Mexico City (MEX)", skyId: "MEX", entityId: "27543879" },
//         { name: "São Paulo Guarulhos (GRU)", skyId: "GRUA", entityId: "27543972" },
//         { name: "Zurich (ZRH)", skyId: "ZRHA", entityId: "27539731" },
//         { name: "Vienna International (VIE)", skyId: "VIEA", entityId: "27539741" },
//         { name: "Boston Logan International (BOS)", skyId: "BOSA", entityId: "27539638" },
//         { name: "Barcelona El Prat (BCN)", skyId: "BCNA", entityId: "27539757" },
//         { name: "Shanghai Pudong (PVG)", skyId: "PVGA", entityId: "27544851" },
//         { name: "Washington Dulles (IAD)", skyId: "WASA", entityId: "27539642" },
//         { name: "Houston George Bush (IAH)", skyId: "HOUA", entityId: "27539628" },
//         { name: "Denver International (DEN)", skyId: "DENA", entityId: "27539640" },
//         { name: "Philadelphia International (PHL)", skyId: "PHLA", entityId: "27539641" },
//         { name: "Orlando International (MCO)", skyId: "MCO", entityId: "27539631" },
//         { name: "Dallas/Fort Worth International (DFW)", skyId: "DFWA", entityId: "27539632" },
//         { name: "Rio de Janeiro Galeão (GIG)", skyId: "GIG", entityId: "27543974" },
//         { name: "Lisbon Humberto Delgado (LIS)", skyId: "LIS", entityId: "27539759" },
//         { name: "Vienna International (VIE)", skyId: "VIEA", entityId: "27539741" },
//         { name: "Jakarta Soekarno-Hatta (CGK)", skyId: "CGKA", entityId: "27544559" },
//         { name: "Brussels Airport (BRU)", skyId: "BRUA", entityId: "27539739" },
//         { name: "Auckland International (AKL)", skyId: "AKLA", entityId: "27540797" },
//         { name: "Cape Town International (CPT)", skyId: "CPTA", entityId: "27540781" },
//         { name: "Bangalore Kempegowda (BLR)", skyId: "BLRA", entityId: "27544554" },
//         { name: "Mumbai Chhatrapati Shivaji (BOM)", skyId: "BOM", entityId: "27544557" },
//         { name: "Delhi Indira Gandhi (DEL)", skyId: "DEL", entityId: "27544555" },
//         { name: "Athens International (ATH)", skyId: "ATH", entityId: "27539737" },
//         { name: "Helsinki Vantaa (HEL)", skyId: "HELA", entityId: "27539749" },
//         { name: "Oslo Gardermoen (OSL)", skyId: "OSLA", entityId: "27539740" },
//         { name: "Stockholm Arlanda (ARN)", skyId: "ARNA", entityId: "27539746" },
//         { name: "Copenhagen Kastrup (CPH)", skyId: "CPHA", entityId: "27539738" },
//         { name: "Edinburgh (EDI)", skyId: "EDIA", entityId: "27544007" },
//         { name: "Manchester (MAN)", skyId: "MANA", entityId: "27544011" },
//         { name: "Berlin Brandenburg (BER)", skyId: "BER", entityId: "27539761" },
//         { name: "Prague Václav Havel (PRG)", skyId: "PRGA", entityId: "27539750" },
//         { name: "Warsaw Chopin (WAW)", skyId: "WAWA", entityId: "27539748" },
//         { name: "Dublin (DUB)", skyId: "DUBA", entityId: "27544009" },
//         { name: "Glasgow International (GLA)", skyId: "GLAA", entityId: "27544010" },
//         { name: "Nice Côte d'Azur (NCE)", skyId: "NCEA", entityId: "27539752" },
//         { name: "Venice Marco Polo (VCE)", skyId: "VCEA", entityId: "27539755" },
//         { name: "Naples International (NAP)", skyId: "NAPA", entityId: "27539756" },
//         { name: "Milan Malpensa (MXP)", skyId: "MXPA", entityId: "27539754" },
//         { name: "Florence Peretola (FLR)", skyId: "FLRA", entityId: "27539753" },
//         { name: "Geneva (GVA)", skyId: "GVAA", entityId: "27539730" },
//         { name: "Hamburg (HAM)", skyId: "HAMA", entityId: "27539744" }
//     ];

// // Function to handle form submission and fetch flight data
// document.getElementById('showFlightsBtn').addEventListener('click', function (event) {
//     event.preventDefault();  // Prevent form submission
    
//     // Get user input from the form
//     const fromCity = document.getElementById('fromCity').value;
//     const toCity = document.getElementById('toCity').value;
//     const tripType = document.getElementById('tripType').value;
//     const departDate = document.getElementById('departDate').value;
//     const returnDate = document.getElementById('returnDate').value || '';  // Return date is optional for one-way trips
//     const passengers = document.getElementById('passengers').value;
//     const cabinClass = document.getElementById('cabinClass').value;

//     // Check if required inputs are filled
//     if (!fromCity || !toCity || !departDate || !passengers) {
//         alert("Please fill out all required fields.");
//         return;
//     }

//     // Mocking entity and sky IDs since real values are not provided (replace with actual logic to get these IDs)
//     const fromSkyId = '123';  // Replace with actual logic to get SkyId based on the city
//     const toSkyId = '456';    // Replace with actual logic to get SkyId based on the city
//     const fromEntityId = '789'; // Replace with actual logic to get EntityId based on the city
//     const toEntityId = '012';   // Replace with actual logic to get EntityId based on the city

//     // Construct the API URL
//     let flightUrl = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=${fromSkyId}&destinationSkyId=${toSkyId}&originEntityId=${fromEntityId}&destinationEntityId=${toEntityId}&date=${departDate}&cabinClass=${cabinClass}&adults=${passengers}&sortBy=best&currency=USD&market=en-US&countryCode=US`;

//     // Add return date to URL if it's a return trip
//     if (tripType === 'return') {
//         flightUrl += `&returnDate=${returnDate}`;
//     }

//     const flightOptions = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '7918f68582msh2daf36f2950a146p1dc33djsn9d88ce7759ca',
//             'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
//         }
//     };

//     // Fetch flight data from the API
//     fetch(flightUrl, flightOptions)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);  // For debugging purposes
//             displayFlightResults(data);
//         })
//         .catch(error => {
//             console.error('Error fetching flight data:', error);
//             document.getElementById('results').innerHTML = 'An error occurred while fetching flights.';
//         });
// });

// // Function to display flight results
// function displayFlightResults(data) {
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = '';  // Clear previous results

//     if (!data.itineraries || data.itineraries.length === 0) {
//         resultsDiv.innerHTML = 'No flights found for the selected criteria.';
//         return;
//     }

//     // Create a list of flight results
//     data.flights.forEach(flight => {
//         const flightInfo = document.createElement('div');
//         flightInfo.classList.add('flight-info');
        
//         flightInfo.innerHTML = `
//             <h3>${flight.airlineName}</h3>
//             <p>Departure: ${flight.departureTime}</p>
//             <p>Arrival: ${flight.arrivalTime}</p>
//             <p>Price: ${flight.price} ${flight.currency}</p>
//         `;
        
//         resultsDiv.appendChild(flightInfo);
//     });
// }



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
    { name: "Lima Jorge Chávez (LIM)", skyId: "LIMA", entityId: "27543878" },
    { name: "Boston Logan International (BOS)", skyId: "BOSA", entityId: "27539638" },
    { name: "Phoenix Sky Harbor (PHX)", skyId: "PHXA", entityId: "27539635" },
    { name: "Charlotte Douglas International (CLT)", skyId: "CLTA", entityId: "27539637" },
    { name: "Seattle-Tacoma International (SEA)", skyId: "SEAA", entityId: "27539636" },
    { name: "Nairobi Jomo Kenyatta (NBO)", skyId: "NBOA", entityId: "27544552" },
    { name: "Kuala Lumpur International (KUL)", skyId: "KULA", entityId: "27544558" },
    { name: "Helsinki Vantaa (HEL)", skyId: "HELA", entityId: "27539749" },
    { name: "Reykjavik Keflavik (KEF)", skyId: "KEFA", entityId: "27544012" },
    { name: "Düsseldorf International (DUS)", skyId: "DUSA", entityId: "27539747" },
    { name: "Brisbane International (BNE)", skyId: "BNEA", entityId: "27540793" },
    { name: "Montreal-Pierre Elliott Trudeau International (YUL)", skyId: "YULA", entityId: "27541629" },
    { name: "Doha Hamad International (DOH)", skyId: "DOHA", entityId: "27543455" },
    { name: "Lisbon Humberto Delgado (LIS)", skyId: "LISA", entityId: "27539759" },
    { name: "Las Vegas McCarran International (LAS)", skyId: "LASA", entityId: "27539629" },
    { name: "Stockholm Arlanda (ARN)", skyId: "ARNA", entityId: "27539746" },
    { name: "Oslo Gardermoen (OSL)", skyId: "OSLA", entityId: "27539740" },
    { name: "Auckland International (AKL)", skyId: "AKLA", entityId: "27540797" },
    { name: "Cairo International (CAI)", skyId: "CAIA", entityId: "27544550" },
    { name: "Doha Hamad International (DOH)", skyId: "DOHA", entityId: "27543455" },
    { name: "Antalya Airport (AYT)", skyId: "AYTA", entityId: "27545114" },
    { name: "Cancun International (CUN)", skyId: "CUNA", entityId: "27543881" },
    { name: "Mexico City Benito Juárez (MEX)", skyId: "MEXA", entityId: "27543879" },
    { name: "Istanbul Sabiha Gökçen (SAW)", skyId: "SAWA", entityId: "27545113" },
    { name: "Bangkok Don Mueang (DMK)", skyId: "DMKA", entityId: "27544555" },
    { name: "Lisbon Humberto Delgado (LIS)", skyId: "LISA", entityId: "27539759" },
    { name: "Oslo Gardermoen (OSL)", skyId: "OSLA", entityId: "27539740" },
    { name: "Vienna International (VIE)", skyId: "VIEA", entityId: "27539741" },
    { name: "Kraków John Paul II International (KRK)", skyId: "KRKA", entityId: "27539749" },
    { name: "Malta International (MLA)", skyId: "MLAA", entityId: "27544006" },
    { name: "Bucharest Henri Coandă (OTP)", skyId: "OTPA", entityId: "27539737" },
    { name: "Tel Aviv Ben Gurion (TLV)", skyId: "TLVA", entityId: "27543873" },
    { name: "Catania Fontanarossa (CTA)", skyId: "CTAA", entityId: "27539742" },
    { name: "Bari Karol Wojtyła (BRI)", skyId: "BRIA", entityId: "27539732" },
    { name: "Prague Václav Havel (PRG)", skyId: "PRGA", entityId: "27539750" },
    { name: "Genoa Cristoforo Colombo (GOA)", skyId: "GOAA", entityId: "27539736" },
    { name: "Nice Côte d'Azur (NCE)", skyId: "NCEA", entityId: "27539752" },
    { name: "Brussels South Charleroi Airport (CRL)", skyId: "CRLA", entityId: "27539753" },
    { name: "Sofia Airport (SOF)", skyId: "SOFA", entityId: "27539754" },
    { name: "Billund Airport (BLL)", skyId: "BLLA", entityId: "27544008" },
    { name: "Tunis-Carthage International (TUN)", skyId: "TUNA", entityId: "27543972" },
    { name: "Larnaca International (LCA)", skyId: "LCAA", entityId: "27544013" },
    { name: "Copenhagen Kastrup (CPH)", skyId: "CPHA", entityId: "27539738" },
    { name: "Oporto Francisco Sá Carneiro (OPO)", skyId: "OPA", entityId: "27539748" },
    { name: "Wroclaw Copernicus (WRO)", skyId: "WROA", entityId: "27539741" },
    { name: "Edinburgh (EDI)", skyId: "EDIA", entityId: "27544007" },
    { name: "Kiev Boryspil International (KBP)", skyId: "KBPA", entityId: "27544563" },
    { name: "Medellín José María Córdova (MDE)", skyId: "MDEA", entityId: "27543884" },
    { name: "Santiago de Chile (SCL)", skyId: "SCLA", entityId: "27543885" },
    { name: "Tegucigalpa Toncontín International (TGU)", skyId: "TGUA", entityId: "27543886" },
    { name: "San José Juan Santamaría (SJO)", skyId: "SJOA", entityId: "27543887" },
    { name: "San Salvador El Salvador International (SAL)", skyId: "SALA", entityId: "27543888" },
    { name: "Guadalajara Miguel Hidalgo y Costilla (GDL)", skyId: "GDLA", entityId: "27543889" },
    { name: "Cancun International (CUN)", skyId: "CUNA", entityId: "27543881" },
    { name: "Porto Alegre Salgado Filho (POA)", skyId: "POAA", entityId: "27543970" },
    { name: "Recife Guararapes (REC)", skyId: "RECA", entityId: "27543969" },
    { name: "La Paz El Alto (LPB)", skyId: "LPBA", entityId: "27544558" },
    { name: "Bucharest Henri Coandă International (OTP)", skyId: "OTPA", entityId: "27539737" },
    { name: "Cluj-Napoca International (CLJ)", skyId: "CLJA", entityId: "27544002" },
    { name: "Timișoara Traian Vuia International (TSR)", skyId: "TSRA", entityId: "27544003" },
    { name: "Iași International (IAS)", skyId: "IASA", entityId: "27544004" },
    { name: "Craiova International (CRA)", skyId: "CRAA", entityId: "27544005" },
    { name: "Sibiu International (SBZ)", skyId: "SBZA", entityId: "27544006" },
    { name: "Constanța Mihail Kogălniceanu International (CND)", skyId: "CNDI", entityId: "27544007" },
    { name: "Bacău George Enescu International (BCM)", skyId: "BCMA", entityId: "27544008" },
    { name: "Oradea International (OMR)", skyId: "OMRA", entityId: "27544009" },
    { name: "Maramureș International (MMR)", skyId: "MMRA", entityId: "27544010" },
    { name: "Hamburg (HAM)", skyId: "HAMA", entityId: "27539744" }
];


// Function to search airports by country name
function searchAirportsByCountry(country) {
    return airports.filter(airport => airport.name.toLowerCase().includes(country.toLowerCase()));
}

// Add event listener to "Show Flights" button
document.getElementById('showFlightsBtn').addEventListener('click', async () => {
    const fromCountry = document.getElementById('fromCity').value;
    const toCountry = document.getElementById('toCity').value;
    const departDate = document.getElementById('departDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;
    const cabinClass = document.getElementById('cabinClass').value;

    // Find airports in the selected countries
    const fromAirports = searchAirportsByCountry(fromCountry);
    const toAirports = searchAirportsByCountry(toCountry);

    if (fromAirports.length === 0 || toAirports.length === 0) {
        alert("No airports found for the selected countries.");
        return;
    }

    const fromAirport = fromAirports[0];
    const toAirport = toAirports[0];

    const flightUrl = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=${fromAirport.skyId}&destinationSkyId=${toAirport.skyId}&originEntityId=${fromAirport.entityId}&destinationEntityId=${toAirport.entityId}&date=${departDate}&returnDate=${returnDate}&cabinClass=${cabinClass}&adults=${passengers}&sortBy=best&currency=USD&market=en-US&countryCode=US`;

    const flightOptions = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '87ba7e4c53msh40a68275b5d2095p1bac4djsn5b421394d68f',
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
        }
    };

    try {
        console.log(flightUrl);
        const response = await fetch(flightUrl, flightOptions);
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Response status:', response.status);
            console.error('Response body:', errorText);
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data.data?.itineraries.results);
        displayFlightResults(data.data?.itineraries);
    } catch (error) {
        console.error('Error fetching flight data:', error);
    }
});

// Switching between tabs and displaying the correct content
document.addEventListener("DOMContentLoaded", function() {
    const flightsTab = document.getElementById('flightsTab');
    const staysTab = document.getElementById('staysTab');
    
    const flightsContent = document.getElementById('flightsContent');
    const staysContent = document.getElementById('staysContent');
    
    // Initially show flights content and set the tab as active
    flightsContent.style.display = 'block';

    flightsTab.addEventListener('click', function() {
        // Activate the Flights tab
        flightsTab.classList.add('active');
        staysTab.classList.remove('active');
        
        // Show Flights content and hide Stays content
        flightsContent.style.display = 'block';
        staysContent.style.display = 'none';
    });

    staysTab.addEventListener('click', function() {
        // Activate the Stays tab
        staysTab.classList.add('active');
        flightsTab.classList.remove('active');
        
        // Show Stays content and hide Flights content
        staysContent.style.display = 'block';
        flightsContent.style.display = 'none';
    });
});


// Function to display flight results in the modal
function displayFlightResults(itineraries) {
    const modal = document.getElementById('flightModal');
    const modalResults = document.getElementById('modalResults');
    modalResults.innerHTML = ''; // Clear previous results

    if (Array.isArray(itineraries) && itineraries.length > 0) {
        itineraries.forEach((itinerary, index) => {
            const flightDiv = document.createElement('div');
            flightDiv.classList.add('flight-result');
            flightDiv.innerHTML = `
                <p>Flight ${index + 1} - Price: ${itinerary.price.formatted || 'N/A'}</p>
                <button onclick="toggleDetails(${index})">View Details</button>
                <div class="flight-details" id="details-${index}" style="display:none;">
                    <table>
                        <tr>
                            <th>Leg</th><th>Origin</th><th>Destination</th><th>Departure</th><th>Arrival</th><th>Carrier</th><th>Flight Number</th>
                        </tr>
                        ${itinerary.legs.map(leg => `
                            <tr>
                                <td>${leg.origin.displayCode} to ${leg.destination.displayCode}</td>
                                <td>${leg.origin.name || 'Unknown'}</td>
                                <td>${leg.destination.name || 'Unknown'}</td>
                                <td>${new Date(leg.departure).toLocaleString() || 'Unknown'}</td>
                                <td>${new Date(leg.arrival).toLocaleString() || 'Unknown'}</td>
                                <td><img src="${leg.carriers.marketing[0].logoUrl}" alt="${leg.carriers.marketing[0].name}" width="30" /> ${leg.carriers.marketing[0].name}</td>
                                <td>${leg.segments[0]?.flightNumber || 'N/A'}</td>
                            </tr>
                        `).join('')}
                    </table>
                </div>
            `;
            modalResults.appendChild(flightDiv);
        });
        modal.style.display = 'block'; // Show the modal after adding results
    } else {
        modalResults.innerHTML = '<p>No flights found. Please try again later.</p>';
        modal.style.display = 'block'; // Show modal even if no results are found
    }
}

// Function to toggle flight details visibility
function toggleDetails(index) {
    const detailsDiv = document.getElementById(`details-${index}`);
    detailsDiv.style.display = (detailsDiv.style.display === 'none' || !detailsDiv.style.display) ? 'block' : 'none';
}

// Add close functionality to the modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('flightModal').style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('flightModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

