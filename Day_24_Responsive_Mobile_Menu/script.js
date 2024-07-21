// Select all anchor elements within list items of the nav-list class
const links = document.querySelectorAll(".nav-list li a");

// Loop through each link element
for (link of links) {
  // Add a click event listener to each link to call smoothScroll function
  link.addEventListener("click", smoothScroll);
}

// Function to handle smooth scrolling
function smoothScroll(e) {
  // Prevent the default anchor click behavior
  e.preventDefault();
  // Get the href attribute of the clicked link
  const href = this.getAttribute("href");
  // Find the element that corresponds to the href and scroll to it smoothly
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  // Hide the menu (for mobile navigation)
  hideMenu();
}

// RESPONSIVE MOBILE MENU

// Select the menu element with the class "nav-list"
const menu = document.querySelector(".nav-list");
// Select the hamburger icon element
const hamburger = document.querySelector(".hamburger");
// Select the close icon element
const close = document.querySelector(".close");

// Function to show the mobile menu
const showMenu = () => {
  // Hide the hamburger icon
  hamburger.style.display = "none";
  // Move the close icon into view
  close.style.transform = "translateY(0)";
  // Move the menu into view
  menu.style.transform = "translateY(0)";
};

// Function to hide the mobile menu
const hideMenu = () => {
  // Move the close icon out of view
  close.style.transform = "translateY(-20rem)";
  // Show the hamburger icon
  hamburger.style.display = "block";
  // Move the menu out of view
  menu.style.transform = "translateY(-200%)";
};

// Add a click event listener to the hamburger icon to show the menu
hamburger.addEventListener("click", showMenu);
// Add a click event listener to the close icon to hide the menu
close.addEventListener("click", hideMenu);