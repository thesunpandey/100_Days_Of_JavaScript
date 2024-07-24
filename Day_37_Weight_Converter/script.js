// Select the input elements for pounds, kilograms, grams, and ounces
let pounds = document.querySelector(".pounds"),
  kilograms = document.querySelector(".kilograms"),
  grams = document.querySelector(".grams"),
  ounces = document.querySelector(".ounces"),
  form = document.querySelector("form");

// Add an event listener to the form to call the convertWeight function on any input event
form.addEventListener("input", convertWeight);

// Function to convert weights between different units
function convertWeight(e) {
  // Check if the input event was triggered by the pounds input field
  if (e.target.classList.contains("pounds")) {
    let x = e.target.value; // Get the value from the input field
    // Convert pounds to other units and update the corresponding input fields
    kilograms.value = (x / 2.2046).toFixed(2); // Convert pounds to kilograms
    grams.value = (x / 0.0022046).toFixed(2); // Convert pounds to grams
    ounces.value = (x * 16).toFixed(2); // Convert pounds to ounces
  }

  // Check if the input event was triggered by the kilograms input field
  if (e.target.classList.contains("kilograms")) {
    let x = e.target.value; // Get the value from the input field
    // Convert kilograms to other units and update the corresponding input fields
    pounds.value = (x * 2.2046).toFixed(2); // Convert kilograms to pounds
    grams.value = (x * 1000).toFixed(2); // Convert kilograms to grams
    ounces.value = (x * 35.274).toFixed(2); // Convert kilograms to ounces
  }

  // Check if the input event was triggered by the grams input field
  if (e.target.classList.contains("grams")) {
    let x = e.target.value; // Get the value from the input field
    // Convert grams to other units and update the corresponding input fields
    kilograms.value = (x / 1000).toFixed(2); // Convert grams to kilograms
    pounds.value = (x * 0.0022046).toFixed(2); // Convert grams to pounds
    ounces.value = (x * 0.035274).toFixed(2); // Convert grams to ounces
  }

  // Check if the input event was triggered by the ounces input field
  if (e.target.classList.contains("ounces")) {
    let x = e.target.value; // Get the value from the input field
    // Convert ounces to other units and update the corresponding input fields
    kilograms.value = (x / 35.274).toFixed(2); // Convert ounces to kilograms
    grams.value = (x / 0.035274).toFixed(2); // Convert ounces to grams
    pounds.value = (x * 0.0625).toFixed(2); // Convert ounces to pounds
  }
}

// -- From pounds to --
// kilograms = x / 2.2046;
// grams = x / 0.0022046;
// ounces = x * 16;

// -- From Kilogram to --
// pounds = x * 2.2046;
// grams = x * 1000;
// ounces = x * 35.274;

// -- From Gram to --
// kilograms = x / 1000;
//   pounds = x * 0.0022046;
//   ounces = x * 0.035274;

// -- From Ounce to --
// kilograms = x / 35.274;
// grams = x / 0.035274;
// pounds = x * 0.0625;
