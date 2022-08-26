const togglePassword = document.querySelector("#togglePassword");

const password = document.querySelector("#id_password");

togglePassword.addEventListener("click", function (e) {
  // type of toggle
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);

  // to toggle the slash icon
  this.classList.toggle("fa-eye-slash");
});


