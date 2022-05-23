function area(largura, altura) { // parametros da função
    const area = largura * altura // declaração da variável que recebe largura x altura
    if(area > 20) { // teste se área for menor que 20
        console.log(`Valor acima do permitido: ${area}m2`) // saída true
    } else {
        return area // saída false
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))