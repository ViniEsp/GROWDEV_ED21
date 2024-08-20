// Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let numbers = [];
let positiveCount = 0;
let negativeCount = 0;
let sum = 0;

for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt("Digite um número:"));
  numbers.push(number);
  sum += number;
  
  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  }
}

let average = sum / 10;
let positivePercentage = (positiveCount / 10) * 100;
let negativePercentage = (negativeCount / 10) * 100;

console.log("Média aritmética: " + average);
console.log("Quantidade de valores positivos: " + positiveCount);
console.log("Quantidade de valores negativos: " + negativeCount);
console.log("Percentual de valores positivos: " + positivePercentage + "%");
console.log("Percentual de valores negativos: " + negativePercentage + "%");