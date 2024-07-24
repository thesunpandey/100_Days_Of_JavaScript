// Get the necessary DOM elements
const noteBtn = document.getElementById("add-btn"),
  noteTitle = document.getElementById("note-title"),
  noteText = document.getElementById("note-text"),
  clear = document.querySelector(".clear");

// Function to get notes from local storage
function getNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = []; // Initialize an empty array if no notes are found
  } else {
    notesObj = JSON.parse(notes); // Parse the JSON string into an object
  }
}

// Event listener for the add note button
noteBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Check if note title or text is empty
  if (noteTitle.value == "" || noteText.value == "") {
    return alert("Please add note title and details");
  }

  getNotes(); // Retrieve notes from local storage

  // Create a note object
  let myObj = {
    title: noteTitle.value,
    text: noteText.value,
  };
  notesObj.push(myObj); // Add the new note to the notes array
  localStorage.setItem("notes", JSON.stringify(notesObj)); // Save the updated notes array to local storage

  document.querySelector("form").reset(); // Reset the form fields
  showNotes(); // Display the updated list of notes
});

// Function to display notes on the page
function showNotes() {
  getNotes(); // Retrieve notes from local storage
  let html = "";
  notesObj.forEach(function (element, index) {
    // Create HTML for each note
    html += `
        <div class="note">
        <div class="note-cta">
          <p class="note-counter">Note ${index + 1}</p>
          <div class="note-cta-btn">
            <button id="${index}" onclick="deleteNote(this.id)" class="note-btn">
              <i class="fas fa-trash"></i> Delete
            </button>
            <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">
              <i class="fas fa-edit"></i> Edit
            </button>
          </div>
        </div>
        <hr />
        <h3 class="note-title">Title: ${element.title}</h3>
        <p class="note-text">${element.text}</p>
      </div>
        `;
  });
  let noteElm = document.getElementById("notes");

  // Update the notes container with the generated HTML or a message if no notes are found
  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "No notes added, please add a note";
  }
}

// Function to delete a single note
function deleteNote(index) {
  let confirmDel = confirm("Delete this note?");
  if (confirmDel) {
    getNotes(); // Retrieve notes from local storage
    notesObj.splice(index, 1); // Remove the note at the specified index
    localStorage.setItem("notes", JSON.stringify(notesObj)); // Save the updated notes array to local storage
    showNotes(); // Display the updated list of notes
  }
}

// Event listener to clear all notes
clear.addEventListener("click", () => {
  localStorage.clear(); // Clear all items from local storage
  showNotes(); // Display the updated list of notes (which will be empty)
});

// Function to edit a note
function editNote(index) {
  // Ensure the form is empty before allowing an edit
  if (noteTitle.value !== "" || noteText.value !== "") {
    return alert("Please clear the form before editing");
  }
  getNotes(); // Retrieve notes from local storage

  // Populate the form fields with the note's current title and text
  noteTitle.value = notesObj[index].title;
  noteText.value = notesObj[index].text;

  // Remove the note from the notes array
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj)); // Save the updated notes array to local storage
  showNotes(); // Display the updated list of notes
}

// Initial call to display notes when the page loads
showNotes();