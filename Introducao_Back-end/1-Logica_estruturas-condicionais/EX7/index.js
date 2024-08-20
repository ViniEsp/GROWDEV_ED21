// Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

var totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
var votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
var votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
var votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

var percentualBrancos = (votosBrancos / totalEleitores) * 100;
var percentualNulos = (votosNulos / totalEleitores) * 100;
var percentualValidos = (votosValidos / totalEleitores) * 100;

document.write("\nResultados:<br>");

document.write("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%<br>");
document.write("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%<br>");
document.write("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%<br>");