// Get references to form elements
const form = document.getElementById("form"),
  username = document.getElementById("username"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  password2 = document.getElementById("password2");

// Add submit event listener to the form
form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Call validation functions
  checkRequired([username, email, password, password2]);
  checkLength(username, 5, 16);
  checkLength(password, 8, 16);
  checkEmail(email);
  matchPassword(password, password2);
});

// Function to check if required fields are filled
function checkRequired(inputAll) {
  // Loop through each input field
  inputAll.forEach((input) => {
    // Check if the input value is empty (after trimming whitespace)
    if (input.value.trim() === "") {
      // Show error if empty
      showError(input, `${getFieldName(input)} is required`);
    } else {
      // Show success if not empty
      showSuccess(input);
    }
  });
}

// Function to check input length
function checkLength(input, min, max) {
  // Check if input is shorter than minimum length
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters.`
    );
  // Check if input is longer than maximum length
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters.`
    );
  } else {
    // Show success if length is within range
    showSuccess(input);
  }
}

// Function to validate email format
function checkEmail(input) {
  // Regular expression for email validation
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Test if email matches the regex pattern
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Function to check if passwords match
function matchPassword(input1, input2) {
  // Compare the two password inputs
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Function to display error message
function showError(input, message) {
  // Get the parent element of the input
  const formControl = input.parentElement;
  // Set the class for error styling
  formControl.className = "form-control error";
  // Find the small element and set the error message
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Function to display success state
function showSuccess(input) {
  // Get the parent element of the input
  const formControl = input.parentElement;
  // Set the class for success styling
  formControl.className = "form-control success";
}

// Function to get capitalized field name from input id
function getFieldName(input) {
  // Capitalize the first letter and return the rest of the string
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}