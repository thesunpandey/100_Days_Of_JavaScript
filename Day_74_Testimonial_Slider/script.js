// Select the "next" and "prev" buttons from the document
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// Select all the slide elements from the document
const slides = document.querySelectorAll(".slide");

// Initialize the index to keep track of the current slide
let index = 0;

// Log the slides to the console for debugging
console.log(slides);

// Function to display the slide at the given index
function display(index) {
  // Hide all the slides by setting their display style to "none"
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // Display the slide at the given index by setting its display style to "flex"
  slides[index].style.display = "flex";
}

// Function to show the next slide
function nextSlide() {
  // Increment the index to move to the next slide
  index++;
  
  // If the index exceeds the number of slides, reset it to 0 (loop back to the first slide)
  if (index > slides.length - 1) {
    index = 0;
  }
  
  // Display the slide at the updated index
  display(index);
}

// Function to show the previous slide
function prevSlide() {
  // Decrement the index to move to the previous slide
  index--;
  
  // If the index is less than 0, set it to the last slide (loop back to the last slide)
  if (index < 0) {
    index = slides.length - 1;
  }
  
  // Display the slide at the updated index
  display(index);
}

// Add event listeners to the "next" and "prev" buttons
// When the "next" button is clicked, call the nextSlide function
next.addEventListener("click", nextSlide);

// When the "prev" button is clicked, call the prevSlide function
prev.addEventListener("click", prevSlide);

// Initially display the first slide
display(index);