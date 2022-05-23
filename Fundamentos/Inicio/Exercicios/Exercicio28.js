let inteiros = [1, 2, 3, 5, 6, 7, 8, 9]

function numerosInteiros(inteiros) {
    let qtdePar = 0
    let qtdeImpar = 0
    for (let i = 0; i < inteiros.length; i++) {
        if (inteiros[i] % 2 == 0) {
            qtdePar++
        } else {
            qtdeImpar++
        }
    }
    console.log(`Qtde pares: ${qtdePar}, qtde impar: ${qtdeImpar}`)
}

numerosInteiros(inteiros)
// console.log(`Qtde pares: ${numerosInteiros(inteiros)[0]}, qtde impar: ${numerosInteiros(inteiros)[1]}`)