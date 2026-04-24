"use strict";
// Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questao3Calculadora = questao3Calculadora;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
function questao3Calculadora() {
    const prompt = (0, prompt_sync_1.default)({ sigint: true });
    const operacao = (prompt("Informe a operação (soma, subtracao, multiplicacao, divisao):") || "").toLowerCase();
    const n1 = Number(prompt("Informe o primeiro número:"));
    const n2 = Number(prompt("Informe o segundo número:"));
    let resultado;
    switch (operacao) {
        case "soma":
        case "1":
            resultado = n1 + n2;
            alert(`A soma dos números é: ${resultado}`);
            break;
        case "subtracao":
        case "2":
            resultado = n1 - n2;
            alert(`A subtração dos números é: ${resultado}`);
            break;
        case "multiplicacao":
        case "3":
            resultado = n1 * n2;
            alert(`A multiplicação dos números é: ${resultado}`);
            break;
        case "divisao":
        case "4":
            if (n2 === 0) {
                alert("Erro: não é possível dividir por zero!");
            }
            else {
                resultado = n1 / n2;
                alert(`A divisão dos números é: ${resultado}`);
            }
            break;
        default:
            console.log("Operação inválida!");
    }
}
