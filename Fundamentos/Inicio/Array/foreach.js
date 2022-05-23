const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome,indice) { // O índice sempre é passado como segundo parámetro
    console.log(`${indice + 1 }) ${nome}`)
}) 

aprovados.forEach(nome => console.log(nome)) // função arrow

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

aprovados.forEach(function(nome,indice, array) { // a função callback recebe 3 parâmetros
    console.log(`${indice + 1 }) ${nome}`)
    console.log(array)
}) 