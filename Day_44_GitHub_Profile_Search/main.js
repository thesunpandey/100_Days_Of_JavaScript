// Importing all exports from the variables.js module and aliasing them as 'v'
import * as v from "./js/variables.js";

// Importing specific functions from the functions.js module
import { getUser, errorMessage } from "./js/functions.js";

// Adding an event listener to the form element to listen for the 'submit' event
v.form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the user input value from the search field
  // The value is processed by splitting it by spaces and then joining it back without spaces
  let user = v.search.value.split(" ").join("");

  // Check if the user input is empty
  if (user === "") {
    // Display an error message if the input is blank
    errorMessage("Input cannot be blank");
    // Log 'blank' to the console for debugging purposes
    console.log("blank");
  } else {
    // If the input is not blank, call the getUser function with the user input
    getUser(user);
    // Clear the search field after processing the input
    v.search.value = "";
  }
});
