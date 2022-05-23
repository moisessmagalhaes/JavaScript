function pagarAnuidade(mes, valor) {
    //let data = new Date()
    //let mesAtual = data.getMonth()
    if(mes == 1) {
        console.log('Valor R$: ' + valor)
    } else {
        console.log('Valor R$: ' + (valor * (1 + (5/100)) ** (mes-1)).toFixed(2))
    }
}

pagarAnuidade(5, 50)

function calcularValor(mes, valor) {
    atraso = mes -1
    if(mes > 0 && mes < 13) {
        console.log('Valor R$: ' + (valor * (1 + (5/100)) ** atraso).toFixed(2))
    } else {
         console.log('Mês inválido!')
    }
}

calcularValor(0,100)
calcularValor(1,100)
calcularValor(4,100)
