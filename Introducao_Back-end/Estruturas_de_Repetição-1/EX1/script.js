// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let menorAltura =""; // Inicializa com um valor muito alto
let maiorAltura = 0; // Inicializa com um valor muito baixo

for (let i = 1; i <= 4; i++) {
  let altura = parseFloat(prompt(`Digite a altura da pessoa ${i} (em metros):`));

  if (!isNaN(altura)) { // Verifica se a entrada é um número válido
    if (altura < menorAltura) {
      menorAltura = altura;
    }
    if (altura > maiorAltura) {
      maiorAltura = altura;
    }
  } else {
    console.log(`Altura inválida para a pessoa ${i}.`);
    i--; // Para permitir que a pessoa insira a altura correta novamente
  }
}

console.log(`Menor altura do grupo: ${menorAltura.toFixed(2)} metros`);
console.log(`Maior altura do grupo: ${maiorAltura.toFixed(2)} metros`);
