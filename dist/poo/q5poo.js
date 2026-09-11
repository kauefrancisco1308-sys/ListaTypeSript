"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q5poo = q5poo;
// Classe Pessoa: Crie uma classe que modele uma pessoa:
// Atributos: nome, idade, peso e altura
// Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm.
function q5poo() {
    class Pessoa {
        constructor(nome, idade, peso, altura) {
            this.nome = nome;
            this.idade = idade;
            this.peso = peso;
            this.altura = altura;
        }
        engordar(PesoAcima) {
            this.peso = this.peso + PesoAcima;
        }
        emagrecer(PesoPerdido) {
            this.peso = this.peso - PesoPerdido;
        }
        Envelhecer(NovaIdade) {
            if (this.idade <= 21) {
                for (let i = NovaIdade; i <= 21; i++) {
                    this.altura = this.altura + 0.5;
                }
                this.idade = this.idade + NovaIdade;
            }
            else {
                this.idade + this.idade + NovaIdade;
            }
        }
    }
    let nome = String(prompt("informe o nome: "));
    let idade = Number(prompt("informe a idade: "));
    let peso = Number(prompt("informe o peso: "));
    let altura = Number(prompt("imforme a altura: "));
    let pessoa = new Pessoa(nome, idade, peso, altura);
}
