function resultadoDivisao(dividendo, divisor){
    console.log('Resultado: ' + Math.floor(dividendo/divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}
resultadoDivisao(8,3)

function divisao(dividendo, divisor){
    let resultado = Math.floor(dividendo / divisor)
    let resto = dividendo % divisor
    return resultado
    return resto // a função só retorna um parâmetro de saída
}
console.log(divisao(3,2))
