function classificaAluno(nota){
    let notaCorrigida = arredonar(nota)
    if(notaCorrigida >= 40) {
        console.log(`Aprovado com nota: ${notaCorrigida}`)
    } else {
     console.log(`Reprovado com nota:  ${notaCorrigida}`)
    }    
}

function arredonar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else{
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)