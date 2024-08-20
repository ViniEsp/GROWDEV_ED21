// Faça um algoritmo que pergunte ao
// usuário um número inteiro e positivo
// qualquer e mostre uma contagem até
// esse valor:
// Exemplo:

// Input: 35
// Output: 123 4567 ..33 3435 Acabou!

let numero = parseInt(prompt("Digite um numero:"));
let count = 1;

while (count <= numero) {
    document.write(count + "<br>");
    count++;
}
document.writeln("<h1>Acabou!</h1>")
