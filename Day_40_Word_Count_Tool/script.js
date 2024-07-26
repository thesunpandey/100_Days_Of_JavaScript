// Select elements from the DOM
let input = document.querySelector(".input"); // Input field for user text
let character = document.querySelector(".character"); // Display for character count
let word = document.querySelector(".word"); // Display for word count
let readingTime = document.querySelector(".reading-time"); // Display for estimated reading time
let wordLimit = document.querySelector(".word-limit"); // Display for remaining word limit
const WORD_LIMIT = 10; // Define a constant for the maximum word limit

// Add event listeners for keyup events on the input field
input.addEventListener("keyup", characterCount); // Count characters on keyup
input.addEventListener("keyup", wordCounter); // Count words on keyup

// Function to count the number of characters
function characterCount() {
  character.innerHTML = input.value.length; // Update the character display with the length of the input value
}

// Function to count the number of words and update related displays
function wordCounter(e) {
  // Match words in the input value using a regular expression
  let words = input.value.match(/\b[-?(\w+)?]+\b/gi);

  // If there are words matched
  if (words) {
    word.innerHTML = words.length; // Update the word display with the word count
    wordLimit.innerHTML = WORD_LIMIT - words.length; // Update the remaining word limit display
  } else {
    word.innerHTML = 0; // If no words, set word count to 0
  }

  // Word Limit Block of Code
  // Add an event listener for keydown events to enforce the word limit
  input.addEventListener("keydown", function (e) {
    words = input.value.match(/\b[-?(\w+)?]+\b/gi); // Re-check word count
    if (words) {
      // Check if the current word count exceeds the limit (minus one)
      if (words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
        e.preventDefault(); // Prevent additional input if the limit is reached
        // console.log("Word limit reached"); // Optionally log the limit reached message
      }
    }
  });

  // Calculate reading time based on an average reading speed of 225 words/minute
  if (words) {
    let seconds = Math.floor((words.length * 60) / 225); // Convert word count to estimated seconds
    if (seconds > 59) {
      let minutes = Math.floor(seconds / 60); // Calculate minutes from seconds
      seconds = seconds - minutes * 60; // Calculate remaining seconds
      readingTime.innerHTML = minutes + "m" + seconds + "s"; // Update reading time display in minutes and seconds
    } else {
      readingTime.innerHTML = seconds + "s"; // Update reading time display in seconds
    }
  } else {
    readingTime.innerHTML = "0s"; // If no words, set reading time to 0 seconds
  }
}