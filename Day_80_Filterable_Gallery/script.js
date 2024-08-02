// Select the gallery filter container
const galleryFilter = document.querySelector(".gallery-filter");

// Select all image elements
const galleryImages = document.querySelectorAll(".image");

// Add click event listener to the gallery filter container
galleryFilter.addEventListener("click", (e) => {
  // Check if the clicked element has the class "filter-gallery"
  if (e.target.classList.contains("filter-gallery")) {
    // Remove "active" class from the currently active filter
    galleryFilter.querySelector(".active").classList.remove("active");
    
    // Add "active" class to the clicked filter
    e.target.classList.add("active");

    // Get the filter value from the clicked element's data-filter attribute
    const filter = e.target.dataset.filter;
    
    // Loop through all gallery images
    galleryImages.forEach((image) => {
      if (filter === "all" || image.classList.contains(filter)) {
        // If the filter is "all" or the image has the selected filter class, display the image
        image.style.display = "block";
      } else {
        // Otherwise, hide the image
        image.style.display = "none";
      }
    });
  }
});