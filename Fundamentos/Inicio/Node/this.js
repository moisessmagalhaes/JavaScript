console.log(this === global) // false - Fora de uma função não aponta para o escopo global
console.log(this === module) // false - Dentro de um módule node, não aponta para module

console.log(this === module.exports) // true - Fora da função this aponta para module.exports
console.log(this === exports) // true - exports aponta para a mesma referencia de memória do module.exports

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // false - Dentro de uma função this não aponta para exports
    console.log(this === module.exports) // false - Dentro de uma função this não aponta para module.exports
    console.log(this ===  global) // true - Dentro de uma função this aponta para global
    // this.perigo = '...' // Fica disponível no escopo global e pode ser alterado
}

this.perigo = '...' // Fica disponível dentro do módule exports, está transformando em algo públco
logThis()

