function potencia(base, expoente){
    let resultado = Math.pow(base,expoente)
    return resultado
}
console.log('Usando a função Math.pow')
console.log(potencia(3,2))
console.log()

function exponencial(base, expoente){
    let resultado = base ** expoente
    return resultado
}
console.log('Usando a função base ** expoente')
console.log(exponencial(3,3))
console.log()

function expoente(base, expoente){
    let resultado = base **= expoente
    return resultado
}
console.log('usando a função base **= expoente')
console.log(expoente(4,4))