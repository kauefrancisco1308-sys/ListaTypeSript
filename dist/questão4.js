"use strict";
// Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.
let valor1 = Number(prompt("informe um valor"));
let valor2 = Number(prompt("informe outro valor"));
if (valor1 == valor2) {
    alert("Números iguais");
}
else if (valor1 > valor2) {
    alert("Primeiro é maior");
}
else if (valor1 < valor2) {
    alert("Segundo maior");
}
