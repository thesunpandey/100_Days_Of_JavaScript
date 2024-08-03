(function () {
  // Select all elements with the class name "timeline" that are <li> elements
  const items = document.querySelectorAll(".timeline li");

  // Function to check if an element is within the viewport
  function isElementInViewport(el) {
    // Get the bounding rectangle of the element
    let rect = el.getBoundingClientRect();
    // Check if the element is within the viewport
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add or remove the "slide-in" class based on element's visibility
  function slideIn() {
    // Loop through each item in the "items" NodeList
    for (let i = 0; i < items.length; i++) {
      // If the item is in the viewport, add the "slide-in" class
      if (isElementInViewport(items[i])) {
        items[i].classList.add("slide-in");
      } else {
        // If the item is not in the viewport, remove the "slide-in" class
        items[i].classList.remove("slide-in");
      }
    }
  }

  // Add event listeners for "load", "scroll", and "resize" events
  // Call the slideIn function when any of these events occur
  window.addEventListener("load", slideIn);
  window.addEventListener("scroll", slideIn);
  window.addEventListener("resize", slideIn);
})();
