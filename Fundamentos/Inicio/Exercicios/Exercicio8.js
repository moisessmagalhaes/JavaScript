let stringPontuacoes = "80, 85, 20, 04, 51, 25, 42, 38, 56, 06, 60"

function avaliaPontuacoes(stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let melhorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
            melhorJogo = i+1
        } else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    } return ['Records: ' + qtdQuebraDeRecords, 'Maior pontuação: ' + maiorPontuacao, 'Melhor rodada: ' + melhorJogo, 'Menor pontuação: ' + menorPontuacao, 'Pior rodada: ' + piorJogo]
}
console.log(avaliaPontuacoes(stringPontuacoes))