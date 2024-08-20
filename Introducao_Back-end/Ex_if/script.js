<<<<<<< HEAD
// Se a média ficar entre 9 e 10 deve ser mostrado no html a mensagem: Aprovado com nota excelente
// Se a média ficar entre 7 e 8 (não incluso) deve ser mostrado no html a mensagem: Aprovado com uma nota boa
// Se a média ficar abaixo de 7 deve ser solicitado uma outra nota que será a nota de recuperação.
// Se a nota de recuperação for maior que 6 deve ser mostrado a mensagem no html: Aprovado na recuperação
// Se a nota ficar abaixo de 6 deve ser mostrado a mensagem no html: Reprovado, estude e pratique mais

function Nota() {
    const nota = parseFloat(document.getElementById("nota").value);
    const resultadoElement = document.getElementById("resultado");

    if (nota >= 9 && nota <= 10) {
        resultadoElement.textContent = "Aprovado com nota excelente";
    } else if (nota >= 7 && nota <= 8) {
        resultadoElement.textContent = "Aprovado com uma nota boa";
    } else if (nota < 7) {
        const recup = parseFloat(prompt("Digite a nota de recuperação:"));
        if (recup > 6) {
            resultadoElement.textContent = "Aprovado na recuperação";
        } else {
            resultadoElement.textContent = "Reprovado, estude e pratique mais.";
        }
    } else {
        resultadoElement.textContent = "Nota inválida";
    }
    
=======
// Se a média ficar entre 9 e 10 deve ser mostrado no html a mensagem: Aprovado com nota excelente
// Se a média ficar entre 7 e 8 (não incluso) deve ser mostrado no html a mensagem: Aprovado com uma nota boa
// Se a média ficar abaixo de 7 deve ser solicitado uma outra nota que será a nota de recuperação.
// Se a nota de recuperação for maior que 6 deve ser mostrado a mensagem no html: Aprovado na recuperação
// Se a nota ficar abaixo de 6 deve ser mostrado a mensagem no html: Reprovado, estude e pratique mais

function Nota() {
    const nota = parseFloat(document.getElementById("nota").value);
    const resultadoElement = document.getElementById("resultado");

    if (nota >= 9 && nota <= 10) {
        resultadoElement.textContent = "Aprovado com nota excelente";
    } else if (nota >= 7 && nota <= 8) {
        resultadoElement.textContent = "Aprovado com uma nota boa";
    } else if (nota < 7) {
        const recup = parseFloat(prompt("Digite a nota de recuperação:"));
        if (recup > 6) {
            resultadoElement.textContent = "Aprovado na recuperação";
        } else {
            resultadoElement.textContent = "Reprovado, estude e pratique mais.";
        }
    } else {
        resultadoElement.textContent = "Nota inválida";
    }
    
>>>>>>> 663bc9bc7b647aa1dfab92136474250c2a04ce18
}