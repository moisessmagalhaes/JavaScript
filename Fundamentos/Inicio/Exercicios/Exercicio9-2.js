function classificarAluno(nota){
    let notaArredondada = arredondarNota(nota)
    if(nota < 0 || nota > 100){
        console.log(`Nota: ${nota} Inválida!`)
    }else if(notaArredondada >= 40){
        console.log(`Aluno APROVADO - nota: ${notaArredondada}`)
    }else {
        console.log(`Aluno REPROVADO nota: ${notaArredondada}`)
    }
}

function arredondarNota(nota){
    if(nota < 38){
        return nota
    } else if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificarAluno(101)
classificarAluno(-1)
classificarAluno(100)
classificarAluno(88)
classificarAluno(83)
classificarAluno(40)
classificarAluno(38)
classificarAluno(37)
classificarAluno(27)