// Select the button with the class 'get-quotes' and store it in the variable 'btn'
const btn = document.querySelector(".get-quotes");

// Add an event listener to the button that listens for a 'click' event and triggers the getQuotes function
btn.addEventListener("click", getQuotes);

// Select the input element with the id 'number' and store it in the variable 'number'
const number = document.getElementById("number");

// Define the function getQuotes that takes an event object 'e' as a parameter
function getQuotes(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Check if the input field is empty
    if (number.value.length == 0) {
        // If it is, alert the user to enter a number
        return alert("Please enter a number");
    } else {
        // Create a new XMLHttpRequest object and store it in the variable 'https'
        const https = new XMLHttpRequest();
        
        // Open a GET request to the quotes API
        https.open("GET", "https://type.fit/api/quotes", true);
        
        // Define a function to run when the request completes successfully
        https.onload = function() {
            // Check if the response status is 200 (OK)
            if (this.status === 200) {
                // Parse the JSON response and shuffle the quotes
                const response = shuffle(JSON.parse(this.responseText));

                // Initialize an empty string 'output' to build the HTML output
                let output = "";

                // Loop through the shuffled quotes
                for (let i = 0; i < response.length; i++) {
                    // Stop the loop if the number of quotes matches the input value
                    if (i == number.value) {break;}
                    // Append each quote and author to the output string
                    output += `
                        <li>Quote: ${response[i].text}</li>
                        <li>Author: ${response[i].author}</li>
                        <hr>
                    `;
                }

                // Set the innerHTML of the '.quotes' element to the output string
                document.querySelector(".quotes").innerHTML = output;
            }
        }
        
        // Send the request
        https.send();
    }
}

// Define the shuffle function that takes an array of quotes as a parameter
function shuffle(quotes) {
    // Initialize variables for the current index, a temporary value, and a random index
    let CI = quotes.length, tempValue, randomIndex;

    // While there are elements to shuffle
    while (CI > 0) {
        // Generate a random index
        randomIndex = Math.floor(Math.random() * CI);
        // Decrease the current index by 1
        CI--;
        // Swap the last element with the current element
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    // Return the shuffled array
    return quotes;
}