/*
Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/



let ano_nascimento = parseInt(prompt("Digite seu ano de nascimento"));
let anoAtual = 2023;//Date.getFullYear(); ---  ?
let idade = anoAtual - ano_nascimento;

if(idade >= 16){
    console.log("Pode votar este ano");
}else{
    console.log("Nao pode votar este ano");
}

