/*function pessoa() {
    this.idade = 0 

    const self = this
    setInterval(function() { // função anônima
        this.idade++
        console.log(this.idade)
    }/*.bind(this), 1000)
}

new pessoa*/

function pessoa() {
    this.idade = 0 

    const self = this
    setInterval(function() { // temporizador - dispara outra função a partir do intervalo que foi passado
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa