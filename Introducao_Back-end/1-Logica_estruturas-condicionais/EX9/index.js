// As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

var numeroDeMacas = parseInt(prompt("Digite o número de maçãs compradas: "));
var precoPorMaca;

if (numeroDeMacas < 11) {
    precoPorMaca = 0.30; // Preço se comprar menos do que uma dúzia
} else {
    precoPorMaca = 0.25; // Preço se comprar pelo menos uma dúzia
}

var valorTotal = numeroDeMacas * precoPorMaca;

document.write("O valor total da compra é: R$" + valorTotal.toFixed(2));

