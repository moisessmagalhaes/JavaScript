function juroSimples(capital, juros, tempo){
   return capital + (capital * juros * tempo)
}

function jurosCompostos(capital, juros, tempo){
    return capital * (1 + juros) ** tempo
}

console.log('Montante: ' + juroSimples(1000, 10/100, 3))
console.log('Montante: ' + jurosCompostos(1000, 10/100, 3))
