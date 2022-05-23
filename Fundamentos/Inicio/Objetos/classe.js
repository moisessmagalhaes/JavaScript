class lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome // adicionar ao objeto
        this.valor = valor // adicionar ao objeto
    }
} 

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { // operador (...) aceita parâmetros variados
        lancamentos.forEach(l => this.lancamentos.push(l))
    
    }

    sumario() {
        let valorConsolidado = 0
            this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salario', 10000)
const contaDeLuz = new lancamento('Luz', -220)

const contas = new cicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())
