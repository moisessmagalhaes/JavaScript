const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Pega os dados do corpo da requisição

app.use(bodyParser.urlencoded({ extended: true})) // Lê o corpo da requisição

app.post('/usuarios', (req, resp) => {
    console.log(req.body) // Verificar o que chegou no corpo da requisição
    resp.send('<h1>Parabéns, Usuário Incluído!</h1>') // Envia a resposta ao usuário
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body) // Verificar o que chegou no corpo da requisição
    resp.send('<h1>Parabéns, Usuário Alterado!</h1>') // Envia a resposta ao usuário
})

app.listen(3003)