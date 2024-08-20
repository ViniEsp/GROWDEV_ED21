/*
Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.
*/

// Array with 15 elements
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (valor of vetor) {
    if (valor % 2 === 0) {
    console.log(valor);
    }
}
    