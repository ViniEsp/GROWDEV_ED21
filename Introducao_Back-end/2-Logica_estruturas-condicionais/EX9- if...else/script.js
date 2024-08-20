// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

// Solicitar a velocidade do carro
const velocidade = parseFloat(prompt("Digite a velocidade do carro (em Km/h):"));

// Definir a velocidade limite
const velocidadeLimite = 80;

// Verificar se o carro ultrapassou o limite de velocidade
if (velocidade > velocidadeLimite) {
    const kmAcima = velocidade - velocidadeLimite;
    const valorMulta = kmAcima * 5;

    document.write(`Você foi multado por exceder a velocidade em ${kmAcima} Km/h. O valor da multa é R$${valorMulta.toFixed(2)}.`);
    
} else {
    document.write("Você está dentro do limite de velocidade. Dirija com segurança!");
}