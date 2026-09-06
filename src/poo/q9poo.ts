// Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do 
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. 
// Crie um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação 
// para cada produto.
export function q9poo(): void {
    class Produto {
        nome: string
        preco: number
        quantidade: number
        constructor(nome: string, preco: number, quantidade: number) {
            this.nome = nome
            this.preco = preco
            this.quantidade = quantidade
        }   
        valorTotalEmEstoque(): number {
            return this.preco * this.quantidade
        }
    }
    let produtos: Produto[] = []
    while (true) {
        let nome = String(prompt("Informe o nome do produto (ou digite 'sair' para encerrar): "))
        if (nome.toLowerCase() === 'sair') {
            break
        }
        let preco = Number(prompt("Informe o preço do produto: "))
        let quantidade = Number(prompt("Informe a quantidade em estoque do produto: "))
        let produto = new Produto(nome, preco, quantidade)
        produtos.push(produto)
    }   
    for (let produto of produtos) {
        console.log(`Produto: ${produto.nome}`)
        console.log(`Preço: ${produto.preco}`)
        console.log(`Quantidade em estoque: ${produto.quantidade}`)
        console.log(`Valor total em estoque: ${produto.valorTotalEmEstoque()}`)
    }
}