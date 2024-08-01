// Select the textarea input element, the button, and the limit display element
const input = document.querySelector("textarea");
const btn = document.querySelector(".btn");
const limit = document.querySelector(".limit");

// Set the maximum character limit
let max = 50;

// Function to update the character limit display and manage button state
const updateLimit = () => {
  // Set the initial limit display to the maximum value
  limit.textContent = max;

  // Add an event listener to the input element for the 'input' event
  input.addEventListener("input", () => {
    // Get the current length of the input value
    let inputLength = input.value.length;

    // Update the limit display with the remaining characters
    limit.textContent = max - inputLength;

    // Check if the input length exceeds the maximum limit
    if (inputLength > max) {
      // Disable the button if the limit is exceeded
      btn.disabled = true;
      // Change the limit text color to red
      limit.style.color = "red";
    } else {
      // Enable the button if within the limit
      btn.disabled = false;
      // Change the limit text color to black
      limit.style.color = "black";
    }
  });
};

// Call the updateLimit function to initialize the limit display and event listener
updateLimit();