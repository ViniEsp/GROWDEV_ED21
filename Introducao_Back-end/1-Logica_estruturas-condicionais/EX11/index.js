// Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

var numero = parseInt(prompt("Digite um número e eu te informarei se ele é par ou ímpar.: "));

let resultado = (numero % 2 === 0) ? alert("O número é par!") : alert("O número é impar!");

// if (numero % 2 == 0) {
//     alert("O número é par!");
// } else {
//     alert("O número é impar!");
// }

