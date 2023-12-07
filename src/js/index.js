let inputPadrao = document.querySelectorAll(".input-item");
const btnEnviar = document.querySelector(".btn");

btnEnviar.addEventListener('click', function () {
    inputPadrao.forEach(function (input) {
        if (input.children[0].value !== "") {
            input.classList.remove("vazio");
            input.classList.add("preenchido");
            input.children[1].classList.remove("aviso-ativo");
        } else {
            input.classList.remove(".preenchido");
            input.classList.add("vazio");
            input.children[1].classList.add("aviso-ativo");
        }
    });
});