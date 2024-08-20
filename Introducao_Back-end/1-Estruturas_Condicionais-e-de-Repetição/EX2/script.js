/*
Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
*/
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = true;

while (continuar) {
  let salario = parseFloat(prompt("Digite o salário do funcionário:"));
  let sexo = prompt("Digite o sexo do funcionário (M/F):");

  if (sexo.toUpperCase() === "M") {
    totalSalarioHomens += salario;
    
  } else if (sexo.toUpperCase() === "F") {
    totalSalarioMulheres += salario;
  }

  continuar = confirm("Deseja continuar cadastrando funcionários?");
}

console.log("Total de salários pagos aos homens: " + totalSalarioHomens);
console.log("Total de salários pagos às mulheres: " + totalSalarioMulheres);