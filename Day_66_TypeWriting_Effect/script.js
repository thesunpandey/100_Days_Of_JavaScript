// Select elements from the DOM
const typedWord = document.querySelector(".typed-word"); // Element where typed word will be displayed
const cursor = document.querySelector(".cursor"); // Element that represents the cursor

// Array of words to be typed and erased
const wordArray = ["Web Developer", "Product Designer", "Tech Advocate"];
let wordArrayIndex = 0; // Index to keep track of the current word in the array
let letterIndex = 0; // Index to keep track of the current letter in the word

// Timing variables
const typingDelay = 200; // Delay between each letter typing
const erasingDelay = 100; // Delay between each letter erasing
const newWordDelay = 2000; // Delay before typing a new word

// Typing function to type out each word
function type() {
  // Check if there are more letters to type in the current word
  if (letterIndex < wordArray[wordArrayIndex].length) {
    // Add "typing" class to cursor if not already present
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }

    // Add the next letter to the typedWord element
    typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
    letterIndex++; // Move to the next letter
    setTimeout(type, typingDelay); // Continue typing after a delay
  } else {
    // Remove "typing" class from cursor when word is fully typed
    cursor.classList.remove("typing");
    setTimeout(erase, newWordDelay); // Start erasing after a delay
  }
}

// Erasing function to erase each word
function erase() {
  // Check if there are more letters to erase
  if (letterIndex > 0) {
    // Add "typing" class to cursor if not already present
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }

    // Remove the last letter from the typedWord element
    typedWord.textContent = wordArray[wordArrayIndex].substring(0, letterIndex - 1);
    letterIndex--; // Move to the previous letter
    setTimeout(erase, erasingDelay); // Continue erasing after a delay
  } else {
    // Remove "typing" class from cursor when word is fully erased
    cursor.classList.remove("typing");
    wordArrayIndex++; // Move to the next word in the array
    // If the end of the array is reached, start from the beginning
    if (wordArrayIndex >= wordArray.length) {
      wordArrayIndex = 0;
    }
    setTimeout(type, typingDelay); // Start typing the next word after a delay
  }
}

// Event listener to start the typing effect when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newWordDelay); // Start typing after an initial delay
});