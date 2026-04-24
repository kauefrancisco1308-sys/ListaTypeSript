"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({ sigint: true });
const quest_o1_1 = require("./g1/quest\u00E3o1");
const quest_o2_1 = require("./g1/quest\u00E3o2");
const quest_o3_1 = require("./g1/quest\u00E3o3");
const quest_o4_1 = require("./g1/quest\u00E3o4");
const arrays1_1 = require("./g1/arrays1");
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
            (0, quest_o1_1.questao1condicao)();
            break;
        case '2':
            (0, quest_o2_1.questao2Estacoes)();
            break;
        case '3':
            (0, quest_o3_1.questao3Calculadora)();
            break;
        case '4':
            (0, quest_o4_1.questao4Comparar)();
            break;
        case '5':
            (0, arrays1_1.questao1array)();
            break;
        default:
            console.log('Saindo.');
    }
}
main();
