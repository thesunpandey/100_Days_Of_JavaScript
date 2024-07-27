// Select all elements with the class "accordion"
const acc = document.querySelectorAll(".accordion");

// Loop through each accordion element
for (let i = 0; i < acc.length; i++) {
  // Add a click event listener to each accordion element
  acc[i].addEventListener("click", function () {
    // Get the next sibling element of the clicked accordion (this is the description element)
    const desc = this.nextElementSibling;
    // Select all elements with the class "desc"
    const allDesc = document.querySelectorAll(".desc");
    // Select all accordion elements with the class "active"
    const activeAcc = document.getElementsByClassName("accordion active");

    // Check if the current description element has a maxHeight set
    if (desc.style.maxHeight) {
      // If it does, set maxHeight to null (collapse the description)
      desc.style.maxHeight = null;
      // Remove the "active" class from the clicked accordion
      this.classList.remove("active");
    } else {
      // Loop through all active accordion elements and remove the "active" class
      for (let i = 0; i < activeAcc.length; i++) {
        activeAcc[i].classList.remove("active");
      }

      // Loop through all description elements and set their maxHeight to null (collapse them)
      for (let i = 0; i < allDesc.length; i++) {
        allDesc[i].style.maxHeight = null;
      }

      // Set the maxHeight of the clicked description element to its scrollHeight (expand it)
      desc.style.maxHeight = desc.scrollHeight + "px";
      // Add the "active" class to the clicked accordion
      this.classList.add("active");
    }
  });
}