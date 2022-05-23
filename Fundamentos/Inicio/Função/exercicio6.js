// função 
// nome da função
// parametros de entrada.
// processamento da funçao
// resultado ou saídas da função
// valores de entrada

function juroSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo)    
}
 
function juroComposto(capital, taxa, tempo) {
       return capital * (1 + taxa) ** tempo       
}

console.log('Exercicío')
console.log('Juros Simples: R$ ' + juroSimples(100.00, 10/100, 2))
console.log('Juros Compostos: R$ ' + juroComposto(100.00, 10/100, 2))

console.log('')
console.log('Correção exercício')
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));