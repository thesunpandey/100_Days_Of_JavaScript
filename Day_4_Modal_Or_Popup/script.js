// Get references to DOM elements
const modal = document.querySelector(".modal"),
  modalContent = document.querySelector(".modal-content"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

// Add event listeners
btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// Function to open the modal
function openModal(e) {
  e.preventDefault(); // Prevent default behavior of the button (e.g., submitting a form)
  modal.style.display = "block"; // Display the modal by setting its style to "block"
}

// Function to close the modal
function closeModal() {
  modalContent.classList.add("slide-up"); // Add the "slide-up" class to the modal content element

  // Set a timeout to delay hiding the modal, allowing the slide-up animation to complete
  setTimeout(() => {
    modal.style.display = "none"; // Hide the modal by setting its style to "none"
    modalContent.classList.remove("slide-up"); // Remove the "slide-up" class from the modal content element
  }, 500); // The timeout duration in milliseconds (500ms = 0.5 seconds)
}