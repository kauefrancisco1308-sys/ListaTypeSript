"use strict";
// Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais;
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.
Object.defineProperty(exports, "__esModule", { value: true });
exports.q4condi = q4condi;
function q4condi() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    if (num1 === num2) {
        console.log("Números iguais");
    }
    else if (num1 > num2) {
        console.log("Primeiro é maior");
    }
    else {
        console.log("Segundo é maior");
    }
}
