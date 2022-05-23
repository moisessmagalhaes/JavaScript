vetor = [86, 10, 20, 22, 70, 60, 28, 30, 40, 50,26]

function maiorMenorValor(vetor) {
    let menorValor = vetor[0]
    let maiorValor = vetor[0]

    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] > maiorValor) {
            maiorValor = vetor[i]
        } if (vetor[i] < menorValor) {
            menorValor = vetor[i]
        }
    }
    console.log(`Menor valor: ${menorValor}, Maior valor: ${maiorValor}`)
}

maiorMenorValor(vetor)