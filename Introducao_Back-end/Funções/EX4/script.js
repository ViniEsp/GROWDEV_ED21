/*
4. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.

Ex:
Entrada: 3672
Saída: 1:1:12

*/

function converteHora(segundos){
    let calculo = segundos / 3600
    return Math.trunc(calculo)
}

function converteMin(segundos){
    let calculo = (segundos % 3600)/60
    return Math.trunc(calculo)
}

function converteSeg(segundos){
    let calculo = (segundos % 3600) % 60
    return Math.trunc(calculo)
}

let hora = converteHora(3672)
let minuto = converteMin(3672)
let segundo = converteSeg(3672)

console.log(`${hora}:${minuto}:${segundo}`)