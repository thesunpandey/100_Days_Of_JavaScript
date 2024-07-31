// Select the element that will toggle dark mode
const toggleDarkMode = document.querySelector(".toggle-darkmode");

// Select the element that will display the toggle text
const toggleText = document.querySelector(".toggle-text");

// Retrieve the dark mode setting from local storage
let darkMode = localStorage.getItem("darkMode");

// Function to enable dark mode
const enableDarkMode = () => {
  // Add the 'darkmode' class to the body element
  document.body.classList.add("darkmode");
  // Change the toggle text to 'Light'
  toggleText.textContent = "Light";
  // Save the dark mode setting in local storage
  localStorage.setItem("darkMode", "enabled");
};

// Function to disable dark mode
const disableDarkMode = () => {
  // Remove the 'darkmode' class from the body element
  document.body.classList.remove("darkmode");
  // Change the toggle text to 'Dark'
  toggleText.textContent = "Dark";
  // Remove the dark mode setting from local storage
  localStorage.setItem("darkMode", null);
};

// Check the dark mode setting on page load
if (darkMode === "enabled") {
  // If dark mode is enabled, apply it
  enableDarkMode();
}

// Add a click event listener to the toggle button
toggleDarkMode.addEventListener("click", () => {
  // Re-check the dark mode setting from local storage
  let darkMode = localStorage.getItem("darkMode");

  // If dark mode is not enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    // Otherwise, disable dark mode
    disableDarkMode();
  }
});