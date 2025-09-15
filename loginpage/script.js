function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const institution = document.getElementById("institution").value;
  const errorMsg = document.getElementById("error-msg");

  if (institution === "default") {
    alert("⚠ Please select an institution.");
    return;
  }

  // Dummy credentials (replace with backend authentication)
  if (username === "student01" && password === "pass123") {
    alert("✅ Welcome to " + institution.toUpperCase() + " Timetable Portal 🎓");
    errorMsg.style.display = "none";
  } else {
    errorMsg.style.display = "block";
  }
}
