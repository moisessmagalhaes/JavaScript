let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 100"

function avaliaPontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 0; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            partidaMaiorPontuacao = i + 1
            qtdQuebraRecords++
        } else if (pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
            pontoPiorJogo = pontuacoes[i]
        }
    }
    return 'Qtde quebra records = ' + [qtdQuebraRecords] +
     ', Maior pontuação = ' + [maiorPontuacao] +
     ', Partida maior pontuação = ' + [partidaMaiorPontuacao] +
     ', Partida do pior jogo = ' + [piorJogo] + 
     ', Pior pontuação = ' + [pontoPiorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))