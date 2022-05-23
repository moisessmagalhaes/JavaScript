function retornarInverso(valor){
    const tipo = typeof valor
    if(tipo == "boolean")
    return !valor
    else if(tipo == "number")
    return -valor
    else 
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}.`
}
console.log(retornarInverso(true))
console.log(retornarInverso('6'))
console.log(retornarInverso(10))
console.log(retornarInverso(-10))