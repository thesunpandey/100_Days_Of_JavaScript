// Select all elements with the class 'slide'
const slides = document.querySelectorAll(".slide");

// Select the 'next' and 'prev' buttons
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// Set the auto scroll feature to true and define the interval time
const autoScroll = true;
let slideInterval;
const intervalTime = 5000; // 5 seconds

// Function to show the next slide
const nextSlide = () => {
  // Get the current slide
  const current = document.querySelector(".current");
  
  // Remove the 'current' class from the current slide
  current.classList.remove("current");
  
  // Check if there is a next sibling element
  if (current.nextElementSibling) {
    // If there is, add the 'current' class to the next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // If there isn't, add the 'current' class to the first slide
    slides[0].classList.add("current");
  }
  
  // Remove the 'current' class from the current slide again (this line is redundant and can be removed)
  current.classList.remove("current");
};

// Function to show the previous slide
const prevSlide = () => {
  // Get the current slide
  const current = document.querySelector(".current");
  
  // Remove the 'current' class from the current slide
  current.classList.remove("current");
  
  // Check if there is a previous sibling element
  if (current.previousElementSibling) {
    // If there is, add the 'current' class to the previous sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // If there isn't, add the 'current' class to the last slide
    slides[slides.length - 1].classList.add("current");
  }
  
  // Remove the 'current' class from the current slide again (this line is redundant and can be removed)
  current.classList.remove("current");
};

// Add event listener for the 'next' button click
next.addEventListener("click", () => {
  // Show the next slide
  nextSlide();
  
  // If auto scroll is enabled, reset the interval
  if (autoScroll) {
    clearInterval(slideInterval);
    auto();
  }
});

// Add event listener for the 'prev' button click
prev.addEventListener("click", () => {
  // Show the previous slide
  prevSlide();
  
  // If auto scroll is enabled, reset the interval
  if (autoScroll) {
    clearInterval(slideInterval);
    auto();
  }
});

// Function to auto scroll through the slides
if (autoScroll) {
  function auto() {
    // Set an interval to show the next slide every intervalTime milliseconds
    slideInterval = setInterval(nextSlide, intervalTime);
  }
}

// Start the auto scroll function
auto();