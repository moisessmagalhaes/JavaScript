const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
console.log('Função sem callback')
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i]) // push - para adicionar um novo elementro ao array
    } 
}

console.log(notasBaixas)
console.log('')

// Com callback
console.log('Função com Callback')
const notasBaixas2 = notas.filter(function(nota){ // filter - função que vai filtrar os elementros do array
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
console.log('')

console.log('Notas menor que 7')
const notasMenorque7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorque7)
console.log(notasBaixas4)

// callback com função arrow
console.log('')
console.log('Notas maior que 7')
const notasMaiorQue7 = nota => nota > 7
const aprovados = notas.filter(notasMaiorQue7)
console.log(aprovados)