/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function somaArray(valores){
    let soma = 0
    for(let i = 0; i < valores.length; i++)
        soma += valores[i]
    return soma
}
console.log(somaArray([10,12,5,3]))

var arr = [10,12,5,3]
var soma = arr.reduce(function(soma,i) {
    return soma + i
})
console.log(soma)

function somarNumeros(numeros) {
    const quantidadeDeNumeros = numeros.length
    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
    }
    
console.log(somarNumeros([10,12,5,3]))

function somarNumeros2(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}
    
console.log(somarNumeros2([10,12,5,3]))


function somarNumeros3(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return soma
}
console.log(somarNumeros3([10,12,5,3]))

/*function somaArray2(valores){
    soma = valores.reduce(soma,i) {
        return soma + i
        //return resultado
    }
}
console.log(somaArray2(10,12,5,3))*/