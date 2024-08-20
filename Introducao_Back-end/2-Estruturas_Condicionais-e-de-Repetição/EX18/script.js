// Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// - À vista.... recebe 2,5% de desconto sobre o preço de tabela

// - De 2 até 5 vezes......preço da tabela, sem desconto ou acrécimo

// - De 6 até 10 vezes...... juros de 6% sobre o preço de tabela

// - De 11 até 15 vezes...... juros de 13% sobre o preço de tabela

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let preco = parseFloat(prompt("Digite o preço de tabela"));
let vezes = parseInt(prompt("Digite o número de vezes"));
let desconto = 0;

if (vezes <= 5) {
    desconto = preco * 0.025;
}else if (vezes <= 10) {
    desconto = preco * 0.06;
}else if (vezes <= 15) {
    desconto = preco * 0.13;
}
const parcelas = Math.floor(desconto / preco);
const precoTotal = preco + desconto;

console.log(`O preço total da compra é: ${precoTotal}`);
console.log(`O número de parcelas é: ${parcelas}`);


//const parcelas = vezes > 0 ? preco / vezes : 0;