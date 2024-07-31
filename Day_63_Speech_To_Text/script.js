// Select the search form element
const searchForm = document.querySelector("#search-form");

// Select the search input element
const searchInput = document.querySelector("#search-input");

// Select the speech button container
const speechBtnDiv = document.querySelector("#speech-btn");

// Select the microphone button icon
const micBtn = document.querySelector(".btn .fas");

// Select the instruction text element
const instruction = document.querySelector(".instruction");

// Get the SpeechRecognition object depending on the browser
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Check if the browser supports Speech Recognition
if (speechRecognition) {
  console.log("Speech Recognition Supported");

  // Create a new instance of SpeechRecognition
  const recognition = new speechRecognition();

  // Add a click event listener to the microphone button
  micBtn.addEventListener("click", micBtnClicked);

  // Function to handle the microphone button click event
  function micBtnClicked(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    // Check the current icon class to determine if speech recognition should start or stop
    if (micBtn.classList.contains("fa-microphone")) {
      recognition.start(); // Start speech recognition
    } else {
      recognition.stop(); // Stop speech recognition
    }
  }

  // Event listener for when speech recognition starts
  recognition.addEventListener("start", () => {
    micBtn.classList.remove("fa-microphone"); // Change the icon to indicate recording
    micBtn.classList.add("fa-microphone-slash");
    instruction.textContent = "Recording..."; // Update the instruction text
    searchInput.focus(); // Focus on the search input
    console.log("Speech Recognition Enabled");
  });

  // Event listener for when speech recognition stops
  recognition.addEventListener("end", () => {
    micBtn.classList.remove("fa-microphone-slash"); // Change the icon back to the default state
    micBtn.classList.add("fa-microphone");
    instruction.textContent = "Click the Mic icon to start"; // Update the instruction text
    searchInput.focus(); // Focus on the search input
    console.log("Speech Recognition Disabled");
  });

  // Enable continuous speech recognition
  recognition.continuous = true;

  // Variable to store the transcribed content
  let content = "";

  // Event listener for handling the result of speech recognition
  recognition.addEventListener("result", (e) => {
    console.log(e); // Log the event object for debugging purposes
    const current = e.resultIndex; // Get the index of the current result
    const transcript = e.results[current][0].transcript; // Get the transcribed text
    content += transcript; // Append the transcribed text to the content variable
    searchInput.value = content; // Set the search input value to the transcribed content
    searchInput.focus(); // Focus on the search input
  });
} else {
  // If the browser does not support Speech Recognition
  console.log("Speech Recognition Not Supported");
  speechBtnDiv.style.visibility = "hidden"; // Hide the speech button container
}