const notifyForm = document.getElementById("notify-form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
notifyForm.addEventListener("submit", function (e) {
  e.preventDefault();
  email.classList.remove("input-error");
  errorMsg.classList.add("hidden");
  console.log("submitdd");
  if (!email.validity.valid) {
    console.log("error");
    email.classList.add("input-error");
    errorMsg.classList.remove("hidden");
  } else {
    email.value = "";
  }
});
