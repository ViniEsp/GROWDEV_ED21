// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.


let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let operacao = prompt("Digite a operação matemática (+, -, *, /):");
let resultado;

if (operacao === "+") {
    resultado = num1 + num2;
} else if (operacao === "-") {
    resultado = num1 - num2;
} else if (operacao === "*") {
    resultado = num1 * num2;
} else if (operacao === "/") {
    resultado = num1 / num2;
} else {
    resultado = "Operação inválida";
}

document.write(`<br>Resultado: ${resultado}`);


/*
const resultado =
  operacao === "+" ? num1 + num2 :
  operacao === "-" ? num1 - num2 :
  operacao === "*" ? num1 * num2 :
  operacao === "/" ? num1 / num2 :
  "Operação inválida";

document.write(`<br>Resultado: ${resultado}`);
*/
