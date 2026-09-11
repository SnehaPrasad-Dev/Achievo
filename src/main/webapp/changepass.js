document.getElementById('ChangePasswordForm').addEventListener('submit', function(e) {
    const p1 = document.getElementById('new-pass').value;
    const p2 = document.getElementById('confirm-pass').value;

    if (p1 !== p2) {
        alert("Passwords do not match");
        e.preventDefault(); // Stop form submission
    } else if (p1.length < 6) {
        alert("Password should be of atleast 6 letters!");
        e.preventDefault();
    }
});