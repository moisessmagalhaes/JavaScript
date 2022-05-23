function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                valorSaque -= 1
                contador1++
                break
        }
         valorNota = calcularValorNota(valorSaque)
    }
    return calcularResultado(contador100, contador50, contador10, contador5, contador1)}

function calcularValorNota(valorSaque) {
    if(valorSaque >= 100){
        return 100
    } 
    if(valorSaque >= 50) {
        return 50
    } 
    if(valorSaque >= 10) {
        return 10
    } 
    if(valorSaque >= 5){
        return 5
    } if(valorSaque >= 1){
        return 1
    }
}

function calcularResultado(contador100, contador50, contador10, contador5, contador1){
    let resultado = ''
    if(contador100 > 0) {
        resultado += `${contador100} notas de R$ 100, ` 
    } 
    if(contador50 > 0) {
        resultado += `${contador50} notas de R$ 50, `
    } 
    if(contador10 > 0) {
        resultado += `${contador10} notas de R$ 10, `
    } 
    if(contador5 > 0 ) {
        resultado += `${contador5} notas de R$ 5, `
    } 
    if(contador1 > 0){
        resultado += `${contador1} notas de R$ 1, `
    }
    return resultado
}

console.log(sacarDinheiro(18))