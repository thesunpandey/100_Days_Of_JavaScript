// Select input elements and button
const username = document.querySelector("#username");
const dob = document.querySelector("#dob");
const btn = document.querySelector(".btn");

// Select the element to display the user's name
const showName = document.querySelector(".u-name");

// Array of days in each month for non-leap years
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Add a click event listener to the button to trigger the calculateAge function
btn.addEventListener("click", calculateAge);

function calculateAge(e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get today's date
  let today = new Date();

  // Get the date of birth from the input field
  let dobInput = new Date(dob.value);

  // Declare variables for birth month, date, and year
  let birthMonth, birthDate, birthYear;

  // Extract birth details from the date of birth input
  let birthDetails = {
    date: dobInput.getDate(),
    month: dobInput.getMonth() + 1,
    year: dobInput.getFullYear(),
  };

  // Get current year, month, and date
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  // Check for invalid date of birth input
  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate &&
      birthDetails.month == currentMonth &&
      birthDetails.year == currentYear)
  ) {
    // Alert if the date of birth is in the future or invalid
    alert("Invalid date");
    return;
  }

  // Calculate birth year
  birthYear = currentYear - birthDetails.year;

  // Calculate birth month
  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
  }

  // Calculate birth date
  if (currentDate >= birthDetails.date) {
    birthDate = currentDate - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2]; // Get the number of days in the previous month
    birthDate = days + currentDate - birthDetails.date;

    // Adjust birth month and year if necessary
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }

  // Display the result
  displayResult(birthDate, birthMonth, birthYear);

  // Function to display the calculated age
  function displayResult(bDate, bMonth, bYear) {
    // Set the username in the display element
    showName.textContent = username.value;

    // Display the calculated age in years, months, and days
    document.querySelector(".age-year").textContent = bYear + " Years";
    document.querySelector(".age-month").textContent = bMonth + " Months";
    document.querySelector(".age-day").textContent = bDate + " Days";
  }
}