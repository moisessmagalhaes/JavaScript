const fabricantes = ["Buggati", "Mercedes", "Audi", "BMW", "Ferrari"]

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}

console.log('Fabricantes com índice')
fabricantes.forEach(imprimir)
console.log('')
console.log('Fabricantes sem o índice')
fabricantes.forEach(function(fabricantes){
    console.log(fabricantes)
})