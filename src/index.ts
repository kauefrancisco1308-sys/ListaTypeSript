import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

import { questao1condicao } from './g1/questão1';
import { questao2Estacoes } from './g1/questão2';
import { questao3Calculadora } from './g1/questão3';
import { questao4Comparar } from './g1/questão4';
import { questao1array } from './g1/arrays1';

function main() {
    console.log('Menu de testes:');
    console.log('1 - Questão 1 (Par/Ímpar, Positivo/Negativo)');
    console.log('2 - Questão 2 (Estações)');
    console.log('3 - Questão 3 (Calculadora)');
    console.log('4 - Questão 4 (Comparar)');
    console.log('5 - Arrays (pares, ímpares, múltiplos, reversa)');
    const escolha = prompt('Escolha uma opção (ou Enter para sair): ');
    switch (escolha) {
        case '1':
            questao1condicao();
            break;
        case '2':
            questao2Estacoes();
            break;
        case '3':
            questao3Calculadora();
            break;
        case '4':
            questao4Comparar();
            break;
        case '5':
            questao1array();
            break;
        default:
            console.log('Saindo.');
    }
}

main();
