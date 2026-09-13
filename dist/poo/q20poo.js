"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q20poo = q20poo;
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o número 
// da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do pedido base, 
// mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software deve interagir com 
// o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os pedidos são criados, eles 
// entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista de pedidos, calcula os valores 
// finais de cada um (aplicando as taxas quando necessário) e exibe o faturamento total do estabelecimento.
function q20poo() {
    class Pedido {
        constructor(numeroPedido, valorIngredientes) {
            this.numeroPedido = numeroPedido;
            this.valorIngredientes = valorIngredientes;
        }
    }
    class PedidoMessa extends Pedido {
        constructor(numeroPedido, valorIngredientes) {
            super(numeroPedido, valorIngredientes);
            this.numeroMesa = numeroPedido;
        }
        calcularValorFinal() {
            return this.valorIngredientes;
        }
    }
    class PedidoDelivery extends Pedido {
        constructor(numeroMesa, valorIngredientes, taxaEntrega, enderecoDestino) {
            super(numeroMesa, valorIngredientes);
            this.taxaEntrega = taxaEntrega;
            this.enderecoDestino = enderecoDestino;
        }
        calcularValorFinal() {
            return this.valorIngredientes + this.taxaEntrega;
        }
    }
    let pedidos = [];
    while (true) {
        let opcao = prompt("Digite 1 para Pedido de Mesa, 2 para Pedido Delivery, 3 para encerrar, 0 para sair:");
        if (opcao === "0") {
            break;
        }
        else if (opcao === "1") {
            let numeroMesa = parseInt(String(prompt("Digite o número da mesa:")) || "0");
            let valorIngredientes = parseFloat(String(prompt("Digite o valor dos ingredientes:")) || "0");
            let pedidoMesa = new PedidoMessa(numeroMesa, valorIngredientes);
            pedidos.push(pedidoMesa);
            console.log("Pedido de mesa cadastrado com sucesso!");
        }
        else if (opcao === "2") {
            let numeroMesa = parseInt(String(prompt("Digite o número da mesa:")) || "0");
            let valorIngredientes = parseFloat(String(prompt("Digite o valor dos ingredientes:")) || "0");
            let taxaEntrega = parseFloat(String(prompt("Digite a taxa de entrega:")) || "0");
            let enderecoDestino = String(prompt("Digite o endereço de destino:"));
            let pedidoDelivery = new PedidoDelivery(numeroMesa, valorIngredientes, taxaEntrega, enderecoDestino);
            pedidos.push(pedidoDelivery);
            console.log("Pedido delivery cadastrado com sucesso!");
        }
    }
    let faturamentoTotal = 0;
    while (pedidos.length > 0) {
        let pedido = pedidos.pop();
        if (pedido instanceof PedidoMessa) {
            faturamentoTotal += pedido.calcularValorFinal();
        }
        else if (pedido instanceof PedidoDelivery) {
            faturamentoTotal += pedido.calcularValorFinal();
        }
    }
    console.log(`Faturamento total: R$ ${faturamentoTotal.toFixed(2)}`);
}
