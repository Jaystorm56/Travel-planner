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
  } else {
    profileImg.src = './man111.jpg';
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



