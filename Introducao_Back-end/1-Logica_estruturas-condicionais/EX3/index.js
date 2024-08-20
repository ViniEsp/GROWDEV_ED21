// Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"

let totalCompra = parseInt(prompt("Digite o total da compra: "));
let parcelas = parseInt(prompt("Digite a quantidade de parcelas: "));

let valorParcela = totalCompra / parcelas;

document.write("O valor total da compra foi R$"+totalCompra+",00");
                                               
document.write("<br> Forma de Pagamento: "+parcelas+" x R$"+valorParcela.toFixed(2));