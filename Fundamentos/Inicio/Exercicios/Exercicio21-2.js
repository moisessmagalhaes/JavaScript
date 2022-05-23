function calcularPreco(idade) {
    if(idade < 10) {
        console.log('Plano até 10 anos: R$ 180,00')
    } else if(idade <= 30){
        console.log('Plano entre 10 anos e 30 anos: R$ 150,00')
    } else if(idade <= 60){
        console.log('Plano acima de 30 anos até 60: R$ 195,00')
    } else {
        console.log('Plano acima de 60 anos: R$ 230,00')
    }
}

calcularPreco(8)
calcularPreco(10)
calcularPreco(40)
calcularPreco(70)