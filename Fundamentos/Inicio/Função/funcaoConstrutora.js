function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadadeAtual = 0

    // método público
    this.acelerar = function() { // this -> transforma a função em pública
        if(velocidadadeAtual + delta <= velocidadeMaxima) {
            velocidadadeAtual += delta
        } else {
            velocidadadeAtual = velocidadeMaxima
        }
    }

    // Método público
    this.getVelocidadadeAtual = function() { // this torna a função pública
        return velocidadadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log('Velocidade do Uno')
console.log(uno.getVelocidadadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log('Velocidade da Ferrari')
console.log(ferrari.getVelocidadadeAtual())


