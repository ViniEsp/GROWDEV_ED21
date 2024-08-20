// Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir, fatam () anos para voce poder dirigir”.

let idade = parseInt(prompt("Digite sua idade"));

if (idade >= 18) {
    console.log("Pode dirigir");
    document.write("Pode dirigir")
}else if(idade < 18){
    const anosParaDirigir = 18 - idade;
    console.log(`Não pode dirigir, faltam ${anosParaDirigir} anos para você poder dirigir.`);
    document.write(`Não pode dirigir, faltam ${anosParaDirigir} anos para você poder dirigir.`);
}else{
    console.log("Nenhuma idade foi digitada.");
    document.write("Nenhuma idade foi digitada.");
}