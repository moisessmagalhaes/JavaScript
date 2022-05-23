// Object.preventExtensions - não permite adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Lápis',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar' // não permite adicionar novo atributo
delete produto.tag // permite excluir
console.log(produto)

// Object.seal(selar) - Não permite adicionar, excluir novos objetos
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)