/*A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos,
que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é
bissexto ou não.
 */

function checarAnoBissexto(ano){
    if(ano <= 0){
        return false
    } else if(ano % 4 === 0) {
        return true
    } else if(ano % 100 === 0) {
        return true
    } else if(ano % 400 === 0) {
        return true
    } else {
        return false
    }
}
console.log(checarAnoBissexto(2024))

function checarAnoBissexto2(ano){
    divisivelPorQuatro = ano % 4 === 0
    divisivelPorCem = ano % 100 === 0
    divisivelPorQuatrocentos = ano % 400 === 0
    return divisivelPorQuatro && !divisivelPorCem || divisivelPorQuatrocentos 
}
console.log(checarAnoBissexto2(2000))
console.log(checarAnoBissexto2(2021))

function checarAnoBissexto3(ano) {
    return new Date(ano, 1, 29).getDate() === 29 
}
console.log(checarAnoBissexto3(2000))
console.log(checarAnoBissexto3(2021))
