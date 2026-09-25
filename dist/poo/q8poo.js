// Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar 
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve 
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de todos 
// os funcionários cadastrados, utilizando um método da classe.
export function q8poo() {
    class CadastrarFuncionario {
        constructor(nome, cargo, salario) {
            this.nome = nome;
            this.cargo = cargo;
            this.salario = salario;
        }
        resumo() {
            console.log(`Nome: ${this.nome}`);
            console.log(`Cargo: ${this.cargo}`);
            console.log(`Salário: ${this.salario}`);
        }
    }
    let funcionarios = [];
    while (true) {
        let nome = String(prompt("Informe o nome do funcionário (ou digite 'sair' para encerrar): "));
        if (nome.toLowerCase() === 'sair') {
            break;
        }
        let cargo = String(prompt("Informe o cargo do funcionário: "));
        let salario = Number(prompt("Informe o salário do funcionário: "));
        let funcionario = new CadastrarFuncionario(nome, cargo, salario);
        funcionarios.push(funcionario);
    }
    for (let funcionario of funcionarios) {
        funcionario.resumo();
    }
}
