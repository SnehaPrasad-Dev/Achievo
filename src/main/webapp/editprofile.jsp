<%@ page session="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Profile</title>
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/forgot.css">
    <link rel="stylesheet" href="css/editprofile.css">
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
        <a href="index.html">Home</a>
        <a href="mock.html">Mock Tests</a>
        <a href="studymaterial.html">Study Material</a>
        <a href="settings.html">Settings</a>
    </div>
    <div class="auth-container">
    <div class="auth-card profile-card">
        <h2>Edit Your Profile</h2>

        <div class="profile-circle"></div>

        <form action="UpdateProfileServlet" method="POST" class="profile-form">

    <div class="input-group">
        <label>Full Name</label>
        <input type="text" name="displayName"
        value="<%=session.getAttribute("fullname") %>"required>
    </div>

    <div class="input-group">
        <label>Email Address</label>
        <input type="email" name="email" value="<%= session.getAttribute("email") %>" readonly>
    </div>

    <div class="input-group">
        <label>Current Password</label>
        <input type="password" name="currentPassword" placeholder="Enter current password" 
               required autocomplete="new-password">
    </div>

    <div class="input-group">
        <label>New Password</label>
        <input type="password" name="newPassword" placeholder="Enter new password"
               autocomplete="new-password">
    </div>

    <button type="submit" class="auth-btn">Save Changes</button>

    <button type="button" class="cancel-btn" onclick="window.location.href='settings.html'">
        Cancel
    </button>

    </form>
    </div>
</div>
<script src="forgot.js"></script>
</body>
</html>