function maiorOuIgual(valor, valor2){
   if(valor === valor2) {
       return true
   } else {
       return false
   }
}

console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(0,"0"))
console.log(maiorOuIgual(5,1))
console.log(maiorOuIgual(2,2))

function maiorOuIgual2(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) 
    return false
    return primeiro >= segundo
}
console.log(maiorOuIgual2(0,0))
console.log(maiorOuIgual2(0,"0"))
console.log(maiorOuIgual2(5,1))
console.log(maiorOuIgual2(2,'a'))