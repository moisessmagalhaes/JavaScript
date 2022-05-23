function valorInverso(valor) {
    if(typeof(valor) == 'string'){
        return "booleano ou número esperados, mas o parâmetro é do tipo string."
    } else if(valor === 0) {
        return `O inverso de: ${valor} é: 0`
    }  else if( valor === true){
        return `O inverso de: true é: ${false}`
    } else if( valor === false) {
        return `O inverso de: false é: ${true}` 
    } else if(valor > 0 || valor < 0 ) {
        return `O inverso de: ${valor} é: ${valor * (-1)}`
   
    } else {
        return "booleano ou número esperados, mas o parâmetro é do tipo string."
    }
}

console.log(valorInverso('6'))
console.log(valorInverso(-2))
console.log(valorInverso(0))
console.log(valorInverso(10))
console.log(valorInverso(true))
console.log(valorInverso(false))
console.log(valorInverso('Olá'))
