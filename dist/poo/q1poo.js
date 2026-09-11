"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q1poo = q1poo;
// Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor
function q1poo() {
    class Bola {
        constructor(cor, circunferencia, material) {
            this.cor = cor;
            this.circunferencia = circunferencia;
            this.material = material;
        }
        trocarCor(novaCor) {
            this.cor = novaCor;
        }
        mostraCor(mostracor) {
            console.log("A cor da bola é: " + this.cor);
        }
    }
    let bola = new Bola("vermelha", 34, "metal");
    bola.mostraCor;
    bola.trocarCor("verde");
    bola.mostraCor;
}
