// Função transformar valores em formato de moeda Real
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2).replace('.', ',')}`
        resultado.push(partes[indice], valor)
    }) 
    return resultado.join('') // pegar todos os elementos do array resultado e gerar o elemento final
}
const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)