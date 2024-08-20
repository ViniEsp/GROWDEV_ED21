// Desenvolva um algoritmo que armazene o valor 10 em uma variável
// A e o valor 20 em uma variável B.
// A seguir (utilizando apenas atribuições entre variáveis)
// troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa.
// Ao final, escrever os valores que ficaram armazenados nas variáveis

// let a = 10;
// let b = 20;

let a = parseInt(prompt("Digite o primeiro valor:"));
let b = parseInt(prompt("Digite o segundo valor:"));

a += b; // Soma de dois números é a soma dos mesmos + o número adjacente
b += a; // Soma de dois números é a soma dos mesmos + o número adjacente

document.write(a);
document.write("<br>");
document.write(b);

