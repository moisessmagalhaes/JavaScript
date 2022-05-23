vetor = [1,2,20,22,28,30,40,50,60]

function numerosEntre20e30(vetor) {
    dentroIntervalo = 0
    foraIntervalo = 0
    for(i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 20 && vetor[i] <= 30) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }
    console.log(`Qtde entre 20 e 30: ${dentroIntervalo}, fora do intervalo: ${foraIntervalo}`)
}

numerosEntre20e30(vetor)