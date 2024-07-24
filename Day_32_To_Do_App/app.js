window.onload = function () {
  // Call displayTask function when the page loads
  displayTask();
};

// Variables
const input = document.querySelector("input"), // Get the input element
  btn = document.querySelector("button"), // Get the button element
  todoList = document.querySelector(".todo-list"), // Get the todo list container
  clear = document.querySelector(".clear"); // Get the clear button element
let tasks; // Declare a variable to store tasks

// Add event listener to the button to call addTask function on click
btn.addEventListener("click", addTask);

// GET TASKS FROM THE LOCAL STORAGE
function getTasks() {
  // Check if tasks are stored in local storage
  if (localStorage.getItem("tasks") === null) {
    tasks = []; // If not, initialize tasks as an empty array
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks")); // If yes, parse the stored tasks
  }
}

function addTask() {
  // Check if the input value is not empty
  if (input.value !== "") {
    addTaskToLS(); // Save task to local storage
    todoList.innerHTML = ""; // Clear the current list
    displayTask(); // Display updated list
  } else {
    alert("Please enter a task"); // Alert if input is empty
  }
}

// Save task to local storage
function addTaskToLS() {
  getTasks(); // Get the current tasks from local storage
  tasks.push(input.value); // Add the new task to the tasks array
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save the updated tasks to local storage
  input.value = ""; // Clear the input field
}

// Display tasks on the page
function displayTask() {
  getTasks(); // Get the current tasks from local storage

  // Loop through each task and display it
  tasks.forEach((task, index) => {
    const newLi = document.createElement("li"); // Create a new list item
    const delBtn = document.createElement("button"); // Create a new delete button
    delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i> `; // Set the delete button HTML

    newLi.appendChild(document.createTextNode(task)); // Add the task text to the list item
    newLi.appendChild(delBtn); // Add the delete button to the list item
    todoList.appendChild(newLi); // Add the list item to the todo list container
  });
}

// Delete a specific task
function deleteTask(index) {
  const del = confirm("You are about to delete this task!!!"); // Confirm before deleting
  if (del == true) {
    getTasks(); // Get the current tasks from local storage
  }

  tasks.splice(index, 1); // Remove the task at the specified index
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save the updated tasks to local storage
  todoList.innerHTML = ""; // Clear the current list
  displayTask(); // Display the updated list
}

// Clear all tasks
clear.addEventListener("click", clearTasks);

function clearTasks() {
  const delTasks = confirm("Delete all tasks"); // Confirm before deleting all tasks

  if (delTasks == true) {
    localStorage.clear(); // Clear all tasks from local storage
    todoList.innerHTML = ""; // Clear the current list
    displayTask(); // Display the updated list (which will be empty)
  }
}