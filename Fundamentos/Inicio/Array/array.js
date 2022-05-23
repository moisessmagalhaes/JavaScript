console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // adicionar eleentos ao array
aprovados.push('Abia') // adicionar elementos ao array
console.log(aprovados.length)
// delete aprovados[1]
console.log(aprovados[0])
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordena os dados no  indices
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(3, 2, 'elemento1','elementos2') // Serve para adicionar/remover elementos num determinado indice
console.log(aprovados)