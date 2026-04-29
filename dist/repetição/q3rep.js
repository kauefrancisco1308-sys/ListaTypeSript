"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q3rep = q3rep;
// Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o programa.
// Calcule e imprima: 
// Salário total dos funcionários, o maior salário, juntamente com o nome de quem o recebeu; 
// O número de funcionários do sexo masculino e feminino cadastrado; 
// O percentual de funcionários homens e mulheres cadastrados.
function q3rep() {
    let salarioTotal = 0;
    let maiorSalario = 0;
    let nomeMaiorSalario = "";
    let quantidadeHomens = 0;
    let quantidadeMulheres = 0;
    while (true) {
        let nome = prompt("Digite o nome do funcionário:");
        let horasTrabalhadas = Number(prompt("Digite as horas trabalhadas:"));
        let salarioHora = Number(prompt("Digite o salário por hora:"));
        let sexo = prompt("Digite o sexo do funcionário (M/F):");
        let salarioFuncionario = horasTrabalhadas * salarioHora;
        salarioTotal += salarioFuncionario;
        if (salarioFuncionario > maiorSalario) {
            maiorSalario = salarioFuncionario;
            //nomeMaiorSalario = nome;
        }
        if (sexo === "M") {
            quantidadeHomens++;
        }
        else if (sexo === "F") {
            quantidadeMulheres++;
        }
        let continuar = prompt("Deseja continuar? (S/N):");
        if (continuar !== "S") {
            break;
        }
    }
    console.log("Salário total dos funcionários: " + salarioTotal);
    console.log("Maior salário: " + maiorSalario + " - Nome: " + nomeMaiorSalario);
    console.log("Número de funcionários do sexo masculino: " + quantidadeHomens);
    console.log("Número de funcionários do sexo feminino: " + quantidadeMulheres);
    let totalFuncionarios = quantidadeHomens + quantidadeMulheres;
    let percentualHomens = (quantidadeHomens / totalFuncionarios) * 100;
    let percentualMulheres = (quantidadeMulheres / totalFuncionarios) * 100;
    console.log("Percentual de funcionários homens: " + percentualHomens.toFixed(2) + "%");
    console.log("Percentual de funcionários mulheres: " + percentualMulheres.toFixed(2) + "%");
}
