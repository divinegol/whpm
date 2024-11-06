// Select elements
const profilePictureInput = document.getElementById("profilePictureInput");
const profilePicturePreview = document.getElementById("profilePicturePreview");
const changePictureButton = document.getElementById("changePictureButton");
const saveProfileButton = document.getElementById("saveProfileButton");

// Load saved profile data on page load
window.addEventListener("load", () => {
    const savedProfilePicture = localStorage.getItem("profilePicture");
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedPhone = localStorage.getItem("phone");

    // Set saved values to inputs if available
    if (savedProfilePicture) profilePicturePreview.src = savedProfilePicture;
    if (savedName) document.getElementById("name").value = savedName;
    if (savedEmail) document.getElementById("email").value = savedEmail;
    if (savedPhone) document.getElementById("phone").value = savedPhone;
});

// Change profile picture
changePictureButton.addEventListener("click", () => {
    profilePictureInput.click();
});

// Update profile picture preview when a new picture is selected
profilePictureInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicturePreview.src = e.target.result;
            localStorage.setItem("profilePicture", e.target.result); // Save the new profile picture
        };
        reader.readAsDataURL(file);
    }
});

// Save profile changes
saveProfileButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Save the profile data to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    alert("Profile updated successfully!");
});
