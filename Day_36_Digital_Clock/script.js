// Create a new Date object representing the current date and time
let today = new Date();

// Function to format a date object into a readable string
function getDate(d) {
  // Array of month abbreviations
  let months = [
    "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  // Array of day names
  let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];

  // Get the day name from the days array using the getDay method of the Date object
  let day = days[d.getDay()];
  
  // Get the date (day of the month) from the Date object
  let date = d.getDate();
  
  // Get the month name from the months array using the getMonth method of the Date object
  let month = months[d.getMonth()];
  
  // Get the full year from the Date object
  let year = d.getFullYear();

  // Return the formatted date string
  return `${day}, ${date} ${month} ${year}`;
}

// Select the HTML element with the class "date"
const dateElement = document.querySelector(".date");

// Set the inner HTML of the date element to the formatted current date
dateElement.innerHTML = getDate(today);

// Function to display the current time in a formatted string
function showTime() {
  // Create a new Date object representing the current date and time
  let date = new Date();

  // Get the current hours, minutes, and seconds
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  
  // Initialize the session variable to "AM"
  let session = "AM";

  // Convert 24-hour format to 12-hour format and set the session to "PM" if necessary
  if (h == 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  // Append a leading zero to single-digit hours, minutes, and seconds
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Format the time string
  let time = `${h}:${m}:${s} ${session}`;
  
  // Select the HTML element with the class "time" and set its inner HTML to the formatted time string
  document.querySelector(".time").innerHTML = time;
}

// Call the showTime function every second (1000 milliseconds)
setInterval(showTime, 1000);