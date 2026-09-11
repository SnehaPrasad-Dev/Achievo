document.getElementById('forgotForm').addEventListener('submit', function(e) {
    const email = document.getElementById('forgot-email').value;
    if (!email.includes('@')) {
        alert("Valid email enter karein!");
        e.preventDefault();
    }
});