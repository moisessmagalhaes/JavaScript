module.exports = function(...nomes) { // lista de nomes - argumento variável pode passar quantos nomes quiser
    return nomes.map(nome => `Boa semana ${nome}`)
}