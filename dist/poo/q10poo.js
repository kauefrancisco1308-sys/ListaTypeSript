"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q10poo = q10poo;
// Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade 
// B. Métodos: Alterar Nome, Fome, Saúde e Idade; 
// C. Retornar Nome, Fome, Saúde e Idade 
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi, 
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então 
// não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a 
// qualquer momento.
function q10poo() {
    class Tamagushi {
        constructor(nome, fome, saude, idade) {
            this.nome = nome;
            this.fome = fome;
            this.saude = saude;
            this.idade = idade;
        }
        alterarNome(novoNome) {
            this.nome = novoNome;
        }
        alterarFome(novoValor) {
            this.fome = novoValor;
        }
        alterarSaude(novoValor) {
            this.saude = novoValor;
        }
        alterarIdade(novoValor) {
            this.idade = novoValor;
        }
        retornarNome() {
            return this.nome;
        }
        retornarFome() {
            return this.fome;
        }
        retornarSaude() {
            return this.saude;
        }
        retornarIdade() {
            return this.idade;
        }
        calcularHumor() {
            if (this.fome < 5 && this.saude > 5) {
                return "Feliz";
            }
            else if (this.fome > 5 && this.saude < 5) {
                return "Triste";
            }
            else if (this.fome > 5 && this.saude > 5) {
                return "Neutro";
            }
            else {
                return "Indiferente";
            }
        }
    }
}
