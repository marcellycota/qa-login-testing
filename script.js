const form = document.querySelector("form");
const mensagem = document.createElement("p");

form.appendChild(mensagem);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "teste@email.com" && senha === "123456") {
        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "E-mail ou senha incorretos.";
        mensagem.style.color = "red";
    }
});