// Select all <li> elements (representing the keys on a calculator)
const keys = document.getElementsByTagName("li");

// Select the <p> element where the result will be displayed
const result = document.querySelector("p");

// Select the element with the class "clear" for the clear button
const clear = document.querySelector(".clear");

// Loop through all the keys
for (let i = 0; i < keys.length; i++) {
  // If the key's inner HTML is "=", add an event listener to perform the calculation
  if (keys[i].innerHTML === "=") {
    keys[i].addEventListener("click", calculate);
  } else {
    // Otherwise, add an event listener to add the key's value to the current result
    keys[i].addEventListener("click", addToCurrentValue(i));
  }
}

// Function to return another function that adds the clicked key's value to the result
function addToCurrentValue(i) {
  return () => {
    // Replace the division and multiplication symbols with JavaScript operators
    if (keys[i].innerHTML === "÷") {
      result.innerHTML += "/";
    } else if (keys[i].innerHTML === "x") {
      result.innerHTML += "*";
    } else {
      // Add the key's inner HTML to the result
      result.innerHTML += keys[i].innerHTML;
    }
  };
}

// Function to evaluate the expression in the result and update the result
function calculate() {
  return (result.innerHTML = eval(result.innerHTML));
}

// Add an event listener to the clear button to clear the result
clear.addEventListener("click", () => {
  result.innerHTML = "";
});