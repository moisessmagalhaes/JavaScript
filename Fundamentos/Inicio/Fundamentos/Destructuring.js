// Novo recurso ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Do Trabalho',
        numero: 1000,
        bairro: 'Central',
        cidade: 'Goiânia',
        cep: 74430450
    }
}

console.log(pessoa);

const { nome, idade} = pessoa;  // Extrair os atributos nome e idade do objeto pessoa
console.log(nome,idade);

const { nome: n, idade: i } = pessoa;  // Atribuindo outro nome a variavel nome e idade
console.log(n,i);

const { sobrenome, bemhumorada = false} = pessoa;
console.log(sobrenome, bemhumorada);

const { endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);