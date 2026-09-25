// Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;
export function q2poo(): void {
    class Quadrado{
        tamanho_lado:number
        constructor(tamanho_lado:number){
            this.tamanho_lado = tamanho_lado
        }
        mudar_lado(novoLado:number){
            this.tamanho_lado = novoLado
        }
        valor_lado(){
            console.log("o valor do lado é: "+this.tamanho_lado)
        }
        calcularArea(){
            let a = this.tamanho_lado
            console.log("a Área do quadrado é: "+(a**2))
        }
    }
    let quadrado = new Quadrado(Number(prompt("informe o tamanho do lado do quadrado: ")))
    quadrado.calcularArea()
    quadrado.mudar_lado(Number(prompt("informe o novo tamanho do lado do quadrado: ")))
    quadrado.valor_lado()
}