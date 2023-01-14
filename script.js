const passOne = document.querySelector("#first-password");
const passTwo = document.querySelector("#second-password");
const matchText = document.querySelector(".match-pass");
console.log(passOne);
window.onkeyup = keyup;
function keyup() {
  comparePassword();
}
function comparePassword() {
  console.log(passOne.value);
  console.log("");
  let passOneLength = passOne.value.length;
  let passTwoLength = passTwo.value.length;
  console.log(passOneLength);

  if (passOne.value === passTwo.value) {
    matchText.textContent = "Passwords Match";
    matchText.classList.add("valid-match-pass");
    passOne.classList.remove("error");
    passOne.classList.add("valid-pass");
    passTwo.classList.remove("error");
    passTwo.classList.add("valid-pass");
  } else if (passOne.value !== passTwo.value) {
    matchText.textContent = "Passwords do not match";
    matchText.classList.remove("valid-match-pass");
    matchText.classList.add("valid-match");
    passOne.classList.add("error");
    passOne.classList.remove("valid-pass");
    passTwo.classList.add("error");
    passTwo.classList.remove("valid-pass");
  }
  if ((passOneLength & passTwoLength )=== 0) {
    matchText.textContent = "Passwords do not match";
    matchText.classList.remove("valid-match-pass");
    matchText.classList.add("valid-match");
    passOne.classList.add("error");
    passOne.classList.remove("valid-pass");
    passTwo.classList.add("error");
    passTwo.classList.remove("valid-pass");
  }
}
