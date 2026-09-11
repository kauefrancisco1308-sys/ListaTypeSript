"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q12poo = q12poo;
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, 
// o valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule 
// o valor total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja 
// fazer uma nova locação.
function q12poo() {
    class Locacao {
        constructor(modeloCarro, valorDiaria, quantidadeDias) {
            this.modeloCarro = modeloCarro;
            this.valorDiaria = valorDiaria;
            this.quantidadeDias = quantidadeDias;
        }
        valorTotalAluguel() {
            return this.valorDiaria * this.quantidadeDias;
        }
        resumo() {
            console.log(`Modelo do carro: ${this.modeloCarro}`);
            console.log(`Valor da diária: ${this.valorDiaria}`);
            console.log(`Quantidade de dias: ${this.quantidadeDias}`);
            console.log(`Valor total do aluguel: ${this.valorTotalAluguel()}`);
        }
    }
    while (true) {
        let modeloCarro = String(prompt("Informe o modelo do carro: "));
        let valorDiaria = Number(prompt("Informe o valor da diária: "));
        let quantidadeDias = Number(prompt("Informe a quantidade de dias que deseja alugar: "));
        let locacao = new Locacao(modeloCarro, valorDiaria, quantidadeDias);
        locacao.resumo();
        let novaLocacao = String(prompt("Deseja fazer uma nova locação? (sim/não): "));
        if (novaLocacao.toLowerCase() !== 'sim') {
            break;
        }
    }
}
