/*
Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2).
*/

function calcularMedia(nota1, nota2, nota3, tipo) {
    if (tipo === 'A') {
      const mediaAritmetica = (nota1 + nota2 + nota3) / 3;
      return mediaAritmetica;

    } else if (tipo === 'P') {
      const mediaPonderada = (nota1 * 5 + nota2 * 3 + nota3 * 2) / (5 + 3 + 2);
      return mediaPonderada;

    } else {
      return "Tipo de média inválido. Use 'A' para média aritmética ou 'P' para média ponderada.";
    }

}


const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));
const tipo = prompt("Digite 'A' para média aritmética ou 'P' para média ponderada: ");

const media = calcularMedia(nota1, nota2, nota3, tipo);

if (typeof media === 'string') {
    console.log(media);
  } else {
    console.log(`A média é: ${media.toFixed(2)}`);
}
  