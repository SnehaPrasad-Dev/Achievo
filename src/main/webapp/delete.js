/**
 * Delete Account Confirmation Logic
 * 1. Prevents accidental clicks by showing a confirmation dialog.
 * 2. Checks if fields are filled before submitting to the servlet.
 */
document.getElementById('DeleteAccountForm').addEventListener('submit', function(e) {
    const email = document.getElementById('confirm-email').value;
    const password = document.getElementById('confirm-password').value;

    // 1. Basic check to ensure fields aren't just whitespace
    if (!email.trim() || !password.trim()) {
        alert("Please fill in both fields to proceed.");
        e.preventDefault();
        return;
    }

    // 2. Final Browser Confirmation
    const finalWarning = confirm("Are you absolutely sure? All your data will be permanently erased.");
    
    if (!finalWarning) {
        // If user clicks "Cancel" in the alert box, stop the form
        e.preventDefault();
    }
});