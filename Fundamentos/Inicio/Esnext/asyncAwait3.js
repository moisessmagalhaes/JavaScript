function gerarNumeroEntre(min, max, numerosProibidos) {
    if( min > max) [max, min] = [min, max]
        return new Promise((resolve, reject) => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            if(numerosProibidos.includes(aleatorio)) {
                reject('Números repetidos')
            } else {
                resolve(aleatorio)                
            }
        })    
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
           numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros // Quando retorna um valor, resolve a promise
    } catch(e) {
        if(tentativas > 10) {
            throw ('Não deu certo!') // Quando lança uma exceção está rejeitando o promise
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
        
    }
  
}

gerarMegaSena(15)
    .then(console.log) // Quando usa uma função async precisa chamar o .then
    .catch(console.log)

/*erarNumeroEntre(1, 5, [1,2,4])
    .then(console.log)
    .catch(console.log)*/
