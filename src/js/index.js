const botoes = document.querySelectorAll('.botao');


botoes.forEach(botao => {
    botao.addEventListener("click", () =>{

        const botaoSelecionado = document.querySelector(".botao.selecionado")
        botaoSelecionado.classList.remove("selecionado")
        
        console.log(botao.classList.add("selecionado"))
    });
});