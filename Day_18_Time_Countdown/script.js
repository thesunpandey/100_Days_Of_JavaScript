// Set the initial time in minutes
let time = 10;

// Convert minutes to seconds
let promoTime = time * 60;

// Get the element where the countdown will be displayed
let counting = document.getElementById("countdown");

// Function to start and manage the countdown
function startCountdown() {
  // Set up an interval that runs every 1000 milliseconds (1 second)
  let promoTimer = setInterval(() => {
    // Check if the countdown has finished
    if (promoTime <= 0) {
      // Stop the interval
      clearInterval(promoTimer);
      // Update the display to show the promo has ended
      counting.innerHTML = "Promo has ended.";
    } else {
      // Decrease the remaining time by 1 second
      promoTime--;

      // Calculate days, hours, minutes, and seconds
      let day = Math.floor(promoTime / 3600 / 24);
      let hours = Math.floor(promoTime / 3600) % 24;
      let min = Math.floor(promoTime / 60) % 60;
      let sec = Math.floor(promoTime % 60);

      // Update the display with the current time
      counting.innerHTML = `TIME: ${format(hours)}hr : ${format(min)}min : ${format(sec)}`;
    }
  }, 1000);
}

// Function to format single-digit numbers with a leading zero
function format(t) {
  return t < 10 ? `0${t}` : t;
}

// Start the countdown immediately
startCountdown();