// Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor
export function q1poo() {
    var _a, _b;
    class Bola {
        constructor(cor, circunferencia, material) {
            this.cor = cor;
            this.circunferencia = circunferencia;
            this.material = material;
        }
        trocarCor(novaCor) {
            this.cor = novaCor;
        }
        mostraCor() {
            console.log("A cor da bola é: " + this.cor);
        }
    }
    let cor = String(prompt("informe a cor da bola: "));
    let circun = Number(prompt("informe a circunferencia: "));
    let material = String(prompt("informe o material"));
    let bola = new Bola(cor, circun, material);
    bola.mostraCor();
    let trocar;
    while (true) {
        trocar = String((_a = prompt("deseja trocar a cor? S/N")) === null || _a === void 0 ? void 0 : _a.toUpperCase());
        if (trocar === "S") {
            let NovaCor = String(prompt("informe a nova cor"));
            bola.trocarCor(NovaCor);
            bola.mostraCor();
            trocar = String((_b = prompt("deseja trocar a cor? S/N")) === null || _b === void 0 ? void 0 : _b.toUpperCase());
            if (trocar === "N") {
                break;
            }
        }
        else if (trocar === "N") {
            break;
        }
        else {
            alert("algo deu errado! tente novamente!");
        }
    }
}
