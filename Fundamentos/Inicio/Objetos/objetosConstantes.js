// a função pessoa aponta para um endereço de memória ... -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456(endereço memória) -> {...} atributo
// pessoa = {nome: 'Ana'} - Não pode alterar o objeto pessoa
// console.log(pessoa)


// TORNAR O OBJETO CONSTANT, NÃO PODE MAIS ALTERAR NADA.
Object.freeze(pessoa) // congela o objeto, não consegue alterar um atributo
pessoa.nome = 'Ana' // não altera o objeto
pessoa.end = 'Rua 123' // não inclui novo atributo
delete pessoa.nome // não deteta o objeto
console.log(pessoa.nome)

// CRIAR UM OBJETO COMO CONSTANT DESDE O INÍCIO
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)