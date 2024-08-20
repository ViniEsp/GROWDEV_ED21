// Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

// Idade Peso Categoria
// Até 12 anos - Infantil

// 13 a 16 anos Até 40kg Juvenil leve
// Acima de 40kg Juvenil pesado

// 17 a 24 anos Até 45kg Sênior leve
// Acima de 45kg até 60kg Sênior médio

// Acima de 60kg Sênior pesado
// Acima de 24 anos - Veterano

// Solicitar a idade e peso do atleta
const idade = parseInt(prompt("Digite a idade do atleta:"));
const peso = parseFloat(prompt("Digite o peso do atleta (em kg):"));

// Inicializar uma variável para armazenar a categoria
let categoria = "";

// Verificar a categoria com base na idade e peso

if (idade <= 12) {
    categoria = "Infantil";
} else if (idade >= 13 && idade <= 16) {
    if (peso <= 40) {
        categoria = "Juvenil leve";
    } else {
        categoria = "Juvenil pesado";
    }
} else if (idade >= 17 && idade <= 24) {
    if (peso <= 45) {
        categoria = "Sênior leve";
    } else if (peso <= 60) {
        categoria = "Sênior médio";
    } else {
        categoria = "Sênior pesado";
    }
} else {
    categoria = "Veterano";
}

/*
const categoria =
  idade <= 12 ? "Infantil" :
  idade >= 13 && idade <= 16 ? (peso <= 40 ? "Juvenil leve" : "Juvenil pesado") :
  idade >= 17 && idade <= 24 ? (peso <= 45 ? "Sênior leve" : peso <= 60 ? "Sênior médio" : "Sênior pesado") :
  "Veterano";
console.log(`A categoria do atleta é: ${categoria}`);
*/

// Exibir a categoria
document.write(`O atleta se encaixa na categoria: ${categoria}`);
