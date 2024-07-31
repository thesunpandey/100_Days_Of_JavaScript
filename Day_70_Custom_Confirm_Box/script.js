// Selecting elements from the DOM
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const confirmEl = document.querySelector(".confirm");
const closeEl = document.querySelector(".close");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const btnOk = document.querySelector(".btn-ok");
const btnCancel = document.querySelector(".btn-cancel");

// Custom Confirm Box class
class ShowConfirm {
  // Constructor to initialize the confirm box with title, content, ok button text, and cancel button text
  constructor(title, content, ok, cancel) {
    this.title = title;
    this.content = content;
    this.ok = ok;
    this.cancel = cancel;
  }

  // Method to trigger the confirm box with a callback function
  trigger(callbackFn) {
    // Setting the text content of the title and content elements
    title.textContent = this.title;
    content.textContent = this.content;
    // Setting the text of the OK and Cancel buttons
    btnOk.innerText = this.ok;
    btnCancel.innerText = this.cancel;

    // Removing the 'close-modal' class to show the confirm box
    confirmEl.classList.remove("close-modal");

    // Adding event listeners for closing the confirm box
    closeEl.addEventListener("click", this.closeModal);
    btnCancel.addEventListener("click", this.closeModal);

    // Adding event listener for the OK button to call the callback function and close the confirm box
    btnOk.addEventListener("click", () => {
      callbackFn();
      this.closeModal();
    });
  }

  // Method to close the confirm box by adding the 'close-modal' class
  closeModal() {
    confirmEl.classList.add("close-modal");
  }
}

// Adding event listeners to buttons
btn1.addEventListener("click", () => {
  changeBg("red");
});
btn2.addEventListener("click", () => {
  changeBg("purple");
});

// Creating an instance of the ShowConfirm class with specific parameters
const changeBag = new ShowConfirm(
  "Change Background",               // Title of the confirm box
  "You are about to change the background!", // Content of the confirm box
  "Change",                          // OK button text
  "Cancel"                           // Cancel button text
);

// Function to change the background color
function changeBg(color) {
  // Triggering the confirm box and passing the setBg function as the callback
  changeBag.trigger(setBg);
  
  // Function to set the background color
  function setBg() {
    document.body.style.backgroundColor = color;
  }
}