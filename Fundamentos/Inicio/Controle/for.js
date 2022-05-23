console.log('Usando While')
let contador = 1 // declaração da variável
while(contador <= 10) { // expressão
    console.log(`contador = ${contador}`) // saída 
    contador++ // contador
}
console.log('')

console.log('Usando For')
for(let i = 1; i <= 10; i++) {  // i = 1 - declaração variável; i <= 10  - expressão; i++ - contador
    console.log(`i = ${i}`) //saída
}
console.log()

console.log('Usando For com Array')
const notas = [6.7, 7.4, 9.8, 7.7] // array
for(let i = 0; i < notas.length; i++) { // i = 1 - declaração variável; i < notas.length - expressão length vai até o tamanho do array; i++ - contador
    console.log(`nota = ${notas[i]}`) //saída
}