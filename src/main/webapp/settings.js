let sidebarOpen = false;

function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const mainContent = document.getElementById("main");

    if (!sidebarOpen) {
        // Open Sidebar & Push Content
        sidebar.style.width = "250px";
        mainContent.style.marginLeft = "250px";
        sidebarOpen = true;
    } else {
        // Close Sidebar & Reset Content
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
        sidebarOpen = false;
    }
}