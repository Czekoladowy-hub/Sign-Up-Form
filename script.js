const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const passwordMatchInformation = document.querySelector(
  ".password__match-information"
);

if (password.textContent === passwordConfirm.textContent) {
  passwordMatchInformation.textContent = "*Password do not match";
}
