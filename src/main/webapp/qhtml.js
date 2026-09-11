/**
 * ACHIEVO - HTML CERTIFICATION MOCK TEST (ENGLISH)
 * Total Questions: 60 (Set 1: 1-30, Set 2: 31-60)
 */

const questionsData = [
    // SET 1: Basic Structure & Text Tags (1-30)
    { q: "What does HTML stand for?", o: ["HyperText Markup Language", "HyperText Making Language", "HighText Machine Language", "Hyperlinks and Text Markup"], a: 0 },
    { q: "Which element is the root of an HTML document?", o: ["<head>", "<body>", "<html>", "<title>"], a: 2 },
    { q: "What is the correct HTML element for the largest heading?", o: ["<h6>", "<h4>", "<h2>", "<h1>"], a: 3 },
    { q: "Which tag is used to insert a line break?", o: ["<break>", "<lb>", "<br>", "<hr>"], a: 2 },
    { q: "How do you create a hyperlink in HTML?", o: ["<a href='url'>", "<a>url</a>", "<link href='url'>", "<a url='url'>"], a: 0 },
    { q: "What is the correct syntax for an image tag?", o: ["<img href='img.jpg'>", "<img src='img.jpg'>", "<image src='img.jpg'>", "<img>img.jpg</img>"], a: 1 },
    { q: "Which tag is used for an unordered list?", o: ["<ol>", "<ul>", "<li>", "<list>"], a: 1 },
    { q: "Which tag is used for an ordered list?", o: ["<ol>", "<ul>", "<dl>", "<list>"], a: 0 },
    { q: "What is the correct HTML syntax for a comment?", o: ["// comment", "/* comment */", "", "<comment>"], a: 2 },
    { q: "Which tag is used to make text bold?", o: ["<bold>", "<b>", "<important>", "<bl>"], a: 1 },
    { q: "Which tag is used to make text italic?", o: ["<italic>", "<it>", "<i>", "<il>"], a: 2 },
    { q: "Where should the <title> tag be located?", o: ["Inside <body>", "Inside <head>", "Inside <footer>", "Outside <html>"], a: 1 },
    { q: "What is the standard file extension for HTML files?", o: [".htl", ".html", ".hml", ".txt"], a: 1 },
    { q: "Which tag is used to create a horizontal line?", o: ["<line>", "<br>", "<hr>", "<hl>"], a: 2 },
    { q: "Which input type is used for a checkbox?", o: ["type='check'", "type='checkbox'", "type='tick'", "type='none'"], a: 1 },
    { q: "Which tag is used to create a dropdown list?", o: ["<list>", "<input>", "<select>", "<form>"], a: 2 },
    { q: "Which tag defines a row in a table?", o: ["<td>", "<th>", "<tr>", "<table>"], a: 2 },
    { q: "What is the purpose of the <textarea> tag?", o: ["Single line input", "Multi-line text input", "Password field", "Submit button"], a: 1 },
    { q: "What is the latest major version of HTML?", o: ["HTML 4", "XHTML", "HTML 6", "HTML 5"], a: 3 },
    { q: "Which tag defines a standard data cell in a table?", o: ["<tr>", "<td>", "<tc>", "<th>"], a: 1 },
    { q: "What does target='_blank' do in an anchor tag?", o: ["Opens link in same tab", "Opens link in a new tab", "Refreshes the page", "Closes the window"], a: 1 },
    { q: "Which of these is a self-closing tag?", o: ["<div>", "<p>", "<img>", "<span>"], a: 2 },
    { q: "The 'id' attribute of an element must be:", o: ["Unique on the page", "Used for multiple elements", "Case-insensitive", "Optional for all tags"], a: 0 },
    { q: "Which tag is used for subscript text?", o: ["<sup>", "<sub>", "<small>", "<under>"], a: 1 },
    { q: "What is the correct Doctype for HTML5?", o: ["<!DOCTYPE html>", "<DOCTYPE html>", "<doctype5>", "None"], a: 0 },
    { q: "What is the correct 'type' for a submit button?", o: ["type='button'", "type='ok'", "type='submit'", "type='go'"], a: 2 },
    { q: "Which entity represents the 'less than' (<) sign?", o: ["&lt;", "&gt;", "&amp;", "&quot;"], a: 0 },
    { q: "What is an <iframe> used for?", o: ["Displaying images", "Displaying a page within a page", "Video playback", "Menu navigation"], a: 1 },
    { q: "Which of these is an inline element?", o: ["<div>", "<h1>", "<span>", "<p>"], a: 2 },
    { q: "Which tag defines a header cell in a table?", o: ["<head>", "<th>", "<td>", "<header>"], a: 1 },

    // SET 2: HTML5 & Advanced Tags (31-60)
    { q: "How do you group radio buttons so only one can be selected?", o: ["Different names", "Same name attribute", "No name", "Using IDs"], a: 1 },
    { q: "What is the purpose of the 'alt' attribute in images?", o: ["Image size", "Fallback text description", "Border color", "Link URL"], a: 1 },
    { q: "Which tag defines an individual item in a list?", o: ["<list>", "<li>", "<ul>", "<ol>"], a: 1 },
    { q: "Which tag is used for text with strong importance?", o: ["<b>", "<i>", "<strong>", "<em>"], a: 2 },
    { q: "In which version was the <video> tag introduced?", o: ["HTML 4", "HTML 5", "XHTML", "CSS 3"], a: 1 },
    { q: "Which of these is a semantic HTML element?", o: ["<div>", "<span>", "<article>", "<b>"], a: 2 },
    { q: "What does the 'cellspacing' attribute do in a table?", o: ["Internal cell padding", "Space between cells", "Column width", "Row height"], a: 1 },
    { q: "Where are <meta> tags placed?", o: ["Inside <body>", "Inside <footer>", "Inside <head>", "Inside <title>"], a: 2 },
    { q: "Which element is used to draw graphics via JavaScript?", o: ["<canvas>", "<svg>", "<paint>", "<graphic>"], a: 0 },
    { q: "Which input type creates a slider?", o: ["type='slider'", "type='range'", "type='number'", "type='scroll'"], a: 1 },
    { q: "What is the primary purpose of the <nav> tag?", o: ["News articles", "Navigation links", "Footer info", "Sidebars"], a: 1 },
    { q: "What does the 'readonly' attribute do?", o: ["Hides the input", "Prevents user from editing", "Greys out the field", "Validates email"], a: 1 },
    { q: "Which tag is used for a figure caption?", o: ["<caption>", "<title>", "<figcaption>", "<desc>"], a: 2 },
    { q: "What does the 'required' attribute do in a form?", o: ["Sets font style", "Makes field mandatory", "Sets field size", "Links to a script"], a: 1 },
    { q: "Which tag is used to embed audio in HTML5?", o: ["<sound>", "<mp3>", "<audio>", "<music>"], a: 2 },
    { q: "Which attribute defines a keyboard shortcut?", o: ["shortcut", "accesskey", "key", "tabindex"], a: 1 },
    { q: "What is the <datalist> tag used for?", o: ["Connecting to DB", "Pre-defined options for input", "Storing data", "Making tables"], a: 1 },
    { q: "What does SVG stand for?", o: ["Simple Vector Graphics", "Scalable Vector Graphics", "Static Vector Graphics", "Standard Graphics"], a: 1 },
    { q: "Can the <header> tag be used multiple times on one page?", o: ["No, only once", "Twice only", "Yes, multiple times", "Only in the footer"], a: 2 },
    { q: "What is the purpose of the <section> tag?", o: ["Generic document section", "Hyperlink", "Image container", "Sidebar"], a: 0 },
    { q: "Which tag represents a progress bar?", o: ["<bar>", "<loading>", "<progress>", "<meter>"], a: 2 },
    { q: "Which attribute is used for form autocompletion?", o: ["auto", "fill", "autocomplete", "history"], a: 2 },
    { q: "Which tag is used for internal CSS?", o: ["<css>", "<script>", "<style>", "<link>"], a: 2 },
    { q: "Which tag is used to link a JavaScript file?", o: ["<js>", "<script>", "<javascript>", "<link>"], a: 1 },
    { q: "What is the 'colspan' attribute used for?", o: ["Merge Rows", "Merge Columns", "Split Cells", "Column Width"], a: 1 },
    { q: "What is the 'rowspan' attribute used for?", o: ["Merge Rows", "Merge Columns", "Cell Color", "Row Height"], a: 0 },
    { q: "What does rel='stylesheet' indicate?", o: ["JavaScript file", "CSS file connection", "Image source", "PHP link"], a: 1 },
    { q: "Where can HTML5 store data locally?", o: ["Cookies only", "Local and Session storage", "Hard drive files", "Cloud DB"], a: 1 },
    { q: "Which tag is used for small side-comments or legal text?", o: ["<little>", "<small>", "<min>", "<sub>"], a: 1 },
    { q: "Which tag represents deleted text (strikethrough)?", o: ["<del>", "<strike>", "<remove>", "<s>"], a: 0 }
];

// Variables to track quiz state
const subject= "html";
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
   if(qProg) qProg.innerText = `HTML Question ${currentIdx + 1} of 60`;
    
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
	