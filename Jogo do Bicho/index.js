const container = document.getElementById('checkbox-container');
container.style.flexWrap = "wrap"; // Allow wrapping to new lines
container.style.justifyContent = "space-around";
const imagemElement = document.getElementById("minhaImagem");

function createCheckbox(number) {
  const label = document.createElement('label');
  label.for = `checkbox${number}`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `checkbox${number}`;

  const image = document.createElement('img');
  image.src = `./img/${number}.png`;
  image.alt = `Imagem ${number}`;

  label.appendChild(checkbox);
  label.appendChild(image);
  container.appendChild(label);
}

for (let i = 1; i <= 25; i++) {
  createCheckbox(i);
}

function selectCheckbox(image) {
  const checkbox = image.parentNode.querySelector("input[type='checkbox']");
  checkbox.checked = !checkbox.checked;
}

function gerarNum() {
  return Math.floor(Math.random() * 100).toString().padStart(2, '0');
}

function mostrarImagem(numero) {
  const indiceImagem = Math.floor((numero - 1) / 4);
  imagemElement.src = `./img/${indiceImagem + 1}.png`;

  if(numero == 0){
    imagemElement.src = `./img/25.png`;
  }
}

function jogar() {
  const resultado1 = gerarNum();
  const resultado2 = gerarNum();

  document.getElementById("resultado1").textContent = `${resultado1}${resultado2}`;
  mostrarImagem(resultado2);
}
