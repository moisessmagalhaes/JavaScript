function avaliarAluno(nota){
    let notaCorrigida = arredondar(nota)
    if(nota < 0 || nota > 100){
        console.log(`Nota: ${nota} Inválida!`)
    }
    else if(notaCorrigida >= 40){
        console.log(`Aluno APROVADO - nota: ${notaCorrigida}`)
    } else {
        console.log(`Aluno REPROVADO - nota: ${notaCorrigida}`)
    }
}

function arredondar(nota){
    if(nota < 38) {
        return nota
    } else if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else{
        return nota
    }
}

avaliarAluno(101)
avaliarAluno(-10)
avaliarAluno(37)
avaliarAluno(38)
avaliarAluno(100)
avaliarAluno(83)

/*function avaliarAluno(nota = 0){
    if(nota < 3.8){
        console.log(`Nota: ${nota} - Aluno Reprovado`)
    } else{
        console.log(`Nota: ${Math.ceil(nota)} - Aluno Reprovado`)
    }
}
avaliarAluno(4.6)*/


