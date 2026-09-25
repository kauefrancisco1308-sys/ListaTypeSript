// Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case
export function q3condi() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let operacao = Number(prompt("Escolha a operação: 1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão"));
    switch (operacao) {
        case 1:
            console.log('A soma de ' + num1 + ' e ' + num2 + ' é: ' + (num1 + num2));
            break;
        case 2:
            console.log('A subtração de ' + num1 + ' e ' + num2 + ' é: ' + (num1 - num2));
            break;
        case 3:
            console.log('A multiplicação de ' + num1 + ' e ' + num2 + ' é: ' + (num1 * num2));
            break;
        case 4:
            console.log('A divisão de ' + num1 + ' e ' + num2 + ' é: ' + (num1 / num2));
            break;
        default:
            console.log("Operação inválida. Por favor, escolha uma operação válida.");
    }
}
