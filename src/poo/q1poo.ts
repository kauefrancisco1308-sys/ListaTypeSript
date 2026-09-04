// Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor
export function q1poo(): void {
    class Bola{
        cor:string
        circunferencia:Number
        material:string
        constructor(cor:string,circunferencia:Number,material:string){
            this.cor = cor
            this.circunferencia = circunferencia
            this.material = material
        }
        trocarCor(novaCor:string){
            this.cor=novaCor
        }
        mostraCor(mostracor:string){
            console.log("A cor da bola é: "+this.cor)
        }
    }
    let bola = new Bola("vermelha",34,"metal")
    bola.mostraCor
    bola.trocarCor("verde")
    bola.mostraCor
}