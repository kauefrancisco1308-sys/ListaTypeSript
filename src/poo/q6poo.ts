// Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir 
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido
// que ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.
export function q6poo(): void {
    class Conta_Corrente{
        numero_conta:number
        nome_correntista:string
        saldo=0
        constructor(numero_conta:number,nome_correntista:string){
            this.nome_correntista=nome_correntista
            this.numero_conta=numero_conta
        }
        alterarNome(NovoNome:string){
            this.nome_correntista=NovoNome
        }
        deposito(NovoDeposito:number){
            this.saldo=this.saldo+NovoDeposito
        }
        saque(NovoSaque:number){
            if(NovoSaque<=this.saldo){
                this.saldo=this.saldo-NovoSaque
            }else{
                console.log("Saldo insuficiente!")
                console.log(`O valor deve ser igual ou menor que ${this.saldo}`)
            }
        }
    }
    let numero = Number(prompt("informe o numero da conta: "))
    let nome = String(prompt("infotme seu nome: "))
    let nova_conta=new Conta_Corrente(numero,nome)
    let acao = prompt("dijite a ação: depositar-D/saque-S/sair-0")?.toUpperCase()
    while(true){
        if(acao === "D"){
            let deposito = Number(prompt("informe o valor do deposito: "))
            nova_conta.deposito(deposito)
            console.log(`O saldo atual é: ${nova_conta.saldo}`)
            acao = prompt("dijite a ação: depositar-D/saque-S/sair-0")?.toUpperCase()
        }else if(acao === "S"){
            let saque = Number(prompt("informe o valor do saque: "))
            nova_conta.saque(saque)
            console.log(`O saldo atual é: ${nova_conta.saldo}`)
            acao = prompt("dijite a ação: depositar-D/saque-S/sair-0")?.toUpperCase()
        }else if(acao === "0"){
            break
        }else{
            console.log("Ação invalida!")
            acao = prompt("dijite a ação: depositar-D/saque-S/sair-0")?.toUpperCase()
        }
    }
}