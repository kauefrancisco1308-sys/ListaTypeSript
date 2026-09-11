"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q15poo = q15poo;
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e 
// assalariados (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como 
// superclasse e FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve 
// solicitar os dados via teclado e calcular o salário de cada um
function q15poo() {
    class Funcionario {
        constructor(nome) {
            this.nome = nome;
        }
    }
    class FuncionarioHorista extends Funcionario {
        constructor(nome, horasTrabalhadas, valorHora) {
            super(nome);
            this.horasTrabalhadas = horasTrabalhadas;
            this.valorHora = valorHora;
        }
        calcularSalario() {
            return this.horasTrabalhadas * this.valorHora;
        }
    }
    class FuncionarioAssalariado extends Funcionario {
        constructor(nome, salarioMensal) {
            super(nome);
            this.salarioMensal = salarioMensal;
        }
        calcularSalario() {
            return this.salarioMensal;
        }
    }
    let funcionarios = [];
    while (true) {
        let tipoFuncionario = String(prompt("Informe o tipo de funcionário (horista/assalariado) ou 'sair' para encerrar: "));
        if (tipoFuncionario === 'sair') {
            break;
        }
        let nome = String(prompt("Informe o nome do funcionário: "));
        if (tipoFuncionario === 'horista') {
            let horasTrabalhadas = Number(prompt("Informe a quantidade de horas trabalhadas: "));
            let valorHora = Number(prompt("Informe o valor da hora: "));
            funcionarios.push(new FuncionarioHorista(nome, horasTrabalhadas, valorHora));
        }
        else if (tipoFuncionario === 'assalariado') {
            let salarioMensal = Number(prompt("Informe o salário mensal: "));
            funcionarios.push(new FuncionarioAssalariado(nome, salarioMensal));
        }
    }
    for (const funcionario of funcionarios) {
        console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.calcularSalario()}`);
    }
}
