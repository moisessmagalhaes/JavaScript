const sequencia = {
    _valor: 1, // convensão
    get valor() { return this._valor++}, // consulta o valor
    set valor(valor){ // Altera o valor
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 999
console.log(sequencia.valor, sequencia.valor)