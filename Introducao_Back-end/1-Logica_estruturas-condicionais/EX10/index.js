// Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário.
// imprima no terminal o nome, a idade e o ano de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceuem 2000”.
// OBS: Pegue o ano atual como base

let nome = prompt("Digite seu nome");
let idade = parseInt(prompt("Digite sua idade"));
let anosNascimento = 2023 - idade;

console.log(`Nome: ${nome}, Idade: ${idade} anos, nasceuem ${anosNascimento}`);



