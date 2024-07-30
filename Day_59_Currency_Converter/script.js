// Get references to the necessary DOM elements
const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1Input = document.querySelector(".cur-1-input");
const cur2Input = document.querySelector(".cur-2-input");

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

// List of countries with their currency codes and flag URLs
const countries = [
  {
    name: "AED",
    flagURL: "https://www.worldometers.info/img/flags/ae-flag.gif",
  },
  {
    name: "EUR",
    flagURL: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    name: "GBP",
    flagURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
  {
    name: "USD",
    flagURL: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
];

// Exchange rate API base URL and API key
const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "093352694b431c8342cff984";

// Function to get exchange rate and update the UI
async function getExchangeRate() {
  // Get the selected currency values
  const cur1Value = cur1.value;
  const cur2Value = cur2.value;

  // Fetch the exchange rate data from the API
  const response = await fetch(`${apiURL}${key}/latest/${cur1Value}`);
  const data = await response.json();
  console.log(data);

  // Get the exchange rate for the selected currencies
  const rate = data.conversion_rates[cur2Value];

  // Update the exchange rate display
  baseRate.textContent = `1 ${cur1Value} = ${rate.toFixed(2)} ${cur2Value}`;

  // Update the converted value in the second input field
  cur2Input.value = (cur1Input.value * rate).toFixed(2);
}

// Initial call to get the exchange rate
getExchangeRate();

// Add event listeners for currency selection changes and input changes
cur1.addEventListener("change", () => {
  getExchangeRate();
  getFlag();
});
cur2.addEventListener("change", () => {
  getExchangeRate();
  getFlag();
});
cur1Input.addEventListener("input", getExchangeRate);
cur2Input.addEventListener("input", getExchangeRate);

// Event listener for switching currencies
switchCur.addEventListener("click", () => {
  // Swap the values of the two currency selectors
  const cur1Val = cur1.value;
  cur1.value = cur2.value;
  cur2.value = cur1Val;

  // Toggle the rotate class for the switch button (if any CSS animation is used)
  switchCur.classList.toggle("rotate");

  // Update the exchange rate and flags after switching
  getExchangeRate();
  getFlag();
});

// Function to get and display the flag for the selected currencies
function getFlag() {
  // Loop through the countries array to find the selected currencies and their flags
  countries.forEach((country) => {
    // Check if the selected currency in cur1 matches the country name
    if (cur1.value == country.name) {
      console.log(country.flagURL);
      // Update the flag image for the from currency
      const imgSrc = document.querySelector(".from img");
      imgSrc.setAttribute("src", country.flagURL);
    }
    // Check if the selected currency in cur2 matches the country name
    if (cur2.value == country.name) {
      console.log(country.flagURL);
      // Update the flag image for the to currency
      const imgSrc = document.querySelector(".to img");
      imgSrc.setAttribute("src", country.flagURL);
    }
  });
}