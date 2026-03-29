// Function to display the Premium modal with animation
function showPremiumModal() {
  document.getElementById('premium-modal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  document.getElementById('premium-modal').style.display = 'none';
}

// Event listener for form submission to register for Premium
document.getElementById('premium-signup-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulate backend call to register the user
  registerUser(username, email, password);
  
  // Display success message and close the modal
  alert('ההרשמה שלך בוצעה בהצלחה!');
  closeModal();
});

// Dummy function for registering the user (replace with real backend logic)
function registerUser(username, email, password) {
  console.log('Registered User:', { username, email, password });
  // Here, you can call your backend API to store user data
}
