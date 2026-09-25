// Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar/apresentar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.
export function q3poo(): void {
    class Retangulo{
        base:number
        altura:number
        constructor(base:number,altura:number){
            this.base = base
            this.altura = altura
        }
        mudarBase(novaBase:number){
            this.base=novaBase
        }
        mudaraltura(novaAltura:number){
            this.altura=novaAltura
        }
        mostrarValores(){
            console.log(`Altura: ${this.altura}, Base: ${this.base}`)
        }
        area(){
            console.log(`a Área do retângulo é: ${this.altura*this.base}`)
        }
        perimetro(){
            console.log(`o perimetro do retangulo é: ${(this.altura*2)+(this.base*2)}`)
        }
    }
    let retangulo = new Retangulo(36,6)
    retangulo.mostrarValores()
    retangulo.mudarBase(64)
    retangulo.mudaraltura(8)
    retangulo.perimetro()
    retangulo.area()
}