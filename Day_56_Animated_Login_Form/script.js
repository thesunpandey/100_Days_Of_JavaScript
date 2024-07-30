// Select elements with class names for login, register, forgot, and close links
const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const forgot = document.querySelector(".forgot-link");
const close = document.querySelector(".close");

// Select elements representing the login, register, and forgot sections
const loginSection = document.querySelector(".login");
const registerSection = document.querySelector(".register");
const forgotSection = document.querySelector(".forgot");

// Add click event listener to the register link
register.addEventListener("click", () => {
  // Hide the login section
  loginSection.style.display = "none";
  // Display the register section
  registerSection.style.display = "flex";
});

// Add click event listener to the login link
login.addEventListener("click", () => {
  // Hide the register section
  registerSection.style.display = "none";
  // Display the login section
  loginSection.style.display = "flex";
});

// Add click event listener to the forgot link
forgot.addEventListener("click", () => {
  // Hide the login section
  loginSection.style.display = "none";
  // Display the forgot section
  forgotSection.style.display = "flex";
});

// Add click event listener to the close link (presumably a close button on the forgot section)
close.addEventListener("click", () => {
  // Hide the forgot section
  forgotSection.style.display = "none";
  // Display the login section
  loginSection.style.display = "flex";
});