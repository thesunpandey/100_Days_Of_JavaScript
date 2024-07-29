// Select all elements with the class "tab-link"
const tabLinks = document.getElementsByClassName("tab-link");

// Select all elements with the class "tab-content"
const allContent = document.querySelectorAll(".tab-content");

// Loop through all tab links
for (let i = 0; i < tabLinks.length; i++) {
  // Add a click event listener to each tab link
  tabLinks[i].addEventListener("click", function (e) {
    // Find the currently active tab
    const current = document.getElementsByClassName("active");
    
    // Remove the "active" class from the currently active tab
    current[0].className = current[0].className.replace(" active", "");
    
    // Add the "active" class to the clicked tab
    this.className += " active";

    // Get the filter value from the clicked tab's data-filter attribute
    const filter = e.target.dataset.filter;
    console.log(filter);

    // Loop through all content elements
    allContent.forEach((content) => {
      // If the content element has a class matching the filter
      if (content.classList.contains(filter)) {
        // Show the content
        content.style.display = "block";
      } else {
        // Hide the content
        content.style.display = "none";
      }
    });
  });
}