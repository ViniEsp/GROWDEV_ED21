// Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

let soma = 0;
let i = 0;

do{
    soma += i;
    i++;

}while(i <= 100);
document.write("A soma dos numeros entre 10 e 100 é: " + soma);