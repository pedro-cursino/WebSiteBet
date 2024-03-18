let creditos = 200.00;
let aposta;
let resultado;
const form = document.querySelector('form');

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

  resultado = Math.random() * 100;

  if (opcoes.value == 1) {
    if (resultado <= 48.6) {
      creditos += aposta;
      document.getElementById("resultado").textContent = "Você ganhou R$" + aposta.toFixed(2);
    } else {
      creditos -= aposta;
      document.getElementById("resultado").textContent = "Você perdeu";
    }
  } else {
    if (resultado <= 2.7) {
      creditos = creditos + (aposta * 36);
      document.getElementById("resultado").textContent = "Você ganhou R$" + (aposta * 36).toFixed(2);
    } else {
      creditos -= aposta;
      document.getElementById("resultado").textContent = "Você perdeu";
    }
  }



  atualizarCreditos();
}

atualizarCreditos();