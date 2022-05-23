Array.prototype.forEach2 = function(callback) { // criando uma função no prototype
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // valor atual(this[i]), indice atual(i) e o array completo(this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome,indice) { // O índice sempre é passado como segundo parámetro
    console.log(`${indice + 1 }) ${nome}`)
})