"use strict";
// Ler dois valores e imprimir uma das três mensagens a seguir:
// ● 'Números iguais', caso os números sejam iguais;
// ● 'Primeiro é maior', caso o primeiro seja maior que o segundo;
// ● 'Segundo maior', caso o segundo seja maior que o primeiro.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questao4Comparar = questao4Comparar;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
function questao4Comparar() {
    const prompt = (0, prompt_sync_1.default)({ sigint: true });
    const valor1 = Number(prompt("Informe um valor:"));
    const valor2 = Number(prompt("Informe outro valor:"));
    if (valor1 === valor2) {
        console.log("Números iguais");
    }
    else if (valor1 > valor2) {
        console.log("Primeiro é maior");
    }
    else {
        console.log("Segundo maior");
    }
}
