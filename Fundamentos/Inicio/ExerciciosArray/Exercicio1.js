/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final. */

function cumprimentar(saudar) {
    return `Olá, ${saudar}!`
}

console.log(cumprimentar2('Leonardo'))
console.log(cumprimentar2('Maria'))

function cumprimentar2(nome){
    return 'Olá, ' + nome + '!' 
}
console.log(cumprimentar2('Moisés'))

function cumprimentar3(nome) {
    const saudacao = 'Olá'
    return `${saudacao}, ${nome}!`
}
console.log(cumprimentar3('Moisés'))
