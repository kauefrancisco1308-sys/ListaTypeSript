// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e 
// assalariados (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como 
// superclasse e FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve 
// solicitar os dados via teclado e calcular o salário de cada um
export function q15poo(): void {
    abstract class Funcionario {
        nome: string
        constructor(nome: string) {
            this.nome = nome
        }
        abstract calcularSalario(): number;
    }
    class FuncionarioHorista extends Funcionario {
        horasTrabalhadas: number
        valorHora: number
        constructor(nome: string, horasTrabalhadas: number, valorHora: number) {
            super(nome)
            this.horasTrabalhadas = horasTrabalhadas
            this.valorHora = valorHora
        }
        calcularSalario(): number {
            return this.horasTrabalhadas * this.valorHora
        }
    }
    class FuncionarioAssalariado extends Funcionario {
        salarioMensal: number
        constructor(nome: string, salarioMensal: number) {
            super(nome)
            this.salarioMensal = salarioMensal
        }
        calcularSalario(): number {
            return this.salarioMensal
        }
    }
    let funcionarios: Funcionario[] = []
    while (true) {
        let tipoFuncionario = String(prompt("Informe o tipo de funcionário (horista/assalariado) ou 'sair' para encerrar: "))
        if (tipoFuncionario === 'sair') {
            break
        }
        let nome = String(prompt("Informe o nome do funcionário: "))
        if (tipoFuncionario === 'horista') {
            let horasTrabalhadas = Number(prompt("Informe a quantidade de horas trabalhadas: "))
            let valorHora = Number(prompt("Informe o valor da hora: "))
            funcionarios.push(new FuncionarioHorista(nome, horasTrabalhadas, valorHora))
        } else if (tipoFuncionario === 'assalariado') {
            let salarioMensal = Number(prompt("Informe o salário mensal: "))
            funcionarios.push(new FuncionarioAssalariado(nome, salarioMensal))
        }
    }
    for (const funcionario of funcionarios) {
        console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.calcularSalario()}`)
    }
}