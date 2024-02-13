// Selecting the element with the class "count" and storing it in a variable
const count = document.querySelector(".count");
// Selecting the element with the class "buttons" and storing it in a variable
const buttons = document.querySelector(".buttons");

// Adding a click event listener to the "buttons" element
buttons.addEventListener("click", (e) => {
  // Checking if the clicked element has the class "add"
  if (e.target.classList.contains("add")) {
    // If so, incrementing the innerHTML of the "count" element and calling setColor function
    count.innerHTML++;
    setColor();
  }
  // Checking if the clicked element has the class "subtract"
  if (e.target.classList.contains("subtract")) {
    // If so, decrementing the innerHTML of the "count" element and calling setColor function
    count.innerHTML--;
    setColor();
  }
  // Checking if the clicked element has the class "reset"
  if (e.target.classList.contains("reset")) {
    // If so, setting the innerHTML of the "count" element to 0 and calling setColor function
    count.innerHTML = 0;
    setColor();
  }
});

// Function to set the color of the "count" element based on its value
function setColor() {
  // If the innerHTML of the "count" element is greater than 0
  if (count.innerHTML > 0) {
    // Setting the color of the "count" element to yellow
    count.style.color = "yellow";
  } 
  // If the innerHTML of the "count" element is less than 0
  else if (count.innerHTML < 0) {
    // Setting the color of the "count" element to orangered
    count.style.color = "orangered";
  } 
  // If the innerHTML of the "count" element is equal to 0
  else {
    // Setting the color of the "count" element to white
    count.style.color = "#fff";
  }
}
