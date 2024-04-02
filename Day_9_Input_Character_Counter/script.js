// Selecting the HTML element with the class "count" and storing it in the variable 'count'
const count = document.querySelector(".count");

// Selecting the input element and storing it in the variable 'input'
const input = document.querySelector("input");

// Adding an event listener to the 'input' element for the 'keyup' event
input.addEventListener("keyup", () => {
  // On each keyup event, update the innerHTML of the 'count' element to the length of the input value
  count.innerHTML = input.value.length;
});