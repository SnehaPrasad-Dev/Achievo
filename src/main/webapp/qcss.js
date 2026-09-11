/**
 * ACHIEVO - CSS CERTIFICATION MOCK TEST
 * Total Questions: 60 (Set 1: 1-30, Set 2: 31-60)
 */

/**
 * ACHIEVO - CSS CERTIFICATION MOCK TEST
 * Total Questions: 60 (Set 1: 1-30, Set 2: 31-60)
 */

const questionsData = [
    // SET 1: Selectors, Colors, and Basics (1-30)
    { q: "What does CSS stand for?", o: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], a: 1 },
    { q: "Which HTML tag is used to define an internal style sheet?", o: ["<script>", "<style>", "<css>", "<link>"], a: 1 },
    { q: "Which HTML attribute is used to define inline styles?", o: ["class", "styles", "font", "style"], a: 3 },
    { q: "Which is the correct CSS syntax?", o: ["{body:color=black;}", "body {color: black;}", "body:color=black;", "{body;color:black;}"], a: 1 },
    { q: "How do you insert a comment in a CSS file?", o: ["// this is a comment", "/* this is a comment */", "' this is a comment", "// this is a comment //"], a: 1 },
    { q: "Which property is used to change the background color?", o: ["color", "bgcolor", "background-color", "back-color"], a: 2 },
    { q: "How do you add a background color for all <h1> elements?", o: ["h1.all {background-color:#FFFFFF;}", "h1 {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "h1 {bg-color:#FFFFFF;}"], a: 1 },
    { q: "Which CSS property is used to change the text color of an element?", o: ["fgcolor", "text-color", "color", "font-color"], a: 2 },
    { q: "Which CSS property controls the text size?", o: ["font-style", "text-size", "font-size", "text-style"], a: 2 },
    { q: "What is the correct CSS syntax for making all the <p> elements bold?", o: ["p {font-weight:bold;}", "p {text-size:bold;}", "p {font-style:bold;}", "<p style='font-size:bold;'>"], a: 0 },
    { q: "How do you display hyperlinks without an underline?", o: ["a {text-decoration:none;}", "a {underline:none;}", "a {decoration:no-underline;}", "a {text-style:none;}"], a: 0 },
    { q: "How do you make each word in a text start with a capital letter?", o: ["text-transform:uppercase", "text-transform:capitalize", "text-style:capitalize", "font-transform:capitalize"], a: 1 },
    { q: "Which property is used to change the font of an element?", o: ["font-family", "font-style", "font-weight", "font-type"], a: 0 },
    { q: "How do you make the text italic?", o: ["font:italic;", "font-style:italic;", "text-style:italic;", "font-weight:italic;"], a: 1 },
    { q: "Which property is used to change the left margin of an element?", o: ["padding-left", "indent", "margin-left", "margin:left;"], a: 2 },
    { q: "When using the padding property; are you allowed to use negative values?", o: ["Yes", "No", "Only for Top padding", "None of the above"], a: 1 },
    { q: "How do you make a list that lists its items with squares?", o: ["list-style-type: square;", "list-type: square;", "type: square;", "list: square;"], a: 0 },
    { q: "How do you select an element with id 'demo'?", o: [".demo", "demo", "#demo", "*demo"], a: 2 },
    { q: "How do you select elements with class name 'test'?", o: ["*test", "#test", "test", ".test"], a: 3 },
    { q: "How do you select all p elements inside a div element?", o: ["div p", "div.p", "div + p", "div > p"], a: 0 },
    { q: "What is the default value of the position property?", o: ["relative", "fixed", "absolute", "static"], a: 3 },
    { q: "How do you make an element's background image scroll with the page?", o: ["background-attachment:scroll;", "background-attachment:fixed;", "background-scroll:true;", "None of the above"], a: 0 },
    { q: "Which property is used to center an image block horizontally?", o: ["align:center;", "text-align:center;", "margin:auto;", "float:center;"], a: 2 },
    { q: "Which property is used to change the face of a font?", o: ["font-family", "font-style", "font-weight", "font-variant"], a: 0 },
    { q: "Which unit is used to define relative font size?", o: ["px", "em", "cm", "in"], a: 1 },
    { q: "Which property is used to set the spacing between lines of text?", o: ["line-height", "letter-spacing", "word-spacing", "line-spacing"], a: 0 },
    { q: "How do you add a shadow to a text?", o: ["text-shadow: 2px 2px;", "font-shadow: 2px 2px;", "shadow-text: 2px 2px;", "text-effect: shadow;"], a: 0 },
    { q: "Which property is used to make a rounded border?", o: ["border-corner", "border-radius", "border-style", "corner-radius"], a: 1 },
    { q: "Which property is used to change the list style to 'none'?", o: ["list-style-type", "list-type", "bullet-style", "text-decoration"], a: 0 },
    { q: "What does the Z-index property do?", o: ["Sets the zoom level", "Sets the stack order of an element", "Sets the size", "Sets the opacity"], a: 1 },

    // SET 2: Layout, Box Model, and Modern CSS (31-60)
    { q: "Which property is used to control the overflow of content?", o: ["display", "overflow", "visibility", "float"], a: 1 },
    { q: "How do you make a flex container?", o: ["display:block;", "display:flex;", "display:grid;", "display:inline;"], a: 1 },
    { q: "Which flex property defines the direction of the items?", o: ["flex-flow", "flex-direction", "align-items", "justify-content"], a: 1 },
    { q: "Which property aligns items horizontally in a flex container?", o: ["align-items", "justify-content", "text-align", "vertical-align"], a: 1 },
    { q: "Which property is used to change the transparency of an element?", o: ["visibility", "filter", "opacity", "display"], a: 2 },
    { q: "What is the correct property for 2D/3D transformations?", o: ["transition", "transform", "animation", "translate"], a: 1 },
    { q: "How do you specify a smooth transition for an effect?", o: ["transition", "transform", "change", "animate"], a: 0 },
    { q: "Which property defines the space between the content and the border?", o: ["margin", "spacing", "padding", "border-width"], a: 2 },
    { q: "Which property specifies the stack order of an element?", o: ["x-index", "z-index", "y-index", "order"], a: 1 },
    { q: "How do you make a grid container?", o: ["display:grid;", "display:block-grid;", "grid-template:container;", "display:flex;"], a: 0 },
    { q: "Which property allows you to use a custom image as a cursor?", o: ["cursor", "pointer", "mouse", "link"], a: 0 },
    { q: "Which unit represents 1% of the viewport width?", o: ["vh", "vw", "vmin", "vmax"], a: 1 },
    { q: "Which property is used to set the color of the border?", o: ["border-style", "border-color", "color", "border-width"], a: 1 },
    { q: "What is the default value of the float property?", o: ["left", "right", "none", "inherit"], a: 2 },
    { q: "Which property prevents text from wrapping?", o: ["text-wrap:none;", "white-space:nowrap;", "word-spacing:0;", "display:inline;"], a: 1 },
    { q: "Which property is used to collapse table borders?", o: ["border-collapse", "border-spacing", "collapse", "table-border:none;"], a: 0 },
    { q: "How do you select an element on hover?", o: ["a:visited", "a:link", "a:hover", "a:active"], a: 2 },
    { q: "Which property specifies whether an element is visible?", o: ["display", "visibility", "opacity", "hidden"], a: 1 },
    { q: "What does 'box-sizing: border-box' do?", o: ["Includes padding and border in width", "Removes padding", "Removes border", "Adds extra margin"], a: 0 },
    { q: "Which property creates space between the borders of adjacent cells?", o: ["border-collapse", "border-spacing", "padding", "margin"], a: 1 },
    { q: "Which property is used to set the width of the border?", o: ["border-width", "border-style", "border-size", "thickness"], a: 0 },
    { q: "Which selector is used to style the first line of a text?", o: [":first-letter", ":first-line", ":initial", ":header"], a: 1 },
    { q: "Which property is used to add space between letters?", o: ["word-spacing", "letter-spacing", "line-height", "text-indent"], a: 1 },
    { q: "Which CSS rule is used to define media queries?", o: ["@media", "@query", "@responsive", "@screen"], a: 0 },
    { q: "How do you define a variable in CSS?", o: ["@var name", "--var-name", "$var-name", "var name"], a: 1 },
    { q: "Which property is used to align items vertically in a flex container?", o: ["justify-content", "align-items", "vertical-align", "text-align"], a: 1 },
    { q: "Which property makes an element stick to the screen on scroll?", o: ["position:fixed;", "position:sticky;", "position:absolute;", "position:relative;"], a: 1 },
    { q: "Which property is used to change the mouse pointer to a hand icon?", o: ["cursor:pointer;", "cursor:hand;", "cursor:link;", "pointer-events:all;"], a: 0 },
    { q: "Which filter property is used to make an image grayscale?", o: ["filter:gray();", "filter:grayscale(100%);", "image-color:gray;", "color:grayscale;"], a: 1 },
    { q: "Which property is used to specify a delay before the transition starts?", o: ["transition-duration", "transition-delay", "transition-start", "delay"], a: 1 }
];


const subject= "css";
let isSubmitted= false;
let currentIdx = 0;
let currentSet = 1;
let answers = new Array(60).fill(null);
let totalTime = 1800; // 30 mins
let timeLeft = 1800;

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
	