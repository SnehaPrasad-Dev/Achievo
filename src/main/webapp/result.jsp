<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Test Result - Achievo</title>
    <link rel="stylesheet" href="css/result.css">
    <link rel="stylesheet" href="css/navbar.css">
</head>

<body>

<nav class="top-nav">
    <div class="nav-left">
        <div class="menu-icon" onclick="toggleSidebar()">&#9776;</div>
        <div class="logo-container">
            <img src="images/navlogo (2).jpeg" alt="Achievo Logo">
        </div>
    </div>
    <div class="nav-buttons">
        <button class="login"><a href="home.html">Logout</a></button>
    </div>
</nav>

<div id="mySidebar" class="sidebar">
    <a href="start.html">Home</a>
    <a href="editprofile.html">Profile</a>
    <a href="mock.html">Mock Tests</a>
    <a href="studymaterial.html">Study Material</a>
    <a href="settings.html">Settings</a>
</div>

<main class="content">
    <div class="result-container">

        <div class="result-header">
            <h2 id="set-name"></h2>
        </div>

        <div class="score-circle">
            <span class="percent" id="display-percent">0%</span>
            <span class="label">Score</span>
        </div>

        <div class="stats-grid">
            <div class="stat-box">
                <label>Total Questions</label>
                <span id="total-q">30</span>
            </div>

            <div class="stat-box">
                <label>Attempted</label>
                <span id="attempted">0</span>
            </div>

            <div class="stat-box">
                <label>Skipped</label>
                <span id="skipped">0</span>
            </div>

            <div class="stat-box">
                <label>Correct</label>
                <span id="correct" style="color: green;">0</span>
            </div>

            <div class="stat-box">
                <label>Total Marks</label>
                <span id="total-m">30</span>
            </div>

            <div class="stat-box">
                <label>Obtained Marks</label>
                <span id="obtained-m">0</span>
            </div>
        </div>

        <div class="btn-group">
            <button class="btn btn-next" onclick="handleNavigation()">Next Set</button>
            <button class="btn btn-exit"><a href="mock.html">Exit</a></button>
        </div>

    </div>
</main>

<script src="navbar.js"></script>


<script>
window.onload = function() {
	document.getElementById("display-percent").innerText = '<%= session.getAttribute("percent") %>%';
	document.getElementById("correct").innerText = '<%= session.getAttribute("correct") %>';
	document.getElementById("attempted").innerText = '<%= session.getAttribute("attempted") %>';
	document.getElementById("skipped").innerText = '<%= session.getAttribute("skipped") %>';
	document.getElementById("total-q").innerText = '<%= session.getAttribute("total") %>';
	document.getElementById("obtained-m").innerText = '<%= session.getAttribute("correct") %>';

    document.getElementById("set-name").innerText =
        "<%= session.getAttribute("fullname") %>'s <%= session.getAttribute("subject") %> SET <%= session.getAttribute("set") %> RESULT";
};
</script>


<script>
function handleNavigation() {

    let currentSet = "<%= session.getAttribute("set") %>";
    let attempted = <%= session.getAttribute("attempted") %>;
    let total = <%= session.getAttribute("total") %>;

   
    if (currentSet == "1" && attempted < total) {
        alert("Complete all 30 questions in Set 1 to start Set 2");
        return;
    }

   
    if (currentSet == "1") {
        window.location.href = "qadvjava.html?set=2";
    } else {
        alert("You have completed all sets!");
    }
}
</script>

</body>
</html>