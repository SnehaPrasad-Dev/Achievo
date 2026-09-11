// 3. Sidebar open/close function with PUSH EFFECT
function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    // Maan lijiye aapka main content ek div me hai jiski class 'content' hai
    const content = document.querySelector(".content");

    // Sidebar toggle karein
    sidebar.classList.toggle("active");

    // Content push logic
    if (sidebar.classList.contains("active")) {
        content.classList.add("content-shifted");
    } else {
        content.classList.remove("content-shifted");
    }
}