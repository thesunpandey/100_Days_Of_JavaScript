// Select the range slider input element from the document
const rangeSlider = document.querySelector("input");

// Select the element where the range slider value will be displayed
const valueEl = document.querySelector(".value");

// Set the initial text content of the value element to the current value of the range slider
valueEl.textContent = rangeSlider.value;

// Add an event listener to the range slider to update the value element's text content whenever the slider's value changes
rangeSlider.oninput = function () {
  // Update the text content of the value element to match the current value of the range slider
  valueEl.textContent = this.value;
};