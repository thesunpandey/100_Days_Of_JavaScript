// Select input elements for card number, validity, and CVV
const cardNumber = document.querySelector("#number");
const cardValidity = document.querySelector("#valid");
const cardCvv = document.querySelector("#cvv");

// Add event listeners to the input elements to trigger formatting functions
cardNumber.addEventListener("input", formatCardNumber);
cardValidity.addEventListener("input", formatCardValidity);
cardCvv.addEventListener("input", formatCvv);

// Function to format the card number input
function formatCardNumber(e) {
  // Set maximum length of card number to 19 characters (16 digits + 3 spaces)
  cardNumber.maxLength = "19";

  // Replace non-digit characters, insert a space every 4 digits, and trim trailing spaces
  e.target.value = e.target.value
    .replace(/[^\d]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

  // If the card number input reaches the maximum length, focus on the validity input field
  if (cardNumber.value.length == 19) {
    formatCardValidity();
  }
}

// Function to format the card validity input
function formatCardValidity(e) {
  // Focus on the validity input field
  cardValidity.focus();

  // Set maximum length of validity to 5 characters (MM/YY)
  cardValidity.maxLength = "5";

  // If the validity input is less than 5 characters, format it as MM/YY
  if (cardValidity.value.length < 5) {
    cardValidity.value = cardValidity.value
      .replace(/[^\d]/g, "")
      .replace(/(.{2})/g, "$1/")
      .trim();
  }

  // If the validity input reaches the maximum length, focus on the CVV input field
  if (cardValidity.value.length == 5) {
    formatCvv();
  }
}

// Function to format the CVV input
function formatCvv() {
  // Focus on the CVV input field
  cardCvv.focus();

  // Set maximum length of CVV to 3 characters
  cardCvv.maxLength = "3";

  // Remove any non-digit characters from the CVV input
  cardCvv.value = cardCvv.value
    .replace(/[^\d]/g, "")
    .trim();
}