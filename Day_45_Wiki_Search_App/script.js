// Select the input, form, results container, error message container, and horizontal line elements from the DOM
const search = document.querySelector("input");
const form = document.querySelector("form");
const searchResults = document.querySelector(".results");
const errorMsg = document.querySelector(".alert");
const line = document.querySelector("hr");

// Wikipedia API URL with query parameters for searching
const apiURL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

// Add an event listener to the form for the 'submit' event
form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the value from the search input field
  const searchValue = search.value;
  
  // If the search input is empty, display an error message
  if (searchValue === "") {
    errorMessage("Search cannot be empty, please enter a search term.");
  } else {
    // Otherwise, fetch the search results
    getResult(searchValue);
  }
});

// Function to display an error message
function errorMessage(msg) {
  // Show the error message and horizontal line elements
  errorMsg.style.display = "block";
  line.style.display = "block";
  
  // Set the text content of the error message
  errorMsg.textContent = msg;
}

// Function to fetch search results from the Wikipedia API
async function getResult(searchVal) {
  // Fetch the results from the API using the search value
  const response = await fetch(apiURL + searchVal);
  const results = await response.json();

  console.log(results);

  // If no results are found, display an error message
  if (results.query.search.length == 0) {
    return errorMessage("Invalid search, please enter another search term.");
  } else {
    // Otherwise, display the search results
    displayResults(results);
  }
}

// Function to display search results on the webpage
function displayResults(results) {
  // Show the horizontal line element
  line.style.display = "block";
  
  // Initialize an empty string for the output
  let output = "";
  
  // Iterate over each search result
  results.query.search.forEach((result) => {
    // Construct the URL for the result page
    let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;
    
    // Append the result to the output string with HTML formatting
    output += `
    <div class="result p-2">
      <a href="${resultURL}" target="_blank" rel="noopener" class="h3 fw-bold">${result.title}</a>
      <br />
      <a href="${resultURL}" target="_blank" rel="noopener" class="fs-5 text-success">${resultURL}</a>
      <p class="fs-5">${result.snippet}</p>
    </div>
    `;
  });

  // Set the inner HTML of the search results container to the output string
  searchResults.innerHTML = output;
}