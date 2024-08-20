// Crie três variáveis JavaScript, em duas delas atribua os valores que
// você quiser e na outra atribua o valor da soma das duas primeiras
// variáveis. Apresente valor da soma no documento html junto da
// frase "A resultado da soma de x e y é z", sendo x o valor armazenado
// na primeira variável, y o valor armazenado segunda variável e z o
// valor armazenado na terceira variável

let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor:"));

let soma = valor1 + valor2;

document.write("A soma dos valores é "+soma);