function diaSemana(dia){
    if(dia == "Domingo"){
       return dia = 1
    } else if(dia == "Segunda"){
        return dia = 2
    } else if(dia == "Terça"){
        return dia = 3
    } else if(dia == "Quarta"){
        return dia = 4
    } else if(dia == "Quinta"){
        return dia = 5
    } else if(dia == "Sexta"){
        return dia = 6
    }  else if(dia == "Sabado") {
        return dia = 7
    } else {
        return dia = 'Dia Inválido'
    }
}

function ExibirDiaUtil(dia){
dia = diaSemana(dia)
switch(dia){
    case 1:
    case 7:
       console.log(`Dia: ${dia} - Fim de semana`)
       break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log(`Dia: ${dia} - Dia útil`)
        break
    default:
        console.log('Dia inválido!')
}
}


ExibirDiaUtil("Domingo")
ExibirDiaUtil("Segunda")
ExibirDiaUtil("Terça")
ExibirDiaUtil("Quarta")
ExibirDiaUtil("Quinta")
ExibirDiaUtil("Sexta")
ExibirDiaUtil("Sabado")


