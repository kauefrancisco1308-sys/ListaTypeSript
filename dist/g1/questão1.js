"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questao1condicao = questao1condicao;
// Crie um programa que leia um número e informe se ele é: 
// Par ou Ímpar
// Positivo ou Negativo
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function questao1condicao() {
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
