let img = document.querySelector("#img");

const botaoImagem = document.getElementById('mudaImagem');
const imagem = document.querySelector('#img img');

botaoImagem.addEventListener('click', () => {
  const novaUrl = `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
  imagem.src = novaUrl;
});