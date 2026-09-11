document.getElementById('registerForm').addEventListener('submit', function(e) {
    // Input values ko variables me store kiya
    const password = document.getElementById('reg-pass').value;
    const confirmPassword = document.getElementById('reg-cpass').value;

    // Logic: Agar passwords match nahi karte
    if (password !== confirmPassword) {
        alert("Invalid Password!");
        
        // e.preventDefault() form ko submit (Servlet par jane) se rok deta hai
        e.preventDefault(); 
    } else {
        // Agar sab sahi hai
        console.log("Validation pass!");
    }
});