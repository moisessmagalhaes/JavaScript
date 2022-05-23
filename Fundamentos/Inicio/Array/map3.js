Array.prototype.map2 = function(callback) {
    const newArray = []
    for(i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) // Elemento atual: this[i], indice: i, Array original:
    }
    return newArray
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Cadeno", "preco": 13.90}',
    '{ "nome": "Kit de lápis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// retornar array apenas com  preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)


