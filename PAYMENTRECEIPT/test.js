// Function to populate the boarding pass dynamically
function populateReceipt(flightDetails, user) {
    document.getElementById('flight-name').textContent = `Flight to ${flightDetails.destination}`;
    document.getElementById('airport').textContent = flightDetails.origin;
    document.getElementById('terminal').textContent = '1A'; // Example terminal
    document.getElementById('price').textContent = `₦${flightDetails.price}`;
    document.getElementById('departure-time').textContent = flightDetails.departureDate;
    document.getElementById('departure-location').textContent = flightDetails.origin;
    document.getElementById('arrival-time').textContent = flightDetails.arrivalDate;
    document.getElementById('arrival-location').textContent = flightDetails.destination;
    document.getElementById('passenger-name').textContent = user.displayName || 'Passenger';
    document.getElementById('flight-date').textContent = new Date(flightDetails.departureDate).toLocaleDateString();
    document.getElementById('flight-time').textContent = flightDetails.departureDate.split('T')[1].slice(0, 5);
    document.getElementById('gate').textContent = 'B12'; // Example gate
    document.getElementById('seat').textContent = '23A'; // Example seat
    document.getElementById('airline').textContent = flightDetails.flightLogo;
    document.getElementById('flight-number').textContent = flightDetails.flightId;
}

// Function to capture the receipt and upload it to Firebase Storage
export async function captureAndUploadReceipt(user, flightDetails) {

    populateReceipt(flightDetails, user);

    const ticketElement = document.getElementById('ticket');
    
    // Capture the receipt using html2canvas
    const canvas = await html2canvas(ticketElement);
    const imageData = canvas.toDataURL('image/png');
    
    // Convert imageData to a blob for upload
    const response = await fetch(imageData);
    const blob = await response.blob();

    // Upload the receipt to Firebase Storage
    const receiptRef = ref(storage, `receipts/${user.uid}/receipt_${flightDetails.flightId}.png`);
    await uploadBytes(receiptRef, blob);

    // Get the download URL for the receipt
    const receiptURL = await getDownloadURL(receiptRef);
    
    return receiptURL; // Return the download URL for saving to Firestore
}
