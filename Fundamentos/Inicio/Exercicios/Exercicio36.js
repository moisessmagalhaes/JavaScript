let vetor = [3,4,5,7,8,9]
let numero = 0
let vetorResultado = []

function vetorMultiplica(vetor, numero){
    for(let i = 0; i < vetor.length; i++){
        vetorResultado.push(vetor[i] * numero)
    }
    return vetorResultado
}

console.log(vetorMultiplica(vetor, 3))


let vetorInteiro = [3,4,5,7,8,9]
let num = 0
let vetorResultado5 = []

function vetorMultiplica5(vetorInteiro,num){
    for(let i = 0; i < vetorInteiro.length; i++){
        if(vetorInteiro[i] > 5){
            vetorResultado5.push(vetorInteiro[i] * num)
        }
    }
    return vetorResultado5
}

console.log(vetorMultiplica5(vetorInteiro, 3))