// Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

let dia = parseInt(prompt("Digite um número de 1 a 7:"));


switch (dia) {
    case 1:
        document.write("Domingo");
    break;
    case 2:
        document.write("Segunda");
    break;
    case 3:
        document.write("Terça");
    break;
    case 4:
        document.write("Quarta");
    break;
    case 5:
        document.write("Quinta");
    break;
    case 6:
        document.write("Sexta");
    break;
    case 7:
        document.write("Sábado");
    break;
    default:
        document.write("Dia inválido");
    break;
}

// const diasDaSemana = [
//     "Domingo", "Segunda-feira", "Terça-feira",
//     "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
//   ];
  
//   let numero;
  
//   while (true) {
//     numero = parseInt(prompt("Digite um número de 1 a 7:"));
//     if (numero >= 1 && numero <= 7) break;
//     console.log("Número fora do intervalo válido (1 a 7). Tente novamente.");
//   }
  
//   console.log(diasDaSemana[numero - 1]);
  
