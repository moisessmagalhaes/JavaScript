function imprimirImpares(inicio = 0, fim = 100) {
    let aux
    if(inicio > fim) {
        aux = fim
        fim = inicio
        inicio = aux
        /*inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim*/
    } // if
    
    for(let i = inicio; i <= fim; i++) {
        if(i % 2 == 1) {
            console.log(i)
        } // if
    } // for  
} // função
console.log(imprimirImpares(20,5))