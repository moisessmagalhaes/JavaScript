function multiplicar(numeroA, numeroB){
    let resultado = 0
    /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
realizada aqui para diminuir a quantidade de loops */
    for(let i = 0; i < numeroB;i++)
        resultado += numeroA
        return resultado
}
console.log(multiplicar(2,4))

function multiplicar2(numero, multiplicador) { // não entendi essa lógica
    if(numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar2(numero, multiplicador -1)
}
console.log(multiplicar2(4,3))

function multiplicar3(numeroA, numeroB){ // não entendi essa lógica
    if(numeroA === 0 || numeroB === 0) return 0

    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)

    function multiplicarRecursivamente(numero, multiplicador){
        return (
            multiplicador === 1 ? numero : numero + multiplicarRecursivamente(numero, multiplicador -1)
        )
    }
    // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo d
    return multiplicarRecursivamente(maiorNumero, menorNumero)
}
console.log(multiplicar3(2,3))
