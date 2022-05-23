// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { } // é obrigatório o bloco

// Armazenar em uma variável
const fun2 = function() { } // função anonima

// Armazenar em um array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[0](1, 3))

// Armazenazer em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function() {console.log('Aguardando...')})

// Uma função pode retornar/conter outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(3,5)(1)
const cincoMais = soma(3,3)
cincoMais(4)