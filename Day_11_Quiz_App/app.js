// CREATE A QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.score = 0; // Initialize score to 0
        this.questions = questions; // Store questions
        this.questionIndex = 0; // Initialize current question index
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex]; // Return the current question
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) { // Check if the answer is correct
            this.score++; // Increment score if correct
        }
        this.questionIndex++; // Move to the next question
    }

    isEnded() {
        return this.questionIndex === this.questions.length; // Check if quiz has ended
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text; // Store the question text
        this.choices = choices; // Store the answer choices
        this.answer = answer; // Store the correct answer
    }

    isCorrectAnswer(choice) {
        return this.answer === choice; // Check if the choice is correct
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores(); // Show scores if quiz has ended
    } else {
        // Show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text; // Display current question

        // Show options
        let choices = quiz.getQuestionIndex().choices; // Get choices for the current question
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i); // Get element for each choice
            choiceElement.innerHTML = choices[i]; // Display the choice
            guess("btn" + i, choices[i]); // Set up click event for the choice
        }

        showProgress(); // Update the progress display
    }
}

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id); // Get the button element
    button.onclick = function() {
        quiz.guess(guess); // Process the guess
        displayQuestion(); // Display the next question
    }
}

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1; // Get the current question number
    let ProgressElement = document.getElementById("progress"); // Get the progress element
    ProgressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`; // Update progress
}

// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Completed</h1>
    <h2 id='score'> You scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz"); // Get the quiz element
    quizElement.innerHTML = quizEndHTML; // Display the end screen
}

// Create questions here
let questions = [
    new Question("Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
    new Question("Cascading Style sheet stands for?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is a JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"),
    new Question("Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"),
    new Question("Which is best for Artificial intelligence?", ["React", "Laravel", "Python", "Sass"], "Python")
];

// Initialize quiz
let quiz = new Quiz(questions); // Create a new Quiz object

// Display questions
displayQuestion(); // Start displaying questions

// Add a countdown for the quiz
let time = 10; // Set quiz time limit in minutes
let quizTimeInMinutes = time * 60 * 60; // Convert to seconds
let quizTime = quizTimeInMinutes / 60; // Convert to minutes

let counting = document.getElementById("count-down"); // Get the countdown element

function startCountdown() {
    let quizTimer = setInterval(function() { // Start a timer
        if (quizTime <= 0) {
            clearInterval(quizTimer); // Stop the timer if time is up
            showScores(); // Show scores
        } else {
            quizTime--; // Decrement quiz time
            let sec = Math.floor(quizTime % 60); // Calculate remaining seconds
            let min = Math.floor(quizTime / 60) % 60; // Calculate remaining minutes
            counting.innerHTML = `TIME: ${min} : ${sec}`; // Update the countdown display
        }
    }, 1000); // Repeat every second
}

startCountdown(); // Start the countdown