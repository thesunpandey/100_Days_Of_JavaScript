// Select all elements with the class 'btn' and the element with the class 'text'
const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text");

// Iterate over each button element
btns.forEach((btn) => {
  // Add a 'click' event listener to each button
  btn.addEventListener("click", (e) => {
    // Get the value of the 'data-link' attribute from the clicked button
    const filter = e.target.dataset.link;

    // Log the filter value to the console (for debugging purposes)
    console.log(filter);

    // Check the value of the 'data-link' attribute and update the text content accordingly
    if (filter == "home") {
      // If the value is 'home', set the text content to 'Home Page'
      text.textContent = "Home Page";
    } else if (filter == "about") {
      // If the value is 'about', set the text content to 'About Page'
      text.textContent = "About Page";
    } else {
      // For any other value, set the text content to 'Contact Page'
      text.textContent = "Contact Page";
    }
  });
});