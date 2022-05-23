/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
Exemplos:
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
 */

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada){
    let resultado = []
    for(numero of numeros){
        const quantidadeDigitos = String(numero).length
        if(quantidadeDigitos === quantidadeDesejada)
        resultado.push(numero)
    }
    return resultado
}
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]


function filtrarPorQuantidadeDeDigitos2(numeros, quantidadeDesejada){
    return numeros.filter(numero => {
        const quantidadeDigitos = String(numero).length
        return quantidadeDigitos === quantidadeDesejada
    })
}
console.log(filtrarPorQuantidadeDeDigitos2([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos2([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]
