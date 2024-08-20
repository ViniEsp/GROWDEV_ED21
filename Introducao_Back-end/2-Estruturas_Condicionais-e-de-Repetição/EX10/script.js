// Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

function calcularPesoIdeal(altura, sexo) {
  let pesoIdeal;

  if (sexo === 1) {
    pesoIdeal = (62.1 * altura) - 44.7;
  } else if (sexo === 2) {
    pesoIdeal = (72.7 * altura) - 58;
  } else {
    console.log("Código inválido para sexo.");
    return;
  }

  console.log(`O peso ideal é ${pesoIdeal.toFixed(2)} kg.`);
}

// Exemplo de uso:
calcularPesoIdeal(1.65, 2); // Altura: 1.65m, Sexo: 2 (masculino)

