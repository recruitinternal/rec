const users = {
  "admin": { password: "admin123", role: "Admin" },
  "entry": { password: "entry123", role: "Data Entry" }
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error");

  if (users[username] && users[username].password === password) {
    document.querySelector(".login-box").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("user-role").innerText = users[username].role;

    if (users[username].role === "Admin") {
      document.getElementById("admin-section").style.display = "block";
      document.getElementById("data-entry-section").style.display = "block";
    } else {
      document.getElementById("admin-section").style.display = "none";
      document.getElementById("data-entry-section").style.display = "block";
    }

  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
}
