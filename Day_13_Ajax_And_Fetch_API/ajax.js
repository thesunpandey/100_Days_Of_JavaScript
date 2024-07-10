// Select the button element and add click event listener
const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

// Function to fetch and display users
function getUsers(e) {
    // Prevent default form submission behavior
    e.preventDefault();

    // Create a new XMLHttpRequest object
    const http = new XMLHttpRequest();

    // Configure the request
    http.open("GET", "users.json", true);

    // Define what happens on successful data retrieval
    http.onload = function() {
        if (this.status === 200) {
            // Parse the JSON response
            const users = JSON.parse(this.responseText);

            // Initialize output string
            let output = "";
            // Iterate over each user and build HTML
            users.forEach(function(user) {
                output += `
                    <hr>
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;
            })

            // Insert the generated HTML into the DOM
            document.getElementById("users").innerHTML = output;
        }
    }

    // Send the request
    http.send();
}