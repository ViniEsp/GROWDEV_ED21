/*
Crie um objeto para colocar nome e duas notas.
Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno.

Agora crie mais um objeto para colocar informações do nosso segundo aluno.
Mostre as informações de cada aluno no console.

Mostre também a média do primeiro aluno e a média do segundo aluno.
Por fim mostre a média desta turma de 2 alunos.
*/

// let primeiroAluno =[
//     {
//         nome: 'Vinicius',
//         nota1: 8,
//         nota2: 10
//     }
// ]

// let segundoAluno = [
//     {
//         nome: 'Mabel',
//         nota1: 6,
//         nota2: 9
//     }
// ]

// console.log(primeiroAluno)
// console.log(segundoAluno)
// function media (nota1, nota2){
//     return (nota1 + nota2) / 2;
// }

// console.log(media(primeiroAluno[0].nota1, primeiroAluno[0].nota2))
// console.log(media(segundoAluno[0].nota1, segundoAluno[0].nota2))  

// const mediaTurma = ((media(primeiroAluno[0].nota1, primeiroAluno[0].nota2
// ) + media(segundoAluno[0].nota1, segundoAluno[0].nota2)) / 2)

// console.log(mediaTurma)


// Criando o objeto aluno
function Aluno(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.calcularMedia = function() {
      return (this.nota1 + this.nota2) / 2;
    };
  }
  
  // Criando o primeiro aluno
  var aluno1 = new Aluno("Primeiro Aluno", 8.5, 9.0);
  // Criando o segundo aluno
  var aluno2 = new Aluno("Segundo Aluno", 7.0, 8.5);
  
  // Exibindo informações dos alunos no console
  console.log("Informações do Primeiro Aluno:");
  console.log("Nome: " + aluno1.nome);
  console.log("Nota 1: " + aluno1.nota1);
  console.log("Nota 2: " + aluno1.nota2);
  
  console.log("\nInformações do Segundo Aluno:");
  console.log("Nome: " + aluno2.nome);
  console.log("Nota 1: " + aluno2.nota1);
  console.log("Nota 2: " + aluno2.nota2);
  
  // Calculando e exibindo as médias dos alunos
  console.log("\nMédia do Primeiro Aluno: " + aluno1.calcularMedia());
  console.log("Média do Segundo Aluno: " + aluno2.calcularMedia());
  
  // Calculando e exibindo a média da turma de 2 alunos
  var mediaTurma = (aluno1.calcularMedia() + aluno2.calcularMedia()) / 2;
  console.log("\nMédia da Turma: " + mediaTurma);
  