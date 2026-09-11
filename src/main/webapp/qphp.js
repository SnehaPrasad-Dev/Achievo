/**
 * ACHIEVO - PHP CERTIFICATION MOCK TEST
 * Total Questions: 60 (Set 1: 1-30, Set 2: 31-60)
 */

const questionsData = [
    // SET 1: PHP Basics, Syntax, and Strings (1-30)
    { q: "What does PHP stand for?", o: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Private Home Page", "Public Hyperlink Processor"], a: 1 },
    { q: "Which of the following is the correct way to start a PHP script?", o: ["<script>", "<?php", "<?", "<html>"], a: 1 },
    { q: "How do you write 'Hello World' in PHP?", o: ["Document.Write('Hello World');", "echo 'Hello World';", "print_line('Hello World');", "'Hello World';"], a: 1 },
    { q: "All variables in PHP start with which symbol?", o: ["&", "!", "$", "#"], a: 2 },
    { q: "How do you end a PHP statement?", o: [".", ":", ";", "New line"], a: 2 },
    { q: "Which of the following is used for a single-line comment in PHP?", o: ["/* */", "//", "", "*"], a: 1 },
    { q: "PHP is an example of which type of language?", o: ["Client-side scripting", "Browser-side scripting", "Server-side scripting", "Machine language"], a: 2 },
    { q: "Which function is used to find the length of a string?", o: ["strlength()", "len()", "strlen()", "count()"], a: 2 },
    { q: "Which operator is used for string concatenation in PHP?", o: ["+", "&", ".", "concat()"], a: 2 },
    { q: "What is the default file extension for PHP files?", o: [".html", ".php", ".xml", ".ph"], a: 1 },
    { q: "Which statement is used to check a condition in PHP?", o: ["if", "select", "for", "while"], a: 0 },
    { q: "How do you create an array in PHP?", o: ["$cars = array('Volvo', 'BMW');", "$cars = 'Volvo', 'BMW';", "$cars = list('Volvo', 'BMW');", "None of these"], a: 0 },
    { q: "Which loop executes a block of code a specified number of times?", o: ["foreach", "while", "for", "do-while"], a: 2 },
    { q: "In PHP, indices of numeric arrays start at:", o: ["1", "0", "-1", "2"], a: 1 },
    { q: "Which function is used to sort an array in ascending order?", o: ["sort()", "asort()", "rsort()", "order()"], a: 0 },
    { q: "How do you get the number of elements in an array?", o: ["len()", "size()", "count()", "total()"], a: 2 },
    { q: "An array that uses named keys is called:", o: ["Numeric Array", "Associative Array", "Multidimensional Array", "Key Array"], a: 1 },
    { q: "Which loop is used specifically for traversing arrays?", o: ["for", "while", "foreach", "switch"], a: 2 },
    { q: "Which function returns a part of a string?", o: ["slice()", "part()", "substr()", "cut()"], a: 2 },
    { q: "Which superglobal collects data from a form with method='post'?", o: ["$_GET", "$_POST", "$_REQUEST", "$_SESSION"], a: 1 },
    { q: "Which superglobal is used to collect data sent in the URL?", o: ["$_POST", "$_GET", "$_URL", "$_FILES"], a: 1 },
    { q: "How do you start a session in PHP?", o: ["session_start();", "start_session();", "session_begin();", "init_session();"], a: 0 },
    { q: "Which function is used to set a cookie in PHP?", o: ["makecookie()", "setcookie()", "createcookie()", "savecookie()"], a: 1 },
    { q: "How do you check if a variable is set and not null?", o: ["is_set()", "isset()", "check()", "exists()"], a: 1 },
    { q: "Which function is used to redirect to another page?", o: ["redirect()", "header('Location: url');", "move('url');", "go_to()"], a: 1 },
    { q: "To destroy all session data, we use:", o: ["session_destroy();", "session_end();", "stop_session();", "session_unset();"], a: 0 },
    { q: "Which operator checks if two values are equal and of the same type?", o: ["==", "===", "!=", "="], a: 1 },
    { q: "Which function is used to convert a string to uppercase?", o: ["upper()", "strtoupper()", "case_up()", "toUpper()"], a: 1 },
    { q: "Which tag is used to embed internal CSS in PHP?", o: ["<css>", "<script>", "<style>", "<link>"], a: 2 },
    { q: "PHP variables are case-sensitive.", o: ["True", "False", "Only in functions", "None"], a: 0 },

    // SET 2: Advanced PHP, MySQL, and Functions (31-60)
    { q: "Which extension is commonly used to connect to MySQL in PHP?", o: ["mysqli", "mysql_connect", "db_mysql", "pdo_mysql"], a: 0 },
    { q: "Which function executes a SQL query in PHP?", o: ["mysqli_query()", "query_run()", "execute()", "mysqli_run()"], a: 0 },
    { q: "What does PDO stand for?", o: ["PHP Data Objects", "PHP Database Overlay", "Personal Data Object", "PHP Direct Output"], a: 0 },
    { q: "Which function closes a database connection?", o: ["mysqli_close()", "db_stop()", "close_connection()", "mysqli_end()"], a: 0 },
    { q: "How do you fetch a result row as an associative array?", o: ["mysqli_fetch_row()", "mysqli_fetch_assoc()", "mysqli_get_array()", "mysqli_fetch_all()"], a: 1 },
    { q: "Which SQL statement is used to insert data?", o: ["ADD INTO", "INSERT INTO", "SAVE INTO", "UPDATE"], a: 1 },
    { q: "What is the purpose of mysqli_real_escape_string()?", o: ["Encrypt passwords", "Prevent SQL injection", "Format strings", "Compress data"], a: 1 },
    { q: "Which function counts the number of rows in a result set?", o: ["mysqli_num_rows()", "count_rows()", "mysqli_total()", "row_count()"], a: 0 },
    { q: "To update existing data in a database, we use:", o: ["MODIFY", "UPDATE", "CHANGE", "ALTER"], a: 1 },
    { q: "How do you define a function in PHP?", o: ["function name() { }", "def name() { }", "new function() { }", "func name() { }"], a: 0 },
    { q: "What is the difference between include and require?", o: ["None", "require stops script on error", "include stops script on error", "require is slower"], a: 1 },
    { q: "Which function is used to open a file in PHP?", o: ["open()", "read_file()", "fopen()", "file_get()"], a: 2 },
    { q: "What does the die() function do?", o: ["Restarts server", "Prints message and exits script", "Deletes variable", "Pauses script"], a: 1 },
    { q: "Which function rounds a float UP to the nearest integer?", o: ["floor()", "round()", "ceil()", "fixed()"], a: 2 },
    { q: "Which function is used to encrypt a password securely?", o: ["md5()", "sha1()", "password_hash()", "crypt()"], a: 2 },
    { q: "What does explode() function do?", o: ["Deletes a string", "Breaks string into an array", "Joins array into string", "Prints string"], a: 1 },
    { q: "What does implode() function do?", o: ["Breaks string", "Joins array elements into a string", "Encrypts data", "Sorts array"], a: 1 },
    { q: "Which function returns the current date and time?", o: ["time()", "now()", "date()", "get_date()"], a: 2 },
    { q: "Which superglobal contains information about server headers?", o: ["$_ENV", "$_SERVER", "$_HEADER", "$_SESSION"], a: 1 },
    { q: "How can you access a global variable inside a function?", o: ["Using 'global' keyword", "Automatically", "Using 'extern'", "Using 'this'"], a: 0 },
    { q: "Which function removes whitespace from the start and end of a string?", o: ["clean()", "strip()", "trim()", "cut()"], a: 2 },
    { q: "Which operator is used for exponentiation (power)?", o: ["^", "**", "pow", "exp"], a: 1 },
    { q: "Which function checks if a file exists?", o: ["file_exists()", "exists()", "is_file()", "find_file()"], a: 0 },
    { q: "Which constant represents the current line number in a script?", o: ["__LINE__", "LINE", "__NUMBER__", "CUR_LINE"], a: 0 },
    { q: "What is the default port for MySQL?", o: ["80", "443", "3306", "8080"], a: 2 },
    { q: "Which function converts an array into a JSON string?", o: ["json_encode()", "json_decode()", "to_json()", "json_string()"], a: 0 },
    { q: "Which function converts a JSON string into a PHP variable?", o: ["json_encode()", "json_decode()", "from_json()", "json_parse()"], a: 1 },
    { q: "Which superglobal is used to collect uploaded file data?", o: ["$_POST", "$_FILES", "$_UPLOAD", "$_REQUEST"], a: 1 },
    { q: "Which function is used to delete a file in PHP?", o: ["delete()", "remove()", "unlink()", "erase()"], a: 2 },
    { q: "Which keyword is used to prevent a class from being inherited?", o: ["static", "final", "private", "protected"], a: 1 }
];

// Variables to track quiz state
const subject= "php";
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
   if(qProg) qProg.innerText = `PHP Question ${currentIdx + 1} of 60`;
    
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
