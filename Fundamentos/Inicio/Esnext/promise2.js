let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

p.then(function(valor) {
    console.log(valor)
})

// Passar mais de um parâmetro, objeto ou array
let p1 = new Promise(function(cumprirPromessa) {
    cumprirPromessa( [{
        x: 4,
        y: 3
    }])
})

p1.then(function(valor) {
    console.log(valor)
})

// Passar um array
let p2 = new Promise(function(cumprirPromessa) {
    cumprirPromessa( cumprirPromessa( ['Ana', 'Bia', 'Carlos']))
})

p2.then(function(valor) {
    console.log(valor)
})

// Usando arrow function
let p3 = new Promise(function(cumprirPromessa) {
    cumprirPromessa( cumprirPromessa( ['Ana', 'Bia', 'Carlos']))
})

p3.then(valor =>  console.log(valor))

// Chamar o método .then várias vezes
// Usando arrow function
let p4 = new Promise(function(cumprirPromessa) {
    cumprirPromessa( cumprirPromessa( ['Ana', 'Bia', 'Carlos']))
})

p4.then(valor =>  console.log(valor))
.then()
.then()
.then()

// Pegar elementro indice[0]
let p5 = new Promise(function(cumprirPromessa) {
    cumprirPromessa( cumprirPromessa( ['Ana', 'Bia', 'Carlos']))
})

p5.then(valor =>  valor[2])
  .then(valor =>  console.log(valor))

// Pegar a primeira letra do primeiro elemento
let p6 = new Promise(function(cumprirPromessa) {
    cumprirPromessa( cumprirPromessa( ['Ana', 'Bia', 'Carlos']))
})

p6.then(valor =>  valor[0]) // o resultado de método then é passado para o prõximo método then
  .then(primeiro =>  primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(letraMinuscula => console.log(letraMinuscula))

// Passando uma função para o método then
let p7 = new Promise(function(resolve) {
    resolve( resolve( ['Ana', 'Bia', 'Carlos']))
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p7.then(primeiroElemento) // o resultado de método then é passado para o prõximo método then
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log)

  
  // Transformando funções em arrow function
let p8 = new Promise(function(resolve) {
    resolve( resolve( ['Ana', 'Bia', 'Carlos']))
})

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinuscula1 = letra => letra.toLowerCase()

p8.then(primeiroElemento) // o resultado de método then é passado para o prõximo método then
  .then(primeiraLetra)
  .then(letraMinuscula1)
  .then(console.log)