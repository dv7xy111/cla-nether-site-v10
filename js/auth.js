// GARANTE QUE O JS SÓ RODE DEPOIS DO HTML
document.addEventListener("DOMContentLoaded", () => {

  const btnLogin = document.getElementById("btnLogin");
  const btnRegister = document.getElementById("btnRegister");

  // LOGIN
  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      const user = document.getElementById("loginUser").value;
      const pass = document.getElementById("loginPass").value;

      // ADMIN FIXO
      if (user === "admin" && pass === "123") {
        localStorage.setItem("role", "admin");
        location.href = "admin.html";
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[user] === pass) {
        localStorage.setItem("role", "user");
        localStorage.setItem("username", user);
        location.href = "user.html";
      } else {
        alert("Usuário ou senha inválidos");
      }
    });
  }

  // CADASTRO
  if (btnRegister) {
    btnRegister.addEventListener("click", () => {
      const user = document.getElementById("regUser").value;
      const pass = document.getElementById("regPass").value;

      if (!user || !pass) {
        alert("Preencha todos os campos");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[user]) {
        alert("Usuário já existe");
        return;
      }

      users[user] = pass;
      localStorage.setItem("users", JSON.stringify(users));

      alert("Cadastro realizado!");
      location.href = "index.html";
    });
  }

});
