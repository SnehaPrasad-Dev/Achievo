document.getElementById('resetForm').addEventListener('submit', function(e) {
    const password = document.getElementById('new-pass').value;
    const confirmPassword = document.getElementById('confirm-pass').value;

    if (password.length<6)
     {
        alert("Password must be at least 6 characters long!");
        e.preventDefault();
    } else if (password!==confirmPassword) {
        alert("Passwords do not match!");
        e.preventDefault();
    }
});