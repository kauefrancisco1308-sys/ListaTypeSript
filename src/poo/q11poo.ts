// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, 
// o nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.
export function q11poo(): void {
    class Pedido {
        nomeCliente: string
        nomePedido: string
        valor: number
        constructor(nomeCliente: string, nomePedido: string, valor: number) {
            this.nomeCliente = nomeCliente
            this.nomePedido = nomePedido
            this.valor = valor
        }
        resumo() {
            console.log(`Cliente: ${this.nomeCliente}`)
            console.log(`Pedido: ${this.nomePedido}`)
            console.log(`Valor: ${this.valor}`)
        }
    }
    let nomeCliente = String(prompt("Informe o nome do cliente: "))
    let nomePedido = String(prompt("Informe o nome do pedido: "))
    let valor = Number(prompt("Informe o valor do pedido: "))
    let pedido = new Pedido(nomeCliente, nomePedido, valor)
    pedido.resumo()
}