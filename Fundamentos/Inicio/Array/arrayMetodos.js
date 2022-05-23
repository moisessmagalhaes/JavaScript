const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elementos ao array na última posição

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elemento no indice[0] do array
console.log(pilotos)

// splice pode adicionar/remover elementos
//1. Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // no indice[2] adiciona dois elementos, 0 não deleta ninguém
console.log(pilotos)

// 2. Remover
pilotos.splice(3, 1) // remove [1] elemento no indice[3]
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // pega todos os elmentos a partir do indice[2]
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // pegar o intervalo a partir do indice[1] até anterior ao indice[4]
console.log(algunsPilotos2)