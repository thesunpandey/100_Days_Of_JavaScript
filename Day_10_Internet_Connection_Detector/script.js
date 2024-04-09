// Selecting DOM elements
const image = document.getElementById("image"); // Image element
const statusDisplay = document.getElementById("status"); // Status display element
const bgColor = document.getElementById("main"); // Background color element

// Function to set background color
function setColor() {
    bgColor.classList.add("online"); // Add 'online' class to background
}

// Function to check connection status
async function connectionStatus() {
    try {
        // Fetching a test image to check internet connection
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
        
        // If fetch is successful, set image to online status and return true
        image.src = "./images/wifi.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    } catch (error) {
        // If fetch fails, display error message, set image to offline status, and remove 'online' class from background
        console.error(error);
        statusDisplay.textContent = "OOPS!!! Your Internet Connection is Down.";
        image.src = "./images/no-wifi.png";
        bgColor.classList.remove("online");
    }
}

// Monitor the connection status at regular intervals
setInterval(async () => {
    const result = await connectionStatus(); // Check connection status
    if (result) {
        // If connection is successful, display online message and set background color
        statusDisplay.textContent = "You're ONLINE!!! Connection looks good.";
        setColor(); 
    } 
}, 5000);

// Check Connection When Page Loads
window.addEventListener("load", async (event) => {
    if (connectionStatus()) {
        // If connection is successful when page loads, display online message
        statusDisplay.textContent = "Online";
    } else {
        // If connection fails when page loads, display offline message
        statusDisplay.textContent = "OFFline";
    }
});