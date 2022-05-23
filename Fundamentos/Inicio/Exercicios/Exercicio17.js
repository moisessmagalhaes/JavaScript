function planoTrabalho(salario, plano){
    switch(plano){
        case 'A':
            console.log('Novo salário: ' + (salario * 1.10))
            break
        case 'B':
            console.log('Novo salário: ' + (salario * 1.15))
            break
        case 'C':
            console.log('Novo salário: ' + (salario * 1.20))
            break
        default:
            console.log('Plano inválido!')
    } 
}
planoTrabalho(2000, 'A')
planoTrabalho(3000, 'B')
planoTrabalho(4000, 'C')
planoTrabalho(1000, 'D')