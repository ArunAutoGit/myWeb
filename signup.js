// signup.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values of username and password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform user creation logic here (e.g., make an API request)

  // Reset the form after submission
  document.getElementById('signupForm').reset();
});
