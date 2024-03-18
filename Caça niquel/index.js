let creditos = 200.00;
let aposta;
let resultado1;
let resultado2;
let resultado3;
const icones = ["🍒", "🍀", "💎"];

// Normalmente os caça niquels são 5 figuras, e a chance vai de 11% pra 4%

function atualizarCreditos() {
  document.getElementById("creditos").textContent = creditos.toFixed(2);
}

function jogar() {
  aposta = parseFloat(document.getElementById("aposta").value);

  if (aposta <= 0 || aposta > creditos || !aposta) {
    alert("Aposta inválida!");
    return;
  }

  resultado1 = icones[Math.floor(Math.random() * icones.length)];
  resultado2 = icones[Math.floor(Math.random() * icones.length)];
  resultado3 = icones[Math.floor(Math.random() * icones.length)];

  document.getElementById("icones").textContent = resultado1 + resultado2 + resultado3;

  if (resultado1 === resultado2 && resultado2 === resultado3) {
    creditos = creditos + aposta * 5;
    document.getElementById("resultado").textContent = "Você ganhou R$" + (aposta * 5).toFixed(2);
  } else {
    creditos -= aposta;
    document.getElementById("resultado").textContent = "Você perdeu";
  }

  atualizarCreditos();
}

atualizarCreditos();