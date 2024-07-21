// Select the button with the class "top"
const scrollBtn = document.querySelector(".top");
// Get the root element (html element) to control scrolling
const rootEl = document.documentElement;

// Add an event listener to the document to call showBtn when the user scrolls
document.addEventListener("scroll", showBtn);
// Add an event listener to the scroll button to call scrollToTop when clicked
scrollBtn.addEventListener("click", scrollToTop);

// Function to show or hide the scroll button based on the scroll position
function showBtn() {
  // Calculate the total scrollable height of the document
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  // If scrolled more than 30% of the total height, show the button
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn");
  } else {
    // Otherwise, hide the button
    scrollBtn.classList.remove("show-btn");
  }
}

// Function to smoothly scroll to the top of the page
function scrollToTop() {
  // Scroll to the top with smooth behavior
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}