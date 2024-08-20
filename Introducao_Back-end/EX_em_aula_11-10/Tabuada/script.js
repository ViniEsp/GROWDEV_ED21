// Escreva um programa que leia um número
// qualquer e mostre a tabuada desse
// número.
// Exemplo:
// Input: 5
// Output:
// 5x1=5
// 5x2=10
// 5x10=50


// const numero = parseInt(prompt("Digite um número:"));
// let i = 1;

// while (i <= 10) {

//   const resultado = numero * i;
//   console.log(`${numero} x ${i} = ${resultado}`);
//   i++;
// }


const numero = parseInt(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {

  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
