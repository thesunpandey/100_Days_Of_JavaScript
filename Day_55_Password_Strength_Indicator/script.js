// Initialize state and get references to DOM elements
let state,
  password = document.getElementById("password"),
  passwordStrength = document.getElementById("password-strength"),
  lowUpperCase = document.querySelector(".low-upper-case i"),
  number = document.querySelector(".number i"),
  specialChar = document.querySelector(".special-char i"),
  eightChar = document.querySelector(".eight-char i"),
  showPassword = document.querySelector(".show-pass"),
  eyeIcon = document.querySelector("#eye");

// Add event listeners for toggling password visibility and checking password strength
showPassword.addEventListener("click", toggle);
eyeIcon.addEventListener("click", toggleEye);
password.addEventListener("keyup", () => {
  let pass = password.value;
  checkStrength(pass);
});

// Function to toggle password visibility
function toggle() {
  if (state) {
    password.setAttribute("type", "password");
    state = false;
  } else {
    password.setAttribute("type", "text");
    state = true;
  }
}

// Function to toggle the eye icon in the password field
function toggleEye() {
  eyeIcon.classList.toggle("fa-eye-slash");
}

// Function to check the strength of the password
function checkStrength(password) {
  let strength = 0;

  // Check for both lower and uppercase characters
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    addCheck(lowUpperCase);
  } else {
    removeCheck(lowUpperCase);
  }

  // Check for numbers
  if (password.match(/([0-9])/)) {
    strength += 1;
    addCheck(number);
  } else {
    removeCheck(number);
  }

  // Check for special characters
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    strength += 1;
    addCheck(specialChar);
  } else {
    removeCheck(specialChar);
  }

  // Check if password length is greater than 7
  if (password.length > 7) {
    strength += 1;
    addCheck(eightChar);
  } else {
    removeCheck(eightChar);
  }

  // Update the progress bar based on the password strength
  if (strength == 1) {
    removePassStrength();
    passwordStrength.classList.add("pb-danger");
    passwordStrength.style = "width: 25%";
  } else if (strength == 2) {
    removePassStrength();
    passwordStrength.classList.add("pb-warning");
    passwordStrength.style = "width: 50%";
  } else if (strength == 3) {
    removePassStrength();
    passwordStrength.classList.add("pb-primary");
    passwordStrength.style = "width: 75%";
  } else if (strength == 4) {
    removePassStrength();
    passwordStrength.classList.add("pb-success");
    passwordStrength.style = "width: 100%";
  }
}

// Function to remove password strength classes
function removePassStrength() {
  passwordStrength.classList.remove(
    "pb-danger",
    "pb-warning",
    "pb-primary",
    "pb-success"
  );
}

// Function to add a check icon to a character requirement
function addCheck(charRequired) {
  charRequired.classList.remove("fa-circle");
  charRequired.classList.add("fa-check");
}

// Function to remove a check icon from a character requirement
function removeCheck(charRequired) {
  charRequired.classList.remove("fa-check");
  charRequired.classList.add("fa-circle");
}