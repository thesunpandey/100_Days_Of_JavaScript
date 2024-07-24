// Get the necessary DOM elements
const btn = document.querySelector(".btn"), // Button to calculate BMI
  result = document.querySelector(".result"), // Element to display the result
  reset = document.querySelector(".reset"); // Button to reset the form

// Add event listener to the calculate button
btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the height and weight values from the input fields
  let height = document.querySelector(".height").value;
  let weight = document.querySelector(".weight").value;

  console.log(height); // Log the height value to the console (for debugging)

  // Validate input
  if (height === "" || isNaN(height)) {
    // Check if height is empty or not a number
    return (result.innerHTML = "Provide a valid Height!"); // Display error message
  } else if (weight === "" || isNaN(weight)) {
    // Check if weight is empty or not a number
    return (result.innerHTML = "Provide a valid Weight!"); // Display error message
  } else {
    // Calculate BMI
    height = height / 100; // Convert height to meters
    let bmi = (weight / Math.pow(height, 2)).toFixed(2); // Calculate BMI and round to 2 decimal places
    console.log(bmi); // Log the BMI value to the console (for debugging)

    // Categorize result based on BMI value
    if (bmi < 18.5) {
      showResult(`Underweight: <span>${bmi}</span>`, "orange"); // Show underweight result
    } else if (bmi >= 18.5 && bmi < 24.9) {
      showResult(`Normal: <span>${bmi}</span>`, "green"); // Show normal result
    } else if (bmi >= 25.0 && bmi < 29.9) {
      showResult(`Overweight: <span>${bmi}</span>`, "blue"); // Show overweight result
    } else {
      showResult(`Obese: <span>${bmi}</span>`, "red"); // Show obese result
    }
  }
  reset.style.display = "block"; // Display the reset button
}

// Function to show the result with specified value and color
function showResult(val, color) {
  result.style.backgroundColor = color; // Set background color of result element
  result.style.display = "block"; // Ensure result element is visible
  result.innerHTML = val; // Set the result content
}

// Add event listener to the reset button
reset.addEventListener("click", () => {
  document.querySelector("form").reset(); // Reset the form fields
  reset.style.display = "none"; // Hide the reset button
  result.style.display = "none"; // Hide the result element
});