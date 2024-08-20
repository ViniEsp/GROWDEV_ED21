/*
Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto
*/

let nome = prompt("Digite seu nome");
let sexo = prompt("Digite o sexo (M/F):");
let valor = parseInt(prompt("Digite o valor:"));
let desconto = 0;

if (sexo.toUpperCase() === "M") {
    desconto = valor * 0.05;
}else if (sexo.toUpperCase() === "F") {
    desconto = valor * 0.13;
}

valor -= desconto;

alert(`O preço final é R$ ${valor},00`);
