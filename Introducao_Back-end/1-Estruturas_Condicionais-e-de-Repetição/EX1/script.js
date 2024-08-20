// Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade do grupo.

let idade = parseInt(prompt("Digite sua idade"));
let contadorAluno = 0;

while (idade != 999) {
    idade = parseInt(prompt("Digite sua idade"));
}
contadorAluno++;

document.write("Existem " + contadorAluno + " alunos");