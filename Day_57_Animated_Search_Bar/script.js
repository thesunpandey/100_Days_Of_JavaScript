// Select elements with class names for search icon, close icon, search container, and search input
const searchIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");
const searchEl = document.querySelector(".search");
const searchInput = document.querySelector(".search input");

// Add click event listener to the search icon
searchIcon.addEventListener("click", () => {
  // Move the search icon off the screen (downward)
  searchIcon.style.transform = "translateY(200%)";
  // Move the close icon onto the screen (to its original position)
  closeIcon.style.transform = "translateY(0)";
  // Show the search container with animations
  showSearchEl();
});

// Add click event listener to the close icon
closeIcon.addEventListener("click", () => {
  // Move the search icon back to its original position
  searchIcon.style.transform = "translateY(0)";
  // Move the close icon off the screen (upward)
  closeIcon.style.transform = "translateY(-200%)";
  // Hide the search container with animations
  hideSearchEl();
});

// Function to show the search container with animations
function showSearchEl() {
  // Move the search container onto the screen (from the left)
  searchEl.style.transform = "translateX(0)";
  // After 1 second, expand the width of the search container
  setTimeout(() => {
    searchEl.style.width = "30rem";
  }, 1000);
  // After 2 seconds, set the placeholder text for the search input
  setTimeout(() => {
    searchInput.setAttribute("placeholder", "Search...");
  }, 2000);
}

// Function to hide the search container with animations
function hideSearchEl() {
  // Clear the placeholder text of the search input
  searchInput.setAttribute("placeholder", "");
  // After 1 second, shrink the width of the search container
  setTimeout(() => {
    searchEl.style.width = "4.5rem";
  }, 1000);
  // After 2 seconds, move the search container off the screen (to the right)
  setTimeout(() => {
    searchEl.style.transform = "translateX(200%)";
  }, 2000);
}