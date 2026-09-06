// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas. 
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado ou 
// reprovado.
export function q13poo(): void {
    class Aluno {
        nome: string
        nota1: number
        nota2: number
        constructor(nome: string, nota1: number, nota2: number) {
            this.nome = nome
            this.nota1 = nota1
            this.nota2 = nota2
        }
        media(): number {
            return (this.nota1 + this.nota2) / 2
        }
        resultado(): string {
            const media = this.media()
            return media >= 6 ? 'Aprovado' : 'Reprovado'
        }
    }
    let nome = String(prompt("Informe o nome do aluno: "))
    let nota1 = Number(prompt("Informe a primeira nota do aluno: "))
    let nota2 = Number(prompt("Informe a segunda nota do aluno: "))
    let aluno = new Aluno(nome, nota1, nota2)
    console.log(`Aluno: ${aluno.nome}`)
    console.log(`Média: ${aluno.media()}`)
    console.log(`Resultado: ${aluno.resultado()}`)
}