// Crie um programa que peça números até o usuário digitar 0 e mostre:
// Quantidade de números digitados
// Soma total
export function q1rep() {
    let quantidade = 0;
    let soma = 0;
    while (true) {
        let numero = Number(prompt("Digite um número (0 para sair):"));
        if (numero === 0) {
            break;
        }
        quantidade++;
        soma += numero;
    }
    console.log('Quantidade de números digitados: quantidade' + quantidade);
    console.log('Soma total: soma' + soma);
}
