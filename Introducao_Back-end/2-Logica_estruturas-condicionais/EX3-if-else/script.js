// Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

let num = parseInt(prompt("Digite um numero:"));

if(num % 2 === 0){
    document.write(`O numero ${num} é par!`);
}else{
    document.write(`O numero ${num} é impar!`);
}