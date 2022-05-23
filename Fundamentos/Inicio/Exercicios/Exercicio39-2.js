let vetorA = [1,2,3,4]
let vetorB = [5,6,7,8]

function inverterVetor(vetorA, vetorB) {
    if(vetorA.length == vetorB.length) {
        
        for(let i = 0; i < vetorA.length; i++) { 
        let somaA
        let somaB
        vetorA[i] = vetorA[i] + vetorB[i]
        console.log('somaA:' + (somaA[i] = vetorA[i] + vetorB[i]))
        vetorB[i] = vetorA[i] - vetorB[i]
        vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else { 
        console.log('Vetores com tamanhos diferentes')
    }
    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}
console.log(inverterVetor(vetorA, vetorB))