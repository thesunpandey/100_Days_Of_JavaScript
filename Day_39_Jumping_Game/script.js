// Select the elements from the DOM
const hero = document.querySelector(".hero"); // Select the hero element
const heroBoy = document.querySelector(".hero-boy"); // Select the hero boy element (currently not used)
const vilan = document.querySelector(".vilan"); // Select the villain element

// Function to handle the jump action
const jump = () => {
  // Check if the hero is not already animated
  if (!hero.classList.contains("animate")) {
    // Add the "animate" class to trigger the jump animation
    hero.classList.add("animate");

    // Start the villain's movement animation
    vilan.style.animation = "move 1s infinite linear";
  }

  // Remove the "animate" class after 300 milliseconds to reset the jump
  setTimeout(() => {
    hero.classList.remove("animate");
  }, 300);
};

// Add an event listener for keydown events
document.addEventListener("keydown", (e) => {
  // Check if the pressed key is the spacebar
  if (e.code === "Space") {
    jump(); // Call the jump function
  }
});

// Set an interval to check for collision every 10 milliseconds
let isAlive = setInterval(() => {
  // Get the current vertical position (top) of the hero
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));

  // Get the current horizontal position (left) of the villain
  let vilanLeft = parseInt(window.getComputedStyle(vilan).getPropertyValue("left"));

  // Check for a collision between the hero and the villain
  if (vilanLeft < 40 && vilanLeft > 20 && heroTop >= 130) {
    // Stop the villain's animation on collision
    vilan.style.animation = "none";

    // Alert the player that the game is over and provide instructions to restart
    alert("Game over. Press spacebar to start");
  }
}, 10);