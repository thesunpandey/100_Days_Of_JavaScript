// Select the elements for displaying the typed word and the cursor
const typedWord = document.querySelector(".typed-word");
const cursor = document.querySelector(".cursor");

// Array of words to be typed and erased
const wordArray = ["Web Developer", "Product Designer", "Tech Advocate"];
let wordArrayIndex = 0;  // Index to keep track of the current word in the array
let letterIndex = 0;  // Index to keep track of the current letter being typed/erased

// Delays for typing, erasing, and before starting a new word
const typingDelay = 200;  // Delay between typing each letter
const erasingDelay = 100;  // Delay between erasing each letter
const newWordDelay = 2000;  // Delay before starting to type a new word

// Typing Function
function type() {
  // If there are still letters to type in the current word
  if (letterIndex < wordArray[wordArrayIndex].length) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");  // Add the "typing" class to the cursor for visual effect
    }

    // Append the next character of the current word to the typedWord element
    typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
    letterIndex++;  // Move to the next letter
    setTimeout(type, typingDelay);  // Call the type function again after a delay
  } else {
    cursor.classList.remove("typing");  // Remove the "typing" class when done typing the word
    setTimeout(erase, newWordDelay);  // Start erasing after a delay
  }
}

// Erase Function
function erase() {
  // If there are still letters to erase in the current word
  if (letterIndex > 0) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");  // Add the "typing" class to the cursor for visual effect
    }

    // Remove the last character of the current word from the typedWord element
    typedWord.textContent = wordArray[wordArrayIndex].substring(0, letterIndex - 1);
    letterIndex--;  // Move to the previous letter
    setTimeout(erase, erasingDelay);  // Call the erase function again after a delay
  } else {
    cursor.classList.remove("typing");  // Remove the "typing" class when done erasing the word
    wordArrayIndex++;  // Move to the next word in the array
    if (wordArrayIndex >= wordArray.length) {
      wordArrayIndex = 0;  // Loop back to the first word if at the end of the array
    }
    setTimeout(type, typingDelay);  // Start typing the new word after a delay
  }
}

// Start the typing effect after the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newWordDelay);  // Call the type function after an initial delay
});

// Preloader JS
const preloader = document.querySelector(".preloader");

// Hide the preloader when the window is fully loaded
window.addEventListener("load", () => {
  preloader.style.display = "none";  // Hide the preloader by setting its display style to "none"
});