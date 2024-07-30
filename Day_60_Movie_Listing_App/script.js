// API endpoint for discovering popular movies
const apiURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// API endpoint for searching movies
const searchAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// Base URL for movie poster images
const imgPATH = "https://image.tmdb.org/t/p/w1280";

// DOM element selections
let moviesDiv = document.querySelector(".movies");
let form = document.querySelector("form");
let input = document.querySelector(".search");

// Fetch and display popular movies on initial page load
getMovies(apiURL);

// Async function to fetch movies from the API
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
  displayMovies(data.results);
}

// Function to display movie data on the page
function displayMovies(movies) {
  // Clear existing content
  moviesDiv.innerHTML = "";

  // Iterate through each movie and create a div for it
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.innerHTML = `
        <img src="${imgPATH + movie.poster_path}" alt="" />

        <div class="details">
          <h2 class="title">${movie.title}</h2>
          <p class="rate">Rating: <span class="rating">${
            movie.vote_average
          }</span></p>
          <p class="overview">
            ${movie.overview}
          </p>
        </div>
        `;
    moviesDiv.appendChild(div);
  });
}

// Event listener for the search form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  moviesDiv.innerHTML = ""; // Clear existing movies

  const inputVal = input.value;

  if (inputVal) {
    // If search input is not empty, fetch and display search results
    getMovies(searchAPI + inputVal);
    input.value = ""; // Clear the search input
  }
});