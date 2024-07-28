// Importing all exports from the variables.js module and aliasing them as 'v'
import * as v from "./variables.js";

// Asynchronous function to get user data from GitHub API
export async function getUser(username) {
  // Fetch user data from GitHub API
  const response = await fetch(v.apiURL + username);
  // Convert the response data to JSON format
  const data = await response.json();

  // Check if the response is not okay (status code is not 200-299)
  if (!response.ok) {
    // Display an error message if the user is not found
    errorMessage("User not found, try another");
  } else {
    // Display the user data
    displayData(data);
    // Fetch and display the user's repositories
    getRepos(username);
  }
}

// Asynchronous function to get repositories of the user from GitHub API
async function getRepos(username) {
  // Fetch repository data from GitHub API
  const response = await fetch(v.apiURL + username + "/repos");
  // Convert the response data to JSON format
  const data = await response.json();

  // Log the repository data to the console (for debugging purposes)
  console.log(data);
  // Display the repository data
  displayRepos(data);
}

// Function to display error messages
export function errorMessage(msg) {
  // Clear the profile section
  v.profile.innerHTML = "";
  // Hide the element with the class 'hide'
  document.querySelector(".hide").style.display = "none";
  // Display the error message in the 'repos' section
  return (v.repos.innerHTML = `<p class="alert alert-danger">${msg}</p>`);
}

// Function to display user data in the profile section
function displayData(user) {
  // HTML structure to display user data
  const html = `
    <img
      src="${user.avatar_url}"
      alt="${user.name}"
      class="img-thumbnail rounded-circle"
    />
    <h2>${user.name}</h2>
    <p>${user.login}</p>
    <div class="d-grid">
      <a href="https://github.com/${user.login}" target="_blank" rel="noopener" class="btn btn-outline-secondary">View Profile</a>
    </div>
    <p class="pt-2">
      <span>${user.followers} Followers</span>
      <span>${user.following} Following</span>
    </p>
    <p>${user.public_repos}</p>
    <p><i class="fas fa-marker-alt"></i>${user.location}</p>
  `;
  // Set the inner HTML of the profile section to the constructed HTML
  v.profile.innerHTML = html;
}

// Function to display repositories in the repos section
function displayRepos(repoData) {
  // Map the repository data to HTML structure for each repository
  let repo_data = repoData.map((repo) => {
    return `
      <span class="repo border border-rounded p-3">
        <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
        <p>
          <strong>Stars: ${repo.stargazers_count} |</strong>
          <strong>Watchers: ${repo.watchers_count} |</strong>
          <strong>Forks: ${repo.forks_count}</strong>
        </p>
      </span>
    `;
  });

  // Display up to 8 repositories and join them into a single string
  v.repos.innerHTML = repo_data.slice(0, 8).join("");
  // Display the element with the class 'hide'
  document.querySelector(".hide").style.display = "block";
}