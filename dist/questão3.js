"use strict";
// Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case
let operacao = prompt("informe a operação: ");
let n1 = Number(prompt("informe o primeiro numero"));
let n2 = Number(prompt("informe o segundo numero"));
switch (operacao) {
    case "soma":
        alert("a soma dos numeros é de: " + (n1 + n2));
        break;
    case "Subtração":
        alert("a Subtração dos numeros é de: " + (n1 - n2));
        break;
    case "Multiplicação":
        alert("a Multiplicação dos numeros é de: " + (n1 * n2));
        break;
    case "Divisão":
        alert("a Divisão dos numeros é de: " + (n1 / n2));
        break;
}
