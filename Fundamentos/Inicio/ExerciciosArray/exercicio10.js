// Usando o for
function simboloMais(quantidade) {
    let resultado = ''
    for(let i = 0; i < quantidade; i++)
    resultado += '+'
    return resultado
}
console.log(simboloMais(10))

// Usando funções Array, fill e join
function simboloMais2(quantidade){
    let resultado = ''
    return Array(quantidade).fill('+').join('')  // 
}
console.log(simboloMais2(2))

// Usando a funções repeat
function simboloMais3(quantidade){
    return '+'.repeat(quantidade)
}
console.log(simboloMais3(3))