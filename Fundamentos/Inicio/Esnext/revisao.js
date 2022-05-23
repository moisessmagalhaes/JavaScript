// let e const
{
    var a = 2 // tem escopo global
    let b = 3 // tem escopo de bloco
    console.log(b)
}
console.log(a)

// template string
const produto = 'Ipad'
console.log(`${produto} é caro!`) // interpolado, interpretado o valor da variável e vai ser subustituido pelo valor final


// Destructuring - Pode desestruturar, tirar de dentro de um objeto, array, alguma informação.
const [l, e, ...tras] = "Cod3r" // ... - Operador Rest - a letra: C, vai ser atribuida para variável l, a letra: o, para variável: e, e o restantes para: tras
console.log(l, e, tras)

// Destructuring - Array
const [x, , y] = [1, 2, 3]
console.log(x,y)

// Destructuring - Objeto
const { nome, idade, genero, ...informacoes } = { nome: 'Ana', idade: 29, genero: 'F', nacionalidade: 'Brasileira', uf: 'GO', cidade: 'Goiânia' }
console.log(`
            Nome: ${nome}
            Idade: ${idade}
            Genero: ${genero}
            informações: ${informacoes}`)