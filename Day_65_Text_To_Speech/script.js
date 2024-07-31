// Select the search form element
const searchForm = document.querySelector("#search-form");

// Select the input element within the search form
const input = document.querySelector("#search-input");

// Select the speech button container
const speechBtnDiv = document.querySelector("#speech-btn");

// Select the microphone button icon within the button
const micBtn = document.querySelector(".btn .fas");

// Select the instruction text element
const instruction = document.querySelector(".instruction");

// Get the SpeechSynthesis object from the window
const speechSynthesis = window.speechSynthesis;

// Check if the browser supports Speech Synthesis
if (speechSynthesis) {
  console.log("Speech Synthesis Supported");

  // Add a click event listener to the microphone button
  micBtn.addEventListener("click", speak);

  // Function to handle the click event and perform speech synthesis
  function speak(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const inputValue = input.value; // Get the value from the input field
    const speech = new SpeechSynthesisUtterance(); // Create a new SpeechSynthesisUtterance object

    // Set the properties of the speech synthesis
    speech.lang = "en-US"; // Set the language to US English
    speech.text = inputValue; // Set the text to be spoken to the input field value
    speech.volume = "1"; // Set the volume (range is 0 to 1)
    speech.rate = "1"; // Set the speech rate (range is 0.1 to 10)
    speech.pitch = "1"; // Set the pitch (range is 0 to 2)

    // Speak the text using the speech synthesis object
    speechSynthesis.speak(speech);
  }
} else {
  // If the browser does not support Speech Synthesis
  console.log("Speech Synthesis Not Supported");
  speechBtnDiv.style.visibility = "hidden"; // Hide the speech button container
}