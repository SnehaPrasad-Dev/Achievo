/**
 * Change Email Validation Logic
 * 1. Checks if the two new email inputs match.
 * 2. Ensures the email format is valid.
 */
document.getElementById('ChangeEmailForm').addEventListener('submit', function(e) {
    const newEmail = document.getElementById('new-email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const currentEmail = document.getElementById('current-email').value;

    // 1. Check if New Email and Confirm Email are identical
    if (newEmail !== confirmEmail) {
        alert("New Email addresses do not match!");
        e.preventDefault(); // Stop form submission
        return;
    }

    // 2. Prevent using the same email as the current one
    if (newEmail === currentEmail) {
        alert("New email cannot be the same as your current email!");
        e.preventDefault();
        return;
    }

    // 3. Simple regex for basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(newEmail)) {
        alert("Please enter a valid email address!");
        e.preventDefault();
    }
});