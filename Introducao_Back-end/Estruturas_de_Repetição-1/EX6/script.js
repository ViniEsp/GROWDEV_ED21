// Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

let i = 30;
while (i >= 1) {
    if(i % 2 === 0){
        document.write(i);
    }else{
        document.write(`[${i}]`);
    }
    
    i--;
}
