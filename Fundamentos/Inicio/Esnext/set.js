// const { set } = require("lodash");

const { set } = require("lodash")

// Set - Estrutura não indexada e não permite repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))
console.log(times.size)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)
console.log(nomeSet.size)
