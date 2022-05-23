function calculadora(valor, operacao, valor2){
    /*let valor = 0
    let valor2 = 0
    let operação = ''*/
    switch (operacao){
        case '+' :
            console.log('Somar: ' + (valor + valor2))
            break
        case '-':
            console.log('Diminuir: ' + (valor - valor2))
            break
        case '*':
            console.log('Multiplicar: ' + (valor * valor2))
            break
        case '/':
            console.log('Dividir: ' + (valor / valor2 ))
            break
        default:
            console.log('Operador inválido!')
    }

}
calculadora(3,'+',5)
calculadora(10,'-',5)
calculadora(3,'*',5)
calculadora(25,'/',5)
calculadora(40,'^', 10)