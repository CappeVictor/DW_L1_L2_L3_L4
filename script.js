// Mostra o objetivo da demonstração ao clicar no botão.
"use strict";

const botaoMensagem = document.querySelector("#botao-mensagem");
const mensagem = document.querySelector("#mensagem");

botaoMensagem.addEventListener("click", () => {
  mensagem.textContent =
    "Praticar flex-wrap, gap, align-items e align-content.";
});
