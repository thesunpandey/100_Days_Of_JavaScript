// Select all anchor tags within list items that are inside the element with class 'nav-list'
const links = document.querySelectorAll(".nav-list li a");

// Loop through each selected link
for (link of links) {
  // Add an event listener to each link for the 'click' event
  link.addEventListener("click", smoothScroll);
}

// Function to handle the smooth scrolling effect
function smoothScroll(e) {
  // Prevent the default action of the link, which is to jump to the section
  e.preventDefault();
  
  // Get the value of the 'href' attribute of the clicked link
  const href = this.getAttribute("href");
  
  // Find the target element using the href value as a selector
  document.querySelector(href).scrollIntoView({
    // Scroll to the target element smoothly
    behavior: "smooth",
  });
}


// Add an event listener to the window for the 'scroll' event
window.addEventListener("scroll", () => {
  // Select the header element
  const header = document.querySelector("header");
  
  // Toggle the 'sticky' class on the header based on the scroll position
  header.classList.toggle("sticky", window.scrollY > 0);
});