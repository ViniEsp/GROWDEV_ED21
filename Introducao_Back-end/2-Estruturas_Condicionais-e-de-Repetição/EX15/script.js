// Crie um algoritmo que armazene três valores, para cada um dos lados de um triângulo: A, B e C. 
// Verifique se os lados fornecidos formam realmente um triângulo. 
// Se formar, deve mostrar no consoleo tipo de triângulo: isósceles, escaleno ou equilátero.

// a. Para verificar se os lados fornecidos formam um triângulo: A < B + C e B < A + C e C < A + B.

// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C);

// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e B<>C e A<>C);

// d. Triângulo equilátero: possui todos os lados iguais (A=B e B=C);


alert("Informe os lados do triângulo para saber se ele é isóceles, escaleno ou equilátero.")

let A = parseFloat(prompt("Lado A: "));
let B = parseFloat(prompt("Lado B: "));
let C = parseFloat(prompt("Lado C: "));

if (A < B + C && B < A + C && C < A + B) {
    if (A == B && B == C) {
        alert("Triângulo Equilátero: possui todos os lados iguais");
    } else if (A == B || B == C || A == C) {
        alert("Triângulo Isóceles: possui dois lados iguais");
    } else {
        alert("Triângulo Escaleno: possui todos os lados diferentes");
    }
}


