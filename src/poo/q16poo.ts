// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não. Cada animal tem um 
// comportamento de ‘emitir som’ e ‘mover’ diferente. O sistema deve cadastrar animais, listar
// por tipo (Mamíferos ou Aves) e simular a 'hora da alimentação' chamando o método de som de cada um.
export function q16poo(): void {
abstract class Animal {
    private nome: string
    private especie: string
    private idade: number
    private sexo: string
    constructor(nome: string, especie: string, idade: number, sexo: string) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
        this.sexo = sexo
    }
    abstract emitirSom(): void
    abstract mover(): void
}
class Mamifero extends Animal {
    private tipoAlimentacao: string
    constructor(nome: string, especie: string, idade: number, sexo: string, tipoAlimentacao: string) {
        super(nome, especie, idade, sexo)
        this.tipoAlimentacao = tipoAlimentacao
    }
    emitirSom(): void {
        console.log("Som de mamífero")
    }
    mover(): void {
        console.log("Mamífero se movendo")
    }
}
class Ave extends Animal {
    private migratoria: boolean
    constructor(nome: string, especie: string, idade: number, sexo: string, migratoria: boolean) {
        super(nome, especie, idade, sexo)
        this.migratoria = migratoria
    }
    emitirSom(): void {
        console.log("Som de ave")
    }
    mover(): void {
        console.log("Ave se movendo")
    }
}
while (true) {
    let opcao = prompt("Digite 1 para Mamífero, 2 para Ave, 3 listar Mamíferos, 4 listar Aves, 5 simular hora da alimentação, 0 para sair:")
    if (opcao === "0") {
        break
    } else if (opcao === "1") {
        let nome = String(prompt("Digite o nome do mamífero:"))
        let especie = String(prompt("Digite a espécie do mamífero:"))
        let idade = parseInt(String(prompt("Digite a idade do mamífero:")) || "0")
        let sexo = String(prompt("Digite o sexo do mamífero:"))
        let tipoAlimentacao = String(prompt("Digite o tipo de alimentação do mamífero:"))
        let mamifero = new Mamifero(nome, especie, idade, sexo, tipoAlimentacao)
        console.log("Mamífero cadastrado com sucesso!")
    } else if (opcao === "2") {
        let nome = String(prompt("Digite o nome da ave:"))
        let especie = String(prompt("Digite a espécie da ave:"))
        let idade = parseInt(String(prompt("Digite a idade da ave:")) || "0")
        let sexo = String(prompt("Digite o sexo da ave:"))
        let migratoria = String(prompt("A ave é migratória? (s/n):")) === "s"
        let ave = new Ave(nome, especie, idade, sexo, migratoria)
        console.log("Ave cadastrada com sucesso!")
    } else if (opcao === "3") {
        console.log("Listando Mamíferos:")
    } else if (opcao === "4") {
        console.log("Listando Aves:")
    } else if (opcao === "5") {
        console.log("Simulando hora da alimentação:")
    }  
}
}
