/* Desenvolva aqui a rotina */
let valor_base = document.getElementById("valor_base");
let valor_transporte = document.getElementById("valor_transporte");
let valor_alimentacao = document.getElementById("valor_alimentacao");
let valor_receita = document.getElementById("valor_receita");
let valor_automovel = document.getElementById("valor_automovel");
let faltas = document.getElementById("faltas");
let valor_descontos = document.getElementById("valor_descontos");
let valor_total = document.getElementById("valor_total");

function calcular() {
  let receita_total = Number(valor_base.value) + Number(valor_transporte.value) + Number(valor_alimentacao.value);
  valor_receita.value = receita_total;

  let descontos_total = Number(valor_automovel.value) + Number(faltas.value);
  valor_descontos.value = descontos_total;

  let total = receita_total - descontos_total;
  valor_total.value = total;
}

let btn_calcular = document.getElementById("btn_calcular");
btn_calcular.addEventListener("click", calcular);

valor_base.addEventListener("change", calcular);
valor_transporte.addEventListener("change", calcular);
valor_alimentacao.addEventListener("change", calcular);
valor_automovel.addEventListener("change", calcular);
faltas.addEventListener("change", calcular);