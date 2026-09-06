// Classe Pessoa: Crie uma classe que modele uma pessoa:
// Atributos: nome, idade, peso e altura
// Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm.
export function q5poo(): void {
    class Pessoa{
        nome: string
        idade: string
        peso: number
        altura: number
        constructor(nome:string,idade:string,peso:number,altura:number){
            this.nome=nome
            this.idade=idade
            this.peso=peso
            this.altura=altura
        }
        envelhecer(){

        }   
    }
}