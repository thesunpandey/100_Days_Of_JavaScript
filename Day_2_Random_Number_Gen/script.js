// Selecting the DOM elements
const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

// Function to generate a random number and display it
const generateNumber = () => {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  // Display the random number in the HTML
  number.innerHTML = randomNumber;
};

// Adding event listener to the button to generate a number when clicked
btn.addEventListener("click", generateNumber);

// Initial call to generate a number when the page loads
generateNumber();


// Math.random() generates a random number between 0 and 1, multiplying it by 10 expands 
// that range to be between 0 and 10. Adding 1 then shifts that range to be between 1 and 11. 
// Finally, Math.floor() rounds down this number to the nearest integer, resulting in a random 
// integer between 1 and 10 (inclusive).