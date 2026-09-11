"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q4poo = q4poo;
// Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.
// {Devido a falta de imformaçoes sobre as medidas do pisso, tomarei como padrão 1x1 metros}
function q4poo() {
    class Retangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        mudarBase(novaBase) {
            this.base = novaBase;
        }
        mudaraltura(novaAltura) {
            this.altura = novaAltura;
        }
        mostrarValores() {
            console.log(`Altura: ${this.altura}, Base: ${this.base}`);
        }
        area() {
            console.log(`a Área do retângulo é: ${this.altura * this.base}`);
        }
        perimetro() {
            console.log(`o perimetro do retangulo é: ${(this.altura * 2) + (this.base * 2)}`);
        }
    }
    let altura = Number(prompt("informe a largura: "));
    let base = Number(prompt("informe o comprimento: "));
    let Local = new Retangulo(altura, base);
    console.log(`a quntidade de pissos necesarios é: ${Local.area}`);
    console.log(`Sera necesario ${Local.perimetro} metros de roda pé`);
}
