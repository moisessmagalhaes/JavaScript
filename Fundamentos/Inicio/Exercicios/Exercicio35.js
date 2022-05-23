let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionarVetor(vetorPilha, vetorAdicionar){
    for(let i = 0; i < vetorAdicionar.length; i++){
        console.log(vetorAdicionar[i]) // mostra cada item adicionado na tela
        vetorPilha.push(vetorAdicionar[i]) // adiciona cada item do vetorAdicionar ao final do vetorPilha
    }
    console.log(`Vetor adicionado: [${vetorAdicionar}]`)
    console.log(`Vetor resultado: [${vetorPilha}]`)
}

adicionarVetor(vetorPilha, vetorAdiciona)