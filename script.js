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
const pecasElementos = {
  peca1: peca1,
  peca2: peca2,
  peca3: peca3,
  peca4: peca4,
  peca5: peca5,
  peca6: peca6,
  peca7: peca7,
  peca8: peca8,
  peca9: peca9
};

// BOTÃO MUDAR IMAGEM
const botaoImagem = document.getElementById('mudaImagem');
const imagem = document.querySelector('#img img');

botaoImagem.addEventListener('click', () => {
  const novaUrl = `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
  imagem.src = novaUrl;
});
// FIM BOTÃO MUDAR IMAGEM

const pecasComPosicoes = {};
for (const pecaId in pecasElementos) {
  pecasComPosicoes[pecaId] = Math.floor(Math.random() * 9);
}

function embaralhar() {
    for (const pecaId in pecasElementos) {
      const peca = pecasElementos[pecaId];
      const posicao = pecasComPosicoes[pecaId];
  
      if (pecaId === "peca1") { 
        peca.style.backgroundPosition = '0px 0px';
      } else if (posicao === 1) {
        peca.style.backgroundPosition = '-100px 0px';
      } else if (posicao === 2) {
        peca.style.backgroundPosition = '-200px 0px';
      } else if (posicao === 3) {
        peca.style.backgroundPosition = '0px -100px';
      } else if (posicao === 4) {
        peca.style.backgroundPosition = '-100px -100px';
      } else if (posicao === 5) {
        peca.style.backgroundPosition = '-200px -100px';
      } else if (posicao === 6) {
        peca.style.backgroundPosition = '0px -200px';
      } else if (posicao === 7) {
        peca.style.backgroundPosition = '-100px -200px';
      } else if (posicao === 8) {
        peca.style.backgroundColor = 'white';
      }
    }
  };

embaralhar();