// Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

import promptSync from 'prompt-sync';

export function questao3Calculadora(): void {
    const prompt = promptSync({ sigint: true });
    const operacao: string = (prompt("Informe a operação (soma, subtracao, multiplicacao, divisao):") || "").toLowerCase();
    const n1: number = Number(prompt("Informe o primeiro número:"));
    const n2: number = Number(prompt("Informe o segundo número:"));

    let resultado: number;

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
            } else {
                resultado = n1 / n2;
                alert(`A divisão dos números é: ${resultado}`);
            }
            break;
        default:
            console.log("Operação inválida!");
    }
}
