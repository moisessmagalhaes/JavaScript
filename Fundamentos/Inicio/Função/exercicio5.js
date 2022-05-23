function formatarValorDecimal(valor){ // função e parâmetros de entrada
    valorEmReais = `R$ ${valor.toFixed(2).toString().replace(".",",")}` // calculo da funçao
    console.log(valorEmReais) // valores de saída.
}

formatarValorDecimal(0.2 + 0.4)

/*
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)*/

// função 
// nome da função
// parametros de entrada.
// processamento da funçao
// resultado ou saídas da função
// valores de entrada

// recapitulando.
console.log('')
console.log('Recapitulando...')
function // comando
formatarValorMoeda // nome da função
(valor)  //  parametros de entrada.
{
    moeda = `R$ ${valor.toFixed(2).toString().replace(".", ",")}` // processamento
    console.log('Valor ' + moeda)    // saída
}

formatarValorMoeda(0.4 * 0.1) // valores de entrada
formatarValorMoeda(0.4 + 0.1)
formatarValorMoeda(1.000 + 0.30)  