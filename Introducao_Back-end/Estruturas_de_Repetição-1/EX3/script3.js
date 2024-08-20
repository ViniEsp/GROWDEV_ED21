// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i). <br>
// 1 * 2 = 2 <br>
// 2 * 2 = 4 <br>
// 3 * 2 = 6 <br>
// ...
let multiplicando = parseInt(prompt("Digite o numero que deseja saber a tabuada:"));
let numDeVezes = parseInt(prompt("Digite quantas vezes deseja multiplicar:"));

for (let i = 1; i <= numDeVezes; i++) {
    let resultado = multiplicando * i;
    document.write(`${i} x ${multiplicando} = ${resultado} <br>`);
}
