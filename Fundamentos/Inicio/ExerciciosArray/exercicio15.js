/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por
2 é zero.
Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22] */


function numerosParesDeIndicesPares(numeros) {
    let resultado = []
    for(let i = 0; i < numeros.length; i += 2) {
        const nummeroPar = numeros[i] % 2 === 0
        if(nummeroPar)
        resultado.push(numeros[i])
    }
    return resultado
}
console.log(numerosParesDeIndicesPares([1, 2, 3, 4]))
console.log(numerosParesDeIndicesPares([10, 70, 22, 43]))

function numerosParesDeIndicesPares2(numeros){
    return numeros.filter((numero,indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 ===0
        return numeroPar && indicePar
    })
}
console.log(numerosParesDeIndicesPares2([10, 70, 22, 43]))
