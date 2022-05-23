function comprarFruta(fruta){
    switch (fruta){
        case 'maça':
            console.log(`"${fruta}" - Não vendemos esta fruta aqui.`)
            break
        case 'kiwi':
            console.log(`"${fruta}" - Estamos com escassez kiwi.`)
            break
        case 'melancia':
        console.log(`"${fruta}" - Aqui está, são 3 reais o quilo.`)
            break
        default:
            console.log(`"${fruta}" - Erro, fruta inválida.`)         
    }
} 
console.log(comprarFruta('maça'))