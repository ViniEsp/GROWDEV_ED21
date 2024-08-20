/*
Escreva um algoritmo que armazene:
O número total de eleitores de um município.

O número de votos brancos, nulos e válidos.

Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

O algoritmo deve fazer uma validação para que as porcentagens dos votos armazenados (brancos, nulos e válidos)respeitem o limite do número total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e válidos não seja maior que o número total de eleitores.
*/

let totalEleitores = parseInt(prompt("Digite o total de eleitores"));
let votosBrancos = parseInt(prompt("Digite o total de votos brancos"));
let votosNulos = parseInt(prompt("Digite o total de votos nulos"));
let votosValidos = parseInt(prompt("Digite o total de votos validos"));

let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;


// Verifique se a soma dos votos é maior do que o total de eleitores
if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
    console.log("Erro: A soma dos votos é maior que o número total de eleitores.");
  } else 

console.log(`Total de Eleitores: ${totalEleitores}`);
console.log(`Votos Brancos: ${votosBrancos}`);
console.log(`Votos Nulos: ${votosNulos}`);
console.log(`Votos Validos: ${votosValidos}`);

console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
console.log(`Percentual de votos validos: ${percentualValidos.toFixed(2)}%`);
