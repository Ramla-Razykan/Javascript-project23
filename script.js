function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    messageElement.innerHTML = "";

    if (inputPassword.length < 6) {
        messageElement.innerHTML = "Error: Password must be at least 6 characters long.";
        messageElement.className = "message error";
        return;
    }

    const hasUpperCase = /[A-Z]/.test(inputPassword);
    const hasLowerCase = /[a-z]/.test(inputPassword);
    const hasNumbers = /[0-9]/.test(inputPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);

    let strengthMessage = "";
    if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar) {
        strengthMessage = "Strong password.";
    } else {
        strengthMessage = "Weak password. A strong password should include:";
        if (!hasUpperCase) strengthMessage += "<br>- At least one uppercase letter.";
        if (!hasLowerCase) strengthMessage += "<br>- At least one lowercase letter.";
        if (!hasNumbers) strengthMessage += "<br>- At least one number.";
        if (!hasSpecialChar) strengthMessage += "<br>- At least one special character.";
    }

    messageElement.innerHTML = strengthMessage;
    messageElement.className = "message " + (strengthMessage.includes("Weak") ? "error" : "success");
}