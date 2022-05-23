let vetor = [3,4,5,7,8,9]

function vetorMultiplica(vetor,multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    })
    return vetorResultado
}

console.log(vetorMultiplica(vetor, 3))

let vetor5 = [3,4,5,7,8,9]
function vetorMultiplica5(vetor5, multiplicador){
    let vetorResultado = []
    vetor5.forEach(elemento => {
        if(elemento > 5){
            vetorResultado.push(elemento * multiplicador)
        }
    })
    return vetorResultado
}

console.log(vetorMultiplica5(vetor5, 3))