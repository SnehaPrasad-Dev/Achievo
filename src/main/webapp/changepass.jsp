<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Password - Achievo</title>
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/changepass.css">
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
                <h2>Change Password</h2>
                <p>Set your new password below</p><br>
                <p id="msg">
                <%= session.getAttribute("msg") != null ? session.getAttribute("msg") : "" %>
               </p>

                <%
                   session.removeAttribute("msg"); // clear after showing
                %>

                <form action="<%= request.getContextPath() %>/ChangePasswordServlet" method="Post">
                    <div class="input-group">
                        <input type="password" name="currentPassword" id="current-pass" placeholder="Current Password" required>
                    </div>
                    <div class="input-group">
                        <input type="password" name="newPassword" id="new-pass" placeholder="New Password" required>
                    </div>
                    <div class="input-group">
                        <input type="password" name="confirmPassword" id="confirm-pass" placeholder="Confirm Password" required>
                    </div>
                      <a href="forgot.html">Forgot Password?</a>
                    <button type="submit" class="auth-btn">Update Password</button>
                    <button type="button" class="cancel-btn" onclick="window.history.back()">Cancel</button>
                </form>
            </div>
        </div>
    </div>

    <script src="navbar.js"></script>
    <script src="changepass.js"></script>
</body>
</html>