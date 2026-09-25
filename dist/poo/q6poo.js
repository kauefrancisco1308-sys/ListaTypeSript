// Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir 
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido
// que ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.
export function q6poo() {
    var _a, _b, _c, _d;
    class Conta_Corrente {
        constructor(numero_conta, nome_correntista) {
            this.saldo = 0;
            this.nome_correntista = nome_correntista;
            this.numero_conta = numero_conta;
        }
        alterarNome(NovoNome) {
            this.nome_correntista = NovoNome;
        }
        deposito(NovoDeposito) {
            this.saldo = this.saldo + NovoDeposito;
        }
        saque(NovoSaque) {
            if (NovoSaque <= this.saldo) {
                this.saldo = this.saldo - NovoSaque;
            }
            else {
                console.log("Saldo insuficiente!");
                console.log(`O valor deve ser igual ou menor que ${this.saldo}`);
            }
        }
    }
    let numero = Number(prompt("informe o numero da conta: "));
    let nome = String(prompt("infotme seu nome: "));
    let nova_conta = new Conta_Corrente(numero, nome);
    let acao = (_a = prompt("dijite a ação: depositar-D/saque-S/sair-0")) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    while (true) {
        if (acao === "D") {
            let deposito = Number(prompt("informe o valor do deposito: "));
            nova_conta.deposito(deposito);
            console.log(`O saldo atual é: ${nova_conta.saldo}`);
            acao = (_b = prompt("dijite a ação: depositar-D/saque-S/sair-0")) === null || _b === void 0 ? void 0 : _b.toUpperCase();
        }
        else if (acao === "S") {
            let saque = Number(prompt("informe o valor do saque: "));
            nova_conta.saque(saque);
            console.log(`O saldo atual é: ${nova_conta.saldo}`);
            acao = (_c = prompt("dijite a ação: depositar-D/saque-S/sair-0")) === null || _c === void 0 ? void 0 : _c.toUpperCase();
        }
        else if (acao === "0") {
            break;
        }
        else {
            console.log("Ação invalida!");
            acao = (_d = prompt("dijite a ação: depositar-D/saque-S/sair-0")) === null || _d === void 0 ? void 0 : _d.toUpperCase();
        }
    }
}
