const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
]

// IMPERATIVO - Faz o passo a passo, como fazer.
let total1 = 0
for(let i = 0; i < alunos.length; i++) { // i -> variável de controle
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// DECLARATIVO - Diz o que fazer, internamente as coisas acontecem.
const getNota = aluno => aluno.nota // Método getNota -> pode ser reutilizado.
const soma = (total, atual) => total + atual // Método soma -> pode ser reutilizado.
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)