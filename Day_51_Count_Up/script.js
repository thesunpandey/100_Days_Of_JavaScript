// Select all elements with the class "counter"
const counters = document.querySelectorAll(".counter");

// Iterate over each counter element
counters.forEach((counter) => {
  // Initialize the counter display to 0
  counter.innerText = 0;

  // Define the function to update the counter
  function updateCounter() {
    // Get the target value from the data-target attribute
    const target = +counter.dataset.target;
    // Get the current count from the element's text
    const count = +counter.innerText;
    // Calculate the increment (target divided by 200 for smooth animation)
    const increment = target / 200;

    // If the current count is less than the target
    if (count < target) {
      // Increase the count by the increment and round up
      counter.innerText = `${Math.ceil(count + increment)}`;
      // Call this function again after 10ms
      setTimeout(updateCounter, 10);
    } else {
      // If we've reached or exceeded the target, set the count to the target
      counter.innerText = target;
    }
  }

  // Add a scroll event listener to the window
  window.addEventListener("scroll", () => {
    // Get the current scroll position
    const scrollHeight = window.pageYOffset;
    // Select the element with class "top"
    const sectionTop = document.querySelector(".top");
    // Get the height of the "top" section
    const sectionTopHeight = sectionTop.clientHeight;
    console.log(sectionTopHeight);

    // If we've scrolled past the height of the "top" section
    if (scrollHeight >= sectionTopHeight - 1) {
      // Start updating the counter
      updateCounter();
    }
  });
});