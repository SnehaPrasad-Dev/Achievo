/**
 * ACHIEVO - C++ PROGRAMMING MOCK TEST
 * Total Questions: 60 (Set 1: 1-30, Set 2: 31-60)
 */

const questionsData = [
    // SET 1: Basics, Syntax & Operators (1-30)
    { q: "Who developed C++?", o: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"], a: 1 },
    { q: "C++ is an extension of which language?", o: ["Java", "C", "Python", "Pascal"], a: 1 },
    { q: "Which header file is used for input and output (cin/cout)?", o: ["stdio.h", "iostream", "conio.h", "stdlib.h"], a: 1 },
    { q: "Which operator is used for output in C++?", o: [">>", "<<", "::", "->"], a: 1 },
    { q: "Which operator is used for input in C++?", o: [">>", "<<", "&&", "||"], a: 0 },
    { q: "What does 'OOP' stand for?", o: ["Object Oriented Programming", "Object Office Programming", "Online Object Program", "Order Object Protocol"], a: 0 },
    { q: "Which keyword is used to create a class?", o: ["object", "struct", "class", "define"], a: 2 },
    { q: "Which character is used to end a C++ statement?", o: [":", ";", ".", ","], a: 1 },
    { q: "Which symbol is used for a single-line comment?", o: ["/*", "//", "#", "--"], a: 1 },
    { q: "What is the correct way to declare an integer variable 'x'?", o: ["int x;", "float x;", "x = int;", "integer x;"], a: 0 },
    { q: "Which data type is used to store a single character?", o: ["string", "char", "chararray", "chr"], a: 1 },
    { q: "Which data type is used to store true or false values?", o: ["bool", "boolean", "int", "bit"], a: 0 },
    { q: "How do you insert a new line in C++?", o: ["\\n", "endl", "Both A and B", "None"], a: 2 },
    { q: "Which operator is the scope resolution operator?", o: [":", "::", "?:", "->"], a: 1 },
    { q: "What is a 'Constructor' in C++?", o: ["A function to delete objects", "A special function called when an object is created", "A type of variable", "A loop"], a: 1 },
    { q: "What is a 'Destructor'?", o: ["A function called when an object is destroyed", "A loop", "A memory allocation tool", "A header file"], a: 0 },
    { q: "Which access specifier makes members accessible only within the class?", o: ["public", "protected", "private", "internal"], a: 2 },
    { q: "Which access specifier makes members accessible from outside the class?", o: ["public", "private", "internal", "protected"], a: 0 },
    { q: "What is Inheritance?", o: ["Creating a new function", "A mechanism where one class acquires properties of another", "Deleting a class", "A type of operator"], a: 1 },
    { q: "Which of the following is used for 'Call by Reference'?", o: ["* (Pointer)", "& (Reference)", "Both A and B", "None"], a: 2 },
    { q: "What is the index of the first element in an array?", o: ["1", "0", "-1", "Depends on size"], a: 1 },
    { q: "Which keyword is used to handle exceptions?", o: ["try", "catch", "Both A and B", "throw only"], a: 2 },
    { q: "Which operator is used to allocate memory dynamically?", o: ["malloc", "new", "alloc", "set"], a: 1 },
    { q: "Which operator is used to deallocate memory?", o: ["free", "delete", "remove", "clear"], a: 1 },
    { q: "What is Polymorphism?", o: ["Ability to take many forms", "A type of loop", "A class definition", "A syntax error"], a: 0 },
    { q: "What is Encapsulation?", o: ["Dividing code into parts", "Wrapping data and functions into a single unit", "Data hiding only", "Creating objects"], a: 1 },
    { q: "Which keyword is used to inherit a class?", o: ["extends", ":", "implements", "using"], a: 1 },
    { q: "What is a 'Virtual Function'?", o: ["A function that has no body", "A function redefined in a derived class", "A function that cannot be called", "A private function"], a: 1 },
    { q: "What is an 'Abstract Class'?", o: ["A class with at least one pure virtual function", "A class without variables", "A hidden class", "A class that cannot have functions"], a: 0 },
    { q: "Which of the following is a logical OR operator?", o: ["&&", "||", "!", "|"], a: 1 },

    // SET 2: Advanced Topics, OOP & STL (31-60)
    { q: "What is 'this' pointer?", o: ["Points to the current object", "Points to the base class", "Points to the main function", "A null pointer"], a: 0 },
    { q: "Can we overload a Destructor?", o: ["Yes", "No", "Only if it is private", "Only in derived classes"], a: 1 },
    { q: "Can we overload a Constructor?", o: ["Yes", "No", "Only in some cases", "Only for public classes"], a: 0 },
    { q: "Which header file is used for string functions?", o: ["strings.h", "string", "cstring", "str.h"], a: 1 },
    { q: "What is the size of 'char' in C++?", o: ["1 Byte", "2 Bytes", "4 Bytes", "Depends on OS"], a: 0 },
    { q: "Which function is the entry point of a C++ program?", o: ["start()", "begin()", "main()", "init()"], a: 2 },
    { q: "What does 'STL' stand for?", o: ["Standard Template Library", "Simple Tool Library", "Static Type Logic", "Standard Test List"], a: 0 },
    { q: "Which loop is exit-controlled?", o: ["for", "while", "do-while", "if-else"], a: 2 },
    { q: "Which keyword is used for a constant variable?", o: ["final", "const", "static", "fixed"], a: 1 },
    { q: "Which operator is used for 'Equal To' comparison?", o: ["=", "==", "===", "equals"], a: 1 },
    { q: "What is a 'Friend Function'?", o: ["A function that can access private data without being a member", "A function of a base class", "A global function only", "A protected function"], a: 0 },
    { q: "What is 'Inline Function'?", o: ["A function defined inside a class", "A function expanded at call site to save time", "A function with one line", "A recursive function"], a: 1 },
    { q: "Which symbol is used for a Pointer?", o: ["&", "*", "->", "::"], a: 1 },
    { q: "Which operator is used to access members using a pointer?", o: [".", "->", "*", "&"], a: 1 },
    { q: "What is an 'Array'?", o: ["Collection of different types", "Collection of same types of data", "A type of class", "A dynamic object"], a: 1 },
    { q: "What is the default access specifier for a 'class'?", o: ["public", "private", "protected", "friend"], a: 1 },
    { q: "What is the default access specifier for a 'struct'?", o: ["public", "private", "protected", "internal"], a: 0 },
    { q: "Which keyword is used to create a template?", o: ["temp", "template", "type", "gen"], a: 1 },
    { q: "What is 'Function Overloading'?", o: ["Multiple functions with same name but different parameters", "Calling a function many times", "Deleting a function", "Overwriting a function"], a: 0 },
    { q: "What is 'Method Overriding'?", o: ["Changing a function in a derived class", "Creating a new function", "Overloading a constructor", "Writing code in one line"], a: 0 },
    { q: "Which stream is used for error messages?", o: ["cout", "cerr", "cin", "cclog"], a: 1 },
    { q: "How many types of inheritance are in C++?", o: ["3", "5", "2", "4"], a: 1 },
    { q: "What is a 'Namespace'?", o: ["A way to group classes to avoid name conflicts", "A variable name", "A file name", "A memory location"], a: 0 },
    { q: "Which keyword is used for namespaces?", o: ["space", "using", "namespace", "include"], a: 2 },
    { q: "Which command is used to compile a C++ file in Linux (GCC)?", o: ["gcc", "g++", "cpp", "compile"], a: 1 },
    { q: "What is 'Data Abstraction'?", o: ["Showing only essential features and hiding details", "Deleting data", "Copying data", "Memory management"], a: 0 },
    { q: "Which keyword is used to return a value?", o: ["back", "send", "return", "exit"], a: 2 },
    { q: "What is the result of 10 % 4?", o: ["2.5", "2", "0", "1"], a: 1 },
    { q: "Which operator is the 'Ternary' operator?", o: ["?:", "++", "sizeof", "new"], a: 0 },
    { q: "Is C++ a strongly typed language?", o: ["Yes", "No", "Only for objects", "Depends on compiler"], a: 0 }
];
// Variables to track quiz state
const subject= "cpp";
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
   if(qProg) qProg.innerText = `Cpp Question ${currentIdx + 1} of 60`;
    
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
	