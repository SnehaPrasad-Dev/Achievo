/**
 * ACHIEVO - JAVASCRIPT PROGRAMMING MOCK TEST
 * Total Questions: 60 (Set 1: 1-30, Set 2: 31-60)
 */

const questionsData = [
    // SET 1: Basics, Variables & Operators (1-30)
    { q: "Which of the following is the correct way to link an external JS file?", o: ["<script href='script.js'>", "<script src='script.js'>", "<script link='script.js'>", "<js src='script.js'>"], a: 1 },
    { q: "Which keyword is used to declare a variable that should not be reassigned?", o: ["let", "var", "const", "static"], a: 2 },
    { q: "What is the output of typeof null in JavaScript?", o: ["'null'", "'undefined'", "'object'", "'number'"], a: 2 },
    { q: "Which company developed JavaScript?", o: ["Microsoft", "Netscape", "Google", "Oracle"], a: 1 },
    { q: "Which symbol is used for single-line comments in JavaScript?", o: ["//", "/*", "#", "--"], a: 0 },
    { q: "How do you create a function in JavaScript?", o: ["function:myFunction()", "function myFunction()", "create myFunction()", "def myFunction()"], a: 1 },
    { q: "How do you call a function named 'myFunction'?", o: ["call myFunction()", "myFunction()", "call function myFunction()", "run myFunction()"], a: 1 },
    { q: "Which operator is used to assign a value to a variable?", o: ["*", "-", "=", "=="], a: 2 },
    { q: "What will Boolean(10 > 9) return?", o: ["true", "false", "NaN", "undefined"], a: 0 },
    { q: "Which event occurs when the user clicks on an HTML element?", o: ["onchange", "onclick", "onmouseclick", "onhover"], a: 1 },
    { q: "How do you write 'Hello World' in an alert box?", o: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "console.log('Hello World');"], a: 2 },
    { q: "Which method is used to write text into the browser console?", o: ["console.print()", "console.log()", "console.write()", "console.output()"], a: 1 },
    { q: "JavaScript is a _____ language.", o: ["Scripting", "Programming", "Both A and B", "None of the above"], a: 2 },
    { q: "Which data type is used for values that are either true or false?", o: ["String", "Number", "Boolean", "Object"], a: 2 },
    { q: "Which of these is NOT a valid JavaScript variable name?", o: ["2names", "_first_and_last_names", "firstAndLast", "$money"], a: 0 },
    { q: "How do you round the number 7.25 to the nearest integer?", o: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "Math.floor(7.25)"], a: 1 },
    { q: "How do you find the number with the highest value of x and y?", o: ["Math.max(x, y)", "Math.ceil(x, y)", "top(x, y)", "Math.highest(x, y)"], a: 0 },
    { q: "Which operator is used for strict equality (checks both value and type)?", o: ["==", "===", "=", "!=="], a: 1 },
    { q: "What is the correct way to write a JavaScript array?", o: ["var colors = 'red', 'green'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green')", "var colors = {red, green}"], a: 1 },
    { q: "Which method adds a new element to the end of an array?", o: ["push()", "pop()", "shift()", "add()"], a: 0 },
    { q: "Which method removes the last element of an array?", o: ["push()", "pop()", "unshift()", "delete()"], a: 1 },
    { q: "What is the correct way to write an IF statement in JavaScript?", o: ["if i = 5 then", "if (i == 5)", "if i == 5", "if {i == 5}"], a: 1 },
    { q: "How does a WHILE loop start?", o: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "do while (i <= 10)"], a: 0 },
    { q: "How does a FOR loop start?", o: ["for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i <= 5; i++)"], a: 1 },
    { q: "How can you add a comment that has more than one line?", o: ["// Multi-line", "/* Multi-line */", "* Multi-line *", ""], a: 1 },
    { q: "What is the output of 2 + '2'?", o: ["4", "'22'", "NaN", "Error"], a: 1 },
    { q: "What is the output of 2 - '2'?", o: ["0", "'22'", "NaN", "22"], a: 0 },
    { q: "Which built-in method returns the length of a string?", o: ["size()", "length()", "length (property)", "count()"], a: 2 },
    { q: "Which function is used to parse a string into an integer?", o: ["parseInt()", "parseInteger()", "Integer.parse()", "Number()"], a: 0 },
    { q: "Which operator is used to check if two values are NOT equal?", o: ["<>", "!=", "==!", "~="], a: 1 },

    // SET 2: DOM, ES6 & Advanced Concepts (31-60)
    { q: "Which object is the top-level object in the Browser Object Model (BOM)?", o: ["Document", "Window", "Screen", "Navigator"], a: 1 },
    { q: "How do you get the element with the ID 'demo'?", o: ["document.getElement('demo')", "document.getElementById('demo')", "document.querySelector('#demo')", "document.id('demo')"], a: 1 },
    { q: "What does DOM stand for?", o: ["Data Object Model", "Document Object Model", "Digital Objects Management", "Dynamic Object Model"], a: 1 },
    { q: "Which method is used to change the HTML content of an element?", o: [".innerContent", ".innerHTML", ".textHTML", ".setContent"], a: 1 },
    { q: "What will typeof NaN return?", o: ["'number'", "'NaN'", "'undefined'", "'object'"], a: 0 },
    { q: "Which of the following is a way to create an object in JavaScript?", o: ["var obj = {};", "var obj = [];", "var obj = ();", "var obj = <>"], a: 0 },
    { q: "How do you write an arrow function?", o: ["() => {}", "() -> {}", "function => {}", "=> () {}"], a: 0 },
    { q: "Which keyword refers to the current object?", o: ["that", "self", "this", "current"], a: 2 },
    { q: "What is the result of null == undefined?", o: ["true", "false", "null", "NaN"], a: 0 },
    { q: "What is the result of null === undefined?", o: ["true", "false", "undefined", "NaN"], a: 1 },
    { q: "Which method is used to join two or more arrays?", o: ["add()", "concat()", "combine()", "merge()"], a: 1 },
    { q: "How can you detect the client's browser name?", o: ["navigator.appName", "browser.name", "client.navName", "window.browser"], a: 0 },
    { q: "Which statement is used to exit a loop?", o: ["stop", "exit", "break", "return"], a: 2 },
    { q: "Which statement is used to skip the current iteration of a loop?", o: ["skip", "continue", "next", "pass"], a: 1 },
    { q: "What is the output of 3 > 2 > 1?", o: ["true", "false", "error", "NaN"], a: 1 },
    { q: "Which method converts a JSON string into a JavaScript object?", o: ["JSON.string()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"], a: 1 },
    { q: "Which method converts a JavaScript object into a JSON string?", o: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.toString()"], a: 0 },
    { q: "What is the default value of an uninitialized variable?", o: ["null", "0", "undefined", "false"], a: 2 },
    { q: "Which scope does a variable declared with let have?", o: ["Global Scope", "Function Scope", "Block Scope", "Local Scope"], a: 2 },
    { q: "Which scope does a variable declared with var have?", o: ["Block Scope", "Function Scope", "Local Scope only", "Global only"], a: 1 },
    { q: "What is the purpose of the 'use strict' directive?", o: ["To ignore errors", "To enforce stricter parsing and error handling", "To speed up code", "To allow new features"], a: 1 },
    { q: "How do you find the type of a variable?", o: ["typeof variable", "type(variable)", "variable.type()", "getType(variable)"], a: 0 },
    { q: "Which array method creates a new array by performing a function on each element?", o: ["filter()", "map()", "forEach()", "reduce()"], a: 1 },
    { q: "Which array method checks if all elements pass a test?", o: ["some()", "every()", "filter()", "find()"], a: 1 },
    { q: "Which of the following is a logical operator?", o: ["&&", "++", "==", "+="], a: 0 },
    { q: "What is the output of [] == false?", o: ["true", "false", "undefined", "error"], a: 0 },
    { q: "How do you add a property to an existing object?", o: ["object.property = value;", "object['property'] = value;", "Both A and B", "None of the above"], a: 2 },
    { q: "What does the isNaN() function do?", o: ["Returns true if value is a number", "Returns true if value is Not-a-Number", "Converts string to number", "None"], a: 1 },
    { q: "Which method is used to remove the first element of an array?", o: ["pop()", "shift()", "unshift()", "remove()"], a: 1 },
    { q: "What is the correct syntax for a Template Literal?", o: ["'string'", "\"string\"", "`string`", "(string)"], a: 2 }
];
// Variables to track quiz state
const subject= "js";
let isSubmitted= false;
let currentIdx = 0;
let currentSet = 1;
let answers = new Array(60).fill(null);
let totalTime = 1800; // 30 minutes in seconds
let timeLeft = 1800;

/**
 * Initializes and starts the countdown timer
 */
function startTimer() {
    const timerDisplay = document.getElementById('time-display');
    const timerCircle = document.getElementById('timer-circle');

    const interval = setInterval(() => {
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        if(timerDisplay) timerDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

        // Update visual circle progress
        let progress = (timeLeft / totalTime) * 100;
        if(timerCircle) timerCircle.style.background = `conic-gradient(#ff7a00 ${progress}%, #e2e8f0 ${progress}%)`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            alert("Time is up! Submitting...");
            submitQuiz(true);
        }
        timeLeft--;
    }, 1000);
}

/**
 * Renders the question number grid (1-30)
 */
function renderNavigator() {
    const grid = document.getElementById('question-grid');
    if(!grid) return;
    grid.innerHTML = '';
    for (let i = 1; i <= 30; i++) {
        let actualIndex = (currentSet === 1) ? (i - 1) : (i + 29);
        let status = "unanswered";
        if (actualIndex === currentIdx) status = "active";
        else if (answers[actualIndex] !== null) status = "answered";
        grid.innerHTML += `<div class="num-btn ${status}" onclick="jumpTo(${actualIndex})">${i}</div>`;
    }
}

/**
 * Loads the current question and options into the UI
 */
function loadQuestion() {
    const data = questionsData[currentIdx];
    const container = document.getElementById('options-container');
    const qText = document.getElementById('q-text');
    const qProg = document.getElementById('question-progress');
    
    if(qText) qText.innerText = data.q;
   if(qProg) qProg.innerText = `JS Question ${currentIdx + 1} of 60`;
    
    if(!container) return;
    container.innerHTML = '';
    
    data.o.forEach((opt, index) => {
        const isChecked = (answers[currentIdx] === index) ? 'checked' : '';
        const label = document.createElement('label');
        label.className = 'option-label';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz-opt';
        radio.value = index;
        if(isChecked) radio.checked = true;
        radio.onchange = () => selectOption(index);

        const span = document.createElement('span');
        span.textContent = opt; // Safe for rendering HTML tags as text

        label.appendChild(radio);
        label.appendChild(span);
        container.appendChild(label);
    });
    renderNavigator();
}

function selectOption(idx) { 
    answers[currentIdx] = idx; 
    renderNavigator(); 
}

/**
 * Moves to the next question or prompts for Set 2
 */
function nextQuestion() {
    if (currentIdx === 29 && currentSet === 1) {
        if (confirm("Set 1 Complete. Move to Set 2 (Questions 31-60)?")) {
            currentSet = 2; 
            currentIdx++; 
            loadQuestion();
        }
    } else if (currentIdx < 59) {
        currentIdx++; 
        loadQuestion();
    } else {
        alert("Last Question reached!");
    }
}

function saveAndNext() { nextQuestion(); }
function jumpTo(idx) { currentIdx = idx; loadQuestion(); }
function clearAnswer() { answers[currentIdx] = null; loadQuestion(); }

function submitQuiz(auto= false){
	if(isSubmitted) return;
	if(!auto){
	if(!confirm("Are you sure you want to submit"))
	{
		return;
	}
	}
	isSubmitted = true;
	
	let formData = "";
	for (let i=0; i<answers.length; i++)
	{
		let val = answers[i] === null ? "" : answers[i];
        formData += "q" + (i + 1) + "=" + val + "&";
    }
    formData+= "set=" + currentSet + "&subject=" + subject;

    fetch("ResultServlet", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
    })
    .then(response => {
       
        if (response.ok)
         {
	       window.location.href="result.jsp";
	     }
	    else{
            alert("Submission failed!");
            isSubmitted = false;
             }
    })
    .catch(() => {
        alert("Error submitting quiz!");
    });
}

window.onload = () => {
    startTimer();
    loadQuestion();
};
	