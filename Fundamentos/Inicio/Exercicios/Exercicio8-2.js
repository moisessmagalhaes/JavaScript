stringPontuacoes = "10, 20, 40, 08, 25, 65, 05, 30, 08"

function avaliarJogos(stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(', ')
    let maiorPontuacao = pontuacoes[0]
    let qtdeQuebraRecords = 0
    let melhorRodada = 0
    let menorPontuacao = pontuacoes[0]
    let piorRodada = 1

    for(let i = 1; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            melhorRodada = i+1
            qtdeQuebraRecords++
        } else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorRodada = i+1
        } 
    }  return ['Maior pontuação: ' + maiorPontuacao, 'Melhor rodada: ' + melhorRodada, 'Qtde records: ' + qtdeQuebraRecords, 'Menor pontuação: ' + menorPontuacao, 'Pior rodada: ' + piorRodada]
}
console.log(avaliarJogos(stringPontuacoes))
