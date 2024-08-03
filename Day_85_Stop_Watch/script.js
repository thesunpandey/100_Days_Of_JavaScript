// Select DOM elements
const timer = document.querySelector(".time");
const startT = document.querySelector(".start");
const pauseT = document.querySelector(".pause");
const resetT = document.querySelector(".reset");

// Initialize timer variables
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let t = null; // Variable to store the interval

// Add event listeners to buttons
startT.addEventListener("click", startTimer);
pauseT.addEventListener("click", pauseTimer);
resetT.addEventListener("click", resetTimer);

// Function to start the timer
function startTimer() {
  if (t !== null) {
    clearInterval(t); // Clear any existing interval
  }
  t = setInterval(displayTime, 10); // Update time every 10 milliseconds
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(t); // Stop the interval
}

// Function to reset the timer
function resetTimer() {
  clearInterval(t); // Stop the interval
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; // Reset all time values
  timer.innerHTML = "00 : 00 : 00 : 000"; // Reset the display
}

// Function to update and display the time
function displayTime() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  // Format the time values
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  // Update the timer display
  timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}