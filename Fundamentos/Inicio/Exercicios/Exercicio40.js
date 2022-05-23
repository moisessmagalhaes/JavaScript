let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8, 0]
let vetorConceitos = conceituarNotas(notas)

function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i] >= 0 && notas[i] <= 4.9) {
            conceitos.push('D')
        } else if(notas[i] >= 5.0 && notas[i] <= 6.9) {
            conceitos.push('C')
        } else if(notas[i] >= 7.0 && notas[i] <= 8.9) {
            conceitos.push('B')
        } else if(notas[i] >= 9.0 && notas[i] <=10) {
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')
        }
    }
    return conceitos
}

console.log(vetorConceitos)