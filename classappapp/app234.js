 // Show main content and hide loading screen after 1 seconds
 window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);
});

// Get the dots element
const dotsElement = document.getElementById("dots");
let dotCount = 1;

// Function to animate the dots
function animateDots() {
    // Add dots up to 4, then reset
    dotsElement.textContent = ".".repeat(dotCount);
    dotCount = (dotCount % 4) + 1;
}

// Interval to animate dots every 500ms
const dotInterval = setInterval(animateDots, 500);

// Simulate loading process (e.g., 5 seconds)
setTimeout(() => {
    // Hide loading screen and show main content
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    // Stop the dots animation
    clearInterval(dotInterval);
}, 5000); // Adjust time as needed

function toggleSidebar() {
    const sidebar = document.getElementById('sidebarMenu');
    sidebar.classList.toggle('active');
}

// Select the logout button
const logoutButton = document.getElementById("logoutButton");

// Event listener for logout
logoutButton.addEventListener("click", function() {
    // Clear the user's data from localStorage (or sessionStorage)
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");

    // Redirect to the login page
    window.location.href = "login.html";
});
