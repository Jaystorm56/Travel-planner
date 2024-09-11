// Retrieve stored hotels data from sessionStorage
const hotelsData = JSON.parse(sessionStorage.getItem('hotelsData'));
console.log('Retrieved hotels data from sessionStorage:', hotelsData);

// Retrieve stored flights data from sessionStorage
const flightsData = JSON.parse(sessionStorage.getItem('flightsData'));
console.log('Retrieved flights data from sessionStorage:', flightsData);



// Remove specific items from sessionStorage
sessionStorage.removeItem('hotelsData');
sessionStorage.removeItem('flightsData');

// Or clear all sessionStorage data
sessionStorage.clear();
