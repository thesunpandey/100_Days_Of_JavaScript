// Select elements with the class 'thumbnail', the 'slider' element, and the 'next' and 'prev' buttons
const thumbnails = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("slide-right");
const prevBtn = document.getElementById("slide-left");

// Add click event listener to the 'next' button to scroll the slider to the right
nextBtn.addEventListener("click", () => {
  let scrollAmount = 0; // Initialize the amount to scroll
  let slideTimer = setInterval(() => { // Set a timer to scroll the slider in intervals
    slider.scrollLeft += 10; // Scroll to the right by 10 pixels
    scrollAmount += 10; // Increase the scroll amount
    if (scrollAmount >= 100) { // Stop scrolling after 100 pixels
      window.clearInterval(slideTimer); // Clear the interval timer
    }
  }, 25); // Set the interval to 25 milliseconds
});

// Add click event listener to the 'prev' button to scroll the slider to the left
prevBtn.addEventListener("click", () => {
  let scrollAmount = 0; // Initialize the amount to scroll
  let slideTimer = setInterval(() => { // Set a timer to scroll the slider in intervals
    slider.scrollLeft -= 10; // Scroll to the left by 10 pixels
    scrollAmount += 10; // Increase the scroll amount
    if (scrollAmount >= 100) { // Stop scrolling after 100 pixels
      window.clearInterval(slideTimer); // Clear the interval timer
    }
  }, 25); // Set the interval to 25 milliseconds
});

// Auto Play Function to automatically scroll the slider
function autoPlay() {
  // If the slider has reached the end, reset to the beginning
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1; // Otherwise, scroll to the right by 1 pixel
  }
}

// Set an interval to automatically scroll the slider every 10 milliseconds
let play = setInterval(autoPlay, 10);

// Pause the auto-play when the user hovers over a thumbnail
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", () => {
    clearInterval(play); // Clear the interval to stop auto-play
  });
  thumbnails[i].addEventListener("mouseout", () => {
    // Restart the auto-play interval when the mouse leaves the thumbnail
    play = setInterval(autoPlay, 10);
  });
}