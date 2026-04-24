// Crie um programa que leia um número e informe se ele é: 
// Par ou Ímpar
// Positivo ou Negativo
import promptSync from 'prompt-sync';
const prompt = promptSync();

export function questao1condicao(): void {
    const numero = Number(prompt("Informe um numero: "));
    if (Number.isNaN(numero)) {
        console.log('Valor inválido');
        return;
    }

    if (numero === 0) {
        console.log('O número é zero');
        return;
    }

    const par = numero % 2 === 0;
    const positivo = numero > 0;

    console.log(`O número ${numero} é ${positivo ? 'positivo' : 'negativo'} e ${par ? 'par' : 'ímpar'}`);
}