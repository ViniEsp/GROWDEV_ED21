// Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

let numero = parseInt(prompt("Digite um número:"));

while (numero< 500) {
    numero = numero * 3;
    console.log(numero);
}
console.log(`O ultimo valor é ${numero}`);