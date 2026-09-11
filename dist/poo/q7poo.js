"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q7poo = q7poo;
// Uma empresa quer cadastrar funcionários e aplicar aumento salarial. 
// O sistema deve pedir nome, cargo e salário. Crie um método que receba 
// um percentual de aumento e atualize o salário do funcionário, exibindo 
// o seu nome e novo valor.
function q7poo() {
    class Funcionario {
        constructor(nome, cargo, salario) {
            this.nome = nome;
            this.cargo = cargo;
            this.salario = salario;
        }
        aumento(percentual_aumento) {
            this.salario = this.salario + (this.salario * percentual_aumento / 100);
            console.log(`Funcionário: ${this.nome}`);
            console.log(`Novo salário: ${this.salario}`);
        }
    }
    let nome = String(prompt("Informe o nome do funcionário: "));
    let cargo = String(prompt("Informe o cargo do funcionário: "));
    let salario = Number(prompt("Informe o salário do funcionário: "));
    let funcionario = new Funcionario(nome, cargo, salario);
    let percentual_aumento = Number(prompt("Informe o percentual de aumento: "));
    funcionario.aumento(percentual_aumento);
}
