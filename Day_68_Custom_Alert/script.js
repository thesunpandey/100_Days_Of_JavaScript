// Select elements from the DOM
const main = document.querySelector(".main"); // The main container that holds the alert-triggering buttons
const alertBox = document.querySelector(".alert"); // The alert box element that will be shown/hidden
const exclamationIcon = document.querySelector(".fa-exclamation-circle"); // The exclamation icon in the alert box
const msg = document.querySelector(".msg"); // The message text element in the alert box
const closeBtn = document.querySelector(".close-btn"); // The close button in the alert box
const closeIcon = document.querySelector(".fa-times"); // The close icon in the alert box

// ShowAlert Class
class ShowAlert {
  // Constructor to initialize state, border color, and text/icon color
  constructor(state, borderColor, color) {
    this.state = state; // Background color of the alert box
    this.borderColor = borderColor; // Border color of the alert box
    this.color = color; // Text and icon color
  }

  // Method to trigger the alert
  trigger(message) {
    // Set the styles of the alert box and its contents
    alertBox.style.background = this.state;
    alertBox.style.borderColor = this.borderColor;
    msg.textContent = message;
    msg.style.color = this.color;
    exclamationIcon.style.color = this.color;
    closeIcon.style.color = this.color;

    // Show the alert box by adding the "show" class and removing the "hide" class
    alertBox.classList.add("show");
    alertBox.classList.remove("hide");

    // Automatically hide the alert box after 5 seconds
    setTimeout(() => {
      alertBox.classList.remove("show");
      alertBox.classList.add("hide");
    }, 5000);

    // Add an event listener to the close button to hide the alert box when clicked
    closeBtn.addEventListener("click", () => {
      alertBox.classList.remove("show");
      alertBox.classList.add("hide");
    });
  }
}

// Create instances of ShowAlert with specific styles for warning and danger alerts
const warning = new ShowAlert("#ffdb9b", "#ffa502", "#ce8500");
const danger = new ShowAlert("#f8d7da", "#d1281f", "#721c24");

// Add an event listener to the main container to handle button clicks
main.addEventListener("click", (e) => {
  // Check if the clicked element has the class "btn-danger"
  if (e.target.classList.contains("btn-danger")) {
    // Trigger the danger alert with a specific message
    danger.trigger("Alert: This is a dangerous alert!");
  } 
  // Check if the clicked element has the class "btn-warning"
  else if (e.target.classList.contains("btn-warning")) {
    // Trigger the warning alert with a specific message
    warning.trigger("Alert: This is a Warning alert!");
  }
});