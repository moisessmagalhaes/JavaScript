vetorInteiro = [1,2,3,4], vetorString = ['a','b','c','d'], vetorDouble = [1.1,2.2,3.3,4.4]

function concatenarVetores(args){
    let vetorConcat = []
    for(let i = 0; i < arguments.length; i++){
        vetorConcat = vetorConcat.concat(arguments[i])
       }
    return vetorConcat
}

console.log(concatenarVetores(vetorInteiro, vetorString, vetorDouble))


let vetorInteiro = [1,2,3,4]
let vetorString = ['a','b','c','d']
let vetorDouble = [1.1,2.2,3.3,4.4]

function concatenar(args){
    let resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorString, vetorDouble))

