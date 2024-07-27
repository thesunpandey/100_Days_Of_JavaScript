// Select the HTML element where the joke will be displayed
const joke = document.querySelector(".joke");

// Select the button element that will be used to fetch a new joke
const btn = document.querySelector(".btn");

// URL of the joke API
const url = "http://api.icndb.com/jokes/random";

// Add an event listener to the button to call the getJoke function when clicked
btn.addEventListener("click", getJoke);

// Define an asynchronous function to fetch and display a joke
async function getJoke() {
  try {
    // Fetch the joke data from the API
    const response = await fetch(url);

    // Parse the response as JSON
    const data = await response.json();

    // Display the joke in the selected HTML element
    joke.innerHTML = data.value.joke;

    // Optionally, log the data to the console for debugging
    // console.log(data);
  } catch (error) {
    // If there's an error, display the error message in the selected HTML element
    joke.innerHTML = error.message;
  }
}
