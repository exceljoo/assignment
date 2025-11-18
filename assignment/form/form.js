// Predefined existing usernames
const existingUsers = ["joshua", "john", "james"];

// Select all form elements
const form = document.querySelector("form");
const nameInput = form.querySelectorAll("input")[0];
const usernameInput = form.querySelectorAll("input")[1];
const emailInput = form.querySelectorAll("input")[2];
const phoneInput = form.querySelectorAll("input")[3];
const passwordInput = form.querySelectorAll("input")[4];
const confirmPasswordInput = form.querySelectorAll("input")[5];
const usernameMessage = document.querySelector("#username");
const passwordMessage = document.querySelector("#password");

// Username validation (live)
usernameInput.addEventListener("input", () => {
  const enteredUsername = usernameInput.value.trim().toLowerCase();
  if (existingUsers.includes(enteredUsername)) {
    usernameMessage.textContent = "Username already exists";
    usernameMessage.style.color = "red";
  } else {
    usernameMessage.textContent = "";
  }
});

// Password match validation (live)
confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    passwordMessage.textContent = "Password does not match";
    passwordMessage.style.color = "red";
  } else {
    passwordMessage.textContent = "";
  }
});

// Form validation on submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from submitting immediately

  // Check for empty fields
  if (nameInput.value.trim() === "") {
    alert("Name cannot be empty");
    return;
  }
  if (usernameInput.value.trim() === "") {
    alert("Username cannot be empty");
    return;
  }
  if (emailInput.value.trim() === "") {
    alert("Email cannot be empty");
    return;
  }
  if (phoneInput.value.trim() === "") {
    alert("Phone number cannot be empty");
    return;
  }
  if (passwordInput.value.trim() === "") {
    alert("Password cannot be empty");
    return;
  }
  if (confirmPasswordInput.value.trim() === "") {
    alert("Confirm password cannot be empty");
    return;
  }

  // Check for existing username
  if (existingUsers.includes(usernameInput.value.trim().toLowerCase())) {
    alert("Username already exists");
    return;
  }

  // Check for password match
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Passwords do not match");
    return;
  }

  // If all validations pass
  alert("Signup successful!");
  form.reset();
  usernameMessage.textContent = "";
  passwordMessage.textContent = "";
});