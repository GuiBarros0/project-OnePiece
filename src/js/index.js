const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () =>{

        const botaoSelecionado = document.querySelector(".botao.selecionado")
        botaoSelecionado.classList.remove("selecionado")

        console.log(botao.classList.add("selecionado"))

        const personagemSelecionado = document.querySelector(".personagem.selecionado")
        personagemSelecionado.classList.remove("selecionado")

        personagens[i].classList.add("selecionado")
    });
});