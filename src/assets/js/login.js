var exampleInputEmail1 = document.getElementById("exampleInputEmail1");
var exampleInputPassword1 = document.getElementById("exampleInputPassword1");
var loginBtn = document.getElementById("loginBtn");
var invalidEmail = document.getElementById("invalidEmail");
var invalidPassword = document.getElementById("invalidPassword");
var invalidForm = document.getElementById("invalidForm");

loginBtn.addEventListener("click", function (e) {
  if (
    validateEmail(exampleInputEmail1.value) &&
    validatePassword(exampleInputPassword1.value)
  ) {
    login(exampleInputEmail1.value, exampleInputPassword1.value);
  }
});
function validateEmail(email) {
  var regex = /^[a-zA-Z]{1,20}[0-9]{0,5}@(gmail|yahoo|outlook).com$/;

  if (!email) {
    invalidEmail.innerHTML = " please enter your email";
    invalidEmail.classList.remove("d-none");
    return false;
  }
  if (regex.test(email)) {
    invalidEmail.classList.add("d-none");
    return true;
  } else {
    invalidEmail.innerHTML = "enter valid email -> nour2@gmail.com ";
    invalidEmail.classList.remove("d-none");
    return false;
  }
}

function validatePassword(password) {
  var Cregex = /[A-Z]+/;
  var cregex = /[a-z]+/;
  var nregex = /[0-9]+/;
  var Sregex = /[#@_$&]+/;
  var fRegex = /[a-zA-Z0-9_#@]{6,12}$/;
  if (!password) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter  password";
    return false;
  } else if (!Cregex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter capitalize char";
    return false;
  } else if (!cregex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter small char";
    return false;
  } else if (!nregex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter number";
    return false;
  } else if (!Sregex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter special char";
    return false;
  } else if (!fRegex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter  6-12char ";
    return false;
  } else {
    invalidPassword.classList.add("d-none");
    return true;
  }
}

exampleInputPassword1.addEventListener("input", function () {
  validatePassword(exampleInputPassword1.value);
});

exampleInputEmail1.addEventListener("input", function () {
  validateEmail(exampleInputEmail1.value);
});

function login(email, password) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1:3000/users", true);

  xhr.onload = function () {
    if (this.status === 200) {
      try {
        const response = JSON.parse(this.responseText);
        if (xhr.status == 200) {
          var user = response.find(
            (user) => user.email == email && user.password == password
          );
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "/index.html";
          } else {
            invalidForm.classList.remove("d-none");
            invalidForm.innerHTML = "sorry user not found";
          }
        } else {
          invalidForm.classList.remove("d-none");
          invalidForm.innerHTML = response.message;
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  xhr.onerror = function () {
    console.log("Request Error");
  };

  xhr.send();
}

// 2 lang ar|| en ,,  Content-Type: application/json , Accept: application/json

var user = localStorage.getItem("user");
var user = JSON.parse(user);

function isLogin() {
  return user ? true : false;
}

if (user) {
  window.location.href = "/index.html";
}
