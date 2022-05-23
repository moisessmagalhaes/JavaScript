/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.*/

function objetoParaArray(objeto) {
    const resultado = []

    for(let parChave in objeto)
        resultado.push([parChave, objeto[parChave]])
    return resultado
}
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
    }))


function objetoParaArray2(objeto){
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}
console.log(objetoParaArray2({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }))


function objetoParaArray3(objeto){
    return Object.entries(objeto) // Retorna uma array dos próprios pares
}
console.log(objetoParaArray3({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }))

/*
objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
    objetoParaArray({
    codigo: 11111,
    preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]*/