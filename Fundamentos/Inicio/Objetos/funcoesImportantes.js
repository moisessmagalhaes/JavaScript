const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 10
}

console.log(Object.keys(pessoa)) // acessa os atributos do objeto
console.log(Object.values(pessoa)) // acessa os valores dos atributos do objeto
console.log(Object.entries(pessoa)) // acessa o objeto com todos os valores

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '21/04/2022'
})

pessoa.dataNascimento = '01/01/2021'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)