// Show/hide the user account section
document.getElementById("accountButton").addEventListener("click", function() {
    const userAccountSection = document.getElementById("userAccountSection");
    userAccountSection.classList.toggle("hidden"); // Toggle visibility
});

// Upload and display a profile picture
const uploadInput = document.getElementById("uploadInput");
const profilePicture = document.getElementById("profilePicture");
const uploadButton = document.getElementById("uploadButton");

// Show the file input dialog when the upload button is clicked
uploadButton.addEventListener("click", () => {
    uploadInput.click();
});

// Listen for file selection
uploadInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicture.src = e.target.result; // Display the image
            localStorage.setItem("profilePicture", e.target.result); // Save to localStorage
        };
        reader.readAsDataURL(file);
    }
});

// Load the profile picture from localStorage if available
window.addEventListener("load", () => {
    const savedPicture = localStorage.getItem("profilePicture");
    if (savedPicture) {
        profilePicture.src = savedPicture;
    }
});

// Logout functionality
document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");
    localStorage.removeItem("profilePicture");
    window.location.href = "login.html"; // Redirect to login page
});
