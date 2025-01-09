var user = localStorage.getItem("user");
var username = document.getElementById("username");
var loginDiv = document.getElementById("loginDiv");
var profileDiv = document.getElementById("profileDiv");

var user = JSON.parse(user);

function isLogin() {
  return user ? true : false;
}

if (user) {
  username.innerHTML = user.username;
  loginDiv.classList.add("d-none");
  profileDiv.classList.remove("d-none");
} else {
  loginDiv.classList.remove("d-none");
  profileDiv.classList.add("d-none");
}

function logout() {
  if (window.confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("user");
    location.href = "/pages/login.html";
  }
}
