const form = document.querySelector('form');

let creditos = 200.00;
let aposta;
let resultado1;
let resultado2;
let naipe1;
let naipe2;
let resultado;

const numeros = [
  { nome: "A", valor: 13 },
  { nome: "K", valor: 12 },
  { nome: "J", valor: 11 },
  { nome: "Q", valor: 10 },
  { nome: "10", valor: 9 },
  { nome: "9", valor: 8 },
  { nome: "8", valor: 7 },
  { nome: "7", valor: 6 },
  { nome: "6", valor: 5 },
  { nome: "5", valor: 4 },
  { nome: "4", valor: 3 },
  { nome: "3", valor: 2 },
  { nome: "2", valor: 1 },
];
const naipes = ["♠️", "♥️", "♦️", "♣️"];

function atualizarCreditos() {
  document.getElementById("creditos").textContent = creditos.toFixed(2);
}

function jogar() {
  const opcoes = form.querySelector('input[name="opcoes"]:checked');
  aposta = parseFloat(document.getElementById("aposta").value);

  if (aposta <= 0 || aposta > creditos || !aposta) {
    alert("Aposta inválida!");
    return;
  }

  resultado1 = numeros[Math.floor(Math.random() * numeros.length)];
  resultado2 = numeros[Math.floor(Math.random() * numeros.length)];
  naipe1 = naipes[Math.floor(Math.random() * naipes.length)];
  naipe2 = naipes[Math.floor(Math.random() * naipes.length)];

  document.getElementById("icones").textContent = `${resultado1.nome}${naipe1}   vs   ${resultado2.nome}${naipe2}`;

  if (resultado1.valor === resultado2.valor) {
    document.getElementById("resposta").textContent = "Empate";
    resultado = 2;
  } else if (resultado1.valor > resultado2.valor) {
    document.getElementById("resposta").textContent = "Time da Casa ganhou 💚";
    resultado = 1;
  } else {
    document.getElementById("resposta").textContent = "Time Visitante ganhou 💙";
    resultado = 3;
  }

  if (opcoes.value == resultado) {
    creditos += aposta;
    document.getElementById("resultado").textContent = "Você ganhou R$" + aposta.toFixed(2);
  } else {
    creditos -= aposta;
    document.getElementById("resultado").textContent = "Você perdeu";
  }

  atualizarCreditos();
}

atualizarCreditos();