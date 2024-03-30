// Selecting the button element with the class "btn" from the DOM
const btn = document.querySelector(".btn");
// Selecting the input element with the class "coupon" from the DOM
const coupon = document.querySelector(".coupon");

// Defining an arrow function named copyText, which takes an event parameter (e)
const copyText = (e) => {
  // Preventing the default action of the event (e.g., preventing form submission)
  e.preventDefault();

  // Selecting the text within the input element
  coupon.select();
  // Setting the selection range to cover the entire text within the input element
  coupon.setSelectionRange(0, 999999);
  // Executing the copy command to copy the selected text to the clipboard
  document.execCommand("copy");

  // Changing the text content of the button to indicate that the text has been copied
  btn.textContent = "Copied!!!";
  // Setting a timeout function to revert the button text back to "Copy" after 3 seconds
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
};

// Adding an event listener to the button, so that when it's clicked, the copyText function is called
btn.addEventListener("click", copyText);