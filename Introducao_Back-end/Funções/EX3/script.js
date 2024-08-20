/*
3. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.
*/

function numPrimo(numero) {
    if (numero <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (numero <= 3) return true; // 2 e 3 são primos
  
    if (numero % 2 === 0) return false; // Números pares maiores que 2 não são primos
  
    // Verifique divisores ímpares a partir de 3 até a raiz quadrada do número
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
      if (numero % i === 0) return false;// Se for divisível por algum número, não é primo
    }
  
    return true;// Se nenhum divisor foi encontrado, é primo
}


let numero = parseInt(prompt("Digite um nuumero:"));

if (numPrimo(numero)) {
  alert(`${numero} é primo.`);
} else {
  alert(`${numero} não é primo.`);
}