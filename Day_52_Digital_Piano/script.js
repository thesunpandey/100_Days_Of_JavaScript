// Select all elements with the class "key" and store them in a NodeList
const keys = document.querySelectorAll(".key");

// Select the element that displays the note being pressed
const note = document.querySelector(".key-pressed");

// Add an event listener to the window object that listens for keydown events and calls the playNote function
window.addEventListener("keydown", playNote);

// Function to play the corresponding note when a key is pressed
function playNote(e) {
  // Select the audio element with the data-key attribute matching the pressed key's keyCode
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  
  // Select the key element with the data-key attribute matching the pressed key's keyCode
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // If no matching key element is found, exit the function
  if (!key) return;

  // Get the note associated with the pressed key from its data-note attribute
  const keyNote = key.dataset.note;

  // Add the "playing" class to the key element for visual effect
  key.classList.add("playing");

  // Display the note being pressed
  note.innerHTML = keyNote;

  // Reset the audio playback to the start
  audio.currentTime = 0;

  // Play the audio
  audio.play();
}

// Add an event listener to each key element to listen for the end of the transition
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

// Function to remove the "playing" class after the transition ends
function removeTransition(e) {
  // Check if the transition property is "transform"
  if (e.propertyName !== "transform") return;

  // Remove the "playing" class from the key element
  this.classList.remove("playing");
}