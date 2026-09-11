/**
 * ACHIEVO - ADVANCED JAVA CERTIFICATION MOCK TEST
 * Technologies: JDBC, Servlets, JSP, Hibernate, Spring
 * Total Questions: 60 (Set 1: 1-30, Set 2: 31-60)
 */

const questionsData = [
    // SET 1: JDBC & Servlets (1-30)
    { q: "What does JDBC stand for?", o: ["Java Data Binding Control", "Java Database Connectivity", "Joint Database Control", "Java Direct Connection"], a: 1 },
    { q: "Which JDBC driver type is known as the 'Native-API driver'?", o: ["Type 1", "Type 2", "Type 3", "Type 4"], a: 1 },
    { q: "Which interface is used to execute parameterized queries?", o: ["Statement", "PreparedStatement", "ResultSet", "CallableStatement"], a: 1 },
    { q: "Which method is used to execute a SELECT query in JDBC?", o: ["executeUpdate()", "executeQuery()", "execute()", "selectQuery()"], a: 1 },
    { q: "Which package contains the standard JDBC classes?", o: ["java.db", "java.sql", "javax.database", "java.jdbc"], a: 1 },
    { q: "What is the return type of the executeUpdate() method?", o: ["ResultSet", "int (affected rows)", "boolean", "void"], a: 1 },
    { q: "Which interface is used to call Stored Procedures?", o: ["CallableStatement", "PreparedStatement", "Statement", "ProcedureCall"], a: 0 },
    { q: "A Servlet is a Java class that runs on a:", o: ["Web Browser", "Web Server", "Database Server", "Operating System"], a: 1 },
    { q: "Which method is called only once in a Servlet's lifetime?", o: ["service()", "init()", "doGet()", "destroy()"], a: 1 },
    { q: "HTTP is considered a ______ protocol.", o: ["Stateless", "Stateful", "Continuous", "Symmetric"], a: 0 },
    { q: "Which method handles both GET and POST requests by default?", o: ["processRequest()", "service()", "handle()", "execute()"], a: 1 },
    { q: "Which object is used to send data from a Servlet to a client?", o: ["HttpServletRequest", "HttpServletResponse", "ServletConfig", "ServletContext"], a: 1 },
    { q: "How do you obtain a session object in a Servlet?", o: ["request.getSession()", "response.getSession()", "new HttpSession()", "Servlet.getSession()"], a: 0 },
    { q: "Which file is known as the Deployment Descriptor?", o: ["config.xml", "web.xml", "servlet.xml", "pom.xml"], a: 1 },
    { q: "Which scope has the longest lifespan in a web application?", o: ["Request", "Session", "Application (Context)", "Page"], a: 2 },
    { q: "Which method is used to remove or invalidate a session?", o: ["session.delete()", "session.invalidate()", "session.stop()", "session.close()"], a: 1 },
    { q: "The RequestDispatcher's forward() method is executed on the:", o: ["Client side", "Server side", "Browser side", "Network side"], a: 1 },
    { q: "Which HTTP status code represents 'Page Not Found'?", o: ["200", "500", "404", "403"], a: 2 },
    { q: "GenericServlet implements which main interface?", o: ["HttpServlet", "Servlet", "Serializable", "Cloneable"], a: 1 },
    { q: "What is the default port for most MySQL databases?", o: ["8080", "3306", "1521", "5432"], a: 1 },
    { q: "Which method is used to close a JDBC connection?", o: ["stop()", "end()", "close()", "terminate()"], a: 2 },
    { q: "Which interface provides methods to move the cursor in a result set?", o: ["Statement", "ResultSet", "Connection", "Driver"], a: 1 },
    { q: "What is the purpose of a Driver Manager in JDBC?", o: ["To manage users", "To manage database drivers", "To write SQL", "To create UI"], a: 1 },
    { q: "Which method of PreparedStatement sets an integer value?", o: ["setInt()", "setInteger()", "putInt()", "addInt()"], a: 0 },
    { q: "In which lifecycle phase is the destroy() method called?", o: ["Startup", "End of lifecycle", "Every request", "Initialization"], a: 1 },
    { q: "Which interface defines the service() method?", o: ["HttpServlet", "Servlet", "GenericServlet", "ServletConfig"], a: 1 },
    { q: "Which object allows sharing data across all servlets?", o: ["ServletConfig", "ServletContext", "HttpSession", "ServletRequest"], a: 1 },
    { q: "Which status code represents an Internal Server Error?", o: ["200", "404", "500", "401"], a: 2 },
    { q: "JSP is eventually converted into a:", o: ["HTML file", "Servlet", "XML file", "JavaScript file"], a: 1 },
    { q: "Which JDBC driver is written entirely in Java?", o: ["Type 1", "Type 2", "Type 3", "Type 4"], a: 3 },

    // SET 2: JSP, Hibernate & Spring (31-60)
    { q: "What does JSP stand for?", o: ["Java Server Pages", "Java Service Pages", "Java Simple Pages", "Java System Pages"], a: 0 },
    { q: "Which JSP tag is used for scripting (writing Java code)?", o: ["<%! ... %>", "<% ... %>", "<%= ... %>", "<%@ ... %>"], a: 1 },
    { q: "Which implicit object represents the ServletConfig in JSP?", o: ["config", "context", "application", "out"], a: 0 },
    { q: "A JSP directive starts with which symbol?", o: ["<%!", "<%@", "<%=", "<%--"], a: 1 },
    { q: "Which JSP tag is used for expressions (printing values)?", o: ["<%! ... %>", "<%= ... %>", "<%-- ... --%>", "<%@ ... %>"], a: 1 },
    { q: "What is Hibernate?", o: ["A Web Server", "An ORM Framework", "A Database", "A Compiler"], a: 1 },
    { q: "Which file is typically used for Hibernate configuration?", o: ["hibernate.xml", "hibernate.cfg.xml", "config.properties", "web.xml"], a: 1 },
    { q: "In Hibernate, what does HQL stand for?", o: ["Hibernate Query Language", "High Quality Language", "Hyper Query Language", "Hidden Query Language"], a: 0 },
    { q: "Which object is used to perform CRUD operations in Hibernate?", o: ["SessionFactory", "Session", "Configuration", "Transaction"], a: 1 },
    { q: "Spring is widely known as a ______ framework.", o: ["Heavyweight", "Lightweight", "Frontend", "Mobile"], a: 1 },
    { q: "What is Dependency Injection in Spring?", o: ["Manual object creation", "Automatic provision of dependencies", "A method to delete objects", "A UI library"], a: 1 },
    { q: "Which annotation marks a class as a Spring Bean?", o: ["@Bean", "@Component", "@Object", "@Spring"], a: 1 },
    { q: "The sendRedirect() method is found in which interface?", o: ["HttpServletRequest", "HttpServletResponse", "ServletConfig", "HttpSession"], a: 1 },
    { q: "Which JSP object is used to handle exceptions?", o: ["error", "exception", "fault", "problem"], a: 1 },
    { q: "Which annotation is used to define a Primary Key in Hibernate?", o: ["@Key", "@Id", "@Primary", "@Column"], a: 1 },
    { q: "What does IOC stand for in the Spring Framework?", o: ["Inversion of Control", "Input Output Control", "Integration of Components", "Internal Object Control"], a: 0 },
    { q: "Which Spring annotation is used for automatic dependency injection?", o: ["@Inject", "@Autowired", "@Connect", "@Link"], a: 1 },
    { q: "In MVC architecture, 'M' stands for:", o: ["Multi", "Model", "Mobile", "Main"], a: 1 },
    { q: "Which JDBC type 4 driver communicates directly with the:", o: ["ODBC driver", "Database Server", "Native Client Library", "Browser"], a: 1 },
    { q: "Which JSP tag is used for declarations?", o: ["<%! ... %>", "<% ... %>", "<%@ ... %>", "<%= ... %>"], a: 0 },
    { q: "Which method of Session is used to save an object in Hibernate?", o: ["save()", "persist()", "Both save() and persist()", "add()"], a: 2 },
    { q: "What is the default scope of a Spring Bean?", o: ["Prototype", "Singleton", "Request", "Session"], a: 1 },
    { q: "Which annotation handles HTTP GET requests in Spring MVC?", o: ["@PostPage", "@GetMapping", "@RequestPage", "@Mapping"], a: 1 },
    { q: "Which object is used to get the init-parameters of a servlet?", o: ["ServletConfig", "ServletContext", "ServletRequest", "HttpSession"], a: 0 },
    { q: "In Spring Boot, which annotation is the main starting point?", o: ["@Start", "@SpringBootApplication", "@Main", "@EnableSpring"], a: 1 },
    { q: "Which tag is used for comments in JSP?", o: ["", "<%-- ... --%>", "// ...", "/* ... */"], a: 1 },
    { q: "Which property shows SQL queries in the Hibernate console?", o: ["hibernate.show_sql", "hibernate.print_sql", "hibernate.sql", "show_sql"], a: 0 },
    { q: "A 'Spring Bean' is an object managed by the:", o: ["JVM", "Spring IOC container", "Database", "Browser"], a: 1 },
    { q: "Which Hibernate annotation is used to define a table name?", o: ["@DbTable", "@Table", "@Schema", "@Entity"], a: 1 },
    { q: "The DispatcherServlet in Spring MVC acts as a:", o: ["Front Controller", "View Resolver", "Bean Factory", "Database Handler"], a: 0 }
];

// Variables to track quiz state
const subject= "advjava";
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
