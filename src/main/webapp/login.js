document.getElementById('loginForm').addEventListener('submit', function(e) {
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;

    if (email === "" || password === "") {
        alert("Please fill all fields!");
        e.preventDefault(); // Form submit hone se rok dega
    } else {
        console.log("Sending data to Servlet...");
        // Form normal submit hoga Servlet par
    }
});