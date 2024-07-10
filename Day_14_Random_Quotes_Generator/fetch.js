// Select the button with the class 'get-quotes' and store it in the variable 'btn'
const btn = document.querySelector(".get-quotes");

// Add an event listener to the button that listens for a 'click' event and triggers the getQuotes function
btn.addEventListener("click", getQuotes);

// Select the input element with the id 'number' and store it in the variable 'number'
const number = document.getElementById("number");

// Define a constant for the API URL
const URL = "https://type.fit/api/quotes";

// Define the function getQuotes that takes an event object 'e' as a parameter
function getQuotes(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Check if the input field is empty
    if (number.value.length == 0) {
        // If it is, alert the user to enter a number
        return alert("Please enter a number");
    } else {
        // Use the Fetch API to make a GET request to the quotes API
        fetch(URL)
        .then(function(response) {
            // Parse the JSON response
            return response.json();
        })
        .then(function(data) {
            // Shuffle the quotes data
            data = shuffle(data);
            
            // Initialize an empty string 'output' to build the HTML output
            let output = "";

            // Loop through the shuffled quotes
            for (let i = 0; i < data.length; i++) {
                // Stop the loop if the number of quotes matches the input value
                if (i == number.value) { break; }
                // Append each quote and author to the output string
                output += `
                    <li>Quote: ${data[i].text}</li>
                    <li>Author: ${data[i].author}</li>
                    <hr>
                `;
            }
            // Set the innerHTML of the '.quotes' element to the output string
            document.querySelector(".quotes").innerHTML = output;
        })
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