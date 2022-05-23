function repetir(item, quantidade){
    let resultado = []
    for(let i = 0; i < quantidade; i++)
    resultado.push(item)
    return resultado
}
console.log(repetir('Teste', 3))


function repetir2(item, quantidade){
    return Array(quantidade).fill(item)
}
console.log(repetir2('Moisés',5))