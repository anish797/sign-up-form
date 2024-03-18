document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    const password = document.querySelector("#pw");
    const confirmPassword = document.querySelector("#cpw");
    const errorDiv = document.querySelector(".error");

    if (password.value !== confirmPassword.value) {
      errorDiv.innerText = "*Passwords do not match";
      password.classList.add("error-border");
      confirmPassword.classList.add("error-border");
      event.preventDefault();
    } else {
      errorDiv.innerText = "";
      password.classList.remove("error-border");
      confirmPassword.classList.remove("error-border");
    }
  });
});
