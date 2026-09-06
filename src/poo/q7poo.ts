// Uma empresa quer cadastrar funcionários e aplicar aumento salarial. 
// O sistema deve pedir nome, cargo e salário. Crie um método que receba 
// um percentual de aumento e atualize o salário do funcionário, exibindo 
// o seu nome e novo valor.
export function q7poo(): void {
    class Funcionario{
        nome:string
        cargo:string
        salario:number
        constructor(nome:string,cargo:string,salario:number){
            this.nome=nome
            this.cargo=cargo
            this.salario=salario
        }
    aumento(percentual_aumento:number){
        this.salario = this.salario + (this.salario * percentual_aumento / 100);
        console.log(`Funcionário: ${this.nome}`);
        console.log(`Novo salário: ${this.salario}`);
    }
    }
    let nome = String(prompt("Informe o nome do funcionário: "));
    let cargo = String(prompt("Informe o cargo do funcionário: "));
    let salario = Number(prompt("Informe o salário do funcionário: "));
    let funcionario = new Funcionario(nome, cargo, salario);
    let percentual_aumento = Number(prompt("Informe o percentual de aumento: "));
    funcionario.aumento(percentual_aumento);
}