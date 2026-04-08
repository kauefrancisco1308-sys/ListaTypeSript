"use strict";
// Crie um programa que leia um número e informe se ele é: 
// Par ou Ímpar
// Positivo ou Negativo
let numero = Number(prompt("infrome um numero: "));
let resultado = 0;
if (numero > 0 && numero % 2 == 0) {
    alert("o numero é positivo e par");
}
else if (numero > 0 && numero % 2 == 1) {
    alert("o numero é positivo mas não é par");
}
else if (numero < 0 && numero % 2 == 0) {
    alert("o numero é negativo e par");
}
else {
    alert("o numero é negativo e não é par");
}
