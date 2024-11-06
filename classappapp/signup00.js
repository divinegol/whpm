document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get user input values
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // Save data to localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);

    // Show success message and redirect to login
    alert("Sign Up Successful! You can now login.");
    window.location.href = "login.html"; // Redirect to login page
});
