"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q9poo = q9poo;
// Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do 
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. 
// Crie um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação 
// para cada produto.
function q9poo() {
    class Produto {
        constructor(nome, preco, quantidade) {
            this.nome = nome;
            this.preco = preco;
            this.quantidade = quantidade;
        }
        valorTotalEmEstoque() {
            return this.preco * this.quantidade;
        }
    }
    let produtos = [];
    while (true) {
        let nome = String(prompt("Informe o nome do produto (ou digite 'sair' para encerrar): "));
        if (nome.toLowerCase() === 'sair') {
            break;
        }
        let preco = Number(prompt("Informe o preço do produto: "));
        let quantidade = Number(prompt("Informe a quantidade em estoque do produto: "));
        let produto = new Produto(nome, preco, quantidade);
        produtos.push(produto);
    }
    for (let produto of produtos) {
        console.log(`Produto: ${produto.nome}`);
        console.log(`Preço: ${produto.preco}`);
        console.log(`Quantidade em estoque: ${produto.quantidade}`);
        console.log(`Valor total em estoque: ${produto.valorTotalEmEstoque()}`);
    }
}
