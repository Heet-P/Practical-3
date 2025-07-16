function validateForm() {
    const username = document.getElementById("fname").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const phone = document.getElementById("phone").value;
    const confirmPassword = document.getElementById("confpsd").value;
    const pincode = document.getElementById("pin").value;
    const gen = document.getElementById("gender").value;
    const email = document.getElementById("email").value;

    if (username === "" || password === "") {
        alert("FirstName and Password cannot be empty.");
        return false;
    }

    if (username.length < 3 || password.length < 6) {
        alert("Username must be at least 3 characters and Password at least 6 characters.");
        return false;
    }
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be 10 digits.");
        return false;
    }
    if(confirmPassword !== password) {
        alert("Passwords do not match.");
        return false;
    }
    if(pincode.length !== 6 || isNaN(pincode)) {
        alert("Pincode must be 6 digits.");
        return false;
    }
    if(gen.length != 1 || (gen !== "M" && gen !== "F")) {
        alert("Use capital letters only for Male (M) or Female (F).");
        return false;
    }
    if(email === "" || !email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

    else{
        alert("Form submitted successfully!");
        return true;
    }

}