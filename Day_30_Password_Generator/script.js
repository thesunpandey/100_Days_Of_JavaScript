// Declare constant strings for different character sets
const empty = "",
  uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*=-_";

// Get references to the HTML elements
const pLength = document.getElementById("p-length"),
  upperCase = document.getElementById("p-uppercase"),
  lowerCase = document.getElementById("p-lowercase"),
  pNumber = document.getElementById("p-number"),
  pSymbol = document.getElementById("p-symbol"),
  submit = document.getElementById("submit"),
  password = document.getElementById("password"),
  copy = document.getElementById("copy");

// Add an event listener to the submit button for the click event
submit.addEventListener("click", () => {
  let initialPassword = empty; // Initialize the password string
  
  // Add uppercase letters if the uppercase option is checked
  upperCase.checked ? (initialPassword += uCase) : "";
  
  // Add lowercase letters if the lowercase option is checked
  lowerCase.checked ? (initialPassword += lCase) : "";
  
  // Add numbers if the number option is checked
  pNumber.checked ? (initialPassword += number) : "";
  
  // Add symbols if the symbol option is checked
  pSymbol.checked ? (initialPassword += symbol) : "";

  // Generate the password and set it to the password input field
  password.value = generatePassword(pLength.value, initialPassword);
});

// Function to generate the password
function generatePassword(l, initialPassword) {
  let pass = ""; // Initialize the password string
  for (let i = 0; i < l; i++) { // Loop to generate each character of the password
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length) // Select a random character
    );
  }
  return pass; // Return the generated password
}

// Add an event listener to the copy button for the click event
copy.addEventListener("click", () => {
  if (password.value == "") { // Check if the password field is empty
    alert("Please generate a password"); // Alert the user to generate a password
  } else {
    password.select(); // Select the text in the password input field
    document.execCommand("copy"); // Copy the selected text to the clipboard
    alert("Password has been copied to clipboard"); // Alert the user that the password has been copied
  }
});