/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6 */

function segundoMaior(numeros) {
    let indiceDoMaior = 0
    let segundoMaior
    numeros.forEach( (numero, indice) => { // percorre o array e pega o maior valor
    if( numero > numeros[indiceDoMaior] ) // verifica se o numero atual é maior que Indice na posição IndiceDoMaior
    indiceDoMaior = indice // IndiceDoMaior recebe o Indice atual
    })
    numeros.splice(indiceDoMaior, 1) // Deleta o maior valor no indiceDoMaior valor na posição 1
    segundoMaior = numeros[0] // recebe 
    numeros.forEach(numero => { // forEach para pegar o segundo maior valor.
    if(numero > segundoMaior)
    segundoMaior = numero
    })
    return segundoMaior
}
console.log(segundoMaior([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6 */
    

function segundoMaior2(numeros) {
    const maiorNumero = Math.max(...numeros) // Pega o maior valor
    numeros = numeros.filter(numero => numero != maiorNumero) // filtra no array os diferentes do maior valor
    const segundoMaior = Math.max(...numeros) // pega o segundo maior valor
    return segundoMaior // retorna o segundo maior valor
}
console.log(segundoMaior2([12, 16, 1, 5])) // retornará 12


function segundoMaior3(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1] // O maior valor está no indice[0]
    return segundoMaior
}
console.log(segundoMaior3([12, 16, 1, 5])) // retornará 12


function segundoMaior4(numeros) {
    const numerosOrdenados = numeros.sort()
    const segundoMaior = numerosOrdenados[1] // O maior valor está no indice[0]
    return segundoMaior
}
console.log(segundoMaior4([12, 16, 1, 5])) // retornará 12