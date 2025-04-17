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

let arrayPosicoesAleatorias; // Variável global para armazenar as posições

function posicoesAleatorias() {
  arrayPosicoesAleatorias = pecas.map(() => Math.floor(Math.random() * 9));

  peca1.style.order = arrayPosicoesAleatorias[0];
  peca2.style.order = arrayPosicoesAleatorias[1];
  peca3.style.order = arrayPosicoesAleatorias[2];
  peca4.style.order = arrayPosicoesAleatorias[3];
  peca5.style.order = arrayPosicoesAleatorias[4];
  peca6.style.order = arrayPosicoesAleatorias[5];
  peca7.style.order = arrayPosicoesAleatorias[6];
  peca8.style.order = arrayPosicoesAleatorias[7];
  peca9.style.order = arrayPosicoesAleatorias[8];
}

posicoesAleatorias();

function embaralhar() {
  for (let i = 0; i < pecas.length; i++) {
    if (arrayPosicoesAleatorias[i] === 0) {
      pecas[i].style.backgroundPosition = '0px 0px';
    } else if (arrayPosicoesAleatorias[i] === 1) {
      pecas[i].style.backgroundPosition = '-100px 0px';
    } else if (arrayPosicoesAleatorias[i] === 2) {
      pecas[i].style.backgroundPosition = '-200px 0px';
    } else if (arrayPosicoesAleatorias[i] === 3) {
      pecas[i].style.backgroundPosition = '0px -100px';
    } else if (arrayPosicoesAleatorias[i] === 4) {
      pecas[i].style.backgroundPosition = '-100px -100px';
    } else if (arrayPosicoesAleatorias[i] === 5) {
      pecas[i].style.backgroundPosition = '-200px -100px';
    } else if (arrayPosicoesAleatorias[i] === 6) {
      pecas[i].style.backgroundPosition = '0px -200px';
    } else if (arrayPosicoesAleatorias[i] === 7) {
      pecas[i].style.backgroundPosition = '-100px -200px';
    } else if (arrayPosicoesAleatorias[i] === 8) {
      pecas[i].style.backgroundColor = 'white';
    }
  }
};

embaralhar();