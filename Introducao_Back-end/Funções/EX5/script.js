/*
5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se é um valor perfeito ou falso se não for. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio.

Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
*/

function isPerfect(numero) {
    if (numero <= 1) {
      return false; // Números menores ou iguais a 1 não são perfeitos
    }
  
    let somaDivisores = 1; // Começa com 1, pois todos os números têm 1 como divisor
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        somaDivisores += i;
  
        if (i !== numero / i) {
          // Adiciona o divisor complementar, a menos que seja a raiz quadrada
          somaDivisores += numero / i;
        }
      }
    }
  
    return somaDivisores === numero;
  }
  
  const numero = parseInt(prompt("Digite um número:"));
  
  if (isPerfect(numero)) {
    console.log(`${numero} é um número perfeito.`);
  } else {
    console.log(`${numero} não é um número perfeito.`);
  }
  