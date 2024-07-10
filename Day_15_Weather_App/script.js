// API details for OpenWeatherMap
const api = {
    key: "28fd15358cdecbc1a1dfef367e71acef",
    base: "https://api.openweathermap.org/data/2.5/"
}

// Select the search input and button elements
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

// Add an event listener to the button for the "click" event
btn.addEventListener("click", getInput);

// Function to handle the button click event
function getInput(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (event.type == "click") {
        getData(search.value); // Call getData function with the value from the search input
        console.log(search.value); // Log the search value to the console
    }
}

// Function to fetch weather data from OpenWeatherMap API
function getData() {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`) // Construct the API URL with the search value and API key
        .then(response => {
            return response.json(); // Parse the response as JSON
        }).then(displayData); // Call displayData function with the parsed data
}

// Function to display the fetched weather data
function displayData(response) {
    // Check if the city is not found in the API response
    if (response.cod === "404") {
        const error = document.querySelector(".error");
        error.textContent = "Please enter a valid city"; // Display error message
        search.value = ""; // Clear the search input
    } else {
        // Display the city and country
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;

        // Display the current date
        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);

        // Display the current temperature
        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°C</span>`;

        // Display the weather description
        const weather = document.querySelector(".weather");
        weather.innerText = `Weather: ${response.weather[0].main}`;

        // Display the temperature range
        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;

        // Display the weather icon
        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + response.weather[0].icon + ".png";

        search.value = ""; // Clear the search input
    }
}

// Function to format the date in a readable format
function dateFunction(d) {
    // Arrays for month and day names
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the day, date, month, and year
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    // Return the formatted date string
    return `${day}, ${date} ${month} ${year}`;
}