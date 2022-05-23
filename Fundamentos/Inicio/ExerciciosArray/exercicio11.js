function primeiroUltimoElemento(elemento){
    let primeiro = elemento[0]
    let ultimo = elemento[elemento.length -1]
    let resultado = []

    return resultado = [primeiro, ultimo]
}
console.log(primeiroUltimoElemento(['opa',1,2,3,5,7,'Olá']))


function primeiroUltimoElemento2(elementos) {
    const indicePrimeiro = 0
    const indiceUltimo = elementos.length -1
    const primeiroElemento = elementos[indicePrimeiro]
    const ultimoElemento = elementos[indiceUltimo]

    return [primeiroElemento, ultimoElemento]
}

console.log(primeiroUltimoElemento2([1,2,3,5,7]))

function primeiroUltimoElemento3(elementos) {
    const primeiroElemento = elementos.shift()
    const segundoElemento = elementos.pop()

    return [primeiroElemento, segundoElemento]
}
console.log(primeiroUltimoElemento3([1,2,3,5,7]))


function primeiroUltimoElemento4([primeiroElemento, ...elementosRestantes]){ // operador (...) aceita parâmetros variados
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
}
console.log(primeiroUltimoElemento4([0,2,3,5,20]))


function primeiroUltimoElemento5(elementos) {
    //return `[${[elementos.shift(), + elementos.pop()]}]`
    return [elementos.shift(), elementos.pop()]
} 
console.log(primeiroUltimoElemento5(['a',2,3,5,100]))