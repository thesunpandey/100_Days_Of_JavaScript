// Get a reference to the element with the class 'hex'
const hex = document.querySelector(".hex");

// Get a reference to the element with the class 'generate'
const btn = document.querySelector(".generate");

// Define a function to generate a random color
const generateColor = () => {
  // Generate a random hexadecimal color code
  const randomColor = Math.random().toString(16).substring(2, 8);

  // Set the background color of the document's body to the generated color
  document.body.style.backgroundColor = "#" + randomColor;

  // Update the text content of the 'hex' element with the generated color code
  hex.innerHTML = "#" + randomColor;
};

// Add a click event listener to the 'btn' element
btn.addEventListener("click", generateColor);

// Call the 'generateColor' function once to initialize the color
generateColor();