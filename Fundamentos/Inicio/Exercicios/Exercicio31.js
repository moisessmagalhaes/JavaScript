vetor = [-1, 19, -5, 30, 40, -30]

function contaNumerosNegativos(vetor) {
    qtde = 0
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] < 0) {
            qtde++
        }
    }
    console.log(`Qtde números negativos: ${qtde}`)
}

contaNumerosNegativos(vetor)