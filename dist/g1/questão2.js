"use strict";
// Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: "A estação do ano correspondente
// ao mês 3 é Verão" Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questao2Estacoes = questao2Estacoes;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
function questao2Estacoes() {
    const prompt = (0, prompt_sync_1.default)({ sigint: true });
    const mes = Number(prompt("Insira o número do mês desejado:"));
    if (Number.isNaN(mes)) {
        console.log('Valor inválido');
        return;
    }
    if (mes >= 1 && mes <= 3) {
        console.log(`A estação do ano correspondente ao mês ${mes} é Verão!`);
    }
    else if (mes >= 4 && mes <= 6) {
        console.log(`A estação do ano correspondente ao mês ${mes} é Outono!`);
    }
    else if (mes >= 7 && mes <= 9) {
        console.log(`A estação do ano correspondente ao mês ${mes} é Inverno!`);
    }
    else if (mes >= 10 && mes <= 12) {
        console.log(`A estação do ano correspondente ao mês ${mes} é Primavera!`);
    }
    else {
        console.log(`Não existe mês ${mes}!!!`);
    }
}
