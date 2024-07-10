// Select DOM elements
const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

// Add click event listener to the button
btn.addEventListener("click", () => {
  // When button is clicked, request the user's geolocation
  navigator.geolocation.getCurrentPosition(showPosition);
});

// Function to display the position
function showPosition(position) {
  // Update the innerHTML of the userLocation element with latitude and longitude
  userLocation.innerHTML = `
    Latitude: ${position.coords.latitude} <br>
    Longitude: ${position.coords.longitude}
  `;
}