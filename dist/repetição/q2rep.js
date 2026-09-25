// Desenvolva a tabuada de um número usando for.
export function q2rep() {
    let numero = Number(prompt("Digite um número para ver a tabuada:"));
    console.log('Tabuada de ' + numero + ':');
    for (let i = 1; i <= 10; i++) {
        console.log(numero + ' x ' + i + ' = ' + (numero * i));
    }
}
