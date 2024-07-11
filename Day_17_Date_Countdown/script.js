// Set the target date for the countdown
const countTo = "1 Jan 2025";

// Function to update the countdown
function updateCountdown() {
    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSeconds = Math.max(0, (endDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    updateElement("days", days);
    updateElement("hours", format(hours));
    updateElement("minutes", format(minutes));
    updateElement("seconds", format(seconds));

    if (totalSeconds === 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<div class='time-unit'><div class='time-value'>Happy New Year!</div></div>";
    }
}

// Helper function to update an element with error checking
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    } else {
        console.error(`Element with id "${id}" not found`);
    }
}

// Function to format single-digit numbers with a leading zero
function format(t) {
    return t < 10 ? `0${t}` : t;
}

// Start the countdown when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initial call to set the countdown immediately
    updateCountdown();
    
    // Start the countdown interval
    const countdownInterval = setInterval(updateCountdown, 1000);
});