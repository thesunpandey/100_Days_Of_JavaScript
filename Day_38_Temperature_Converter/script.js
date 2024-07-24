// Select the input elements for Celsius, Fahrenheit, and Kelvin
const celsius = document.querySelector(".celsius"),
  fah = document.querySelector(".fahrenheit"),
  kelvin = document.querySelector(".kelvin"),
  form = document.querySelector("form");

// Add an event listener to the form to listen for input events
form.addEventListener("input", convertTemperature);

// Function to convert temperatures based on the input
function convertTemperature(e) {
  // Check if the event target has the class 'celsius'
  if (e.target.classList.contains("celsius")) {
    // Get the input value
    let x = e.target.value;
    // Convert Celsius to Fahrenheit
    fah.value = (x * 1.8 + 32).toFixed(2);
    // Convert Celsius to Kelvin
    kelvin.value = (parseFloat(x) + 273.15).toFixed(2);
  }

  // Check if the event target has the class 'fahrenheit'
  if (e.target.classList.contains("fahrenheit")) {
    // Get the input value
    let x = e.target.value;
    // Convert Fahrenheit to Celsius
    celsius.value = ((x - 32) / 1.8).toFixed(2);
    // Convert Fahrenheit to Kelvin
    kelvin.value = (((x - 32) / 1.8) + 273.15).toFixed(2);
  }

  // Check if the event target has the class 'kelvin'
  if (e.target.classList.contains("kelvin")) {
    // Get the input value
    let x = e.target.value;
    // Convert Kelvin to Fahrenheit
    fah.value = ((x - 273.15) * 1.8 + 32).toFixed(2);
    // Convert Kelvin to Celsius
    celsius.value = (parseFloat(x) - 273.15).toFixed(2);
  }
}

// --Convert Celsius to--
// fah = (x * 1.8) + 32;
// kelvin = x + 273.15;

// -- Convert Fah to --
// celsius = (x - 32) / 1.8;
// kelvin = (x - 32) / 1.8 + 273.15;

// -- Conver Kelvin to --
// fah = (x - 273.15) * 1.8 + 32;
// celsius = parseFloat(x) - 273.15;
