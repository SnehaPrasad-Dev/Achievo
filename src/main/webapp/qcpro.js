/**
 * ACHIEVO - C PROGRAMMING MOCK TEST
 * Total Questions: 60 (Set 1: 1-30, Set 2: 31-60)
 */

const questionsData = [
    // SET 1: Basics, Syntax & Operators (1-30)
    { q: "Who is the father of C language?", o: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], a: 2 },
    { q: "Which character is used to end every C statement?", o: [":", ";", ".", ","], a: 1 },
    { q: "Which header file is used for printf() and scanf() functions?", o: ["conio.h", "math.h", "stdio.h", "stdlib.h"], a: 2 },
    { q: "What is the correct way to declare an integer variable in C?", o: ["int x;", "integer x;", "x = int;", "int:x;"], a: 0 },
    { q: "Which keyword is used to return a value from a function?", o: ["exit", "return", "back", "break"], a: 1 },
    { q: "What is the format specifier for an integer value?", o: ["%f", "%c", "%d", "%s"], a: 2 },
    { q: "How do you write a single-line comment in C?", o: ["//", "/*", "#", "--"], a: 0 },
    { q: "Which of the following is NOT a valid variable name?", o: ["_my_var", "2var", "var_2", "myVar"], a: 1 },
    { q: "What is the size of an 'int' data type (typically)?", o: ["1 Byte", "2 or 4 Bytes", "8 Bytes", "None"], a: 1 },
    { q: "Which function is used to take input from the user?", o: ["printf()", "input()", "scanf()", "get()"], a: 2 },
    { q: "Which operator is used for multiplication?", o: ["x", "*", "#", "&"], a: 1 },
    { q: "Which operator is used for modulo (remainder)?", o: ["/", "%", "&", "||"], a: 1 },
    { q: "What is the output of 5 / 2 in C (if both are integers)?", o: ["2.5", "2", "3", "0"], a: 1 },
    { q: "Which data type is used to store a single character?", o: ["string", "char", "chr", "text"], a: 1 },
    { q: "How do you define a constant in C?", o: ["const int x = 10;", "#define x 10", "Both A and B", "constant x = 10"], a: 2 },
    { q: "Which loop is guaranteed to execute at least once?", o: ["for", "while", "do-while", "None"], a: 2 },
    { q: "Which keyword is used to create a structure?", o: ["struct", "union", "record", "object"], a: 0 },
    { q: "What is the starting index of an array in C?", o: ["1", "-1", "0", "None"], a: 2 },
    { q: "Which escape sequence is used for a new line?", o: ["\\t", "\\n", "\\b", "\\r"], a: 1 },
    { q: "Which operator is used to get the address of a variable?", o: ["*", "&", "&&", "@"], a: 1 },
    { q: "What is a pointer in C?", o: ["A variable that stores a value", "A variable that stores the address of another variable", "A keyword", "A function"], a: 1 },
    { q: "Which function is used to find the length of a string?", o: ["size()", "strlen()", "length()", "strsize()"], a: 1 },
    { q: "Which keyword is used to skip the rest of a loop iteration?", o: ["break", "continue", "skip", "next"], a: 1 },
    { q: "Which statement is used to switch between multiple choices?", o: ["switch", "case", "if-else", "select"], a: 0 },
    { q: "The 'main' function returns which type of value by default?", o: ["void", "float", "int", "char"], a: 2 },
    { q: "What is the range of 'char' data type?", o: ["0 to 255", "-128 to 127", "Both depending on signed/unsigned", "No range"], a: 2 },
    { q: "Which of these is a logical 'AND' operator?", o: ["&", "AND", "&&", "||"], a: 2 },
    { q: "How do you declare a pointer?", o: ["int &p;", "int *p;", "pointer p;", "int p*;"], a: 1 },
    { q: "Which function is used to allocate memory dynamically?", o: ["malloc()", "alloc()", "new()", "create()"], a: 0 },
    { q: "Which function is used to free dynamically allocated memory?", o: ["delete()", "free()", "remove()", "clear()"], a: 1 },

    // SET 2: Advanced Topics, Strings & Structures (31-60)
    { q: "What is the value of 'EOF' typically?", o: ["0", "1", "-1", "NULL"], a: 2 },
    { q: "Which header file is used for string functions like strcpy()?", o: ["stdio.h", "string.h", "ctype.h", "conio.h"], a: 1 },
    { q: "What is the null character used in strings?", o: ["\\n", "\\0", "\\t", "\\b"], a: 1 },
    { q: "Can a C function return multiple values using 'return'?", o: ["Yes", "No", "Only 2 values", "Sometimes"], a: 1 },
    { q: "What is a 'union' in C?", o: ["Same as structure", "Memory is shared between members", "Used for files", "A type of loop"], a: 1 },
    { q: "Which operator has the highest precedence?", o: ["+", "*", "() (Parentheses)", "="], a: 2 },
    { q: "What is recursion?", o: ["A function calling itself", "A loop", "A type of array", "A system error"], a: 0 },
    { q: "Which of the following is a storage class in C?", o: ["auto", "static", "All of these", "extern"], a: 2 },
    { q: "Where is a 'static' variable stored?", o: ["Stack", "Data Segment", "Heap", "Register"], a: 1 },
    { q: "What is the result of !0 (NOT zero)?", o: ["0", "1", "Error", "10"], a: 1 },
    { q: "Which symbol is used for Bitwise OR?", o: ["||", "|", "^", "&"], a: 1 },
    { q: "What does 'typedef' do?", o: ["Creates a new variable", "Defines an alias for an existing type", "It's a loop", "Deletes a type"], a: 1 },
    { q: "Which function is used to close a file?", o: ["close()", "fclose()", "fileclose()", "exit()"], a: 1 },
    { q: "What is the correct way to open a file for reading?", o: ["fopen('file.txt', 'w')", "fopen('file.txt', 'r')", "fopen('file.txt', 'a')", "open('file.txt')"], a: 1 },
    { q: "What is the size of 'char' in C?", o: ["1 Byte", "2 Bytes", "4 Bytes", "8 Bytes"], a: 0 },
    { q: "Which operator is used to access structure members?", o: [". (Dot)", "-> (Arrow)", "Both depending on pointer or variable", "None"], a: 2 },
    { q: "What is a global variable?", o: ["Declared inside main", "Declared outside all functions", "Declared in a loop", "None"], a: 1 },
    { q: "Which loop check condition at the end?", o: ["while", "for", "do-while", "if"], a: 2 },
    { q: "What is an infinite loop?", o: ["A loop that never ends", "A loop that runs 10 times", "A loop that runs 0 times", "A loop with break"], a: 0 },
    { q: "Which function is used to compare two strings?", o: ["strcompare()", "strcmp()", "strncmp()", "equal()"], a: 1 },
    { q: "C is a ____ level language.", o: ["High", "Low", "Middle", "None"], a: 2 },
    { q: "What is the format specifier for a float?", o: ["%d", "%f", "%s", "%c"], a: 1 },
    { q: "How many keywords are there in C89?", o: ["32", "40", "50", "25"], a: 0 },
    { q: "What does 'void' mean?", o: ["Zero", "Empty/No type", "Error", "Variable"], a: 1 },
    { q: "Which of the following is a ternary operator?", o: ["?:", "++", "+=", "=="], a: 0 },
    { q: "The #include is a ____.", o: ["Preprocessor directive", "Function", "Statement", "Loop"], a: 0 },
    { q: "Which function is used to copy one string to another?", o: ["strcp()", "strcpy()", "copystr()", "assign()"], a: 1 },
    { q: "What is the result of 10 % 3?", o: ["3", "1", "0", "2"], a: 1 },
    { q: "Which function reads a single character from keyboard?", o: ["getch()", "putch()", "printf()", "scanf()"], a: 0 },
    { q: "Is C a case-sensitive language?", o: ["Yes", "No", "Only for variables", "Only for constants"], a: 0 }
];
// Variables to track quiz state
const subject= "cpro";
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
   if(qProg) qProg.innerText = `Java Question ${currentIdx + 1} of 60`;
    
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
	