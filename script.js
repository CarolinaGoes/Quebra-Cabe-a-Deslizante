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
let pecas = [peca1, peca2, peca3, peca4, peca5, peca6, peca7, peca8, peca9];

const botaoImagem = document.getElementById('mudaImagem');
const imagem = document.querySelector('#img img');

botaoImagem.addEventListener('click', () => {
  const novaUrl = `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
  imagem.src = novaUrl;
});

function embaralhar() {
  const posicoesAleatorias = pecas.map(() => Math.floor(Math.random() * 9));

  peca1.style.order = posicoesAleatorias[0];
  peca2.style.order = posicoesAleatorias[1];
  peca3.style.order = posicoesAleatorias[2];
  peca4.style.order = posicoesAleatorias[3];
  peca5.style.order = posicoesAleatorias[4];
  peca6.style.order = posicoesAleatorias[5];
  peca7.style.order = posicoesAleatorias[6];
  peca8.style.order = posicoesAleatorias[7];
  peca9.style.order = posicoesAleatorias[8];

  if (posicoesAleatorias[0] === 0) {
    peca1.style.backgroundPosition = '0px 0px';
  } else if (posicoesAleatorias[0] === 1) {
    peca1.style.backgroundPosition = '-100px 0px';
  } else if (posicoesAleatorias[0] === 2) {
    peca1.style.backgroundPosition = '-200px 0px';
  } else if (posicoesAleatorias[0] === 3) {
    peca1.style.backgroundPosition = '0px -100px';
  } else if (posicoesAleatorias[0] === 4) {
    peca1.style.backgroundPosition = '-100px -100px';
  } else if (posicoesAleatorias[0] === 5) {
    peca1.style.backgroundPosition = '-200px -100px';
  } else if (posicoesAleatorias[0] === 6) {
    peca1.style.backgroundPosition = '0px -200px';
  } else if (posicoesAleatorias[0] === 7) {
    peca1.style.backgroundPosition = '-100px -200px';
  } else if (posicoesAleatorias[0] === 8) {
    peca1.style.backgroundColor = 'white';
  }
}

embaralhar();