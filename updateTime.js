// dashboard.js

// Function to update and display current time
function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Add leading zeros if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Display the time in HH:MM:SS format
  var timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('timeDisplay').textContent = 'Current Time: ' + timeString;

  // Update the time every second
  setTimeout(updateTime, 1000);
}

// Call the updateTime function to start displaying the time
updateTime();

// Function to draw the analog clock
function drawClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Calculate angles for hour, minute, and second hands
  var hourAngle = 360 * (hours % 12) / 12 + (360 / 12) * (minutes / 60);
  var minuteAngle = 360 * minutes / 60;
  var secondAngle = 360 * seconds / 60;

  // Get clock SVG element
  var clock = document.getElementById('clock');

  // Clear previous clock elements
  while (clock.firstChild) {
    clock.removeChild(clock.firstChild);
  }

  // Draw clock face
  var clockFace = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  clockFace.setAttribute('cx', '50');
  clockFace.setAttribute('cy', '50');
  clockFace.setAttribute('r', '45');
  clockFace.setAttribute('fill', 'none');
  clockFace.setAttribute('stroke', '#000');
  clockFace.setAttribute('stroke-width', '3');
  clock.appendChild(clockFace);

  // Draw hour hand
  var hourHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  hourHand.setAttribute('x1', '50');
  hourHand.setAttribute('y1', '50');
  hourHand.setAttribute('x2', '50');
  hourHand.setAttribute('y2', '30');
  hourHand.setAttribute('stroke', '#000');
  hourHand.setAttribute('stroke-width', '5');
  hourHand.setAttribute('transform', 'rotate(' + hourAngle + ' 50 50)');
  clock.appendChild(hourHand);

  // Draw minute hand
  var minuteHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  minuteHand.setAttribute('x1', '50');
  minuteHand.setAttribute('y1', '50');
  minuteHand.setAttribute('x2', '50');
  minuteHand.setAttribute('y2', '20');
  minuteHand.setAttribute('stroke', '#000');
  minuteHand.setAttribute('stroke-width', '3');
  minuteHand.setAttribute('transform', 'rotate(' + minuteAngle + ' 50 50)');
  clock.appendChild(minuteHand);

  // Draw second hand
  var secondHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  secondHand.setAttribute('x1', '50');
  secondHand.setAttribute('y1', '50');
  secondHand.setAttribute('x2', '50');
  secondHand.setAttribute('y2', '10');
  secondHand.setAttribute('stroke', 'red');
  secondHand.setAttribute('stroke-width', '1');
  secondHand.setAttribute('transform', 'rotate(' + secondAngle + ' 50 50)');
  clock.appendChild(secondHand);

  // Update the clock every second
  setTimeout(drawClock, 1000);
}

// Call the drawClock function to start drawing the clock
drawClock();
