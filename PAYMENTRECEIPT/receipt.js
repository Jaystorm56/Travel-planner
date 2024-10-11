import { storage } from '../firebaseConfig.js'; // Adjust this import to your Firebase config
import { ref, uploadBytes, getDownloadURL } from '../firebaseConfig.js';

// Function to populate the boarding pass
function populateReceipt(flightDetails, user) {
  const flightName = document.getElementById('flight-name');
  const airport = document.getElementById('airport');
  const terminal = document.getElementById('terminal');
  const price = document.getElementById('price');
  const departureTime = document.getElementById('departure-time');
  const departureLocation = document.getElementById('departure-location');
  const arrivalTime = document.getElementById('arrival-time');
  const arrivalLocation = document.getElementById('arrival-location');
  const passengerName = document.getElementById('passenger-name');
  const flightDate = document.getElementById('flight-date');
  const flightTime = document.getElementById('flight-time');
  const gate = document.getElementById('gate');
  const seat = document.getElementById('seat');
  const airline = document.getElementById('airline');
  const flightNumber = document.getElementById('flight-number');

  // Use optional chaining to avoid setting properties on null
  if (flightName) flightName.textContent = `Flight to ${flightDetails.destination}`;
  if (airport) airport.textContent = flightDetails.origin;
  if (terminal) terminal.textContent = '1A'; // Example terminal
  if (price) price.textContent = `₦${flightDetails.convertPrice.toLocaleString('en-NG')}`;
  if (departureTime) departureTime.textContent = flightDetails.departureDate.split('T')[1].slice(0, 5);
  if (departureLocation) departureLocation.textContent = flightDetails.origin;
  if (arrivalTime) arrivalTime.textContent = flightDetails.arrivalDate.split('T')[1].slice(0, 5);
  if (arrivalLocation) arrivalLocation.textContent = flightDetails.destination;
  if (passengerName) passengerName.textContent = user.displayName || 'Passenger';
  if (flightDate) flightDate.textContent = new Date(flightDetails.departureDate).toLocaleDateString();
  if (flightTime) flightTime.textContent = flightDetails.departureDate.split('T')[1].slice(0, 5);
  if (gate) gate.textContent = 'B12'; // Example gate
  if (seat) seat.textContent = '23A'; // Example seat
  if (airline) airline.textContent = flightDetails.flightCarrier;
  if (flightNumber) flightNumber.textContent = flightDetails.flightNumber;
}





export async function captureAndUploadReceipt(user, flightDetails) {
  // Populate the receipt with flight details and user info
  populateReceipt(flightDetails, user);

  // Get the ticket container element
  const ticketElement = document.getElementById('ticket-container');
  if (!ticketElement) {
      console.error('Element with id "ticket-container" not found.');
      return;
  }

  // Clone the ticket element
  const clone = ticketElement.cloneNode(true);
  clone.style.display = 'block'; // Ensure the clone is visible for capturing
  clone.style.position = 'fixed'; // Position it fixed in the viewport
  clone.style.opacity = '1'; // Make it fully visible
  clone.style.pointerEvents = 'none'; // Prevent interaction
  clone.style.zIndex = '9999'; // Ensure it's on top of other elements
  document.body.appendChild(clone); // Append clone to the body

  // Delay to allow DOM updates to complete (adjust delay time if needed)
  await new Promise(resolve => setTimeout(resolve, 5000));

  try {
      // Dynamically load the html2canvas library from the CDN
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      script.type = 'text/javascript';

      // Wait for the script to load
      await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
      });

      // Capture the receipt using html2canvas on the clone
      const canvas = await html2canvas(clone, {
          backgroundColor: 'white', // Allows transparency if needed
          logging: true, // Enable logging for debugging
          useCORS: true, // Use CORS to handle external images
          allowTaint: true // Allow cross-origin tainting
      });

      const imageData = canvas.toDataURL('image/png');

      // Convert imageData to a blob for upload
      const response = await fetch(imageData);
      const blob = await response.blob();
      console.log('Image data captured successfully');

      // Upload the receipt to Firebase Storage
      const receiptRef = ref(storage, `receipts/${user.uid}/receipt_${flightDetails.flightId}.png`);
      await uploadBytes(receiptRef, blob);
      console.log('Upload successful');

      // Get the download URL for the receipt
      const receiptURL = await getDownloadURL(receiptRef);

      // download functionality
      document.getElementById('downloadBtn').addEventListener('click', () => {
          const downloadLink = document.createElement('a');
          downloadLink.href = receiptURL; // Use the Firebase Storage URL
          downloadLink.download = `receipt_${flightDetails.flightId}.png`;
          downloadLink.click(); // Trigger the download
      });

      // share functionality using Web Share API
      document.getElementById('shareBtn').addEventListener('click', async () => {
          try {
              if (navigator.share) {
                  await navigator.share({
                      title: 'Your Flight Receipt',
                      text: 'Check out my flight receipt!',
                      url: receiptURL, // Share the receipt URL
                  });
                  console.log('Receipt shared successfully!');
              } else {
                  alert('Sharing is not supported in this browser.');
              }
          } catch (error) {
              console.error('Error sharing the receipt:', error);
          }
      });

      return receiptURL; // Return the download URL for saving to Firestore
  } catch (error) {
      console.error('Error capturing the receipt:', error);
  } finally {
      // Remove the clone from the DOM after capturing
      document.body.removeChild(clone);
  }
}


// Function to initialize and call captureAndUploadReceipt
function initReceiptCapture(user, flightDetails) {
    document.addEventListener('DOMContentLoaded', () => {
      captureAndUploadReceipt(user, flightDetails);
    });
  }

  

// document.addEventListener('DOMContentLoaded', () => {

//   populateReceipt(flightDetails, user)
// });
