// Ler dois valores e imprimir uma das três mensagens a seguir:
// ● 'Números iguais', caso os números sejam iguais;
// ● 'Primeiro é maior', caso o primeiro seja maior que o segundo;
// ● 'Segundo maior', caso o segundo seja maior que o primeiro.

import promptSync from 'prompt-sync';

export function questao4Comparar(): void {
    const prompt = promptSync({ sigint: true });
    const valor1: number = Number(prompt("Informe um valor:"));
    const valor2: number = Number(prompt("Informe outro valor:"));

    if (valor1 === valor2) {
        console.log("Números iguais");
    } else if (valor1 > valor2) {
        console.log("Primeiro é maior");
    } else {
        console.log("Segundo maior");
    }
}
