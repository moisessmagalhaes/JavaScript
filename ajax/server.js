const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // Prover os arquivos estáticos
app.use(bodyParser.urlencoded({ extended: true})) // Receber os dados via submit de um formulário
app.use(bodyParser.json()) // Transformar o JSON em objeto

const multer = require('multer')

const storage = multer.diskStorage({ // diskStorage - serve para personalizar o objeto
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Upload realizado com sucesso...')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // tudo que veio na resposta, será jogado no novo objeto que será devolvido
        id: 1
    })
})

app.get('/parOuImpar', (req, res) =>{
    /* formas de chamar o parâmetro: 
        req.body - No corpo
        req.query - parOuImpar?numero=id
        req.params  - parOuImpar/:numero - parOuImpar/id*/
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
    
})
// app.get('/teste', (req,res) => res.send(new Date)) // Função middleware
app.listen(8080, () => console.log('Executando...'))