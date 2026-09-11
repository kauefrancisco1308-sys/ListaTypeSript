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
    let cor = String(prompt("informe a cor da bola: "))
    let circun = Number(prompt("informe a circunferencia: "))
    let material= String(prompt("informe o material"))
    let bola = new Bola(cor, circun, material)
    bola.mostraCor
    let trocar = String(prompt("deseja trocar a cor? S/N")?.toUpperCase)
    while(true){
        if (trocar==="S"){
            let NovaCor = String(prompt("informe a nova cor"))
            bola.trocarCor(NovaCor)
            bola.mostraCor
        }else if(trocar==="N"){
            break
        }else{
            alert("algo deu errado! tente novamente!")
        }
    }
    
}
