// Select all anchor links within the navigation list
const links = document.querySelectorAll(".nav-list li a");

// Add an event listener to each link for the 'click' event
for (let link of links) {
  link.addEventListener("click", smoothScroll);
}

// Function to handle smooth scrolling when a link is clicked
function smoothScroll(e) {
  // Prevent the default action of the link click
  e.preventDefault();

  // Get the 'href' attribute value of the clicked link
  const href = this.getAttribute("href");

  // Select the target element to scroll to using the 'href' value
  const targetElement = document.querySelector(href);

  // Scroll to the target element with a smooth scrolling behavior
  targetElement.scrollIntoView({
    behavior: "smooth",
  });
}