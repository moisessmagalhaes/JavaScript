const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// __proto__ -Forma de acessar o atributo dentro do objeto
console.log(ferrari.prototype)
console.log(ferrari.__proto__) //  prototype de mais alto nível - vai procurar em uma cas cadeias de prototipos
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)