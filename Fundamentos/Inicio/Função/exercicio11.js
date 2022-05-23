function anoBisexto(ano){
    if(ano <= 0){
        return false
    } else if (ano % 400 ==0) {
        return true
    } else if(ano % 100 == 0){
        return false
    } else if(ano % 4 == 0){
        return true
    } else {
        return false
    }
}

console.log(anoBisexto(0))
console.log(anoBisexto(4))
console.log(anoBisexto(100))
console.log(anoBisexto(400))
console.log(anoBisexto(800))
console.log(anoBisexto(2020))
console.log(anoBisexto(2021))