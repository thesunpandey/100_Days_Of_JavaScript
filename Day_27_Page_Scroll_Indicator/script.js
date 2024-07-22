// Select all anchor elements within list items that are children of elements with class 'nav-list'
const links = document.querySelectorAll(".nav-list li a");

// Iterate over each link in the NodeList
for (link of links) {
  // Add a 'click' event listener to each link that calls the 'smoothScroll' function
  link.addEventListener("click", smoothScroll);
}

// Function to handle smooth scrolling
function smoothScroll(e) {
  // Prevent the default anchor click behavior
  e.preventDefault();
  // Get the href attribute value of the clicked link
  const href = this.getAttribute("href");
  // Scroll to the element with the id matching the href value with a smooth scrolling effect
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

// Add a 'scroll' event listener to the window object
window.addEventListener("scroll", () => {
  // Select the header element
  const header = document.querySelector("header");
  // Toggle the 'sticky' class on the header based on the scroll position
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Set a function to be called whenever the user scrolls
window.onscroll = () => scrollProgress();

// Function to update the scroll progress bar
function scrollProgress() {
  // Get the current scroll position
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  // Calculate the total page height minus the viewport height
  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // Calculate the scroll percentage
  const scrollPercentage = (currentState / pageHeight) * 100;

  // Select the progress bar element
  const progressBar = document.querySelector(".progress");

  // Make the progress bar visible
  progressBar.style.visibility = "visible";
  // Set the width of the progress bar based on the scroll percentage
  progressBar.style.width = scrollPercentage + "%";
}