class avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class pai extends avo { // extends - passa a classe avo como herança
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // chama o construtor da classe pai(avo)
        this.profissao = profissao
    } 

}

class filho extends pai {
    constructor() {
        super('Silva')
    }
}

const Filho = new filho
console.log(Filho)