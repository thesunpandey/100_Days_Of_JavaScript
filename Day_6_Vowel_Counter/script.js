// Selecting the input element with the class "input-text" from the DOM
const word = document.querySelector(".input-text");
// Selecting the button element with the class "btn" from the DOM
const btn = document.querySelector(".btn");
// Selecting the element with the class "result" from the DOM
const result = document.querySelector(".result");

// Adding an event listener to the button, so that when it's clicked, the countVowel function is called
btn.addEventListener("click", countVowel);

// Defining the countVowel function
function countVowel() {
  // Initializing a variable to store the count of vowels in the input word
  let vowelCount = 0;
  // Retrieving the value of the input field and converting it to lowercase
  let wordVal = word.value.toLowerCase();

  // Iterating through each character of the input word
  for (let i = 0; i < wordVal.length; i++) {
    // Extracting the current character
    let letter = wordVal[i];
    // Checking if the current character is a vowel using a regular expression
    if (letter.match(/([a,e,i,o,u])/)) {
      // If the current character is a vowel, increment the vowel count
      vowelCount++;
    }
  }
  // Displaying the result indicating the number of vowels in the input word
  result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}