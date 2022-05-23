// ESB: Object.values, Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // transforma o objeto em um array
console.log(Object.entries(obj)) // Transforma o objeto em uma matriz, array de arrays

// Melhorias na lotação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome + ',', pessoa.ola())

// Class - Internamente é convertida para uma função
class Animal {}
class Cachorro extends Animal { // extends Animal (herança da classe animal)
    falar() {
        return 'Au au!'
    }
}
console.log(new Animal().falar())