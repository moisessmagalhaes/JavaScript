function pagarPlanoSaude(idade) {
    if(idade < 10) {
        console.log('Plano até 10 anos: R$ ' + (100 + 80))
    } else if( idade >= 10 && idade <= 30) {
        console.log('Plano entre 10 anos e 30 anos: R$ ' + (100 + 50))
    } else if(idade > 30 && idade <= 60) {
        console.log('Plano acima de 30 anos até 60: R$ ' + (100 + 95))
    } else if(idade > 60){
        console.log('Plano acima de 60 anos: R$ ' + (100 + 130))
    }
}

pagarPlanoSaude(8)
pagarPlanoSaude(30)
pagarPlanoSaude(60)
pagarPlanoSaude(61)
