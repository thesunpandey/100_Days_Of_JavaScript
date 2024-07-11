// Retrieve the input element with id "search"
const input = document.getElementById("search");

// Attach an event listener to the input element for the 'keyup' event
input.addEventListener("keyup", search);

// Function that will be called when 'keyup' event occurs in the input field
function search() {
    // Get the current value of the input field
    const inputVal = input.value.toLowerCase(); // Convert input value to lowercase for case-insensitive comparison
    
    // Get all <li> elements within the <ul> with id "list"
    const li = document.getElementsByTagName("li");

    // Loop through each <li> element
    for (let i = 0; i < li.length; i++) {
        // Check if the innerHTML of the <li> contains the input value (case-insensitive)
        if (li[i].innerHTML.toLowerCase().includes(inputVal)) {
            // If the input value is found, display the <li> element
            li[i].style.display = "";
        } else {
            // If the input value is not found, hide the <li> element
            li[i].style.display = "none";
        }
    }
}