// Select elements from the DOM
const btn = document.querySelector(".btn"), // Button to calculate tip
  tip = document.querySelector(".tip"), // Element to display the calculated tip
  total = document.querySelector(".total"), // Element to display the total bill
  error = document.querySelector(".error"); // Element to display error messages

// Function to hide the error message after a delay
const hideError = () => {
  setTimeout(() => {
    error.style.display = "none"; // Hide the error message
  }, 5000); // Delay of 5 seconds
};

// Function to calculate the tip and total bill
const calculateTip = () => {
  const bill = document.querySelector(".bill").value; // Get the bill amount from input
  const rate = document.querySelector(".rate").value; // Get the tip rate from input

  // Check if bill or rate inputs are empty
  if (bill === "" || rate == "") {
    error.innerHTML = "Please enter both values"; // Update error message
    error.style.display = "block"; // Show the error message
    hideError(); // Call the function to hide error message after delay

  // Check if bill input is not a number
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter a number"; // Update error message
    error.style.display = "block"; // Show the error message
    hideError(); // Call the function to hide error message after delay

  // Calculate the tip and total bill
  } else {
    let tipAmt = bill * rate; // Calculate tip amount
    tipAmt = Math.ceil(tipAmt); // Round up the tip amount

    tip.innerHTML = `Tip ₹: ${tipAmt}`; // Display the tip amount

    let totalBill = Number(bill) + tipAmt; // Calculate total bill
    total.innerHTML = `Total Bill ₹: ${totalBill}`; // Display the total bill
  }
};

// Add an event listener to the button to calculate tip when clicked
btn.addEventListener("click", calculateTip);
