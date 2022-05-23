// Função construtora
function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj = new meuObjeto // usando o new aponta para o objeto
const obj2 = new meuObjeto
console.log(obj.__proto__ === obj2.__proto__) // obj e obj2 apontam para o meu objeto: meuObjeto
console.log(meuObjeto.prototype === obj.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

// Resumo
console.log((new meuObjeto).__proto__ === meuObjeto.prototype) // true
console.log(meuObjeto.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)