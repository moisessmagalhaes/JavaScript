function calcularMediaAluno(codigo, nota1, nota2, nota3) {
    let mediaPonderada = ((4 * nota1) + (3 * nota2) + (3 * nota3)) / 10
    if(mediaPonderada >= 5){
        console.log(`Codigo: ${codigo}, nota1: ${nota1}, nota2: ${nota2}, nota3: ${nota3}, situação: APROVADO, média: ${mediaPonderada}`)
    } else {
        console.log(`Codigo: ${codigo}, nota1: ${nota1}, nota2: ${nota2}, nota3: ${nota3}, situação: REPROVADO, média: ${mediaPonderada}`)
    } 
    
}

calcularMediaAluno(123, 2.8, 6, 3.5)
calcularMediaAluno(10,6,8,7)
calcularMediaAluno(10,10,10,10)


function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
  //  notas.sort((a,b) => a < b ? 1 : -1) - essa função está dando erro no cálculo do resultado

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

    console.log(`Código do aluno: ${codAluno}, Nota1: ${nota1}, Nota2: ${nota2}, Nota3: ${nota3}, 
    Média final: ${mediaFinal}, Situação:  ${mediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)