var exampleInputEmail1 = document.getElementById("exampleInputEmail1");
var exampleInputPassword1 = document.getElementById("exampleInputPassword1");
var loginBtn = document.getElementById("loginBtn");
var invalidEmail = document.getElementById("invalidEmail");
var invalidPassword = document.getElementById("invalidPassword");
var invalidForm = document.getElementById("invalidForm");

loginBtn.addEventListener("click", function (e) {
  if (
    validateEmail(exampleInputEmail1) &&
    validatePassword(exampleInputPassword1)
  ) {
  } else {
    invalidEmail.classList.add("d-none");
    invalidPassword.classList.add("d-none");
    invalidForm.classList.remove("d-none");
    invalidForm.innerHTML = "invalid email or password";
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
exampleInputEmail1.addEventListener("input", function () {
  validateEmail(exampleInputEmail1.value);
  console.log(validateEmail(exampleInputEmail1.value));
});

function validatePassword(password) {
  var Cregex = /[A-Z]+/;
  var cregex = /[a-z]+/;
  var nregex = /[0-9]+/;
  var Sregex = /[#@_$&]+/;
  var fRegex = /[a-zA-Z0-9_#@]{6,12}$/;
  if (!password) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter  password";
  } else if (!Cregex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter capitalize char";
  } else if (!cregex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter small char";
  } else if (!nregex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter number";
  } else if (!Sregex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter special char";
  } else if (!fRegex.test(password)) {
    invalidPassword.classList.remove("d-none");
    invalidPassword.innerHTML = "please enter  6-12char ";
  } else {
    invalidPassword.classList.add("d-none");
  }
}

exampleInputPassword1.addEventListener("input", function () {
  validatePassword(exampleInputPassword1.value);
});
