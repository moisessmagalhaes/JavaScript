function estaEntre(numero, minimo, maximo, inclusivo){
    if(numero > minimo && numero < maximo){
        inclusivo = true
        return inclusivo
    } else 
        return false
}
console.log(estaEntre(60, 50, 100)) // retornará true
console.log(estaEntre(16, 160, 100)) // retornará false
console.log(estaEntre(4, 3, 150)) // retornará false
console.log(estaEntre(2, 3, 150, true)) // retornará true

function estaEntre2(numero,minimo,maximo, inclusivo = false) {
    if(inclusivo) 
        return numero >= minimo && numero <= maximo
            return numero > minimo && numero < maximo
}
console.log(estaEntre2(60, 50, 100)) // retornará true
console.log(estaEntre2(16, 160, 100)) // retornará false
console.log(estaEntre2(4, 3, 150)) // retornará false
console.log(estaEntre2(2, 3, 150, true)) // retornará true

function estaEntre3(numero, minimo, maximo, inclusivo = false){
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log(estaEntre3(60, 50, 100)) // retornará true
console.log(estaEntre3(16, 160, 100)) // retornará false
console.log(estaEntre3(4, 3, 150)) // retornará false
console.log(estaEntre3(2, 3, 150, true)) // retornará true
