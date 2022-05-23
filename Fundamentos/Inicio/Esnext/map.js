const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function() {}, 'Função'], // a chave é uma função
    [{}, 'Objeto'], // a chave é um objeto
    [123, 'Número'] // a chave é um valor númerico
])
chavesVariadas.forEach((valor, chave) => { // percorre o array pegando o primeiro elemento: chave, e o segundo elemento: valor
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))  // has verifica se o elemento está contido no map
console.log(chavesVariadas.size)
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) 

chavesVariadas.set(123, 'a') 
chavesVariadas.set(123, 'b') // Não aceita chaves repetidas, pega a última chave setada
chavesVariadas.set(456, 'b') // Aceita valores repetidos
console.log(chavesVariadas)