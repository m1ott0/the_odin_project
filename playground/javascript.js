const botoes = document.querySelectorAll('.opcao')
const paragrafo = document.querySelector('#resultado')
botoes.forEach(function(botao) {
    botao.addEventListener('click', function(event) {
        paragrafo.textContent = 'Tecnologia escolhida: ' + event.target.textContent
        event.target.classList.add('escolhida')
    })
})