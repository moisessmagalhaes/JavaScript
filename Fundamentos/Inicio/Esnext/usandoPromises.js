// Com promise
const http = require('http')

const getTurma = letra  => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
               try {
                resolve(JSON.parse(resultado))
               } catch(e) {
                   reject(e)
               }
            })
    
        })
    })
}
/*
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})*/


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // Array de funções que retornam um promise
    .then(turmas => [].concat(...turmas)) // coloca cada resultado dentro do seu elemento
    .then(alunos => alunos.map(aluno => aluno.nome)) // Pega a lista de todos os alunos e retorna o nome de cada aluno
    .then(nomes => console.log(nomes)) // Chama o array de nomes e imprime no console
    .catch(e => console.log(e.message))
   
getTurma('D').catch(e => console.log(e.message))