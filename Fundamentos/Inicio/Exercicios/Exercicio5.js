function formatarMoeda(valorDecimal){    
    valorReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorReais)
}
formatarMoeda(0.1 + 0.4)