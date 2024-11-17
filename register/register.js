document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate Date of Birth
    const dobInput = document.getElementById("dob");
    const dobError = document.getElementById("dobError");
    const dobValue = new Date(dobInput.value);
    const today = new Date();
    const age = today.getFullYear() - dobValue.getFullYear();
    const monthDiff = today.getMonth() - dobValue.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < dobValue.getDate())
    ) {
      age--;
    }

    if (age < 18) {
      dobError.textContent = "You must be at least 18 years old.";
      dobInput.focus();
      return;
    } else {
      dobError.textContent = "";
    }

    alert("Registration successful!");
  });
