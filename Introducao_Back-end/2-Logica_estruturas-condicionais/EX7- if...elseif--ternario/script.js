// Faça um algoritmo que simule um caixa eletrônico. 
// Nesse algoritmo a conta do usuário deve ser criada já com um saldo positivo.
// O usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo.
// Cada saque eletrônico cobra uma taxa de R$4.50. 
// Ao final deve ser informado o saldo da conta caso dê tudo certo com o saque, e se o usuário informar um valor maior que o saldo deve ser informado ao usuário que o mesmo não tem dinheiro suficiente em conta para realizar o saque.
// 
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.


let saldo = 1000; // saldo inicial da conta do usuário
document.write("<h2>"+ `Seu sealdo atual é de R$${salso}.`);

let valorSaque = parseFloat(prompt("Digite o valor que deseja sacar:"));


if (valorSaque > saldo) {
    document.write("Você não tem dinheiro suficiente em conta para realizar o saque.");
} else if (valorSaque % 5 !== 0) {
    document.write("O valor do saque deve ser múltiplo de 5.");
} else {
    saldo -= (valorSaque + 4.50); // desconta o valor do saque e a taxa
    document.write(`Saque realizado com sucesso! Saldo atual: R$${saldo.toFixed(2)}`);
}

/*
const mensagem = 
  valorSaque > saldo
    ? "Você não tem dinheiro suficiente em conta para realizar o saque."
    : valorSaque % 5 !== 0
    ? "O valor do saque deve ser múltiplo de 5."
    : (saldo -= valorSaque + 4.50, `Saque realizado com sucesso! Saldo atual: R$${saldo.toFixed(2)}`);

document.write(mensagem);
*/
