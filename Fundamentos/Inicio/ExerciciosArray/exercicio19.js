/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretendese adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.
💡 A média simples é o resultado da soma de todos os números dividido pela quantidade de números.
*/

// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

function calcularMedia(numeros) {
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual)
    return soma / numeros.length
}
console.log(calcularMedia([10, 12, 5, 3]))
console.log(calcularMedia([0, 10])) // retornará 5
console.log(calcularMedia([1, 2, 3, 4, 5])) // retornará 3

function calcularMedia2(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for (numero of numeros) {
        somaTotal += numero
    }
    return somaTotal / quantidadeDeNumeros
}
console.log(calcularMedia2([10, 12, 5, 3]))
console.log(calcularMedia2([0, 10])) // retornará 5
console.log(calcularMedia2([1, 2, 3, 4, 5])) // retornará 3