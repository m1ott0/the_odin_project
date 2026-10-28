const botao = document.querySelector('#botao')
const titulo = botao.getAttribute('title')
botao.setAttribute('title', 'Pronto para continuar')
botao.removeAttribute('title')