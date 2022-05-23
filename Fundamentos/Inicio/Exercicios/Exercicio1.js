function soma(valor, valor2){
    return valor + valor2
}
console.log('soma: ' + soma(2,5))

function subtracao(valor, valor2){
    return valor -  valor2
}
console.log('subração: ' + subtracao(8,5))

function multiplicacao(valor, valor2){
    return valor * valor2
}
console.log('multiplicação: ' + multiplicacao(4,7))

function divisao(valor, valor2){
    return valor / valor2
}
console.log('Divisão: ' + divisao(10,2))

function calcularValores(num, num2){
    console.log('soma:', num + num2, 'subtração:', num - num2, 'multiplicação:', num * num2, 'divisão:', num / num2)
}
calcularValores(20,20)