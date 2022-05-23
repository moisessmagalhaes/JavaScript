vetor = [86, 10, 20, 22, 70, 60, 28, 30, 40, 50,26]

function mediaAritmetica(vetor){
    soma = 0
    for(i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    console.log(`Valor: ${soma}, Media: ${(soma / vetor.length).toFixed(2)}`)
}

mediaAritmetica(vetor)