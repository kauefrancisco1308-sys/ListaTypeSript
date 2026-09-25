// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não. Cada animal tem um 
// comportamento de ‘emitir som’ e ‘mover’ diferente. O sistema deve cadastrar animais, listar
// por tipo (Mamíferos ou Aves) e simular a 'hora da alimentação' chamando o método de som de cada um.
export function q16poo() {
    class Animal {
        constructor(nome, especie, idade, sexo) {
            this.nome = nome;
            this.especie = especie;
            this.idade = idade;
            this.sexo = sexo;
        }
    }
    class Mamifero extends Animal {
        constructor(nome, especie, idade, sexo, tipoAlimentacao) {
            super(nome, especie, idade, sexo);
            this.tipoAlimentacao = tipoAlimentacao;
        }
        emitirSom() {
            console.log("Som de mamífero");
        }
        mover() {
            console.log("Mamífero se movendo");
        }
    }
    class Ave extends Animal {
        constructor(nome, especie, idade, sexo, migratoria) {
            super(nome, especie, idade, sexo);
            this.migratoria = migratoria;
        }
        emitirSom() {
            console.log("Som de ave");
        }
        mover() {
            console.log("Ave se movendo");
        }
    }
    while (true) {
        let mamiferos = [];
        let aves = [];
        let opcao = prompt("Digite 1 para Mamífero, 2 para Ave, 3 listar Mamíferos, 4 listar Aves, 5 simular hora da alimentação, 0 para sair:");
        if (opcao === "0") {
            break;
        }
        else if (opcao === "1") {
            let nome = String(prompt("Digite o nome do mamífero:"));
            let especie = String(prompt("Digite a espécie do mamífero:"));
            let idade = parseInt(String(prompt("Digite a idade do mamífero:")) || "0");
            let sexo = String(prompt("Digite o sexo do mamífero:"));
            let tipoAlimentacao = String(prompt("Digite o tipo de alimentação do mamífero:"));
            let mamifero = new Mamifero(nome, especie, idade, sexo, tipoAlimentacao);
            mamiferos.push(mamifero);
            console.log("Mamífero cadastrado com sucesso!");
        }
        else if (opcao === "2") {
            let nome = String(prompt("Digite o nome da ave:"));
            let especie = String(prompt("Digite a espécie da ave:"));
            let idade = parseInt(String(prompt("Digite a idade da ave:")) || "0");
            let sexo = String(prompt("Digite o sexo da ave:"));
            let migratoria = String(prompt("A ave é migratória? (s/n):")) === "s";
            let ave = new Ave(nome, especie, idade, sexo, migratoria);
            aves.push(ave);
            console.log("Ave cadastrada com sucesso!");
        }
        else if (opcao === "3") {
            console.log("Listando Mamíferos:");
            for (let i = 0; i < mamiferos.length; i++) {
                mamiferos[i].emitirSom();
                mamiferos[i].mover();
            }
        }
        else if (opcao === "4") {
            console.log("Listando Aves:");
            for (let i = 0; i < aves.length; i++) {
                aves[i].emitirSom();
                aves[i].mover();
            }
        }
        else if (opcao === "5") {
            console.log("Simulando hora da alimentação:");
            for (let i = 0; i < mamiferos.length; i++) {
                mamiferos[i].emitirSom();
            }
            for (let i = 0; i < aves.length; i++) {
                aves[i].emitirSom();
            }
        }
    }
}
