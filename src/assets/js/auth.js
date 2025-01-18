var user = localStorage.getItem("user");
var username = document.getElementById("username");
var loginDiv = document.querySelector("[data-loginDiv]");
var profileDiv = document.getElementById("profileDiv");

var user = JSON.parse(user);

function isLogin() {
  return user ? true : false;
}

if (user) {
  username.innerHTML = user.username;
  loginDiv.classList.add("hidden");
  profileDiv.classList.remove("hidden");
} else {
  loginDiv.classList.remove("hidden");
  profileDiv.classList.add("hidden");
}

function logout() {
  if (window.confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("user");
    location.href = "/pages/login.html";
  }
}
