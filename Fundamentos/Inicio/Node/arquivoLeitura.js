const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Leitura em modo sincrono - Enquanto não finalizar toda leitura não libera o arquivo
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Leitura em modo assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // transformar de string para objeto
    console.log(`${config.db.host}: ${config.db.port}`) // interpolar a mensagem na tela
})

const config = require('./arquivo.json')
console.log(config.db)

//Leitura dos arquivos do diretorio
fs.readdir(__dirname, (err, arquivos) => { // __dirname - diretorio atual
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
}) 