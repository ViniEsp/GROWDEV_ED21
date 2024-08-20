/*
Desenvolva um algoritmo que declare uma lista de 10 números e
solicite um número para o usuário e no final informe se o número
que o usuário digitou está dentro da lista ou não.

*/

let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numero = Number(prompt(`Digite um número`));

let resultado = false;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
        resultado = true;
    }
}

if (resultado) {
    document.write(`O número ${numero} está na lista.`);
} else {
   document.write(`O número ${numero} não está na lista.`);
}

