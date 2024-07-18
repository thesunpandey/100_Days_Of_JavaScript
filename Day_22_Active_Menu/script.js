// Select the element with the class 'nav-list' which contains the navigation links
const navList = document.querySelector(".nav-list");

// Add an event listener to 'navList' for the 'click' event
navList.addEventListener("click", (e) => {
  // Get the parent element of the clicked target
  const navLink = e.target.parentElement;
  
  // Check if the parent element has the class 'link'
  if (navLink.classList.contains("link")) {
    // Remove the 'active' class from the currently active link
    navList.querySelector(".active").classList.remove("active");
    
    // Add the 'active' class to the clicked link's parent element
    navLink.classList.add("active");
  }
});