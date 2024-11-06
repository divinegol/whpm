document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get input values
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Get stored data from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedPhone = localStorage.getItem("phone");

    // Check if the login credentials match
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        // Show user details
        document.getElementById("userDetails").style.display = "block";
        document.getElementById("userEmail").innerText = `Email: ${storedEmail}`;
        document.getElementById("userPhone").innerText = `Phone: ${storedPhone}`;
    } else {
        alert("Invalid email or password.");
    }
});
