/*Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15*/

function menorNumero(numeros){
    let menor = numeros[0]

    for(let i in numeros)
        if(numeros[i] < menor)
            menor =  numeros[i]
        return menor
}
console.log(menorNumero([10, 5, 35, 65]))


function menorNumero2(numeros){
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}
console.log(menorNumero2([10, 5, 3, 65]))


function menorNumero3(numeros){
    return Math.min(...numeros)
}
console.log(menorNumero3([10, 15, 23, 65]))