// Faça um programa que leia a idade de
// várias pessoas. A cada laço, você deverá
// perguntar para o usuário se ele quer ou
// não continuar a digitar dados. No final,
// quando o usuário decidir parar, mostre
// na tela:
// a) Quantas idades foram digitadas
// b) Qual é a média entre as idades digitadas
// c) Quantas pessoas têm 21 anos ou mais.


let somaIdades = 0;
let quantidadeIdades = 0;
let quantidadeMaioresOuIgualA21 = 0;

while (true) {
  const idade = parseInt(prompt("Digite a idade:"));
  somaIdades += idade;
  quantidadeIdades++;

  if (idade >= 21) {
    quantidadeMaioresOuIgualA21++;
  }

  const continuar = prompt("Deseja continuar digitando idades? (S/N)").toLowerCase();
  if (continuar !== 's') {
    break;
  }
}

if (quantidadeIdades > 0) {
  const mediaIdades = somaIdades / quantidadeIdades;
  console.log("Quantidade de idades digitadas: " + quantidadeIdades);
  console.log("Média das idades digitadas: " + mediaIdades.toFixed(2));
  console.log("Quantidade de pessoas com 21 anos ou mais: " + quantidadeMaioresOuIgualA21);
} else {
  console.log("Nenhuma idade foi digitada.");
}








//------------------------------------------------------WHILE---
// let idades = [];
// let continuar = true;

// while (continuar) {
//   const idade = parseInt(prompt("Digite a idade:"));
//   idades.push(idade);
  
//   continuar = confirm("Deseja continuar digitando idades?");
// }

// const totalIdades = idades.length;
// const somaIdades = idades.reduce((a, b) => a + b, 0);
// const mediaIdades = somaIdades / totalIdades;
// const maioresDe21 = idades.filter(idade => idade >= 21).length;

// console.log(`a) Quantidade de idades digitadas: ${totalIdades}`);
// console.log(`b) Média de idades: ${mediaIdades.toFixed(2)}`);
// console.log(`c) Pessoas com 21 anos ou mais: ${maioresDe21}`);





//--------------------------------------------------DO...WHILE---

// let idades = [];// Inicializa um array vazio para armazenar as idades
// let continuar = true;// Inicializa a variável "continuar" como verdadeira

// // Inicia um loop "do...while" para coletar idades até que o usuário decida parar
// do {
//   const idade = parseInt(prompt("Digite a idade:"));
//   // Adiciona a idade ao array "idades"
//   idades.push(idade);
  
//   // Pergunta se deseja continuar digitando idades e armazena a resposta em "continuar"
//   continuar = confirm("Deseja continuar digitando idades?");
// } while (continuar); // O loop continua enquanto "continuar" for verdadeiro


// // Calcula o total de idades digitadas
// const totalIdades = idades.length;
// // Calcula a soma de todas as idades
// const somaIdades = idades.reduce((a, b) => a + b, 0);
// // Calcula a média das idades
// const mediaIdades = somaIdades / totalIdades;
// // Filtra as idades maiores ou iguais a 21 e calcula quantas são
// const maioresDe21 = idades.filter(idade => idade >= 21).length;

// // Exibe as informações no console
// console.log(`a) Quantidade de idades digitadas: ${totalIdades}`);
// console.log(`b) Média de idades: ${mediaIdades.toFixed(2)}`);
// console.log(`c) Pessoas com 21 anos ou mais: ${maioresDe21}`);





//--------------------------------------------------------FOR---

// let idades = [];// Inicializa um array vazio para armazenar as idades
// let continuar = true; // Inicializa a variável "continuar"

// // Inicia um loop "for" infinito para coletar idades até que o usuário decida parar
// for (;;) {
//   const idade = parseInt(prompt("Digite a idade:"));
//   // Adiciona a idade ao array "idades"
//   idades.push(idade);
  
//   // Pergunta se deseja continuar digitando idades e armazena a resposta em "continuar"
//   continuar = confirm("Deseja continuar digitando idades?");
//   // Se "continuar" for falso, o loop é interrompido
//   if (!continuar) {
//     break;
//   }
// }

// // Calcula o total de idades digitadas
// const totalIdades = idades.length;
// // Calcula a soma de todas as idades
// const somaIdades = idades.reduce((a, b) => a + b, 0);
// // Calcula a média das idades
// const mediaIdades = somaIdades / totalIdades;
// // Filtra as idades maiores ou iguais a 21 e calcula quantas são
// const maioresDe21 = idades.filter(idade => idade >= 21).length;


// // Exibe as informações no console
// console.log(`a) Quantidade de idades digitadas: ${totalIdades}`);
// console.log(`b) Média de idades: ${mediaIdades.toFixed(2)}`);
// console.log(`c) Pessoas com 21 anos ou mais: ${maioresDe21}`);

