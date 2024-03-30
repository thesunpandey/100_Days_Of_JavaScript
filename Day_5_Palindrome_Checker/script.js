// Selecting the button element with the class "btn" from the DOM
const btn = document.querySelector(".btn");
// Selecting the element with the class "result" from the DOM
const result = document.querySelector(".result");

// Adding an event listener to the button, so that when it's clicked, the palindrome function is called
btn.addEventListener("click", palindrome);

// Defining the palindrome function
function palindrome() {
  // Retrieving the value of the input field with the class "input-text"
  const word = document.querySelector(".input-text").value;
  // Storing the length of the input word
  let len = word.length;

  // Extracting the first half of the word (rounded down if the length is odd) and converting to lowercase
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  // Extracting the second half of the word (rounded up if the length is odd) and converting to lowercase
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  // Reversing the order of characters in the 'end' string using the spread operator, reverse method, and join method
  let flip = [...end].reverse().join("");

  // Checking if the first half of the word (start) is equal to the reversed second half of the word (flip)
  if (start == flip) {
    // If the word is a palindrome, displaying a message indicating it's a palindrome
    result.innerHTML = `${word.toUpperCase()} is a palindrome`;
  } else {
    // If the word is not a palindrome, displaying a message indicating it's not a palindrome
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
  }
}