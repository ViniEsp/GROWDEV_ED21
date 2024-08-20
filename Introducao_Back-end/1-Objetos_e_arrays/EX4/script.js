/*
Crie um cadastro de pessoas onde o usuário informe o nome, idade e se está trabalhando ou não, se a pessoa estiver trabalhando pergunte para ele o salário que está ganhando.

Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar cadastrando ou não.

No final, mostre as pessoas que estão desempregadas, as pessoas que estão empregadas separadas pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
*/
const pessoas = [];

while (true) {
    let nome = prompt("Digite o seu nome");
    let idade = parseInt(prompt("Digite a sua idade"));
    const trabalhando = prompt("A pessoa está trabalhando? (Sim/Não): ").toLowerCase();

    let salario = 0;
    if (trabalhando === "sim") {
        salario = parseFloat(prompt("Informe o salário da pessoa: "));
    }

    const pessoa = {
        nome: nome,
        idade: idade,
        trabalhando: trabalhando,
        salario: salario
    };
    pessoas.push(pessoa);

    const continuar = prompt("Deseja continuar cadastrando? (Sim/Não): ").toLowerCase();
    if (continuar !== "sim") {
        break;
    }
}

console.log("\nPessoas desempregadas:");
pessoas.forEach(pessoa => {
    if (pessoa.trabalhando === "não") {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    }
});

console.log("\nPessoas empregadas com salários menores que 2500:");
pessoas.forEach(pessoa => {
    if (pessoa.trabalhando === "sim" && pessoa.salario < 2500) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
    }
});

console.log("\nPessoas empregadas com salários maiores que 2500:");
pessoas.forEach(pessoa => {
    if (pessoa.trabalhando === "sim" && pessoa.salario >= 2500) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
    }
});