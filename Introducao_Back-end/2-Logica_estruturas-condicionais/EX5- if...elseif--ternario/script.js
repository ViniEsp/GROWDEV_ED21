// Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// que digite sua altura, em seguida solicitar que digite seu peso e que
// lhe exiba o status. O status vai variar da seguinte forma:

// a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// “Você está abaixo da faixa de peso ideal”;

// b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// “Você está acima da faixa de peso ideal”;

// c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// 24,99, o status a ser mostrado será “Você está dentro da faixa
// de peso ideal”.


let altura = parseFloat(prompt("Digite sua altura em metros:"));
let peso = parseFloat(prompt("Digite seu peso em kg:"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    document.write("Você está abaixo da faixa de peso ideal");
} else if (imc > 24.99) {
    document.write("Você está acima da faixa de peso ideal");
} else {
    document.write("Você está dentro da faixa de peso ideal");
}

// let altura = parseFloat(prompt("Digite sua altura em metros:"));
// let peso = parseFloat(prompt("Digite seu peso em kg:"));

// let imc = peso / (altura * altura);

// let mensagem =
//   imc < 18.5
//     ? "Você está abaixo da faixa de peso ideal"
//     : imc > 24.99
//     ? "Você está acima da faixa de peso ideal"
//     : "Você está dentro da faixa de peso ideal";

// document.write(mensagem);