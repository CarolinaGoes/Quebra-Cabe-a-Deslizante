let img = document.querySelector("#img");
let peca1 = document.querySelector("#peca1");
let peca2 = document.querySelector("#peca2");
let peca3 = document.querySelector("#peca3");
let peca4 = document.querySelector("#peca4");
let peca5 = document.querySelector("#peca5");
let peca6 = document.querySelector("#peca6");
let peca7 = document.querySelector("#peca7");
let peca8 = document.querySelector("#peca8");
let peca9 = document.querySelector("#peca9");
let pecas = [peca1, peca2, peca3, peca4, peca5, peca6, peca7, peca8,peca9];

const botaoImagem = document.getElementById('mudaImagem');
const imagem = document.querySelector('#img img');

botaoImagem.addEventListener('click', () => {
  const novaUrl = `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
  imagem.src = novaUrl;
});

function embaralhar() {
    forEach.pecas((peca))=> {
        let randomPosition = Math.floor(Math.random() * 9);
        if 

}

function embaralhar();