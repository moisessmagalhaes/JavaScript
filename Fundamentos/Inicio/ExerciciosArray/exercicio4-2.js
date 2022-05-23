 function retornarNomeDoMes(mes){
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    return mapeamento[--mes]
}

console.log(retornarNomeDoMes(12))


function retornarNomeDiaSemana(dia){
    mapeamentoDias = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sábado']
    return `Dia = ${dia} - ${mapeamentoDias[--dia]}`
}
console.log(retornarNomeDiaSemana(7))