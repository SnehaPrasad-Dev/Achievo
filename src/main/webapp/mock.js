// Function to handle subject selection logic
document.querySelectorAll('.btn-select').forEach(button => {
    button.addEventListener('click', function() {
        
        // 1. Get the card element which was clicked
        // closest('.card') finds the parent card div of the clicked button
        const card = this.closest('.card');
        
        // 2. Get the subject name from the card's heading
        const subject = card.querySelector('.subject-name').innerText;

        // 3. Remove 'active' class from all other cards
        // This ensures only one card is highlighted at a time
        document.querySelectorAll('.card').forEach(c => {
            c.classList.remove('active');
        });

        // 4. Add 'active' class to the currently clicked card
        card.classList.add('active');

        // 5. Log the selection for debugging (Visible in Browser Console)
        console.log("User selected the subject: " + subject);

        // Future Logic: 
        // Here we can add redirection like window.location.href = "topics.html";
    });
});