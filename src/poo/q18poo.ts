// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos do IFS necessita de um novo software para gerenciar e calcular a folha salarial mensal 
// de seus colaboradores. Sabe-se que todos os colaboradores do instituto possuem características fundamentais em comum: 
// um nome, uma matrícula e um salário base. Por questões de segurança, esses três dados não podem ser acessados diretamente 
// de fora da classe, exigindo métodos públicos específicos para sua leitura e modificação. Além disso, a classe base deve 
// conter um método para calcular o salário, que por padrão retorna apenas o valor do salário base.

// No entanto, o IFS possui três categorias distintas de funcionários, que herdam as características
// da classe base, mas possuem regras próprias para o cálculo da remuneração final. A primeira categoria 
// é a de Professor, que possui como atributo privado o seu regime de trabalho (por exemplo, "DE" para Dedicação Exclusiva); 
// caso o regime seja "DE", o professor recebe um acréscimo de 20% sobre o seu salário base no momento do cálculo salarial. 
// A segunda categoria é a de Técnico Administrativo, que possui um atributo privado para armazenar o valor fixo de um auxílio-alimentação 
// de R$ 1.000,00, valor este que deve ser somado ao seu salário base no cálculo final. A terceira categoria é a de Diretor, que possui como 
// atributos privados o seu departamento e o valor de uma gratificação de função, que também deve ser incorporada ao salário base no cálculo de 
// sua remuneração.

// Para o funcionamento do sistema, o programa deve rodar dentro de um laço de repetição contínuo que interaja com o usuário. A cada iteração, 
// o software deve perguntar qual tipo de funcionário se deseja cadastrar (Professor, Técnico Administrativo ou Diretor) ou se o usuário deseja 
// encerrar o programa. Conforme a escolha, o sistema deve solicitar os dados do colaborador via teclado, inseri-los no objeto correto e acionar o 
// método de cálculo salarial específico de cada um de forma polimórfica. O programa deve utilizar variáveis acumuladoras dentro do laço para somar 
// e acompanhar os custos parciais de cada categoria. Por fim, quando o usuário optar por encerrar o cadastro, o laço deve ser interrompido e o 
// software exibirá um relatório final contendo o custo total gasto com os professores, o custo total com os técnicos administrativos, o custo 
// total com os diretores e, por último, o custo total geral que a instituição terá com a folha de pagamento daquele mês.
export function q18poo(): void {
abstract class Funcionario {
    private nome: string
    private matricula: string
    private salarioBase: number
    constructor(nome: string, matricula: string, salarioBase: number) {
        this.nome = nome
        this.matricula = matricula
        this.salarioBase = salarioBase
    }
    getNome(): string {
        return this.nome
    }
    getMatricula(): string {
        return this.matricula
    }
    getSalarioBase(): number {
        return this.salarioBase
    }
    setNome(nome: string): void {
        this.nome = nome
    }
    setMatricula(matricula: string): void {
        this.matricula = matricula
    }
    setSalarioBase(salarioBase: number): void {
        this.salarioBase = salarioBase
    }
    abstract calcularSalario(): number
}
class Professor extends Funcionario {
    private regime: string 
    constructor(nome: string, matricula: string, salarioBase: number, regime: string) {
        super(nome, matricula, salarioBase)
        this.regime = regime
    }
    calcularSalario(): number {
        if (this.regime === "DE") {
            return this.getSalarioBase() * 1.2
        }
        return this.getSalarioBase()
    }
}
class TecnicoAdministrativo extends Funcionario {
    private auxilioAlimentacao: number = 1000
    constructor(nome: string, matricula: string, salarioBase: number) {
        super(nome, matricula, salarioBase)
    }
    calcularSalario(): number {
        return this.getSalarioBase() + this.auxilioAlimentacao
    }
}
class Diretor extends Funcionario {
    private departamento: string
    private gratificacao: number
    constructor(nome: string, matricula: string, salarioBase: number, departamento: string, gratificacao: number) {
        super(nome, matricula, salarioBase)
        this.departamento = departamento
        this.gratificacao = gratificacao
    }
    calcularSalario(): number {
        return this.getSalarioBase() + this.gratificacao
    }
}
while (true) {
    let opcao = prompt("Digite 1 para Professor, 2 para Técnico Administrativo, 3 para Diretor, 0 para encerrar:")
    if (opcao === "0") {
        break
    }else if (opcao === "1") {
        let nome = String(prompt("Digite o nome do professor:"))
        let matricula = String(prompt("Digite a matrícula do professor:"))
        let salarioBase = parseFloat(String(prompt("Digite o salário base do professor:")) || "0")
        let regime = String(prompt("Digite o regime de trabalho do professor (DE ou outro):"))
        let professor = new Professor(nome, matricula, salarioBase, regime)
        console.log(`Salário final do professor ${professor.getNome()}: R$ ${professor.calcularSalario().toFixed(2)}`)
    }else if (opcao === "2") {
        let nome = String(prompt("Digite o nome do técnico administrativo:"))
        let matricula = String(prompt("Digite a matrícula do técnico administrativo:"))
        let salarioBase = parseFloat(String(prompt("Digite o salário base do técnico administrativo:")) || "0")
        let tecnico = new TecnicoAdministrativo(nome, matricula, salarioBase)
        console.log(`Salário final do técnico administrativo ${tecnico.getNome()}: R$ ${tecnico.calcularSalario().toFixed(2)}`)
    }else if (opcao === "3") {
        let nome = String(prompt("Digite o nome do diretor:"))
        let matricula = String(prompt("Digite a matrícula do diretor:"))
        let salarioBase = parseFloat(String(prompt("Digite o salário base do diretor:")) || "0")
        let departamento = String(prompt("Digite o departamento do diretor:"))
        let gratificacao = parseFloat(String(prompt("Digite a gratificação do diretor:")) || "0")
        let diretor = new Diretor(nome, matricula, salarioBase, departamento, gratificacao)
        console.log(`Salário final do diretor ${diretor.getNome()}: R$ ${diretor.calcularSalario().toFixed(2)}`)
    }else {
        console.log("Opção inválida. Tente novamente.")
    }
}
}