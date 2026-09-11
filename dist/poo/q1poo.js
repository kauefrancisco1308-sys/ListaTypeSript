"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q1poo = q1poo;
// Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor
function q1poo() {
    var _a;
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
    let cor = String(prompt("informe a cor da bola: "));
    let circun = Number(prompt("informe a circunferencia: "));
    let material = String(prompt("informe o material"));
    let bola = new Bola(cor, circun, material);
    bola.mostraCor;
    let trocar = String((_a = prompt("deseja trocar a cor? S/N")) === null || _a === void 0 ? void 0 : _a.toUpperCase);
    while (true) {
        if (trocar === "S") {
            let NovaCor = String(prompt("informe a nova cor"));
            bola.trocarCor(NovaCor);
            bola.mostraCor;
        }
        else if (trocar === "N") {
            break;
        }
        else {
            alert("algo deu errado! tente novamente!");
        }
    }
}
