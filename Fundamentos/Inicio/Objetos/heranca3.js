const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelos ${filha2.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?// hasOwnProperty - Verifica se pertence ao próprio objeto ou se veio por herança
        console.log(key) : console.log(`por herança: ${key}`)
}