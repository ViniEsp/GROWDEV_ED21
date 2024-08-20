// Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let valorIninicial = prompt("Digite o valor inicial do contador");
let valorFinal = prompt("Digite o valor final do contador");
let incremento = prompt("Digite o incremento");

for (let i = valorIninicial; i <= valorFinal; i += incremento) {
    console.log(i);
}