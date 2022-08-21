document.getElementById("submit-btn").addEventListener('click', function () {
    // Get email
    const emailField = document.getElementById("email-submit");
    const email = emailField.value;

    // Get password
    const passField = document.getElementById("password-submit");
    const password = passField.value;

    if (email === "yamin.raad@gmail.com" && password === "pandro")
        window.location.href = 'bank.html';
    else
        alert("Invalid email or password.")
});