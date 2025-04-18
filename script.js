const botaoImagem = document.getElementById('mudaImagem');
const imagem = document.querySelector('#img img');
const pecas = document.querySelectorAll('.peca');

botaoImagem.addEventListener('click', () => {
  const seed = Math.floor(Math.random() * 1000);
  const novaUrl = `https://picsum.photos/seed/${seed}/300/300`;

  imagem.src = novaUrl;

  pecas.forEach(peca => {
    peca.style.backgroundImage = `url(${novaUrl})`;
  });
});

const container = document.querySelector('.container');
const pecaVazia = document.getElementById('peca9');

let grid = [
  [document.getElementById('peca1'), document.getElementById('peca2'), document.getElementById('peca3')],
  [document.getElementById('peca4'), document.getElementById('peca5'), document.getElementById('peca6')],
  [document.getElementById('peca7'), document.getElementById('peca8'), document.getElementById('peca9')],
];

function encontrarPosicaoVazia() {
  for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      if (grid[linha][coluna] === pecaVazia) {
        return { linha, coluna };
      }
    }
  }
}

function trocarPecas(linha1, col1, linha2, col2) {
  const temp = grid[linha1][col1];
  grid[linha1][col1] = grid[linha2][col2];
  grid[linha2][col2] = temp;

  updateDOM();
}

function updateDOM() {
  container.innerHTML = '';
  for (let linha of grid) {
    for (let peca of linha) {
      container.appendChild(peca);
    }
  }
}

document.addEventListener('keydown', (e) => {
  const { linha, coluna } = encontrarPosicaoVazia();

  if (e.key === 'ArrowUp' && linha < 2) {
    trocarPecas(linha, coluna, linha + 1, coluna);
  } else if (e.key === 'ArrowDown' && linha > 0) {
    trocarPecas(linha, coluna, linha - 1, coluna);
  } else if (e.key === 'ArrowLeft' && coluna < 2) {
    trocarPecas(linha, coluna, linha, coluna + 1);
  } else if (e.key === 'ArrowRight' && coluna > 0) {
    trocarPecas(linha, coluna, linha, coluna - 1);
  }
});

function embaralhar() {
  for (let i = 0; i < 1000; i++) {
    const { linha, coluna } = encontrarPosicaoVazia();
    const possibleMoves = [];

    if (linha > 0) possibleMoves.push('up');
    if (linha < 2) possibleMoves.push('down');
    if (coluna > 0) possibleMoves.push('left');
    if (coluna < 2) possibleMoves.push('right');

    const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    switch (move) {
      case 'up':
        trocarPecas(linha, coluna, linha - 1, coluna);
        break;
      case 'down':
        trocarPecas(linha, coluna, linha + 1, coluna);
        break;
      case 'left':
        trocarPecas(linha, coluna, linha, coluna - 1);
        break;
      case 'right':
        trocarPecas(linha, coluna, linha, coluna + 1);
        break;
    }
  }
}

embaralhar();
