"use strict";
// Crie um programa que leia um número e informe se ele é: 
// Par ou Ímpar
// Positivo ou Negativo 
Object.defineProperty(exports, "__esModule", { value: true });
exports.q1condi = q1condi;
function q1condi() {
    let numero = Number(prompt("Digite um número:"));
    if (numero % 2 === 0) {
        console.log("O número é Par.");
    }
    else {
        console.log("O número é Ímpar.");
    }
    if (numero > 0) {
        console.log("O número é Positivo.");
    }
    else if (numero < 0) {
        console.log("O número é Negativo.");
    }
    else {
        console.log("O número é Zero.");
    }
}
