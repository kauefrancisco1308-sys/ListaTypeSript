// Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

export function questao1array():void{
    const nums: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const pares = nums.filter(n => n % 2 === 0);
    console.log("Números pares de 0 a 15:", pares.join(", "));

    const impares = nums.filter(n => n % 2 !== 0);
    console.log("Números ímpares de 0 a 15:", impares.join(", "));

    const mult2 = nums.filter(n => n % 2 === 0);
    const mult3 = nums.filter(n => n % 3 === 0);
    const mult4 = nums.filter(n => n % 4 === 0);
    console.log("Múltiplos de 2:", mult2.join(", "));
    console.log("Múltiplos de 3:", mult3.join(", "));
    console.log("Múltiplos de 4:", mult4.join(", "));

    const combinedSet = Array.from(new Set([...mult2, ...mult3, ...mult4])).sort((a,b) => a - b);
    console.log("Múltiplos de 2, 3 ou 4 (combinado):", combinedSet.join(", "));

    const reversa = [...nums].reverse();
    console.log("Lista reversa:", reversa.join(", "));
}