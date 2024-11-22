// Function to handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Retrieve username and password from the form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Check if the username and password match
  if ((username === "Ramya" && password === "Ramya") || (username === "Arun" && password === "Arun")) {
    // If login is successful, store the username in local storage
    localStorage.setItem('username', username);
    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    // Display an alert for invalid credentials
    alert("Invalid username or password!");
  }
});

// Function to display username in profile button
document.addEventListener("DOMContentLoaded", function() {
  // Get the profile button element
  const profileButton = document.getElementById('profileButton');
  
  // Get the username from local storage
  const username = localStorage.getItem('username');
  
  // Set the profile button text to the username
  if (username) {
    profileButton.textContent = username;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const profileButton = document.getElementById('profileButton');
  const username = localStorage.getItem('username');
  
  if (username) {
    profileButton.textContent = username;
  }
  
  profileButton.addEventListener("click", function() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === "true") {
      // If user is logged in, show logout option
      localStorage.removeItem('username'); // Clear username from local storage
      localStorage.removeItem('loggedIn'); // Clear login status
      window.location.href = "Login.html"; // Redirect to login page
    } else {
      // If user is not logged in, show username
      const username = localStorage.getItem('username');
      profileButton.textContent = username;
      localStorage.setItem('loggedIn', 'true'); // Set login status
    }
  });
});
