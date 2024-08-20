// Faça um algoritmo que pergunte um número, verifique se é um numero e imprima os
// números ímpares entre 1 e o número armazenado.

let numero = parseInt(prompt("Digite um número"));

for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        document.write(i + `,`);
    }
}