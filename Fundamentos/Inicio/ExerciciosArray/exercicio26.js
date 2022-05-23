/* Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais.
Exemplos:
Resoluções - Exercícios - Curso Fundamentos de Programação 13
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts" */

function removerVogais(frase){
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    return frase
}
console.log(removerVogais("Cod3r")) // retornará "Cd3r"
console.log(removerVogais("Fundamentos")) // retornará "Fndmnts" 


function removerVogais2(frase) {
    return frase.replace(/[aeiou]/ig, '')
}
console.log(removerVogais2("Cod3r")) // retornará "Cd3r"
console.log(removerVogais2("Fundamentos")) // retornará "Fndmnts"    
