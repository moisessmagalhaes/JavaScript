// Função Arrow - É função anônima reduzida, não tem como dar um nome,  sempre cria ela e atribui a uma variável.
const soma = (a, b) => a + b // 'soma' - variável = (a, b) - parâmetro de entrada => (função arrow) 'a + b' (return implicito)
console.log(soma(2,3))

// Função Arrow (this - pode variar de acordo com a chamada da função)
const lexico = () => console.log(this === exports) // Na função tradicional o this aponta para global, na função arrow não é possível mudar o contexto
const lexico2 = lexico.bind({}) // Apontar para outro objeto
lexico()
lexico2()

// Parâmetro default (valor padrão)
function log(texto = 'Node') {
    console.log(texto)
}
log()
log(undefined) // assume o valor padrão
log(null) // assume o valor null
log('Sou mais forte!')

// Operador rest(função de agrupar)/spread(objeto)
function total(...numeros) { // Agrupa em uma estrutura tipo array
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3,4,5))
