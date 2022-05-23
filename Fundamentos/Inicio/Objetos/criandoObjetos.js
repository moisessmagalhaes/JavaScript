// USANDO A NOTAÇÃO LITERAL
const obj1 = {}
console.log(obj1)

// OBJECT EM JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// FUNÇÕES CONSTRUTORAS
function produto(nome, preco, desc) { // atributos internos, acessível apenas pela função
    this.nome = nome // this -> torna o objeto público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 7.00, 0.15)
const p2 = new produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// FUNÇÃO FACTORY - É um padrão de projeto, é uma função que fabrica alguma coisa.
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Moisés', 10000, 3)
const f2 = criarFuncionario('Lilian', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

// OBJECT.CREATE
const filha = Object.create(null)
filha.nome = 'Vitória'
console.log(filha)

// FUNÇÃO QUE RETORNA UM OBJETO
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)