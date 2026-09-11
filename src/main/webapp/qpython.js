/**
 * ACHIEVO - PYTHON PROGRAMMING MOCK TEST
 * Total Questions: 60 (Set 1: 1-30, Set 2: 31-60)
 */

const questionsData = [
    // SET 1: Python Basics, Data Types & Operators (1-30)
    { q: "Who developed the Python programming language?", o: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"], a: 1 },
    { q: "Which of the following is the correct extension of a Python file?", o: [".python", ".pl", ".py", ".pt"], a: 2 },
    { q: "Python is a ______ language.", o: ["Compiled", "Interpreted", "Low-level", "Assembly"], a: 1 },
    { q: "How do you create a variable in Python?", o: ["var x = 5", "x = 5", "int x = 5", "variable x = 5"], a: 1 },
    { q: "Which function is used to display output in Python?", o: ["echo()", "print()", "display()", "write()"], a: 1 },
    { q: "Which of these is used for a single-line comment in Python?", o: ["//", "/*", "#", "--"], a: 2 },
    { q: "What is the correct way to start a function in Python?", o: ["function myFunc():", "def myFunc():", "void myFunc():", "func myFunc():"], a: 1 },
    { q: "Which data type is used for a sequence of characters?", o: ["int", "str", "char", "sequence"], a: 1 },
    { q: "How do you create a list in Python?", o: ["x = [1, 2, 3]", "x = (1, 2, 3)", "x = {1, 2, 3}", "x = <1, 2, 3>"], a: 0 },
    { q: "Which collection is ordered, changeable, and allows duplicate members?", o: ["Tuple", "List", "Set", "Dictionary"], a: 1 },
    { q: "Which collection is ordered and unchangeable?", o: ["List", "Dictionary", "Tuple", "Set"], a: 2 },
    { q: "Which operator is used for exponentiation (power)?", o: ["^", "**", "//", "%%"], a: 1 },
    { q: "What is the result of floor division (10 // 3)?", o: ["3.33", "3", "1", "0"], a: 1 },
    { q: "How do you insert a multiline comment in Python?", o: ["# comment #", "''' comment '''", "// comment //", "/* comment */"], a: 1 },
    { q: "Which method removes whitespace from both ends of a string?", o: ["strip()", "trim()", "cut()", "clear()"], a: 0 },
    { q: "How do you convert a string to lowercase?", o: ["lower()", "casefold()", "Both A and B", "lowercase()"], a: 2 },
    { q: "Which operator is used to check if two values are equal?", o: ["=", "==", "===", "is"], a: 1 },
    { q: "Which keyword is used to check if a value exists in a list?", o: ["in", "exists", "within", "contains"], a: 0 },
    { q: "What is the index of the first element in a Python list?", o: ["1", "0", "-1", "2"], a: 1 },
    { q: "Which function gives the number of items in a list?", o: ["count()", "length()", "len()", "total()"], a: 2 },
    { q: "How do you write an 'else if' statement in Python?", o: ["elseif", "elif", "else if", "if else"], a: 1 },
    { q: "Python uses ______ to define a block of code.", o: ["Brackets {}", "Indentation", "Parentheses ()", "Semicolons"], a: 1 },
    { q: "Which loop is used to iterate over a sequence (like a list)?", o: ["for", "while", "do-while", "foreach"], a: 0 },
    { q: "Which keyword is used to stop a loop?", o: ["stop", "exit", "break", "return"], a: 2 },
    { q: "Which keyword is used to skip the current iteration of a loop?", o: ["skip", "continue", "pass", "next"], a: 1 },
    { q: "What does the range(5) function generate?", o: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "1, 2, 3, 4"], a: 1 },
    { q: "A dictionary is defined using which brackets?", o: ["[]", "()", "{}", "<>"], a: 2 },
    { q: "How do you access a value in a dictionary?", o: ["dict.value()", "dict['key']", "dict(0)", "dict.get_key"], a: 1 },
    { q: "Which keyword is used to create a class in Python?", o: ["Class", "class", "object", "define"], a: 1 },
    { q: "What is the correct way to import a module?", o: ["include math", "import math", "using math", "require math"], a: 1 },

    // SET 2: Functions, OOP, and Advanced Concepts (31-60)
    { q: "Which function is used to get input from a user?", o: ["input()", "get()", "scanf()", "read()"], a: 0 },
    { q: "What is the result of 2 * 3 ** 2?", o: ["36", "18", "12", "81"], a: 1 },
    { q: "Which of these is a Python Tuple?", o: ["['a', 'b']", "('a', 'b')", "{'a', 'b'}", "'a', 'b'"], a: 1 },
    { q: "How do you add an element to the end of a list?", o: ["add()", "append()", "insert()", "push()"], a: 1 },
    { q: "Which keyword is used to return a value from a function?", o: ["give", "return", "send", "result"], a: 1 },
    { q: "What is 'self' in Python classes?", o: ["Reserved keyword", "Reference to current instance", "Global variable", "A constructor"], a: 1 },
    { q: "Which function is used to open a file?", o: ["open()", "read()", "file()", "load()"], a: 0 },
    { q: "Which mode is used to write to a file (overwriting content)?", o: ["'a'", "'r'", "'w'", "'x'"], a: 2 },
    { q: "How do you catch exceptions in Python?", o: ["try...catch", "try...except", "do...except", "handle...error"], a: 1 },
    { q: "Default value of the end parameter in print() function?", o: ["tab", "newline", "space", "none"], a: 1 },
    { q: "Which of the following is an invalid variable name?", o: ["_my_var", "2my_var", "myVar2", "my_var"], a: 1 },
    { q: "What does len() return for a dictionary?", o: ["Number of keys", "Number of values", "Total characters", "Memory size"], a: 0 },
    { q: "Which method is used to remove a specific item from a list?", o: ["delete()", "remove()", "discard()", "pop_item()"], a: 1 },
    { q: "What is the purpose of the 'pass' statement?", o: ["Skip loop", "Placeholder for future code", "Exit program", "Check errors"], a: 1 },
    { q: "Which library is commonly used for data analysis?", o: ["Pandas", "Django", "Flask", "PyQt"], a: 0 },
    { q: "How do you get the data type of a variable?", o: ["typeof(x)", "type(x)", "gettype(x)", "class(x)"], a: 1 },
    { q: "What is a Lambda function?", o: ["Anonymous function", "Background function", "Recursive function", "System function"], a: 0 },
    { q: "Which collection does not allow duplicate members?", o: ["List", "Set", "Tuple", "Array"], a: 1 },
    { q: "How do you start a while loop in Python?", o: ["while (x < 10):", "while x < 10:", "do while x < 10:", "while loop x < 10"], a: 1 },
    { q: "What is the correct syntax for class inheritance?", o: ["class Child extends Parent:", "class Child(Parent):", "class Child:Parent:", "class Child(inherit Parent):"], a: 1 },
    { q: "Which method converts a string to an integer?", o: ["str()", "int()", "float()", "convert()"], a: 1 },
    { q: "What is the result of bool('False')?", o: ["False", "True", "Error", "None"], a: 1 },
    { q: "Which module is used for generating random numbers?", o: ["math", "random", "rand", "crypt"], a: 1 },
    { q: "How do you define a constructor in a Python class?", o: ["def init():", "def __init__(self):", "constructor():", "def construct():"], a: 1 },
    { q: "Which function is used to sort a list?", o: ["order()", "sort()", "arrange()", "align()"], a: 1 },
    { q: "What is the output of 10 % 3?", o: ["3", "1", "0", "0.33"], a: 1 },
    { q: "How do you define a constant in Python?", o: ["const X = 1", "final X = 1", "Convention (UPPERCASE)", "static X = 1"], a: 2 },
    { q: "Which method is used to join elements of a list into a string?", o: ["concat()", "join()", "merge()", "combine()"], a: 1 },
    { q: "Which operator is used for logical AND?", o: ["&&", "and", "&", "AND"], a: 1 },
    { q: "How do you find the maximum value in a list?", o: ["top()", "max()", "high()", "peek()"], a: 1 }
];
// Variables to track quiz state
const subject= "python";
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
   if(qProg) qProg.innerText = `Python Question ${currentIdx + 1} of 60`;
    
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
	