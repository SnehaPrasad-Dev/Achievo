<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Account - Achievo</title>
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/changepass.css"> 
    <link rel="stylesheet" href="css/delete.css">
</head>
<body>

    <nav class="top-nav">
        <div class="nav-left">
            <div class="menu-icon" onclick="toggleSidebar()">&#9776;</div>
            <div class="logo-container">
                <img src="images/navlogo (2).jpeg" alt="Achievo Logo">
            </div>
        </div>
    </nav>

    <div id="mySidebar" class="sidebar">
        <a href="start.html">Home</a>
        <a href="editprofile.html">Profile</a>
        <a href="mock.html">Mock Tests</a>
        <a href="studymaterial.html">Study Material</a>
        <a href="settings.html">Settings</a>
    </div>

    <div id="main">
        <div class="auth-container">
            <div class="auth-card">
    
                
                <h2>Delete Account</h2>
                <p style="color: #ffbaba; font-weight: bold;">Warning: This action is permanent and cannot be undone.</p>
                <p style="color:yellow; font-weight:bold;">
     				<%= session.getAttribute("msg") != null ? session.getAttribute("msg") : "" %>
				</p>

				<%
   						 session.removeAttribute("msg");
				%>
                <form action="<%= request.getContextPath() %>/DeleteAccountServlet" method="POST" id="DeleteAccountForm">
                    <div class="input-group">
                        <input type="email" name="userEmail" id="confirm-email" placeholder="Confirm your Email" required>
                    </div>
                    <div class="input-group">
                        <input type="password" name="password" id="confirm-password" placeholder="Enter Password to Confirm" required>
                    </div>
                    
                    <button type="submit" class="auth-btn" style="background: #d93025;">Delete My Account</button>
                    <button type="button" class="cancel-btn" onclick="window.history.back()">Keep My Account</button>
                </form>
            </div>
        </div>
    </div>

    <script src="navbar.js"></script>
    <script src="delete.js"></script>
</body>
</html>