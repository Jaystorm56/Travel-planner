// Handle cover photo upload
const coverUploadBtn = document.querySelector('.upload-btn');
const coverUploadInput = document.getElementById('cover-upload-input');
const coverPhotoImg = document.getElementById('cover-photo-img');
console.log('hahahah') 
coverUploadBtn.addEventListener('click', () => {
  console.log('hey');
  coverUploadInput.click();  // Trigger the hidden file input
 });

 coverUploadInput.addEventListener('change', function(event) {
   console.log('haa')
   const file = event.target.files[0];
   if (file) {
     const reader = new FileReader();
     reader.onload = function(e) {
       coverPhotoImg.src = e.target.result;  // Update the profile picture
     };
     reader.readAsDataURL(file);  // Read the image file as a data URL
   }
 });
// Handle profile picture upload
const editProfileBtn = document.getElementById('edit-profile-btn');
const profileUploadInput = document.getElementById('profile-upload-input');
const profileImg = document.getElementById('profile-img');

editProfileBtn.addEventListener('click', () => {
  profileUploadInput.click();  // Trigger the hidden file input
});

profileUploadInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profileImg.src = e.target.result;  // Update the profile picture
    };
    reader.readAsDataURL(file);  // Read the image file as a data URL
  }
});
document.addEventListener('DOMContentLoaded', () => {
   const tabs = document.querySelectorAll('.tab');
   const sections = document.querySelectorAll('.section');
   
   tabs.forEach(tab => {
     tab.addEventListener('click', () => {
       // Remove 'active' class from all tabs and sections
       tabs.forEach(t => t.classList.remove('active'));
       sections.forEach(section => section.classList.remove('active'));
       
       // Add 'active' class to the clicked tab and corresponding section
       tab.classList.add('active');
       document.getElementById(tab.dataset.target).classList.add('active');
     });
   });
 });
//  TICKERS SECTION
// document.getElementById("h2").innerHTML = "Tickets/Bookings";
// document.getElementById("filter active").innerHTML = "Flights";
// document.getElementById("filter").innerHTML = "Stays";
// document.getElementById("dropdown").innerHTML = "Upcoming";

// const bookings = [
//   {
//       airlineLogo: './images.png',
//       route: 'Paris (CDG) &rarr; Paris (CDG)',
//       time: '12:00 pm &mdash; 6:00 pm',
//       date: '12-11-22',
//       gate: 'A12',
//       seat: '128'
//   },
//   {
//       airlineLogo: './images.png',
//       route: 'New York (JFK) &rarr; London (LHR)',
//       time: '3:00 pm &mdash; 7:00 pm',
//       date: '13-11-22',
//       gate: 'B5',
//       seat: '45A'
//   },
//   // Add more bookings as needed
// ];
// function createBookingCard(booking) {
//   const card = document.createElement('div');
//   card.className = 'booking-card';

//   card.innerHTML = `
//       <div class="booking-details">
//           <img src="${booking.airlineLogo}" alt="Airline Logo" class="airline-logo">
//           <div class="route">
//               <p>${booking.route}</p>
//               <div class="time-info">
//                   <p>${booking.time}</p>
//               </div>
//           </div>
//           <div class="flight-info">
//               <p>Date: ${booking.date}</p>
//               <p>Gate: ${booking.gate}</p>
//               <p>Seat no.: ${booking.seat}</p>
//           </div>
//       </div>
//       <div class="actions">
//           <button class="download-btn">Download Ticket</button>
//           <button class="arrow-btn">&rarr;</button>
//       </div>
//   `;

//   return card;
// }
// function appendBookings() {
//   const ticketsSection = document.querySelector('.tickets-bookings-section');

//   bookings.forEach(booking => {
//       const bookingCard = createBookingCard(booking);
//       ticketsSection.appendChild(bookingCard);
//   });
// }

// // Call the function to append the bookings
// appendBookings();


