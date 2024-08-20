// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que: <br>
// a. Lucas e Pedro tenham o mesmo tamanho; <br>
// b. Lucas seja maior que Pedro.

let Lucas = 1.10;
let Pedro = 1.50;
let crescimentoLucas = 3;
let crescimentoPedro = 2;

const idadeAnos = (alturaInicial, crescimento) => {
    let anos = 0;
    while (alturaInicial < Pedro) {
        alturaInicial += crescimento;
        anos++;
    }
    return anos;
}

console.log(`Para que Lucas e Pedro tenham o mesmo tamanho, são necessários ${idadeAnos(Lucas, crescimentoLucas)} anos.`);

console.log(`Para que Lucas seja maior que Pedro, são necessários ${idadeAnos(Lucas, crescimentoLucas - crescimentoPedro)} anos.`);