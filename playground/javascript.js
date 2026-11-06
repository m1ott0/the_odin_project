const perfil = {
    nome: 'felipe',
    idade: 15,
    altura: '1,81m',

    computador: {
        processor: 'ryzen 7 5700x',
        placaDeVideo: 'rx 7900xt',
    },
    turnOn() {
        console.log('uau')
        console.log('teste')
    }
};
delete perfil.idade
const selecionado = perfil.computador.processor