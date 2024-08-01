// Get references to the modal, input field, button, and close element
const modal = document.getElementById("modal");
const input = document.getElementById("link");
const btn = document.getElementById("btn");
const close = document.getElementsByClassName("close")[0];

// Add event listener to the button to open the modal when clicked
btn.addEventListener("click", openPopup);
// Add event listener to the close element to close the modal when clicked
close.addEventListener("click", closePopup);

// Function to open the modal and start the countdown
function openPopup(e) {
  e.preventDefault();  // Prevent the default action of the button (if it's a form submit button)
  console.log(input.value);  // Log the input value to the console for debugging
  modal.style.display = "block";  // Display the modal
  startCountdown();  // Start the countdown
}

// Function to close the modal
function closePopup() {
  modal.style.display = "none";  // Hide the modal
}

// Initialize the reverse counter, progress bar, and counting display elements
let reverseCounter = 10;
let progressBar = document.getElementById("pbar");
let counting = document.getElementById("counting");

// Function to start the countdown timer
function startCountdown(){
    // Reset the reverse counter to 10
    reverseCounter = 10;
    // Create a timer that updates every second
    let downloadTimer = setInterval(function(){
        progressBar.value = 10 - (--reverseCounter);  // Update the progress bar
        if(reverseCounter <= -1) {  // If the counter reaches -1
            clearInterval(downloadTimer);  // Stop the timer
            closePopup();  // Close the modal
            window.open(input.value, "_blank");  // Open the input URL in a new tab
        }
        counting.innerHTML = reverseCounter;  // Update the countdown display
    }, 1000);  // Timer interval set to 1 second (1000 milliseconds)
}