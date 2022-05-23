// Mapear os elementos de um array, transformar e gerar um novo array
const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 10
})

console.log(`Array original: [${nums}], novo Array: [${resultado}]`)

const soma10 = e => e + 10
const triplo = e => e * 3
const moeda = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(moeda)
//resultado = nums.map(triplo).map(soma10).map(moeda)

console.log(resultado)