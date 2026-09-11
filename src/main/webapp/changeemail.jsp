<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Email - Achievo</title>
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/changepass.css"> </head>
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
                
                
                <h2>Change Email</h2>
                <p>Enter your new email address below</p>
                <p style="color:yellow; font-weight:bold;">
                 <%= session.getAttribute("msg") != null ? session.getAttribute("msg") : "" %>
               </p>

                <%
                     session.removeAttribute("msg");
                %>

                <form action="<%= request.getContextPath() %>/ChangeEmailServlet" method="POST" id="ChangeEmailForm">
                    <div class="input-group">
                        <input type="email" name="currentEmail" id="current-email" placeholder="Current Email Address" required>
                    </div>
                    <div class="input-group">
                        <input type="email" name="newEmail" id="new-email" placeholder="New Email Address" required>
                    </div>
                    <div class="input-group">
                        <input type="email" name="confirmEmail" id="confirm-email" placeholder="Confirm New Email" required>
                    </div>
                    
                    <button type="submit" class="auth-btn">Update Email</button>
                    <button type="button" class="cancel-btn" onclick="window.history.back()">Cancel</button>
                </form>
            </div>
        </div>
    </div>

    <script src="navbar.js"></script>
    <script src="changeemail.js"></script>
</body>
</html>