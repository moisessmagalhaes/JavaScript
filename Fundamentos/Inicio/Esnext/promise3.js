// Utilizando callback
setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {setTimeout
        console.log('Executando callback2...')
    }, 2000)
}, 2000)


// Utilizando Promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise')
            resolve('Vishhhhhh')
        }, tempo)
    })
}

esperarPor(3000).then(texto => console.log(texto))