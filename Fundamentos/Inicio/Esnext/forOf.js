// Percorre o array ou objeto em cima de valors
for( let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for(let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma) { // Percorre o array em cima de valores
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}], // primeira parte chave, segunda parte valor
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap){ // Retorna o array com chaves e valor
    console.log(assunto)
}

for(let chave of assuntosMap.keys()) { // retorna apenas as chaves
    console.log(chave)
}

for(let valor of assuntosMap.values()) { // retorna apenas os valors
    console.log(valor)
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}