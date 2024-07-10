// Select the button element
const btn = document.getElementById("btn");

// Add a click event listener to the button
btn.addEventListener("click", getUsers);

// Function to fetch and display users
function getUsers(e) {
    // Prevent the default action of the event (e.g., form submission)
    e.preventDefault();

    fetch("users.json")
    .then(response => response.json())
    .then(data => {
        let output = "";
        data.forEach(user => {
            output += `
                <hr>
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Age: ${user.age}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `;
        });
        document.getElementById("users").innerHTML = output;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("users").innerHTML = "An error occurred while fetching data.";
    });
}