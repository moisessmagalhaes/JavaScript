// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso!
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super() usar a função dentro deste objeto
    }
}

Object.setPrototypeOf(ferrari,carro) // setPrototype - estabelece uma relação de função entre dois objetos
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelarMais(80)
console.log(volvo.status())

ferrari.acelarMais(250)
console.log(ferrari.status())