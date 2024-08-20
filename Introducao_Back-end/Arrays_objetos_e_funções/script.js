const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];

// //1. Imprima no console a quantidade de pessoas Total.
let pessoas = console.log(data.length);

// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
let mulheres = data.filter((item) => item.sexo === "F");
console.log(mulheres.length);


// 3. Imprima no console a soma do salário de todas as pessoas.
function somaSalario(salario) {
    let soma = 0;

    for (let i = 0; i < data.length; i++) {
        soma += data[i].salario;
    }
    console.log(soma);
}
somaSalario();

// 4. Imprima no console a média do salário de todas as pessoas.
function mediaSalario(salario) {
    let media = 0;

    for (let i = 0; i < data.length; i++){
        media += data[i].salario;
    }
    console.log(media / data.length);
}

mediaSalario();

// 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino
function somaSalarioMasculino(salario) {
    let soma = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].sexo === "M") {
            soma += data[i].salario;
        }
    }
    console.log(soma);
}
somaSalarioMasculino();


// // 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino

function calcularMediaSalarioHomens(data) {
    const pessoasMasculinas = data.filter(pessoa => pessoa.sexo === 'M');
    // Verificar se há pessoas do sexo masculino
    if (pessoasMasculinas.length > 0) {

      const totalSalariosMasculinos = 
      pessoasMasculinas.reduce((total, pessoa) => total + pessoa.salario, 0);

      const mediaSalariosMasculinos = totalSalariosMasculinos / pessoasMasculinas.length;
      return mediaSalariosMasculinos;

    } else {

      return 0; // Se não há homens na lista, a média é 0.
    }
  }
  
  const mediaSalarioHomens = calcularMediaSalarioHomens(data);

  console.log("Média dos salários das pessoas do sexo masculino: " + mediaSalarioHomens);
  
// function mediaSalarioMasculino(data) {
//     let media = 0;

//     for (let i = 0; i < data.length; i++) {
//         if (data[i].sexo === "M") {
//             media += data[i].salario;
//         }
//         console.log(media / data);
//     }
// }
// mediaSalarioMasculino(data);



// 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
const salarioSuperior = data.some(pessoa => pessoa.salario > 7000);
console.log("Existe salário superior a R$ 7.000: " + salarioSuperior);



// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
const encontrarPessoa = data.findIndex(pessoa => pessoa.nome === 'Eva Trindade')
console.log("Posição da pessoa de nome 'Eva Trindade': " + encontrarPessoa);



// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
// Use o método filter para encontrar pessoas com o sobrenome procurado
const pessoasComSobrenomeSilva = data.filter((pessoa) => pessoa.nome.includes('Silva'));
console.log("Pessoas com sobrenome 'Silva':");
console.log(pessoasComSobrenomeSilva);

// 10. Imprima os nomes utilizando o MAP
const nomes = data.map(pessoa => pessoa.nome);
console.log("Nomes:");
console.log(nomes);