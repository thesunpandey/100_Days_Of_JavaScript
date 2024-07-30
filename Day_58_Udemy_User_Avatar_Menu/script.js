// Select the menu element
const menu = document.querySelector(".menu");

// Select the avatar image element
const avatar = document.querySelector(".avatar-profile img");

// Add mouseover event listener to the avatar image
avatar.addEventListener("mouseover", () => {
  // Add the 'active' class to the menu when the mouse is over the avatar
  menu.classList.add("active");
});

// Add mouseout event listener to the avatar image
avatar.addEventListener("mouseout", () => {
  // Remove the 'active' class from the menu when the mouse leaves the avatar
  menu.classList.remove("active");
});

// Add mouseover event listener to the menu
menu.addEventListener("mouseover", () => {
  // Add the 'active' class to the menu when the mouse is over the menu
  menu.classList.add("active");
});

// Add mouseout event listener to the menu
menu.addEventListener("mouseout", () => {
  // Remove the 'active' class from the menu when the mouse leaves the menu
  menu.classList.remove("active");
});