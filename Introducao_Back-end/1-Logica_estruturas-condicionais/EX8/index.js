// Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valor1 = Number(prompt("Digite o primeiro número: "))
let valor2 = Number(prompt("Digite o segundo número: "))
let mensagens;


// if(valor1 == valor2){
//     console.log("Números iguais")
// }else if(valor1 > valor2)
//     {
//     console.log("Primeiro é maior")
// }else{
//     console.log("Segundo é maior")
// }


var mensagem = valor1 === valor2 ? 'Números iguais' :
 (valor1 > valor2 ? 'Primeiro é maior' : 'Segundo é maior')


