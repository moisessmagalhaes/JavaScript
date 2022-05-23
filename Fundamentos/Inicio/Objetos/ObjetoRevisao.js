// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'Range rover',
    valor: 89000,
    proprietario: {
        nome: 'Moisés',
        idade: 49,
        endereco: {
            logradouro: 'Rua do Trabalho',
            numero: 440,
            complemento: 'Apto 302-M - Condominio Palmares'
        }

    },
    condutores: [{
        nome: 'Lilian',
        idade: 38
        }, {
        nome: 'Moisés',
        idade: 49   
        }],
    calcularValorSeguro(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['numero'] = 'Avenida Goiás'
console.log(carro)
console.log(carro.condutores)
console.log(carro.proprietario)
console.log(carro.condutores.length)

// delete carro.proprietario.endereco -> Deleta tudo que está dentro do endereço.
// delete carro.calcularValorSeguro -> Deleta a função calcularValorSeguro()