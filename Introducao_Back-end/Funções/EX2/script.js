/*
2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.
*/

let numero = parseInt(prompt("Digite um numero:"));

function parOuImpra (numero) {
    if (numero % 2 == 0) {
        return `${false}, o numero digitado é Par`;
    } else {
        return `${true}, o numero digitado é Ímpar`;
    }
}

console.log(parOuImpra(numero));