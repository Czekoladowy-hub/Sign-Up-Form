const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");
const passwordMatchInformation = document.querySelector(
  ".password__match-information"
);

function checkPassword() {
  let password = document.querySelector("#password").value;
  let passwordConfirm = document.querySelector("#password-confirm").value;
  if (
    password !== passwordConfirm ||
    (password === "") & (passwordConfirm === "")
  ) {
    passwordMatchInformation.textContent = "*Password do not match";
    passwordInput.classList.add("password__do-not-match");
    passwordConfirmInput.classList.add("password__do-not-match");
  } else {
    passwordMatchInformation.textContent = "";
    passwordInput.classList.remove("password__do-not-match");
    passwordConfirmInput.classList.remove("password__do-not-match");
  }
}
